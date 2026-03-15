package com.qlarr.app.db

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import androidx.room.TypeConverters
import androidx.room.migration.Migration
import androidx.sqlite.db.SupportSQLiteDatabase
import com.qlarr.app.db.model.Response
import com.qlarr.app.db.survey.SurveyDao
import com.qlarr.app.db.survey.SurveyDataEntity


@Database(
    entities = [
        Response::class,
        SurveyDataEntity::class,
    ],
    version = 2,
    exportSchema = false
)
@TypeConverters(
    JSONOConverter::class,
    SurveyLangConverter::class,
    NavigationIndexConverter::class,
    LocalDateConverter::class,
    StringListConverter::class,
    ResponseEventListConverter::class
)
abstract class QlarrDb : RoomDatabase() {
    abstract fun responseDao(): ResponseDao
    abstract fun surveyDataDao(): SurveyDao
    companion object {

        val MIGRATION_1_2 = object : Migration(1, 2) {
            override fun migrate(db: SupportSQLiteDatabase) {
                db.execSQL("ALTER TABLE response ADD COLUMN events TEXT NOT NULL DEFAULT '[]'")
                db.execSQL("ALTER TABLE survey_data_table ADD COLUMN userQuota INTEGER NOT NULL DEFAULT 0")
                db.execSQL("ALTER TABLE survey_data_table ADD COLUMN saveTimings INTEGER NOT NULL DEFAULT 0")
                db.execSQL("ALTER TABLE survey_data_table ADD COLUMN backgroundAudio INTEGER NOT NULL DEFAULT 0")
                db.execSQL("ALTER TABLE survey_data_table ADD COLUMN recordGps INTEGER NOT NULL DEFAULT 0")
            }
        }

        @Volatile
        private var INSTANCE: QlarrDb? = null

        fun getDatabase(context: Context): QlarrDb {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    QlarrDb::class.java,
                    "qlarr_db"
                )
                    .addMigrations(MIGRATION_1_2)
                    .fallbackToDestructiveMigration()
                    .build()

                INSTANCE = instance

                // return instance
                instance
            }
        }
    }
}

