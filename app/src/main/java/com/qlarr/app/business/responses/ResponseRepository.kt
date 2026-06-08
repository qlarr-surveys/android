package com.qlarr.app.business.responses

import com.qlarr.app.api.survey.ResponseEvent
import com.qlarr.app.db.ResponseDao
import com.qlarr.app.db.model.Response

enum class ResponsesFilter { ALL, DRAFT, PENDING, UPLOADED }

interface ResponseRepository {

    suspend fun getResponse(responseId: String): Response
    suspend fun getResponses(surveyId: String): List<Response>
    suspend fun getResponses(surveyId: String, page: Int, perPage: Int): List<Response>

    suspend fun getResponses(
        surveyId: String,
        page: Int,
        perPage: Int,
        filter: ResponsesFilter,
    ): List<Response>

    /** Response ids ordered oldest-first; position + 1 = the human-facing ordinal (#1 = oldest). */
    suspend fun getOrderedIds(surveyId: String): List<String>

    suspend fun countUploaded(surveyId: String): Int
    suspend fun deleteResponse(responseId: String)
    suspend fun addEvent(responseId: String, event: ResponseEvent)
    suspend fun markResponseAsSynced(responseId: String)
    suspend fun getUnsyncedCount(surveyId: String): Int

    suspend fun hasUnsyncedResponses(): Boolean
}

class ResponseRepositoryImpl(
    private val responseDao: ResponseDao,
) : ResponseRepository {

    override suspend fun getResponse(responseId: String): Response {
        return responseDao.get(responseId)
    }

    override suspend fun getResponses(surveyId: String): List<Response> {
        return responseDao.getAllByUserAndSurvey(surveyId)
    }

    override suspend fun getResponses(surveyId: String, page: Int, perPage: Int): List<Response> {
        return responseDao.getByUserAndSurvey(surveyId, page, perPage)
    }

    override suspend fun getResponses(
        surveyId: String,
        page: Int,
        perPage: Int,
        filter: ResponsesFilter,
    ): List<Response> =
        when (filter) {
            ResponsesFilter.ALL -> {
                responseDao.getByUserAndSurvey(surveyId, page, perPage)
            }

            // "Drafts" = incomplete responses (not submitted).
            ResponsesFilter.DRAFT -> {
                responseDao.getDrafts(surveyId, page, perPage)
            }

            // "Pending" = complete but not yet uploaded — the actually-uploadable responses.
            ResponsesFilter.PENDING -> {
                responseDao.getPendingUpload(surveyId, page, perPage)
            }

            ResponsesFilter.UPLOADED -> {
                responseDao.getByUserAndSurveyFiltered(
                    surveyId,
                    synced = true,
                    page = page,
                    perPage = perPage,
                )
            }
        }

    override suspend fun getOrderedIds(surveyId: String): List<String> = responseDao.getOrderedIds(surveyId)

    override suspend fun countUploaded(surveyId: String): Int =
        responseDao.countUploaded(surveyId)

    override suspend fun deleteResponse(responseId: String) {
        return responseDao.deleteById(responseId)
    }

    override suspend fun addEvent(responseId: String, event: ResponseEvent) =
        responseDao.addEvent(responseId, event)

    override suspend fun markResponseAsSynced(responseId: String) =
        responseDao.markResponseAsSynced(responseId)

    override suspend fun getUnsyncedCount(surveyId: String) =
        responseDao.countUnsyncedResponses(surveyId)

    override suspend fun hasUnsyncedResponses() = responseDao.countAllUnsyncedResponses() > 0
}
