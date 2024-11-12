package com.qlarr.app.api

import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.DeserializationContext
import com.fasterxml.jackson.databind.JsonDeserializer
import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.JsonSerializer
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.SerializerProvider

class JsonNodeToStringSerializer : JsonSerializer<String>() {
    override fun serialize(value: String?, gen: JsonGenerator?, serializers: SerializerProvider?) {
        if (value != null) {
            gen?.writeRawValue(value)
        }
    }
}

class StringToJsonNodeDeserializer : JsonDeserializer<String>() {
    override fun deserialize(p: JsonParser?, ctxt: DeserializationContext?): String? {
        if (p != null) {
            val objectMapper = ObjectMapper()
            val node: JsonNode = objectMapper.readTree(p)
            return objectMapper.writeValueAsString(node)
        }
        return null
    }
}