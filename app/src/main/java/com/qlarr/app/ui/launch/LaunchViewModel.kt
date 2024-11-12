package com.qlarr.app.ui.launch

import androidx.lifecycle.ViewModel
import com.qlarr.app.business.settings.SharedPrefsManager
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.filterNotNull

class LaunchViewModel(
    private val sharedPrefsManager: SharedPrefsManager
) : ViewModel() {

    private val _launchEvents = MutableStateFlow<LaunchEvent?>(null)
    val launchEvents = _launchEvents.filterNotNull()

    fun checkUserStatus() {
        if (sharedPrefsManager.isActiveTokenAvailable) {
            _launchEvents.tryEmit(LaunchEvent.UserLoggedIn)
        } else {
            _launchEvents.tryEmit(LaunchEvent.UserLoggedOut)
        }
    }

    sealed class LaunchEvent {
        data object UserLoggedIn : LaunchEvent()
        data object UserLoggedOut : LaunchEvent()
    }
}

