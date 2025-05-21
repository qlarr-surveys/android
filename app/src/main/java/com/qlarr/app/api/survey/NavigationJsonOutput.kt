package com.qlarr.app.api.survey

import com.fasterxml.jackson.databind.node.JsonNodeFactory
import com.fasterxml.jackson.databind.node.ObjectNode
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.qlarr.surveyengine.model.SurveyLang
import com.qlarr.surveyengine.model.exposed.NavigationIndex


data class NavigationJsonOutput(
    val survey: ObjectNode = JsonNodeFactory.instance.objectNode(),
    val state: ObjectNode = JsonNodeFactory.instance.objectNode(),
    val navigationIndex: NavigationIndex,
    val toSave: Map<String, Any> = mapOf()
){
    fun defaultSurveyLang(): SurveyLang =
        try {
            objectMapper.treeToValue(survey.get("defaultLang") as? ObjectNode, SurveyLang::class.java)
        } catch (e: Exception) {
            SurveyLang.EN
        }

    fun additionalLang(): List<SurveyLang> =
        try {
            objectMapper.readValue(survey.get("additionalLang").toString(), jacksonTypeRef<List<SurveyLang>>())
        } catch (e: Exception) {
            listOf()
        }
}