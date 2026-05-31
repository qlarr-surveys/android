package com.qlarr.app.business.auth

import com.qlarr.app.business.settings.SharedPrefsManager

interface LogoutUseCase {
    suspend operator fun invoke(clearAllData: Boolean = false)
}

class LogoutUseCaseImpl(
    private val loginRepository: LoginRepository,
    private val sharedPrefsManager: SharedPrefsManager,
) : LogoutUseCase {
    override suspend fun invoke(clearAllData: Boolean) {
        loginRepository.logout()
        if (clearAllData) {
            // Manual logout: wipe local DB, prefs and downloaded files so no
            // "previous session" lingers on next launch.
            loginRepository.clearUser()
        } else {
            // Session expired (401): keep user/env so re-login is one tap.
            sharedPrefsManager.logout()
        }
    }
}