package com.qlarr.app.ui.main

import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.runtime.LaunchedEffect
import com.qlarr.app.ui.login.LoginActivity
import com.qlarr.app.ui.main.ui.main.SurveyListScreen
import com.qlarr.app.ui.main.ui.main.SurveyListViewModel
import com.qlarr.app.ui.main.ui.main.SurveyListViewModel.UiEvents
import org.koin.androidx.compose.koinViewModel

class SurveyListActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val viewModel = koinViewModel<SurveyListViewModel>(viewModelStoreOwner = this)
            LaunchedEffect(Unit) {
                viewModel.uiEvents.collect { event ->
                    if (event is UiEvents.GoToLogin) {
                        startActivity(LoginActivity.createIntent(this@SurveyListActivity))
                        finish()
                    }
                }
            }

            SurveyListScreen(viewModel = viewModel)
        }
    }

    companion object Companion {
        fun createIntent(context: Context): Intent = Intent(context, SurveyListActivity::class.java)
    }
}
