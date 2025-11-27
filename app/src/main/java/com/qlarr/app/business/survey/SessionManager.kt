package com.qlarr.app.business.survey

import android.util.Log
import androidx.compose.ui.text.toLowerCase
import com.qlarr.app.api.auth.LoginResponse
import com.qlarr.app.business.guest.GuestSurveyRepository
import com.qlarr.app.business.settings.SharedPrefsManager
import com.qlarr.app.ui.login.Roles
import okhttp3.HttpUrl.Companion.toHttpUrl
import java.util.Locale
import java.util.Locale.getDefault

interface SessionManager {
    fun getActiveToken(): String?

    fun getRefreshToken(): String?

    fun getUserIdOrThrow(): String

    fun saveSession(loginResponse: LoginResponse)

    fun saveUserAsGuest()

    fun saveEnv(environment: BackendEnvironment)

    fun isGuest(): Boolean

    fun env(): BackendEnvironment?

    fun isSupervisor(): Boolean
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
        sharedPrefsManager.activeToken = loginResponse.activeToken
        sharedPrefsManager.refreshToken = loginResponse.refreshToken
        sharedPrefsManager.roles = loginResponse.roles
    }

    override fun saveUserAsGuest() {
        sharedPrefsManager.isGuest = true
        sharedPrefsManager.env = BackendEnvironment.Guest
    }

    override fun saveEnv(environment: BackendEnvironment) {
        sharedPrefsManager.isGuest = false
        sharedPrefsManager.env = environment
    }

    override fun isSupervisor(): Boolean {
        Log.e("roles", sharedPrefsManager.roles.joinToString())
        val reviewerRoles = listOf(Roles.SUPERVISOR, Roles.SUPER_ADMIN, Roles.SURVEY_ADMIN)
            .map { it.name.lowercase(getDefault()) }
        return sharedPrefsManager.roles.any { reviewerRoles.contains(it) }
    }

    override fun isGuest(): Boolean = sharedPrefsManager.isGuest

    override fun env(): BackendEnvironment? = sharedPrefsManager.env
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
    } catch (e: IllegalArgumentException) {
        false
    }
