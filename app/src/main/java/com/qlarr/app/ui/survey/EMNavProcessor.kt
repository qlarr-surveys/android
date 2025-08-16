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
import com.qlarr.app.api.survey.objectMapper
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.db.QlarrDb
import com.qlarr.app.db.model.Response
import com.qlarr.app.db.model.Response.Companion.STORED_FILENAME_KEY
import com.qlarr.app.ui.common.FileUtils
import com.qlarr.surveyengine.ext.JsonExt
import com.qlarr.surveyengine.model.Dependency
import com.qlarr.surveyengine.model.ReservedCode
import com.qlarr.surveyengine.model.SurveyLang
import com.qlarr.surveyengine.model.exposed.ColumnName
import com.qlarr.surveyengine.model.exposed.NavigationDirection
import com.qlarr.surveyengine.model.exposed.NavigationIndex
import com.qlarr.surveyengine.model.exposed.NavigationMode
import com.qlarr.surveyengine.model.exposed.SurveyMode
import com.qlarr.surveyengine.model.toDependency
import com.qlarr.surveyengine.scriptengine.engineScript
import com.qlarr.surveyengine.usecase.MaskedValuesUseCase
import com.qlarr.surveyengine.usecase.NavigationUseCaseWrapper
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import java.net.URLConnection
import java.time.LocalDateTime
import java.time.ZoneOffset
import java.util.UUID
import kotlin.concurrent.thread
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine

@SuppressLint("SetJavaScriptEnabled")
class EMNavProcessor(
    activityContext: Context,
    private val survey: SurveyData,
    onScriptLoaded: () -> Unit
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
        webView.webViewClient = object : WebViewClient() {
            override fun onPageFinished(view: WebView?, url: String?) {
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

    fun start(
        navListener: NavigationListener
    ) {
        navigationUseCase(
            navigationDirection = NavigationDirection.Start,
            navigationIndex = null,
            onSuccess = { navigationJsonOutput, lang, additionalLang ->
                responseId = UUID.randomUUID()
                saveResponse(
                    navigationJsonOutput.defaultSurveyLang().code,
                    navigationJsonOutput
                )
                val result = navigationJsonOutput
                    .with(
                        responseId = responseId!!,
                        lang = lang,
                        additionalLang = additionalLang
                    )
                navListener.onSuccess(result)
            }
        ) { navListener.onError(it) }
    }

    fun navigate(
        useCaseInput: NavigateRequest,
        navListener: NavigationListener
    ) {
        var response: Response
        responseId = useCaseInput.responseId!!
        runBlocking {
            response = qlarrDb.responseDao().get(responseId.toString())
        }
        val lang = useCaseInput.lang ?: response.lang
        navigationUseCase(
            navigationDirection = useCaseInput.navigationDirection!!,
            navigationIndex = response.navigationIndex,
            lang = lang,
            values = response.values.toMutableMap().apply {
                putAll(useCaseInput.values)
            },
            onSuccess = { navigationJsonOutput, language, additionalLang ->
                val result = navigationJsonOutput
                    .with(
                        responseId = responseId!!,
                        lang = language,
                        additionalLang = additionalLang
                    )
                updateResponse(
                    response,
                    language.code,
                    navigationJsonOutput
                )
                navListener.onSuccess(result)
            }
        ) { navListener.onError(it) }
    }

    fun maskedValues(
        values: List<Response>,
    ): Flow<Response> {
        val validationJsonOutput = FileUtils.getValidationJson(getActivity(), survey.id)!!
        val schema = validationJsonOutput.schema.filter { it.columnName == ColumnName.VALUE }.map {
            it.componentCode
        }
        val labels = JsonExt.labels(
            validationJsonOutput.survey.toString(),
            "",
            validationJsonOutput.defaultSurveyLang().code
        )

        val maskedValuesUseCaseImpl = measure("init useCase") {
            MaskedValuesUseCase(processedSurvey = objectMapper.writeValueAsString(validationJsonOutput))
        }
        return flow {
            values.forEach { response ->
                val newValues = mutableMapOf<String, Any>()
                val oldValues = response.values
                val start = System.currentTimeMillis()

                val maskedValues = maskedValuesUseCase(
                    maskedValuesUseCaseImpl,
                    response.values
                )
                Log.d("time", "maskedUseCase ${System.currentTimeMillis() - start}")

                schema.forEach { column ->
                    val key = "$column.value"
                    oldValues[key]?.let { value ->
                        val newKey = labels[column]?.stripHTMLTags() ?: column
                        val newValue =
                            maskedValues[Dependency(column, ReservedCode.MaskedValue)]?.toString()
                                ?: value
                        newValues[newKey] = newValue
                    }
                }

                emit(response.copy(values = newValues))
            }
        }

    }

    private fun String.stripHTMLTags(): String {
        return replace(Regex("<.*?>"), "")
    }

    private suspend fun maskedValuesUseCase(
        maskedValuesUseCase: MaskedValuesUseCase,
        values: Map<String, Any>,
    ): Map<Dependency, Any> {

        return suspendCoroutine { continuation ->

            val script = measure("Get script") {
                maskedValuesUseCase.getNavigationScript(
                    useCaseValues = objectMapper.writeValueAsString(
                        values
                    )
                )
            }
            try {
                val start = System.currentTimeMillis()

                (webView.context as Activity).runOnUiThread {
                    webView.evaluateJavascript("JSON.parse(navigate($script))") { value ->
                        Log.d("time", "javascript ${System.currentTimeMillis() - start}")
                        thread {
                            val result = measure("processResults") {
                                maskedValuesUseCase.processNavigationResult(value)
                            }
                            continuation.resume(
                                result.mapKeys { it.key.toDependency()!! }
                            )
                        }
                    }
                }
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }

    private fun navigationUseCase(
        lang: String? = null,
        values: Map<String, Any> = mapOf(),
        navigationMode: NavigationMode? = null,
        navigationIndex: NavigationIndex? = null,
        navigationDirection: NavigationDirection,
        onSuccess: (NavigationJsonOutput, SurveyLang, List<SurveyLang>) -> Unit,
        onError: (Throwable) -> Unit
    ) {
        val validationJsonOutput = FileUtils.getValidationJson(getActivity(), survey.id)!!
        val currentLang = validationJsonOutput.availableLangByCode(lang)
        val additionalLang =
            mutableListOf(validationJsonOutput.defaultSurveyLang()).apply {
                addAll(
                    validationJsonOutput.additionalLang()
                )
            }.filter {
                it.code != currentLang.code
            }
        val navigationUseCaseWrapperImpl = NavigationUseCaseWrapper.init(
            lang = lang,
            navigationDirection = navigationDirection,
            navigationMode = navigationMode,
            processedSurvey = objectMapper.writeValueAsString(validationJsonOutput),
            values = objectMapper.writeValueAsString(values),
            navigationIndex = navigationIndex,
            skipInvalid = validationJsonOutput.surveyNavigationData().skipInvalid,
            surveyMode = SurveyMode.OFFLINE
        )
        val script = navigationUseCaseWrapperImpl.getNavigationScript()
        (webView.context as Activity).runOnUiThread {
            webView.evaluateJavascript("JSON.parse(navigate($script))") { value ->
                thread {
                    try {
                        onSuccess(
                            objectMapper.readValue(
                                navigationUseCaseWrapperImpl.processNavigationResult(
                                    value!!
                                ), jacksonTypeRef<NavigationJsonOutput>()
                            ),
                            currentLang, additionalLang
                        )
                    } catch (e: Exception) {
                        onError(e)
                    }
                }
            }
        }
    }

    private fun saveResponse(
        surveyLang: String,
        result: NavigationJsonOutput
    ) {
        CoroutineScope(Dispatchers.IO).launch {
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
                    values = result.toSave
                )
            )
        }
    }

    private fun updateResponse(
        response: Response,
        surveyLang: String,
        result: NavigationJsonOutput,
    ) {
        CoroutineScope(Dispatchers.IO).launch {
            qlarrDb.responseDao().update(
                values = response.values.toMutableMap().apply {
                    putAll(result.toSave)
                },
                id = response.id,
                navigationIndex = result.navigationIndex,
                startDate = response.startDate,
                submitDate = if (result.navigationIndex is NavigationIndex.End)
                    LocalDateTime.now(ZoneOffset.UTC)
                else response.submitDate,
                lang = surveyLang
            )
        }
    }

    fun uploadDataUrl(
        key: String,
        dataUrl: String,
        fileName: String
    ): ResponseUploadFile {
        val uuid = UUID.randomUUID()
        val storedFilename = uuid.toString()
        val responseFile = FileUtils.getResponseFile(
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
            fileSize = responseFile.length()
        )
    }

    fun uploadFile(
        key: String,
        fileName: String,
        byteArray: ByteArray
    ): ResponseUploadFile {
        val uuid = UUID.randomUUID().toString()
        val responseFile = FileUtils.getResponseFile(
            context = getActivity(),
            fileName = uuid,
            surveyId = survey.id,
            responseId = responseId.toString(),
        )
        responseFile.writeBytes(byteArray)
        return saveFileResponse(
            fileName = fileName,
            storedFilename = uuid,
            key = key,
            fileSize = responseFile.length()
        )
    }

    fun saveFileResponse(
        fileName: String,
        storedFilename: String,
        key: String,
        fileSize: Long
    ): ResponseUploadFile {
        var response: Response
        runBlocking {
            response = qlarrDb.responseDao().get(responseId.toString())
        }
        val responseUploadFile = ResponseUploadFile(
            filename = fileName,
            storedFilename = storedFilename,
            size = fileSize,
            type = URLConnection.guessContentTypeFromName(fileName)
        )
        val newValues = response.values.toMutableMap().apply {
            put("$key.value", responseUploadFile)
        }
        CoroutineScope(Dispatchers.IO).launch {
            (response.values["$key.value"] as? Map<*, *>)?.get(STORED_FILENAME_KEY)?.let {
                val file =
                    FileUtils.getResponseFile(getActivity(), it.toString(), survey.id, response.id)
                if (file.exists()) {
                    Log.d(TAG, "deleting old file: $it")
                    file.delete()
                }
            }
            qlarrDb.responseDao().update(
                values = newValues,
                id = response.id,
                startDate = response.startDate,
                submitDate = response.submitDate,
                navigationIndex = response.navigationIndex,
                lang = response.lang
            )
        }
        return responseUploadFile
    }

    fun destroy() {
        webView.destroy()
    }

    companion object {
        private const val TAG = "EMNavProcessor"
    }

}

data class ResponseUploadFile(
    val filename: String,
    @JsonProperty("stored_filename")
    val storedFilename: String,
    val size: Long,
    val type: String
)

interface NavigationListener {
    fun onSuccess(apiNavigationOutput: ApiNavigationOutput)
    fun onError(error: Throwable)
}

fun NavigationJsonOutput.with(
    responseId: UUID,
    lang: SurveyLang,
    additionalLang: List<SurveyLang>,
)
        : ApiNavigationOutput {
    return ApiNavigationOutput(
        survey,
        state,
        navigationIndex,
        responseId,
        lang,
        additionalLang
    )
}

data class ApiNavigationOutput(
    val survey: ObjectNode,
    val state: ObjectNode,
    val navigationIndex: NavigationIndex,
    val responseId: UUID,
    val lang: SurveyLang,
    val additionalLang: List<SurveyLang>?
)

fun <T> measure(name: String, block: () -> T): T {
    val start = System.currentTimeMillis().apply { }
    val result = block()
    Log.d("time", "$name " + "${System.currentTimeMillis() - start}")
    return result
}