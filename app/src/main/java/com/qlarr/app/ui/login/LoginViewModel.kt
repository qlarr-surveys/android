package com.qlarr.app.ui.login

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.qlarr.app.business.auth.LoginInteractor
import com.qlarr.app.business.survey.BackendEnvironment
import com.qlarr.app.business.survey.SessionManager
import com.qlarr.app.business.survey.isValidUrl
import com.qlarr.app.ui.common.InputUtils
import com.qlarr.app.ui.common.error.ErrorProcessor
import com.qlarr.app.ui.login.EnvSelection.PRIVATE
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asSharedFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class LoginViewModel(
    private val loginInteractor: LoginInteractor,
    private val sessionManager: SessionManager,
    errorProcessor: ErrorProcessor,
) : ViewModel(),
    ErrorProcessor by errorProcessor {
    private val _loginState = MutableStateFlow(LoginState())
    val loginState = _loginState.asStateFlow()

    private val _loginEvents = MutableSharedFlow<LoginEvents>()
    val loginEvents = _loginEvents.asSharedFlow()

    init {
        checkForPreviousSession()
    }

    private fun checkForPreviousSession() {
        if (sessionManager.hasPreviousSession()) {
            _loginState.update {
                it.copy(
                    previousSession = PreviousSessionInfo(
                        userName = sessionManager.getPreviousUserName(),
                        environment = sessionManager.getPreviousEnv()
                    ),
                    showSessionConflictDialog = true
                )
            }
        }
    }

    fun login(
        serverUrl: String,
        email: String,
        password: String,
    ) {
        viewModelScope.launch(Dispatchers.IO) {
            _loginState.update { it.copy(isLoading = true) }
            val trimmedEmail = email.trim()
            val trimmedPsw = password.trim()
            val trimmedUrl = InputUtils.trimServerUrl(serverUrl)
            val isUrlValid = _loginState.value.selection != PRIVATE || isValidUrl(trimmedUrl)
            val isPswValid = InputUtils.isValidPassword(trimmedPsw)
            val isEmailValid = InputUtils.isValidEmail(trimmedEmail)
            if (isEmailValid && isPswValid && isUrlValid) {
                try {
                    val response = loginInteractor.login(trimmedEmail, trimmedPsw)
                    if (response.roles.any { role ->
                            listOf(
                                Roles.SUPER_ADMIN,
                                Roles.SURVEY_ADMIN,
                                Roles.SURVEYOR,
                            ).map { it.name.lowercase() }.contains(role)
                        }
                    ) {
                        viewModelScope.launch {
                            _loginEvents.emit(LoginEvents.LoggedIn)
                        }
                    } else {
                        roleNotSupported()
                        _loginState.update { it.copy(isLoading = false) }
                    }
                } catch (e: Exception) {
                    _loginState.update { it.copy(isLoading = false) }
                    processLoginError(e)
                }
            } else {
                _loginState.update {
                    it.copy(
                        isLoading = false,
                        inputValidation = InputValidation(
                            urlValidationError = !isUrlValid,
                            emailValidationError = !isEmailValid,
                            pswValidationError = !isPswValid,
                        )

                    )
                }
            }
        }
    }

    fun setEnvSelection(selection: EnvSelection) {
        _loginState.update { it.copy(selection = selection) }
    }

    fun tryAsGuest() {
        sessionManager.saveUserAsGuest()
        viewModelScope.launch {
            _loginEvents.emit(LoginEvents.LoggedIn)
        }
    }

    fun onBackPressed() {
        if (_loginState.value.lockedToPreviousEnv) {
            _loginState.update { it.copy(showSessionConflictDialog = true) }
        } else if (_loginState.value.selection != EnvSelection.NONE) {
            _loginState.update { it.copy(selection = EnvSelection.NONE) }
        } else {
            viewModelScope.launch {
                _loginEvents.emit(LoginEvents.Exit)
            }
        }
    }

    fun onResetSession() {
        viewModelScope.launch(Dispatchers.IO) {
            loginInteractor.clearUser()
            _loginState.update {
                it.copy(
                    showSessionConflictDialog = false,
                    previousSession = null,
                    lockedToPreviousEnv = false
                )
            }
        }
    }

    fun onContinueWithPreviousEnv() {
        val previousEnv = _loginState.value.previousSession?.environment
        when (previousEnv) {
            BackendEnvironment.Guest -> {
                onResetSession()
                tryAsGuest()
            }

            is BackendEnvironment.Private -> {
                _loginState.update {
                    it.copy(
                        selection = PRIVATE,
                        showSessionConflictDialog = false,
                    )
                }
            }

            null -> {
                // do nothing
            }
        }

    }

    fun cancelSessionConflictDialog() {
        viewModelScope.launch {
            _loginEvents.emit(LoginEvents.Exit)
        }
    }

    data class LoginState(
        val selection: EnvSelection = EnvSelection.NONE,
        val isLoading: Boolean = false,
        val inputValidation: InputValidation = InputValidation(),
        val previousSession: PreviousSessionInfo? = null,
        val showSessionConflictDialog: Boolean = false,
        val lockedToPreviousEnv: Boolean = false
    )
}

data class PreviousSessionInfo(
    val userName: String?,
    val environment: BackendEnvironment?
)

data class InputValidation(
    val pswValidationError: Boolean = false,
    val emailValidationError: Boolean = false,
    val urlValidationError: Boolean = false,
)

sealed interface LoginEvents {
    data object LoggedIn : LoginEvents
    data object Exit : LoginEvents
}

@Suppress("unused")
enum class Roles {
    SUPER_ADMIN,
    SURVEY_ADMIN,
    SURVEYOR,
    ANALYST,
}

enum class EnvSelection {
    NONE,
    PRIVATE,
}
