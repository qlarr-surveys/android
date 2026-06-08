package com.qlarr.app.ui.responses

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowRight
import androidx.compose.material.icons.filled.CleaningServices
import androidx.compose.material.icons.filled.DeleteOutline
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.Event
import androidx.compose.material.icons.filled.Image
import androidx.compose.material.icons.filled.Inbox
import androidx.compose.material.icons.filled.Mic
import androidx.compose.material.icons.filled.Place
import androidx.compose.material.icons.filled.Schedule
import androidx.compose.material.icons.filled.Sync
import androidx.compose.material.icons.filled.Videocam
import androidx.compose.material.icons.filled.Visibility
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.qlarr.app.R
import com.qlarr.app.business.responses.ResponsesFilter
import com.qlarr.app.ui.common.theme.Colors
import com.qlarr.app.ui.common.theme.QlarrTheme
import com.qlarr.app.ui.common.toFormattedString
import java.time.LocalDateTime

data class ResponsesScreenState(
    val isSyncing: Boolean = false,
    val isLoading: Boolean = false,
    val responses: List<ResponseItemData> = listOf(),
    val completeResponsesCount: Int = 0,
    val inCompleteResponsesCount: Int = 0,
    val uploadedResponsesCount: Int = 0,
    val lastSyncTime: LocalDateTime? = null,
    val isComplete: Boolean = false,
    val activeFilter: ResponsesFilter = ResponsesFilter.ALL,
) {
    fun shouldLoad() = !(isLoading || isComplete)

    val totalResponsesCount: Int get() = completeResponsesCount + inCompleteResponsesCount

    /** Pending = everything not yet uploaded (drafts + complete-unsynced). */
    val pendingResponsesCount: Int get() = totalResponsesCount - uploadedResponsesCount
}

@Composable
fun ResponsesScreen(
    modifier: Modifier = Modifier,
    screenState: ResponsesScreenState,
    onLoadNext: () -> Unit,
    onFilterChange: (ResponsesFilter) -> Unit,
    onSyncAll: () -> Unit,
    onContinueClicked: (String) -> Unit,
    onDeleteClicked: (String) -> Unit,
    onStartResponse: () -> Unit,
    onCardClicked: (ResponseItemData) -> Unit = {},
) {
    val lazyListState = rememberLazyListState()
    var pendingDeleteId by remember { mutableStateOf<String?>(null) }

    val shouldPaginate = remember(screenState, lazyListState) {
        derivedStateOf {
            val lastVisibleItemIndex =
                lazyListState.layoutInfo.visibleItemsInfo.lastOrNull()?.index
                    ?: return@derivedStateOf false
            screenState.shouldLoad() && screenState.responses.isNotEmpty() &&
                lastVisibleItemIndex >= screenState.responses.size - 9
        }
    }

    LaunchedEffect(key1 = shouldPaginate.value, screenState.responses.size) {
        if (shouldPaginate.value) {
            onLoadNext()
        }
    }

    // Full empty state only when the survey has no local responses at all.
    if (screenState.totalResponsesCount == 0 && !screenState.isLoading) {
        EmptyState(modifier = modifier, onStartResponse = onStartResponse)
    } else {
        LazyColumn(
            modifier =
                modifier
                    .fillMaxSize()
                    .background(Colors.Page),
            state = lazyListState,
            contentPadding =
                androidx.compose.foundation.layout.PaddingValues(
                    start = 14.dp,
                    end = 14.dp,
                    top = 4.dp,
                    bottom = 16.dp,
                ),
            verticalArrangement = Arrangement.spacedBy(11.dp),
        ) {
            item(key = "summary") { SummaryHeader(screenState, onSyncAll) }
            item(key = "filters") { FilterChipsRow(screenState, onFilterChange) }

            if (screenState.responses.isEmpty() && !screenState.isLoading) {
                item(key = "filtered-empty") {
                    Text(
                        modifier =
                            Modifier
                                .fillMaxWidth()
                                .padding(vertical = 32.dp),
                        text = stringResource(id = R.string.responses_filter_empty),
                        textAlign = TextAlign.Center,
                        color = Colors.Muted,
                        fontSize = 14.sp,
                    )
                }
            }

            items(items = screenState.responses, key = { it.id }) { item ->
                ResponseCard(
                    item = item,
                    onClick = { onCardClicked(item) },
                    onDelete = { pendingDeleteId = item.id },
                    onContinue = { onContinueClicked(item.id) },
                )
            }
        }
    }

    pendingDeleteId?.let { id ->
        DialogConfirmDeleteResponse(
            onConfirmation = {
                onDeleteClicked(id)
                pendingDeleteId = null
            },
            onDismiss = { pendingDeleteId = null },
        )
    }
}

// ── Summary header ───────────────────────────────────────────────────
@Composable
private fun SummaryHeader(
    state: ResponsesScreenState,
    onSyncAll: () -> Unit,
) {
    Column(
        modifier = Modifier.padding(start = 2.dp, end = 2.dp, top = 10.dp, bottom = 2.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            Stat(state.completeResponsesCount, stringResource(R.string.responses_summary_complete))
            Dot()
            Stat(state.inCompleteResponsesCount, stringResource(R.string.responses_summary_drafts))
            Dot()
            Stat(state.uploadedResponsesCount, stringResource(R.string.responses_summary_uploaded))
        }
        Row(verticalAlignment = Alignment.CenterVertically) {
            Icon(
                imageVector = Icons.Filled.Schedule,
                contentDescription = null,
                tint = Colors.Faint,
                modifier = Modifier.size(14.dp),
            )
            Spacer(Modifier.width(6.dp))
            val lastSync =
                state.lastSyncTime?.toFormattedString()
                    ?: stringResource(R.string.sync_time_never)
            val syncText =
                if (state.pendingResponsesCount > 0) {
                    stringResource(R.string.responses_last_sync, lastSync) +
                        " · " +
                        stringResource(
                            R.string.responses_pending_count,
                            state.pendingResponsesCount,
                        )
                } else {
                    stringResource(R.string.responses_last_sync, lastSync)
                }
            Text(
                modifier = Modifier.weight(1f),
                text = syncText,
                fontSize = 12.5.sp,
                color = Colors.Muted,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            if (state.pendingResponsesCount > 0) {
                SyncAllPill(enabled = !state.isSyncing, onClick = onSyncAll)
            }
        }
    }
}

@Composable
private fun Stat(
    n: Int,
    label: String,
) {
    Row(verticalAlignment = Alignment.Bottom) {
        Text(
            text = n.toString(),
            fontSize = 15.sp,
            fontWeight = FontWeight.Bold,
            color = Colors.Ink,
        )
        Spacer(Modifier.width(4.dp))
        Text(text = label, fontSize = 13.5.sp, color = Colors.Muted)
    }
}

@Composable
private fun Dot() {
    Box(
        modifier =
            Modifier
                .size(3.dp)
                .clip(RoundedCornerShape(2.dp))
                .background(Colors.Faint),
    )
}

@Composable
private fun SyncAllPill(
    enabled: Boolean,
    onClick: () -> Unit,
) {
    Row(
        modifier =
            Modifier
                .height(34.dp)
                .clip(RoundedCornerShape(17.dp))
                .background(if (enabled) Colors.Primary else Colors.DisabledBg)
                .clickable(enabled = enabled, onClick = onClick)
                .padding(horizontal = 15.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(7.dp),
    ) {
        Icon(
            imageVector = Icons.Filled.Sync,
            contentDescription = null,
            tint = if (enabled) Colors.White else Colors.DisabledInk,
            modifier = Modifier.size(16.dp),
        )
        Text(
            text = stringResource(R.string.responses_sync_all),
            fontSize = 13.5.sp,
            fontWeight = FontWeight.SemiBold,
            color = if (enabled) Colors.White else Colors.DisabledInk,
        )
    }
}

// ── Filter chips ─────────────────────────────────────────────────────
@Composable
private fun FilterChipsRow(
    state: ResponsesScreenState,
    onFilterChange: (ResponsesFilter) -> Unit,
) {
    Row(
        modifier = Modifier.padding(horizontal = 2.dp),
        horizontalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        FilterChip(
            label = stringResource(R.string.responses_filter_all),
            count = state.totalResponsesCount,
            selected = state.activeFilter == ResponsesFilter.ALL,
            onClick = { onFilterChange(ResponsesFilter.ALL) },
        )
        FilterChip(
            label = stringResource(R.string.responses_filter_pending),
            count = state.pendingResponsesCount,
            selected = state.activeFilter == ResponsesFilter.PENDING,
            onClick = { onFilterChange(ResponsesFilter.PENDING) },
        )
        FilterChip(
            label = stringResource(R.string.responses_filter_uploaded),
            count = state.uploadedResponsesCount,
            selected = state.activeFilter == ResponsesFilter.UPLOADED,
            onClick = { onFilterChange(ResponsesFilter.UPLOADED) },
        )
    }
}

@Composable
private fun FilterChip(
    label: String,
    count: Int,
    selected: Boolean,
    onClick: () -> Unit,
) {
    Row(
        modifier =
            Modifier
                .height(34.dp)
                .clip(RoundedCornerShape(17.dp))
                .background(if (selected) Colors.Primary else Colors.White)
                .border(
                    BorderStroke(1.dp, if (selected) Colors.Primary else Colors.Hairline),
                    RoundedCornerShape(17.dp),
                ).clickable(onClick = onClick)
                .padding(horizontal = 14.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        Text(
            text = label,
            fontSize = 13.5.sp,
            fontWeight = FontWeight.SemiBold,
            color = if (selected) Colors.White else Colors.Muted,
        )
        Text(
            text = count.toString(),
            fontSize = 12.sp,
            fontWeight = FontWeight.Bold,
            color = if (selected) Colors.White.copy(alpha = 0.85f) else Colors.Faint,
        )
    }
}

// ── Response card ────────────────────────────────────────────────────
@Composable
private fun ResponseCard(
    item: ResponseItemData,
    onClick: () -> Unit,
    onDelete: () -> Unit,
    onContinue: () -> Unit,
) {
    val tokens = item.status.tokens
    Row(
        modifier =
            Modifier
                .fillMaxWidth()
                .height(IntrinsicSize.Min)
                .clip(RoundedCornerShape(16.dp))
                .background(Colors.White)
                .border(BorderStroke(1.dp, Colors.Hairline), RoundedCornerShape(16.dp))
                .clickable(onClick = onClick),
    ) {
        // Accent rail
        Box(
            modifier =
                Modifier
                    .width(5.dp)
                    .fillMaxHeight()
                    .background(tokens.rail),
        )
        Column(modifier = Modifier.weight(1f)) {
            Row(
                modifier =
                    Modifier.padding(
                        start = 13.dp,
                        end = 10.dp,
                        top = 13.dp,
                        bottom = 13.dp,
                    ),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(13.dp),
            ) {
                StatusMedallion(tokens.icon, tokens.bg, tokens.line, tokens.ink)
                Column(
                    modifier = Modifier.weight(1f),
                    verticalArrangement = Arrangement.spacedBy(4.dp),
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text(
                            text = "#${item.ordinal}",
                            fontSize = 18.sp,
                            fontWeight = FontWeight.Bold,
                            color = Colors.Ink,
                        )
                        Spacer(Modifier.width(9.dp))
                        Text(
                            text = stringResource(tokens.labelRes),
                            fontSize = 12.5.sp,
                            fontWeight = FontWeight.Bold,
                            color = tokens.ink,
                        )
                    }
                    WhenLine(item)
                    MediaSummary(item)
                }
                Row(verticalAlignment = Alignment.CenterVertically) {
                    if (item.deleteEnabled) {
                        IconButton(onClick = onDelete, modifier = Modifier.size(36.dp)) {
                            Icon(
                                imageVector = Icons.Filled.DeleteOutline,
                                contentDescription = stringResource(R.string.delete),
                                tint = Colors.Muted,
                                modifier = Modifier.size(20.dp),
                            )
                        }
                    }
                    if (item.status != ResponseStatus.DRAFT) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.KeyboardArrowRight,
                            contentDescription = null,
                            tint = Colors.Faint,
                            modifier = Modifier.size(22.dp),
                        )
                    }
                }
            }
            if (item.status == ResponseStatus.DRAFT) {
                DraftFooter(
                    onView = onClick,
                    onContinue = onContinue,
                    continueEnabled = item.editEnabled,
                )
            }
        }
    }
}

@Composable
private fun StatusMedallion(
    icon: ImageVector,
    bg: androidx.compose.ui.graphics.Color,
    line: androidx.compose.ui.graphics.Color,
    ink: androidx.compose.ui.graphics.Color,
) {
    Box(
        modifier =
            Modifier
                .size(42.dp)
                .clip(RoundedCornerShape(12.dp))
                .background(bg)
                .border(BorderStroke(1.dp, line), RoundedCornerShape(12.dp)),
        contentAlignment = Alignment.Center,
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = ink,
            modifier = Modifier.size(21.dp),
        )
    }
}

@Composable
private fun WhenLine(item: ResponseItemData) {
    val text =
        item.submitDateString?.let { stringResource(R.string.response_when_submitted, it) }
            ?: stringResource(R.string.response_when_started, item.startDateString)
    Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(
            imageVector = Icons.Filled.Event,
            contentDescription = null,
            tint = Colors.Faint,
            modifier = Modifier.size(13.dp),
        )
        Spacer(Modifier.width(5.dp))
        Text(
            text = text,
            fontSize = 12.5.sp,
            color = Colors.Muted,
            maxLines = 1,
            overflow = TextOverflow.Ellipsis,
        )
    }
}

@Composable
private fun MediaSummary(item: ResponseItemData) {
    when {
        item.status == ResponseStatus.UPLOADED -> {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Icon(
                    imageVector = Icons.Filled.CleaningServices,
                    contentDescription = null,
                    tint = Colors.SyncOk,
                    modifier = Modifier.size(14.dp),
                )
                Spacer(Modifier.width(6.dp))
                Text(
                    text = stringResource(R.string.response_media_cleared),
                    fontSize = 12.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = Colors.SyncOk,
                )
            }
        }

        item.status == ResponseStatus.DRAFT && item.draftProgress != null -> {
            Row(verticalAlignment = Alignment.CenterVertically) {
                LinearProgressIndicator(
                    progress = { item.draftProgress / 100f },
                    modifier =
                        Modifier
                            .width(38.dp)
                            .height(5.dp)
                            .clip(RoundedCornerShape(3.dp)),
                    color = Colors.Slate,
                    trackColor = Colors.Slate.copy(alpha = 0.16f),
                )
                Spacer(Modifier.width(8.dp))
                Text(
                    text = stringResource(R.string.response_draft_progress, item.draftProgress),
                    fontSize = 12.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = Colors.Slate,
                )
            }
        }

        else -> {
            val hasMedia =
                item.photos > 0 || item.videos > 0 || item.audios > 0 || item.locations > 0
            if (!hasMedia) {
                Text(
                    text = stringResource(R.string.response_media_text_only),
                    fontSize = 12.sp,
                    color = Colors.Faint,
                )
            } else {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(11.dp),
                ) {
                    if (item.photos > 0) MediaTag(Icons.Filled.Image, item.photos)
                    if (item.videos > 0) MediaTag(Icons.Filled.Videocam, item.videos)
                    if (item.audios > 0) MediaTag(Icons.Filled.Mic, item.audios)
                    // location count shown only when more than one
                    if (item.locations > 0) {
                        MediaTag(
                            Icons.Filled.Place,
                            item.locations.takeIf { it > 1 },
                        )
                    }
                }
            }
        }
    }
}

@Composable
private fun MediaTag(
    icon: ImageVector,
    count: Int?,
) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = Colors.Muted,
            modifier = Modifier.size(14.dp),
        )
        if (count != null) {
            Spacer(Modifier.width(4.dp))
            Text(
                text = count.toString(),
                fontSize = 12.5.sp,
                fontWeight = FontWeight.SemiBold,
                color = Colors.Muted,
            )
        }
    }
}

@Composable
private fun DraftFooter(
    onView: () -> Unit,
    onContinue: () -> Unit,
    continueEnabled: Boolean,
) {
    Row(
        modifier = Modifier.padding(start = 13.dp, end = 13.dp, bottom = 13.dp),
        horizontalArrangement = Arrangement.spacedBy(9.dp),
    ) {
        OutlinedButton(
            onClick = onView,
            modifier =
                Modifier
                    .weight(1f)
                    .height(36.dp),
            shape = RoundedCornerShape(18.dp),
            border = BorderStroke(1.dp, Colors.SlateLine),
            colors = ButtonDefaults.outlinedButtonColors(contentColor = Colors.Slate),
            contentPadding =
                androidx.compose.foundation.layout
                    .PaddingValues(horizontal = 12.dp),
        ) {
            Icon(
                Icons.Filled.Visibility,
                contentDescription = null,
                modifier = Modifier.size(16.dp),
            )
            Spacer(Modifier.width(6.dp))
            Text(
                text = stringResource(R.string.response_action_view),
                fontSize = 13.sp,
                fontWeight = FontWeight.Bold,
            )
        }
        Button(
            onClick = onContinue,
            enabled = continueEnabled,
            modifier =
                Modifier
                    .weight(1f)
                    .height(36.dp),
            shape = RoundedCornerShape(18.dp),
            colors =
                ButtonDefaults.buttonColors(
                    containerColor = Colors.Slate,
                    contentColor = Colors.White,
                ),
            contentPadding =
                androidx.compose.foundation.layout
                    .PaddingValues(horizontal = 12.dp),
        ) {
            Icon(Icons.Filled.Edit, contentDescription = null, modifier = Modifier.size(15.dp))
            Spacer(Modifier.width(6.dp))
            Text(
                text = stringResource(R.string.response_action_continue),
                fontSize = 13.sp,
                fontWeight = FontWeight.Bold,
            )
        }
    }
}

// ── Empty state ──────────────────────────────────────────────────────
@Composable
private fun EmptyState(
    modifier: Modifier = Modifier,
    onStartResponse: () -> Unit,
) {
    Column(
        modifier =
            modifier
                .fillMaxSize()
                .background(Colors.Page)
                .padding(horizontal = 40.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
    ) {
        Box(
            modifier =
                Modifier
                    .size(88.dp)
                    .clip(RoundedCornerShape(44.dp))
                    .background(Colors.White)
                    .border(BorderStroke(1.dp, Colors.Hairline), RoundedCornerShape(44.dp)),
            contentAlignment = Alignment.Center,
        ) {
            Icon(
                imageVector = Icons.Filled.Inbox,
                contentDescription = null,
                tint = Colors.Faint,
                modifier = Modifier.size(42.dp),
            )
        }
        Spacer(Modifier.height(16.dp))
        Text(
            text = stringResource(R.string.responses_empty_title),
            fontSize = 18.sp,
            fontWeight = FontWeight.Bold,
            color = Colors.Ink,
        )
        Spacer(Modifier.height(6.dp))
        Text(
            text = stringResource(R.string.responses_empty_subtitle),
            fontSize = 13.5.sp,
            color = Colors.Muted,
            textAlign = TextAlign.Center,
        )
        Spacer(Modifier.height(16.dp))
        Button(
            onClick = onStartResponse,
            modifier = Modifier.height(44.dp),
            shape = RoundedCornerShape(22.dp),
            colors =
                ButtonDefaults.buttonColors(
                    containerColor = Colors.Primary,
                    contentColor = Colors.White,
                ),
            contentPadding =
                androidx.compose.foundation.layout
                    .PaddingValues(horizontal = 22.dp),
        ) {
            Text(
                text = stringResource(R.string.responses_empty_action),
                fontSize = 14.5.sp,
                fontWeight = FontWeight.SemiBold
            )
        }
    }
}

@Composable
private fun DialogConfirmDeleteResponse(
    onConfirmation: () -> Unit,
    onDismiss: () -> Unit,
) {
    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text(text = stringResource(id = R.string.delete_response_confirmation_title)) },
        text = { Text(text = stringResource(id = R.string.delete_response_confirmation_message)) },
        confirmButton = {
            TextButton(
                onClick = onConfirmation,
                colors = ButtonDefaults.textButtonColors(contentColor = Colors.Danger),
            ) {
                Text(stringResource(id = R.string.delete))
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text(stringResource(id = R.string.cancel))
            }
        },
    )
}

@Preview(showBackground = true)
@Composable
private fun PreviewResponsesScreen() {
    QlarrTheme {
        ResponsesScreen(
            screenState =
                ResponsesScreenState(
                    responses =
                        listOf(
                            ResponseItemData(
                                id = "1",
                                ordinal = 14,
                                status = ResponseStatus.PENDING,
                                isSynced = false,
                                startDateString = "Today 22:24",
                                submitDateString = "Today 22:25",
                                events = listOf(),
                                values = listOf(),
                                editEnabled = false,
                                deleteEnabled = true,
                                lang = "en",
                                photos = 1,
                                videos = 1,
                                audios = 1,
                                locations = 2,
                            ),
                            ResponseItemData(
                                id = "2",
                                ordinal = 13,
                                status = ResponseStatus.DRAFT,
                                isSynced = false,
                                startDateString = "Today 21:02",
                                submitDateString = null,
                        events = listOf(),
                        values = listOf(),
                        editEnabled = true,
                        deleteEnabled = true,
                        lang = "en",
                        draftProgress = 60,
                    ),
                    ResponseItemData(
                        id = "3",
                        ordinal = 12,
                        status = ResponseStatus.UPLOADED,
                        isSynced = true,
                        startDateString = "Today 18:40",
                        submitDateString = "Today 18:46",
                        events = listOf(),
                        values = listOf(),
                        editEnabled = false,
                        deleteEnabled = false,
                        lang = "en",
                    ),
                ),
                    completeResponsesCount = 2,
                inCompleteResponsesCount = 1,
                uploadedResponsesCount = 1,
                lastSyncTime = LocalDateTime.now(),
            ),
                onLoadNext = {}, onFilterChange = {}, onSyncAll = {},
            onContinueClicked = {}, onDeleteClicked = {}, onStartResponse = {},
        )
    }
}
