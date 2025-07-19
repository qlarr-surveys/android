package com.qlarr.app.api.survey

import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.DeserializationContext
import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.SerializerProvider
import com.fasterxml.jackson.databind.deser.std.StdDeserializer
import com.fasterxml.jackson.databind.ser.std.StdSerializer
import com.qlarr.surveyengine.model.exposed.ReturnType

class ReturnTypeSerializer : StdSerializer<ReturnType>(ReturnType::class.java) {
    override fun serialize(
        value: ReturnType,
        gen: JsonGenerator,
        serializers: SerializerProvider,
    ) {
        when (value) {
            is ReturnType.Boolean -> gen.writeString("boolean")
            is ReturnType.String -> gen.writeString("string")
            is ReturnType.Int -> gen.writeString("int")
            is ReturnType.Double -> gen.writeString("double")
            is ReturnType.List -> gen.writeString("list")
            is ReturnType.Map -> gen.writeString("map")
            is ReturnType.Date -> gen.writeString("date")
            is ReturnType.File -> gen.writeString("file")
            is ReturnType.Enum -> {
                gen.writeStartObject()
                gen.writeStringField("type", "enum")
                gen.writeFieldName("values")
                gen.writeStartArray()
                value.values.forEach { gen.writeString(it) }
                gen.writeEndArray()
                gen.writeEndObject()
            }
        }
    }
}

class ReturnTypeDeserializer : StdDeserializer<ReturnType>(ReturnType::class.java) {
    override fun deserialize(
        p: JsonParser,
        ctxt: DeserializationContext,
    ): ReturnType {
        val node: JsonNode = p.codec.readTree(p)

        return when {
            node.isTextual -> {
                when (node.asText().lowercase()) {
                    "boolean" -> ReturnType.Boolean
                    "string" -> ReturnType.String
                    "int" -> ReturnType.Int
                    "double" -> ReturnType.Double
                    "list" -> ReturnType.List
                    "map" -> ReturnType.Map
                    "date" -> ReturnType.Date
                    "file" -> ReturnType.File
                    else -> throw IllegalArgumentException("Unknown return type: ${node.asText()}")
                }
            }

            node.isObject -> {
                val type = node.get("type")?.asText()
                when (type) {
                    "enum" -> {
                        val valuesNode =
                            node.get("values")
                                ?: throw IllegalArgumentException("Missing 'values' field for enum type")

                        if (!valuesNode.isArray) {
                            throw IllegalArgumentException("'values' field must be an array for enum type")
                        }

                        val values = valuesNode.map { it.asText() }.toSet()
                        ReturnType.Enum(values)
                    }

                    else -> throw IllegalArgumentException("Unknown object type: $type")
                }
            }

            else -> throw IllegalArgumentException("Expected string or object, got ${node.nodeType}")
        }
    }
}
