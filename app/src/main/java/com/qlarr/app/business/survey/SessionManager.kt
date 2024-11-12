package com.qlarr.app.business.survey

import com.qlarr.app.BuildConfig
import com.qlarr.app.api.auth.LoginResponse
import com.qlarr.app.business.settings.SharedPrefsManager
import java.net.MalformedURLException
import java.net.URL

interface SessionManager {
    fun getActiveToken(): String?
    fun getRefreshToken(): String?
    fun getUserIdOrThrow(): String
    fun saveSession(loginResponse: LoginResponse)
    fun saveUserAsGuest()
    fun saveEnv(environment: BackendEnvironment)
    fun isGuest(): Boolean
    fun env(): BackendEnvironment?

}

class SessionManagerImpl(private val sharedPrefsManager: SharedPrefsManager) : SessionManager {
    override fun getActiveToken(): String? = sharedPrefsManager.activeToken

    override fun getRefreshToken(): String? = sharedPrefsManager.refreshToken
    override fun getUserIdOrThrow(): String = sharedPrefsManager.userId
        ?: throw IllegalStateException("User id is null")

    override fun saveSession(loginResponse: LoginResponse) {
        sharedPrefsManager.userId = loginResponse.id
        sharedPrefsManager.activeToken = loginResponse.activeToken
        sharedPrefsManager.refreshToken = loginResponse.refreshToken
    }

    override fun saveUserAsGuest() {
        sharedPrefsManager.isGuest = true
        sharedPrefsManager.env = BackendEnvironment.SAAS
    }

    override fun saveEnv(environment: BackendEnvironment) {
        sharedPrefsManager.isGuest = false
        sharedPrefsManager.env = environment
    }

    override fun isGuest(): Boolean {
        return sharedPrefsManager.isGuest
    }

    override fun env(): BackendEnvironment? {
        return sharedPrefsManager.env
    }

}

sealed class BackendEnvironment(open val baseUrl: String) {
    data object SAAS : BackendEnvironment(baseUrl = BuildConfig.CLOUD_SERVER_URL)
    data class Private(override val baseUrl: String) : BackendEnvironment(baseUrl = baseUrl)

    fun toSharedPrefsString(): String {
        return when (this) {
            is SAAS -> "SAAS"
            is Private -> baseUrl
        }
    }

    companion object {
        fun fromSharedPrefsString(value:String?): BackendEnvironment? {
            return when {
                value.isNullOrEmpty() -> null
                value == "SAAS" -> SAAS
                isValidUrl(value) -> Private(value)
                else -> null
            }
        }
    }
}

fun isValidUrl(url: String): Boolean {
    return try {
        URL(url)
        true
    } catch (e: MalformedURLException) {
        false
    }
}
