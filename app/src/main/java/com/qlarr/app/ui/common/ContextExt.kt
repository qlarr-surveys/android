package com.qlarr.app.ui.common

import android.content.Context
import android.util.TypedValue
import androidx.core.content.ContextCompat
import kotlin.math.roundToInt

fun Context.dpToPx(dpValue: Int): Int {
    val metrics = resources.displayMetrics
    return TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, dpValue.toFloat(), metrics).roundToInt()
}

fun Context.color(colorRes: Int): Int = ContextCompat.getColor(this, colorRes)
