package com.qlarr.app.api.auth

data class RefreshInput(val refreshToken: String, val accessToken: String)
