package com.qlarr.app.api.survey

import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.DeserializationContext
import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.SerializerProvider
import com.fasterxml.jackson.databind.deser.std.StdDeserializer
import com.fasterxml.jackson.databind.ser.std.StdSerializer
import com.fasterxml.jackson.module.kotlin.treeToValue
import com.qlarr.app.api.survey.objectMapper
import com.qlarr.surveyengine.model.exposed.NavigationDirection
import com.qlarr.surveyengine.model.exposed.NavigationIndex

class NavigationDirectionDeserializer : StdDeserializer<NavigationDirection>(NavigationDirection::class.java) {
    override fun deserialize(
        p: JsonParser,
        ctxt: DeserializationContext,
    ): NavigationDirection {
        val node: JsonNode = p.codec.readTree(p)
        var navigationIndex: NavigationIndex? = null
        var objName = ""
        node.fieldNames().forEach { name ->
            when (name) {
                "name" -> objName = node[name].textValue()
                "navigationIndex" -> navigationIndex = objectMapper.treeToValue(node[name])
            }
        }
        return when (objName) {
            "START" -> NavigationDirection.Start
            "RESUME" -> NavigationDirection.Resume
            "PREV" -> NavigationDirection.Previous
            "JUMP" -> NavigationDirection.Jump(navigationIndex!!)
            "NEXT" -> NavigationDirection.Next
            else -> throw IllegalStateException("invalid name for NavigationDirection")
        }
    }
}

class NavigationDirectionSerializer : StdSerializer<NavigationDirection>(NavigationDirection::class.java) {
    override fun serialize(
        value: NavigationDirection,
        gen: JsonGenerator,
        provider: SerializerProvider,
    ) {
        gen.writeStartObject()
        gen.writeStringField("name", value.name)
        if (value is NavigationDirection.Jump) {
            gen.writeObjectField("navigationIndex", value.navigationIndex)
        }
        gen.writeEndObject()
    }
}
