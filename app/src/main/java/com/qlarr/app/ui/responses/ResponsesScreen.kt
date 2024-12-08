package com.qlarr.app.ui.responses

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import coil.decode.VideoFrameDecoder
import coil.request.ImageRequest
import com.qlarr.app.R
import com.qlarr.app.ui.common.compose.boldDescriptionString
import com.qlarr.app.ui.common.compose.boldValueString
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
    val lastSyncTime: LocalDateTime? = null,
    val isComplete: Boolean = false
) {
    fun shouldLoad() = !(isLoading || isComplete)
}

@Composable
fun ResponsesScreen(
    modifier: Modifier,
    onLoadNext: () -> Unit,
    onEditClicked: (String) -> Unit,
    onDeleteClicked: (String) -> Unit,
    screenState: ResponsesScreenState,
    onFileClicked: (ResponseValueData.FileValueData) -> Unit
) {
    val lazyListState = rememberLazyListState()

    val shouldPaginate = remember(screenState, lazyListState) {
        derivedStateOf {
            val lastVisibleItemIndex =
                lazyListState.layoutInfo.visibleItemsInfo.lastOrNull()?.index
                    ?: return@derivedStateOf false
            val value = screenState.shouldLoad() && screenState.responses.isNotEmpty() &&
                    lastVisibleItemIndex >= screenState.responses.size - 9
            value
        }
    }

    LaunchedEffect(key1 = shouldPaginate.value, screenState.responses.size) {
        if (shouldPaginate.value) {
            onLoadNext()
        }
    }

    LazyColumn(modifier = modifier, state = lazyListState) {
        item {
            StatText(
                text = boldValueString(
                    R.string.responses_screen_complete_responses,
                    screenState.completeResponsesCount.toString()
                )
            )
            StatText(
                text = boldValueString(
                    R.string.responses_screen_incomplete_responses,
                    screenState.inCompleteResponsesCount.toString()
                )
            )
            StatText(
                text = boldValueString(
                    R.string.responses_screen_last_sync_time,
                    screenState.lastSyncTime?.toFormattedString()
                        ?: stringResource(id = R.string.sync_time_never)
                )
            )
        }

        items(screenState.responses) {
            ResponseItem(
                responseItem = it,
                onEditClicked = onEditClicked,
                onDeleteClicked = onDeleteClicked,
                onFileClicked = onFileClicked
            )
        }
    }
}

@Composable
private fun ResponseItem(
    responseItem: ResponseItemData,
    onEditClicked: (String) -> Unit = {},
    onDeleteClicked: (String) -> Unit = {},
    onFileClicked: (ResponseValueData.FileValueData) -> Unit = {},
) {
    Column {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier
                .background(Colors.LightBlue)
                .padding(start = 16.dp)
        ) {
            Text(
                modifier = Modifier.weight(1f),
                fontWeight = FontWeight.SemiBold,
                text = responseItem.id
            )
            if (responseItem.editEnabled) {
                IconButton(onClick = { onEditClicked(responseItem.id) }) {
                    Icon(Icons.Filled.Edit, contentDescription = "Edit")
                }
            }
            if (responseItem.deleteEnabled) {
                IconButton(onClick = { onDeleteClicked(responseItem.id) }) {
                    Icon(Icons.Filled.Delete, contentDescription = "Delete")
                }
            }
        }
        StatText(
            text = boldValueString(
                R.string.response_item_started,
                responseItem.startDateString
            )
        )
        responseItem.submitDateString?.let { endDate ->
            StatText(
                text = boldValueString(
                    R.string.response_item_completed,
                    endDate
                )
            )
        }
        Row(verticalAlignment = Alignment.CenterVertically) {
            StatText(
                modifier = Modifier.weight(1f),
                text = boldValueString(
                    R.string.response_item_synced,
                    responseItem.isSynced.toString()
                )
            )
            StatText(
                modifier = Modifier.weight(1f),
                text = boldValueString(
                    R.string.response_item_language,
                    value = responseItem.lang
                )
            )
        }

        responseItem.values.forEach { value ->
            when (value) {
                is ResponseValueData.FileValueData -> {
                    Column(modifier = Modifier.clickable { onFileClicked(value) }) {
                        StatText(
                            text = boldDescriptionString(
                                description = value.key,
                                value = value.filename
                            )
                        )
                        Box(
                            modifier = Modifier.fillMaxWidth(),
                            contentAlignment = Alignment.Center
                        ) {
                            AsyncImage(
                                modifier = Modifier.size(200.dp),
                                model = if (value.fileType.contains("mp4")) {
                                    ImageRequest.Builder(LocalContext.current)
                                        .data(value.file)
                                        .decoderFactory { result, options, _ ->
                                            VideoFrameDecoder(
                                                result.source,
                                                options
                                            )
                                        }
                                        .build()
                                } else {
                                    value.file
                                },
                                contentDescription = "",
                            )
                        }
                    }
                }

                is ResponseValueData.StringValueData -> {
                    StatText(
                        text = boldDescriptionString(
                            description = value.key,
                            value = value.value
                        )
                    )
                }
            }
        }
    }
}

@Composable
private fun StatText(
    modifier: Modifier = Modifier,
    text: AnnotatedString
) {
    Text(
        modifier = modifier
            .padding(horizontal = 16.dp, vertical = 4.dp),
        fontSize = 16.sp,
        text = text
    )
}

@Preview(showBackground = true)
@Composable
private fun PreviewResponseScreen() {
    val response = ResponseItemData(
        "550e8400-e29b-41d4-a716-446655440000",
        isSynced = true,
        editEnabled = true,
        deleteEnabled = true,
        startDateString = LocalDateTime.now().toFormattedString(),
        submitDateString = null,
        values = listOf(),
        lang = "eng"
    )
    QlarrTheme {
        ResponsesScreen(
            modifier = Modifier,
            onLoadNext = { },
            onEditClicked = {},
            onDeleteClicked = {},
            onFileClicked = {},
            screenState = ResponsesScreenState(
                isLoading = false,
                responses = listOf(
                    response.copy(editEnabled = true, deleteEnabled = false),
                    response.copy(editEnabled = true, deleteEnabled = true),
                    response.copy(editEnabled = true, deleteEnabled = false)
                ),
                completeResponsesCount = 3,
                inCompleteResponsesCount = 2,
                lastSyncTime = LocalDateTime.now(),
                isComplete = false
            )
        )
    }
}

@Preview(showBackground = true)
@Composable
private fun PreviewResponseItem() {
    QlarrTheme {
        ResponseItem(
            ResponseItemData(
                "550e8400-e29b-41d4-a716-446655440000",
                isSynced = true,
                editEnabled = true,
                deleteEnabled = true,
                startDateString = LocalDateTime.now().toFormattedString(),
                submitDateString = null,
                values = listOf(),
                lang = "eng"
            )
        )
    }
}

