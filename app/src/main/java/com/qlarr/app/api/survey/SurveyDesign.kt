package com.qlarr.app.api.survey

import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.node.ObjectNode

data class SurveyDesign(
        @JsonProperty("files") val files: List<FileData>,
        @JsonProperty("publishInfo") val publishInfo: PublishInfo,
        @JsonProperty("validationJsonOutput")
        val validationJsonOutput: ObjectNode?
)