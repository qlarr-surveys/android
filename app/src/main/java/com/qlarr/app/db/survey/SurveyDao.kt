package com.qlarr.app.db.survey

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update

@Dao
interface SurveyDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(surveyDataEntity: SurveyDataEntity)

    @Update
    suspend fun update(surveyDataEntity: SurveyDataEntity)

    @Query("SELECT * FROM survey_data_table WHERE id = :surveyDataId")
    suspend fun getSurveyDataById(surveyDataId: String): SurveyDataEntity?

    @Query("SELECT * FROM survey_data_table")
    suspend fun getAllSurveyData(): List<SurveyDataEntity>

    @Query("DELETE FROM survey_data_table WHERE id = :surveyId")
    suspend fun deleteById(surveyId: String)

}
