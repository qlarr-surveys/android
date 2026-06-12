package com.qlarr.app.ui.survey

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.qlarr.app.AppEvent
import com.qlarr.app.EventBus
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.business.survey.SurveyRepository
import com.qlarr.app.business.survey.UploadSurveyResponsesUseCase
import com.qlarr.app.storage.DownloadManager
import com.qlarr.app.storage.DownloadState
import com.qlarr.app.ui.common.error.ErrorProcessor
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

/**
 * Drives the redesigned Survey Info screen. Seeded with the [SurveyData] snapshot passed from the
 * list, then keeps itself fresh: Download and single-survey Sync run in place and the local row is
 * re-read (counts, lastSync) on every action and on resume, plus live [EventBus] updates.
 */
class SurveyInfoViewModel(
    private val surveyRepository: SurveyRepository,
    private val downloadManager: DownloadManager,
    private val uploadUseCase: UploadSurveyResponsesUseCase,
    private val eventBus: EventBus,
    errorProcessor: ErrorProcessor,
) : ViewModel(),
    ErrorProcessor by errorProcessor {
    private val _state = MutableStateFlow<State?>(null)
    val state = _state.asStateFlow()

    private var started = false

    /** Seeds the screen with the list snapshot and starts observing live updates. */
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
                        if (event.survey.id == surveyId) updateSurvey(event.survey)
                    }

                    is AppEvent.ResponseStarted -> {
                        if (event.survey.id == surveyId) updateSurvey(event.survey)
                    }

                    is AppEvent.ResponseEnded -> {
                        if (event.survey.id == surveyId) updateSurvey(event.survey)
                    }

                    is AppEvent.UploadingSurveyResponse -> {
                        setSyncing(event.surveyId == surveyId)
                    }

                    is AppEvent.UploadingResponse -> {
                        if (!event.uploading) setSyncing(false)
                    }
                }
            }
        }
    }

    /** Re-reads the local survey row (counts, lastSync). No-op until the survey is downloaded. */
    fun refresh() {
        val id = _state.value?.survey?.id ?: return
        viewModelScope.launch(Dispatchers.IO) {
            // getOfflineSurvey throws when the survey isn't in the local DB yet (not downloaded);
            // keep the seeded snapshot in that case.
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
        val survey = _state.value?.survey ?: return
        viewModelScope.launch(Dispatchers.IO) {
            setSyncing(true)
            try {
                uploadUseCase.uploadSurvey(survey.id)
            } catch (e: Exception) {
                processError(e)
            } finally {
                refresh()
                setSyncing(false)
            }
        }
    }

    private fun updateSurvey(survey: SurveyData) {
        _state.update { current ->
            current?.copy(survey = survey.copy(isSyncing = current.survey.isSyncing))
        }
    }

    private fun setSyncing(syncing: Boolean) {
        _state.update { it?.copy(isSyncing = syncing) }
    }

    data class State(
        val survey: SurveyData,
        val isDownloading: Boolean = false,
        val isSyncing: Boolean = false,
    )
}
