package com.qlarr.app.business.guest

import android.content.Context
import android.util.Log
import com.fasterxml.jackson.databind.node.ObjectNode
import com.qlarr.app.api.survey.FileData
import com.qlarr.app.api.survey.PublishInfo
import com.qlarr.app.api.survey.Survey
import com.qlarr.app.api.survey.SurveyDesign
import com.qlarr.app.api.survey.objectMapper
import com.qlarr.app.business.guest.GuestSurveyRepository.Companion.BASE_PATH
import java.io.IOException
import java.io.InputStream

interface GuestSurveyRepository {
    suspend fun getGuestSurveyList(): List<Survey>

    suspend fun getGuestSurveyDesign(surveyId: String): SurveyDesign

    suspend fun getSurveyFile(
        surveyId: String,
        resourceId: String,
    ): InputStream

    companion object {
        const val BASE_PATH = "example-surveys"
    }
}

class GuestSurveyRepositoryImpl(
    private val appContext: Context,
) : GuestSurveyRepository {
    override suspend fun getGuestSurveyDesign(surveyId: String): SurveyDesign {
        val assetManager = appContext.assets

        val surveyFolderPath = getSurveyPath(surveyId)
        val resourcesPath = "$surveyFolderPath/resources"
        val files =
            assetManager.list(resourcesPath)!!.map { filename ->
                val fd = assetManager.openFd("$resourcesPath/$filename")
                FileData(filename, fd.length)
            }
        return try {
            assetManager
                .open("$surveyFolderPath/design.json")
                .use { inputStream ->
                    val survey = objectMapper.readValue(inputStream, ObjectNode::class.java)

                    SurveyDesign(files, PublishInfo(1, 1), survey)
                }
        } catch (_: IOException) {
            SurveyDesign(listOf(), PublishInfo(1, 1), null)
        }
    }

    override suspend fun getSurveyFile(
        surveyId: String,
        resourceId: String,
    ): InputStream = appContext.assets.open("${getSurveyPath(surveyId)}/resources/$resourceId")

    override suspend fun getGuestSurveyList(): List<Survey> {
        val assetManager = appContext.assets
        val folders =
            runCatching {
                assetManager.list(BASE_PATH)?.toList()
            }.getOrNull() ?: emptyList()

        return folders.mapNotNull { folder ->
            val folderPath = "$BASE_PATH/$folder"
            getSurveyFromAssets(folderPath)
        }
    }

    private fun getSurveyFromAssets(surveyFolderPath: String): Survey? {
        val surveyFilePath = "$surveyFolderPath/survey.json"
        return try {
            appContext.assets.open(surveyFilePath).use { inputStream ->
                objectMapper.readValue(inputStream, Survey::class.java)
            }
        } catch (e: IOException) {
            Log.w("AssetUtils", "Survey file not found or unreadable: $surveyFilePath", e)
            null
        } catch (e: Exception) {
            Log.e("AssetUtils", "JSON parse error in $surveyFilePath", e)
            null
        }
    }

    private fun getSurveyPath(surveyId: String) = "$BASE_PATH/$surveyId"
}
