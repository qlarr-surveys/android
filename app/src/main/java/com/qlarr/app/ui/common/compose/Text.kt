package com.qlarr.app.ui.common.compose

import androidx.annotation.StringRes
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.withStyle

@Composable
fun boldValueString(@StringRes descriptionRes: Int, value: String) =
    buildAnnotatedString {
        append("${stringResource(descriptionRes)}: ")
        withStyle(
            SpanStyle(
                fontWeight = FontWeight.Bold
            )
        ) {
            append(value)
        }
    }

@Composable
fun boldDescriptionString(description: String, value: String) =
    buildAnnotatedString {
        withStyle(
            SpanStyle(
                fontWeight = FontWeight.Bold
            )
        ) {
            append("$description: ")
        }
        append(value)
    }