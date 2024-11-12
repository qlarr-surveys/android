package com.qlarr.app.ui.common

import android.content.Context
import android.graphics.Color
import android.os.Handler
import android.os.Looper
import android.text.Spannable
import android.text.SpannableString
import android.text.style.ForegroundColorSpan
import android.util.AttributeSet
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import com.google.android.material.button.MaterialButton
import com.qlarr.app.R

class LoadingButton @JvmOverloads constructor(
        context: Context,
        attrs: AttributeSet? = null
) : MaterialButton(context, attrs), DefaultLifecycleObserver {

    private val loadingText: CharSequence
    private val defaultText: CharSequence = "$text"
    private var isObservingLifecycle = false

    init {
        val a = context.obtainStyledAttributes(attrs, R.styleable.LoadingButton)
        loadingText = (
                a.getString(R.styleable.LoadingButton_loading_text)
                        ?: text
                ).toString() + "..."
        a.recycle()
    }

    private val dotLoader by lazy {
        DotsLoader {
            text = SpannableString(loadingText).apply {
                setSpan(
                        ForegroundColorSpan(Color.TRANSPARENT),
                        loadingText.length - it,
                        loadingText.length,
                        Spannable.SPAN_INCLUSIVE_EXCLUSIVE
                )
            }
        }
    }

    var isLoading = false
        set(value) {
            if (field == value) return
            field = value
            isEnabled = !value

            if (value) {
                startLoading()
            } else {
                dotLoader.stop()
                text = defaultText
            }
        }

    private fun startLoading() {
        if (isObservingLifecycle) {
            dotLoader.load()
        } else {
            throw IllegalStateException(
                    "Before calling show loading setLifecycle(lifecycle: Lifecycle) needs to be called"
            )
        }
    }

    fun setLifecycle(lifecycle: Lifecycle) {
        lifecycle.addObserver(this)
        isObservingLifecycle = true
    }

    override fun onStop(owner: LifecycleOwner) {
        super.onStop(owner)
        dotLoader.stop()
    }

    override fun onStart(owner: LifecycleOwner) {
        super.onStart(owner)
        if (isLoading) {
            startLoading()
        }
    }
}

private class DotsLoader(val listener: (Int) -> Unit) {
    private val handler = Handler(Looper.getMainLooper())
    private var dotCount = 3

    private val runnable = Runnable {
        if (dotCount > 0) {
            dotCount--
        } else {
            dotCount = 3
        }
        listener(dotCount)
        load()
    }

    fun load() {
        handler.postDelayed(runnable, 500)
    }

    fun stop() {
        handler.removeCallbacks(runnable)
        dotCount = 0
    }
}