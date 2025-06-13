package com.qlarr.app.api

import android.util.Log
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.qlarr.app.BuildConfig
import com.qlarr.app.business.auth.RefreshTokenUseCase
import com.qlarr.app.business.survey.SessionManager
import kotlinx.coroutines.runBlocking
import okhttp3.HttpUrl
import okhttp3.HttpUrl.Companion.toHttpUrl
import okhttp3.Interceptor
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.jackson.JacksonConverterFactory
import java.util.concurrent.TimeUnit

object RetrofitProvider {
    fun retrofitPublicEndpoints(sessionManager: SessionManager): Retrofit =
        getRetrofit(
            DUMMY_URL,
            getHttpClientBuilder(60)
                .addInterceptor(
                    BaseUrlInterceptor {
                        sessionManager.env()?.baseUrl
                    },
                ).build(),
        )

    fun retrofitAuthenticatedEndpoints(
        sessionManager: SessionManager,
        refreshTokenUseCase: RefreshTokenUseCase,
        callTimeout: Long = 30,
    ): Retrofit {
        val httpClient =
            getHttpClientBuilder(callTimeout)
                .addInterceptor(
                    BaseUrlInterceptor {
                        sessionManager.env()?.baseUrl
                    },
                ).addInterceptor { chain ->
                    val original = chain.request()
                    val requestBuilder =
                        original
                            .newBuilder()
                            .method(original.method, original.body)

                    sessionManager.getActiveToken()?.let {
                        requestBuilder.header("Authorization", "Bearer $it")
                    }

                    val request = requestBuilder.build()

                    val response = chain.proceed(request)
                    if (response.code != 401) {
                        return@addInterceptor response
                    }
                    val refreshToken =
                        sessionManager.getRefreshToken() ?: return@addInterceptor response
                    val activeToken =
                        sessionManager.getActiveToken() ?: return@addInterceptor response

                    val newTokenResult =
                        runBlocking {
                            refreshTokenUseCase(refreshToken, activeToken)
                        }
                    if (newTokenResult.isSuccess) {
                        val newRequest =
                            original
                                .newBuilder()
                                .header("Authorization", "Bearer ${newTokenResult.getOrNull()}")
                                .method(original.method, original.body)
                                .build()
                        chain.proceed(newRequest)
                    } else {
                        response
                    }
                }.build()
        return getRetrofit(DUMMY_URL, httpClient)
    }

    private fun getRetrofit(
        baseUrl: String,
        httpClient: OkHttpClient,
    ) = Retrofit
        .Builder()
        .baseUrl(baseUrl)
        .addConverterFactory(
            JacksonConverterFactory.create(
                ObjectMapper().registerModule(
                    JavaTimeModule(),
                ),
            ),
        ).client(httpClient)
        .build()

    private fun getHttpClientBuilder(callTimeout: Long): OkHttpClient.Builder {
        val httpClient = OkHttpClient.Builder()
        BuildConfig.BUILD_TYPE
        if (BuildConfig.DEBUG) {
            val httpLoggingInterceptor = HttpLoggingInterceptor()
            httpLoggingInterceptor.level =
                HttpLoggingInterceptor.Level.BODY
            httpClient.networkInterceptors().add(httpLoggingInterceptor)
        }
        httpClient.callTimeout(callTimeout, TimeUnit.SECONDS)
        httpClient.readTimeout(0, TimeUnit.SECONDS)
        httpClient.writeTimeout(0, TimeUnit.SECONDS)
        httpClient.connectTimeout(0, TimeUnit.SECONDS)
        return httpClient
    }
}

// Following https://github.com/square/retrofit/issues/2161#issuecomment-274204152
class BaseUrlInterceptor(
    var urlConfigHolder: () -> String?,
) : Interceptor {
    override fun intercept(chain: Interceptor.Chain): okhttp3.Response {
        var request = chain.request()
        val builder = request.newBuilder()
        urlConfigHolder()?.let {
            adjustBaseUrl(request.url)?.let {
                request = builder.url(it).build()
            }
        }
        Log.d("BaseUrlInterceptor", "Request URL: ${request.url}")
        return chain.proceed(request)
    }

    private fun adjustBaseUrl(url: HttpUrl): HttpUrl? =
        urlConfigHolder()?.let {
            val newUrl = (it + url.encodedPath).toHttpUrl()
            Log.d("BaseUrlInterceptor", "Request URL: $newUrl")
            newUrl
        }
}

private const val DUMMY_URL = "http://this-will-be-intercepted"
