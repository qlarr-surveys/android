package com.qlarr.app.api.survey

import okhttp3.MultipartBody
import okhttp3.ResponseBody
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.Multipart
import retrofit2.http.POST
import retrofit2.http.Part
import retrofit2.http.Path
import retrofit2.http.Streaming

interface SurveyService {

    @GET("survey/offline")
    suspend fun getSurveyList(): List<Survey>

    @POST("survey/{surveyId}/offline/design")
    suspend fun getSurveyDesign(
        @Path("surveyId") surveyId: String,
        @Body publishInfo: PublishInfo = PublishInfo()
    ): SurveyDesign

    @Streaming
    @GET("survey/{surveyId}/resource/{resourceId}")
    suspend fun getSurveyFile(
        @Path("surveyId") surveyId: String,
        @Path("resourceId") resourceId: String
    ): ResponseBody

    @Multipart
    @POST("survey/{surveyId}/offline/response/{responseId}/upload/{fileName}")
    suspend fun uploadSurveyFile(
        @Path("surveyId") surveyId: String,
        @Path("responseId") responseId: String,
        @Path("fileName") fileName: String,
        @Part file: MultipartBody.Part
    ): Response<Unit>

    @POST("survey/{surveyId}/offline/response/{responseId}/upload/{fileName}/exists")
    suspend fun fileExists(
        @Path("surveyId") surveyId: String,
        @Path("responseId") responseId: String,
        @Path("fileName") fileName: String
    ): Boolean

    @POST("survey/{surveyId}/response/{responseId}/upload")
    suspend fun uploadSurveyResponse(
        @Path("surveyId") surveyId: String,
        @Path("responseId") responseId: String,
        @Body uploadResponseRequestData: UploadResponseRequestData
    ): ResponseCount

}


