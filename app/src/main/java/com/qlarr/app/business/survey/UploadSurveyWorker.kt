package com.qlarr.app.business.survey

import android.content.Context
import androidx.work.CoroutineWorker
import androidx.work.ForegroundInfo
import androidx.work.WorkerParameters
import com.qlarr.app.ui.notification.QlarrNotificationManager
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class UploadSurveyWorker(
    context: Context,
    params: WorkerParameters,
) : CoroutineWorker(context, params), KoinComponent {

    private val uploadSurveyResponsesUseCase: UploadSurveyResponsesUseCase by inject()
    private val notificationManager: QlarrNotificationManager by inject()

    override suspend fun doWork(): Result = withContext(Dispatchers.IO) {
        uploadSurveyResponsesUseCase()
        Result.success()
    }

    override suspend fun getForegroundInfo(): ForegroundInfo {
        return ForegroundInfo(
            1, notificationManager.createUploadInProgressNotification()
        )
    }
}
