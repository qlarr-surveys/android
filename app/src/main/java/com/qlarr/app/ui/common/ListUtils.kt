package com.qlarr.app.ui.common

fun <T> MutableList<T>.replaceFirstIf(condition: (T) -> Boolean, newValue: (T) -> T):
        MutableList<T> {
    for (i in indices) {
        if (condition(this[i])) {
            this[i] = newValue(this[i])
            return this
        }
    }
    return this
}
