package com.qlarr.app.db

import androidx.room.TypeConverter
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.qlarr.surveyengine.model.NavigationIndex
import com.qlarr.surveyengine.model.SurveyLang
import com.qlarr.surveyengine.model.jacksonKtMapper
import java.time.LocalDateTime


class JSONOConverter {
    @TypeConverter
    fun fromString(value: String): Map<String, Any> {
        return jacksonKtMapper.readValue(value, jacksonTypeRef())
    }

    @TypeConverter
    fun toString(map: Map<String, Any>): String {
        return jacksonKtMapper.writeValueAsString(map)
    }
}

class StringListConverter {
    @TypeConverter
    fun fromString(value: String): List<String> {
        return value.split(",").filter { it.isNotEmpty() }
    }

    @TypeConverter
    fun toString(list: List<String>): String {
        return list.joinToString(separator = ",")
    }
}

class NavigationIndexConverter {
    @TypeConverter
    fun fromString(value: String): NavigationIndex {
        return jacksonKtMapper.readValue(value, jacksonTypeRef())
    }

    @TypeConverter
    fun toString(navigationIndex: NavigationIndex): String {
        return jacksonKtMapper.writeValueAsString(navigationIndex)
    }
}

class LocalDateConverter {
    @TypeConverter
    fun toDate(dateString: String?): LocalDateTime? {
        return if (dateString == null) {
            null
        } else {
            LocalDateTime.parse(dateString)
        }
    }

    @TypeConverter
    fun toDateString(date: LocalDateTime?): String? {
        return date?.toString()
    }
}

class SurveyLangConverter {
    @TypeConverter
    fun fromString(value: String): SurveyLang {
        return jacksonKtMapper.readValue(value, jacksonTypeRef())
    }

    @TypeConverter
    fun toString(surveyLang: SurveyLang): String {
        return jacksonKtMapper.writeValueAsString(surveyLang)
    }
}
