package com.qlarr.app.ui.survey

import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import com.qlarr.app.R
import com.qlarr.app.business.parcelable
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.ui.common.theme.QlarrTheme
import com.qlarr.app.ui.common.theme.QlarrTopBar

class SurveyInfoActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val surveyData: SurveyData = intent.parcelable(EXTRA_SURVEY)
            ?: throw IllegalArgumentException("Survey is missing!")
        setContent {
            QlarrTheme {
                Scaffold(
                    topBar = {
                        QlarrTopBar(
                            title = stringResource(id = R.string.title_activity_info),
                            onBackPressed = { onBackPressedDispatcher.onBackPressed() })
                    }
                ) { paddingValues ->
                    SurveyInfoScreen(
                        modifier = Modifier.padding(paddingValues),
                        surveyData = surveyData
                    )
                }
            }
        }
    }

    companion object {
        private const val EXTRA_SURVEY = "SURVEY_DATA"
        fun createIntent(context: Context, surveyData: SurveyData) = Intent(
            context,
            SurveyInfoActivity::class.java
        ).apply {
            putExtra(EXTRA_SURVEY, surveyData)
        }
    }
}