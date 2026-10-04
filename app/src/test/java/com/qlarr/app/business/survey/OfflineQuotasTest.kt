package com.qlarr.app.business.survey

import com.fasterxml.jackson.databind.ObjectMapper
import com.qlarr.app.business.survey.OfflineQuotas.QuotaLimit
import com.qlarr.surveyengine.model.exposed.NavigationIndex
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class OfflineQuotasTest {
    private val mapper = ObjectMapper()

    @Test
    fun `reads quota limits from the design, skipping malformed and repeated codes`() {
        val survey =
            mapper.readTree(
                """
            {"quotas": [
              {"code": "QT1", "limit": 5},
              {"code": "QT2"},
              {"code": "QT3", "limit": -1},
              {"code": "bad code", "limit": 3},
              {"code": "QT1", "limit": 99},
              {"label": "no code", "limit": 2}
            ]}
            """,
            )
        assertEquals(
            listOf(QuotaLimit("QT1", 5), QuotaLimit("QT2", 0), QuotaLimit("QT3", 0)),
            OfflineQuotas.limits(survey),
        )
        assertEquals(emptyList<QuotaLimit>(), OfflineQuotas.limits(mapper.readTree("{}")))
    }

    @Test
    fun `a quota is full when synced plus local unsynced members reach the limit`() {
        val limits = listOf(QuotaLimit("QT1", 3), QuotaLimit("QT2", 2), QuotaLimit("QT3", 0))
        val local =
            listOf(
                mapOf("Survey.quota_QT1" to true, "Survey.quota_QT2" to true),
                mapOf("Survey.quota_QT1" to "true"),
                mapOf("Survey.quota_QT1" to true, "Survey.disqualified" to true),
                mapOf("Survey.quota_QT1" to false),
            )
        assertEquals(
            listOf("QT1"),
            OfflineQuotas.fullQuotas(limits, mapOf("QT1" to 1, "QT3" to 100), local),
        )
        assertEquals(
            listOf("QT1", "QT2"),
            OfflineQuotas.fullQuotas(limits, mapOf("QT1" to 1, "QT2" to 1), local),
        )
        assertEquals(emptyList<String>(), OfflineQuotas.fullQuotas(limits, emptyMap(), emptyList()))
    }

    @Test
    fun `names the first full quota a screened-out respondent belongs to`() {
        val end = NavigationIndex.End("G2")
        val toSave =
            mapOf(
                "Survey.disqualified" to true,
                "Survey.quota_QT1" to false,
                "Survey.quota_QT2" to true,
                "Survey.quota_QT3" to true,
            )
        assertEquals(
            "QT2",
            OfflineQuotas.screenedOutQuota(listOf("QT1", "QT2", "QT3"), end, toSave),
        )
        assertNull(OfflineQuotas.screenedOutQuota(listOf("QT1"), end, toSave))
        assertNull(
            OfflineQuotas.screenedOutQuota(
                listOf("QT2"),
                end,
                toSave + ("Survey.disqualified" to false),
            ),
        )
        assertNull(
            OfflineQuotas.screenedOutQuota(
                listOf("QT2"),
                NavigationIndex.Group("G1"),
                toSave,
            ),
        )
    }
}
