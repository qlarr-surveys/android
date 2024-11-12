package com.qlarr.app.business.survey

import androidx.work.BackoffPolicy
import androidx.work.Constraints
import androidx.work.ExistingWorkPolicy
import androidx.work.NetworkType
import androidx.work.OneTimeWorkRequest
import androidx.work.OutOfQuotaPolicy
import androidx.work.WorkManager
import androidx.work.WorkRequest.Companion.MIN_BACKOFF_MILLIS
import java.time.Duration

interface BackgroundSync {

    fun startSurveySync()
}

class BackgroundSyncImpl(private val workManager: WorkManager) : BackgroundSync {

    override fun startSurveySync() {
        val constraints = Constraints.Builder()
            .setRequiredNetworkType(NetworkType.CONNECTED)
            .build()

        val workRequest = OneTimeWorkRequest.Builder(UploadSurveyWorker::class.java)
            .setExpedited(OutOfQuotaPolicy.RUN_AS_NON_EXPEDITED_WORK_REQUEST)
            .setBackoffCriteria(BackoffPolicy.LINEAR, Duration.ofMillis(MIN_BACKOFF_MILLIS))
            .setConstraints(constraints)
            .build()
        workManager.enqueueUniqueWork("upload_task", ExistingWorkPolicy.KEEP, workRequest)
    }
}

