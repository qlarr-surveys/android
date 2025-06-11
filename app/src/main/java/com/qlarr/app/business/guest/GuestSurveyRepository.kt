package com.qlarr.app.business.guest

import android.content.Context
import android.util.Log
import com.qlarr.app.api.survey.Survey
import com.qlarr.app.api.survey.objectMapper
import java.io.IOException

interface GuestSurveyRepository {
    suspend fun getGuestSurveyList(): List<Survey>

//    suspend fun getGuestSurveyDesign(
//        surveyId: String,
//        publishInfo: PublishInfo = PublishInfo()
//    ): SurveyDesign
//
//    suspend fun getSurveyFile(
//       surveyId: String,
//       resourceId: String
//    )
}

class GuestSurveyRepositoryImpl(
    private val appContext: Context,
) : GuestSurveyRepository {
    override suspend fun getGuestSurveyList(): List<Survey> {
        val basePath = "example-surveys"
        val folders = listDirectoriesInAssets(basePath)
        return folders.mapNotNull { folder ->
            val folderPath = "$basePath/$folder"
            getSurveyFromAssets(folderPath)
        }
    }

    private fun listDirectoriesInAssets(path: String): List<String> {
        val assetManager = appContext.assets
        return try {
            assetManager.list(path)?.filter { assetName ->
                val fullPath = if (path.isEmpty()) assetName else "$path/$assetName"
                try {
                    assetManager.open(fullPath).close()
                    false // It's a file
                } catch (e: IOException) {
                    // It's a folder
                    true
                }
            } ?: emptyList()
        } catch (e: IOException) {
            Log.e("AssetUtils", "Error listing directories in $path", e)
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
}
