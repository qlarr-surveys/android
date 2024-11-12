package com.qlarr.app.ui.common

import android.content.Context
import android.util.Log
import android.webkit.WebView

object WebViewUtils {

    fun chromeSupported(context: Context): Boolean {
        val userAgentString = WebView(context).settings.userAgentString
        Log.d("WebViewUtils", "User agent string: $userAgentString")
        val pattern = "Chrome/(\\d+)".toRegex()
        val matchResult = pattern.find(userAgentString)
        val versionNumber = matchResult?.groups?.get(1)?.value
        val version:Float = try {
            Log.d("WebViewUtils", "versionNumber: ${versionNumber?.toFloat() ?: 0f}")
            versionNumber?.toFloat() ?: 0f
        } catch (e: NumberFormatException) {
            0f
        }
        return version >= MIN_SUPPORTED_CHROME_VERSION

    }

    private const val MIN_SUPPORTED_CHROME_VERSION = 44
}