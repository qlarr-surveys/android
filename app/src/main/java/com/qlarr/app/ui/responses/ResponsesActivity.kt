package com.qlarr.app.ui.responses

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.Parcelable
import android.view.MenuItem
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.core.net.toUri
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.lifecycleScope
import androidx.lifecycle.repeatOnLifecycle
import com.qlarr.app.R
import com.qlarr.app.business.parcelable
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.ui.common.FileUtils
import com.qlarr.app.ui.common.error.ErrorDisplayManager
import com.qlarr.app.ui.common.theme.Colors
import com.qlarr.app.ui.common.theme.QlarrTheme
import com.qlarr.app.ui.common.theme.QlarrTopBar
import com.qlarr.app.ui.common.theme.TopBarIconButton
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
            repeatOnLifecycle(Lifecycle.State.STARTED) {
                viewModel.errors.collect { error ->
                    errorDisplayManager.displayError(error)
                }
            }
        }

        setContent {
            val screenState by viewModel.responsesScreenData.collectAsState()
            val detail = screenState.detail

            // Resolve the live list item for the open detail; keep the last known one so the detail
            // doesn't flicker while a refresh (e.g. after sync) transiently empties the list.
            val liveItem = detail?.let { d -> screenState.responses.find { it.id == d.responseId } }
            var lastItem by remember { mutableStateOf<ResponseItemData?>(null) }
            LaunchedEffect(liveItem) { if (liveItem != null) lastItem = liveItem }
            val detailItem = liveItem ?: lastItem

            var pendingDeleteId by remember { mutableStateOf<String?>(null) }

            QlarrTheme {
                BackHandler(enabled = detail != null) { viewModel.closeDetail() }

                Scaffold(topBar = {
                    if (detail != null && detailItem != null) {
                        QlarrTopBar(
                            title =
                                stringResource(
                                    R.string.response_detail_title,
                                    detailItem.ordinal,
                                ),
                            onBackPressed = { viewModel.closeDetail() },
                            actions = {
                                if (detailItem.deleteEnabled) {
                                    TopBarIconButton(iconRes = R.drawable.baseline_delete_outline_24) {
                                        pendingDeleteId = detailItem.id
                                    }
                                }
                            },
                        )
                    } else {
                        QlarrTopBar(
                            title = stringResource(id = R.string.title_activity_responses),
                            subtitle = survey.name,
                            onBackPressed = { onBackPressedDispatcher.onBackPressed() },
                            actions = {
                                if (screenState.isSyncing) {
                                    CircularProgressIndicator(
                                        modifier =
                                            Modifier
                                                .padding(end = 16.dp)
                                                .size(22.dp),
                                        strokeWidth = 2.dp,
                                        color = Colors.White,
                                    )
                                } else {
                                    TopBarIconButton(iconRes = R.drawable.ic_sync) {
                                        viewModel.syncAll()
                                    }
                                }
                            },
                        )
                    }
                }) { padding ->
                    if (detail != null && detailItem != null) {
                        ResponseDetailScreen(
                            modifier = Modifier.padding(padding),
                            item = detailItem,
                            detail = detail,
                            onSync = { viewModel.syncResponse(detailItem.id) },
                            onContinue = {
                                viewModel.closeDetail()
                                startActivity(
                                    SurveyActivity.createIntent(
                                        this@ResponsesActivity,
                                        survey,
                                        detailItem.id,
                                    ),
                                )
                            },
                            onPlay = { path -> viewModel.onPlayClicked(detailItem.id, path) },
                            onPause = { path -> viewModel.onPauseClicked(detailItem.id, path) },
                            onSeek = { path, position ->
                                viewModel.onSeekTo(
                                    detailItem.id,
                                    path,
                                    position,
                                )
                            },
                            onFileClicked = { file -> openResponseFile(file) },
                            onMapClicked = { location -> openMap(location) },
                        )
                    } else {
                        ResponsesScreen(
                            modifier = Modifier.padding(padding),
                            screenState = screenState,
                            onLoadNext = viewModel::loadNext,
                            onFilterChange = viewModel::setFilter,
                            onSyncAll = viewModel::syncAll,
                            onContinueClicked = { id ->
                                startActivity(
                                    SurveyActivity.createIntent(this@ResponsesActivity, survey, id),
                                )
                            },
                            onDeleteClicked = { id -> viewModel.deleteResponse(id) },
                            onStartResponse = {
                                startActivity(
                                    SurveyActivity.createIntent(this@ResponsesActivity, survey),
                                )
                            },
                            onCardClicked = { item -> viewModel.openDetail(item.id) },
                        )
                    }
                }

                pendingDeleteId?.let { id ->
                    AlertDialog(
                        onDismissRequest = { pendingDeleteId = null },
                        title = { Text(text = stringResource(id = R.string.delete_response_confirmation_title)) },
                        text = { Text(text = stringResource(id = R.string.delete_response_confirmation_message)) },
                        confirmButton = {
                            TextButton(
                                onClick = {
                                    pendingDeleteId = null
                                    viewModel.closeDetail()
                                    viewModel.deleteResponse(id)
                                },
                                colors = ButtonDefaults.textButtonColors(contentColor = Colors.Danger),
                            ) {
                                Text(stringResource(id = R.string.delete))
                            }
                        },
                        dismissButton = {
                            TextButton(onClick = { pendingDeleteId = null }) {
                                Text(stringResource(id = R.string.cancel))
                            }
                        },
                    )
                }
            }
        }
    }

    private fun openResponseFile(file: ResponseValueData.FileValueData) {
        FileUtils.openFile(this, file.file, file.fileType) { it.printStackTrace() }
    }

    private fun openMap(location: ResponseEventData.LocationData) {
        val gmmIntentUri = "geo:${location.latitude},${location.longitude}".toUri()
        val mapIntent = Intent(Intent.ACTION_VIEW, gmmIntentUri)
        mapIntent.setPackage("com.google.android.apps.maps")
        mapIntent.resolveActivity(packageManager)?.let { startActivity(mapIntent) }
    }

    override fun onStop() {
        super.onStop()
        viewModel.pauseCurrentlyPlaying()
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
