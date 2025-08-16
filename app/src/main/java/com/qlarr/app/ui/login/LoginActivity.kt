package com.qlarr.app.ui.login


import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.activity.addCallback
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.qlarr.app.R
import com.qlarr.app.databinding.ActivityLoginBinding
import com.qlarr.app.ui.common.error.ErrorDisplayManager
import com.qlarr.app.ui.common.visibleOrGone
import com.qlarr.app.ui.main.MainActivity
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
            viewModel.loginState.collect { state ->
                binding.btnLogin.isLoading = state.isLoading
                if (state.backPressed){
                    finish()
                }

                binding.envSelector.visibleOrGone(state.selection == EnvSelection.NONE)
                binding.loginForm.visibleOrGone(state.selection != EnvSelection.NONE)
                binding.serverUrl.visibleOrGone(state.selection == EnvSelection.PRIVATE)

                if (state.isLoggedIn) {
                    startActivity(MainActivity.createIntent(this@LoginActivity))
                    finish()
                }

                if (state.emailValidationError) {
                    binding.usernameLayout.error =
                        binding.root.context.getString(R.string.validation_email_error)
                } else {
                    binding.usernameLayout.error = null
                }
                if (state.pswValidationError) {
                    binding.passwordLayout.error =
                        binding.root.context.getString(R.string.validation_psw_error)
                } else {
                    binding.passwordLayout.error = null
                }
                if (state.urlValidationError) {
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

    override fun onDestroy() {
        super.onDestroy()
    }

    companion object {
        private const val TAG = "Login"
        fun createIntent(context: Context): Intent = Intent(context, LoginActivity::class.java)
    }
}
