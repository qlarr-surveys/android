package com.qlarr.app.business.survey

import android.content.Context
import com.qlarr.app.AppEvent
import com.qlarr.app.EventBus
import com.qlarr.app.api.survey.UploadResponseRequestData
import com.qlarr.app.business.responses.ResponseRepository
import com.qlarr.app.db.model.Response
import com.qlarr.app.ui.common.FileUtils
import com.qlarr.app.ui.responses.ResponsesViewModel.Companion.KEY_FILENAME
import com.qlarr.app.ui.responses.ResponsesViewModel.Companion.KEY_STORED_FILENAME
import com.qlarr.app.ui.responses.ResponsesViewModel.Companion.KEY_TYPE

interface UploadSurveyResponsesUseCase {
    suspend operator fun invoke()
    suspend fun uploadSurvey(surveyId: String)
}

class UploadSurveyResponsesUseCaseImpl(
    private val appContext: Context,
    private val responseRepository: ResponseRepository,
    private val surveyRepository: SurveyRepository,
    private val sessionManager: SessionManager,
    private val eventBus: EventBus
) : UploadSurveyResponsesUseCase {

    override suspend fun invoke() {
        try {
            if (sessionManager.isGuest()) {
                return
            }
            eventBus.emitEvent(AppEvent.UploadingResponse(true))
            surveyRepository.getOfflineSurveyList()
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

    override suspend fun uploadSurvey(surveyId: String) {
        eventBus.emitEvent(AppEvent.UploadingSurveyResponse(surveyId))
        val responses = responseRepository.getResponses(surveyId)
            .filter { !it.isSynced && it.submitDate != null }
        responses.forEach { response ->
            try {
                syncResponse(surveyId, response)
            } catch (e: Exception) {
                reportError(e)
            }
        }
    }

    private suspend fun syncResponse(
        surveyId: String,
        response: Response
    ) {
        response.values.mapNotNull {
            if ((it.value as? LinkedHashMap<*, *>)?.run {
                    containsKey(KEY_FILENAME)
                            && containsKey(KEY_STORED_FILENAME)
                            && containsKey(KEY_TYPE)
                } == true) {
                val map = it.value as LinkedHashMap<*, *>
                FileUploadInfo(map[KEY_STORED_FILENAME] as String, map[KEY_FILENAME] as String)
            } else {
                null
            }
        }.filter {
            !surveyRepository.fileOnServer(surveyId, it.storedFileName)
        }.forEach { filename ->
            val file = FileUtils.getResponseFile(appContext, filename.storedFileName, surveyId)
            if (file.exists()) {
                surveyRepository.uploadSurveyResponseFile(
                    surveyId,
                    fileName = filename.originalFileName,
                    storedFileName = filename.storedFileName,
                    file = file
                )
                file.delete()

            } else {
                reportError(IllegalStateException("File not found: $filename"))
            }
        }

        // 3. upload response row
        val uploadData = UploadResponseRequestData(
            versionId = response.version,
            lang = response.lang,
            values = response.values,
            startDate = response.startDate,
            submitDate = response.submitDate,
            userId = sessionManager.getUserIdOrThrow(),
            navigationIndex = response.navigationIndex
        )
        val result =
            surveyRepository.uploadSurveyResponse(surveyId, response.id, uploadData)
        if (result.isSuccess) {
            // 4. mark response as synced
            responseRepository.markResponseAsSynced(response.id)
            val surveyData = surveyRepository.updateSurveyInDB(surveyId, result.getOrThrow())
            eventBus.emitEvent(AppEvent.UploadedSurveyResponse(response.id, surveyData))
        } else {
            reportError(result.exceptionOrNull())
        }
    }

    private fun reportError(throwable: Throwable?) {
        throwable?.printStackTrace()
    }

    data class FileUploadInfo(val storedFileName: String, val originalFileName: String)

}
