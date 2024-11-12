package com.qlarr.app.di

import com.qlarr.app.ui.launch.LaunchViewModel
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.dsl.module

val launchModule = module {
    viewModel { LaunchViewModel(get()) }
}