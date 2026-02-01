package com.qlarr.app.business.survey

import com.qlarr.app.api.auth.LoginResponse
import com.qlarr.app.business.guest.GuestSurveyRepository
import com.qlarr.app.business.settings.SharedPrefsManager
import okhttp3.HttpUrl.Companion.toHttpUrl

interface SessionManager {
    fun getActiveToken(): String?

    fun getRefreshToken(): String?

    fun getUserIdOrThrow(): String

    fun saveSession(loginResponse: LoginResponse)
    fun sameUser(loginResponse: LoginResponse): Boolean

    fun saveUserAsGuest()

    fun saveEnv(environment: BackendEnvironment)

    fun isGuest(): Boolean

    fun env(): BackendEnvironment?
    fun clearPrefs()
    fun hasPreviousSession(): Boolean
    fun getPreviousUserName(): String?
    fun getPreviousEnv(): BackendEnvironment?
}

class SessionManagerImpl(
    private val sharedPrefsManager: SharedPrefsManager,
) : SessionManager {
    override fun getActiveToken(): String? = sharedPrefsManager.activeToken

    override fun getRefreshToken(): String? = sharedPrefsManager.refreshToken

    override fun getUserIdOrThrow(): String =
        sharedPrefsManager.userId
            ?: throw IllegalStateException("User id is null")

    override fun saveSession(loginResponse: LoginResponse) {
        sharedPrefsManager.userId = loginResponse.id
        sharedPrefsManager.lastUserName = "${loginResponse.firstName} ${loginResponse.lastName}"
        sharedPrefsManager.activeToken = loginResponse.activeToken
        sharedPrefsManager.refreshToken = loginResponse.refreshToken
    }

    override fun sameUser(loginResponse: LoginResponse): Boolean {
        return sharedPrefsManager.userId == loginResponse.id
    }

    override fun saveUserAsGuest() {
        sharedPrefsManager.isGuest = true
        sharedPrefsManager.env = BackendEnvironment.Guest
    }

    override fun saveEnv(environment: BackendEnvironment) {
        sharedPrefsManager.isGuest = false
        sharedPrefsManager.env = environment
    }

    override fun isGuest(): Boolean = sharedPrefsManager.isGuest

    override fun env(): BackendEnvironment? = sharedPrefsManager.env
    override fun clearPrefs() {
        sharedPrefsManager.clear()
    }

    override fun hasPreviousSession(): Boolean {
        val hasEnv = sharedPrefsManager.env != null
        val hasUserId = !sharedPrefsManager.userId.isNullOrEmpty()
        val hasNoTokens = sharedPrefsManager.activeToken.isNullOrEmpty()
        return (hasEnv || hasUserId) && hasNoTokens
    }

    override fun getPreviousUserName(): String? = sharedPrefsManager.lastUserName

    override fun getPreviousEnv(): BackendEnvironment? = sharedPrefsManager.env
}

sealed class BackendEnvironment(
    open val baseUrl: String,
) {
    data object Guest :
        BackendEnvironment(baseUrl = "file:///android_asset/${GuestSurveyRepository.BASE_PATH}")

    data class Private(
        override val baseUrl: String,
    ) : BackendEnvironment(baseUrl = baseUrl)

    fun toSharedPrefsString(): String =
        when (this) {
            is Guest -> "GUEST"
            is Private -> baseUrl
        }

    companion object {
        fun fromSharedPrefsString(value: String?): BackendEnvironment? =
            when {
                value.isNullOrEmpty() -> null
                value == "GUEST" -> Guest
                isValidUrl(value) -> Private(value)
                else -> null
            }
    }
}

fun isValidUrl(url: String): Boolean =
    try {
        url.toHttpUrl()
        true
    } catch (_: IllegalArgumentException) {
        false
    }
