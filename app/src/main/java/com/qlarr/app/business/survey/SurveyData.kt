package com.qlarr.app.business.survey

import android.os.Parcelable
import com.qlarr.app.api.survey.PublishInfo
import com.qlarr.app.api.survey.Survey
import com.qlarr.app.api.survey.SurveyNavigationData
import kotlinx.parcelize.Parcelize
import java.time.LocalDateTime
import kotlin.math.min

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
    val userQuota: Int,
    val publishInfo: PublishInfo,
    val newVersionAvailable: Boolean,
    val localResponsesCount: Int,
    val localCompleteResponsesCount: Int,
    val localUnsyncedResponsesCount: Int,
    val syncedResponseCount: Int,
    val totalResponseCount: Int,
    val saveTimings: Boolean,
    val backgroundAudio: Boolean,
    val recordGps: Boolean,
    val isSyncing: Boolean = false,
    val description: String,
    val imageUrl: String,
    val lastSync: LocalDateTime? = null,
    val surveyNavigationData: SurveyNavigationData
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
        get() =
            !newVersionAvailable &&
                publishInfo.version > 0 &&
                !quotaExceeded() &&
                surveyStatus == SurveyStatus.ACTIVE

    val isDownloadable: Boolean
        get() =
            !quotaExceeded() &&
                surveyStatus == SurveyStatus.ACTIVE ||
                surveyStatus == SurveyStatus.SCHEDULED

    val isResponsesEnabled get() = localResponsesCount > 0

    fun quotaExceeded(newUnsyncedCount: Int? = null): Boolean {
        val finalUnsyncedCount = newUnsyncedCount ?: localUnsyncedResponsesCount
        val userQuotaExceeded =
            userQuota > 0 && (finalUnsyncedCount + syncedResponseCount) >= userQuota
        val totalQuotaExceeded =
            surveyQuota > 0 && (finalUnsyncedCount + totalResponseCount) >= surveyQuota
        return userQuotaExceeded || totalQuotaExceeded
    }

    fun surveyQuotaLeft(): Int? =
        if (surveyQuota > 0) {
            surveyQuota - (localUnsyncedResponsesCount + totalResponseCount)
        } else {
            null
        }

    fun userQuotaLeft(): Int? = if (userQuota > 0) {
        userQuota - (localUnsyncedResponsesCount + syncedResponseCount)
    } else {
        null
    }

    fun quotaLeft(): Int? {
        return min(
            surveyQuotaLeft() ?: Int.MAX_VALUE,
            userQuotaLeft() ?: Int.MAX_VALUE
        ).takeIf { it < Int.MAX_VALUE }
    }

    companion object {
        fun fromSurveyAndDesign(
            survey: Survey,
            env: BackendEnvironment,
            currentPublishInfo: PublishInfo,
            newVersionAvailable: Boolean,
            responsesCount: Int,
            completeResponsesCount: Int,
            unsyncedCount: Int,
            cachedDesign: Boolean,
            cachedAllFiles: Boolean,
            lastSync: LocalDateTime?,
        ): SurveyData =
            SurveyData(
                id = survey.id,
                creationDate = survey.creationDate,
                lastModified = survey.lastModified,
                startDate = survey.startDate,
                endDate = survey.endDate,
                name = survey.name,
                status = survey.status,
                usage = survey.usage,
                surveyQuota = survey.surveyQuota,
                userQuota = survey.userQuota,
                publishInfo = currentPublishInfo,
                newVersionAvailable = newVersionAvailable,
                localResponsesCount = responsesCount,
                localCompleteResponsesCount = completeResponsesCount,
                localUnsyncedResponsesCount = unsyncedCount,
                syncedResponseCount = survey.syncedResponseCount,
                totalResponseCount = survey.totalResponseCount,
                saveTimings = survey.saveTimings,
                backgroundAudio = survey.backgroundAudio,
                recordGps = survey.recordGps,
                description = survey.description ?: "",
                imageUrl =
                    survey.imageName?.let { name ->
                        when (env) {
                            BackendEnvironment.Guest -> "${env.baseUrl}/${survey.id}/resources/$name"
                            else -> "${env.baseUrl}/survey/${survey.id}/resource/$name"
                        }
                    } ?: "",
                cachedDesign = cachedDesign,
                cachedAllFiles = cachedAllFiles,
                lastSync = lastSync,
                surveyNavigationData = survey.navigationData
            )
    }
}

enum class SurveyStatus {
    ACTIVE,
    EXPIRED,
    SCHEDULED,
}
