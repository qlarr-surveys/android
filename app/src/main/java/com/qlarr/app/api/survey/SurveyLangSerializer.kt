package com.qlarr.backend.expressionmanager

import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.DeserializationContext
import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.SerializerProvider
import com.fasterxml.jackson.databind.deser.std.StdDeserializer
import com.fasterxml.jackson.databind.ser.std.StdSerializer
import com.qlarr.surveyengine.model.SurveyLang

class SurveyLangSerializer : StdSerializer<SurveyLang>(SurveyLang::class.java) {
    override fun serialize(value: SurveyLang, gen: JsonGenerator, provider: SerializerProvider?) {
        gen.writeStartObject()
        gen.writeStringField("code", value.code)
        gen.writeStringField("name", value.name)
        gen.writeEndObject()
    }
}

class SurveyLangDeserializer : StdDeserializer<SurveyLang>(SurveyLang::class.java) {
    override fun deserialize(p: JsonParser, ctxt: DeserializationContext?): SurveyLang {
        val node: JsonNode = p.codec.readTree(p)
        return SurveyLang(node["code"].asText(), node["name"].asText())
    }

}