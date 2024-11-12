package com.qlarr.app.ui.responses

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.Parcelable
import android.view.MenuItem
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
import com.qlarr.app.ui.common.FileUtils
import com.qlarr.app.ui.common.error.ErrorDisplayManager
import com.qlarr.app.ui.common.theme.QlarrTheme
import com.qlarr.app.ui.common.theme.QlarrTopBar
import com.qlarr.app.ui.survey.EMNavProcessor
import com.qlarr.app.ui.survey.SurveyActivity
import kotlinx.coroutines.launch
import org.koin.android.ext.android.inject
import org.koin.androidx.viewmodel.ext.android.getViewModel
import org.koin.core.parameter.parametersOf

class ResponsesActivity : ComponentActivity() {

    private val viewModel by lazy { getViewModel<ResponsesViewModel>() }

    val survey: SurveyData
        get() = intent.parcelable(SURVEY) ?: throw IllegalArgumentException("Survey is required")

    private val errorDisplayManager: ErrorDisplayManager by inject { parametersOf(this) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        viewModel.init(survey)
        viewModel.emNavProcessor = EMNavProcessor(this, survey) {
            viewModel.fetchResponses(survey)
        }

        lifecycleScope.launch {
            viewModel.errors.collect { error ->
                errorDisplayManager.displayError(error)
            }
        }

        setContent {
            val responsesScreenData by viewModel.responsesScreenData.collectAsState()

            QlarrTheme {
                Scaffold(topBar = {
                    QlarrTopBar(
                        title = stringResource(id = R.string.title_activity_responses),
                        onBackPressed = {
                            onBackPressedDispatcher.onBackPressed()
                        })
                }) { padding ->
                    ResponsesScreen(
                        modifier = Modifier
                            .padding(padding),
                        onLoadNext = viewModel::loadNext,
                        onEditClicked = { id ->
                            startActivity(
                                SurveyActivity.createIntent(
                                    this@ResponsesActivity, survey, id
                                )
                            )
                        },
                        onDeleteClicked = { id ->
                            viewModel.deleteResponse(id)
                        },
                        screenState = responsesScreenData,
                        onFileClicked = { fileData ->
                            FileUtils.openFile(
                                context = this,
                                file = fileData.file,
                                fileType = fileData.fileType,
                                onError = { viewModel.handleError(it) })
                        }
                    )
                }
            }
        }
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            android.R.id.home -> {
                onBackPressedDispatcher.onBackPressed()
                return true
            }

            else -> super.onOptionsItemSelected(item)
        }
    }

    companion object {
        private const val SURVEY = "survey"
        fun createIntent(context: Context, survey: SurveyData): Intent =
            Intent(context, ResponsesActivity::class.java).apply {
                putExtra(SURVEY, survey as Parcelable)
            }
    }
}
