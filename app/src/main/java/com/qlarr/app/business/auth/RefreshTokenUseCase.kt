package com.qlarr.app.business.auth

import com.qlarr.app.api.auth.RefreshInput
import com.qlarr.app.api.auth.RefreshTokenService
import com.qlarr.app.business.getResult
import com.qlarr.app.business.survey.SessionManager

interface RefreshTokenUseCase {
    suspend operator fun invoke(refreshToken: String, activeToken: String): Result<String>
}

class RefreshTokenUseCaseImpl(
    private val refreshTokenService: RefreshTokenService,
    private val sessionManager: SessionManager
) : RefreshTokenUseCase {
    override suspend fun invoke(refreshToken: String, activeToken: String): Result<String> {
        return try {
            val result =
                refreshTokenService.refreshActiveToken(RefreshInput(refreshToken, activeToken))
                    .getResult()
            return if (result.isSuccess) {
                val loginResponse = result.getOrThrow()
                sessionManager.saveSession(loginResponse)
                Result.success(loginResponse.activeToken)
            } else {
                Result.failure(result.exceptionOrNull()!!)
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
