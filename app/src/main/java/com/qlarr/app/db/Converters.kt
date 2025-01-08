package com.qlarr.app.db

import androidx.room.TypeConverter
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.qlarr.surveyengine.model.NavigationIndex
import com.qlarr.surveyengine.model.SurveyLang
import com.qlarr.surveyengine.model.jacksonKtMapper
import java.time.LocalDateTime

class JSONOConverter {
    @TypeConverter
    fun fromString(value: String): Map<String, Any> = jacksonKtMapper.readValue(value, jacksonTypeRef())

    @TypeConverter
    fun toString(map: Map<String, Any>): String = jacksonKtMapper.writeValueAsString(map)
}

class StringListConverter {
    @TypeConverter
    fun fromString(value: String): List<String> = value.split(",").filter { it.isNotEmpty() }

    @TypeConverter
    fun toString(list: List<String>): String = list.joinToString(separator = ",")
}

class NavigationIndexConverter {
    @TypeConverter
    fun fromString(value: String): NavigationIndex = jacksonKtMapper.readValue(value, jacksonTypeRef())

    @TypeConverter
    fun toString(navigationIndex: NavigationIndex): String = jacksonKtMapper.writeValueAsString(navigationIndex)
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
    fun fromString(value: String): SurveyLang = jacksonKtMapper.readValue(value, jacksonTypeRef())

    @TypeConverter
    fun toString(surveyLang: SurveyLang): String = jacksonKtMapper.writeValueAsString(surveyLang)
}
