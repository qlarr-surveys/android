package com.qlarr.app.api.survey

import android.os.Parcelable
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import kotlinx.parcelize.Parcelize

@Parcelize
@JsonIgnoreProperties(ignoreUnknown = true)
data class PublishInfo(
    @JsonProperty("version") val version: Int = 0,
    @JsonProperty("subVersion") val subVersion: Int = 0,
    @JsonProperty("lastModified") val lastModified: String = LAST_MODIFIED_INITIAL,
) : Parcelable {
    companion object {
        const val LAST_MODIFIED_INITIAL = "1970-01-01 00:00:00"
    }

    fun requiresUpdates(publishInfo: PublishInfo?): Boolean {
        return version != publishInfo?.version || subVersion != publishInfo.subVersion
    }
}
