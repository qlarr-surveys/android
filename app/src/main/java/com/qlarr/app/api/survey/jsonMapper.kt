package com.qlarr.app.api.survey

import com.fasterxml.jackson.annotation.JsonAutoDetect
import com.fasterxml.jackson.annotation.PropertyAccessor
import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.module.SimpleModule
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.fasterxml.jackson.module.kotlin.KotlinFeature
import com.fasterxml.jackson.module.kotlin.KotlinModule
import com.qlarr.backend.expressionmanager.NavigationDirectionDeserializer
import com.qlarr.backend.expressionmanager.NavigationDirectionSerializer
import com.qlarr.backend.expressionmanager.ReservedCodeDeserializer
import com.qlarr.backend.expressionmanager.ReservedCodeSerializer
import com.qlarr.backend.expressionmanager.SurveyLangDeserializer
import com.qlarr.backend.expressionmanager.SurveyLangSerializer
import com.qlarr.surveyengine.model.ReservedCode
import com.qlarr.surveyengine.model.SurveyLang
import com.qlarr.surveyengine.model.exposed.NavigationDirection
import com.qlarr.surveyengine.model.exposed.NavigationIndex
import com.qlarr.surveyengine.model.exposed.ReturnType

val objectMapper: ObjectMapper =
    ObjectMapper()
        .registerModule(
            KotlinModule
                .Builder()
                .enable(KotlinFeature.NullIsSameAsDefault)
                .enable(KotlinFeature.NullToEmptyCollection)
                .enable(KotlinFeature.NullToEmptyMap)
                .build(),
        ).registerModule(
            SimpleModule()
                .addSerializer(NavigationIndexSerializer())
                .addSerializer(NavigationDirectionSerializer())
                .addSerializer(SurveyLangSerializer())
                .addSerializer(ReservedCodeSerializer())
                .addSerializer(ReturnTypeSerializer())
                .addDeserializer(SurveyLang::class.java, SurveyLangDeserializer())
                .addDeserializer(NavigationIndex::class.java, NavigationIndexDeserializer())
                .addDeserializer(NavigationDirection::class.java, NavigationDirectionDeserializer())
                .addDeserializer(SurveyLang::class.java, SurveyLangDeserializer())
                .addDeserializer(ReservedCode::class.java, ReservedCodeDeserializer())
                .addDeserializer(ReturnType::class.java, ReturnTypeDeserializer()),
        ).setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY)
        .registerModules(JavaTimeModule())
        .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
