package com.qlarr.app.ui.responses

import androidx.annotation.StringRes
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CloudDone
import androidx.compose.material.icons.filled.CloudUpload
import androidx.compose.material.icons.filled.Edit
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import com.qlarr.app.R
import com.qlarr.app.ui.common.theme.Colors

enum class ResponseStatus { DRAFT, PENDING, UPLOADED }

fun responseStatus(
    isComplete: Boolean,
    isSynced: Boolean,
): ResponseStatus =
    when {
        !isComplete -> ResponseStatus.DRAFT
        isSynced -> ResponseStatus.UPLOADED
        else -> ResponseStatus.PENDING
    }

data class ResponseStatusTokens(
    val ink: Color,
    val bg: Color,
    val line: Color,
    val rail: Color,
    val icon: ImageVector,
    @StringRes val labelRes: Int,
)

val ResponseStatus.tokens: ResponseStatusTokens
    get() =
        when (this) {
            ResponseStatus.DRAFT -> {
                ResponseStatusTokens(
                    ink = Colors.Slate,
                    bg = Colors.SlateBg,
                    line = Colors.SlateLine,
                    rail = Colors.Slate,
                    icon = Icons.Filled.Edit,
                    labelRes = R.string.response_status_draft,
                )
            }

            ResponseStatus.PENDING -> {
                ResponseStatusTokens(
                    ink = Colors.Warn,
                    bg = Colors.WarnBg,
                    line = Colors.WarnLine,
                    rail = Colors.Warn,
                    icon = Icons.Filled.CloudUpload,
                    labelRes = R.string.response_status_pending,
                )
            }

            ResponseStatus.UPLOADED -> {
                ResponseStatusTokens(
                    ink = Colors.SyncOk,
                    bg = Colors.SyncOkBg,
                    line = Colors.SyncOkLine,
                    rail = Colors.SyncOk,
                    icon = Icons.Filled.CloudDone,
                    labelRes = R.string.response_status_uploaded,
                )
            }
        }
