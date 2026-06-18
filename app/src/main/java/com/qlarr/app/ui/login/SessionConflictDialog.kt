package com.qlarr.app.ui.login

import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import com.qlarr.app.R
import com.qlarr.app.business.survey.BackendEnvironment

@Composable
fun SessionConflictDialog(
    previousSession: PreviousSessionInfo?,
    onContinue: () -> Unit,
    onReset: () -> Unit,
    onDismiss: () -> Unit,
) {
    val userName =
        previousSession?.userName ?: stringResource(R.string.session_conflict_unknown_user)
    val envName =
        when (val env = previousSession?.environment) {
            is BackendEnvironment.Private -> env.baseUrl
            BackendEnvironment.Guest -> stringResource(R.string.session_conflict_guest_env)
            null -> stringResource(R.string.session_conflict_unknown_env)
        }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text(stringResource(R.string.session_conflict_dialog_title)) },
        text = {
            Text(stringResource(R.string.session_conflict_dialog_message, userName, envName))
        },
        confirmButton = {
            TextButton(onClick = onContinue) {
                Text(stringResource(R.string.session_conflict_continue_button, envName))
            }
        },
        dismissButton = {
            TextButton(onClick = onReset) {
                Text(stringResource(R.string.session_conflict_reset_button))
            }
        },
    )
}
