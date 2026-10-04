package com.qlarr.app.business.survey

import com.fasterxml.jackson.databind.JsonNode
import com.qlarr.surveyengine.model.exposed.NavigationIndex

object OfflineQuotas {
    private const val QUOTA_VALUE_PREFIX = "Survey.quota_"
    private const val DISQUALIFIED = "Survey.disqualified"
    private val QUOTA_CODE = Regex("^[A-Za-z0-9][A-Za-z0-9_]*$")

    data class QuotaLimit(
        val code: String,
        val limit: Int,
    )

    fun limits(survey: JsonNode): List<QuotaLimit> {
        val quotas = survey.get("quotas") ?: return emptyList()
        if (!quotas.isArray) return emptyList()
        val seen = mutableSetOf<String>()
        return quotas.mapNotNull { quota ->
            val code = quota.get("code")?.takeIf { it.isTextual }?.asText()
            val limit = quota.get("limit")
            if (code == null || !QUOTA_CODE.matches(code) || !seen.add(code)) return@mapNotNull null
            QuotaLimit(
                code,
                if (limit != null && limit.isInt && limit.asInt() > 0) limit.asInt() else 0,
            )
        }
    }

    fun fullQuotas(
        limits: List<QuotaLimit>,
        syncedCounts: Map<String, Int>,
        unsyncedCompletes: List<Map<String, Any?>>,
    ): List<String> {
        val counted = unsyncedCompletes.filterNot { isTrue(it[DISQUALIFIED]) }
        return limits
            .filter { quota ->
                quota.limit > 0 &&
                    (syncedCounts[quota.code] ?: 0) +
                    counted.count { isTrue(it["$QUOTA_VALUE_PREFIX${quota.code}"]) } >= quota.limit
            }.map { it.code }
    }

    fun screenedOutQuota(
        fullQuotas: List<String>,
        navigationIndex: NavigationIndex,
        toSave: Map<String, Any?>,
    ): String? {
        if (navigationIndex !is NavigationIndex.End || !isTrue(toSave[DISQUALIFIED])) return null
        return fullQuotas.firstOrNull { isTrue(toSave["$QUOTA_VALUE_PREFIX$it"]) }
    }

    private fun isTrue(value: Any?): Boolean = value == true || value == "true"
}
