package com.qlarr.app.ui.notification

import android.app.NotificationManager
import android.os.Build
import androidx.annotation.StringRes
import com.qlarr.app.R

enum class QlarrNotificationChannels(
    private val id: String,
    @StringRes
    val channelName: Int,
    @StringRes
    val descriptions: Int,
    val importance: Int = NotificationManager.IMPORTANCE_DEFAULT
) {
    Uploader(
        id = "uploader",
        channelName = R.string.notification_channel_uploader_name,
        descriptions = R.string.notification_channel_uploader_description
    );

    fun getChannelId(): String =
        id.takeIf { Build.VERSION.SDK_INT >= Build.VERSION_CODES.O }.orEmpty()
}