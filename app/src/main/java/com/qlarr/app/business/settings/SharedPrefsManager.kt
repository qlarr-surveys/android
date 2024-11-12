package com.qlarr.app.business.settings

import android.content.Context
import android.content.SharedPreferences
import com.qlarr.app.business.survey.BackendEnvironment

interface SharedPrefsManager {
    val isActiveTokenAvailable: Boolean
    var isGuest: Boolean
    var env: BackendEnvironment?
    var activeToken: String?
    var refreshToken: String?
    var userId: String?
    var surveyLastFetchTimeMillis: Long
    fun clear()

    companion object {
        private var sharedPrefsManager: SharedPrefsManager? = null
        fun instance(context: Context): SharedPrefsManager {
            if (sharedPrefsManager == null) {
                sharedPrefsManager = SharedPrefsManagerImpl(context)
            }
            return sharedPrefsManager!!
        }
    }
}

class SharedPrefsManagerImpl(context: Context) : SharedPrefsManager {
    private val preferences: SharedPreferences =
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    private val editor: SharedPreferences.Editor = preferences.edit()

    override val isActiveTokenAvailable: Boolean
        get() = (!activeToken.isNullOrEmpty() && !refreshToken.isNullOrEmpty()) || isGuest
    override var isGuest: Boolean
        get() = getBoolean(KEY_IS_GUEST, false)
        set(value) = saveBoolean(KEY_IS_GUEST, value)
    override var env: BackendEnvironment?
        get() = BackendEnvironment.fromSharedPrefsString(
            value = preferences.getString(KEY_ENV, null)
        )
        set(value) = saveString(KEY_ENV, value?.toSharedPrefsString())
    override var refreshToken: String?
        get() = getString(KEY_REFRESH_TOKEN)
        set(value) = saveString(KEY_REFRESH_TOKEN, value)

    override var activeToken: String?
        get() = getString(KEY_ACTIVE_TOKEN)
        set(value) = saveString(KEY_ACTIVE_TOKEN, value)

    override var userId: String?
        get() = getString(KEY_USER_ID)
        set(value) = saveString(KEY_USER_ID, value)

    override var surveyLastFetchTimeMillis: Long
        get() = getLong(KEY_LAST_SURVEY_FETCH)
        set(value) {
            saveLong(KEY_LAST_SURVEY_FETCH, value)
        }

    override fun clear() {
        editor.clear().apply()
    }

    private fun saveLong(key: String, value: Long) {
        editor.putLong(key, value)
        editor.apply()
    }

    private fun getLong(key: String, defaultValue: Long = -1): Long {
        return preferences.getLong(key, defaultValue)
    }

    private fun saveString(key: String, value: String?) {
        editor.putString(key, value)
        editor.apply()
    }

    private fun getString(key: String, defaultValue: String? = null): String? {
        return preferences.getString(key, defaultValue)
    }

    private fun saveBoolean(key: String, value: Boolean) {
        editor.putBoolean(key, value)
        editor.apply()
    }

    private fun getBoolean(key: String, defaultValue: Boolean): Boolean {
        return preferences.getBoolean(key, defaultValue)
    }

    companion object {
        private const val PREFS_NAME = "qlarr_prefs"
        private const val KEY_ACTIVE_TOKEN = "active_token"
        private const val KEY_REFRESH_TOKEN = "refresh_token"
        private const val KEY_IS_GUEST = "is_guest"
        private const val KEY_ENV = "environment"
        private const val KEY_USER_ID = "user_id"
        private const val KEY_LAST_SURVEY_FETCH = "last_survey_fetch"
    }
}