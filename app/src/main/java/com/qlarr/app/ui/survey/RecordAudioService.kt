package com.qlarr.app.ui.survey


import android.app.Service
import android.content.Context
import android.content.Intent
import android.media.MediaRecorder
import android.os.Build
import android.os.IBinder
import android.os.Parcelable
import android.util.Log
import androidx.core.app.ServiceCompat
import androidx.core.content.ContextCompat
import com.qlarr.app.api.survey.ResponseEvent
import com.qlarr.app.business.parcelable
import com.qlarr.app.business.responses.ResponseRepository
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.ui.common.FileUtils
import com.qlarr.app.ui.notification.QlarrNotificationManager
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch
import org.koin.android.ext.android.inject
import java.io.IOException
import java.time.LocalDateTime
import java.time.ZoneOffset
import java.util.UUID


class AudioRecordingService : Service() {

    private val qlarrNotificationManager by inject<QlarrNotificationManager>()

    private var mediaRecorder: MediaRecorder? = null

    private val responseRepository: ResponseRepository by inject()

    private val serviceScope = CoroutineScope(SupervisorJob() + Dispatchers.IO)

    private var status: Status = Status.INITIAL

    override fun onBind(intent: Intent?): IBinder? {
        return null
    }

    override fun onStartCommand(intent: Intent, flags: Int, startId: Int): Int {
        when (intent.action) {
            START_FOREGROUND_ACTION -> {
                Log.d(TAG, "Received Start Foreground Intent status = ${status.name}")
                when (status) {
                    Status.INITIAL -> {
                        val survey = intent.parcelable<SurveyData>(EXTRA_SURVEY)
                            ?: throw IllegalArgumentException("Survey is required")
                        val responseId = intent.getStringExtra(EXTRA_RESPONSE_ID)
                            ?: throw IllegalArgumentException("responseId is required")
                        startRecording(survey.id, responseId)
                    }

                    Status.PAUSED -> {
                        resumeRecording()
                    }

                    Status.RECORDING -> {}
                }
            }

            RESUME_FOREGROUND_ACTION -> {
                Log.d(TAG, "Received Start Foreground Intent status = ${status.name}")
                when (status) {
                    Status.PAUSED -> {
                        resumeRecording()
                    }

                    Status.RECORDING -> {}

                    else -> {
                        stopService(startId)
                    }
                }
            }

            STOP_FOREGROUND_ACTION -> {
                Log.d(TAG, "Received Stop Foreground Intent status = ${status.name}")
                stopService(startId)
            }

            PAUSE_FOREGROUND_ACTION -> {
                Log.d(TAG, "Received Pause Foreground Intent status = ${status.name}")
                when (status) {
                    Status.RECORDING -> {
                        pauseRecording()
                    }

                    else -> {
                        stopService(startId)
                    }
                }
            }
        }
        return START_STICKY
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.d(TAG, "onDestroy")
        try {
            mediaRecorder?.stop()
        } catch (e: IllegalStateException) {
            Log.w(TAG, "MediaRecorder stop failed", e)
        }
        mediaRecorder?.reset()
        mediaRecorder?.release()
        serviceScope.cancel()
    }

    private fun startForegroundService() {
        startForeground(1, qlarrNotificationManager.createAudioRecordingNotification())
    }

    private fun startRecording(surveyId: String, responseId: String) {
        startForegroundService()
        val uuid = UUID.randomUUID()
        val file = FileUtils.getResponseFile(
            context = this@AudioRecordingService,
            fileName = uuid.toString(),
            surveyId = surveyId,
            responseId = responseId
        )
        val event = ResponseEvent.VoiceRecording(
            uuid.toString(), LocalDateTime.now(ZoneOffset.UTC)
        )
        serviceScope.launch {
            responseRepository.addEvent(responseId, event)
        }
        @Suppress("DEPRECATION")
        mediaRecorder = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S)
            MediaRecorder(this)
        else
            MediaRecorder()
        mediaRecorder?.apply {
            setAudioSource(MediaRecorder.AudioSource.MIC)
            setOutputFormat(MediaRecorder.OutputFormat.MPEG_4)
            setOutputFile(file.absolutePath)
            setAudioEncoder(MediaRecorder.AudioEncoder.AAC)
            setAudioSamplingRate(44100) // You can set the desired audio sampling rate (optional)
            setAudioChannels(1) // Set the number of audio channels (optional, 1 for mono)
            setAudioEncodingBitRate(64000) // Set the audio bit rate (optional)
            try {
                prepare()
            } catch (e: IOException) {
                Log.e(TAG, "prepare() failed")
            }
            start()
            status = Status.RECORDING
        }
    }

    private fun resumeRecording() {
        startForegroundService()
        mediaRecorder?.resume()
        status = Status.RECORDING
    }

    private fun pauseRecording() {
        mediaRecorder?.pause()
        ServiceCompat.stopForeground(this, ServiceCompat.STOP_FOREGROUND_REMOVE)
        status = Status.PAUSED
    }

    private fun stopService(startId: Int) {
        ServiceCompat.stopForeground(this, ServiceCompat.STOP_FOREGROUND_REMOVE)
        stopSelfResult(startId)
    }

    companion object {
        private const val START_FOREGROUND_ACTION = "start_foreground_action"
        private const val STOP_FOREGROUND_ACTION = "stop_foreground_action"
        private const val PAUSE_FOREGROUND_ACTION = "pause_foreground_action"
        private const val RESUME_FOREGROUND_ACTION = "resume_foreground_action"
        private const val TAG = "AudioRecordingService"
        private const val EXTRA_SURVEY = "survey"
        private const val EXTRA_RESPONSE_ID = "response_id"
        fun start(context: Context, survey: SurveyData, responseId: String) {
            val intent = Intent(context, AudioRecordingService::class.java)
            intent.putExtra(EXTRA_SURVEY, survey as Parcelable)
            intent.putExtra(EXTRA_RESPONSE_ID, responseId)
            intent.action = START_FOREGROUND_ACTION
            ContextCompat.startForegroundService(context, intent)
        }

        /** will cause crash if there is no permission as it also calls startForegroundService */
        fun stop(context: Context) {
            startWithAction(context, STOP_FOREGROUND_ACTION)
        }

        fun pause(context: Context) {
            startWithAction(context, PAUSE_FOREGROUND_ACTION)
        }

        fun resume(context: Context) {
            startWithAction(context, RESUME_FOREGROUND_ACTION)
        }

        private fun startWithAction(context: Context, action: String) {
            val intent = Intent(context, AudioRecordingService::class.java)
            intent.action = action
            ContextCompat.startForegroundService(context, intent)
        }
    }

    private enum class Status {
        INITIAL, RECORDING, PAUSED
    }
}


