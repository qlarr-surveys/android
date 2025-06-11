package com.qlarr.app.ui.survey

import androidx.lifecycle.ViewModel
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.ui.common.error.ErrorProcessor

class RunSurveyViewModel(
    survey: SurveyData,
    errorProcessor: ErrorProcessor,
) : ViewModel(),
    ErrorProcessor by errorProcessor
