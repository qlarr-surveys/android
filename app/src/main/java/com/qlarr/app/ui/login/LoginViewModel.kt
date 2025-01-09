package com.qlarr.app.ui.login

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.qlarr.app.business.auth.LoginInteractor
import com.qlarr.app.business.survey.BackendEnvironment
import com.qlarr.app.business.survey.SessionManager
import com.qlarr.app.business.survey.isValidUrl
import com.qlarr.app.ui.common.InputUtils
import com.qlarr.app.ui.common.error.ErrorProcessor
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
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

    fun login(
        serverUrl: String,
        email: String,
        password: String,
    ) {
        viewModelScope.launch(Dispatchers.IO) {
            _loginState.update { it.copy(isLoading = true) }
            val trimmedEmail = email.trim()
            val trimmedPsw = password.trim()
            val isUrlValid =
                _loginState.value.selection != EnvSelection.PRIVATE || isValidUrl(serverUrl)
            if (_loginState.value.selection == EnvSelection.PRIVATE && isUrlValid) {
                sessionManager.saveEnv(BackendEnvironment.Private(serverUrl))
            }
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
                        _loginState.update { it.copy(isLoggedIn = true, isLoading = false) }
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
                        urlValidationError = !isUrlValid,
                        emailValidationError = !isEmailValid,
                        pswValidationError = !isPswValid,
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
        _loginState.update { it.copy(isLoggedIn = true, isLoading = false) }
    }

    fun onBackPressed() {
        if (_loginState.value.selection != EnvSelection.NONE) {
            _loginState.update { it.copy(selection = EnvSelection.NONE) }
        } else {
            _loginState.update { it.copy(backPressed = true) }
        }
    }

    data class LoginState(
        val backPressed: Boolean = false,
        val selection: EnvSelection = EnvSelection.NONE,
        val isLoading: Boolean = false,
        val isLoggedIn: Boolean = false,
        val roleNotSupported: Boolean = false,
        val pswValidationError: Boolean = false,
        val emailValidationError: Boolean = false,
        val urlValidationError: Boolean = false,
    )
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
