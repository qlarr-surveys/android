package com.qlarr.app.db

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy.Companion.REPLACE
import androidx.room.Query
import androidx.room.Transaction
import com.qlarr.app.api.survey.ResponseEvent
import com.qlarr.app.db.model.Response
import com.qlarr.surveyengine.model.exposed.NavigationIndex
import java.time.LocalDateTime


@Dao
interface ResponseDao {

    @Query("SELECT * FROM response WHERE id == :id LIMIT 1")
    suspend fun get(id: String): Response

    @Insert(onConflict = REPLACE)
    suspend fun insert(response: Response)

    @Query("DELETE FROM response WHERE surveyId = :surveyId")
    suspend fun deleteBySurveyId(surveyId: String)

    @Query("DELETE FROM response WHERE id = :responseId")
    suspend fun deleteById(responseId: String)

    @Query("UPDATE response SET is_synced = 1 WHERE id == :id")
    suspend fun setSynced(id: String)

    @Query("UPDATE response SET response_values = :values WHERE id == :id")
    suspend fun updateValues(id: String, values: Map<String, Any>)

    @Query(
        "UPDATE response SET " +
            "response_values = :values," +
            "events = :events," +
            "startDate = :startDate," +
            "submitDate = :submitDate," +
            "lang = :lang," +
            " navigation_index = :navigationIndex WHERE id == :id"
    )
    suspend fun update(
        values: Map<String, Any>,
        lang: String,
        startDate: LocalDateTime,
        submitDate: LocalDateTime?,
        events: List<ResponseEvent>,
        navigationIndex: NavigationIndex,
        id: String
    )

    @Transaction
    suspend fun updateAndAppendOldEvents(
        id: String,
        values: Map<String, Any>,
        lang: String,
        startDate: LocalDateTime,
        submitDate: LocalDateTime?,
        navigationIndex: NavigationIndex,
        events: List<ResponseEvent>
    ) {
        val current = get(id)
        update(
            id = id,
            values = values,
            lang = lang,
            startDate = startDate,
            submitDate = submitDate,
            navigationIndex = navigationIndex,
            events = current.events.toMutableList().apply { addAll(events) }
        )
    }

    @Transaction
    suspend fun addEvent(responseId: String, event: ResponseEvent) {
        val response = get(responseId)
        updateAndAppendOldEvents(
            id = responseId,
            values = response.values,
            lang = response.lang,
            startDate = response.startDate,
            submitDate = response.submitDate,
            navigationIndex = response.navigationIndex,
            events = listOf(event)
        )
    }

    @Query("SELECT * FROM response WHERE surveyId = :surveyId")
    suspend fun getAllByUserAndSurvey(surveyId: String): List<Response>

    @Query(
        "SELECT * FROM response WHERE surveyId = :surveyId ORDER BY startDate DESC " +
                "LIMIT :perPage OFFSET (:page*:perPage)"
    )
    suspend fun getByUserAndSurvey(surveyId: String, page: Int, perPage: Int): List<Response>

    @Query("SELECT COUNT(*) FROM response WHERE surveyId = :surveyId")
    suspend fun countByUserAndSurvey(surveyId: String): Int

    @Query("SELECT COUNT(*) FROM response WHERE surveyId = :surveyId AND submitDate IS NOT NULL")
    suspend fun countCompleteByUserAndSurvey(surveyId: String): Int

    @Query("SELECT COUNT(*) FROM response WHERE surveyId = :surveyId AND is_synced = 0 AND submitDate IS NOT NULL")
    suspend fun countUnsyncedResponses(surveyId: String): Int

    @Query("UPDATE response SET is_synced = 1 WHERE id = :responseId")
    suspend fun markResponseAsSynced(responseId: String)

    @Query("SELECT * FROM response WHERE surveyId = :surveyId AND submitDate IS NOT NULL ORDER BY submitDate DESC LIMIT 1")
    suspend fun getLastResponse(surveyId: String): Response?

}
