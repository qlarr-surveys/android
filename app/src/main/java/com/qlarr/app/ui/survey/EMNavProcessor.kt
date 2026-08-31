package com.qlarr.app.ui.survey

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Context
import android.util.Base64
import android.util.Log
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.node.ObjectNode
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.qlarr.app.api.survey.NavigationJsonOutput
import com.qlarr.app.api.survey.ResponseEvent
import com.qlarr.app.api.survey.SurveyNavigationData
import com.qlarr.app.api.survey.ValidationJsonOutput
import com.qlarr.app.api.survey.objectMapper
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.db.QlarrDb
import com.qlarr.app.db.model.Response
import com.qlarr.app.db.model.Response.Companion.STORED_FILENAME_KEY
import com.qlarr.app.ui.common.FileUtils
import com.qlarr.app.ui.common.toFormattedString
import com.qlarr.app.ui.responses.AnswerPage
import com.qlarr.app.ui.responses.AnswerRow
import com.qlarr.app.ui.responses.AnswerValue
import com.qlarr.app.ui.responses.ResponseValueData
import com.qlarr.app.ui.responses.ResponsesViewModel
import com.qlarr.app.ui.responses.TimelineEntry
import com.qlarr.surveyengine.ext.JsonExt
import com.qlarr.surveyengine.ext.splitToComponentCodes
import com.qlarr.surveyengine.model.Dependency
import com.qlarr.surveyengine.model.ReservedCode
import com.qlarr.surveyengine.model.SurveyLang
import com.qlarr.surveyengine.model.exposed.ColumnName
import com.qlarr.surveyengine.model.exposed.NavigationDirection
import com.qlarr.surveyengine.model.exposed.NavigationIndex
import com.qlarr.surveyengine.model.exposed.SurveyMode
import com.qlarr.surveyengine.model.exposed.stringIndex
import com.qlarr.surveyengine.scriptengine.engineScript
import com.qlarr.surveyengine.usecase.NavigationUseCaseWrapper
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import java.net.URLConnection
import java.time.Duration
import java.time.LocalDateTime
import java.time.ZoneOffset
import java.util.UUID
import kotlin.math.roundToInt

@SuppressLint("SetJavaScriptEnabled")
class EMNavProcessor(
    activityContext: Context,
    private val survey: SurveyData,
    onScriptLoaded: () -> Unit,
) {
    private val webView = WebView(activityContext)
    private var responseId: UUID? = null
    private val qlarrDb = QlarrDb.getDatabase(activityContext)

    private fun getActivity(): Activity = webView.context as Activity

    private var scriptLoaded = false

    init {
        webView.clearCache(true)
        webView.settings.javaScriptEnabled = true
        webView.settings.mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
        webView.settings.domStorageEnabled = true
        webView.webViewClient =
            object : WebViewClient() {
                override fun onPageFinished(
                    view: WebView?,
                    url: String?,
                ) {
                    super.onPageFinished(view, url)
                    if (!scriptLoaded) {
                        scriptLoaded = true
                        onScriptLoaded()
                    }
                }
            }
        loadJavaScript(engineScript().script)
    }

    private fun loadJavaScript(input: String) {
        val javascript = "<script>console.log(window.navigator.userAgent)\n$input</script>"
        val data = javascript.toByteArray(charset("UTF-8"))
        val base64 = Base64.encodeToString(data, Base64.DEFAULT)
        webView.loadUrl("data:text/html;charset=utf-8;base64,$base64")
    }

    private fun getPrefillValues(validationJsonOutput: ValidationJsonOutput): Map<String, Any> {
        val prefillQuestionsCodes =
            validationJsonOutput.survey
                .get("groups")
                ?.asSequence()
                ?.flatMap { group ->
                    group.get("questions")?.asSequence() ?: emptySequence()
                }?.filter { question ->
                    question.get("prefill")?.asBoolean() == true
                }?.mapNotNull { question ->
                    question.get("code")?.asText()
                }?.toList() ?: return emptyMap()

        if (prefillQuestionsCodes.isEmpty()) return emptyMap()

        val prefillValueKeys =
            validationJsonOutput.schema
                .filter {
                    it.columnName == ColumnName.VALUE
                }.filter { responseField ->
                    prefillQuestionsCodes.any {
                        responseField.componentCode == it ||
                                responseField.componentCode.startsWith("${it}A")
                    }
                }.map { "${it.componentCode}.value" }

        if (prefillValueKeys.isEmpty()) return emptyMap()

        return runBlocking {
            qlarrDb
                .responseDao()
                .getLastResponse(survey.id)
                ?.values
                ?.filterKeys { it in prefillValueKeys }
                ?: emptyMap()
        }
    }

    fun start(navListener: NavigationListener) {
        val validationJsonOutput = FileUtils.getValidationJson(getActivity(), survey.id)!!
        val prefilledValues = getPrefillValues(validationJsonOutput)

        navigationUseCase(
            validationJsonOutput = validationJsonOutput,
            navigationDirection = NavigationDirection.Start,
            navigationIndex = null,
            values = prefilledValues,
            onSuccess = { navigationJsonOutput, lang, additionalLang ->
                responseId = UUID.randomUUID()
                saveResponse(
                    navigationJsonOutput.defaultSurveyLang().code,
                    navigationJsonOutput,
                )
                val result =
                    navigationJsonOutput
                        .with(
                            responseId = responseId!!,
                            lang = lang,
                            additionalLang = additionalLang,
                            navigationData = survey.surveyNavigationData,
                            saveTimings = survey.saveTimings,
                        )
                navListener.onSuccess(result)
            },
        ) { navListener.onError(it) }
    }

    fun navigate(
        useCaseInput: NavigateRequest,
        navListener: NavigationListener,
    ) {
        val validationJsonOutput = FileUtils.getValidationJson(getActivity(), survey.id)!!
        responseId = useCaseInput.responseId!!
        val current: Response
        runBlocking {
            current = qlarrDb.responseDao().get(responseId.toString())
        }
        val lang = useCaseInput.lang ?: current.lang
        navigationUseCase(
            validationJsonOutput = validationJsonOutput,
            navigationDirection = useCaseInput.navigationDirection!!,
            navigationIndex = current.navigationIndex,
            lang = lang,
            values = mutableMapOf<String, Any?>().apply {
                putAll(current.values)
                putAll(useCaseInput.values)
            },
            onSuccess = { navigationJsonOutput, language, additionalLang ->
                val result =
                    navigationJsonOutput
                        .with(
                            responseId = responseId!!,
                            lang = language,
                            additionalLang = additionalLang,
                            navigationData = survey.surveyNavigationData,
                            saveTimings = survey.saveTimings,
                        )
                updateResponse(
                    current.id,
                    language.code,
                    navigationJsonOutput,
                    useCaseInput.navigationDirection,
                    useCaseInput.events,
                )
                navListener.onSuccess(result)
            },
        ) { navListener.onError(it) }
    }

    private fun maskedValues(values: Map<String, Any>): Map<String, Any> =
        buildMap {
            values.forEach { (key, _) ->
                if (key.endsWith(".value")) {
                    val prefix = key.substringBeforeLast(".value")
                    val maskedKey = "$prefix.masked_value"
                    values[maskedKey]?.let { maskedValue ->
                        put(maskedKey, maskedValue)
                    }
                }
            }
        }

    fun maskedValues(values: List<Response>): Flow<Response> {
        val validationJsonOutput = FileUtils.getValidationJson(getActivity(), survey.id)!!
        val schema =
            validationJsonOutput.schema.filter { it.columnName == ColumnName.VALUE }.map {
                it.componentCode
            }
        val labels =
            JsonExt.labels(
                validationJsonOutput.survey.toString(),
                "",
                validationJsonOutput.defaultSurveyLang().code,
            )
        val codeIndex = validationJsonOutput.buildCodeIndex()

        return flow {
            values.forEach { response ->
                val newValues = mutableMapOf<String, Any>()
                val oldValues = response.values
                val maskedValues = maskedValues(response.values)
                schema.forEach { column ->
                    val key = "$column.value"
                    oldValues[key]?.let { value ->
                        val prefix = codeIndex[column]?.let { "($it) " } ?: ""
                        val newKey = "$prefix${labels[column]?.stripHTMLTags() ?: column}"
                        val newValue =
                            maskedValues[
                                Dependency(
                                    column,
                                    ReservedCode.MaskedValue,
                                ).toValueKey(),
                            ]?.toString()
                                ?: value
                        newValues[newKey] = newValue
                    }
                }

                emit(response.copy(values = newValues))
            }
        }
    }

    private fun String.stripHTMLTags(): String = replace(Regex("<.*?>"), "")

    fun detailContent(
        response: Response,
        includeUnanswered: Boolean,
    ): DetailContent {
        val validationJsonOutput =
            FileUtils.getValidationJson(getActivity(), survey.id)
                ?: return DetailContent(emptyList(), emptyList())
        val codeIndex = validationJsonOutput.buildCodeIndex()
        val labels =
            JsonExt.labels(
                validationJsonOutput.survey.toString(),
                "",
                validationJsonOutput.defaultSurveyLang().code,
            )
        val valueColumns =
            validationJsonOutput.schema
                .filter { it.columnName == ColumnName.VALUE }
                .map { it.componentCode }
                .toSet()
        val masked = maskedValues(response.values)

        fun maskedOrRaw(code: String): String? {
            val raw = response.values["$code.value"]?.toString()
            val maskedValue =
                masked[Dependency(code, ReservedCode.MaskedValue).toValueKey()]?.toString()
            return maskedValue?.let { "$it ($raw)" } ?: raw
        }

        fun questionLabel(code: String): String {
            val parts = code.splitToComponentCodes()
            return if (parts.size > 1) {
                val q = parts[0]
                val question =
                    "(${codeIndex[q] ?: q}) ${labels[q]?.stripHTMLTags().orEmpty()}".trim()
                "$question - ${labels[code]?.stripHTMLTags() ?: code}"
            } else {
                "(${codeIndex[code] ?: code}) ${labels[code]?.stripHTMLTags() ?: code}".trim()
            }
        }

        val pages = mutableListOf<AnswerPage>()
        var title: String? = null
        var rows = mutableListOf<AnswerRow>()
        validationJsonOutput.componentIndexList.forEach { ci ->
            val code = ci.code
            when {
                code.startsWith("G") -> {
                    title?.let { pages.add(AnswerPage(it, rows)) }
                    title =
                        "${codeIndex[code] ?: ""} · ${labels[code]?.stripHTMLTags() ?: code}".trim()
                    rows = mutableListOf()
                }

                code in valueColumns -> {
                    val raw = response.values["$code.value"]
                    val answer: AnswerValue? =
                        when {
                            raw == null -> {
                                if (includeUnanswered) AnswerValue.NotAnswered else null
                            }

                            raw.isFileMap() -> {
                                val map = raw as Map<*, *>
                                val storedName =
                                    map[ResponsesViewModel.KEY_STORED_FILENAME] as String
                                val filename = map[ResponsesViewModel.KEY_FILENAME] as String
                                val file =
                                    FileUtils.getResponseFile(
                                        getActivity(),
                                        storedName,
                                        survey.id,
                                        response.id,
                                    )
                                if (file.exists()) {
                                    AnswerValue.File(
                                        ResponseValueData.FileValueData(
                                            filename = filename,
                                            file = file,
                                            fileType = map[ResponsesViewModel.KEY_TYPE] as String,
                                            key = questionLabel(code),
                                        ),
                                    )
                                } else {
                                    AnswerValue.Cleared(filename)
                                }
                            }

                            else -> {
                                AnswerValue.Text(maskedOrRaw(code).orEmpty())
                            }
                        }
                    if (answer != null && title != null) {
                        rows.add(AnswerRow(questionLabel(code), answer))
                    }
                }
            }
        }
        title?.let { pages.add(AnswerPage(it, rows)) }

        var prevTime: LocalDateTime? = null
        val timeline =
            response.events.mapNotNull { event ->
                val delta = prevTime?.let { formatDelta(it, event.time) }
                prevTime = event.time
                when (event) {
                    is ResponseEvent.Navigation -> {
                        TimelineEntry.Nav(
                            from = codeIndex[event.from] ?: event.from.ifBlank { "Start" },
                            to = codeIndex[event.to] ?: event.to.ifBlank { "End" },
                            tag = event.direction.name.uppercase(),
                            timeLabel = event.time.toFormattedString(),
                            delta = delta,
                        )
                    }

                    is ResponseEvent.Value -> {
                        TimelineEntry.Answer(
                            question = questionLabel(event.code),
                            value = maskedOrRaw(event.code).orEmpty(),
                            timeLabel = event.time.toFormattedString(),
                            delta = delta,
                        )
                    }

                    else -> {
                        null
                    }
                }
            }

        return DetailContent(pages, timeline)
    }

    private fun Any.isFileMap(): Boolean =
        (this as? Map<*, *>)?.run {
            containsKey(ResponsesViewModel.KEY_FILENAME) &&
                containsKey(ResponsesViewModel.KEY_STORED_FILENAME) &&
                containsKey(ResponsesViewModel.KEY_TYPE)
        } == true

    private fun formatDelta(
        from: LocalDateTime,
        to: LocalDateTime,
    ): String? {
        val ms = Duration.between(from, to).toMillis()
        if (ms <= 0) return null
        val seconds = ms / 1000.0
        return when {
            seconds < 60 -> "+%.1fs".format(seconds)
            seconds < 3600 -> "+${(seconds / 60).toInt()}m ${(seconds % 60).toInt()}s"
            else -> "+${(seconds / 3600).toInt()}h ${((seconds % 3600) / 60).toInt()}m"
        }
    }

    fun draftProgress(response: Response): Int {
        val validationJsonOutput =
            FileUtils.getValidationJson(getActivity(), survey.id) ?: return MIN_PROGRESS
        val groups =
            validationJsonOutput.survey
                .get("groups")
                ?.toList()
                .orEmpty()
        val totalGroups = groups.size
        val pct: Double =
            if (totalGroups > 1) {
                val currentCode =
                    when (val ni = response.navigationIndex) {
                        is NavigationIndex.Group -> {
                            ni.groupId
                        }

                        is NavigationIndex.End -> {
                            ni.groupId
                        }

                        is NavigationIndex.Groups -> {
                            ni.groupIds.lastOrNull()
                        }

                        is NavigationIndex.Question -> {
                            groups
                                .firstOrNull { group ->
                                    group
                                        .get("questions")
                                        ?.any { it.get("code")?.asText() == ni.questionId } == true
                                }?.get("code")
                                ?.asText()
                        }
                    }
                val idx = groups.indexOfFirst { it.get("code")?.asText() == currentCode }
                if (idx < 0) 0.0 else (idx + 1).toDouble() / totalGroups * 100.0
            } else {
                val questions =
                    groups
                        .firstOrNull()
                        ?.get("questions")
                        ?.toList()
                        .orEmpty()
                if (questions.isEmpty()) {
                    0.0
                } else {
                    val answered =
                        questions.count { q ->
                            val code = q.get("code")?.asText() ?: return@count false
                            response.values.keys.any {
                                (it == "$code.value" || it.startsWith("${code}A")) && it.endsWith(".value")
                            }
                        }
                    answered.toDouble() / questions.size * 100.0
                }
            }
        return ((pct / 5.0).roundToInt() * 5).coerceIn(MIN_PROGRESS, MAX_PROGRESS)
    }

    private fun navigationUseCase(
        validationJsonOutput: ValidationJsonOutput,
        lang: String? = null,
        values: Map<String, Any?> = mapOf(),
        navigationIndex: NavigationIndex? = null,
        navigationDirection: NavigationDirection,
        onSuccess: suspend (NavigationJsonOutput, SurveyLang, List<SurveyLang>) -> Unit,
        onError: (Throwable) -> Unit,
    ) {
        val currentLang = validationJsonOutput.availableLangByCode(lang)
        val additionalLang =
            mutableListOf(validationJsonOutput.defaultSurveyLang())
                .apply {
                    addAll(
                        validationJsonOutput.additionalLang(),
                    )
                }.filter {
                    it.code != currentLang.code
                }
        val navigationUseCaseWrapperImpl =
            NavigationUseCaseWrapper.init(
                lang = lang,
                navigationDirection = navigationDirection,
                navigationMode = survey.surveyNavigationData.navigationMode,
                processedSurvey = objectMapper.writeValueAsString(validationJsonOutput),
                values = objectMapper.writeValueAsString(values),
                navigationIndex = navigationIndex,
                skipInvalid = survey.surveyNavigationData.skipInvalid,
                surveyMode = SurveyMode.OFFLINE,
            )
        val script = navigationUseCaseWrapperImpl.getNavigationScript()
        (webView.context as Activity).runOnUiThread {
            webView.evaluateJavascript("JSON.parse(navigate($script))") { value ->
                CoroutineScope(Dispatchers.IO).launch {
                    try {
                        onSuccess(
                            objectMapper.readValue(
                                navigationUseCaseWrapperImpl.processNavigationResult(
                                    value!!,
                                ),
                                jacksonTypeRef<NavigationJsonOutput>(),
                            ),
                            currentLang,
                            additionalLang,
                        )
                    } catch (e: Exception) {
                        onError(e)
                    }
                }
            }
        }
    }

    private suspend fun saveResponse(
        surveyLang: String,
        result: NavigationJsonOutput,
    ) {
        qlarrDb.responseDao().insert(
            Response(
                id = responseId.toString(),
                navigationIndex = result.navigationIndex,
                lang = surveyLang,
                surveyId = survey.id,
                version = survey.publishInfo.version,
                startDate = LocalDateTime.now(ZoneOffset.UTC),
                submitDate = null,
                isSynced = false,
                values = result.toSave,
                events =
                    if (survey.saveTimings) {
                        listOf(
                            ResponseEvent.Navigation(
                                from = "",
                                to = result.navigationIndex.stringIndex(),
                                direction = NavigationDirection.Start,
                                time = LocalDateTime.now(ZoneOffset.UTC),
                            ),
                        )
                    } else {
                        emptyList()
                    },
            ),
        )
    }

    private suspend fun updateResponse(
        responseId: String,
        surveyLang: String,
        result: NavigationJsonOutput,
        navigationDirection: NavigationDirection,
        events: List<ResponseEvent.Value>,
    ) {
        val current = qlarrDb.responseDao().get(responseId)
        qlarrDb.responseDao().updateAndAppendOldEvents(
            values = result.toSave,
            id = current.id,
            navigationIndex = result.navigationIndex,
            startDate = current.startDate,
            submitDate =
                if (result.navigationIndex is NavigationIndex.End) {
                    LocalDateTime.now(ZoneOffset.UTC)
                } else {
                    current.submitDate
                },
            lang = surveyLang,
            events =
                mutableListOf<ResponseEvent>().apply {
                    if (survey.saveTimings) {
                        addAll(events)
                        add(
                            ResponseEvent.Navigation(
                                from = current.navigationIndex.stringIndex(),
                                to = result.navigationIndex.stringIndex(),
                                direction = navigationDirection,
                                time = LocalDateTime.now(ZoneOffset.UTC),
                            ),
                        )
                    }
                },
        )
    }

    fun uploadDataUrl(
        key: String,
        dataUrl: String,
        fileName: String,
    ): ResponseUploadFile {
        val uuid = UUID.randomUUID()
        val storedFilename = "$uuid.${fileName.substringAfterLast(".")}"
        val responseFile =
            FileUtils.getResponseFile(
                context = getActivity(),
                fileName = storedFilename,
                surveyId = survey.id,
                responseId = responseId.toString(),
            )
        val str = dataUrl.substring(dataUrl.indexOf(",") + 1)
        val imageData: ByteArray = Base64.decode(str, Base64.NO_WRAP)
        responseFile.writeBytes(imageData)
        return saveFileResponse(
            fileName = fileName,
            storedFilename = storedFilename,
            key = key,
            fileSize = responseFile.length(),
        )
    }

    fun saveFileResponse(
        fileName: String,
        storedFilename: String,
        key: String,
        fileSize: Long,
    ): ResponseUploadFile {
        val responseUploadFile =
            ResponseUploadFile(
                filename = fileName,
                storedFilename = storedFilename,
                size = fileSize,
                type = URLConnection.guessContentTypeFromName(fileName),
            )
        runBlocking {
            val response = qlarrDb.responseDao().get(responseId.toString())
            (response.values["$key.value"] as? Map<*, *>)?.get(STORED_FILENAME_KEY)?.let {
                val file =
                    FileUtils.getResponseFile(getActivity(), it.toString(), survey.id, response.id)
                if (file.exists()) {
                    Log.d(TAG, "deleting old file: $it")
                    file.delete()
                }
            }
            val newValues =
                response.values.toMutableMap().apply {
                    put("$key.value", responseUploadFile)
                }
            qlarrDb.responseDao().updateValues(
                id = response.id,
                values = newValues,
            )
        }
        return responseUploadFile
    }

    fun destroy() {
        webView.destroy()
    }

    companion object {
        private const val TAG = "EMNavProcessor"
        private const val MIN_PROGRESS = 5
        private const val MAX_PROGRESS = 95
    }
}

data class DetailContent(
    val answerPages: List<AnswerPage>,
    val timeline: List<TimelineEntry>,
)

data class ResponseUploadFile(
    val filename: String,
    @JsonProperty("stored_filename")
    val storedFilename: String,
    val size: Long,
    val type: String,
)

interface NavigationListener {
    fun onSuccess(apiNavigationOutput: ApiNavigationOutput)

    fun onError(error: Throwable)
}

fun NavigationJsonOutput.with(
    responseId: UUID,
    lang: SurveyLang,
    additionalLang: List<SurveyLang>,
    navigationData: SurveyNavigationData,
    saveTimings: Boolean,
): ApiNavigationOutput =
    ApiNavigationOutput(
        survey,
        state,
        navigationIndex,
        navigationData,
        responseId,
        lang,
        additionalLang,
        saveTimings,
    )

data class ApiNavigationOutput(
    val survey: ObjectNode,
    val state: ObjectNode,
    val navigationIndex: NavigationIndex,
    val navigationData: SurveyNavigationData,
    val responseId: UUID,
    val lang: SurveyLang,
    val additionalLang: List<SurveyLang>?,
    val saveTimings: Boolean,
)

fun <T> measure(
    name: String,
    block: () -> T,
): T {
    val start = System.currentTimeMillis().apply { }
    val result = block()
    Log.d("time", "$name " + "${System.currentTimeMillis() - start}")
    return result
}
