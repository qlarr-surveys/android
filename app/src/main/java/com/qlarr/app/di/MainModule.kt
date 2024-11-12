package com.qlarr.app.di

import com.qlarr.app.api.RetrofitProvider.retrofitAuthenticatedEndpoints
import com.qlarr.app.api.RetrofitProvider.retrofitGuest
import com.qlarr.app.api.survey.GuestService
import com.qlarr.app.api.survey.SurveyService
import com.qlarr.app.business.responses.ResponseRepository
import com.qlarr.app.business.responses.ResponseRepositoryImpl
import com.qlarr.app.business.survey.SurveyRepository
import com.qlarr.app.business.survey.SurveyRepositoryImpl
import com.qlarr.app.business.survey.UploadSurveyResponsesUseCase
import com.qlarr.app.business.survey.UploadSurveyResponsesUseCaseImpl
import com.qlarr.app.storage.DownloadManager
import com.qlarr.app.storage.DownloadManagerImpl
import com.qlarr.app.ui.main.ui.main.MainViewModel
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.core.qualifier.named
import org.koin.dsl.module

val mainModule = module {
    single<SurveyService> { retrofitAuthenticatedEndpoints(get(), get()).create(SurveyService::class.java) }
    single<GuestService> { retrofitGuest().create(GuestService::class.java) }
    single<SurveyRepository> { SurveyRepositoryImpl(get(), get(), get(), get(), get(), get()) }
    single<ResponseRepository> { ResponseRepositoryImpl(get()) }
    single<UploadSurveyResponsesUseCase> {
        UploadSurveyResponsesUseCaseImpl(
            get(), get(), get(),
            get(), get()
        )
    }
    single<DownloadManager> { DownloadManagerImpl(get(named("appContext")), get()) }
    viewModel { MainViewModel(get(), get(), get(), get(), get(), get(), get()) }
}