package com.qlarr.app.business.auth

import com.qlarr.app.api.auth.GoogleSignInInput
import com.qlarr.app.api.auth.LoginInput
import com.qlarr.app.api.auth.LoginResponse

interface LoginInteractor {
    suspend fun login(
        email: String,
        password: String,
    ): LoginResponse

    suspend fun googleSignIn(googleSignInInput: GoogleSignInInput): LoginResponse

    suspend fun supervisorLogin(
        email: String,
        password: String,
    ): LoginResponse
}

class LoginInteractorImpl(
    private val loginRepository: LoginRepository,
) : LoginInteractor {
    override suspend fun login(
        email: String,
        password: String,
    ): LoginResponse = loginRepository.login(LoginInput(email, password)).getOrThrow()

    override suspend fun googleSignIn(googleSignInInput: GoogleSignInInput) = loginRepository.googleSignIn(googleSignInInput).getOrThrow()

    override suspend fun supervisorLogin(
        email: String,
        password: String,
    ): LoginResponse = loginRepository.supervisorLogin(LoginInput(email, password)).getOrThrow()
}
