package com.qlarr.app.business.guest

import android.content.Context
import android.util.Log
import com.fasterxml.jackson.databind.node.ObjectNode
import com.qlarr.app.api.survey.FileData
import com.qlarr.app.api.survey.PublishInfo
import com.qlarr.app.api.survey.Survey
import com.qlarr.app.api.survey.SurveyDesign
import com.qlarr.app.api.survey.objectMapper
import java.io.IOException

interface GuestSurveyRepository {
    suspend fun getGuestSurveyList(): List<Survey>

    suspend fun getGuestSurveyDesign(surveyId: String): SurveyDesign
//
//    suspend fun getSurveyFile(
//       surveyId: String,
//       resourceId: String
//    )
}

class GuestSurveyRepositoryImpl(
    private val appContext: Context,
) : GuestSurveyRepository {
    private val surveyFolderMap: MutableMap<String, String> = mutableMapOf()

    override suspend fun getGuestSurveyDesign(surveyId: String): SurveyDesign {
        val assetManager = appContext.assets

        val surveyFolderPath = "${BASE_PATH}/${surveyFolderMap[surveyId]!!}"
        val files =
            assetManager.list("$surveyFolderPath/resources")!!.map { filename ->
                val fd = assetManager.openFd(filename)
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

    override suspend fun getGuestSurveyList(): List<Survey> {
        val folders = listFolders()
        return folders.mapNotNull { folder ->
            val folderPath = "$BASE_PATH/$folder"
            val survey = getSurveyFromAssets(folderPath)
            if (survey != null) {
                surveyFolderMap.put(survey.id, folderPath)
            }
            survey
        }
    }

    private fun listFolders(): List<String> {
        val assetManager = appContext.assets
        return try {
            assetManager.list(BASE_PATH)?.toList() ?: emptyList()
        } catch (e: IOException) {
            Log.e("AssetUtils", "Error listing directories", e)
            emptyList()
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

    companion object {
        private const val BASE_PATH = "example-surveys"
    }
}
