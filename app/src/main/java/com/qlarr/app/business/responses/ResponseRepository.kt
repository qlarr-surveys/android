package com.qlarr.app.business.responses

import com.qlarr.app.db.ResponseDao
import com.qlarr.app.db.model.Response

interface ResponseRepository {

    suspend fun getResponse(responseId: String): Response
    suspend fun getResponses(surveyId: String): List<Response>
    suspend fun getResponses(surveyId: String, page: Int, perPage: Int): List<Response>
    suspend fun deleteResponse(responseId: String)
    suspend fun markResponseAsSynced(responseId: String)
    suspend fun getUnsyncedCount(surveyId: String): Int
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

    override suspend fun deleteResponse(responseId: String) {
        return responseDao.deleteById(responseId)
    }

    override suspend fun markResponseAsSynced(responseId: String) =
        responseDao.markResponseAsSynced(responseId)

    override suspend fun getUnsyncedCount(surveyId: String) =
        responseDao.countUnsyncedResponses(surveyId)
}

