package com.qlarr.backend.expressionmanager

import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.DeserializationContext
import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.SerializerProvider
import com.fasterxml.jackson.databind.deser.std.StdDeserializer
import com.fasterxml.jackson.databind.node.ArrayNode
import com.fasterxml.jackson.databind.ser.std.StdSerializer
import com.qlarr.surveyengine.model.exposed.NavigationDirection
import com.qlarr.surveyengine.model.exposed.NavigationIndex

class NavigationIndexDeserializer : StdDeserializer<NavigationIndex>(NavigationIndex::class.java) {
    override fun deserialize(p: JsonParser, ctxt: DeserializationContext): NavigationIndex {
        val node: JsonNode = p.codec.readTree(p)
        var objName = ""
        var groupId = ""
        var groupIds = listOf<String>()
        node.fieldNames().forEach { name ->
            when (name) {
                "name" -> objName = node[name].textValue()
                "groupId" -> groupId = node[name].textValue()
                "groupIds" -> groupIds = (node[name] as ArrayNode).map { it.textValue() }
            }
        }
        return when(objName) {
            "end" -> NavigationIndex.End(groupId)
            "group" -> NavigationIndex.Group(groupId)
            "groups" -> NavigationIndex.Groups(groupIds)
            "question" -> NavigationIndex.Question(groupId)
            else -> throw IllegalStateException("invalid name for NavigationIndex")
        }
    }
}

class NavigationIndexSerializer : StdSerializer<NavigationIndex>(NavigationIndex::class.java) {
    override fun serialize(value: NavigationIndex, gen: JsonGenerator, provider: SerializerProvider) {
        gen.writeStartObject()
        gen.writeStringField("name", value.name)
        when (value) {
            is NavigationIndex.End -> gen.writeStringField("groupId", value.groupId)
            is NavigationIndex.Group -> gen.writeStringField("groupId", value.groupId)
            is NavigationIndex.Groups -> {
                gen.writeStartArray()
                value.groupIds.forEach {
                    gen.writeString(it)
                }
                gen.writeEndArray()
            }

            is NavigationIndex.Question -> gen.writeStringField("questionId", value.questionId)
        }
        gen.writeEndObject()
    }
}