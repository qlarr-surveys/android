package com.qlarr.app.ui.survey

import android.Manifest.permission
import android.content.ActivityNotFoundException
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager.PERMISSION_GRANTED
import android.net.Uri
import android.os.Bundle
import android.os.Parcelable
import android.provider.MediaStore
import android.view.ViewGroup.LayoutParams
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.addCallback
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AlertDialog
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.imePadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeDrawing
import androidx.compose.foundation.layout.width
import androidx.compose.material3.BottomAppBar
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.content.ContextCompat.checkSelfPermission
import androidx.lifecycle.lifecycleScope
import com.journeyapps.barcodescanner.ScanContract
import com.journeyapps.barcodescanner.ScanIntentResult
import com.journeyapps.barcodescanner.ScanOptions
import com.qlarr.app.R
import com.qlarr.app.business.parcelable
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.ui.common.error.ErrorDisplayManager
import com.qlarr.app.ui.common.theme.Colors
import com.qlarr.app.ui.common.theme.PrimaryActionButton
import com.qlarr.app.ui.common.theme.QlarrTheme
import com.qlarr.app.ui.common.theme.TertiaryActionButton
import kotlinx.coroutines.launch
import org.koin.android.ext.android.inject
import org.koin.androidx.viewmodel.ext.android.viewModel
import org.koin.core.parameter.parametersOf

class SurveyActivity : ComponentActivity() {
    private lateinit var responseId: String
    private var backPressedTime: Long = 0
    private var photoUri: Uri? = null
    private var qlarrWebView: QlarrWebView? = null

    private val surveyViewModel: SurveyViewModel by viewModel { parametersOf(survey.id) }
    private val errorDisplayManager: ErrorDisplayManager by inject { parametersOf(this) }

    val survey: SurveyData
        get() =
            intent.parcelable(EXTRA_SURVEY)
                ?: throw IllegalArgumentException("Survey is required")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        if (!intent.hasExtra(EXTRA_SURVEY)) {
            finish()
            return
        }

        lifecycleScope.launch {
            surveyViewModel.errors.collect { error ->
                errorDisplayManager.displayError(error)
            }
        }

        val responseIdExtra: String? = intent.getStringExtra(RESPONSE_ID)

        setContent {
            val showBottomBar by surveyViewModel.showBottomBar.collectAsState()
            var reloadCount by remember { mutableIntStateOf(0) }

            QlarrTheme {
                Scaffold(bottomBar = {
                    if (showBottomBar) {
                        BottomAppBar(
                            containerColor = Colors.White,
                            tonalElevation = 8.dp,
                        ) {
                            Row(
                                modifier =
                                    Modifier
                                        .fillMaxWidth()
                                        .padding(horizontal = 16.dp, vertical = 8.dp),
                                horizontalArrangement = Arrangement.SpaceBetween,
                            ) {
                                TertiaryActionButton(
                                    onClick = {
                                        reloadCount++
                                    },
                                    modifier = Modifier.weight(1f),
                                    textRes = R.string.survey_end_repeat,
                                )
                                Spacer(modifier = Modifier.width(16.dp))
                                PrimaryActionButton(
                                    onClick = ::finish,
                                    modifier = Modifier.weight(1f),
                                    textRes = R.string.survey_end_finish_action,
                                )
                            }
                        }
                    }
                }) { _ ->
                    key(reloadCount) {
                        val insets = WindowInsets.safeDrawing
                        AndroidView(
                            modifier =
                                Modifier
                                    .fillMaxSize()
                                    .imePadding(),
                            factory = { context ->
                                QlarrWebView(context).apply {
                                    layoutParams =
                                        LayoutParams(
                                            LayoutParams.MATCH_PARENT,
                                            LayoutParams.MATCH_PARENT,
                                        )
                                    qlarrWebView = this
                                }
                            },
                            update = { qlarrWebView ->
                                qlarrWebView.loadSurvey(
                                    surveyData = survey,
                                    responseId = responseIdExtra,
                                    windowsInsets = insets,
                                )
                            },
                        )
                    }
                }
            }

            setupBackPress()
        }
    }

    private fun setupBackPress() {
        onBackPressedDispatcher.addCallback {
            val t = System.currentTimeMillis()
            if (t - backPressedTime > 3000) { // 3 secs
                backPressedTime = t
                Toast
                    .makeText(
                        this@SurveyActivity,
                        R.string.press_back_to_exit,
                        Toast.LENGTH_SHORT,
                    ).show()
            } else {
                finish()
            }
        }
    }

    fun onResponseStarted(responseId: String) {
        this.responseId = responseId
        surveyViewModel.responseStarted(responseId)
    }

    private fun getCameraPermission(onGranted: () -> Unit) {
        if (checkSelfPermission(this, permission.CAMERA)
            != PERMISSION_GRANTED
        ) {
            requestCameraPermission.launch(permission.CAMERA)
        } else {
            onGranted()
        }
    }

    fun onResponseEnded(responseId: String) {
        surveyViewModel.responseEnded(responseId = responseId)
    }

    fun pickFromGallery(mimeTypes: String?) {
        val intent =
            Intent(Intent.ACTION_OPEN_DOCUMENT).apply {
                addCategory(Intent.CATEGORY_OPENABLE)
                putExtra(Intent.EXTRA_ALLOW_MULTIPLE, false)
                if (mimeTypes.isNullOrBlank()) {
                    type = "*/*"
                } else {
                    type = mimeTypes
                    putExtra(Intent.EXTRA_MIME_TYPES, mimeTypes.split(",").toTypedArray())
                }
            }
        try {
            galleryLauncher.launch(intent)
        } catch (e: ActivityNotFoundException) {
            e.printStackTrace()
        }
    }

    private fun takePhotoOnPermissionGranted() {
        val intent =
            Intent(MediaStore.ACTION_IMAGE_CAPTURE).apply {
                addFlags(
                    Intent.FLAG_GRANT_READ_URI_PERMISSION or
                        Intent.FLAG_GRANT_WRITE_URI_PERMISSION,
                )
                putExtra(MediaStore.EXTRA_OUTPUT, photoUri)
            }
        photoLauncher.launch(intent)
    }

    private fun takeVideoOnPermissionGranted() {
        val intent =
            Intent(MediaStore.ACTION_VIDEO_CAPTURE).apply {
                addFlags(
                    Intent.FLAG_GRANT_READ_URI_PERMISSION or
                        Intent.FLAG_GRANT_WRITE_URI_PERMISSION,
                )
            }
        videoLauncher.launch(intent)
    }

    fun takePhoto(uploadFileUri: Uri) {
        photoUri = uploadFileUri
        getCameraPermission { takePhotoOnPermissionGranted() }
    }

    fun takeVideo() {
        getCameraPermission { takeVideoOnPermissionGranted() }
    }

    private val requestCameraPermission =
        registerForActivityResult(
            ActivityResultContracts.RequestPermission(),
        ) { granted ->
            if (granted) {
                if (photoUri != null) {
                    takePhotoOnPermissionGranted()
                } else {
                    takeVideoOnPermissionGranted()
                }
            } else {
                notifyPermissionDenied()
            }
        }

    private val photoLauncher =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
            when (result.resultCode) {
                RESULT_OK -> processCameraResult()
                RESULT_CANCELED -> {
                    notifyResultCancelled()
                    photoUri = null
                }
            }
        }

    private val galleryLauncher =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
            if (result.resultCode == RESULT_OK) {
                processGalleryResult(result.data)
            } else {
                notifyResultCancelled()
            }
        }

    private val videoLauncher =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
            if (result.resultCode == RESULT_OK) {
                processVideoResult(result.data?.data)
            } else {
                notifyResultCancelled()
            }
        }

    private fun processGalleryResult(data: Intent?) {
        data?.data?.let { uri ->
            qlarrWebView?.onFileSelected(uri)
        }
    }

    private fun processCameraResult() {
        photoUri = null
        qlarrWebView?.onCameraResult()
    }

    private fun processVideoResult(contentUri: Uri?) {
        qlarrWebView?.onVideoResult(contentUri)
    }

    private val barcodeLauncher =
        registerForActivityResult(
            ScanContract(),
        ) { result: ScanIntentResult ->
            if (result.contents == null) {
                notifyResultCancelled()
            } else {
                qlarrWebView?.onBarcodeScanned(result.contents)
            }
        }

    fun scanBarcode() {
        val options = ScanOptions()
        options.setDesiredBarcodeFormats(ScanOptions.ONE_D_CODE_TYPES)
        options.setPrompt("Scan a barcode")
        options.setBeepEnabled(true)
        options.setBarcodeImageEnabled(false)
        barcodeLauncher.launch(options)
    }

    fun showMaxSizeValidation(
        actual: Int,
        max: Int,
        compression: Boolean = false,
    ) {
        val builder = AlertDialog.Builder(this)
        builder.apply {
            setTitle(R.string.max_size_exceeded)
            setMessage(
                getString(
                    if (compression) R.string.max_size_exceeded_message_compression_note else R.string.max_size_exceeded_message,
                    actual,
                    max,
                ),
            )
            setNeutralButton(
                android.R.string.ok,
            ) { _, _ ->
            }
        }
        builder.create().show()
    }

    private fun notifyPermissionDenied() {
        Toast.makeText(this, R.string.permission_denied, Toast.LENGTH_SHORT).show()
    }

    private fun notifyResultCancelled() {
        Toast.makeText(this, R.string.canceled, Toast.LENGTH_SHORT).show()
    }

    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)
    }

    fun reportError(error: Throwable) {
        surveyViewModel.reportError(error)
    }

    companion object {
        private const val TAG = "SurveyActivity"
        private const val EXTRA_SURVEY = "survey"
        private const val RESPONSE_ID = "response_id"

        fun createIntent(
            context: Context,
            survey: SurveyData,
        ): Intent =
            Intent(context, SurveyActivity::class.java).apply {
                putExtra(EXTRA_SURVEY, survey as Parcelable)
            }

        fun createIntent(
            context: Context,
            survey: SurveyData,
            responseId: String,
        ): Intent =
            Intent(context, SurveyActivity::class.java).apply {
                putExtra(EXTRA_SURVEY, survey as Parcelable)
                putExtra(RESPONSE_ID, responseId)
            }
    }
}
