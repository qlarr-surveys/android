package com.qlarr.app.ui.survey

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Card
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.qlarr.app.R
import com.qlarr.app.api.survey.PublishInfo
import com.qlarr.app.business.settings.SharedPrefsManager
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.ui.common.compose.boldValueString
import com.qlarr.app.ui.common.theme.Colors
import com.qlarr.app.ui.common.theme.PrimaryActionButton
import com.qlarr.app.ui.common.theme.QlarrTheme
import com.qlarr.app.ui.common.theme.SecondaryActionButton
import com.qlarr.app.ui.common.theme.TertiaryActionButton
import com.qlarr.app.ui.common.toElapsedTime
import com.qlarr.app.ui.common.toFormattedString
import java.time.LocalDateTime
import java.time.Month
import java.time.ZoneOffset

@Composable
fun SurveyInfoScreen(
    modifier: Modifier = Modifier, surveyData: SurveyData
) {
    Column(modifier = modifier) {
        SurveyPhoto(surveyData.imageUrl)
        if (surveyData.description.isNotEmpty()) {
            SurveyDescription(text = surveyData.description)
        }
        Column(modifier = Modifier.padding(16.dp)) {
            surveyData.getSurveyStats().forEach { data ->
                if (data.value != null && data.value != "-1") {
                    SurveyStats(
                        iconRes = data.iconRes, text = boldValueString(
                            descriptionRes = data.stringRes,
                            value = data.value
                        )
                    )
                }
            }
        }
    }
}

@Composable
fun SurveyListItem(
    modifier: Modifier = Modifier,
    surveyData: SurveyData,
    onResponsesClick: (SurveyData) -> Unit = {},
    onInfoClick: (SurveyData) -> Unit = {},
    onStartClick: (SurveyData) -> Unit = {},
    onDownloadClick: (SurveyData) -> Unit = {},
    onGetMissingFilesClick: (SurveyData) -> Unit = {}
) {
    Surface(modifier.padding(vertical = 4.dp)) {
        Card {
            Column(modifier = Modifier.padding(bottom = 8.dp)) {
                SurveyPhoto(imageUrl = surveyData.imageUrl)
                SurveyTitleAndInfo(
                    text = surveyData.name,
                    onInfoClick = { onInfoClick(surveyData) })
                if (surveyData.description.isNotEmpty()) {
                    SurveyDescription(text = surveyData.description, maxLines = 3)
                }
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                ) {
                    Column(
                        modifier = Modifier
                            .weight(1f)
                            .padding(horizontal = 8.dp)
                    ) {
                        SurveyStats(iconRes = R.drawable.ic_calendar, text = buildAnnotatedString {
                            append(
                                "${stringResource(id = R.string.survey_last_modified)} ${
                                    surveyData
                                        .lastModified.toElapsedTime()
                                }"
                            )
                        })
                        when {
                            surveyData.startDate?.isAfter(LocalDateTime.now(ZoneOffset.UTC)) ==
                                    true -> {
                                SurveyStats(
                                    iconRes = R.drawable.ic_stopwatch,
                                    text = buildAnnotatedString {
                                        append(
                                            stringResource(
                                                id = R.string.survey_item_starts,
                                                surveyData.startDate.toElapsedTime()
                                            )
                                        )
                                    })
                            }

                            surveyData.endDate != null -> {
                                SurveyStats(
                                    iconRes = R.drawable.ic_stopwatch,
                                    text = buildAnnotatedString {
                                        append(
                                            stringResource(
                                                id = R.string.survey_item_expires,
                                                surveyData.endDate.toElapsedTime()
                                            )
                                        )
                                    })
                            }
                        }
                        surveyData.quotaLeft()?.let { quotaLeft ->
                            SurveyStats(
                                iconRes = R.drawable.ic_baseline_assignment_24,
                                text = buildAnnotatedString {
                                    append(
                                        stringResource(
                                            id = R.string.survey_item_quota_left,
                                            quotaLeft
                                        )
                                    )
                                })
                        }
                    }
                }

                Spacer(Modifier.weight(1f))

                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(8.dp),
                    horizontalArrangement = Arrangement.spacedBy(16.dp)
                ) {
                    if (surveyData.isResponsesEnabled) {
                        SecondaryActionButton(
                            modifier = Modifier.weight(1f),
                            textRes = R.string.survey_item_button_responses,
                            onClick = { onResponsesClick(surveyData) }
                        )
                    }
                    if (!surveyData.cachedDesign && surveyData.isDownloadable) {
                        PrimaryActionButton(
                            modifier = Modifier.weight(1f),
                            textRes = R.string.survey_item_button_download,
                            onClick = { onDownloadClick(surveyData) })
                    } else if (surveyData.newVersionAvailable && surveyData.isDownloadable) {
                        PrimaryActionButton(
                            modifier = Modifier.weight(1f),
                            textRes = R.string.survey_item_button_update,
                            onClick = { onDownloadClick(surveyData) })
                    } else if (surveyData.cachedDesign) {
                        PrimaryActionButton(
                            modifier = Modifier.weight(1f),
                            textRes = R.string.survey_item_button_start,
                            enabled = surveyData.isPlayEnabled,
                            onClick = { onStartClick(surveyData) })
                    }
                }
                if (surveyData.cachedDesign
                    && !surveyData.cachedAllFiles
                    && !surveyData.newVersionAvailable
                ) {
                    TertiaryActionButton(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(8.dp),
                        textRes = R.string.survey_item_button_get_missing_files
                    ) {
                        onGetMissingFilesClick(surveyData)
                    }
                }
            }
        }
    }
}

// TODO: show update available
@Composable
private fun SurveyData.getSurveyStats() = listOf(
    SurveyStatsData(
        R.drawable.ic_checkmark,
        R.string.survey_status,
        status
    ),
    SurveyStatsData(
        R.drawable.ic_calendar,
        R.string.survey_creation_date,
        creationDate.toFormattedString()
    ),
    SurveyStatsData(
        R.drawable.ic_calendar_edit,
        R.string.survey_last_modified,
        lastModified.toFormattedString()
    ),
    SurveyStatsData(
        R.drawable.ic_calendar_month,
        R.string.survey_start_date,
        startDate?.toFormattedString()
    ),
    SurveyStatsData(
        R.drawable.ic_calendar_month,
        R.string.survey_end_date,
        endDate?.toFormattedString()
    ),
    SurveyStatsData(
        R.drawable.ic_list,
        R.string.survey_local_complete_responses,
        localCompleteResponsesCount.toString()
    ),
    SurveyStatsData(
        R.drawable.ic_list,
        R.string.survey_local_incomplete_responses,
        (localResponsesCount - localCompleteResponsesCount).toString()
    ),
    SurveyStatsData(
        R.drawable.ic_list,
        R.string.survey_local_responses,
        localResponsesCount.toString()
    ),
    SurveyStatsData(
        R.drawable.ic_sync,
        R.string.survey_synced_responses,
        syncedResponseCount.toString()
    ),
    SurveyStatsData(
        R.drawable.ic_sync_failed,
        R.string.survey_unsynced_responses,
        localUnsyncedResponsesCount.toString()
    ),
    SurveyStatsData(
        R.drawable.ic_baseline_assignment_24,
        R.string.survey_stats_quota,
        surveyQuotaLeft()?.toString() ?: LocalContext.current.getString(R.string.unlimited_quota)
    )
)

data class SurveyStatsData(
    @DrawableRes val iconRes: Int, @StringRes val stringRes: Int, val value: String?
)

@Composable
private fun SurveyDescription(
    modifier: Modifier = Modifier, text: String, maxLines: Int = Int.MAX_VALUE
) {
    Text(
        modifier = modifier.padding(vertical = 4.dp, horizontal = 8.dp), text = text, maxLines =
        maxLines,
        fontSize = 16.sp
    )
}

@Composable
private fun SurveyTitleAndInfo(
    modifier: Modifier = Modifier, text: String, onInfoClick: () -> Unit
) {
    Row(
        verticalAlignment = Alignment.CenterVertically, modifier =
        modifier.padding(vertical = 0.dp, horizontal = 8.dp)
    ) {
        Text(
            modifier = Modifier.weight(1f),
            text = text,
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold
        )
        IconButton(onClick = onInfoClick) {
            Icon(
                modifier = Modifier.size(48.dp),
                painter = painterResource(id = R.drawable.ic_outline_info_24),
                contentDescription = null
            )
        }
    }
}

@Composable
private fun SurveyPhoto(imageUrl: String) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(200.dp)
            .background(Colors.LightGray),
        contentAlignment = Alignment.BottomStart
    ) {
        Icon(
            modifier = Modifier.align(Alignment.Center),
            painter = painterResource(id = R.drawable.image_64),
            contentDescription = null
        )
        AsyncImage(
            model = ImageRequest.Builder(LocalContext.current)
                .data(imageUrl)
                .addHeader(
                    "Authorization",
                    "Bearer ${SharedPrefsManager.instance(LocalContext.current).activeToken}"
                )
                .build(),
            modifier = Modifier
                .fillMaxSize(),
            contentScale = ContentScale.Crop,
            contentDescription = null
        )
    }
}

@Composable
private fun SurveyStats(
    modifier: Modifier = Modifier,
    @DrawableRes iconRes: Int,
    text: AnnotatedString
) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(painter = painterResource(id = iconRes), contentDescription = null)
        Text(
            modifier = modifier.padding(horizontal = 16.dp, vertical = 4.dp),
            fontSize = 16.sp,
            text = text
        )
    }
}

@Composable
@Preview(showBackground = true)
fun PreviewSurveyListItem() {
    QlarrTheme {
        SurveyListItem(surveyData = getPreviewSurveyData())
    }
}

@Composable
@Preview(showBackground = true)
fun PreviewSurveyListItemMissingFiles() {
    QlarrTheme {
        SurveyListItem(surveyData = getPreviewSurveyData().copy(cachedAllFiles = false))
    }
}

@Composable
@Preview(showBackground = true)
fun PreviewSurveyUpdateAvailableListItem() {
    QlarrTheme {
        SurveyListItem(surveyData = getPreviewSurveyData().copy(newVersionAvailable = true))
    }
}

@Composable
@Preview(showBackground = true)
fun PreviewSurveyNoSurveyQuotaListItem() {
    QlarrTheme {
        SurveyListItem(
            surveyData = getPreviewSurveyData()
                .copy(surveyQuota = 13)
        )
    }
}


@Composable
@Preview(showBackground = true)
fun PreviewSurveyInfoScreen(
) {
    SurveyInfoScreen(
        surveyData = getPreviewSurveyData()
    )
}

private fun getPreviewSurveyData() = SurveyData(
    id = "someID",
    creationDate = LocalDateTime.of(2020, Month.MARCH, 2, 2, 1, 2),
    lastModified = LocalDateTime.now(), startDate = LocalDateTime.now().minusDays(1),
    endDate = LocalDateTime.now().plusDays(5),
    name = "My survey",
    status = "Aktivan",
    usage = "ki zna",
    surveyQuota = 20,
    publishInfo = PublishInfo(1, 1),
    newVersionAvailable = false,
    localResponsesCount = 10,
    localCompleteResponsesCount = 8,
    localUnsyncedResponsesCount = 3,
    syncedResponseCount = 5,
    totalResponseCount = 10,
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl = "https://www.mojkvart.hr/idnthumb.ashx?src=%2Flang%2Fstranica%2Flogo%2Flogo_672023" +
            ".jpg&mw=398&mh=208&crop=0&forceDimension=1&hash=637123499480553706&level=201",
    cachedDesign = true,
    cachedAllFiles = true
)
