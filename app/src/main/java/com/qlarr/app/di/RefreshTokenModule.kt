package com.qlarr.app.di

import com.qlarr.app.api.RetrofitProvider.retrofitPublicEndpoints
import com.qlarr.app.api.auth.RefreshTokenService
import com.qlarr.app.business.auth.RefreshTokenUseCase
import com.qlarr.app.business.auth.RefreshTokenUseCaseImpl
import org.koin.dsl.module

val refreshTokenModule = module {
    single<RefreshTokenService> {
        retrofitPublicEndpoints(get()).create(RefreshTokenService::class.java)
    }
    single<RefreshTokenUseCase> { RefreshTokenUseCaseImpl(get(), get()) }
}