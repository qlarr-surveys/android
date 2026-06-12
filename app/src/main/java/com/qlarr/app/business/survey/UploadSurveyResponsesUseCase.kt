package com.qlarr.app.business.survey

import android.content.Context
import com.qlarr.app.AppEvent
import com.qlarr.app.EventBus
import com.qlarr.app.api.survey.ResponseEvent
import com.qlarr.app.api.survey.UploadResponseRequestData
import com.qlarr.app.business.responses.ResponseRepository
import com.qlarr.app.db.model.Response
import com.qlarr.app.ui.common.FileUtils
import com.qlarr.app.ui.common.error.isConnectivityError
import com.qlarr.app.ui.responses.ResponsesViewModel.Companion.KEY_FILENAME
import com.qlarr.app.ui.responses.ResponsesViewModel.Companion.KEY_STORED_FILENAME
import com.qlarr.app.ui.responses.ResponsesViewModel.Companion.KEY_TYPE

interface UploadSurveyResponsesUseCase {
    suspend operator fun invoke()

    /**
     * Uploads every complete, unsynced response for [surveyId] and returns how many were synced.
     * Throws on the first failure so user-triggered syncs can surface the error; the automatic
     * [invoke] path catches per-survey and stays silent.
     */
    suspend fun uploadSurvey(surveyId: String): Int

    /**
     * Uploads a single complete, unsynced response and returns whether it was synced. Throws on
     * failure (connectivity or backend rejection) so a user-triggered single sync can surface it.
     * On success the engine clears the response's media files (same path as [uploadSurvey]).
     */
    suspend fun uploadResponse(
        surveyId: String,
        responseId: String): Boolean
}

class UploadSurveyResponsesUseCaseImpl(
    private val appContext: Context,
    private val responseRepository: ResponseRepository,
    private val surveyRepository: SurveyRepository,
    private val sessionManager: SessionManager,
    private val eventBus: EventBus,
) : UploadSurveyResponsesUseCase {
    override suspend fun invoke() {
        try {
            if (sessionManager.isGuest()) {
                return
            }
            eventBus.emitEvent(AppEvent.UploadingResponse(true))
            surveyRepository
                .getOfflineSurveyList()
                .filter {
                    it.surveyStatus == SurveyStatus.ACTIVE &&
                        it.localUnsyncedResponsesCount > 0
                }.forEach {
                    try {
                        uploadSurvey(it.id)
                    } catch (e: Exception) {
                        reportError(e)
                    }
                }
            eventBus.emitEvent(AppEvent.UploadingResponse(false))
        } catch (e: java.lang.Exception) {
            eventBus.emitEvent(AppEvent.UploadingResponse(false))
        }
    }

    override suspend fun uploadSurvey(surveyId: String): Int {
        eventBus.emitEvent(AppEvent.UploadingSurveyResponse(surveyId))
        val responses =
            responseRepository
                .getResponses(surveyId)
                .filter { !it.isSynced && it.submitDate != null }
        var synced = 0
        var firstError: Exception? = null
        responses.forEach { response ->
            try {
                syncResponse(surveyId, response)
                synced++
            } catch (e: Exception) {
                // Network/transport down — every remaining upload will fail too, so stop now.
                if (e.isConnectivityError()) throw e
                // Backend rejected this one response: skip it and keep delivering the rest,
                // then rethrow the first failure at the end so the caller can surface it.
                if (firstError == null) firstError = e
            }
        }
        firstError?.let { throw it }
        return synced
    }

    override suspend fun uploadResponse(
        surveyId: String,
        responseId: String,
    ): Boolean {
        val response = responseRepository.getResponse(responseId)
        if (response.isSynced || response.submitDate == null) return false
        syncResponse(surveyId, response)
        return true
    }

    private suspend fun syncResponse(
        surveyId: String,
        response: Response,
    ) {
        val filenames = response.values
            .mapNotNull {
                if ((it.value as? LinkedHashMap<*, *>)?.run {
                        containsKey(KEY_FILENAME) &&
                            containsKey(KEY_STORED_FILENAME) &&
                            containsKey(KEY_TYPE)
                    } == true
                ) {
                    val map = it.value as LinkedHashMap<*, *>
                    FileUploadInfo(map[KEY_STORED_FILENAME] as String, map[KEY_FILENAME] as String)
                } else {
                    null
                }
            }
        val voiceRecordingFilenames =
            response.events.filterIsInstance<ResponseEvent.VoiceRecording>()
                .mapIndexed { index, it ->
                    FileUploadInfo(it.fileName, "voice_recording_${index + 1}.m4a")
                }
        val allFilenames = filenames + voiceRecordingFilenames
        allFilenames.filter {
                !surveyRepository.fileOnServer(surveyId, response.id, it.storedFileName)
            }.forEach { filename ->
                val file =
                    FileUtils.getResponseFile(
                        appContext,
                        filename.storedFileName,
                        surveyId,
                        response.id,
                )
                if (file.exists()) {
                    surveyRepository.uploadSurveyResponseFile(
                        surveyId,
                        response.id,
                        fileName = filename.originalFileName,
                        storedFileName = filename.storedFileName,
                        file = file,
                    )
                    file.delete()
                } else {
                    reportError(IllegalStateException("File not found: $filename"))
                }
            }

        // 3. upload response row
        val uploadData =
            UploadResponseRequestData(
                versionId = response.version,
                lang = response.lang,
                values = response.values,
                events = response.events,
                startDate = response.startDate,
                submitDate = response.submitDate,
                userId = sessionManager.getUserIdOrThrow(),
                navigationIndex = response.navigationIndex,
            )
        val result =
            surveyRepository.uploadSurveyResponse(surveyId, response.id, uploadData)
        if (result.isSuccess) {
            // 4. mark response as synced
            responseRepository.markResponseAsSynced(response.id)
            val surveyData = surveyRepository.updateSurveyAfterSync(surveyId, result.getOrThrow())
            eventBus.emitEvent(AppEvent.UploadedSurveyResponse(response.id, surveyData))
        } else {
            throw result.exceptionOrNull() ?: IllegalStateException("Response upload failed")
        }
    }

    private fun reportError(throwable: Throwable?) {
        throwable?.printStackTrace()
    }

    data class FileUploadInfo(
        val storedFileName: String,
        val originalFileName: String,
    )
}
