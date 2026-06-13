package com.qlarr.app.business.survey

import com.qlarr.app.AppEvent
import com.qlarr.app.EventBus
import com.qlarr.app.ui.common.ConnectivityChecker
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asSharedFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import java.net.UnknownHostException

class SyncCoordinator(
    private val eventBus: EventBus,
    private val backgroundSync: BackgroundSync,
    private val surveyRepository: SurveyRepository,
    private val uploadUseCase: UploadSurveyResponsesUseCase,
    private val connectivityChecker: ConnectivityChecker,
    private val scope: CoroutineScope = CoroutineScope(SupervisorJob() + Dispatchers.IO),
) {
    private val _isSyncing = MutableStateFlow(false)
    val isSyncing: StateFlow<Boolean> = _isSyncing.asStateFlow()

    // Failures the user should see. Automatic syncs (ResponseEnded) stay silent; only a sync the
    // user explicitly asked for surfaces here, mapped + displayed by the foreground screen.
    private val _syncErrors = MutableSharedFlow<Throwable>()
    val syncErrors: SharedFlow<Throwable> = _syncErrors.asSharedFlow()

    @Volatile
    private var surfaceErrors = false

    private var started = false

    fun start() {
        if (started) return
        started = true
        scope.launch {
            eventBus.events.collect { event ->
                when (event) {
                    is AppEvent.ResponseEnded -> requestSync()

                    // The flag is driven by the worker actually running, never optimistically: the
                    // worker has a network constraint, so offline it stays queued and never reports.
                    is AppEvent.UploadingResponse -> {
                        _isSyncing.value = event.uploading
                        if (!event.uploading) surfaceErrors = false
                    }

                    is AppEvent.UploadingSurveyResponse -> _isSyncing.value = true

                    is AppEvent.SyncFailed -> {
                        if (surfaceErrors) _syncErrors.emit(event.throwable)
                    }

                    else -> Unit
                }
            }
        }
    }

    /**
     * Bulk upload of every pending response via the background worker; WorkManager dedups runs.
     * [userInitiated] taps get immediate offline feedback and surface the worker's failures.
     */
    fun requestSync(userInitiated: Boolean = false) {
        if (_isSyncing.value) return
        scope.launch {
            if (userInitiated && !connectivityChecker.networkAvailable) {
                _syncErrors.emit(UnknownHostException())
                return@launch
            }
            if (surveyRepository.shouldSync()) {
                if (userInitiated) surfaceErrors = true
                backgroundSync.startSurveySync()
            }
        }
    }

    /**
     * Upload a single response in-process (Detail-screen Sync). Returns whether it synced, or null
     * if a sync was already running and this request was ignored. Holds the global [isSyncing] for
     * the duration so every screen reflects it and no other sync can overlap.
     */
    suspend fun syncResponse(
        surveyId: String,
        responseId: String,
    ): Boolean? {
        if (!_isSyncing.compareAndSet(expect = false, update = true)) return null
        try {
            return uploadUseCase.uploadResponse(surveyId, responseId)
        } finally {
            _isSyncing.value = false
        }
    }
}
