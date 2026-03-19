package com.qlarr.app.ui.responses

import android.app.Application
import android.content.Context
import android.os.Handler
import android.os.Looper
import android.util.Log
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import androidx.media3.common.MediaItem
import androidx.media3.common.PlaybackException
import androidx.media3.common.Player
import androidx.media3.exoplayer.ExoPlayer
import com.qlarr.app.AppEvent
import com.qlarr.app.EventBus
import com.qlarr.app.api.survey.ResponseEvent
import com.qlarr.app.business.responses.ResponseRepository
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.business.survey.SurveyRepository
import com.qlarr.app.db.model.Response
import com.qlarr.app.ui.common.FileUtils
import com.qlarr.app.ui.common.error.ErrorProcessor
import com.qlarr.app.ui.common.replaceFirstIf
import com.qlarr.app.ui.common.toFormattedString
import com.qlarr.app.ui.survey.EMNavProcessor
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.io.File

class ResponsesViewModel(
    application: Application,
    private val responsesRepository: ResponseRepository,
    private val eventBus: EventBus,
    private val errorProcessor: ErrorProcessor,
    private val surveyRepository: SurveyRepository,
) : AndroidViewModel(application),
    ErrorProcessor by errorProcessor {
    private lateinit var surveyData: SurveyData
    private val _responsesScreenData = MutableStateFlow(ResponsesScreenState())
    val responsesScreenData = _responsesScreenData.asStateFlow()
    lateinit var emNavProcessor: EMNavProcessor
    private var currentPage: Int = 0
    private val timingHandler = Handler(Looper.getMainLooper())

    private val exoPlayer by lazy {
        ExoPlayer.Builder(application).build().also { player ->
            player.addListener(object : Player.Listener {
                override fun onPlaybackStateChanged(playbackState: Int) {
                    if (playbackState == Player.STATE_ENDED) {
                        stopCurrentMedia()
                    }
                }

                override fun onPlayerError(error: PlaybackException) {
                    stopCurrentMedia()
                }

                private fun stopCurrentMedia() {
                    timingHandler.removeCallbacksAndMessages(null)
                    currentPlayingMedia?.let { media ->
                        _responsesScreenData.updatePlayingAudio(
                            responseId = media.responseId,
                            audioPath = media.path,
                            isPlaying = false,
                            time = 0
                        )
                    }
                    currentPlayingMedia = null
                }
            })
        }
    }

    private var currentPlayingMedia: CurrentPlayingMedia? = null

    data class CurrentPlayingMedia(val path: String = "", val responseId: String = "")

    fun init(surveyData: SurveyData) {
        this.surveyData = surveyData
        viewModelScope.launch(Dispatchers.IO) {
            eventBus.events.collect { event ->
                when {
                    event is AppEvent.UploadedSurveyResponse && event.survey.id == surveyData.id -> {
                        this@ResponsesViewModel.surveyData = event.survey
                        refresh()
                    }

                    event is AppEvent.ResponseEnded -> {
                        refreshSingleResponse(event.responseId)
                    }
                }
            }
        }

        _responsesScreenData.update {
            it.copy(lastSyncTime = surveyData.lastSync)
        }
    }

    fun fetchResponses(surveyData: SurveyData) {
        _responsesScreenData.update {
            it.copy(
                completeResponsesCount = surveyData.localCompleteResponsesCount,
                inCompleteResponsesCount = surveyData.localResponsesCount - surveyData.localCompleteResponsesCount,
            )
        }
        refresh()
    }

    private fun refreshSingleResponse(responseId: String) {
        viewModelScope.launch(Dispatchers.IO) {
            surveyData = surveyRepository.getOfflineSurvey(surveyData.id)
            if (_responsesScreenData.value.responses.any { it.id == responseId }) {
                val newResponse =
                    responsesRepository
                        .getResponse(responseId)
                emNavProcessor.maskedValues(listOf(newResponse)).collect { response ->
                    val newResponses =
                        _responsesScreenData.value.responses
                            .toMutableList()
                            .replaceFirstIf(
                                { it.id == responseId },
                                { response.toResponseItemData(surveyData.quotaExceeded()) },
                            )
                    _responsesScreenData.update {
                        it.copy(
                            responses = newResponses,
                            completeResponsesCount = surveyData.localCompleteResponsesCount,
                            inCompleteResponsesCount = surveyData.localResponsesCount - surveyData.localCompleteResponsesCount,
                        )
                    }
                }
            }
        }
    }

    fun refresh() {
        viewModelScope.launch(Dispatchers.IO) {
            if (!_responsesScreenData.value.isLoading) {
                currentPlayingMedia?.let {
                    withContext(Dispatchers.Main) {
                        timingHandler.removeCallbacksAndMessages(null)
                        exoPlayer.stop()
                        currentPlayingMedia = null
                    }
                }
                currentPage = 0
                _responsesScreenData.update { it.copy(isComplete = false, responses = emptyList()) }
                loadNext()
            }
        }
    }

    fun loadNext() {
        if (!_responsesScreenData.value.shouldLoad()) {
            return
        }
        viewModelScope.launch(Dispatchers.IO) {
            _responsesScreenData.update { it.copy(isLoading = true) }
            responsesRepository
                .getResponses(surveyData.id, currentPage++, PER_PAGE)
                .let { newList ->
                    val start = System.currentTimeMillis()
                    val quotaExceeded = surveyData.quotaExceeded()
                    if (newList.isNotEmpty()) {
                        emNavProcessor.maskedValues(newList).collect { response ->
                            _responsesScreenData.update {
                                it.copy(
                                    isLoading = false,
                                    isComplete = newList.size < PER_PAGE,
                                    responses =
                                        it.responses
                                            .toMutableList()
                                            .apply {
                                                add(response.toResponseItemData(quotaExceeded))
                                            },
                                )
                            }
                        }
                    } else {
                        _responsesScreenData.update {
                            it.copy(
                                isLoading = false,
                                isComplete = true,
                            )
                        }
                    }
                    Log.d(
                        "time",
                        "loadNext ${System.currentTimeMillis() - start}",
                    )
                }
        }
    }

    fun deleteResponse(responseId: String) {
        viewModelScope.launch(Dispatchers.IO) {
            if (currentPlayingMedia?.responseId == responseId) {
                withContext(Dispatchers.Main) {
                    timingHandler.removeCallbacksAndMessages(null)
                    exoPlayer.stop()
                    currentPlayingMedia = null
                }
            }
            responsesRepository.deleteResponse(responseId).let {
                _responsesScreenData.update { screenData ->
                    val list = screenData.responses.filter { it.id != responseId }
                    val count =
                        list.count { it.submitDateString != null && !it.isSynced }
                    val quotaExceeded = surveyData.quotaExceeded(count)
                    val completeCount = list.count { it.submitDateString != null }
                    val inCompleteCount = list.size - completeCount
                    screenData.copy(
                        responses = list.map { it.copy(editEnabled = !quotaExceeded && it.submitDateString == null) },
                        completeResponsesCount = completeCount,
                        inCompleteResponsesCount = inCompleteCount,
                    )
                }
            }
        }
    }

    private fun Response.toResponseItemData(quotaExceeded: Boolean) =
        ResponseItemData(
            id = id,
            isSynced = isSynced,
            startDateString = startDate.toFormattedString(),
            submitDateString = submitDate?.toFormattedString(),
            editEnabled = !quotaExceeded && submitDate == null,
            deleteEnabled = !isSynced && submitDate == null,
            events = toListEventData(),
            values = toResponseValueData(),
            lang = lang,
        )

    private fun Response.toResponseValueData() =
        values.mapNotNull {
            if ((it.value as? LinkedHashMap<*, *>)?.run {
                    containsKey(KEY_FILENAME) &&
                        containsKey(KEY_STORED_FILENAME) &&
                        containsKey(KEY_TYPE)
                } == true
            ) {
                val map = it.value as LinkedHashMap<*, *>
                val file =
                    FileUtils.getResponseFile(
                        context = getApplication(),
                        fileName = map[KEY_STORED_FILENAME] as String,
                        surveyId = surveyData.id,
                        responseId = id,
                    )
                if (file.exists()) {
                    ResponseValueData.FileValueData(
                        filename = map[KEY_FILENAME] as String,
                        file = file,
                        fileType = map[KEY_TYPE] as String,
                        key = it.key,
                    )
                } else {
                    null
                }
            } else {
                ResponseValueData.StringValueData(key = it.key, value = it.value.toString())
            }
        }

    override fun onCleared() {
        super.onCleared()
        timingHandler.removeCallbacksAndMessages(null)
        emNavProcessor.destroy()
        exoPlayer.release()
    }

    fun handleError(it: Exception) {
        viewModelScope.launch {
            processError(it)
        }
    }

    fun onPlayClicked(responseItemId: String, audioPath: String) {
        _responsesScreenData.value.responses.find { it.id == responseItemId }?.let { item ->
            item.events.find { event ->
                (event as? ResponseEventData.AudioRecordingData)?.audioPath == audioPath
            }?.let {
                val audioData = (it as ResponseEventData.AudioRecordingData)
                when {
                    currentPlayingMedia?.path != audioData.audioPath -> {
                        if (currentPlayingMedia != null) {
                            _responsesScreenData.updatePlayingAudio(
                                currentPlayingMedia!!.responseId,
                                currentPlayingMedia!!.path, false
                            )
                        }
                        currentPlayingMedia = CurrentPlayingMedia(audioData.audioPath, item.id)
                        exoPlayer.stop()
                        exoPlayer.removeMediaItems(0, exoPlayer.mediaItemCount)
                        exoPlayer.addMediaItem(MediaItem.fromUri(audioData.audioPath))
                        exoPlayer.prepare()
                    }
                    exoPlayer.currentPosition <= audioData.audioDuration -> {
                        exoPlayer.seekTo(0)
                    }
                }
                exoPlayer.seekTo(audioData.currentTime)
                exoPlayer.play()
                timingHandler.removeCallbacksAndMessages(null)
                timingHandler.post(object : Runnable {
                    override fun run() {
                        _responsesScreenData.updatePlayingAudio(
                            responseId = item.id,
                            audioPath = audioData.audioPath,
                            isPlaying = exoPlayer.isPlaying,
                            time = exoPlayer.currentPosition.roundToThousand()
                        )
                        timingHandler.postDelayed(this, 1000)
                    }
                })
            }
        }
    }

    fun onPauseClicked(responseId: String, audioPath: String) {
        exoPlayer.pause()
        timingHandler.removeCallbacksAndMessages(null)
        _responsesScreenData.updatePlayingAudio(
            responseId = responseId,
            audioPath = audioPath,
            isPlaying = false,
            time = exoPlayer.currentPosition.roundToThousand()
        )
    }

    fun onSeekTo(responseId: String, audioPath: String, position: Long) {
        _responsesScreenData.updatePlayingAudio(
            responseId = responseId,
            audioPath = audioPath,
            time = position
        )
        _responsesScreenData.getCurrentAudio()?.audioPath?.let { path ->
            if (currentPlayingMedia?.path == path) {
                exoPlayer.seekTo(position)
            }
        }
    }

    fun pauseCurrentlyPlaying() {
        currentPlayingMedia?.let { current ->
            _responsesScreenData.value.responses.forEach { response ->
                response.events.forEach { event ->
                    if ((event as? ResponseEventData.AudioRecordingData)?.audioPath == current.path) {
                        onPauseClicked(response.id, event.audioPath)
                    }
                }
            }
        }
    }

    private fun MutableStateFlow<ResponsesScreenState>.updatePlayingAudio(
        responseId: String,
        audioPath: String,
        isPlaying: Boolean? = null,
        time: Long? = null
    ) {
        if (isPlaying == null && time == null) return
        val responseIndex = value.responses.indexOfFirst { it.id == responseId }
        if (responseIndex == -1) return
        val response = value.responses[responseIndex]
        val eventIndex = response.events.indexOfFirst {
            (it as? ResponseEventData.AudioRecordingData)?.audioPath == audioPath
        }
        if (eventIndex == -1) return
        val newEvent = (response.events[eventIndex] as ResponseEventData.AudioRecordingData).let { old ->
            old.copy(
                isPlaying = isPlaying ?: old.isPlaying,
                currentTime = time?.roundToThousand() ?: old.currentTime
            )
        }
        val newEvents = response.events.toMutableList().apply { set(eventIndex, newEvent) }
        val newResponses = value.responses.toMutableList().apply {
            set(responseIndex, response.copy(events = newEvents))
        }
        update { this.value.copy(responses = newResponses) }
    }

    private fun MutableStateFlow<ResponsesScreenState>.getCurrentAudio(): ResponseEventData.AudioRecordingData? {
        return currentPlayingMedia?.let {
            value.responses.forEach { response ->
                if (response.id == currentPlayingMedia?.responseId) {
                    response.events.forEach {
                        if ((it as? ResponseEventData.AudioRecordingData)?.audioPath == currentPlayingMedia!!.path) {
                            return@let it
                        }
                    }
                }
            }
            null
        }
    }

    private fun Response.toListEventData() = events.mapNotNull {
        when (it) {
            is ResponseEvent.VoiceRecording -> {
                val file = it.getFile(
                    context = this@ResponsesViewModel.getApplication(),
                    surveyId = surveyData.id,
                    responseId = id
                )
                if (file.exists()) {
                    ResponseEventData.AudioRecordingData(
                        FileUtils.getDuration(file.absolutePath)?.roundToThousand() ?: 0,
                        file.absolutePath
                    )
                } else null
            }
            is ResponseEvent.Location -> {
                ResponseEventData.LocationData(longitude = it.longitude, latitude = it.latitude)
            }
            else -> null
        }
    }

    companion object {
        private const val PER_PAGE = 10
        const val KEY_TYPE = "type"
        const val KEY_FILENAME = "filename"
        const val KEY_STORED_FILENAME = "stored_filename"
    }
}

data class ResponseItemData(
    val id: String,
    val isSynced: Boolean,
    val startDateString: String,
    val submitDateString: String?,
    val events: List<ResponseEventData>,
    val values: List<ResponseValueData>,
    val editEnabled: Boolean,
    val deleteEnabled: Boolean,
    val lang: String,
)

sealed class ResponseValueData(
    open val key: String,
) {
    data class StringValueData(
        override val key: String,
        val value: String,
    ) : ResponseValueData(key)

    data class FileValueData(
        val filename: String,
        val file: File,
        val fileType: String,
        override val key: String,
    ) : ResponseValueData(key)
}

sealed interface ResponseEventData {
    data class AudioRecordingData(
        val audioDuration: Long, val audioPath: String, val isPlaying: Boolean = false,
        val currentTime: Long = 0
    ) : ResponseEventData

    data class LocationData(
        val longitude: Double = 0.0, val latitude: Double = 0.0
    ) : ResponseEventData
}

private fun ResponseEvent.VoiceRecording.getFile(
    context: Context,
    surveyId: String,
    responseId: String
) = FileUtils.getResponseFile(context, fileName, surveyId, responseId)

private fun Long.roundToThousand(): Long {
    val remainder = this % 1000
    return if (remainder >= 500) {
        this + (1000 - remainder)
    } else {
        this - remainder
    }
}
