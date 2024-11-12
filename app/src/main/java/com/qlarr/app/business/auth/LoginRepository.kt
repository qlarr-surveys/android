package com.qlarr.app.business.auth

import com.qlarr.app.api.auth.GoogleSignInInput
import com.qlarr.app.api.auth.LoginInput
import com.qlarr.app.api.auth.LoginResponse
import com.qlarr.app.api.auth.LoginService
import com.qlarr.app.business.getResult
import com.qlarr.app.business.survey.SessionManager
import com.qlarr.app.business.survey.SurveyRepository
import com.qlarr.app.db.QlarrDb

interface LoginRepository {
    suspend fun login(loginInput: LoginInput): Result<LoginResponse>
    suspend fun googleSignIn(googleSignInInput: GoogleSignInInput): Result<LoginResponse>
    suspend fun logout(): Result<Unit>
}

class LoginRepositoryImpl(
    private val service: LoginService,
    private val sessionManager: SessionManager,
    private val surveyRepository: SurveyRepository,
    private val qlarrDb: QlarrDb
) : LoginRepository {

    override suspend fun login(loginInput: LoginInput): Result<LoginResponse> {
        val result = service.login(loginInput).getResult()
        if (result.isSuccess) {
            qlarrDb.clearAllTables()
            val loginResponse = result.getOrThrow()
            sessionManager.saveSession(loginResponse)
        }
        return result
    }

    override suspend fun googleSignIn(googleSignInInput: GoogleSignInInput): Result<LoginResponse> {
        val result = service.googleSignIn(googleSignInInput).getResult()
        if (result.isSuccess) {
            qlarrDb.clearAllTables()
            val loginResponse = result.getOrThrow()
            sessionManager.saveSession(loginResponse)
        }
        return result
    }

    override suspend fun logout(): Result<Unit> {
        if (sessionManager.isGuest().not()) {
            try {
                service.logout()
            } catch (e: Exception) {
                // ToDo: Show some toast that logout failed on the server
            }
        }
        qlarrDb.clearAllTables().runCatching { }
        surveyRepository.clearSurveyFiles()
        return Result.success(Unit)
    }
}
