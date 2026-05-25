package com.qlarr.app.ui.login

import androidx.activity.compose.BackHandler
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.lifecycle.compose.collectAsStateWithLifecycle

@Composable
fun LoginScreen(
    viewModel: LoginViewModel,
    onLoggedIn: () -> Unit,
    onExit: () -> Unit,
) {
    val state by viewModel.loginState.collectAsStateWithLifecycle()

    LaunchedEffect(Unit) {
        viewModel.loginEvents.collect { event ->
            when (event) {
                LoginEvents.LoggedIn -> onLoggedIn()
                LoginEvents.Exit -> onExit()
            }
        }
    }

    BackHandler { viewModel.onBackPressed() }

    when (state.selection) {
        EnvSelection.NONE -> {
            InitialScreen(
                onLoginPrivate = { viewModel.setEnvSelection(EnvSelection.PRIVATE) },
                onBrowseExamples = { viewModel.tryAsGuest() },
            )
        }

        EnvSelection.PRIVATE -> {
            PrivateServerForm(
                state = state,
                onLogin = viewModel::login,
            )
        }
    }

    if (state.showSessionConflictDialog) {
        SessionConflictDialog(
            previousSession = state.previousSession,
            onContinue = viewModel::onContinueWithPreviousEnv,
            onReset = viewModel::onResetSession,
            onDismiss = viewModel::cancelSessionConflictDialog,
        )
    }
}
