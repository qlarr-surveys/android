package com.qlarr.app.api.common

import com.fasterxml.jackson.annotation.JsonProperty

data class User(
        @JsonProperty("id") val id: String,
        @JsonProperty("firstName") val firstName: String,
        @JsonProperty("lastName") val lastName: String,
        @JsonProperty("email") val email: String,
        @JsonProperty("roles") val roles: Set<String>
)