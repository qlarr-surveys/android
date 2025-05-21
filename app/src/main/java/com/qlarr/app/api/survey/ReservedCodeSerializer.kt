package com.qlarr.backend.expressionmanager

import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.DeserializationContext
import com.fasterxml.jackson.databind.SerializerProvider
import com.fasterxml.jackson.databind.deser.std.StdDeserializer
import com.fasterxml.jackson.databind.ser.std.StdSerializer
import com.qlarr.surveyengine.model.ReservedCode
import com.qlarr.surveyengine.model.toReservedCode

class ReservedCodeSerializer : StdSerializer<ReservedCode>(ReservedCode::class.java) {
    override fun serialize(value: ReservedCode, gen: JsonGenerator, provider: SerializerProvider) {
        gen.writeString(value.code)
    }

}

class ReservedCodeDeserializer : StdDeserializer<ReservedCode>(ReservedCode::class.java) {
    override fun deserialize(p: JsonParser, ctxt: DeserializationContext): ReservedCode {
        return try {
            p.text.toReservedCode()
        } catch (e: Exception) {
            throw e
        }
    }
}