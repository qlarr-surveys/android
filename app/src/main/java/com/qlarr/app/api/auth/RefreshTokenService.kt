package com.qlarr.app.api.auth

import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.POST

interface RefreshTokenService {
    @POST("user/refresh_token")
    suspend fun refreshActiveToken(@Body refreshInput: RefreshInput): Response<LoginResponse>
}
