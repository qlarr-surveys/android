package com.qlarr.app.api.survey

import com.fasterxml.jackson.annotation.JsonProperty

data class FileData(
        @JsonProperty("name") val name: String,
        @JsonProperty("size") val size: Int,
        @JsonProperty("lastModified") val lastModified: String
)