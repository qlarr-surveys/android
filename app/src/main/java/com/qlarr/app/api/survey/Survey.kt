package com.qlarr.app.api.survey

import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.annotation.JsonDeserialize
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer
import com.qlarr.expressionmanager.model.NavigationIndex
import java.time.LocalDateTime

@JsonIgnoreProperties(ignoreUnknown = true)
data class Survey(
    @JsonProperty("id") val id: String,
    @JsonFormat(pattern = DATE_TIME_UTC_FORMAT)
    @JsonDeserialize(using = LocalDateTimeDeserializer::class)
    @JsonProperty("creationDate") val creationDate: LocalDateTime,
    @JsonFormat(pattern = DATE_TIME_UTC_FORMAT)
    @JsonDeserialize(using = LocalDateTimeDeserializer::class)
    @JsonProperty("lastModified") val lastModified: LocalDateTime,
    @JsonFormat(pattern = DATE_TIME_UTC_FORMAT)
    @JsonDeserialize(using = LocalDateTimeDeserializer::class)
    @JsonProperty("startDate") val startDate: LocalDateTime?,
    @JsonFormat(pattern = DATE_TIME_UTC_FORMAT)
    @JsonDeserialize(using = LocalDateTimeDeserializer::class)
    @JsonProperty("endDate") val endDate: LocalDateTime?,
    @JsonProperty("name") val name: String,
    @JsonProperty("status") val status: String,
    @JsonProperty("usage") val usage: String,
    @JsonProperty("completeResponseCount") val totalResponseCount: Int,
    @JsonProperty("userResponsesCount") val syncedResponseCount: Int,
    @JsonProperty("surveyQuota") val surveyQuota: Int,
    @JsonProperty("latestVersion") val publishInfo: PublishInfo?,
    @JsonProperty("image") val imageName: String?,
    @JsonProperty("description") val description: String?
)

data class UploadResponseRequestData(
    val versionId: Int,
    val lang: String,
    val values: Map<String, Any> = mapOf(),
    val startDate: LocalDateTime,
    val submitDate: LocalDateTime?,
    val userId: String,
    val navigationIndex: NavigationIndex
)

const val DATE_TIME_UTC_FORMAT = "yyyy-MM-dd HH:mm:ss"
