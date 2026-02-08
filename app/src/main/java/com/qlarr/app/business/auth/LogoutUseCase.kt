package com.qlarr.app.business.auth

import com.qlarr.app.business.settings.SharedPrefsManager
import com.qlarr.app.storage.DownloadManager

interface LogoutUseCase {
    suspend operator fun invoke()
}

class LogoutUseCaseImpl(
    private val loginRepository: LoginRepository,
    private val sharedPrefsManager: SharedPrefsManager,
) : LogoutUseCase {
    override suspend fun invoke() {
        loginRepository.logout()
        sharedPrefsManager.logout()
    }
}