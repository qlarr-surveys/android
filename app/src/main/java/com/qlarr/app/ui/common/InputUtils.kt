package com.qlarr.app.ui.common

import android.util.Patterns

object InputUtils {
    // TODO : align patterns with BE
    fun isValidPassword(password: String): Boolean = password.isNotEmpty()

    fun isValidEmail(email: String): Boolean = Patterns.EMAIL_ADDRESS.matcher(email).matches()

    fun trimServerUrl(email: String): String = email.trim().replace(Regex("\\s+|/+$"), "")
}
