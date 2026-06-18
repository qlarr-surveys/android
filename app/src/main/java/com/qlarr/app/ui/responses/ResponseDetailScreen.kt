package com.qlarr.app.ui.responses

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
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
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.OpenInNew
import androidx.compose.material.icons.filled.CleaningServices
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.Mic
import androidx.compose.material.icons.filled.Place
import androidx.compose.material.icons.filled.Sync
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.Tab
import androidx.compose.material3.TabRow
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import coil.decode.VideoFrameDecoder
import coil.request.ImageRequest
import com.qlarr.app.R
import com.qlarr.app.ui.audioplayer.AudioPlayer
import com.qlarr.app.ui.common.theme.Colors

@Composable
fun ResponseDetailScreen(
    modifier: Modifier = Modifier,
    item: ResponseItemData,
    detail: ResponseDetailData,
    onSync: () -> Unit,
    onContinue: () -> Unit,
    onPlay: (audioPath: String) -> Unit,
    onPause: (audioPath: String) -> Unit,
    onSeek: (audioPath: String, position: Long) -> Unit,
    onFileClicked: (ResponseValueData.FileValueData) -> Unit,
    onMapClicked: (ResponseEventData.LocationData) -> Unit,
) {
    var activeTab by remember { mutableIntStateOf(0) }

    LazyColumn(
        modifier = modifier.fillMaxSize().background(Colors.Page),
        contentPadding =
            androidx.compose.foundation.layout
                .PaddingValues(bottom = 24.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        item(key = "banner") { StatusBanner(item, onSync, onContinue) }
        item(key = "meta") { MetaBlock(item, detail.disqualified) }

        if (item.status == ResponseStatus.UPLOADED) {
            item(key = "freed") { FreedSpaceBanner() }
        }
        if (item.audios > 0) {
            item(key = "recordings") { RecordingsSection(item, onPlay, onPause, onSeek) }
        }
        if (item.locations > 0) {
            item(key = "locations") { LocationsSection(item, onMapClicked) }
        }

        item(key = "tabs") {
            DetailTabs(active = activeTab, onSelect = { activeTab = it })
        }

        if (activeTab == 0) {
            if (detail.answerPages.all { it.rows.isEmpty() }) {
                item(key = "answers-empty") { EmptyPanel(R.string.response_no_answers) }
            } else {
                detail.answerPages.forEach { page ->
                    if (page.rows.isNotEmpty()) {
                        item(key = "page-${page.title}") {
                            AnswerPageCard(page, onFileClicked)
                        }
                    }
                }
            }
        } else {
            if (detail.timeline.isEmpty()) {
                item(key = "events-empty") { EmptyPanel(R.string.response_no_events) }
            } else {
                item(key = "timeline") { TimelineCard(detail.timeline) }
            }
        }
    }
}

@Composable
private fun StatusBanner(
    item: ResponseItemData,
    onSync: () -> Unit,
    onContinue: () -> Unit,
) {
    val tokens = item.status.tokens
    val subLine =
        when (item.status) {
            ResponseStatus.PENDING -> {
                stringResource(R.string.response_banner_pending_sub)
            }

            ResponseStatus.UPLOADED -> {
                stringResource(R.string.response_banner_uploaded_sub)
            }

            ResponseStatus.DRAFT -> {
                item.draftProgress?.let { stringResource(R.string.response_draft_progress, it) }
            }
        }
    Row(
        modifier =
            Modifier
                .fillMaxWidth()
                .background(tokens.bg)
                .padding(horizontal = 16.dp, vertical = 14.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        Box(
            modifier =
                Modifier
                    .size(36.dp)
                    .clip(RoundedCornerShape(18.dp))
                    .background(Colors.White),
            contentAlignment = Alignment.Center,
        ) {
            Icon(
                tokens.icon,
                contentDescription = null,
                tint = tokens.ink,
                modifier = Modifier.size(20.dp),
            )
        }
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = stringResource(tokens.labelRes),
                fontSize = 13.5.sp,
                fontWeight = FontWeight.Bold,
                color = tokens.ink,
            )
            subLine?.let {
                Text(text = it, fontSize = 12.sp, color = Colors.Muted)
            }
        }
        when (item.status) {
            ResponseStatus.PENDING -> {
                BannerAction(
                    stringResource(R.string.responses_sync_all),
                    Icons.Filled.Sync,
                    tokens.ink,
                    onSync,
                )
            }

            ResponseStatus.DRAFT -> {
                BannerAction(
                    stringResource(R.string.response_action_continue),
                    Icons.Filled.Edit,
                    Colors.Slate,
                    onContinue,
                )
            }

            ResponseStatus.UPLOADED -> {
                Unit
            }
        }
    }
}

@Composable
private fun BannerAction(
    text: String,
    icon: ImageVector,
    color: Color,
    onClick: () -> Unit,
) {
    Button(
        onClick = onClick,
        modifier = Modifier.height(34.dp),
        shape = RoundedCornerShape(17.dp),
        colors = ButtonDefaults.buttonColors(containerColor = color, contentColor = Colors.White),
        contentPadding =
            androidx.compose.foundation.layout
                .PaddingValues(horizontal = 14.dp),
    ) {
        Icon(icon, contentDescription = null, modifier = Modifier.size(15.dp))
        Spacer(Modifier.width(6.dp))
        Text(text = text, fontSize = 13.sp, fontWeight = FontWeight.SemiBold)
    }
}

@Composable
private fun MetaBlock(
    item: ResponseItemData,
    disqualified: Boolean,
) {
    Column(modifier = Modifier.padding(horizontal = 16.dp)) {
        MetaRow(
            stringResource(R.string.response_meta_status),
            stringResource(item.status.tokens.labelRes),
        )
        MetaRow(stringResource(R.string.response_meta_started), item.startDateString)
        MetaRow(
            stringResource(R.string.response_meta_submitted),
            item.submitDateString ?: stringResource(R.string.response_meta_not_submitted),
        )
        MetaRow(stringResource(R.string.response_meta_language), item.lang)
        MetaRow(
            stringResource(R.string.response_meta_disqualified),
            stringResource(if (disqualified) R.string.response_yes else R.string.response_no),
        )
        MetaRow(
            stringResource(R.string.response_meta_response_id),
            item.id,
            mono = true,
            lastRow = true,
        )
    }
}

@Composable
private fun MetaRow(
    label: String,
    value: String,
    mono: Boolean = false,
    lastRow: Boolean = false,
) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(vertical = 10.dp),
        verticalAlignment = Alignment.Top,
    ) {
        Text(
            text = label,
            fontSize = 12.5.sp,
            color = Colors.Muted,
            modifier = Modifier.width(92.dp),
        )
        Spacer(Modifier.width(12.dp))
        Text(
            text = value,
            modifier = Modifier.weight(1f),
            fontSize = if (mono) 11.sp else 13.sp,
            fontWeight = if (mono) FontWeight.Normal else FontWeight.SemiBold,
            color = if (mono) Colors.Faint else Colors.Ink,
            fontFamily = if (mono) FontFamily.Monospace else FontFamily.Default,
            textAlign = TextAlign.End,
        )
    }
    if (!lastRow) {
        Box(modifier = Modifier.fillMaxWidth().height(1.dp).background(Colors.Hairline))
    }
}

@Composable
private fun FreedSpaceBanner() {
    Row(
        modifier =
            Modifier
                .padding(horizontal = 16.dp)
                .fillMaxWidth()
                .clip(RoundedCornerShape(12.dp))
                .background(Colors.SyncOkBg)
                .border(BorderStroke(1.dp, Colors.SyncOkLine), RoundedCornerShape(12.dp))
                .padding(horizontal = 14.dp, vertical = 12.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(10.dp),
    ) {
        Icon(
            Icons.Filled.CleaningServices,
            contentDescription = null,
            tint = Colors.SyncOk,
            modifier = Modifier.size(18.dp),
        )
        Text(
            text = stringResource(R.string.response_freed_banner),
            fontSize = 12.5.sp,
            fontWeight = FontWeight.SemiBold,
            color = Colors.SyncOk,
        )
    }
}

@Composable
private fun RecordingsSection(
    item: ResponseItemData,
    onPlay: (String) -> Unit,
    onPause: (String) -> Unit,
    onSeek: (String, Long) -> Unit,
) {
    val recordings = item.events.filterIsInstance<ResponseEventData.AudioRecordingData>()
    SectionHeader(stringResource(R.string.response_section_recordings), item.audios)
    Column(
        modifier = Modifier.padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(10.dp),
    ) {
        if (item.status == ResponseStatus.UPLOADED || recordings.isEmpty()) {
            repeat(item.audios) { index ->
                RecordingCard(index + 1) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Icon(
                            Icons.Filled.CleaningServices,
                            contentDescription = null,
                            tint = Colors.SyncOk,
                            modifier = Modifier.size(14.dp),
                        )
                        Spacer(Modifier.width(6.dp))
                        Text(
                            stringResource(R.string.response_audio_cleared),
                            fontSize = 12.sp,
                            fontWeight = FontWeight.SemiBold,
                            color = Colors.SyncOk,
                        )
                    }
                }
            }
        } else {
            recordings.forEachIndexed { index, rec ->
                RecordingCard(index + 1) {
                    AudioPlayer(
                        isPlaying = rec.isPlaying,
                        totalAudioDuration = rec.audioDuration,
                        currentTime = rec.currentTime,
                        sliderPositionChanged = { onSeek(rec.audioPath, it) },
                        onPlayClicked = { onPlay(rec.audioPath) },
                        onPauseClicked = { onPause(rec.audioPath) },
                    )
                }
            }
        }
    }
}

@Composable
private fun RecordingCard(
    number: Int,
    body: @Composable () -> Unit,
) {
    Column(
        modifier =
            Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(12.dp))
                .background(Colors.White)
                .border(BorderStroke(1.dp, Colors.Hairline), RoundedCornerShape(12.dp))
                .padding(12.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            Icon(
                Icons.Filled.Mic,
                contentDescription = null,
                tint = Colors.Muted,
                modifier = Modifier.size(16.dp),
            )
            Text(
                stringResource(R.string.response_recording_n, number),
                fontSize = 13.sp,
                fontWeight = FontWeight.SemiBold,
                color = Colors.Ink,
            )
        }
        body()
    }
}

@Composable
private fun LocationsSection(
    item: ResponseItemData,
    onMapClicked: (ResponseEventData.LocationData) -> Unit,
) {
    val locations = item.events.filterIsInstance<ResponseEventData.LocationData>()
    SectionHeader(stringResource(R.string.response_section_locations), item.locations)
    Column(
        modifier = Modifier.padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(10.dp),
    ) {
        locations.forEachIndexed { index, loc ->
            Row(
                modifier =
                    Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(12.dp))
                        .background(Colors.White)
                        .border(BorderStroke(1.dp, Colors.Hairline), RoundedCornerShape(12.dp))
                        .clickable { onMapClicked(loc) }
                        .padding(12.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(12.dp),
            ) {
                Box(
                    modifier =
                        Modifier
                            .size(40.dp)
                            .clip(RoundedCornerShape(10.dp))
                            .background(Colors.ResponsesTonalBg),
                    contentAlignment = Alignment.Center,
                ) {
                    Icon(
                        Icons.Filled.Place,
                        contentDescription = null,
                        tint = Colors.ResponsesTonalInk,
                        modifier = Modifier.size(20.dp),
                    )
                }
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        "${stringResource(R.string.response_section_locations)} ${index + 1}",
                        fontSize = 13.sp,
                        fontWeight = FontWeight.SemiBold,
                        color = Colors.Ink,
                    )
                    Text(
                        text = "${loc.latitude}, ${loc.longitude}",
                        fontSize = 11.5.sp,
                        fontFamily = FontFamily.Monospace,
                        color = Colors.Faint,
                    )
                }
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text(
                        stringResource(R.string.response_open_map),
                        fontSize = 12.5.sp,
                        fontWeight = FontWeight.SemiBold,
                        color = Colors.LightBlue,
                    )
                    Spacer(Modifier.width(4.dp))
                    Icon(
                        Icons.AutoMirrored.Filled.OpenInNew,
                        contentDescription = null,
                        tint = Colors.LightBlue,
                        modifier = Modifier.size(14.dp),
                    )
                }
            }
        }
    }
}

@Composable
private fun SectionHeader(
    title: String,
    count: Int,
) {
    Row(
        modifier = Modifier.padding(start = 16.dp, end = 16.dp, top = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Text(
            text = title.uppercase(),
            fontSize = 11.5.sp,
            fontWeight = FontWeight.Bold,
            color = Colors.Muted,
            letterSpacing = 0.8.sp,
        )
        Box(
            modifier =
                Modifier
                    .clip(RoundedCornerShape(10.dp))
                    .background(Colors.SurfaceVariant)
                    .padding(horizontal = 7.dp, vertical = 1.dp),
        ) {
            Text(
                count.toString(),
                fontSize = 11.sp,
                fontWeight = FontWeight.Bold,
                color = Colors.Muted,
            )
        }
    }
}

@Composable
private fun DetailTabs(
    active: Int,
    onSelect: (Int) -> Unit,
) {
    TabRow(
        selectedTabIndex = active,
        containerColor = Colors.Page,
        contentColor = Colors.Primary,
    ) {
        Tab(
            selected = active == 0,
            onClick = { onSelect(0) },
            selectedContentColor = Colors.Primary,
            unselectedContentColor = Colors.Muted,
        ) {
            Text(
                stringResource(R.string.response_tab_answers),
                fontSize = 13.5.sp,
                fontWeight = FontWeight.SemiBold,
                modifier = Modifier.padding(vertical = 12.dp),
            )
        }
        Tab(
            selected = active == 1,
            onClick = { onSelect(1) },
            selectedContentColor = Colors.Primary,
            unselectedContentColor = Colors.Muted,
        ) {
            Text(
                stringResource(R.string.response_tab_events),
                fontSize = 13.5.sp,
                fontWeight = FontWeight.SemiBold,
                modifier = Modifier.padding(vertical = 12.dp),
            )
        }
    }
}

@Composable
private fun AnswerPageCard(
    page: AnswerPage,
    onFileClicked: (ResponseValueData.FileValueData) -> Unit,
) {
    Column(
        modifier =
            Modifier
                .padding(horizontal = 16.dp)
                .fillMaxWidth()
                .clip(RoundedCornerShape(12.dp))
                .background(Colors.White)
                .border(BorderStroke(1.dp, Colors.Hairline), RoundedCornerShape(12.dp)),
    ) {
        Text(
            text = page.title,
            modifier =
                Modifier
                    .fillMaxWidth()
                    .background(Colors.Secondary.copy(alpha = 0.08f))
                    .padding(horizontal = 12.dp, vertical = 8.dp),
            fontSize = 12.5.sp,
            fontWeight = FontWeight.Bold,
            color = Colors.Secondary,
        )
        page.rows.forEachIndexed { index, row ->
            AnswerRowView(row, onFileClicked)
            if (index < page.rows.lastIndex) {
                Box(modifier = Modifier.fillMaxWidth().height(1.dp).background(Colors.Hairline))
            }
        }
    }
}

@Composable
private fun AnswerRowView(
    row: AnswerRow,
    onFileClicked: (ResponseValueData.FileValueData) -> Unit,
) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(horizontal = 12.dp, vertical = 10.dp),
        horizontalArrangement = Arrangement.spacedBy(12.dp),
        verticalAlignment = Alignment.Top,
    ) {
        Text(
            text = row.question,
            modifier = Modifier.weight(1f),
            fontSize = 12.5.sp,
            color = Colors.Muted,
        )
        Box(modifier = Modifier.weight(1f), contentAlignment = Alignment.TopEnd) {
            when (val answer = row.answer) {
                is AnswerValue.Text -> {
                    Text(
                        answer.value,
                        fontSize = 13.sp,
                        fontWeight = FontWeight.Bold,
                        color = Colors.Ink,
                        textAlign = TextAlign.End,
                    )
                }

                is AnswerValue.NotAnswered -> {
                    Text(
                        stringResource(R.string.response_not_answered),
                        fontSize = 12.5.sp,
                        fontStyle = FontStyle.Italic,
                        color = Colors.Faint,
                        textAlign = TextAlign.End,
                    )
                }

                is AnswerValue.Cleared -> {
                    Column(horizontalAlignment = Alignment.End) {
                        Text(
                            answer.filename,
                            fontSize = 12.5.sp,
                            color = Colors.Muted,
                            textAlign = TextAlign.End,
                        )
                        Text(
                            stringResource(R.string.response_answer_cleared),
                            fontSize = 11.5.sp,
                            fontWeight = FontWeight.SemiBold,
                            color = Colors.SyncOk,
                        )
                    }
                }

                is AnswerValue.File -> {
                    Column(
                        horizontalAlignment = Alignment.End,
                        modifier = Modifier.clickable { onFileClicked(answer.data) },
                    ) {
                        Text(
                            answer.data.filename,
                            fontSize = 12.5.sp,
                            fontWeight = FontWeight.SemiBold,
                            color = Colors.LightBlue,
                            textAlign = TextAlign.End,
                        )
                        Spacer(Modifier.height(6.dp))
                        AsyncImage(
                            model =
                                if (answer.data.fileType.contains("video")) {
                                    ImageRequest
                                        .Builder(LocalContext.current)
                                        .data(answer.data.file)
                                        .decoderFactory { result, options, _ ->
                                            VideoFrameDecoder(
                                                result.source,
                                                options,
                                            )
                                        }.build()
                                } else {
                                    answer.data.file
                                },
                            contentDescription = answer.data.filename,
                            modifier =
                                Modifier
                                    .size(50.dp)
                                    .clip(RoundedCornerShape(10.dp))
                                    .background(Colors.SurfaceVariant),
                        )
                    }
                }
            }
        }
    }
}

@Composable
private fun TimelineCard(entries: List<TimelineEntry>) {
    Column(
        modifier =
            Modifier
                .padding(horizontal = 16.dp)
                .fillMaxWidth()
                .clip(RoundedCornerShape(12.dp))
                .background(Colors.White)
                .border(BorderStroke(1.dp, Colors.Hairline), RoundedCornerShape(12.dp))
                .padding(vertical = 4.dp),
    ) {
        entries.forEachIndexed { index, entry ->
            Row(
                modifier = Modifier.fillMaxWidth().padding(horizontal = 12.dp, vertical = 10.dp),
                horizontalArrangement = Arrangement.spacedBy(12.dp),
                verticalAlignment = Alignment.Top,
            ) {
                Column(modifier = Modifier.width(70.dp)) {
                    Text(
                        entry.timeLabel,
                        fontSize = 11.sp,
                        fontFamily = FontFamily.Monospace,
                        color = Colors.Faint,
                    )
                    entry.delta?.let {
                        Text(
                            it,
                            fontSize = 11.sp,
                            fontWeight = FontWeight.SemiBold,
                            color = Colors.Primary,
                        )
                    }
                }
                Column(modifier = Modifier.weight(1f)) {
                    when (entry) {
                        is TimelineEntry.Nav -> {
                            Row(
                                verticalAlignment = Alignment.CenterVertically,
                                horizontalArrangement = Arrangement.spacedBy(8.dp),
                            ) {
                                Text(
                                    "${entry.from} → ${entry.to}",
                                    fontSize = 13.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = Colors.Ink,
                                )
                                Box(
                                    modifier =
                                        Modifier
                                            .clip(RoundedCornerShape(8.dp))
                                            .background(Colors.SurfaceVariant)
                                            .padding(horizontal = 6.dp, vertical = 1.dp),
                                ) {
                                    Text(
                                        entry.tag,
                                        fontSize = 10.sp,
                                        fontWeight = FontWeight.Bold,
                                        color = Colors.Muted,
                                    )
                                }
                            }
                        }

                        is TimelineEntry.Answer -> {
                            Text(entry.question, fontSize = 12.5.sp, color = Colors.Muted)
                            Text(
                                entry.value,
                                fontSize = 13.sp,
                                fontWeight = FontWeight.SemiBold,
                                color = Colors.Ink,
                            )
                        }
                    }
                }
            }
            if (index < entries.lastIndex) {
                Box(modifier = Modifier.fillMaxWidth().height(1.dp).background(Colors.Hairline))
            }
        }
    }
}

@Composable
private fun EmptyPanel(textRes: Int) {
    Text(
        text = stringResource(textRes),
        modifier = Modifier.fillMaxWidth().padding(vertical = 32.dp),
        textAlign = TextAlign.Center,
        color = Colors.Muted,
        fontSize = 13.5.sp,
    )
}
