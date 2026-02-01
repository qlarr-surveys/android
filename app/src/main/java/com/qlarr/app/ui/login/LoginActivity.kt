package com.qlarr.app.ui.login


import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.activity.addCallback
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.qlarr.app.R
import com.qlarr.app.business.survey.BackendEnvironment
import com.qlarr.app.databinding.ActivityLoginBinding
import com.qlarr.app.ui.common.error.ErrorDisplayManager
import com.qlarr.app.ui.common.visibleOrGone
import com.qlarr.app.ui.main.SurveyListActivity
import kotlinx.coroutines.launch
import org.koin.android.ext.android.inject
import org.koin.androidx.viewmodel.ext.android.getViewModel
import org.koin.core.parameter.parametersOf

class LoginActivity : AppCompatActivity() {

    private val viewModel: LoginViewModel by lazy { getViewModel() }
    private val errorDisplayManager: ErrorDisplayManager by inject { parametersOf(this) }
    private lateinit var binding: ActivityLoginBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.tryGuestButton.setOnClickListener { viewModel.tryAsGuest() }
        binding.useHosted.setOnClickListener { viewModel.setEnvSelection(EnvSelection.PRIVATE) }

        binding.btnLogin.setLifecycle(lifecycle)
        binding.btnLogin.setOnClickListener {
            viewModel.login(
                binding.serverUrl.text.toString(),
                binding.username.text.toString(),
                binding.password.text.toString()
            )
        }
        lifecycleScope.launch {
            viewModel.loginEvents.collect {
                when(it){
                    LoginEvents.Exit -> finish()
                    LoginEvents.LoggedIn ->{
                        startActivity(SurveyListActivity.createIntent(this@LoginActivity))
                        finish()
                    }
                }
            }
        }

        lifecycleScope.launch {
            viewModel.loginState.collect { state ->
                binding.btnLogin.isLoading = state.isLoading
                binding.envSelector.visibleOrGone(state.selection == EnvSelection.NONE)
                binding.loginForm.visibleOrGone(state.selection != EnvSelection.NONE)
                binding.serverUrl.visibleOrGone(state.selection == EnvSelection.PRIVATE)

                // Pre-fill and disable server URL if locked to previous environment
                if (state.lockedToPreviousEnv && state.previousSession?.environment is BackendEnvironment.Private) {
                    binding.serverUrl.setText(state.previousSession.environment.baseUrl)
                    binding.serverUrl.isEnabled = false
                } else {
                    binding.serverUrl.isEnabled = true
                }

                if (state.showSessionConflictDialog) {
                    showSessionConflictDialog(state.previousSession)
                }

                if (state.inputValidation.emailValidationError) {
                    binding.usernameLayout.error =
                        binding.root.context.getString(R.string.validation_email_error)
                } else {
                    binding.usernameLayout.error = null
                }
                if (state.inputValidation.pswValidationError) {
                    binding.passwordLayout.error =
                        binding.root.context.getString(R.string.validation_psw_error)
                } else {
                    binding.passwordLayout.error = null
                }
                if (state.inputValidation.urlValidationError) {
                    binding.serverUrlLayout.error =
                        binding.root.context.getString(R.string.validation_url_error)
                } else {
                    binding.serverUrlLayout.error = null
                }
            }
        }
        lifecycleScope.launch {
            viewModel.errors.collect { error ->
                errorDisplayManager.displayError(error)
            }
        }
        setupBackPress()
    }

    private fun setupBackPress() {
        onBackPressedDispatcher.addCallback {
            viewModel.onBackPressed()
        }
    }

    private fun showSessionConflictDialog(previousSession: PreviousSessionInfo?) {
        val userName = previousSession?.userName ?: getString(R.string.session_conflict_unknown_user)
        val envName = when (val env = previousSession?.environment) {
            is BackendEnvironment.Private -> env.baseUrl
            is BackendEnvironment.Guest -> getString(R.string.session_conflict_guest_env)
            null -> getString(R.string.session_conflict_unknown_env)
        }

        AlertDialog.Builder(this)
            .setTitle(R.string.session_conflict_dialog_title)
            .setMessage(getString(R.string.session_conflict_dialog_message, userName, envName))
            .setPositiveButton(getString(R.string.session_conflict_continue_button, envName)) { dialog, _ ->
                viewModel.onContinueWithPreviousEnv()
                dialog.dismiss()
            }
            .setNegativeButton(R.string.session_conflict_reset_button) { dialog, _ ->
                viewModel.onResetSession()
                dialog.dismiss()
            }.setOnCancelListener {
                viewModel.cancelSessionConflictDialog()
            }
            .show()
    }

    override fun onDestroy() {
        super.onDestroy()
    }

    companion object {
        private const val TAG = "Login"
        fun createIntent(context: Context): Intent = Intent(context, LoginActivity::class.java)
    }
}
