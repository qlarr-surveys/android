package com.qlarr.app.ui.survey

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.qlarr.app.AppEvent
import com.qlarr.app.EventBus
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.business.survey.SurveyRepository
import com.qlarr.app.business.survey.SyncCoordinator
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
 * list, then keeps itself fresh: Download runs in place, syncing is delegated to the app-wide
 * [SyncCoordinator], and the local row is re-read (counts, lastSync) on every relevant
 * [EventBus] update and on resume.
 */
class SurveyInfoViewModel(
    private val surveyRepository: SurveyRepository,
    private val downloadManager: DownloadManager,
    private val syncCoordinator: SyncCoordinator,
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
        observeSyncing()
        refresh()
    }

    private fun observeEvents(surveyId: String) {
        viewModelScope.launch(Dispatchers.IO) {
            eventBus.events.collect { event ->
                val updated =
                    when (event) {
                        is AppEvent.UploadedSurveyResponse -> event.survey.takeIf { it.id == surveyId }
                        is AppEvent.ResponseStarted -> event.survey.takeIf { it.id == surveyId }
                        is AppEvent.ResponseEnded -> event.survey.takeIf { it.id == surveyId }
                        else -> null
                    }
                updated?.let { updateSurvey(it) }
            }
        }
    }

    private fun observeSyncing() {
        viewModelScope.launch(Dispatchers.IO) {
            syncCoordinator.isSyncing.collect { syncing ->
                _state.update { it?.copy(isSyncing = syncing) }
            }
        }
        viewModelScope.launch(Dispatchers.IO) {
            syncCoordinator.syncErrors.collect { processError(it) }
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
        syncCoordinator.requestSync(userInitiated = true)
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
