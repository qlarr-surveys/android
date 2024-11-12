package com.qlarr.app.api.survey

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

@JsonIgnoreProperties(ignoreUnknown = true)
data class ResponseCount(
    @JsonProperty("completeResponseCount") val completeResponseCount: Int,
    @JsonProperty("userResponsesCount") val userResponsesCount: Int
)