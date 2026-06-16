package com.qlarr.app.ui.survey

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.qlarr.app.AppEvent
import com.qlarr.app.EventBus
import com.qlarr.app.business.survey.BackgroundSync
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.business.survey.SurveyRepository
import com.qlarr.app.storage.DownloadManager
import com.qlarr.app.storage.DownloadState
import com.qlarr.app.ui.common.ConnectivityChecker
import com.qlarr.app.ui.common.error.ErrorProcessor
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import java.net.UnknownHostException

class SurveyInfoViewModel(
    private val surveyRepository: SurveyRepository,
    private val downloadManager: DownloadManager,
    private val backgroundSync: BackgroundSync,
    private val eventBus: EventBus,
    private val connectivityChecker: ConnectivityChecker,
    errorProcessor: ErrorProcessor,
) : ViewModel(),
    ErrorProcessor by errorProcessor {
    private val _state = MutableStateFlow<State?>(null)
    val state = _state.asStateFlow()

    private var started = false

    fun start(initial: SurveyData) {
        if (started) return
        started = true
        _state.value = State(survey = initial)
        observeEvents(initial.id)
        refresh()
    }

    private fun observeEvents(surveyId: String) {
        viewModelScope.launch(Dispatchers.IO) {
            eventBus.events.collect { event ->
                when (event) {
                    is AppEvent.UploadedSurveyResponse -> {
                        event.survey
                            .takeIf { it.id == surveyId }
                            ?.let { updateSurvey(it) }
                    }

                    is AppEvent.ResponseStarted -> {
                        event.survey
                            .takeIf { it.id == surveyId }
                            ?.let { updateSurvey(it) }
                    }

                    is AppEvent.ResponseEnded -> {
                        event.survey
                            .takeIf { it.id == surveyId }
                            ?.let { updateSurvey(it) }
                    }

                    is AppEvent.UploadingSurveyResponse -> {
                        _state.update { it?.copy(isSyncing = true) }
                    }
                    is AppEvent.UploadingResponse -> _state.update { it?.copy(isSyncing = event.uploading) }
                    else -> Unit
                }
            }
        }
    }

    fun refresh() {
        val id = _state.value?.survey?.id ?: return
        viewModelScope.launch(Dispatchers.IO) {
            runCatching { surveyRepository.getOfflineSurvey(id) }
                .onSuccess { updateSurvey(it) }
        }
    }

    fun download() {
        val survey = _state.value?.survey ?: return
        viewModelScope.launch(Dispatchers.IO) {
            _state.update { it?.copy(isDownloading = true) }
            downloadManager.downloadSurveyFiles(survey).collect { result ->
                when (result) {
                    is DownloadState.Result -> {
                        updateSurvey(result.surveyData)
                        _state.update { it?.copy(isDownloading = false) }
                    }

                    is DownloadState.Error -> {
                        processError(result.throwable)
                        _state.update { it?.copy(isDownloading = false) }
                    }

                    is DownloadState.Loading,
                    DownloadState.Idle,
                    -> {
                        Unit
                    }
                }
            }
        }
    }

    fun sync() {
        viewModelScope.launch(Dispatchers.IO) {
            if (!connectivityChecker.networkAvailable) {
                processError(UnknownHostException())
                return@launch
            }
            if (surveyRepository.shouldSync()) {
                backgroundSync.startSurveySync()
            }
        }
    }

    private fun updateSurvey(survey: SurveyData) {
        _state.update { it?.copy(survey = survey) }
    }

    data class State(
        val survey: SurveyData,
        val isDownloading: Boolean = false,
        val isSyncing: Boolean = false,
    )
}
