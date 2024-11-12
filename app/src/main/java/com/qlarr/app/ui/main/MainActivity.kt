package com.qlarr.app.ui.main

import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import com.qlarr.app.ui.login.LoginActivity
import com.qlarr.app.ui.main.ui.main.SurveyListScreen

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            SurveyListScreen(viewModelStoreOwner = this, onLogoutFinished = {
                startActivity(LoginActivity.createIntent(this))
                finish()
            })
        }
    }

    companion object {
        fun createIntent(context: Context): Intent = Intent(context, MainActivity::class.java)
    }

}
