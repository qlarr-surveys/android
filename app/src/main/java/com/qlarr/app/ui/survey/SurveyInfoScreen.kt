package com.qlarr.app.ui.survey

import androidx.annotation.StringRes
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.navigationBars
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.FormatListBulleted
import androidx.compose.material.icons.filled.AutoAwesome
import androidx.compose.material.icons.filled.CalendarToday
import androidx.compose.material.icons.filled.Cloud
import androidx.compose.material.icons.filled.CloudDone
import androidx.compose.material.icons.filled.CloudUpload
import androidx.compose.material.icons.filled.Download
import androidx.compose.material.icons.filled.LocationOn
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material.icons.filled.Mic
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.Sell
import androidx.compose.material.icons.filled.Smartphone
import androidx.compose.material.icons.filled.Speed
import androidx.compose.material.icons.filled.Sync
import androidx.compose.material.icons.filled.Timer
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.res.pluralStringResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.qlarr.app.R
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.business.survey.SurveyStatus
import com.qlarr.app.ui.common.theme.Colors
import com.qlarr.app.ui.common.theme.QlarrTheme
import com.qlarr.app.ui.common.toElapsedTime
import com.qlarr.app.ui.common.toFormattedString
import kotlin.math.max

// ── Derived per-survey signals ───────────────────────────────────────────
private class InfoSignals(
    survey: SurveyData,
) {
    val downloaded = survey.cachedDesign
    val complete = survey.localCompleteResponsesCount
    val incomplete = max(0, survey.localResponsesCount - survey.localCompleteResponsesCount)
    val toSync = survey.localUnsyncedResponsesCount
    val synced = survey.syncedResponseCount
    val serverTotal = survey.totalResponseCount
    val local = survey.localResponsesCount
    val hasResp = downloaded && local > 0
}

@Composable
fun SurveyInfoScreen(
    modifier: Modifier = Modifier,
    survey: SurveyData,
    isSyncing: Boolean,
    onSync: () -> Unit,
    onViewAll: () -> Unit,
) {
    val s = InfoSignals(survey)
    Column(
        modifier =
            modifier
                .fillMaxWidth()
                .verticalScroll(rememberScrollState()),
    ) {
        if (survey.newVersionAvailable) {
            UpdateBanner()
        }
        InfoHeader(survey)
        Column(
            modifier = Modifier.padding(start = 16.dp, end = 16.dp, top = 14.dp, bottom = 18.dp),
            verticalArrangement = Arrangement.spacedBy(18.dp),
        ) {
            SyncHeroCard(survey, s, isSyncing, onSync)
            if (s.downloaded) {
                ResponsesSection(s, onViewAll)
            }
            LimitsSection(survey)
            CaptureSection(survey)
        }
    }
}

// ── Update banner ────────────────────────────────────────────────────────
@Composable
private fun UpdateBanner() {
    Row(
        modifier =
            Modifier
                .fillMaxWidth()
                .background(Colors.Primary.copy(alpha = 0.10f))
                .padding(horizontal = 18.dp, vertical = 10.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(9.dp),
    ) {
        Icon(
            imageVector = Icons.Filled.Refresh,
            contentDescription = null,
            tint = Colors.Primary,
            modifier = Modifier.size(16.dp),
        )
        Text(
            text = stringResource(R.string.info_update_banner),
            color = Colors.Primary,
            fontSize = 12.5.sp,
            fontWeight = FontWeight.SemiBold,
        )
    }
}

// ── Header (title-led, no banner) ────────────────────────────────────────
@Composable
private fun InfoHeader(survey: SurveyData) {
    Column(
        modifier = Modifier.padding(start = 18.dp, end = 18.dp, top = 18.dp, bottom = 2.dp),
        verticalArrangement = Arrangement.spacedBy(10.dp),
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween,
        ) {
            StatusPill(survey.surveyStatus)
            VersionChip(survey.publishInfo.version)
        }
        Text(
            text = survey.name,
            fontSize = 23.sp,
            lineHeight = 27.sp,
            letterSpacing = (-0.3).sp,
            fontWeight = FontWeight.Bold,
            color = Colors.Ink,
        )
        if (survey.description.isNotEmpty()) {
            Text(
                text = survey.description,
                fontSize = 14.sp,
                lineHeight = 20.sp,
                color = Colors.Muted,
            )
        }
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            Icon(
                imageVector = Icons.Filled.CalendarToday,
                contentDescription = null,
                tint = Colors.Faint,
                modifier = Modifier.size(13.dp),
            )
            Text(
                text =
                    stringResource(
                        R.string.info_meta_dates,
                        survey.creationDate.toFormattedString(),
                        survey.lastModified.toFormattedString(),
                    ),
                fontSize = 12.5.sp,
                fontWeight = FontWeight.Medium,
                color = Colors.Faint,
            )
        }
    }
}

@Composable
private fun VersionChip(version: Int) {
    Row(
        modifier =
            Modifier
                .clip(RoundedCornerShape(7.dp))
                .background(Colors.SlateBg)
                .border(BorderStroke(1.dp, Colors.SlateLine), RoundedCornerShape(7.dp))
                .padding(start = 6.dp, end = 8.dp, top = 2.dp, bottom = 2.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(5.dp),
    ) {
        Icon(
            imageVector = Icons.Filled.Sell,
            contentDescription = null,
            tint = Colors.Slate,
            modifier = Modifier.size(12.dp),
        )
        Text(
            text = "v$version",
            fontFamily = FontFamily.Monospace,
            fontSize = 11.sp,
            fontWeight = FontWeight.SemiBold,
            color = Colors.Slate,
        )
    }
}

@Composable
private fun StatusPill(status: SurveyStatus) {
    data class Skin(
        @StringRes val label: Int,
        val ink: Color,
        val bg: Color,
        val line: Color,
    )

    val skin =
        when (status) {
            SurveyStatus.ACTIVE -> {
                Skin(R.string.info_status_active, Colors.SyncOk, Colors.SyncOkBg, Colors.SyncOkLine)
            }

            SurveyStatus.SCHEDULED -> {
                Skin(R.string.info_status_scheduled, Colors.Warn, Colors.WarnBg, Colors.WarnLine)
            }

            SurveyStatus.EXPIRED -> {
                Skin(
                    R.string.info_status_expired,
                    Colors.Danger,
                    Colors.DangerBg,
                    Colors.Danger.copy(alpha = 0.30f),
                )
            }
        }
    Row(
        modifier =
            Modifier
                .clip(RoundedCornerShape(50))
                .background(skin.bg)
                .border(BorderStroke(1.dp, skin.line), RoundedCornerShape(50))
                .padding(start = 9.dp, end = 11.dp, top = 4.dp, bottom = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        Box(
            modifier =
                Modifier
                    .size(7.dp)
                    .clip(RoundedCornerShape(50))
                    .background(skin.ink),
        )
        Text(
            text = stringResource(skin.label),
            color = skin.ink,
            fontSize = 12.sp,
            fontWeight = FontWeight.Bold,
            letterSpacing = 0.2.sp,
        )
    }
}

// ── Sync-status hero card (4 variants) ───────────────────────────────────
@Composable
private fun SyncHeroCard(
    survey: SurveyData,
    s: InfoSignals,
    isSyncing: Boolean,
    onSync: () -> Unit,
) {
    when {
        !s.downloaded -> {
            HeroShell(bg = Colors.SlateBg, border = Colors.SlateLine) {
                HeroBody(
                    icon = Icons.Filled.Download,
                    iconTint = Colors.Slate,
                    title = stringResource(R.string.info_sync_offline_title),
                    titleColor = Colors.Ink,
                    sub = stringResource(R.string.info_sync_offline_sub),
                    subColor = Colors.Muted,
                )
            }
        }

        isSyncing -> {
            HeroShell(bg = Colors.WarnBg, border = Colors.WarnLine) {
                CircularProgressIndicator(
                    modifier = Modifier.size(22.dp),
                    strokeWidth = 2.5.dp,
                    color = Colors.Warn,
                )
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = stringResource(R.string.info_sync_syncing_title),
                        fontSize = 14.sp,
                        fontWeight = FontWeight.Bold,
                        color = Colors.Warn,
                    )
                    Text(
                        text = stringResource(R.string.info_sync_syncing_sub),
                        fontSize = 12.sp,
                        color = Colors.Warn.copy(alpha = 0.85f),
                        modifier = Modifier.padding(top = 1.dp),
                    )
                }
            }
        }

        !s.hasResp -> {
            HeroShell(bg = Colors.White, border = Colors.Hairline) {
                HeroBody(
                    icon = Icons.Filled.AutoAwesome,
                    iconTint = Colors.Primary,
                    title = stringResource(R.string.info_sync_ready_title),
                    titleColor = Colors.Ink,
                    sub = stringResource(R.string.info_sync_ready_sub),
                    subColor = Colors.Muted,
                )
            }
        }

        s.toSync > 0 -> {
            HeroShell(bg = Colors.WarnBg, border = Colors.WarnLine) {
                HeroBody(
                    icon = Icons.Filled.CloudUpload,
                    iconTint = Colors.Warn,
                    title =
                        pluralStringResource(
                            R.plurals.info_sync_pending_title,
                            s.toSync,
                            s.toSync,
                        ),
                    titleColor = Colors.Warn,
                    sub =
                        survey.lastSync?.let {
                            stringResource(R.string.info_sync_pending_sub, it.toElapsedTime())
                        } ?: stringResource(R.string.info_sync_pending_sub_never),
                    subColor = Colors.Warn.copy(alpha = 0.85f),
                    trailing = { HeroSyncButton(isSyncing, onSync) },
                )
            }
        }

        else -> {
            HeroShell(bg = Colors.SyncOkBg, border = Colors.SyncOkLine) {
                HeroBody(
                    icon = Icons.Filled.CloudDone,
                    iconTint = Colors.SyncOk,
                    title = stringResource(R.string.info_sync_synced_title),
                    titleColor = Colors.SyncOk,
                    sub =
                        survey.lastSync?.let {
                            stringResource(
                                R.string.info_sync_synced_sub,
                                s.synced,
                                it.toElapsedTime(),
                            )
                        } ?: stringResource(R.string.info_sync_synced_sub_nodate, s.synced),
                    subColor = Colors.SyncOk.copy(alpha = 0.85f),
                )
            }
        }
    }
}

@Composable
private fun HeroShell(
    bg: Color,
    border: Color,
    content: @Composable RowScope.() -> Unit,
) {
    Row(
        modifier =
            Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(18.dp))
                .background(bg)
                .border(BorderStroke(1.dp, border), RoundedCornerShape(18.dp))
                .padding(14.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(12.dp),
        content = content,
    )
}

@Composable
private fun RowScope.HeroBody(
    icon: ImageVector,
    iconTint: Color,
    title: String,
    titleColor: Color,
    sub: String,
    subColor: Color,
    trailing: (@Composable () -> Unit)? = null,
) {
    Icon(
        imageVector = icon,
        contentDescription = null,
        tint = iconTint,
        modifier = Modifier.size(22.dp),
    )
    Column(modifier = Modifier.weight(1f)) {
        Text(
            text = title,
            fontSize = 14.sp,
            fontWeight = FontWeight.Bold,
            color = titleColor,
        )
        Text(
            text = sub,
            fontSize = 12.sp,
            color = subColor,
            modifier = Modifier.padding(top = 1.dp),
        )
    }
    trailing?.invoke()
}

@Composable
private fun HeroSyncButton(
    isSyncing: Boolean,
    onSync: () -> Unit,
) {
    Button(
        onClick = onSync,
        enabled = !isSyncing,
        modifier = Modifier.height(38.dp),
        shape = RoundedCornerShape(19.dp),
        colors =
            ButtonDefaults.buttonColors(
                containerColor = Colors.Warn,
                contentColor = Colors.White,
                disabledContainerColor = Colors.Warn.copy(alpha = 0.6f),
                disabledContentColor = Colors.White,
            ),
        elevation = ButtonDefaults.buttonElevation(defaultElevation = 1.dp),
        contentPadding = PaddingValues(horizontal = 16.dp),
    ) {
        if (isSyncing) {
            CircularProgressIndicator(
                modifier = Modifier.size(16.dp),
                strokeWidth = 2.dp,
                color = Colors.White,
            )
        } else {
            Icon(
                imageVector = Icons.Filled.Sync,
                contentDescription = null,
                modifier = Modifier.size(16.dp),
            )
            Spacer(modifier = Modifier.width(7.dp))
            Text(
                text = stringResource(R.string.survey_item_button_sync),
                fontSize = 13.5.sp,
                fontWeight = FontWeight.SemiBold,
            )
        }
    }
}

// ── Responses section (two stat cards: on-device vs. server total) ───────
@Composable
private fun ResponsesSection(
    s: InfoSignals,
    onViewAll: () -> Unit,
) {
    SectionLabel(
        labelRes = R.string.info_section_responses,
        right =
            if (s.hasResp) {
                {
                    Text(
                        text = stringResource(R.string.info_view_all),
                        fontSize = 12.sp,
                        fontWeight = FontWeight.SemiBold,
                        color = Colors.ResponsesTonalInk,
                        modifier = Modifier.clickable(onClick = onViewAll),
                    )
                }
            } else {
                null
            },
    )
    Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
        StatCard(
            modifier = Modifier.weight(1f),
            icon = Icons.Filled.Smartphone,
            iconTint = Colors.Slate,
            iconBg = Colors.SlateBg,
            value = s.local,
            label = stringResource(R.string.info_responses_on_device),
            labelColor = Colors.Slate,
            sub = stringResource(R.string.info_responses_breakdown, s.complete, s.incomplete),
        )
        StatCard(
            modifier = Modifier.weight(1f),
            icon = Icons.Filled.Cloud,
            iconTint = Colors.ResponsesTonalInk,
            iconBg = Colors.ResponsesTonalBg,
            value = s.serverTotal,
            label = stringResource(R.string.info_responses_total),
            labelColor = Colors.ResponsesTonalInk,
            sub =
                if (s.toSync > 0) {
                    stringResource(R.string.info_responses_to_upload, s.toSync)
                } else {
                    stringResource(R.string.info_responses_all_uploaded)
                },
        )
    }
}

@Composable
private fun StatCard(
    modifier: Modifier,
    icon: ImageVector,
    iconTint: Color,
    iconBg: Color,
    value: Int,
    label: String,
    labelColor: Color,
    sub: String,
) {
    Card(
        modifier = modifier,
        shape = RoundedCornerShape(18.dp),
        colors = CardDefaults.cardColors(containerColor = Colors.White),
        elevation = CardDefaults.cardElevation(defaultElevation = 1.dp),
        border = BorderStroke(1.dp, Colors.Hairline),
    ) {
        Column(
            modifier = Modifier.padding(13.dp),
            verticalArrangement = Arrangement.spacedBy(7.dp),
        ) {
            Box(
                modifier =
                    Modifier
                        .size(30.dp)
                        .clip(RoundedCornerShape(9.dp))
                        .background(iconBg),
                contentAlignment = Alignment.Center,
            ) {
                Icon(
                    imageVector = icon,
                    contentDescription = null,
                    tint = iconTint,
                    modifier = Modifier.size(18.dp),
                )
            }
            Row(
                verticalAlignment = Alignment.Bottom,
                horizontalArrangement = Arrangement.spacedBy(6.dp),
            ) {
                Text(
                    text = value.toString(),
                    fontSize = 27.sp,
                    fontWeight = FontWeight.Bold,
                    letterSpacing = (-0.5).sp,
                    color = Colors.Ink,
                )
                Text(
                    text = label,
                    fontSize = 12.5.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = labelColor,
                    modifier = Modifier.padding(bottom = 3.dp),
                )
            }
            Text(text = sub, fontSize = 12.sp, color = Colors.Muted)
        }
    }
}

// ── Capture settings (chips) ─────────────────────────────────────────────
@OptIn(ExperimentalLayoutApi::class)
@Composable
private fun CaptureSection(survey: SurveyData) {
    SectionLabel(labelRes = R.string.info_section_recorded)
    FlowRow(
        horizontalArrangement = Arrangement.spacedBy(9.dp),
        verticalArrangement = Arrangement.spacedBy(9.dp),
    ) {
        CaptureChip(Icons.Filled.Timer, R.string.survey_save_timings, survey.saveTimings)
        CaptureChip(Icons.Filled.Mic, R.string.survey_background_audio, survey.backgroundAudio)
        CaptureChip(Icons.Filled.LocationOn, R.string.survey_record_gps, survey.recordGps)
    }
}

@Composable
private fun CaptureChip(
    icon: ImageVector,
    @StringRes labelRes: Int,
    on: Boolean,
) {
    val ink = if (on) Colors.SyncOk else Colors.Faint
    val bg = if (on) Colors.SyncOkBg else Colors.White
    val line = if (on) Colors.SyncOkLine else Colors.Hairline
    Row(
        modifier =
            Modifier
                .clip(RoundedCornerShape(50))
                .background(bg)
                .border(BorderStroke(1.dp, line), RoundedCornerShape(50))
                .padding(start = 10.dp, end = 12.dp, top = 7.dp, bottom = 7.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(7.dp),
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = ink,
            modifier = Modifier.size(16.dp),
        )
        Text(
            text = stringResource(labelRes),
            fontSize = 13.sp,
            fontWeight = FontWeight.SemiBold,
            color = ink,
        )
        if (!on) {
            Text(
                text = stringResource(R.string.info_chip_off),
                fontSize = 13.sp,
                fontWeight = FontWeight.Medium,
                color = ink.copy(alpha = 0.8f),
            )
        }
    }
}

// ── Limits (quota) ───────────────────────────────────────────────────────
@Composable
private fun LimitsSection(survey: SurveyData) {
    val hasSurveyQuota = survey.surveyQuota > 0
    val hasUserQuota = survey.userQuota > 0
    SectionLabel(labelRes = R.string.info_section_limits)
    if (hasSurveyQuota || hasUserQuota) {
        InfoCard(padding = 15.dp) {
            Column(verticalArrangement = Arrangement.spacedBy(14.dp)) {
                if (hasSurveyQuota) {
                    QuotaBar(
                        icon = Icons.Filled.Speed,
                        label = stringResource(R.string.survey_quota_survey),
                        used = survey.surveyQuota - (survey.surveyQuotaLeft() ?: 0),
                        cap = survey.surveyQuota,
                    )
                }
                if (hasUserQuota) {
                    QuotaBar(
                        icon = Icons.Filled.Person,
                        label = stringResource(R.string.survey_quota_your),
                        used = survey.userQuota - (survey.userQuotaLeft() ?: 0),
                        cap = survey.userQuota,
                    )
                }
            }
        }
    } else {
        InfoCard(padding = PaddingValues(horizontal = 16.dp, vertical = 4.dp)) {
            UnlimitedRow(Icons.Filled.Speed, stringResource(R.string.survey_quota_survey))
            Box(
                modifier =
                    Modifier
                        .fillMaxWidth()
                        .height(1.dp)
                        .background(Colors.Hairline.copy(alpha = 0.6f)),
            )
            UnlimitedRow(Icons.Filled.Person, stringResource(R.string.survey_quota_your))
        }
    }
}

@Composable
private fun UnlimitedRow(
    icon: ImageVector,
    label: String,
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 10.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = Colors.Faint,
            modifier = Modifier.size(18.dp),
        )
        Spacer(modifier = Modifier.width(12.dp))
        Text(text = label, fontSize = 14.sp, color = Colors.Ink, modifier = Modifier.weight(1f))
        Text(
            text = stringResource(R.string.unlimited_quota),
            fontSize = 15.sp,
            fontWeight = FontWeight.Bold,
            color = Colors.Muted,
        )
    }
}

@Composable
private fun QuotaBar(
    icon: ImageVector,
    label: String,
    used: Int,
    cap: Int,
) {
    val left = max(0, cap - used)
    val reached = cap > 0 && used >= cap
    val near = !reached && cap > 0 && left.toFloat() / cap <= 0.15f
    val tone =
        when {
            reached -> Colors.Danger
            near -> Colors.Warn
            else -> Colors.QuotaInk
        }
    val fraction = if (cap > 0) (used.toFloat() / cap).coerceIn(0f, 1f) else 0f
    Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(7.dp),
            ) {
                Icon(
                    imageVector = icon,
                    contentDescription = null,
                    tint = if (reached) Colors.Danger else Colors.QuotaInk,
                    modifier = Modifier.size(15.dp),
                )
                Text(
                    text = label,
                    fontSize = 13.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = if (reached) Colors.Danger else Colors.Ink,
                )
            }
            if (reached) {
                Text(
                    text = stringResource(R.string.survey_quota_reached),
                    fontSize = 12.5.sp,
                    fontWeight = FontWeight.Bold,
                    color = Colors.Danger,
                )
            } else {
                Text(
                    text =
                        stringResource(
                            R.string.survey_quota_left_format,
                            used.toString(),
                            cap.toString(),
                        ),
                    fontSize = 12.5.sp,
                    color = Colors.Muted,
                )
            }
        }
        Box(
            modifier =
                Modifier
                    .fillMaxWidth()
                    .height(7.dp)
                    .clip(RoundedCornerShape(4.dp))
                    .background(if (reached) Colors.DangerBg else Colors.QuotaTrack),
        ) {
            Box(
                modifier =
                    Modifier
                        .fillMaxWidth(fraction)
                        .fillMaxHeight()
                        .clip(RoundedCornerShape(4.dp))
                        .background(tone),
            )
        }
    }
}

// ── Sticky bottom action bar (state machine) ─────────────────────────────
@Composable
fun SurveyInfoBottomBar(
    survey: SurveyData,
    isDownloading: Boolean,
    onDownload: () -> Unit,
    onStart: () -> Unit,
    onUpdate: () -> Unit,
    onResponses: () -> Unit,
) {
    val s = InfoSignals(survey)
    Row(
        modifier =
            Modifier
                .fillMaxWidth()
                .shadow(8.dp)
                .background(Colors.White)
                .border(BorderStroke(1.dp, Colors.Hairline))
                .windowInsetsPadding(WindowInsets.navigationBars)
                .padding(horizontal = 16.dp, vertical = 12.dp),
        horizontalArrangement = Arrangement.spacedBy(11.dp),
    ) {
        if (!s.downloaded) {
            BarPrimaryButton(
                textRes = R.string.survey_item_button_download,
                icon = Icons.Filled.Download,
                enabled = survey.isDownloadable && !isDownloading,
                loading = isDownloading,
                onClick = onDownload,
            )
        } else {
            if (s.hasResp) {
                BarTonalButton(onClick = onResponses)
            }
            when {
                survey.newVersionAvailable -> {
                    BarPrimaryButton(
                        textRes = R.string.survey_item_button_update,
                        icon = Icons.Filled.Refresh,
                        enabled = !isDownloading,
                        loading = isDownloading,
                        onClick = onUpdate,
                    )
                }

                survey.quotaExceeded() -> {
                    BarDisabledButton()
                }

                else -> {
                    BarPrimaryButton(
                        textRes = R.string.survey_item_button_start,
                        icon = Icons.Filled.PlayArrow,
                        enabled = survey.isPlayEnabled,
                        loading = false,
                        onClick = onStart,
                    )
                }
            }
        }
    }
}

@Composable
private fun RowScope.BarPrimaryButton(
    @StringRes textRes: Int,
    icon: ImageVector,
    enabled: Boolean,
    loading: Boolean,
    onClick: () -> Unit,
) {
    Button(
        onClick = onClick,
        enabled = enabled,
        modifier = Modifier
            .weight(1f)
            .height(46.dp),
        shape = RoundedCornerShape(23.dp),
        colors =
            ButtonDefaults.buttonColors(
                containerColor = Colors.Primary,
                contentColor = Colors.White,
            ),
        elevation = ButtonDefaults.buttonElevation(defaultElevation = 1.dp),
        contentPadding = PaddingValues(horizontal = 18.dp),
    ) {
        if (loading) {
            CircularProgressIndicator(
                modifier = Modifier.size(18.dp),
                strokeWidth = 2.dp,
                color = Colors.White,
            )
        } else {
            Icon(imageVector = icon, contentDescription = null, modifier = Modifier.size(18.dp))
            Spacer(modifier = Modifier.width(8.dp))
            Text(text = stringResource(textRes), fontSize = 15.sp, fontWeight = FontWeight.SemiBold)
        }
    }
}

@Composable
private fun RowScope.BarTonalButton(onClick: () -> Unit) {
    Button(
        onClick = onClick,
        modifier = Modifier
            .weight(1f)
            .height(46.dp),
        shape = RoundedCornerShape(23.dp),
        colors =
            ButtonDefaults.buttonColors(
                containerColor = Colors.ResponsesTonalBg,
                contentColor = Colors.ResponsesTonalInk,
            ),
        elevation = ButtonDefaults.buttonElevation(defaultElevation = 0.dp),
        contentPadding = PaddingValues(horizontal = 18.dp),
    ) {
        Icon(
            imageVector = Icons.AutoMirrored.Filled.FormatListBulleted,
            contentDescription = null,
            modifier = Modifier.size(17.dp),
        )
        Spacer(modifier = Modifier.width(8.dp))
        Text(
            text = stringResource(R.string.survey_item_button_responses),
            fontSize = 15.sp,
            fontWeight = FontWeight.SemiBold,
        )
    }
}

@Composable
private fun RowScope.BarDisabledButton() {
    Button(
        onClick = {},
        enabled = false,
        modifier = Modifier
            .weight(1f)
            .height(46.dp),
        shape = RoundedCornerShape(23.dp),
        colors =
            ButtonDefaults.buttonColors(
                disabledContainerColor = Colors.DisabledBg,
                disabledContentColor = Colors.DisabledInk,
            ),
        contentPadding = PaddingValues(horizontal = 18.dp),
    ) {
        Icon(
            imageVector = Icons.Filled.Lock,
            contentDescription = null,
            modifier = Modifier.size(15.dp),
        )
        Spacer(modifier = Modifier.width(8.dp))
        Text(
            text = stringResource(R.string.survey_item_button_quota_reached),
            fontSize = 15.sp,
            fontWeight = FontWeight.SemiBold,
        )
    }
}

// ── Small shared primitives ──────────────────────────────────────────────
@Composable
private fun SectionLabel(
    @StringRes labelRes: Int,
    right: (@Composable () -> Unit)? = null,
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 4.dp, vertical = 0.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Text(
            text = stringResource(labelRes),
            fontSize = 11.5.sp,
            fontWeight = FontWeight.Bold,
            letterSpacing = 0.7.sp,
            color = Colors.Faint,
        )
        right?.invoke()
    }
}

@Composable
private fun InfoCard(
    padding: PaddingValues,
    content: @Composable ColumnScope.() -> Unit,
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(18.dp),
        colors = CardDefaults.cardColors(containerColor = Colors.White),
        elevation = CardDefaults.cardElevation(defaultElevation = 1.dp),
        border = BorderStroke(1.dp, Colors.Hairline),
    ) {
        Column(modifier = Modifier.padding(padding), content = content)
    }
}

@Composable
private fun InfoCard(
    padding: androidx.compose.ui.unit.Dp,
    content: @Composable ColumnScope.() -> Unit,
) = InfoCard(PaddingValues(padding), content)

@Composable
@Preview(showBackground = true, backgroundColor = 0xFFF5F6FA)
private fun PreviewSurveyInfoScreen() {
    QlarrTheme {
        SurveyInfoScreen(
            survey =
                getPreviewSurveyData().copy(
                    localUnsyncedResponsesCount = 5,
                    syncedResponseCount = 12,
                    totalResponseCount = 48,
                ),
            isSyncing = false,
            onSync = {},
            onViewAll = {},
        )
    }
}
