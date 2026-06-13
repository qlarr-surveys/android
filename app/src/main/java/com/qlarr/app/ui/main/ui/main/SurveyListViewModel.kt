package com.qlarr.app.ui.main.ui.main

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.qlarr.app.AppEvent
import com.qlarr.app.EventBus
import com.qlarr.app.business.auth.LogoutUseCase
import com.qlarr.app.business.responses.ResponseRepository
import com.qlarr.app.business.settings.SharedPrefsManager
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.business.survey.SurveyRepository
import com.qlarr.app.business.survey.SyncCoordinator
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
    private val syncCoordinator: SyncCoordinator,
    private val eventBus: EventBus,
    private val sharedPrefsManager: SharedPrefsManager,
    private val responseRepository: ResponseRepository,
    errorProcessor: ErrorProcessor,
) : ViewModel(),
    ErrorProcessor by errorProcessor {
    private val _firstLoad = MutableStateFlow(true)
    private val _isFetching = MutableStateFlow(false)
    private val _state =
        MutableStateFlow(State(showLoading = true, isGuest = sharedPrefsManager.isGuest))
    val state = _state.asStateFlow()

    private val _uiEvents = MutableSharedFlow<UiEvents>()
    val uiEvents = _uiEvents.asSharedFlow()

    private val _downloadState: MutableStateFlow<DownloadState> =
        MutableStateFlow(DownloadState.Idle)
    val downloadState = _downloadState.asStateFlow()

    private val _logoutDialog = MutableStateFlow<LogoutDialog>(LogoutDialog.Hidden)
    val logoutDialog = _logoutDialog.asStateFlow()

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

                    else -> {
                        Unit
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
        if (_isFetching.value) return
        _isFetching.value = true
        viewModelScope.launch(Dispatchers.IO) {
            _state.update { _state.value.copy(showLoading = _firstLoad.value || triggeredByUser) }
            _firstLoad.value = false
            surveyRepository
                .getSurveyList()
                .catch {
                    if (triggeredByUser) {
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
            _state.update { _state.value.copy(showLoading = false) }
            _isFetching.value = false
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
                        _state.update { _state.value.copy(showLoading = false, surveyList = newList) }
                        _downloadState.update { DownloadState.Idle }
                    }
                }
            }
        }
    }

    private fun uploadSurveyResponses() {
        syncCoordinator.requestSync()
    }

    fun onLogoutClicked() {
        viewModelScope.launch(Dispatchers.IO) {
            _logoutDialog.value =
                LogoutDialog.Visible(
                    hasUnsynced = responseRepository.hasUnsyncedResponses(),
                )
        }
    }

    fun dismissLogoutDialog() {
        _logoutDialog.value = LogoutDialog.Hidden
    }

    fun logout() {
        viewModelScope.launch(Dispatchers.IO) {
            logoutUseCase(clearAllData = true)
            _uiEvents.emit(UiEvents.GoToLogin)
        }
    }

    fun sessionExpiredLogout() {
        viewModelScope.launch(Dispatchers.IO) {
            logoutUseCase(clearAllData = false)
            _uiEvents.emit(UiEvents.GoToLogin)
        }
    }

    sealed class UiEvents {
        object GoToLogin : UiEvents()
    }

    sealed interface LogoutDialog {
        data object Hidden : LogoutDialog

        data class Visible(
            val hasUnsynced: Boolean) : LogoutDialog
    }

    data class State(
        val isGuest: Boolean,
        val showLoading: Boolean,
        val surveyList: List<SurveyData> = emptyList(),
    )

    private companion object Companion {
        private const val SIX_HOURS_MILLIS = 1000 * 60 * 60 * 6
    }
}
