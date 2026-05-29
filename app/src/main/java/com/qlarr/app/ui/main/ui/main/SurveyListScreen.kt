package com.qlarr.app.ui.main.ui.main

import android.content.res.Configuration
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.pulltorefresh.PullToRefreshBox
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.LifecycleResumeEffect
import com.qlarr.app.R
import com.qlarr.app.business.ByteSize
import com.qlarr.app.business.formatBytes
import com.qlarr.app.storage.DownloadState
import com.qlarr.app.ui.common.error.ProcessedError
import com.qlarr.app.ui.common.theme.QlarrTheme
import com.qlarr.app.ui.common.theme.QlarrTopBar
import com.qlarr.app.ui.common.theme.TopBarIconButton
import com.qlarr.app.ui.responses.ResponsesActivity
import com.qlarr.app.ui.survey.SurveyActivity
import com.qlarr.app.ui.survey.SurveyInfoActivity
import com.qlarr.app.ui.survey.SurveyListItem

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SurveyListScreen(viewModel: SurveyListViewModel) {
    val state by viewModel.state.collectAsState()
    val downloadState by viewModel.downloadState.collectAsState()
    val hasUnsyncedResponses by viewModel.hasUnsyncedResponses.collectAsState()
    val context = LocalContext.current
    val configuration = LocalConfiguration.current
    val columns = if (configuration.orientation == Configuration.ORIENTATION_PORTRAIT) 1 else 2

    var logoutDialogShown by remember { mutableStateOf(false) }
    var errorDialogState by remember { mutableStateOf<ProcessedError?>(null) }

    LaunchedEffect(Unit) {
        viewModel.errors.collect { error ->
            errorDialogState = error
        }
    }

    LifecycleResumeEffect(Unit) {
        viewModel.syncData()
        onPauseOrDispose { }
    }

    QlarrTheme {
        Scaffold(topBar = {
            QlarrTopBar(
                title = stringResource(id = R.string.title_survey_list),
                showBackButton = false,
                actions = {
                    TopBarIconButton(iconRes = R.drawable.ic_sync) {
                        viewModel.fetchSurveyList(true)
                    }
                    TopBarIconButton(iconRes = R.drawable.baseline_logout_24) {
                        viewModel.checkUnsyncedResponses()
                        logoutDialogShown = true
                    }
                },
            )
        }) { padding ->
            PullToRefreshBox(
                isRefreshing = false,
                onRefresh = { viewModel.fetchSurveyList(true) },
                modifier = Modifier
                    .fillMaxSize()
                    .padding(padding),
            ) {
                Column(modifier = Modifier.fillMaxSize()) {
                    // Guest warning banner
                    if (state.isGuest) {
                        Card(
                            modifier = Modifier.fillMaxWidth(),
                            shape = RoundedCornerShape(0.dp),
                            colors = CardDefaults.cardColors(
                                containerColor = Color(0xFFFF8800)
                            ),
                        ) {
                            Text(
                                modifier = Modifier.padding(10.dp),
                                text = stringResource(id = R.string.guest_warning),
                                color = Color.White,
                                fontSize = 16.sp,
                            )
                        }
                    }

                    if (!state.showLoading && state.surveyList.isEmpty()) {
                        // Empty state
                        Box(
                            modifier = Modifier.fillMaxSize(),
                            contentAlignment = Alignment.Center,
                        ) {
                            Text(
                                text = stringResource(id = R.string.no_surveys_message),
                                fontSize = 16.sp,
                                fontWeight = FontWeight.Bold,
                                textAlign = TextAlign.Center,
                                modifier = Modifier.padding(8.dp),
                            )
                        }
                    } else {
                        // Survey list
                        LazyVerticalGrid(
                            columns = GridCells.Fixed(columns),
                            modifier = Modifier.fillMaxSize(),
                        ) {
                            items(
                                items = state.surveyList,
                                key = { it.id },
                            ) { surveyData ->
                                SurveyListItem(
                                    modifier = Modifier.padding(
                                        bottom = 8.dp,
                                        start = 8.dp,
                                        end = 8.dp,
                                    ),
                                    surveyData = surveyData,
                                    onStartClick = {
                                        context.startActivity(
                                            SurveyActivity.createIntent(context, it)
                                        )
                                    },
                                    onResponsesClick = {
                                        context.startActivity(
                                            ResponsesActivity.createIntent(context, it)
                                        )
                                    },
                                    onInfoClick = {
                                        context.startActivity(
                                            SurveyInfoActivity.createIntent(context, it)
                                        )
                                    },
                                    onDownloadClick = {
                                        viewModel.downloadSurveyForOffline(it)
                                    },
                                    onGetMissingFilesClick = {
                                        viewModel.downloadSurveyForOffline(it)
                                    },
                                )
                            }
                        }
                    }
                }

                // Loading overlay
                if (state.showLoading) {
                    Box(
                        modifier = Modifier
                            .fillMaxSize()
                            .background(Color.Black.copy(alpha = 0.1f))
                            .clickable(
                                interactionSource = remember { MutableInteractionSource() },
                                indication = null,
                                onClick = {},
                            ),
                        contentAlignment = Alignment.Center,
                    ) {
                        Card {
                            Column(
                                modifier = Modifier.padding(16.dp),
                                horizontalAlignment = Alignment.CenterHorizontally,
                            ) {
                                CircularProgressIndicator()
                                Text(
                                    modifier = Modifier.padding(top = 8.dp),
                                    text = stringResource(id = R.string.fetching_surveys_message),
                                    textAlign = TextAlign.Center,
                                )
                            }
                        }
                    }
                }

                // Download progress overlay
                val currentDownloadState = downloadState
                if (currentDownloadState is DownloadState.Loading) {
                    Box(
                        modifier = Modifier
                            .fillMaxSize()
                            .background(Color.Black.copy(alpha = 0.1f))
                            .clickable(
                                interactionSource = remember { MutableInteractionSource() },
                                indication = null,
                                onClick = {},
                            ),
                        contentAlignment = Alignment.Center,
                    ) {
                        Card(modifier = Modifier.padding(32.dp)) {
                            Column(modifier = Modifier.padding(16.dp)) {
                                Text(
                                    text = stringResource(
                                        id = R.string.syncing_survey_title,
                                        currentDownloadState.surveyName,
                                    ),
                                    fontSize = 16.sp,
                                    fontWeight = FontWeight.Bold,
                                )
                                LinearProgressIndicator(
                                    progress = { currentDownloadState.downloadPercent / 100f },
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .padding(top = 8.dp),
                                )
                                if (currentDownloadState.totalSize > 0) {
                                    Row(
                                        modifier = Modifier.fillMaxWidth(),
                                        horizontalArrangement = Arrangement.SpaceBetween,
                                    ) {
                                        val currentFormatted =
                                            formatBytes(currentDownloadState.currentDownloadedSize)
                                        Text(
                                            text = stringResource(
                                                id = if (currentFormatted.byteSize == ByteSize.MEGA) R.string.megabytes else R.string.kilobytes,
                                                currentFormatted.value,
                                            )
                                        )
                                        val totalFormatted =
                                            formatBytes(currentDownloadState.totalSize)
                                        Text(
                                            text = stringResource(
                                                id = if (totalFormatted.byteSize == ByteSize.MEGA) R.string.megabytes else R.string.kilobytes,
                                                totalFormatted.value,
                                            )
                                        )
                                    }
                                }
                                if (currentDownloadState.totalFilesCount > 0) {
                                    Text(
                                        text = stringResource(
                                            id = R.string.syncing_survey_file_order,
                                            currentDownloadState.downloadedFileCount + 1,
                                            currentDownloadState.totalFilesCount,
                                        )
                                    )
                                }
                            }
                        }
                    }
                }
            }

            // Logout confirmation dialog
            if (logoutDialogShown) {
                DialogConfirmLogout(
                    hasUnsyncedResponses = hasUnsyncedResponses,
                    onConfirmation = { viewModel.logout() },
                    onDismiss = { logoutDialogShown = false },
                )
            }

            // Error dialog
            errorDialogState?.let { error ->
                val isAuthError = error is ProcessedError.AuthError
                AlertDialog(
                    onDismissRequest = {
                        if (!isAuthError) {
                            errorDialogState = null
                        }
                    },
                    title = { Text(text = stringResource(id = error.titleRes)) },
                    text = { Text(text = stringResource(id = error.messageRes)) },
                    confirmButton = {
                        TextButton(onClick = {
                            errorDialogState = null
                            if (isAuthError) {
                                viewModel.logout()
                            }
                        }) {
                            Text(stringResource(id = android.R.string.ok))
                        }
                    },
                )
            }
        }
    }
}

@Composable
private fun DialogConfirmLogout(
    hasUnsyncedResponses: Boolean,
    onConfirmation: () -> Unit,
    onDismiss: () -> Unit,
) {
    AlertDialog(
        onDismissRequest = { },
        title = {
            Text(text = stringResource(id = R.string.logout_are_you_sure))
        },
        text =
            if (hasUnsyncedResponses) {
                { Text(text = stringResource(id = R.string.logout_alert_message)) }
            } else {
                null
        },
        confirmButton = {
            TextButton(
                onClick = onConfirmation,
                colors =
                    ButtonDefaults.textButtonColors(
                        contentColor = MaterialTheme.colorScheme.error,
                    ),
                    ) {
                Text(
                    stringResource(
                        id = if (hasUnsyncedResponses) R.string.logout_anyway else R.string.logout,
                    ),
                    fontSize = 16.sp,
                )
            }
        },
        dismissButton = {
            TextButton(
                onClick = onDismiss,
            ) {
                Text(stringResource(id = R.string.cancel), fontSize = 16.sp)
            }
        },
    )
}

@Composable
@Preview(showBackground = true)
private fun PreviewDialogConfirmLogoutUnsynced() {
    QlarrTheme {
        DialogConfirmLogout(hasUnsyncedResponses = true, onConfirmation = {}, onDismiss = {})
    }
}

@Composable
@Preview(showBackground = true)
private fun PreviewDialogConfirmLogoutSynced() {
    QlarrTheme {
        DialogConfirmLogout(hasUnsyncedResponses = false, onConfirmation = {}, onDismiss = {})
    }
}
