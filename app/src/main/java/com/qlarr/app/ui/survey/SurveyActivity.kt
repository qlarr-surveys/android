package com.qlarr.app.ui.survey

import android.Manifest.permission
import android.Manifest.permission.ACCESS_COARSE_LOCATION
import android.Manifest.permission.ACCESS_FINE_LOCATION
import android.Manifest.permission.RECORD_AUDIO
import android.content.ActivityNotFoundException
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager.PERMISSION_GRANTED
import android.net.Uri
import android.os.Bundle
import android.os.Looper
import android.os.Parcelable
import android.os.PersistableBundle
import android.provider.MediaStore
import android.view.ViewGroup.LayoutParams
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.addCallback
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.annotation.StringRes
import androidx.appcompat.app.AlertDialog
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.imePadding
import androidx.compose.foundation.layout.padding
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
import androidx.lifecycle.coroutineScope
import androidx.lifecycle.lifecycleScope
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationCallback
import com.google.android.gms.location.LocationRequest
import com.google.android.gms.location.LocationResult
import com.google.android.gms.location.LocationServices
import com.google.android.gms.location.Priority
import com.journeyapps.barcodescanner.ScanContract
import com.journeyapps.barcodescanner.ScanIntentResult
import com.journeyapps.barcodescanner.ScanOptions
import com.qlarr.app.R
import com.qlarr.app.api.survey.ResponseEvent
import com.qlarr.app.business.parcelable
import com.qlarr.app.business.responses.ResponseRepository
import com.qlarr.app.business.survey.SurveyData
import com.qlarr.app.ui.common.error.ErrorDisplayManager
import com.qlarr.app.ui.common.theme.Colors
import com.qlarr.app.ui.common.theme.PrimaryActionButton
import com.qlarr.app.ui.common.theme.QlarrTheme
import com.qlarr.app.ui.common.theme.TertiaryActionButton
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.koin.android.ext.android.inject
import org.koin.androidx.viewmodel.ext.android.viewModel
import org.koin.core.parameter.parametersOf
import java.time.LocalDateTime
import java.time.ZoneOffset

class SurveyActivity : ComponentActivity() {
    private lateinit var responseId: String
    private var backPressedTime: Long = 0
    private var photoUri: Uri? = null
    private var qlarrWebView: QlarrWebView? = null
    private var currentToast: Toast? = null

    private lateinit var locationCallback: LocationCallback
    private var requestingLocationUpdates = false
    private lateinit var fusedLocationClient: FusedLocationProviderClient
    private val responseRepository: ResponseRepository by inject()
    private var audioServiceStarted: Boolean = false

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

        fusedLocationClient = LocationServices.getFusedLocationProviderClient(this)

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
                }) { padding ->
                    key(reloadCount) {
                        AndroidView(
                            modifier =
                                Modifier
                                    .fillMaxSize()
                                    .padding(padding)
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
                                )
                            },
                        )
                    }
                }
            }

            setupBackPress()
        }

        locationCallback = object : LocationCallback() {
            override fun onLocationResult(locationResult: LocationResult) {
                super.onLocationResult(locationResult)
                locationResult.lastLocation?.let {
                    if (!requestingLocationUpdates) return@let
                    stopLocationUpdates()
                    val event = ResponseEvent.Location(
                        it.longitude, it.latitude, LocalDateTime.now(ZoneOffset.UTC)
                    )
                    lifecycle.coroutineScope.launch(Dispatchers.IO) {
                        responseRepository.addEvent(responseId, event)
                    }
                }
            }
        }
        updateValuesFromBundle(savedInstanceState)
    }

    private fun setupBackPress() {
        onBackPressedDispatcher.addCallback {
            val t = System.currentTimeMillis()
            if (t - backPressedTime > 3000) { // 3 secs
                backPressedTime = t
                showToast(R.string.press_back_to_exit)
            } else {
                qlarrWebView?.saveProgressBeforeQuit()
            }
        }
    }

    fun onResponseStarted(responseId: String) {
        this.responseId = responseId
        checkAudioAndLocationPermissionAndRecord()
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
        stopRecording()
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

    private val requestRecordingPermissionsLauncher =
        registerForActivityResult(ActivityResultContracts.RequestMultiplePermissions()) { results ->
            if (results.all { it.value }) {
                recordLocation()
                recordAudio()
            } else {
                notifyRecordPermissionDenied()
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

    fun reportError(error: Throwable) {
        surveyViewModel.reportError(error)
    }

    fun reportErrorWithAutoSave(error: Throwable) {
        showToast(R.string.response_not_auto_saved)
        finish()
    }

    fun quit() {
        showToast(R.string.values_saved)
        finish()
    }

    private fun showToast(@StringRes text: Int) {
        runOnUiThread {
            currentToast?.cancel()
            currentToast = Toast.makeText(this, text, Toast.LENGTH_SHORT)
            currentToast?.show()
        }
    }

    private fun createLocationRequest() =
        LocationRequest.Builder(Priority.PRIORITY_HIGH_ACCURACY, 5000).build()

    private fun updateValuesFromBundle(savedInstanceState: Bundle?) {
        savedInstanceState ?: return
        if (savedInstanceState.keySet().contains(REQUESTING_LOCATION_UPDATES_KEY)) {
            requestingLocationUpdates = savedInstanceState.getBoolean(
                REQUESTING_LOCATION_UPDATES_KEY
            )
        }
    }

    override fun onSaveInstanceState(outState: Bundle, outPersistentState: PersistableBundle) {
        outState.putBoolean(REQUESTING_LOCATION_UPDATES_KEY, requestingLocationUpdates)
        super.onSaveInstanceState(outState, outPersistentState)
    }

    private fun startLocationUpdates() {
        if (checkSelfPermission(this, ACCESS_FINE_LOCATION) != PERMISSION_GRANTED) {
            return
        }
        fusedLocationClient.requestLocationUpdates(
            createLocationRequest(),
            locationCallback,
            Looper.getMainLooper()
        )
    }

    override fun onStart() {
        super.onStart()
        if (audioServiceStarted) {
            AudioRecordingService.resume(this)
        }
    }

    override fun onStop() {
        if (audioServiceStarted) {
            if (isFinishing) {
                AudioRecordingService.stop(this)
                audioServiceStarted = false
            } else {
                AudioRecordingService.pause(this)
            }
        }
        super.onStop()
    }

    private fun stopLocationUpdates() {
        requestingLocationUpdates = false
        fusedLocationClient.removeLocationUpdates(locationCallback)
    }

    private fun checkAudioAndLocationPermissionAndRecord() {
        val shouldRequestAudio =
            survey.backgroundAudio && checkSelfPermission(this, RECORD_AUDIO) != PERMISSION_GRANTED
        val shouldRequestLocation = survey.recordGps && checkSelfPermission(
            this, ACCESS_FINE_LOCATION
        ) != PERMISSION_GRANTED
        if (shouldRequestAudio || shouldRequestLocation) {
            val permissions = mutableListOf<String>().apply {
                if (shouldRequestAudio) add(RECORD_AUDIO)
                if (shouldRequestLocation) addAll(listOf(ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION))
            }
            requestRecordingPermissionsLauncher.launch(permissions.toTypedArray())
        } else {
            recordLocation()
            recordAudio()
        }
    }

    private fun recordAudio() {
        if (survey.backgroundAudio) {
            audioServiceStarted = true
            AudioRecordingService.start(this, survey, responseId)
        }
    }

    private fun recordLocation() {
        if (survey.recordGps) {
            requestingLocationUpdates = true
            startLocationUpdates()
        }
    }

    private fun stopRecording() {
        if (audioServiceStarted) {
            AudioRecordingService.stop(this)
            audioServiceStarted = false
        }
        stopLocationUpdates()
    }

    private fun notifyRecordPermissionDenied() {
        val builder = AlertDialog.Builder(this)
        builder.apply {
            setTitle(R.string.error_recording_permission_missing_title)
            setMessage(R.string.error_recording_permission_missing_desc)
            setNeutralButton(android.R.string.ok) { _, _ ->
                this@SurveyActivity.finish()
            }
        }
        builder.create().show()
    }

    override fun onDestroy() {
        stopRecording()
        super.onDestroy()
    }

    companion object {
        private const val TAG = "SurveyActivity"
        private const val EXTRA_SURVEY = "survey"
        private const val RESPONSE_ID = "response_id"
        private const val REQUESTING_LOCATION_UPDATES_KEY = "requesting_location_updates_key"

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
