package com.qlarr.app.di

import com.qlarr.app.ui.responses.ResponsesViewModel
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.dsl.module

val responsesModule = module {
    viewModel {
        ResponsesViewModel(
            get(),
            get(),
            get(),
            get(),
            get()
        )
    }
}