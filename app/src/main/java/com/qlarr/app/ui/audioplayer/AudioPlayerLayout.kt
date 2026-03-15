package com.qlarr.app.ui.audioplayer

import androidx.annotation.DrawableRes
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Slider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableLongStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.qlarr.app.R
import com.qlarr.app.ui.common.theme.QlarrTheme
import kotlin.math.roundToLong


@Composable
fun AudioPlayer(
    modifier: Modifier = Modifier,
    isPlaying: Boolean = false,
    totalAudioDuration: Long = 0,
    currentTime: Long = 0,
    sliderPositionChanged: (Long) -> Unit,
    onPlayClicked: () -> Unit = {},
    onPauseClicked: () -> Unit = {}
) {
    Column(
        modifier = modifier
    ) {

        var sliderPosition by remember(currentTime) {
            mutableLongStateOf(currentTime)
        }

        TrackSlider(
            currentValue = sliderPosition.toFloat(),
            onValueChange = { newPosition ->
                sliderPosition = newPosition.roundToLong()
            },
            onValueChangeFinished = {
                sliderPositionChanged(sliderPosition)
            },
            audioDuration = totalAudioDuration.toFloat()
        )
        Box(
            modifier = Modifier.fillMaxWidth(),
        ) {
            if (isPlaying) {
                PauseButton(modifier = Modifier.align(Alignment.Center), onClick = onPauseClicked)
            } else {
                PlayButton(modifier = Modifier.align(Alignment.Center), onClick = onPlayClicked)
            }

            Text(
                text = "${sliderPosition.toDurationText()} / ${totalAudioDuration.toDurationText()}",
                modifier = Modifier
                    .padding(end = 8.dp)
                    .align(Alignment.TopEnd),
                style = TextStyle(fontWeight = FontWeight.Bold)
            )
        }
    }
}


@Composable
fun PlayButton(
    modifier: Modifier = Modifier,
    onClick: () -> Unit
) {
    ControlButton(
        modifier = modifier,
        iconRes = R.drawable.ic_play,
        onClick = onClick
    )
}

@Composable
fun PauseButton(
    modifier: Modifier = Modifier,
    onClick: () -> Unit
) {
    ControlButton(
        modifier = modifier,
        iconRes = R.drawable.ic_pause,
        onClick = onClick
    )
}

@Composable
fun ControlButton(
    modifier: Modifier = Modifier,
    @DrawableRes iconRes: Int,
    onClick: () -> Unit
) {
    IconButton(
        modifier = modifier,
        onClick = onClick
    ) {
        Icon(
            modifier = Modifier.size(48.dp),
            painter = painterResource(id = iconRes),
            contentDescription = null
        )
    }
}

@Composable
fun TrackSlider(
    currentValue: Float,
    onValueChange: (newValue: Float) -> Unit,
    onValueChangeFinished: () -> Unit,
    audioDuration: Float
) {
    Slider(
        value = currentValue,
        onValueChange = {
            onValueChange(it)
        },
        onValueChangeFinished = {
            onValueChangeFinished()
        },
        valueRange = 0f..audioDuration,
    )
}

@Composable
@Preview(showBackground = true)
private fun PreviewAudioPlayer() {
    QlarrTheme {
        AudioPlayer(Modifier,
            isPlaying = true,
            totalAudioDuration = 115000,
            currentTime = 4000, {}, {}, {})
    }
}

@Preview(showBackground = true)
@Composable
private fun PreviewSlider() {
    QlarrTheme {
        TrackSlider(
            currentValue = 30000f,
            onValueChange = {},
            onValueChangeFinished = { },
            audioDuration = 115000f
        )
    }
}

@Composable
@Preview(showBackground = true)
private fun PreviewPlayButton() {
    QlarrTheme {
        PlayButton(onClick = {})
    }
}

private fun Long.toDurationText(): String {
    val sec = this / 1000
    val minutes = sec / 60
    val seconds = sec % 60

    val minutesString = if (minutes < 10) {
        "0$minutes"
    } else {
        minutes.toString()
    }
    val secondsString = if (seconds < 10) {
        "0$seconds"
    } else {
        seconds.toString()
    }
    return "$minutesString:$secondsString"
}
