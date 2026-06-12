package com.qlarr.app.ui.survey

import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.lifecycle.lifecycleScope
import com.qlarr.app.R
import com.qlarr.app.business.parcelable
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.ui.common.error.ErrorDisplayManager
import com.qlarr.app.ui.common.theme.QlarrTheme
import com.qlarr.app.ui.common.theme.QlarrTopBar
import com.qlarr.app.ui.responses.ResponsesActivity
import kotlinx.coroutines.launch
import org.koin.android.ext.android.inject
import org.koin.androidx.viewmodel.ext.android.getViewModel
import org.koin.core.parameter.parametersOf

class SurveyInfoActivity : ComponentActivity() {
    private val viewModel by lazy { getViewModel<SurveyInfoViewModel>() }

    private val initialSurvey: SurveyData
        get() =
            intent.parcelable(EXTRA_SURVEY)
                ?: throw IllegalArgumentException("Survey is missing!")

    private val errorDisplayManager: ErrorDisplayManager by inject { parametersOf(this) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val seed = initialSurvey
        viewModel.start(seed)

        lifecycleScope.launch {
            viewModel.errors.collect { error -> errorDisplayManager.displayError(error) }
        }

        setContent {
            val state by viewModel.state.collectAsState()
            val current = state ?: SurveyInfoViewModel.State(survey = seed)
            val survey = current.survey

            QlarrTheme {
                Scaffold(
                    topBar = {
                        QlarrTopBar(
                            title = stringResource(id = R.string.title_activity_info),
                            onBackPressed = { onBackPressedDispatcher.onBackPressed() },
                        )
                    },
                    bottomBar = {
                        SurveyInfoBottomBar(
                            survey = survey,
                            isDownloading = current.isDownloading,
                            onDownload = { viewModel.download() },
                            onUpdate = { viewModel.download() },
                            onStart = {
                                startActivity(
                                    SurveyActivity.createIntent(this@SurveyInfoActivity, survey),
                                )
                            },
                            onResponses = {
                                startActivity(
                                    ResponsesActivity.createIntent(this@SurveyInfoActivity, survey),
                                )
                            },
                        )
                    },
                ) { padding ->
                    SurveyInfoScreen(
                        modifier = Modifier.padding(padding),
                        survey = survey,
                        isSyncing = current.isSyncing,
                        onSync = { viewModel.sync() },
                        onViewAll = {
                            startActivity(
                                ResponsesActivity.createIntent(this@SurveyInfoActivity, survey),
                            )
                        },
                    )
                }
            }
        }
    }

    override fun onResume() {
        super.onResume()
        // Counts / lastSync may have changed while collecting or syncing on other screens.
        viewModel.refresh()
    }

    companion object {
        private const val EXTRA_SURVEY = "SURVEY_DATA"

        fun createIntent(context: Context, surveyData: SurveyData) = Intent(
            context,
            SurveyInfoActivity::class.java,
        ).apply {
            putExtra(EXTRA_SURVEY, surveyData)
        }
    }
}
