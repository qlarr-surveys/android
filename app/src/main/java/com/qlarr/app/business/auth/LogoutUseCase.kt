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
            loginRepository.clearUser()
        } else {
            sharedPrefsManager.logout()
        }
    }
}