package com.qlarr.app.ui.common

import android.content.Context
import android.content.res.ColorStateList
import android.view.View
import android.view.View.GONE
import android.view.View.VISIBLE
import android.widget.ImageButton
import androidx.appcompat.widget.AppCompatImageView
import androidx.core.widget.ImageViewCompat
import com.qlarr.app.R

fun AppCompatImageView.setEnabledTint(context: Context, isEnabled: Boolean) {
    if (isEnabled) {
        ImageViewCompat.setImageTintList(
            this,
            ColorStateList.valueOf(context.color(R.color.enabled))
        )
    } else {
        ImageViewCompat.setImageTintList(
            this,
            ColorStateList.valueOf(context.color(R.color.disabled))
        )
    }
}

fun ImageButton.setEnabledTint(context: Context, isEnabled: Boolean) {
    if (isEnabled) {
        ImageViewCompat.setImageTintList(
            this,
            ColorStateList.valueOf(context.color(R.color.enabled))
        )
    } else {
        ImageViewCompat.setImageTintList(
            this,
            ColorStateList.valueOf(context.color(R.color.disabled))
        )
    }
}

fun View.visibleOrGone(visible: Boolean) {
    visibility = if (visible) VISIBLE else GONE
}

fun View.gone() {
    visibility = GONE
}

fun View.visible() {
    visibility = VISIBLE
}
