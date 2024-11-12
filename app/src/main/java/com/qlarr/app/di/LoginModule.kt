package com.qlarr.app.di

import com.qlarr.app.api.RetrofitProvider.retrofitPublicEndpoints
import com.qlarr.app.api.auth.LoginService
import com.qlarr.app.business.auth.LoginInteractor
import com.qlarr.app.business.auth.LoginInteractorImpl
import com.qlarr.app.business.auth.LoginRepository
import com.qlarr.app.business.auth.LoginRepositoryImpl
import com.qlarr.app.business.auth.LogoutUseCase
import com.qlarr.app.business.auth.LogoutUseCaseImpl
import com.qlarr.app.ui.login.LoginViewModel
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.dsl.module

val loginModule = module {
    single<LoginService> { retrofitPublicEndpoints(get()).create(LoginService::class.java) }
    single<LoginRepository> { LoginRepositoryImpl(get(), get(), get(), get()) }
    single<LoginInteractor> { LoginInteractorImpl(get()) }
    single<LogoutUseCase> { LogoutUseCaseImpl(get(), get(), get()) }
    viewModel { LoginViewModel(get(), get(), get()) }
}
