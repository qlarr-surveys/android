package com.qlarr.app.ui.main.ui.main

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.fragment.compose.AndroidFragment
import androidx.lifecycle.ViewModelStoreOwner
import com.qlarr.app.R
import com.qlarr.app.ui.common.theme.QlarrTheme
import com.qlarr.app.ui.common.theme.QlarrTopBar
import com.qlarr.app.ui.common.theme.TopBarIconButton
import org.koin.androidx.compose.koinViewModel

@Composable
fun SurveyListScreen(
    onLogoutFinished: () -> Unit,
    viewModelStoreOwner: ViewModelStoreOwner
) {
    val viewModel = koinViewModel<MainViewModel>(viewModelStoreOwner = viewModelStoreOwner)

    var dialogShown by remember { mutableStateOf(false) }

    QlarrTheme {
        Scaffold(topBar = {
            QlarrTopBar(
                title = stringResource(id = R.string.title_survey_list),
                showBackButton = false,
                actions = {
                    TopBarIconButton(iconRes = R.drawable.ic_sync) {
                        viewModel.fetchSurveyList(true)
                    }
                    TopBarIconButton(iconRes = R.drawable.baseline_logout_24) {
                        dialogShown = true
                    }
                })
        }) { padding ->
            AndroidFragment<MainFragment>(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues = padding)
            )
            if (dialogShown) {
                DialogConfirmLogout(onConfirmation = { viewModel.logout(onLogoutFinished) },
                    onDismiss = { dialogShown = false })
            }
        }
    }
}

@Composable
private fun DialogConfirmLogout(onConfirmation: () -> Unit, onDismiss: () -> Unit) {
    AlertDialog(onDismissRequest = { },
        title = {
            Text(text = stringResource(id = R.string.logout_are_you_sure))
        },
        text = {
            Text(text = stringResource(id = R.string.logout_alert_message))
        },
        confirmButton = {
            TextButton(
                onClick = onConfirmation
            ) {
                Text(stringResource(id = R.string.logout))
            }
        }, dismissButton = {
            TextButton(
                onClick = onDismiss
            ) {
                Text(stringResource(id = R.string.cancel))
            }
        })
}

@Composable
@Preview(showBackground = true)
private fun PreviewDialogConfirmLogout() {
    QlarrTheme {
        DialogConfirmLogout(onConfirmation = {}, onDismiss = {})
    }
}
