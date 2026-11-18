package com.qlarr.app

import android.app.Application
import androidx.appcompat.app.AppCompatDelegate
import coil3.ImageLoader
import coil3.PlatformContext
import coil3.SingletonImageLoader
import coil3.request.CachePolicy
import coil3.request.crossfade
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
    SingletonImageLoader.Factory {
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

    override fun newImageLoader(context: PlatformContext): ImageLoader =
        ImageLoader
            .Builder(context)
            .diskCachePolicy(CachePolicy.ENABLED)
            .memoryCachePolicy(CachePolicy.ENABLED)
            .crossfade(true)
            .build()
}
