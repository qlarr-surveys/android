package com.qlarr.app.ui.survey

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.qlarr.app.AppEvent
import com.qlarr.app.AppEvent.ResponseEnded
import com.qlarr.app.EventBus
import com.qlarr.app.business.survey.SurveyRepository
import com.qlarr.app.ui.common.error.ErrorProcessor
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class SurveyViewModel(
    private val surveyId: String,
    private val eventBus: EventBus,
    private val surveyRepository: SurveyRepository,
    errorProcessor: ErrorProcessor
) : ViewModel(), ErrorProcessor by errorProcessor {

    fun responseEnded(responseId: String) {
        viewModelScope.launch(Dispatchers.IO) {
            eventBus.emitEvent(
                ResponseEnded(
                    responseId,
                    surveyRepository.getOfflineSurvey(surveyId)
                )
            )
        }
    }

    fun responseStarted(responseId: String) {
        viewModelScope.launch(Dispatchers.IO) {
            eventBus.emitEvent(
                AppEvent.ResponseStarted(
                    responseId,
                    surveyRepository.getOfflineSurvey(surveyId)
                )
            )
        }
    }

    fun reportError(throwable: Throwable) {
        viewModelScope.launch(Dispatchers.IO) {
            processError(throwable)
        }
    }

}
