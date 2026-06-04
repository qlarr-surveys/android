package com.qlarr.app.ui.survey

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CloudDone
import androidx.compose.material.icons.filled.CloudOff
import androidx.compose.material.icons.filled.Download
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.Speed
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.FilterQuality
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import coil.compose.AsyncImagePainter
import coil.compose.SubcomposeAsyncImage
import coil.compose.SubcomposeAsyncImageContent
import coil.decode.SvgDecoder
import coil.request.ImageRequest
import coil.size.Precision
import com.qlarr.app.R
import com.qlarr.app.api.survey.PublishInfo
import com.qlarr.app.api.survey.SurveyNavigationData
import com.qlarr.app.business.settings.SharedPrefsManager
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.ui.common.compose.boldValueString
import com.qlarr.app.ui.common.theme.Colors
import com.qlarr.app.ui.common.theme.QlarrTheme
import com.qlarr.app.ui.common.theme.TertiaryActionButton
import com.qlarr.app.ui.common.toElapsedTime
import com.qlarr.app.ui.common.toFormattedString
import java.time.LocalDateTime
import java.time.Month
import kotlin.math.max

@Composable
fun SurveyInfoScreen(
    modifier: Modifier = Modifier,
    surveyData: SurveyData,
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
                        iconRes = data.iconRes,
                        text =
                            boldValueString(
                                descriptionRes = data.stringRes,
                                value = data.value,
                            ),
                    )
                }
            }
        }
    }
}

// ── Survey-list card · variation C (accent rail + chips) ─────────────────

@Composable
fun SurveyListItem(
    modifier: Modifier = Modifier,
    surveyData: SurveyData,
    onResponsesClick: (SurveyData) -> Unit = {},
    onInfoClick: (SurveyData) -> Unit = {},
    onStartClick: (SurveyData) -> Unit = {},
    onDownloadClick: (SurveyData) -> Unit = {},
    onGetMissingFilesClick: (SurveyData) -> Unit = {},
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        shape = RoundedCornerShape(20.dp),
        colors = CardDefaults.cardColors(containerColor = Colors.White),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
        border = BorderStroke(1.dp, Colors.Hairline),
    ) {
        Row(modifier = Modifier.height(IntrinsicSize.Min)) {
            AccentRail(surveyData.syncState())
            Column(modifier = Modifier.weight(1f)) {
                Box {
                    SurveyPhoto(
                        imageUrl = surveyData.imageUrl,
                        height = 200.dp,
                    )
                    val syncState = surveyData.syncState()
                    if (syncState != SyncState.NONE) {
                        SyncBadge(
                            synced = syncState == SyncState.SYNCED,
                            modifier =
                                Modifier
                                    .align(Alignment.TopEnd)
                                    .padding(12.dp),
                        )
                    }
                }
                Column(
                    modifier =
                        Modifier.padding(
                            start = 15.dp,
                            end = 15.dp,
                            top = 13.dp,
                            bottom = 15.dp,
                        ),
                    verticalArrangement = Arrangement.spacedBy(10.dp),
                ) {
                    SurveyTitleAndInfo(
                        text = surveyData.name,
                        onInfoClick = { onInfoClick(surveyData) },
                    )
                    SurveyMetaRow(surveyData)
                    SurveyQuota(surveyData)
                    if (surveyData.description.isNotEmpty()) {
                        SurveyDescription(text = surveyData.description, maxLines = 2)
                    }
                    SurveyActionBar(
                        surveyData = surveyData,
                        onResponsesClick = onResponsesClick,
                        onStartClick = onStartClick,
                        onDownloadClick = onDownloadClick,
                    )
                    if (surveyData.cachedDesign &&
                        !surveyData.cachedAllFiles &&
                        !surveyData.newVersionAvailable
                    ) {
                        TertiaryActionButton(
                            modifier = Modifier.fillMaxWidth(),
                            textRes = R.string.survey_item_button_get_missing_files,
                        ) {
                            onGetMissingFilesClick(surveyData)
                        }
                    }
                }
            }
        }
    }
}

private enum class SyncState { NONE, SYNCED, PENDING }

// Sync is meaningful only once a downloaded survey has local responses.
private fun SurveyData.syncState(): SyncState =
    when {
        !cachedDesign || localResponsesCount == 0 -> SyncState.NONE
        localUnsyncedResponsesCount == 0 -> SyncState.SYNCED
        else -> SyncState.PENDING
    }

@Composable
private fun AccentRail(state: SyncState) {
    val color =
        when (state) {
            SyncState.NONE -> Colors.Hairline
            SyncState.SYNCED -> Colors.SyncOk
            SyncState.PENDING -> Colors.Warn
        }
    Box(
        modifier =
            Modifier
                .fillMaxHeight()
                .width(5.dp)
                .background(color),
    )
}

@Composable
private fun SurveyMetaRow(surveyData: SurveyData) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        Icon(
            painter = painterResource(id = R.drawable.ic_calendar),
            contentDescription = null,
            tint = Colors.Faint,
            modifier = Modifier.size(15.dp),
        )
        Text(
            text =
                "${stringResource(id = R.string.survey_last_modified)} " +
                    surveyData.lastModified.toElapsedTime(),
            color = Colors.Faint,
            fontSize = 12.5.sp,
            fontWeight = FontWeight.Medium,
        )
    }
}

// Sync status as a pill badge floating on the cover's top-right corner.
// White-ish surface so it stays legible over real cover photos.
@Composable
private fun SyncBadge(
    synced: Boolean,
    modifier: Modifier = Modifier,
) {
    val ink = if (synced) Colors.SyncOk else Colors.Warn
    val icon = if (synced) Icons.Filled.CloudDone else Icons.Filled.CloudOff
    val labelRes =
        if (synced) R.string.survey_sync_all_synced else R.string.survey_sync_not_synced
    Row(
        modifier =
            modifier
                .shadow(4.dp, RoundedCornerShape(50))
                .background(Colors.White.copy(alpha = 0.94f), RoundedCornerShape(50))
                .padding(start = 8.dp, end = 10.dp, top = 5.dp, bottom = 5.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = ink,
            modifier = Modifier.size(14.dp),
        )
        Text(
            text = stringResource(id = labelRes),
            color = ink,
            fontSize = 12.sp,
            fontWeight = FontWeight.Bold,
        )
    }
}

// Shows a single quota bar — whichever of user / survey quota is closest to
// its cap (fewest left) — and only once that quota crosses 80% used.
@Composable
private fun SurveyQuota(surveyData: SurveyData) {
    data class Quota(
        @StringRes val labelRes: Int,
        val cap: Int,
        val rawLeft: Int,
    )

    val quotas =
        buildList {
            if (surveyData.userQuota > 0) {
                add(
                    Quota(
                        R.string.survey_quota_your,
                        surveyData.userQuota,
                        surveyData.userQuotaLeft() ?: 0,
                    ),
                )
            }
            if (surveyData.surveyQuota > 0) {
                add(
                    Quota(
                        R.string.survey_quota_survey,
                        surveyData.surveyQuota,
                        surveyData.surveyQuotaLeft() ?: 0,
                    ),
                )
            }
        }
    val binding = quotas.minByOrNull { it.rawLeft } ?: return
    if (binding.cap <= 0) return
    val used = binding.cap - binding.rawLeft
    if (used.toFloat() / binding.cap < QUOTA_SHOW_AT) return

    QuotaBar(
        label = stringResource(id = binding.labelRes),
        used = used,
        cap = binding.cap,
        left = max(0, binding.rawLeft),
        reached = binding.rawLeft <= 0,
    )
}

private const val QUOTA_SHOW_AT = 0.8f

@Composable
private fun QuotaBar(
    label: String,
    used: Int,
    cap: Int,
    left: Int,
    reached: Boolean,
) {
    val near = !reached && cap > 0 && left.toFloat() / cap <= 0.15f
    val tone =
        when {
            reached -> Colors.Danger
            near -> Colors.Warn
            else -> Colors.QuotaInk
        }
    val fraction = if (cap > 0) (used.toFloat() / cap).coerceIn(0f, 1f) else 0f
    Column(verticalArrangement = Arrangement.spacedBy(5.dp)) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(5.dp),
            ) {
                Icon(
                    imageVector = Icons.Filled.Speed,
                    contentDescription = null,
                    tint = if (reached) Colors.Danger else Colors.Muted,
                    modifier = Modifier.size(13.dp),
                )
                Text(
                    text = label,
                    color = if (reached) Colors.Danger else Colors.Muted,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.SemiBold,
                )
            }
            if (reached) {
                Text(
                    text = stringResource(id = R.string.survey_quota_reached),
                    color = Colors.Danger,
                    fontSize = 12.5.sp,
                    fontWeight = FontWeight.Bold,
                )
            } else {
                Text(
                    text = quotaLeftText(left = left, cap = cap, near = near),
                    color = Colors.Muted,
                    fontSize = 12.5.sp,
                )
            }
        }
        Box(
            modifier =
                Modifier
                    .fillMaxWidth()
                    .height(6.dp)
                    .clip(RoundedCornerShape(3.dp))
                    .background(if (reached) Colors.DangerBg else Colors.QuotaTrack),
        ) {
            Box(
                modifier =
                    Modifier
                        .fillMaxWidth(fraction)
                        .fillMaxHeight()
                        .clip(RoundedCornerShape(3.dp))
                        .background(tone),
            )
        }
    }
}

// Localized "{left} of {cap} left" with the count bolded for emphasis.
@Composable
private fun quotaLeftText(
    left: Int,
    cap: Int,
    near: Boolean,
): AnnotatedString {
    val leftStr = left.toString()
    val full = stringResource(id = R.string.survey_quota_left_format, leftStr, cap.toString())
    val idx = full.indexOf(leftStr)
    return buildAnnotatedString {
        if (idx < 0) {
            append(full)
            return@buildAnnotatedString
        }
        append(full.substring(0, idx))
        withStyle(
            SpanStyle(
                fontWeight = FontWeight.Bold,
                color = if (near) Colors.Warn else Colors.Ink,
            ),
        ) {
            append(leftStr)
        }
        append(full.substring(idx + leftStr.length))
    }
}

// Action bar — the full button state machine:
//   not downloaded         → Download (full width, when downloadable)
//   downloaded, 0 responses → Start (full width)
//   has local responses     → Responses + Start
//   server has new version  → Start becomes Update
//   quota reached           → Start becomes disabled "Quota reached"
@Composable
private fun SurveyActionBar(
    surveyData: SurveyData,
    onResponsesClick: (SurveyData) -> Unit,
    onStartClick: (SurveyData) -> Unit,
    onDownloadClick: (SurveyData) -> Unit,
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(10.dp),
    ) {
        if (!surveyData.cachedDesign) {
            if (surveyData.isDownloadable) {
                CardPrimaryButton(
                    textRes = R.string.survey_item_button_download,
                    icon = Icons.Filled.Download,
                    onClick = { onDownloadClick(surveyData) },
                )
            }
        } else {
            if (surveyData.localResponsesCount > 0) {
                CardResponsesButton(onClick = { onResponsesClick(surveyData) })
            }
            when {
                surveyData.newVersionAvailable -> {
                    CardPrimaryButton(
                        textRes = R.string.survey_item_button_update,
                        icon = Icons.Filled.Refresh,
                        onClick = { onDownloadClick(surveyData) },
                    )
                }

                surveyData.quotaExceeded() -> {
                    CardQuotaReachedButton()
                }

                else -> {
                    CardPrimaryButton(
                        textRes = R.string.survey_item_button_start,
                        enabled = surveyData.isPlayEnabled,
                        onClick = { onStartClick(surveyData) },
                    )
                }
            }
        }
    }
}

@Composable
private fun RowScope.CardPrimaryButton(
    @StringRes textRes: Int,
    icon: ImageVector? = null,
    enabled: Boolean = true,
    onClick: () -> Unit,
) {
    Button(
        onClick = onClick,
        enabled = enabled,
        modifier =
            Modifier
                .weight(1f)
                .height(42.dp),
        shape = RoundedCornerShape(21.dp),
        colors =
            ButtonDefaults.buttonColors(
                containerColor = Colors.Primary,
                contentColor = Colors.White,
            ),
        elevation = ButtonDefaults.buttonElevation(defaultElevation = 1.dp),
        contentPadding = PaddingValues(horizontal = 14.dp),
    ) {
        if (icon != null) {
            Icon(imageVector = icon, contentDescription = null, modifier = Modifier.size(17.dp))
            Spacer(modifier = Modifier.width(7.dp))
        }
        Text(
            text = stringResource(id = textRes),
            fontSize = 14.5.sp,
            fontWeight = FontWeight.SemiBold,
        )
    }
}

@Composable
private fun RowScope.CardResponsesButton(onClick: () -> Unit) {
    Button(
        onClick = onClick,
        modifier =
            Modifier
                .weight(1f)
                .height(42.dp),
        shape = RoundedCornerShape(21.dp),
        colors =
            ButtonDefaults.buttonColors(
                containerColor = Colors.ResponsesTonalBg,
                contentColor = Colors.ResponsesTonalInk,
            ),
        elevation = ButtonDefaults.buttonElevation(defaultElevation = 0.dp),
        contentPadding = PaddingValues(horizontal = 14.dp),
    ) {
        Text(
            text = stringResource(id = R.string.survey_item_button_responses),
            fontSize = 14.5.sp,
            fontWeight = FontWeight.SemiBold,
        )
    }
}

@Composable
private fun RowScope.CardQuotaReachedButton() {
    Button(
        onClick = {},
        enabled = false,
        modifier =
            Modifier
                .weight(1f)
                .height(42.dp),
        shape = RoundedCornerShape(21.dp),
        colors =
            ButtonDefaults.buttonColors(
                disabledContainerColor = Colors.DisabledBg,
            disabledContentColor = Colors.DisabledInk,
        ),
            elevation = ButtonDefaults.buttonElevation(defaultElevation = 0.dp),
        contentPadding = PaddingValues(horizontal = 14.dp),
    ) {
        Icon(
            imageVector = Icons.Filled.Lock,
            contentDescription = null,
            modifier = Modifier.size(15.dp),
        )
        Spacer(modifier = Modifier.width(7.dp))
        Text(
            text = stringResource(id = R.string.survey_item_button_quota_reached),
            fontSize = 14.5.sp,
            fontWeight = FontWeight.SemiBold,
        )
    }
}

// TODO: show update available
@Composable
private fun SurveyData.getSurveyStats() =
    listOf(
        SurveyStatsData(
            R.drawable.ic_checkmark,
            R.string.survey_status,
            status,
        ),
        SurveyStatsData(
            R.drawable.ic_calendar,
            R.string.survey_creation_date,
            creationDate.toFormattedString(),
        ),
        SurveyStatsData(
            R.drawable.ic_calendar_edit,
            R.string.survey_last_modified,
            lastModified.toFormattedString(),
        ),
        SurveyStatsData(
            R.drawable.ic_calendar_month,
            R.string.survey_start_date,
            startDate?.toFormattedString(),
        ),
        SurveyStatsData(
            R.drawable.ic_calendar_month,
            R.string.survey_end_date,
            endDate?.toFormattedString(),
        ),
        SurveyStatsData(
            R.drawable.ic_list,
            R.string.survey_local_complete_responses,
            localCompleteResponsesCount.toString(),
        ),
        SurveyStatsData(
            R.drawable.ic_list,
            R.string.survey_local_incomplete_responses,
            (localResponsesCount - localCompleteResponsesCount).toString(),
        ),
        SurveyStatsData(
            R.drawable.ic_list,
            R.string.survey_local_responses,
            localResponsesCount.toString(),
        ),
        SurveyStatsData(
            R.drawable.ic_sync,
            R.string.survey_synced_responses,
            syncedResponseCount.toString(),
        ),
        SurveyStatsData(
            R.drawable.ic_sync_failed,
            R.string.survey_unsynced_responses,
            localUnsyncedResponsesCount.toString(),
        ),
        SurveyStatsData(
            R.drawable.ic_baseline_assignment_24,
            R.string.survey_stats_quota,
            surveyQuotaLeft()?.toString() ?: LocalContext.current.getString(R.string.unlimited_quota),
        ),
        SurveyStatsData(
            R.drawable.ic_group,
            R.string.survey_stats_user_quota,
            userQuotaLeft()?.toString() ?: LocalContext.current.getString(R.string.unlimited_quota),
        ),
        SurveyStatsData(
            R.drawable.ic_stopwatch,
            R.string.survey_save_timings,
            saveTimings.toEnabledDisabledString(),
        ),
        SurveyStatsData(
            R.drawable.ic_mic,
            R.string.survey_background_audio,
            backgroundAudio.toEnabledDisabledString(),
        ),
        SurveyStatsData(
            R.drawable.ic_location,
            R.string.survey_record_gps,
            recordGps.toEnabledDisabledString(),
        ),
    )

@Composable
private fun Boolean.toEnabledDisabledString() =
    stringResource(
        id = if (this) {
            R.string.enabled
        } else {
            R.string.disabled
        }
    )

data class SurveyStatsData(
    @DrawableRes val iconRes: Int,
    @StringRes val stringRes: Int,
    val value: String?,
)

@Composable
private fun SurveyDescription(
    modifier: Modifier = Modifier,
    text: String,
    maxLines: Int = Int.MAX_VALUE,
) {
    Text(
        modifier = modifier,
        text = text,
        maxLines = maxLines,
        overflow = TextOverflow.Ellipsis,
        fontSize = 13.8.sp,
        lineHeight = 19.6.sp,
        color = Colors.Muted,
    )
}

@Composable
private fun SurveyTitleAndInfo(
    modifier: Modifier = Modifier,
    text: String,
    onInfoClick: () -> Unit,
) {
    Row(
        verticalAlignment = Alignment.Top,
        modifier = modifier.fillMaxWidth(),
    ) {
        Text(
            modifier = Modifier
                .weight(1f)
                .padding(top = 4.dp),
            text = text,
            fontSize = 19.sp,
            lineHeight = 23.sp,
            letterSpacing = (-0.1).sp,
            fontWeight = FontWeight.SemiBold,
            color = Colors.Ink,
            maxLines = 2,
            overflow = TextOverflow.Ellipsis,
        )
        IconButton(
            onClick = onInfoClick,
            modifier = Modifier.size(34.dp),
        ) {
            Icon(
                modifier = Modifier.size(22.dp),
                painter = painterResource(id = R.drawable.ic_outline_info_24),
                tint = Colors.Muted,
                contentDescription = null,
            )
        }
    }
}

// Resolution of the backdrop copy. Tiny on purpose: the GPU upscales it (with
// bicubic FilterQuality.High) into a smooth color wash, giving a heavy "blur"
// that works on every API level (unlike Modifier.blur, which is API 31+).
// Lower = softer.
private const val BACKDROP_RESOLUTION = 12

@Composable
private fun SurveyPhoto(
    imageUrl: String,
    height: androidx.compose.ui.unit.Dp = 200.dp,
) {
    val context = LocalContext.current
    val token = SharedPrefsManager.instance(context).activeToken

    fun coverRequest(builder: ImageRequest.Builder.() -> Unit = {}) =
        ImageRequest
            .Builder(context)
            .data(imageUrl)
            .decoderFactory(SvgDecoder.Factory())
            .addHeader("Authorization", "Bearer $token")
            .apply(builder)
            .build()

    Box(
        modifier =
            Modifier
                .fillMaxWidth()
                .height(height)
                .background(Colors.DarkGray),
        contentAlignment = Alignment.Center,
    ) {
        // Backdrop: a tiny copy of the cover, cropped to fill and upscaled by the
        // GPU into a soft color wash behind the fitted image.
        AsyncImage(
            model =
                coverRequest {
                    size(BACKDROP_RESOLUTION, BACKDROP_RESOLUTION)
                    // EXACT so Coil keeps decoding the tiny bitmap instead of
                    // reusing the full-res cover once it's in the memory cache.
                    precision(Precision.EXACT)
                },
            contentDescription = null,
            contentScale = ContentScale.Crop,
            filterQuality = FilterQuality.High,
            modifier = Modifier.fillMaxSize(),
        )
        // Foreground: the full cover, fitted and centered.
        SubcomposeAsyncImage(
            model = coverRequest(),
            modifier = Modifier.fillMaxSize(),
            contentScale = ContentScale.Fit,
            contentDescription = null,
        ) {
            if (painter.state is AsyncImagePainter.State.Success) {
                SubcomposeAsyncImageContent()
            } else {
                // Loading / error / no-cover → inset logo so it doesn't reach the edges.
                Image(
                    painter = painterResource(id = R.drawable.logo512),
                    contentDescription = null,
                    contentScale = ContentScale.Fit,
                    modifier =
                        Modifier
                            .fillMaxSize()
                            .padding(24.dp),
                        )
            }
        }
    }
}

@Composable
private fun SurveyStats(
    modifier: Modifier = Modifier,
    @DrawableRes iconRes: Int,
    text: AnnotatedString,
) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(painter = painterResource(id = iconRes), contentDescription = null)
        Text(
            modifier = modifier.padding(horizontal = 16.dp, vertical = 4.dp),
            fontSize = 16.sp,
            text = text,
        )
    }
}

@Composable
@Preview(showBackground = true, backgroundColor = 0xFFF2EDF7)
private fun PreviewSurveyListItem() {
    QlarrTheme {
        SurveyListItem(modifier = Modifier.padding(14.dp), surveyData = getPreviewSurveyData())
    }
}

@Composable
@Preview(showBackground = true, backgroundColor = 0xFFF2EDF7)
private fun PreviewSurveyListItemSynced() {
    QlarrTheme {
        SurveyListItem(
            modifier = Modifier.padding(14.dp),
            surveyData = getPreviewSurveyData().copy(localUnsyncedResponsesCount = 0),
        )
    }
}

@Composable
@Preview(showBackground = true, backgroundColor = 0xFFF2EDF7)
private fun PreviewSurveyListItemNoResponses() {
    QlarrTheme {
        SurveyListItem(
            modifier = Modifier.padding(14.dp),
            surveyData =
                getPreviewSurveyData().copy(
                    localResponsesCount = 0,
                    localCompleteResponsesCount = 0,
                    localUnsyncedResponsesCount = 0,
                    description = "",
                ),
        )
    }
}

@Composable
@Preview(showBackground = true, backgroundColor = 0xFFF2EDF7)
private fun PreviewSurveyListItemNotDownloaded() {
    QlarrTheme {
        SurveyListItem(
            modifier = Modifier.padding(14.dp),
            surveyData =
                getPreviewSurveyData().copy(
                    cachedDesign = false,
                    localResponsesCount = 0,
                ),
        )
    }
}

@Composable
@Preview(showBackground = true, backgroundColor = 0xFFF2EDF7)
private fun PreviewSurveyUpdateAvailableListItem() {
    QlarrTheme {
        SurveyListItem(
            modifier = Modifier.padding(14.dp),
            surveyData = getPreviewSurveyData().copy(newVersionAvailable = true),
        )
    }
}

@Composable
@Preview(showBackground = true, backgroundColor = 0xFFF2EDF7)
private fun PreviewSurveyNearQuotaListItem() {
    QlarrTheme {
        SurveyListItem(
            modifier = Modifier.padding(14.dp),
            surveyData =
                getPreviewSurveyData().copy(
                    userQuota = 50,
                    surveyQuota = 0,
                    localUnsyncedResponsesCount = 3,
                    syncedResponseCount = 42,
                totalResponseCount = 45,
                ),
        )
    }
}

@Composable
@Preview(showBackground = true, backgroundColor = 0xFFF2EDF7)
private fun PreviewSurveyQuotaReachedListItem() {
    QlarrTheme {
        SurveyListItem(
            modifier = Modifier.padding(14.dp),
            surveyData = getPreviewSurveyData().copy(
                userQuota = 50,
                surveyQuota = 0,
                localUnsyncedResponsesCount = 5,
                syncedResponseCount = 45,
                totalResponseCount = 50,
            ),
        )
    }
}

@Composable
@Preview(showBackground = true, backgroundColor = 0xFFF2EDF7)
private fun PreviewSurveyListItemMissingFiles() {
    QlarrTheme {
        SurveyListItem(
            modifier = Modifier.padding(14.dp),
            surveyData = getPreviewSurveyData().copy(cachedAllFiles = false),
        )
    }
}

@Composable
@Preview(showBackground = true)
private fun PreviewSurveyInfoScreen() {
    SurveyInfoScreen(
        surveyData = getPreviewSurveyData(),
    )
}

private fun getPreviewSurveyData() =
    SurveyData(
        id = "someID",
        creationDate = LocalDateTime.of(2020, Month.MARCH, 2, 2, 1, 2),
        lastModified = LocalDateTime.now().minusDays(2),
        startDate = LocalDateTime.now().minusDays(1),
        endDate = LocalDateTime.now().plusDays(5),
        name = "Customer Satisfaction Pulse",
        status = "Aktivan",
        usage = "ki zna",
        surveyQuota = 0,
        userQuota = 0,
        publishInfo = PublishInfo(1, 1),
        newVersionAvailable = false,
        localResponsesCount = 10,
        localCompleteResponsesCount = 8,
        localUnsyncedResponsesCount = 4,
        syncedResponseCount = 5,
        totalResponseCount = 10,
        saveTimings = true,
        backgroundAudio = true,
        recordGps = true,
        description = "Quarterly CSAT running across all retail locations this month.",
        imageUrl = "",
        cachedDesign = true,
        cachedAllFiles = true,
        surveyNavigationData = SurveyNavigationData(),
    )
