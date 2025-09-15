package com.qlarr.app.ui.launch

import android.Manifest
import android.annotation.SuppressLint
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AlertDialog
import androidx.core.content.ContextCompat
import androidx.fragment.app.FragmentActivity
import androidx.lifecycle.coroutineScope
import com.qlarr.app.R
import com.qlarr.app.ui.common.WebViewUtils
import com.qlarr.app.ui.login.LoginActivity
import com.qlarr.app.ui.main.SurveyListActivity
import kotlinx.coroutines.launch
import org.koin.androidx.viewmodel.ext.android.getViewModel

@SuppressLint("CustomSplashScreen")
class LaunchActivity : FragmentActivity() {
    private val viewModel by lazy { getViewModel<LaunchViewModel>() }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (!WebViewUtils.chromeSupported(this)) {
            notifyUnsupportedChromeAndQuit()
            return
        }

        viewModel.checkUserStatus()
        checkPushNotificationPermission()
    }

    private val requestPermissionLauncher =
        registerForActivityResult(
            ActivityResultContracts.RequestPermission(),
        ) {
            redirect()
        }

    private fun checkPushNotificationPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU &&
            ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.POST_NOTIFICATIONS,
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            requestPermissionLauncher.launch(Manifest.permission.POST_NOTIFICATIONS)
        } else {
            redirect()
        }
    }

    private fun redirect() {
        lifecycle.coroutineScope.launch {
            viewModel.launchEvents.collect { launchEvent ->
                when (launchEvent) {
                    is LaunchViewModel.LaunchEvent.UserLoggedIn -> {
                        startActivity(SurveyListActivity.createIntent(this@LaunchActivity))
                        finish()
                    }

                    is LaunchViewModel.LaunchEvent.UserLoggedOut -> {
                        startActivity(LoginActivity.createIntent(this@LaunchActivity))
                        finish()
                    }
                }
            }
        }
    }

    private fun notifyUnsupportedChromeAndQuit() {
        val builder = AlertDialog.Builder(this)
        builder.apply {
            setTitle(R.string.chrome_version_not_supported)
            setNeutralButton(
                android.R.string.ok,
            ) { _, _ ->
                this@LaunchActivity.finish()
            }
        }
        builder.create().show()
    }
}
