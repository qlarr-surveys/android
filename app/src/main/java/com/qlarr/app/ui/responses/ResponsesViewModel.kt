package com.qlarr.app.ui.responses

import android.app.Application
import android.os.Handler
import android.os.Looper
import android.util.Log
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.qlarr.app.AppEvent
import com.qlarr.app.EventBus
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
                        it.copy(responses = newResponses)
                    }
                }
            }
        }
    }

    fun refresh() {
        viewModelScope.launch(Dispatchers.IO) {
            if (!_responsesScreenData.value.isLoading) {
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
            responsesRepository.deleteResponse(responseId).let {
                _responsesScreenData.update { screenData ->
                    val list = screenData.responses.filter { it.id != responseId }
                    val count =
                        list.count { it.submitDateString != null && !it.isSynced }
                    val quotaExceeded = surveyData.quotaExceeded(count)
                    screenData.copy(responses = list.map { it.copy(editEnabled = !quotaExceeded) })
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
            deleteEnabled = !isSynced,
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
    }

    fun handleError(it: Exception) {
        viewModelScope.launch {
            processError(it)
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
