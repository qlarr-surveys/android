package com.qlarr.app.db

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import androidx.room.TypeConverters
import com.qlarr.app.db.model.Response
import com.qlarr.app.db.survey.SurveyDao
import com.qlarr.app.db.survey.SurveyDataEntity


@Database(
    entities = [
        Response::class,
        SurveyDataEntity::class,
    ],
    version = 1,
    exportSchema = false
)
@TypeConverters(
    JSONOConverter::class,
    SurveyLangConverter::class,
    NavigationIndexConverter::class,
    LocalDateConverter::class,
    StringListConverter::class,
)
abstract class QlarrDb : RoomDatabase() {
    abstract fun responseDao(): ResponseDao
    abstract fun surveyDataDao(): SurveyDao
    companion object {

        @Volatile
        private var INSTANCE: QlarrDb? = null

        fun getDatabase(context: Context): QlarrDb {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    QlarrDb::class.java,
                    "qlarr_db"
                )
                    .build()

                INSTANCE = instance

                // return instance
                instance
            }
        }
    }
}

