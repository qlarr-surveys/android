package com.qlarr.app.api.survey

import okhttp3.ResponseBody
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Path
import retrofit2.http.Streaming

interface GuestService {

    @GET("/guest/survey/offline")
    suspend fun getGuestSurveyList(): List<Survey>

    @POST("/guest/survey/{surveyId}/offline/design")
    suspend fun getGuestSurveyDesign(
        @Path("surveyId") surveyId: String,
        @Body publishInfo: PublishInfo = PublishInfo()
    ): SurveyDesign

    @Streaming
    @GET("survey/{surveyId}/resource/{resourceId}")
    suspend fun getSurveyFile(
        @Path("surveyId") surveyId: String,
        @Path("resourceId") resourceId: String
    ): ResponseBody
}


