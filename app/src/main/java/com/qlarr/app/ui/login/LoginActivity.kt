package com.qlarr.app.ui.login

import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.qlarr.app.ui.common.error.ErrorDisplayManager
import com.qlarr.app.ui.common.theme.QlarrTheme
import com.qlarr.app.ui.main.SurveyListActivity
import kotlinx.coroutines.launch
import org.koin.android.ext.android.inject
import org.koin.androidx.viewmodel.ext.android.getViewModel
import org.koin.core.parameter.parametersOf

class LoginActivity : AppCompatActivity() {

    private val viewModel: LoginViewModel by lazy { getViewModel() }
    private val errorDisplayManager: ErrorDisplayManager by inject { parametersOf(this) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        lifecycleScope.launch {
            viewModel.errors.collect(errorDisplayManager::displayError)
        }

        setContent {
            QlarrTheme {
                LoginScreen(
                    viewModel = viewModel,
                    onLoggedIn = {
                        startActivity(SurveyListActivity.createIntent(this@LoginActivity))
                        finish()
                    },
                    onExit = { finish() },
                )
            }
        }
    }

    companion object {
        fun createIntent(context: Context): Intent = Intent(context, LoginActivity::class.java)
    }
}
