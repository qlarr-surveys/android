package com.qlarr.app.ui.responses

import android.graphics.Rect
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material.icons.filled.Visibility
import androidx.compose.material.icons.filled.VisibilityOff
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.OutlinedTextField
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
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
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
    val isComplete: Boolean = false,
    val reviewRequired: Boolean = false,
    val reviewerUsername: String = "",
    val reviewerPassword: String = "",
    val isReviewerLoggedIn: Boolean = false,
    val isReviewerLoggingIn: Boolean = false,
) {
    fun shouldLoad() = !(isLoading || isComplete)
}

@Composable
fun ResponsesScreen(
    modifier: Modifier,
    onLoadNext: () -> Unit,
    onEditClicked: (String) -> Unit,
    onDeleteClicked: (String) -> Unit,
    onApproveClicked: (String) -> Unit,
    screenState: ResponsesScreenState,
    onFileClicked: (ResponseValueData.FileValueData) -> Unit,
    onReviewerUsernameChange: (String) -> Unit,
    onReviewerPasswordChange: (String) -> Unit,
    onReviewerLoginClick: () -> Unit,
    onReviewerLogoutClick: () -> Unit,
) {
    val lazyListState = rememberLazyListState()

    val shouldPaginate =
        remember(screenState, lazyListState) {
            derivedStateOf {
                val lastVisibleItemIndex =
                    lazyListState.layoutInfo.visibleItemsInfo
                        .lastOrNull()
                        ?.index
                        ?: return@derivedStateOf false
                val value =
                    screenState.shouldLoad() && screenState.responses.isNotEmpty() &&
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
        if (screenState.reviewRequired) {
            item {
                ReviewerLoginCard(
                    reviewerLoggedIn = screenState.isReviewerLoggedIn,
                    isLoggingIn = screenState.isReviewerLoggingIn,
                    username = screenState.reviewerUsername,
                    password = screenState.reviewerPassword,
                    onUsernameChange = onReviewerUsernameChange,
                    onPasswordChange = onReviewerPasswordChange,
                    onLoginClick = onReviewerLoginClick,
                    onLogoutClick = onReviewerLogoutClick,
                )
            }
        }

        item {
            StatText(
                text =
                    boldValueString(
                        R.string.responses_screen_complete_responses,
                        screenState.completeResponsesCount.toString(),
                    ),
            )
            StatText(
                text =
                    boldValueString(
                        R.string.responses_screen_incomplete_responses,
                        screenState.inCompleteResponsesCount.toString(),
                    ),
            )
            StatText(
                text =
                    boldValueString(
                        R.string.responses_screen_last_sync_time,
                        screenState.lastSyncTime?.toFormattedString()
                            ?: stringResource(id = R.string.sync_time_never),
                    ),
            )
        }

        items(screenState.responses) {
            ResponseItem(
                responseItem = it,
                onEditClicked = onEditClicked,
                onDeleteClicked = onDeleteClicked,
                onApproveClicked = onApproveClicked,
                onFileClicked = onFileClicked,
                approvalEnabled = screenState.isReviewerLoggedIn,
            )
        }
    }
}

@Composable
private fun ResponseItem(
    responseItem: ResponseItemData,
    onEditClicked: (String) -> Unit = {},
    onDeleteClicked: (String) -> Unit = {},
    onApproveClicked: (String) -> Unit = {},
    onFileClicked: (ResponseValueData.FileValueData) -> Unit = {},
    approvalEnabled: Boolean,
) {
    Column {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier =
                Modifier
                    .background(Colors.LightBlue)
                    .padding(start = 16.dp)
                    .padding(vertical = 6.dp),
        ) {
            Text(
                modifier = Modifier.weight(1f),
                fontWeight = FontWeight.SemiBold,
                text = responseItem.id,
            )
            if (responseItem.needsApproval) {
                Button(
                    enabled = approvalEnabled,
                    onClick = { onApproveClicked(responseItem.id) },
                    modifier = Modifier.padding(end = 8.dp),
                ) {
                    Text("Approve")
                }
            }
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
            text =
                boldValueString(
                    R.string.response_item_started,
                    responseItem.startDateString,
                ),
        )
        responseItem.submitDateString?.let { endDate ->
            StatText(
                text =
                    boldValueString(
                        R.string.response_item_completed,
                        endDate,
                    ),
            )
        }
        Row(verticalAlignment = Alignment.CenterVertically) {
            StatText(
                modifier = Modifier.weight(1f),
                text =
                    boldValueString(
                        R.string.response_item_synced,
                        responseItem.isSynced.toString(),
                    ),
            )
            StatText(
                modifier = Modifier.weight(1f),
                text =
                    boldValueString(
                        R.string.response_item_language,
                        value = responseItem.lang,
                    ),
            )
        }

        responseItem.values.forEach { value ->
            when (value) {
                is ResponseValueData.FileValueData -> {
                    Column(modifier = Modifier.clickable { onFileClicked(value) }) {
                        StatText(
                            text =
                                boldDescriptionString(
                                    description = value.key,
                                    value = value.filename,
                                ),
                        )
                        Box(
                            modifier = Modifier.fillMaxWidth(),
                            contentAlignment = Alignment.Center,
                        ) {
                            AsyncImage(
                                modifier = Modifier.size(200.dp),
                                model =
                                    if (value.fileType.contains("mp4")) {
                                        ImageRequest
                                            .Builder(LocalContext.current)
                                            .data(value.file)
                                            .decoderFactory { result, options, _ ->
                                                VideoFrameDecoder(
                                                    result.source,
                                                    options,
                                                )
                                            }.build()
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
                        text =
                            boldDescriptionString(
                                description = value.key,
                                value = value.value,
                            ),
                    )
                }
            }
        }
    }
}

@Composable
private fun StatText(
    modifier: Modifier = Modifier,
    text: AnnotatedString,
) {
    Text(
        modifier =
            modifier
                .padding(horizontal = 16.dp, vertical = 4.dp),
        fontSize = 16.sp,
        text = text,
    )
}

@Composable
private fun ReviewerLoginCard(
    reviewerLoggedIn: Boolean,
    isLoggingIn: Boolean,
    username: String,
    password: String,
    onUsernameChange: (String) -> Unit,
    onPasswordChange: (String) -> Unit,
    onLoginClick: () -> Unit,
    onLogoutClick: () -> Unit,
    modifier: Modifier = Modifier,
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        shape = RectangleShape,
        colors = CardDefaults.cardColors(containerColor = Colors.SurfaceVariant),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
    ) {
        if (reviewerLoggedIn) {
            Row(
                modifier =
                    Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.weight(1f),
                ) {
                    Icon(
                        imageVector = Icons.Filled.CheckCircle,
                        contentDescription = null,
                        tint = Colors.Green,
                        modifier = Modifier.size(20.dp),
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = stringResource(R.string.logged_in_as_reviewer),
                        fontWeight = FontWeight.Medium,
                        fontSize = 14.sp,
                    )
                }
                TextButton(onClick = onLogoutClick) {
                    Text(stringResource(R.string.logout))
                }
            }
        } else {
            Column(
                modifier =
                    Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
            ) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.padding(bottom = 12.dp),
                ) {
                    Icon(
                        imageVector = Icons.Filled.Lock,
                        contentDescription = null,
                        modifier = Modifier.size(20.dp),
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = stringResource(R.string.reviewer_required),
                        fontWeight = FontWeight.SemiBold,
                        fontSize = 16.sp,
                    )
                }

                OutlinedTextField(
                    value = username,
                    onValueChange = onUsernameChange,
                    label = { Text(stringResource(R.string.login_hint_email)) },
                    modifier = Modifier.fillMaxWidth(),
                    enabled = !isLoggingIn,
                    singleLine = true,
                )

                Spacer(modifier = Modifier.height(8.dp))

                var passwordVisible by remember { mutableStateOf(false) }

                OutlinedTextField(
                    value = password,
                    onValueChange = onPasswordChange,
                    label = { Text(stringResource(R.string.login_hint_password)) },
                    modifier = Modifier.fillMaxWidth(),
                    enabled = !isLoggingIn,
                    singleLine = true,
                    visualTransformation = if (passwordVisible) VisualTransformation.None else PasswordVisualTransformation(),
                    trailingIcon = {
                        val image =
                            if (passwordVisible) Icons.Filled.Visibility else Icons.Filled.VisibilityOff
                        val description = null
                        IconButton(onClick = { passwordVisible = !passwordVisible }) {
                            Icon(imageVector = image, contentDescription = description)
                        }
                    },
                )

                Spacer(modifier = Modifier.height(12.dp))

                Button(
                    onClick = onLoginClick,
                    modifier = Modifier.align(Alignment.End),
                    enabled = !isLoggingIn && username.isNotBlank() && password.isNotBlank(),
                ) {
                    if (isLoggingIn) {
                        CircularProgressIndicator(
                            modifier = Modifier.size(20.dp),
                            strokeWidth = 2.dp,
                        )
                        Spacer(modifier = Modifier.width(8.dp))
                    }
                    Text(
                        stringResource(
                            if (isLoggingIn) {
                                R.string.login_button_login_loading
                            } else {
                                R.string.login_button_login
                            },
                        ),
                    )
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
private fun PreviewResponseScreen() {
    val response =
        ResponseItemData(
            "550e8400-e29b-41d4-a716-446655440000",
            isSynced = true,
            editEnabled = true,
            deleteEnabled = true,
            startDateString = LocalDateTime.now().toFormattedString(),
            submitDateString = null,
            values = listOf(),
            lang = "eng",
            needsApproval = true,
        )
    QlarrTheme {
        ResponsesScreen(
            modifier = Modifier,
            onLoadNext = { },
            onEditClicked = {},
            onDeleteClicked = {},
            onApproveClicked = {},
            onFileClicked = {},
            onReviewerUsernameChange = {},
            onReviewerPasswordChange = {},
            onReviewerLoginClick = {},
            onReviewerLogoutClick = {},
            screenState =
                ResponsesScreenState(
                    isLoading = false,
                    responses =
                        listOf(
                            response.copy(editEnabled = true, deleteEnabled = false),
                            response.copy(editEnabled = true, deleteEnabled = true),
                            response.copy(editEnabled = true, deleteEnabled = false),
                        ),
                    completeResponsesCount = 3,
                    inCompleteResponsesCount = 2,
                    lastSyncTime = LocalDateTime.now(),
                    isComplete = false,
                    reviewRequired = true,
                    isReviewerLoggedIn = true,
                ),
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
                isSynced = false,
                editEnabled = true,
                deleteEnabled = true,
                startDateString = LocalDateTime.now().toFormattedString(),
                submitDateString = null,
                values = listOf(),
                needsApproval = true,
                lang = "eng",
            ),
            approvalEnabled = true,
        )
    }
}
