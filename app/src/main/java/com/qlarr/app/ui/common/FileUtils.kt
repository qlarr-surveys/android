package com.qlarr.app.ui.common

import android.content.Context
import android.content.Intent
import android.media.MediaMetadataRetriever
import android.net.Uri
import android.webkit.MimeTypeMap
import androidx.core.content.FileProvider
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.qlarr.app.BuildConfig
import com.qlarr.app.api.survey.ValidationJsonOutput
import com.qlarr.app.api.survey.objectMapper
import java.io.File
import java.net.URLDecoder
import java.net.URLEncoder


object FileUtils {

    private const val VALIDATION_JSON_FILENAME = "validation.json"

    private fun getTargetFile(
        context: Context,
        fileName: String,
        surveyId: String,
        surveyFolder: SurveyFolder,
    ): File {
        val folder = File(context.filesDir, "$surveyId/$surveyFolder")
        if (!folder.exists()) {
            folder.mkdirs()
        }
        return File(folder, fileName)
    }
     fun deleteSurveyDirectory(
        context: Context,
        surveyId: String,
    ): Boolean {
        val folder = File(context.filesDir, surveyId)
        return  folder.exists() && folder.isDirectory && folder.deleteRecursively()
    }

    fun deleteAllFiles(context: Context) {
        context.filesDir?.let { folder ->
            if (folder.exists() && folder.isDirectory) {
                folder.listFiles()?.forEach { file ->
                    try {
                        file.deleteRecursively()
                    } catch (_: Exception) {
                    }
                }
            }
        }
    }

    private fun encode(fileName: String) =
        URLEncoder.encode(URLDecoder.decode(fileName, "UTF-8"), "UTF-8")

    fun getResourceFile(context: Context, fileName: String, surveyId: String): File {
        return getTargetFile(
            context,
            encode(fileName),
            surveyId,
            SurveyFolder.Resources,
        )
    }

    fun getResponseFile(
        context: Context,
        fileName: String,
        surveyId: String,
        responseId: String,
    ): File =
        getTargetFile(
            context,
            encode(fileName),
            surveyId,
            SurveyFolder.Responses(responseId),
        )

    fun getValidationJsonFile(context: Context, surveyId: String): File {
        return getTargetFile(context, VALIDATION_JSON_FILENAME, surveyId, SurveyFolder.Design)
    }

    fun getValidationJson(context: Context, surveyId: String): ValidationJsonOutput? {
        return objectMapper.readValue(
            getValidationJsonFile(context, surveyId).bufferedReader().use {
                it.readText()
            }, jacksonTypeRef<ValidationJsonOutput>()
        )
    }

    fun getDuration(path: String): Long? {
        return try {
            val mediaMetadataRetriever = MediaMetadataRetriever()
            mediaMetadataRetriever.setDataSource(path)
            val durationStr =
                mediaMetadataRetriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_DURATION)
            return durationStr?.toLongOrNull()
        } catch (e: Exception) {
            null
        }
    }

    fun openFile(context: Context, file: File, fileType: String, onError: (e: Exception) -> Unit) {
        val intent = Intent(Intent.ACTION_VIEW)

        val fileUri: Uri = FileProvider.getUriForFile(context, FILE_PROVIDER_AUTHORITY, file)
        intent.setDataAndType(fileUri, fileType)
        intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)

        try {
            context.startActivity(intent)
        } catch (e: Exception) {
            onError(e)
        }
    }

    sealed class SurveyFolder(
        val path: String,
    ) {
        data class Responses(
            private val responseId: String,
        ) : SurveyFolder("responses/$responseId")

        data object Resources : SurveyFolder("resources")

        data object Design : SurveyFolder("design")

        override fun toString(): String = path
    }

    const val FILE_PROVIDER_AUTHORITY = BuildConfig.APPLICATION_ID + ".provider"
}

fun Uri.getFileExtension(context: Context): String? {
    val mimeType: String? = context.contentResolver.getType(this)
    return MimeTypeMap.getSingleton().getExtensionFromMimeType(mimeType)
}
