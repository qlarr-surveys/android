package com.qlarr.app.api.survey

import com.fasterxml.jackson.databind.node.JsonNodeFactory
import com.fasterxml.jackson.databind.node.ObjectNode
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.qlarr.surveyengine.context.assemble.NotSkippedInstructionManifesto
import com.qlarr.surveyengine.ext.JsonExt
import com.qlarr.surveyengine.model.ComponentIndex
import com.qlarr.surveyengine.model.StringImpactMap
import com.qlarr.surveyengine.model.SurveyLang
import com.qlarr.surveyengine.model.exposed.NavigationMode
import com.qlarr.surveyengine.model.exposed.ResponseField
import com.qlarr.surveyengine.usecase.SurveyNavigationData

data class ValidationJsonOutput(
    val survey: ObjectNode = JsonNodeFactory.instance.objectNode(),
    val schema: List<ResponseField> = listOf(),
    val impactMap: StringImpactMap = mapOf(),
    val componentIndexList: List<ComponentIndex> = listOf(),
    val skipMap: Map<String, List<NotSkippedInstructionManifesto>> = mapOf(),
    val script: String = ""
) {
    fun toDesignerInput(): DesignerInput = DesignerInput(
        objectMapper.readTree(JsonExt.flatObject(survey.toString())) as ObjectNode,
        componentIndexList
    )
    fun surveyNavigationData(): SurveyNavigationData {
        return SurveyNavigationData(
            allowJump = survey.get("allowJump")?.booleanValue() ?: true,
            allowPrevious = survey.get("allowPrevious")?.booleanValue() ?: true,
            skipInvalid = survey.get("skipInvalid")?.booleanValue() ?: true,
            allowIncomplete = survey.get("allowIncomplete")?.booleanValue() ?: true,
            navigationMode = NavigationMode.fromString(survey.get("navigationMode")?.textValue())
        )
    }

    fun stringified() = objectMapper.writeValueAsString(this)

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

    fun resources() = JsonExt.resources(survey.toString())
    fun labels() = JsonExt.labels(survey.toString(), lang = defaultSurveyLang().code)
}

data class DesignerInput(
    val state: ObjectNode,
    val componentIndexList: List<ComponentIndex>
)

