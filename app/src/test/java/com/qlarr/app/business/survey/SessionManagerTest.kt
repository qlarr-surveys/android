package com.qlarr.app.business.survey

import com.qlarr.app.api.auth.LoginResponse
import com.qlarr.app.business.settings.SharedPrefsManager
import org.junit.Assert.assertEquals
import org.junit.Test

class SessionManagerTest {
    private val sharedPrefsManager = FakeSharedPrefsManager()
    private val sessionManager = SessionManagerImpl(sharedPrefsManager)

    @Test
    fun `a rotating refresh replaces both stored tokens`() {
        sharedPrefsManager.activeToken = "AT1"
        sharedPrefsManager.refreshToken = "RT1"

        sessionManager.saveSession(loginResponse(activeToken = "AT2", refreshToken = "RT2"))

        assertEquals("AT2", sharedPrefsManager.activeToken)
        assertEquals("RT2", sharedPrefsManager.refreshToken)
    }

    @Test
    fun `a grace refresh updates the active token and keeps the stored refresh token`() {
        sharedPrefsManager.activeToken = "AT1"
        sharedPrefsManager.refreshToken = "RT2"

        sessionManager.saveSession(loginResponse(activeToken = "AT3", refreshToken = null))

        assertEquals("AT3", sharedPrefsManager.activeToken)
        assertEquals("RT2", sharedPrefsManager.refreshToken)
    }

    @Test
    fun `a grace refresh on a session with no stored refresh token leaves it unset`() {
        sharedPrefsManager.activeToken = "AT1"
        sharedPrefsManager.refreshToken = null

        sessionManager.saveSession(loginResponse(activeToken = "AT3", refreshToken = null))

        assertEquals("AT3", sharedPrefsManager.activeToken)
        assertEquals(null, sharedPrefsManager.refreshToken)
    }

    private fun loginResponse(
        activeToken: String,
        refreshToken: String?,
    ) = LoginResponse(
        id = "u1",
        firstName = "Ada",
        lastName = "Lovelace",
        activeToken = activeToken,
        refreshToken = refreshToken,
        email = "ada@example.com",
        roles = listOf("SURVEYOR"),
    )
}

private class FakeSharedPrefsManager : SharedPrefsManager {
    override var isGuest: Boolean = false
    override var env: BackendEnvironment? = null
    override var lastSuccessfulEnv: BackendEnvironment? = null
    override var activeToken: String? = null
    override var refreshToken: String? = null
    override var userId: String? = null
    override var lastUserName: String? = null
    override var surveyLastFetchTimeMillis: Long = 0L

    override val isActiveTokenAvailable: Boolean
        get() = !activeToken.isNullOrEmpty() && !refreshToken.isNullOrEmpty()

    override fun logout() {
        activeToken = ""
        refreshToken = ""
    }

    override fun clear() {
        activeToken = null
        refreshToken = null
        userId = null
        lastUserName = null
    }
}
