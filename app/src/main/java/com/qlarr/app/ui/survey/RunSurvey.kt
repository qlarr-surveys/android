package com.qlarr.app.ui.survey

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.Parcelable
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material3.DrawerValue
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.ModalDrawerSheet
import androidx.compose.material3.ModalNavigationDrawer
import androidx.compose.material3.NavigationDrawerItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.rememberDrawerState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp
import com.qlarr.app.business.parcelable
import com.qlarr.app.business.survey.SurveyData
import kotlinx.coroutines.launch
import org.koin.androidx.viewmodel.ext.android.viewModel
import org.koin.core.parameter.parametersOf

class RunSurveyActivity : ComponentActivity() {
    private val survey: SurveyData
        get() =
            intent.parcelable(EXTRA_SURVEY)
                ?: throw IllegalArgumentException("Survey is required")

    private val viewModel: RunSurveyViewModel by viewModel { parametersOf(survey) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                NavigationDrawerApp()
            }
        }
    }

    companion object {
        private const val TAG = "RunSURVEY"
        private const val EXTRA_SURVEY = "survey"
        private const val RESPONSE_ID = "response_id"

        fun createIntent(
            context: Context,
            survey: SurveyData,
        ): Intent =
            Intent(context, SurveyActivity::class.java).apply {
                putExtra(EXTRA_SURVEY, survey as Parcelable)
            }

        fun createIntent(
            context: Context,
            survey: SurveyData,
            responseId: String,
        ): Intent =
            Intent(context, SurveyActivity::class.java).apply {
                putExtra(EXTRA_SURVEY, survey as Parcelable)
                putExtra(RESPONSE_ID, responseId)
            }
    }
}

data class DrawerItem(
    val title: String,
    val icon: ImageVector,
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun NavigationDrawerApp() {
    val drawerState = rememberDrawerState(initialValue = DrawerValue.Closed)
    val scope = rememberCoroutineScope()
    var selectedItem by remember { mutableStateOf("Home") }

    val drawerItems =
        listOf(
            DrawerItem("Home", Icons.Default.Home),
            DrawerItem("Profile", Icons.Default.Person),
            DrawerItem("Settings", Icons.Default.Settings),
        )

    ModalNavigationDrawer(
        drawerState = drawerState,
        drawerContent = {
            ModalDrawerSheet {
                Column(modifier = Modifier.padding(16.dp)) {
                    drawerItems.forEach { item ->
                        NavigationDrawerItem(
                            icon = { Icon(item.icon, contentDescription = null) },
                            label = { Text(item.title) },
                            selected = selectedItem == item.title,
                            onClick = {
                                selectedItem = item.title
                                scope.launch { drawerState.close() }
                            },
                        )
                    }
                }
            }
        },
    ) {
        Scaffold(
            topBar = {
                TopAppBar(
                    title = { Text(selectedItem) },
                    navigationIcon = {
                        IconButton(onClick = {
                            scope.launch { drawerState.open() }
                        }) {
                            Icon(Icons.Default.Menu, contentDescription = "Menu")
                        }
                    },
                )
            },
        ) { paddingValues ->
            Box(modifier = Modifier.padding(paddingValues)) {
                Text("Content for $selectedItem")
            }
        }
    }
}
