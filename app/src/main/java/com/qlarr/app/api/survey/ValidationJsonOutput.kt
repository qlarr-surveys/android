package com.qlarr.app.api.survey

import com.fasterxml.jackson.databind.node.JsonNodeFactory
import com.fasterxml.jackson.databind.node.ObjectNode
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.qlarr.surveyengine.context.assemble.NotSkippedInstructionManifesto
import com.qlarr.surveyengine.ext.JsonExt
import com.qlarr.surveyengine.model.ComponentIndex
import com.qlarr.surveyengine.model.StringImpactMap
import com.qlarr.surveyengine.model.SurveyLang
import com.qlarr.surveyengine.model.exposed.ResponseField

data class ValidationJsonOutput(
    val survey: ObjectNode = JsonNodeFactory.instance.objectNode(),
    val schema: List<ResponseField> = listOf(),
    val impactMap: StringImpactMap = mapOf(),
    val componentIndexList: List<ComponentIndex> = listOf(),
    val skipMap: Map<String, List<NotSkippedInstructionManifesto>> = mapOf(),
    val script: String = "",
) {
    fun buildCodeIndex(): Map<String, String> =
        mutableMapOf<String, String>().apply {
            var groupIndex = 0
            var questionIndex = 0
            var currentQuestion = ""
            componentIndexList
                .subList(1, componentIndexList.size) // we skip Survey, the first element
                .forEach {
                    if (it.code.startsWith("G")) {
                        groupIndex++
                        put(it.code, "P$groupIndex")
                    } else if (it.code.startsWith("Q") && !it.code.contains("A")) {
                        currentQuestion = it.code
                        questionIndex++
                        put(it.code, "Q$questionIndex")
                    } else {
                        put(it.code, it.code.replace(currentQuestion, this[currentQuestion]!!))
                    }
                }
        }

    fun toDesignerInput(): DesignerInput =
        DesignerInput(
            objectMapper.readTree(JsonExt.flatObject(survey.toString())) as ObjectNode,
            componentIndexList,
        )

    fun stringified(): String = objectMapper.writeValueAsString(this)

    fun availableLangByCode(code: String?): SurveyLang {
        val defaultLang = defaultSurveyLang()
        return if (code == null || defaultLang.code == code) {
            defaultLang
        } else {
            additionalLang().firstOrNull { it.code == code } ?: defaultLang
        }
    }

    fun defaultSurveyLang(): SurveyLang =
        try {
            objectMapper.treeToValue(
                survey.get("defaultLang") as? ObjectNode,
                SurveyLang::class.java,
            )
        } catch (e: Exception) {
            SurveyLang.EN
        }

    fun additionalLang(): List<SurveyLang> =
        try {
            objectMapper.readValue(
                survey.get("additionalLang").toString(),
                jacksonTypeRef<List<SurveyLang>>(),
            )
        } catch (e: Exception) {
            listOf()
        }

    fun resources() = JsonExt.resources(survey.toString())

    fun labels() = JsonExt.labels(survey.toString(), lang = defaultSurveyLang().code)
}

data class DesignerInput(
    val state: ObjectNode,
    val componentIndexList: List<ComponentIndex>,
)
