package com.qlarr.app.api

import com.qlarr.app.api.auth.LoginResponse
import com.qlarr.app.business.auth.RefreshTokenUseCase
import com.qlarr.app.business.survey.BackendEnvironment
import com.qlarr.app.business.survey.SessionManager
import okhttp3.Call
import okhttp3.Connection
import okhttp3.Interceptor
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.Protocol
import okhttp3.Request
import okhttp3.Response
import okhttp3.ResponseBody.Companion.toResponseBody
import org.junit.Assert.assertEquals
import org.junit.Test
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicInteger

class AuthInterceptorTest {
    @Test
    fun `parallel 401s trigger a single refresh and the others reuse the refreshed token`() {
        val sessionManager = FakeSessionManager(activeToken = "AT1", refreshToken = "RT1")
        val refreshTokenUseCase = FakeRefreshTokenUseCase(sessionManager)
        val interceptor = AuthInterceptor(sessionManager, refreshTokenUseCase)

        val threadCount = 5
        val allRequestsSent = CountDownLatch(threadCount)
        val chains =
            List(threadCount) {
                FakeChain(onFirstProceed = {
                    allRequestsSent.countDown()
                    allRequestsSent.await(10, TimeUnit.SECONDS)
                })
            }

        val threads = chains.map { chain -> Thread { interceptor.intercept(chain).close() } }
        threads.forEach { it.start() }
        threads.forEach { it.join(30_000) }

        assertEquals(1, refreshTokenUseCase.invocations.get())
        chains.forEach { chain ->
            assertEquals(listOf("Bearer AT1", "Bearer AT2"), chain.sentTokens)
        }
        assertEquals("RT2", sessionManager.storedRefreshToken)
    }

    @Test
    fun `a request whose token was refreshed meanwhile retries without refreshing again`() {
        val sessionManager = FakeSessionManager(activeToken = "AT1", refreshToken = "RT1")
        val refreshTokenUseCase = FakeRefreshTokenUseCase(sessionManager)
        val interceptor = AuthInterceptor(sessionManager, refreshTokenUseCase)
        val chain =
            FakeChain(onFirstProceed = {
                sessionManager.storedActiveToken = "AT2"
                sessionManager.storedRefreshToken = "RT2"
            })

        interceptor.intercept(chain).close()

        assertEquals(0, refreshTokenUseCase.invocations.get())
        assertEquals(listOf("Bearer AT1", "Bearer AT2"), chain.sentTokens)
    }

    @Test
    fun `a failed refresh returns the original 401 without retrying`() {
        val sessionManager = FakeSessionManager(activeToken = "AT1", refreshToken = "RT1")
        val refreshTokenUseCase = FakeRefreshTokenUseCase(sessionManager, succeeds = false)
        val interceptor = AuthInterceptor(sessionManager, refreshTokenUseCase)
        val chain = FakeChain()

        val response = interceptor.intercept(chain)

        assertEquals(401, response.code)
        assertEquals(1, refreshTokenUseCase.invocations.get())
        assertEquals(listOf("Bearer AT1"), chain.sentTokens)
    }

    @Test
    fun `a 401 with no stored refresh token is returned as is`() {
        val sessionManager = FakeSessionManager(activeToken = "AT1", refreshToken = null)
        val refreshTokenUseCase = FakeRefreshTokenUseCase(sessionManager)
        val interceptor = AuthInterceptor(sessionManager, refreshTokenUseCase)
        val chain = FakeChain()

        val response = interceptor.intercept(chain)

        assertEquals(401, response.code)
        assertEquals(0, refreshTokenUseCase.invocations.get())
        assertEquals(listOf("Bearer AT1"), chain.sentTokens)
    }

    @Test
    fun `a successful response is returned without refreshing`() {
        val sessionManager = FakeSessionManager(activeToken = "AT1", refreshToken = "RT1")
        val refreshTokenUseCase = FakeRefreshTokenUseCase(sessionManager)
        val interceptor = AuthInterceptor(sessionManager, refreshTokenUseCase)
        val chain = FakeChain(firstResponseCode = 200)

        val response = interceptor.intercept(chain)

        assertEquals(200, response.code)
        assertEquals(0, refreshTokenUseCase.invocations.get())
        assertEquals(listOf("Bearer AT1"), chain.sentTokens)
    }
}

private class FakeSessionManager(
    activeToken: String?,
    refreshToken: String?,
) : SessionManager {
    @Volatile
    var storedActiveToken: String? = activeToken

    @Volatile
    var storedRefreshToken: String? = refreshToken

    override fun getActiveToken(): String? = storedActiveToken

    override fun getRefreshToken(): String? = storedRefreshToken

    override fun getUserIdOrThrow(): String = "u1"

    override fun saveSession(loginResponse: LoginResponse) {
        storedActiveToken = loginResponse.activeToken
        loginResponse.refreshToken?.let { storedRefreshToken = it }
    }

    override fun sameUser(loginResponse: LoginResponse): Boolean = true

    override fun saveUserAsGuest() = Unit

    override fun saveEnv(environment: BackendEnvironment) = Unit

    override fun isGuest(): Boolean = false

    override fun env(): BackendEnvironment? = null

    override fun clearPrefs() {
        storedActiveToken = null
        storedRefreshToken = null
    }

    override fun hasPreviousSession(): Boolean = false

    override fun getPreviousUserName(): String? = null

    override fun getLastSuccessfulEnv(): BackendEnvironment? = null
}

private class FakeRefreshTokenUseCase(
    private val sessionManager: FakeSessionManager,
    private val succeeds: Boolean = true,
) : RefreshTokenUseCase {
    val invocations = AtomicInteger(0)

    override suspend fun invoke(
        refreshToken: String,
        activeToken: String,
    ): Result<String> {
        invocations.incrementAndGet()
        if (!succeeds) {
            return Result.failure(IllegalStateException("refresh failed"))
        }
        Thread.sleep(50)
        sessionManager.saveSession(
            LoginResponse(
                id = "u1",
                firstName = "Ada",
                lastName = "Lovelace",
                activeToken = "AT2",
                refreshToken = "RT2",
                email = "ada@example.com",
                roles = listOf("SURVEYOR"),
            ),
        )
        return Result.success("AT2")
    }
}

private class FakeChain(
    private val firstResponseCode: Int = 401,
    private val onFirstProceed: () -> Unit = {},
) : Interceptor.Chain {
    private val request =
        Request
            .Builder()
            .url("https://example.test/survey/offline")
            .build()

    private var proceedCount = 0
    val sentTokens = mutableListOf<String?>()

    override fun request(): Request = request

    override fun proceed(request: Request): Response {
        proceedCount++
        sentTokens.add(request.header("Authorization"))
        if (proceedCount == 1) {
            onFirstProceed()
            return responseWith(request, firstResponseCode)
        }
        return responseWith(request, 200)
    }

    private fun responseWith(
        request: Request,
        code: Int,
    ): Response =
        Response
            .Builder()
            .request(request)
            .protocol(Protocol.HTTP_1_1)
            .code(code)
            .message(if (code == 200) "OK" else "Unauthorized")
            .body("{}".toResponseBody("application/json".toMediaType()))
            .build()

    override fun connection(): Connection? = null

    override fun call(): Call = throw UnsupportedOperationException()

    override fun withConnectTimeout(
        timeout: Int,
        unit: TimeUnit,
    ): Interceptor.Chain = this

    override fun withReadTimeout(
        timeout: Int,
        unit: TimeUnit,
    ): Interceptor.Chain = this

    override fun withWriteTimeout(
        timeout: Int,
        unit: TimeUnit,
    ): Interceptor.Chain = this

    override fun connectTimeoutMillis(): Int = 0

    override fun readTimeoutMillis(): Int = 0

    override fun writeTimeoutMillis(): Int = 0
}
