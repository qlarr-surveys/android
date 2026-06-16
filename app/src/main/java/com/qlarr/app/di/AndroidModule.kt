package com.qlarr.app.di

import android.app.NotificationManager
import android.content.Context
import androidx.work.WorkManager
import com.qlarr.app.EventBus
import com.qlarr.app.EventBusImpl
import com.qlarr.app.business.settings.SharedPrefsManager
import com.qlarr.app.business.settings.SharedPrefsManagerImpl
import com.qlarr.app.business.survey.BackgroundSync
import com.qlarr.app.business.survey.BackgroundSyncImpl
import com.qlarr.app.business.survey.SessionManager
import com.qlarr.app.business.survey.SessionManagerImpl
import com.qlarr.app.db.QlarrDb
import com.qlarr.app.ui.common.ConnectivityChecker
import com.qlarr.app.ui.common.ConnectivityCheckerImpl
import com.qlarr.app.ui.common.error.ErrorDisplayManager
import com.qlarr.app.ui.common.error.ErrorDisplayManagerImpl
import com.qlarr.app.ui.common.error.ErrorProcessor
import com.qlarr.app.ui.common.error.ErrorProcessorImpl
import com.qlarr.app.ui.notification.QlarrNotificationManager
import com.qlarr.app.ui.notification.QlarrNotificationManagerImpl
import org.koin.android.ext.koin.androidContext
import org.koin.core.qualifier.named
import org.koin.dsl.module

val androidModule = module {
    single(named("appContext")) { androidContext() }
    single<EventBus> { EventBusImpl() }
    single<SharedPrefsManager> { SharedPrefsManagerImpl(get()) }
    single<SessionManager> { SessionManagerImpl(get()) }
    single { QlarrDb.getDatabase(get(named("appContext"))) }
    single { get<QlarrDb>().surveyDataDao() }
    single { get<QlarrDb>().responseDao() }
    single<NotificationManager> {
        get<Context>(named("appContext"))
            .getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
    }
    single<QlarrNotificationManager> {
        QlarrNotificationManagerImpl(get(named("appContext")), get())
    }
    single { WorkManager.getInstance(get()) }
    single<BackgroundSync> { BackgroundSyncImpl(get()) }
    single<ConnectivityChecker> { ConnectivityCheckerImpl(get()) }
    factory<ErrorProcessor> { ErrorProcessorImpl(get()) }
    factory<ErrorDisplayManager> { (context: Context) -> ErrorDisplayManagerImpl(context, get()) }
}
