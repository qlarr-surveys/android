package com.qlarr.app

import android.app.Application
import androidx.appcompat.app.AppCompatDelegate
import coil.ImageLoader
import coil.ImageLoaderFactory
import coil.request.CachePolicy
import com.qlarr.app.di.androidModule
import com.qlarr.app.di.guestModule
import com.qlarr.app.di.launchModule
import com.qlarr.app.di.loginModule
import com.qlarr.app.di.mainModule
import com.qlarr.app.di.refreshTokenModule
import com.qlarr.app.di.responsesModule
import com.qlarr.app.di.surveyModule
import org.koin.android.ext.koin.androidContext
import org.koin.core.context.startKoin

class App :
    Application(),
    ImageLoaderFactory {
    override fun onCreate() {
        super.onCreate()
        AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO)
        startKoin {
            androidContext(this@App)
            modules(
                androidModule,
                loginModule,
                launchModule,
                mainModule,
                refreshTokenModule,
                responsesModule,
                surveyModule,
                guestModule,
            )
        }
    }

    override fun newImageLoader(): ImageLoader =
        ImageLoader
            .Builder(this)
            .diskCachePolicy(CachePolicy.ENABLED)
            .memoryCachePolicy(CachePolicy.ENABLED)
            .crossfade(true)
            .build()
}
