package com.qlarr.app.business.survey

import android.os.Parcelable
import com.qlarr.app.api.survey.PublishInfo
import com.qlarr.app.api.survey.Survey
import kotlinx.parcelize.Parcelize
import java.time.LocalDateTime

@Parcelize
data class SurveyData(
    val id: String,
    val cachedDesign: Boolean,
    val cachedAllFiles: Boolean,
    val creationDate: LocalDateTime,
    val lastModified: LocalDateTime,
    val startDate: LocalDateTime?,
    val endDate: LocalDateTime?,
    val name: String,
    val status: String,
    val usage: String,
    val surveyQuota: Int,
    val publishInfo: PublishInfo,
    val newVersionAvailable: Boolean,
    val localResponsesCount: Int,
    val localCompleteResponsesCount: Int,
    val localUnsyncedResponsesCount: Int,
    val syncedResponseCount: Int,
    val totalResponseCount: Int,
    val isSyncing: Boolean = false,
    val description: String,
    val imageUrl: String,
) : Parcelable {

    private val scheduled: Boolean
        get() = startDate != null && startDate.isAfter(LocalDateTime.now())
    private val expired: Boolean
        get() = endDate != null && endDate.isBefore(LocalDateTime.now())

    val surveyStatus: SurveyStatus
        get() {
            return when {
                scheduled -> SurveyStatus.SCHEDULED
                expired -> SurveyStatus.EXPIRED
                else -> SurveyStatus.ACTIVE
            }
        }

    val isPlayEnabled: Boolean
        get() = !newVersionAvailable
                && publishInfo.version > 0
                && !quotaExceeded()
                && surveyStatus == SurveyStatus.ACTIVE

    val isDownloadable: Boolean
        get() = !quotaExceeded()
                && surveyStatus == SurveyStatus.ACTIVE || surveyStatus == SurveyStatus.SCHEDULED

    val isResponsesEnabled get() = localResponsesCount > 0

    fun quotaExceeded(newUnsyncedCount: Int? = null): Boolean {
        val finalUnsyncedCount = newUnsyncedCount ?: localUnsyncedResponsesCount
        return surveyQuota > 0 && (finalUnsyncedCount + totalResponseCount) >= surveyQuota
    }

    fun surveyQuotaLeft(): Int? = if (surveyQuota > 0) {
        surveyQuota - (localUnsyncedResponsesCount + totalResponseCount)
    } else {
        null
    }

    fun quotaLeft(): Int? {
        return surveyQuotaLeft()
    }

    companion object {
        fun fromSurveyAndDesign(
            survey: Survey,
            baseUrl: String,
            currentPublishInfo: PublishInfo,
            newVersionAvailable: Boolean,
            responsesCount: Int,
            completeResponsesCount: Int,
            unsyncedCount: Int,
            cachedDesign: Boolean,
            cachedAllFiles: Boolean
        ): SurveyData {
            return SurveyData(
                id = survey.id,
                creationDate = survey.creationDate,
                lastModified = survey.lastModified,
                startDate = survey.startDate,
                endDate = survey.endDate,
                name = survey.name,
                status = survey.status,
                usage = survey.usage,
                surveyQuota = survey.surveyQuota,
                publishInfo = currentPublishInfo,
                newVersionAvailable = newVersionAvailable,
                localResponsesCount = responsesCount,
                localCompleteResponsesCount = completeResponsesCount,
                localUnsyncedResponsesCount = unsyncedCount,
                syncedResponseCount = survey.syncedResponseCount,
                totalResponseCount = survey.totalResponseCount,
                description = survey.description ?: "",
                imageUrl = survey.imageName?.let { name ->
                    ("$baseUrl/survey/${survey.id}/resource/$name")
                } ?: "",
                cachedDesign = cachedDesign,
                cachedAllFiles = cachedAllFiles
            )
        }
    }
}

enum class SurveyStatus {
    ACTIVE, EXPIRED, SCHEDULED
}