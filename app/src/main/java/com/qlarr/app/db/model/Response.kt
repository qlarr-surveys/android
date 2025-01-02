package com.qlarr.app.db.model

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.ForeignKey
import androidx.room.PrimaryKey
import com.qlarr.app.db.survey.SurveyDataEntity
import com.qlarr.surveyengine.model.NavigationIndex
import java.time.LocalDateTime

@Entity(
    tableName = "response", foreignKeys = [
        ForeignKey(
            entity = SurveyDataEntity::class,
            parentColumns = ["id"],
            childColumns = ["surveyId"],
            onDelete = ForeignKey.NO_ACTION
        )
    ]
)

data class Response(
    @PrimaryKey
    val id: String,

    @ColumnInfo(name = "navigation_index")
    val navigationIndex: NavigationIndex,

    @ColumnInfo(name = "is_synced")
    val isSynced: Boolean,

    val lang: String,

    @ColumnInfo(index = true)
    val surveyId: String,

    val startDate: LocalDateTime,

    val submitDate: LocalDateTime?,

    @ColumnInfo(name = "response_values")
    val values: Map<String, Any>,

    val version: Int,

) {
    companion object {
        const val STORED_FILENAME_KEY = "stored_filename"
        const val ACTUAL_FILENAME_KEY = "filename"
    }
}
