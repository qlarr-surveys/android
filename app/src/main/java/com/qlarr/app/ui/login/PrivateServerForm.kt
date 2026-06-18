package com.qlarr.app.ui.login

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Visibility
import androidx.compose.material.icons.filled.VisibilityOff
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.qlarr.app.R
import com.qlarr.app.business.survey.BackendEnvironment
import com.qlarr.app.ui.common.theme.Colors

@Composable
fun PrivateServerForm(
    state: LoginViewModel.LoginState,
    onLogin: (url: String, email: String, password: String) -> Unit,
) {
    val lockedToPrivate = state.previousSession?.environment is BackendEnvironment.Private
    val lockedUrl =
        (state.previousSession?.environment as? BackendEnvironment.Private)?.baseUrl.orEmpty()

    var url by rememberSaveable { mutableStateOf(lockedUrl) }
    var email by rememberSaveable { mutableStateOf("") }
    var password by rememberSaveable { mutableStateOf("") }
    var passwordVisible by rememberSaveable { mutableStateOf(false) }

    Column(
        modifier =
            Modifier
                .fillMaxSize()
                .background(Colors.White)
                .statusBarsPadding()
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 16.dp, vertical = 16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Spacer(Modifier.height(64.dp))
        Image(
            painter = painterResource(R.drawable.logo512),
            contentDescription = null,
            modifier = Modifier.size(100.dp),
        )
        Spacer(Modifier.height(64.dp))

        if (!lockedToPrivate) {
            TextField(
                value = url,
                onValueChange = { url = it },
                label = { Text(stringResource(R.string.login_hint_server_url)) },
                singleLine = true,
                isError = state.inputValidation.urlValidationError,
                supportingText = {
                    if (state.inputValidation.urlValidationError) {
                        Text(stringResource(R.string.validation_url_error))
                    }
                },
                keyboardOptions =
                    KeyboardOptions(
                        keyboardType = KeyboardType.Uri,
                        imeAction = ImeAction.Next,
                    ),
                shape = RoundedCornerShape(4.dp),
                colors = filledFieldColors(),
                modifier = Modifier.fillMaxWidth(),
            )
            Spacer(Modifier.height(8.dp))
        }

        TextField(
            value = email,
            onValueChange = { email = it },
            label = { Text(stringResource(R.string.login_hint_email)) },
            singleLine = true,
            isError = state.inputValidation.emailValidationError,
            supportingText = {
                if (state.inputValidation.emailValidationError) {
                    Text(stringResource(R.string.validation_email_error))
                }
            },
            keyboardOptions =
                KeyboardOptions(
                    keyboardType = KeyboardType.Email,
                    imeAction = ImeAction.Next,
                ),
            shape = RoundedCornerShape(4.dp),
            colors = filledFieldColors(),
            modifier = Modifier.fillMaxWidth(),
        )
        Spacer(Modifier.height(8.dp))

        TextField(
            value = password,
            onValueChange = { password = it },
            label = { Text(stringResource(R.string.login_hint_password)) },
            singleLine = true,
            isError = state.inputValidation.pswValidationError,
            supportingText = {
                if (state.inputValidation.pswValidationError) {
                    Text(stringResource(R.string.validation_psw_error))
                }
            },
            visualTransformation = if (passwordVisible) VisualTransformation.None else PasswordVisualTransformation(),
            keyboardOptions =
                KeyboardOptions(
                    keyboardType = KeyboardType.Password,
                    imeAction = ImeAction.Done,
                ),
            trailingIcon = {
                IconButton(onClick = { passwordVisible = !passwordVisible }) {
                    Icon(
                        imageVector = if (passwordVisible) Icons.Default.VisibilityOff else Icons.Default.Visibility,
                        contentDescription = null,
                    )
                }
            },
            shape = RoundedCornerShape(4.dp),
            colors = filledFieldColors(),
            modifier = Modifier.fillMaxWidth(),
        )

        Spacer(Modifier.height(32.dp))

        LoadingPrimaryButton(
            text = stringResource(R.string.login_button_login),
            isLoading = state.isLoading,
            onClick = { onLogin(url, email, password) },
        )
    }
}

@Composable
private fun LoadingPrimaryButton(
    text: String,
    isLoading: Boolean,
    onClick: () -> Unit,
) {
    Button(
        onClick = onClick,
        enabled = !isLoading,
        shape = RoundedCornerShape(8.dp),
        colors =
            ButtonDefaults.buttonColors(
                containerColor = Colors.Primary,
                contentColor = Color.White,
                disabledContainerColor = Colors.Primary.copy(alpha = 0.6f),
                disabledContentColor = Color.White,
            ),
    ) {
        if (isLoading) {
            CircularProgressIndicator(
                color = Color.White,
                strokeWidth = 2.dp,
                modifier = Modifier.size(20.dp),
            )
        } else {
            Text(
                text = text,
                fontSize = 18.sp,
                style = MaterialTheme.typography.labelLarge,
            )
        }
    }
}

@Composable
private fun filledFieldColors() =
    TextFieldDefaults.colors(
        focusedContainerColor = Colors.LightGray,
        unfocusedContainerColor = Colors.LightGray,
        disabledContainerColor = Colors.LightGray,
        errorContainerColor = Colors.LightGray,
        focusedIndicatorColor = Color.Transparent,
        unfocusedIndicatorColor = Color.Transparent,
        disabledIndicatorColor = Color.Transparent,
        errorIndicatorColor = Color.Transparent,
    )
