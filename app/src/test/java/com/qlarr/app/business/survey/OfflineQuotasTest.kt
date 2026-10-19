package com.qlarr.app.business.survey

import com.fasterxml.jackson.databind.ObjectMapper
import com.qlarr.app.business.survey.OfflineQuotas.QuotaLimit
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
    fun `full quotas become is_quota_met inputs for the engine`() {
        assertEquals(
            mapOf(
                "Survey.is_quota_met_QT1" to true,
                "Survey.is_quota_met_QT2" to true,
            ),
            OfflineQuotas.quotaInputs(listOf("QT1", "QT2")),
        )
        assertEquals(emptyMap<String, Boolean>(), OfflineQuotas.quotaInputs(emptyList()))
    }

    @Test
    fun `reads the screening quota the engine reported`() {
        assertEquals(
            "QT2",
            OfflineQuotas.screenedOutQuota(
                mapOf(
                    "Survey.disqualified" to true,
                    "Survey.screened_out_by_quota" to "QT2",
                ),
            ),
        )
        assertNull(OfflineQuotas.screenedOutQuota(mapOf("Survey.disqualified" to true)))
        assertNull(OfflineQuotas.screenedOutQuota(emptyMap()))
    }
}
