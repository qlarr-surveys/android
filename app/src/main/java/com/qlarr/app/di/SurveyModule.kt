package com.qlarr.app.di

import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.ui.survey.RunSurveyViewModel
import com.qlarr.app.ui.survey.SurveyViewModel
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.dsl.module

val surveyModule =
    module {
        viewModel { (surveyId: String) ->
            SurveyViewModel(surveyId, get(), get(), get())
        }
        viewModel { (survey: SurveyData) ->
            RunSurveyViewModel(survey, get())
        }
    }
