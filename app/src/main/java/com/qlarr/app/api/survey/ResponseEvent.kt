package com.qlarr.app.api.survey

import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import com.qlarr.surveyengine.model.exposed.NavigationDirection
import java.time.LocalDateTime

const val VALUE_TIMING = "ValueTiming"
const val VOICE_RECORDING = "VoiceRecording"
const val LOCATION = "Location"
const val NAVIGATION = "Navigation"


@JsonTypeInfo(
    use = JsonTypeInfo.Id.NAME,
    include = JsonTypeInfo.As.EXISTING_PROPERTY,
    property = "name",
    visible = true
)
@JsonSubTypes(
    JsonSubTypes.Type(ResponseEvent.Value::class, name = VALUE_TIMING),
    JsonSubTypes.Type(ResponseEvent.VoiceRecording::class, name = VOICE_RECORDING),
    JsonSubTypes.Type(ResponseEvent.Location::class, name = LOCATION),
    JsonSubTypes.Type(ResponseEvent.Navigation::class, name = NAVIGATION),
)
sealed class ResponseEvent(
    open val time: LocalDateTime,
    open val name: String
) {
    data class Value(
        val code: String,
        @JsonFormat(pattern = DATE_TIME_UTC_FORMAT)
        override val time: LocalDateTime
    ) : ResponseEvent(time, VALUE_TIMING)

    data class VoiceRecording(
        val fileName: String,
        @JsonFormat(pattern = DATE_TIME_UTC_FORMAT)
        override val time: LocalDateTime
    ) : ResponseEvent(time, VOICE_RECORDING)

    data class Location(
        val longitude: Double,
        val latitude: Double,
        @JsonFormat(pattern = DATE_TIME_UTC_FORMAT)
        override val time: LocalDateTime
    ) : ResponseEvent(time, LOCATION)

    data class Navigation(
        val from: String,
        val to: String,
        val direction: NavigationDirection,
        @JsonFormat(pattern = DATE_TIME_UTC_FORMAT)
        override val time: LocalDateTime
    ) : ResponseEvent(time, NAVIGATION)
}

const val DATE_TIME_UTC_FORMAT = "yyyy-MM-dd HH:mm:ss"