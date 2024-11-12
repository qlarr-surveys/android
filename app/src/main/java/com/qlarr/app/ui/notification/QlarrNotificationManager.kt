package com.qlarr.app.ui.notification

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import androidx.core.app.NotificationCompat
import com.qlarr.app.R

interface QlarrNotificationManager {
    fun createUploadInProgressNotification(): Notification
}

class QlarrNotificationManagerImpl(
    private val context: Context,
    private val notificationManager: NotificationManager
) : QlarrNotificationManager {
    init {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            QlarrNotificationChannels.entries.forEach { item ->
                NotificationChannel(
                    item.getChannelId(),
                    context.getString(item.channelName),
                    item.importance
                ).let { channel ->
                    channel.description = context.getString(item.descriptions)
                    notificationManager.createNotificationChannel(channel)
                }
            }
        }
    }

    override fun createUploadInProgressNotification(): Notification =
        NotificationCompat.Builder(context, QlarrNotificationChannels.Uploader.getChannelId())
            .setCategory(NotificationCompat.CATEGORY_PROGRESS)
            .setContentTitle(context.getString(R.string.notification_uploader_title))
            .setContentText(context.getString(R.string.notification_uploader_description))
            .setSmallIcon(R.mipmap.ic_launcher_round)
            .setAutoCancel(true)
            .build()
}