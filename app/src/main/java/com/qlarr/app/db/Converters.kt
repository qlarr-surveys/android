package com.qlarr.app.db

import androidx.room.TypeConverter
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.qlarr.app.api.survey.objectMapper
import com.qlarr.surveyengine.model.SurveyLang
import com.qlarr.surveyengine.model.exposed.NavigationIndex
import java.time.LocalDateTime

class JSONOConverter {
    @TypeConverter
    fun fromString(value: String): Map<String, Any> = objectMapper.readValue(value, jacksonTypeRef())

    @TypeConverter
    fun toString(map: Map<String, Any>): String = objectMapper.writeValueAsString(map)
}

class StringListConverter {
    @TypeConverter
    fun fromString(value: String): List<String> = value.split(",").filter { it.isNotEmpty() }

    @TypeConverter
    fun toString(list: List<String>): String = list.joinToString(separator = ",")
}

class NavigationIndexConverter {
    @TypeConverter
    fun fromString(value: String): NavigationIndex = objectMapper.readValue(value, jacksonTypeRef())

    @TypeConverter
    fun toString(navigationIndex: NavigationIndex): String = objectMapper.writeValueAsString(navigationIndex)
}

class LocalDateConverter {
    @TypeConverter
    fun toDate(dateString: String?): LocalDateTime? =
        if (dateString == null) {
            null
        } else {
            LocalDateTime.parse(dateString)
        }

    @TypeConverter
    fun toDateString(date: LocalDateTime?): String? = date?.toString()
}

class SurveyLangConverter {
    @TypeConverter
    fun fromString(value: String): SurveyLang = objectMapper.readValue(value, jacksonTypeRef())

    @TypeConverter
    fun toString(surveyLang: SurveyLang): String = objectMapper.writeValueAsString(surveyLang)
}
