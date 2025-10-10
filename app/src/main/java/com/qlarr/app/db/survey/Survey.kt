package com.qlarr.app.db.survey

import androidx.room.Embedded
import androidx.room.Entity
import androidx.room.PrimaryKey
import com.qlarr.app.api.survey.PublishInfo
import com.qlarr.app.api.survey.SurveyNavigationData
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.business.survey.toPublishInfo
import java.time.LocalDateTime

@Entity(tableName = "survey_data_table")
data class SurveyDataEntity(
    @PrimaryKey val id: String = "",
    val cachedDesign: Boolean,
    val cachedAllFiles: Boolean,
    val creationDate: LocalDateTime,
    val lastModified: LocalDateTime,
    val startDate: LocalDateTime?,
    val endDate: LocalDateTime?,
    val name: String = "",
    val status: String = "",
    val usage: String = "",
    val quota: Int,
    @Embedded val publishInfoEntity: PublishInfoEntity,
    val newVersionAvailable: Boolean,
    val totalResponsesCount: Int,
    val syncedResponseCount: Int,
    val description: String = "",
    val imageUrl: String = "",
    val lastSync: LocalDateTime? = null,
    @Embedded val navigationData: SurveyNavigationData

) {
    fun toSurveyData(
        localResponseCount: Int,
        localCompleteResponseCount: Int,
        localUnsyncedResponseCount: Int,
    ): SurveyData =
        SurveyData(
            id = id,
            creationDate = creationDate,
            lastModified = lastModified,
            startDate = startDate,
            endDate = endDate,
            name = name,
            status = status,
            usage = usage,
            surveyQuota = quota,
            publishInfo = publishInfoEntity.toPublishInfo(),
            newVersionAvailable = false,
            localResponsesCount = localResponseCount,
            localCompleteResponsesCount = localCompleteResponseCount,
            localUnsyncedResponsesCount = localUnsyncedResponseCount,
            syncedResponseCount = syncedResponseCount,
            totalResponseCount = totalResponsesCount,
            description = description,
            imageUrl = imageUrl,
            cachedDesign = cachedDesign,
            cachedAllFiles = cachedAllFiles,
            lastSync = lastSync,
            surveyNavigationData = navigationData
        )
}

data class PublishInfoEntity(
    val version: Int = 0,
    val subVersion: Int = 0,
    val timeLastModified: String = PublishInfo.LAST_MODIFIED_INITIAL,
)
