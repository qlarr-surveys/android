package com.qlarr.app.api.auth

data class LoginInput(
    val email: String,
    val password: String
)
data class GoogleSignInInput(
    val credential: String,
    val clientId: String
)