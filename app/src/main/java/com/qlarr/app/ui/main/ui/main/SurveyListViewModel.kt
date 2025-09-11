package com.qlarr.app.ui.main.ui.main

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.qlarr.app.AppEvent
import com.qlarr.app.EventBus
import com.qlarr.app.business.auth.LogoutUseCase
import com.qlarr.app.business.settings.SharedPrefsManager
import com.qlarr.app.business.survey.BackgroundSync
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.business.survey.SurveyRepository
import com.qlarr.app.storage.DownloadManager
import com.qlarr.app.storage.DownloadState
import com.qlarr.app.ui.common.error.ErrorProcessor
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asSharedFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class SurveyListViewModel(
    private val surveyRepository: SurveyRepository,
    private val logoutUseCase: LogoutUseCase,
    private val downloadManager: DownloadManager,
    private val backgroundSync: BackgroundSync,
    private val eventBus: EventBus,
    private val sharedPrefsManager: SharedPrefsManager,
    errorProcessor: ErrorProcessor,
) : ViewModel(),
    ErrorProcessor by errorProcessor {
    private val _firstLoad = MutableStateFlow(true)
    private val _state =
        MutableStateFlow(State(isLoading = true, isGuest = sharedPrefsManager.isGuest))
    val state = _state.asStateFlow()

    private val _uiEvents = MutableSharedFlow<UiEvents>()
    val uiEvents = _uiEvents.asSharedFlow()

    private val _downloadState: MutableStateFlow<DownloadState> =
        MutableStateFlow(DownloadState.Idle)
    val downloadState = _downloadState.asStateFlow()

    init {
        viewModelScope.launch(Dispatchers.IO) {
            eventBus.events.collect { event ->
                when (event) {
                    is AppEvent.UploadedSurveyResponse -> {
                        updateSurveyData(event.survey)
                    }

                    is AppEvent.ResponseStarted -> {
                        updateSurveyData(event.survey)
                    }

                    is AppEvent.ResponseEnded -> {
                        updateSurveyData(event.survey)
                    }

                    is AppEvent.UploadingResponse -> {
                        if (!event.uploading) {
                            _state.update {
                                _state.value.copy(
                                    surveyList =
                                        _state.value.surveyList.map {
                                            it.copy(isSyncing = false)
                                        },
                                )
                            }
                        }
                    }

                    is AppEvent.UploadingSurveyResponse -> {
                        _state.update {
                            _state.value.copy(
                                surveyList =
                                    _state.value.surveyList.map {
                                        it.copy(isSyncing = it.id == event.surveyId)
                                    },
                            )
                        }
                    }
                }
            }
        }
    }

    private fun updateSurveyData(survey: SurveyData) {
        _state.update {
            _state.value.copy(
                surveyList =
                    _state.value.surveyList.toMutableList().apply {
                        val index = indexOfFirst { it.id == survey.id }
                        set(
                            index,
                            survey.copy(
                                isSyncing =
                                    _state.value.surveyList
                                        .firstOrNull { it.id == survey.id }
                                        ?.isSyncing == true,
                            ),
                        )
                    },
            )
        }
    }

    fun syncData() {
        if (_firstLoad.value ||
            System.currentTimeMillis() - sharedPrefsManager.surveyLastFetchTimeMillis > SIX_HOURS_MILLIS
        ) {
            fetchSurveyList(false)
        }
        uploadSurveyResponses()
    }

    fun fetchSurveyList(triggeredByUser: Boolean) {
        viewModelScope.launch(Dispatchers.IO) {
            _state.update { _state.value.copy(isLoading = _firstLoad.value || triggeredByUser) }
            _firstLoad.value = false
            surveyRepository
                .getSurveyList()
                .catch {
                    if (triggeredByUser || _firstLoad.value) {
                        processError(it)
                    }
                }.collect { list ->
                    _state.update {
                        _state.value.copy(
                            surveyList =
                                list.map { survey ->
                                    survey.copy(
                                        isSyncing =
                                            _state.value.surveyList
                                                .firstOrNull { it.id == survey.id }
                                                ?.isSyncing == true,
                                    )
                                },
                        )
                    }
                    sharedPrefsManager.surveyLastFetchTimeMillis = System.currentTimeMillis()
                }
            _state.update { _state.value.copy(isLoading = false) }
        }
    }

    fun downloadSurveyForOffline(surveyData: SurveyData) {
        viewModelScope.launch(Dispatchers.IO) {
            downloadManager.downloadSurveyFiles(surveyData).collect { result ->
                when (result) {
                    is DownloadState.Loading,
                    is DownloadState.Idle,
                    -> {
                        _downloadState.value = result
                    }

                    is DownloadState.Error -> {
                        processError(result.throwable)
                        _downloadState.value = result
                    }

                    is DownloadState.Result -> {
                        val newList =
                            _state.value.surveyList.map {
                                if (it.id == result.surveyData.id) result.surveyData else it
                            }
                        _state.update { _state.value.copy(isLoading = false, surveyList = newList) }
                        _downloadState.update { DownloadState.Idle }
                    }
                }
            }
        }
    }

    private fun uploadSurveyResponses() {
        viewModelScope.launch(Dispatchers.IO) {
            if (surveyRepository.shouldSync()) {
                backgroundSync.startSurveySync()
            }
        }
    }

    fun logout() {
        viewModelScope.launch(Dispatchers.IO) {
            logoutUseCase()
            _uiEvents.emit(UiEvents.GoToLogin)
        }
    }

    sealed class UiEvents {
        object GoToLogin : UiEvents()
    }

    data class State(
        val isGuest: Boolean,
        val isLoading: Boolean,
        val surveyList: List<SurveyData> = emptyList(),
    )

    private companion object Companion {
        private const val SIX_HOURS_MILLIS = 1000 * 60 * 60 * 6
    }
}
