package com.qlarr.app.ui.common.theme

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.RowScope
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonColors
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarColors
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.qlarr.app.R

@Composable
fun BackButton(onBackPressed: () -> Unit) {
    IconButton(onClick = onBackPressed) {
        Icon(
            imageVector = Icons.AutoMirrored.Filled.ArrowBack,
            contentDescription = stringResource(id = R.string.back)
        )
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun QlarrTopBar(
    title: String,
    showBackButton: Boolean = true,
    onBackPressed: () -> Unit = {},
    actions: @Composable RowScope.() -> Unit = {}
) {
    TopAppBar(title = {
        Text(text = title)
    }, navigationIcon = {
        if (showBackButton) {
            BackButton(onBackPressed)
        }
    }, colors = TopAppBarColors(
        containerColor = Colors.Primary,
        scrolledContainerColor = Colors.Primary,
        navigationIconContentColor = Colors.White,
        titleContentColor = Colors.White,
        actionIconContentColor = Colors.White
    ),
        actions = actions
    )
}

@Composable
fun TopBarIconButton(@DrawableRes iconRes: Int, onClick: () -> Unit) {
    IconButton(onClick = onClick) {
        Icon(
            painterResource(id = iconRes),
            contentDescription = null
        )
    }
}

@Composable
fun PrimaryActionButton(
    modifier: Modifier = Modifier,
    @StringRes textRes: Int,
    enabled: Boolean = true,
    onClick: () -> Unit
) {
    Button(
        modifier = modifier,
        onClick = onClick,
        enabled = enabled
    ) {
        Text(
            text = stringResource(id = textRes),
            fontSize = 20.sp
        )
    }
}

@Composable
fun SecondaryActionButton(
    modifier: Modifier = Modifier,
    @StringRes textRes: Int,
    enabled: Boolean = true,
    onClick: () -> Unit
) {
    Button(
        modifier = modifier,
        onClick = onClick,
        enabled = enabled,
        colors = ButtonDefaults.buttonColors().copy(containerColor = Colors.LightBlue)
    ) {
        Text(
            text = stringResource(id = textRes),
            fontSize = 20.sp
        )
    }
}

@Composable
fun TertiaryActionButton(
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    @StringRes textRes: Int,
    onClick: () -> Unit
) {
    OutlinedButton(
        modifier = modifier,
        onClick = onClick,
        enabled = enabled,
        border = BorderStroke(1.dp, if (enabled) Colors.Primary else Colors.LightGray),
        colors = ButtonColors(Colors.White, Colors.Primary, Colors.White, Colors.LightGray)
    ) {
        Text(fontSize = 20.sp, text = stringResource(textRes))
    }
}

@Preview(showBackground = true)
@Composable
private fun PreviewQlarrTopBar() {
    QlarrTheme {
        QlarrTopBar(
            title = "Lalala", onBackPressed = {},
            actions = {
                TopBarIconButton(iconRes = R.drawable.baseline_logout_24) {}
            })
    }
}

@Preview(showBackground = true)
@Composable
private fun PreviewPrimaryActionButtonEnabled() {
    QlarrTheme {
        PrimaryActionButton(textRes = R.string.survey_item_button_download) {}
    }
}

@Preview(showBackground = true)
@Composable
private fun PreviewSecondaryActionButtonEnabled() {
    QlarrTheme {
        SecondaryActionButton(textRes = R.string.survey_item_button_responses) {}
    }
}

@Preview(showBackground = true)
@Composable
private fun PreviewSecondaryActionButtonDisabled() {
    QlarrTheme {
        SecondaryActionButton(enabled = false, textRes = R.string.survey_item_button_responses) {}
    }
}

@Preview(showBackground = true)
@Composable
private fun PreviewTertiaryActionButtonEnabled() {
    QlarrTheme {
        TertiaryActionButton(textRes = R.string.survey_item_button_get_missing_files) {}
    }
}

@Preview(showBackground = true)
@Composable
private fun PreviewTertiaryActionButtonDisabled() {
    QlarrTheme {
        TertiaryActionButton(
            enabled = false,
            textRes = R.string.survey_item_button_get_missing_files
        ) {}
    }
}
