package com.qlarr.app.di

import com.qlarr.app.business.guest.GuestSurveyRepository
import com.qlarr.app.business.guest.GuestSurveyRepositoryImpl
import org.koin.core.qualifier.named
import org.koin.dsl.module

val guestModule =
    module {
        single<GuestSurveyRepository> { GuestSurveyRepositoryImpl(get(named("appContext"))) }
    }
