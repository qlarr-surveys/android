package com.qlarr.app.ui.common.theme

import androidx.compose.ui.graphics.Color

object Colors {
    val LightBlue = Color(0xFF1E88E5)
    val BlueGray = Color(0xFF90CAF9)
    val Primary = Color(0xFF3f51b5)
    val Secondary = Color(0xFF5e35b1)
    val DarkGray = Color(0xFF393939)
    val LightGray = Color(0xFFDEDEDE)
    val LightGray2 = Color(0xFFFEF7FF)
    val White = Color(0xffffffff)
    val SurfaceVariant = Color(0xFFE3E1EC)

    val BrandNavy = Color(0xFF1B1E5C)
    val Ink = Color(0xFF1F1B3A)
    val Muted = Color(0xFF6B6783)

    // Survey-list redesign tokens (variation C)
    val Page = Color(0xFFF2EDF7)
    val Faint = Color(0xFF9A95AC)
    val Hairline = Color(0x17211C36) // rgba(33,28,54,0.09)

    // Sync status — synced (green) / pending (amber)
    val SyncOk = Color(0xFF1E7B45)
    val SyncOkBg = Color(0xFFE6F4EA)
    val SyncOkLine = Color(0x4D1E7B45) // rgba(30,123,69,0.30)
    val Warn = Color(0xFFA35A00)
    val WarnBg = Color(0xFFFBEBD6)
    val WarnLine = Color(0x52A35A00) // rgba(163,90,0,0.32)

    // Draft / incomplete response — slate (calm, not urgent)
    val Slate = Color(0xFF4A5170)
    val SlateBg = Color(0xFFECEEF5)
    val SlateLine = Color(0x424A5170) // rgba(74,81,112,0.26)

    // Quota
    val QuotaInk = Color(0xFF3949AB)
    val QuotaTrack = Color(0x1A211C36) // rgba(33,28,54,0.10)

    // Quota reached (hard gate) — Material error tone
    val Danger = Color(0xFFB3261E)
    val DangerBg = Color(0xFFFCEAE8)

    // Disabled action button
    val DisabledBg = Color(0x17211C36) // rgba(33,28,54,0.09)
    val DisabledInk = Faint

    // Responses (tonal) — derived from LightBlue
    val ResponsesTonalBg = Color(0x211E88E5) // rgba(30,136,229,0.13)
    val ResponsesTonalInk = Color(0xFF1565C0)
}
