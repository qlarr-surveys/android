package com.qlarr.app.ui.launch

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.view.ViewGroup.LayoutParams.MATCH_PARENT
import androidx.appcompat.widget.SwitchCompat
import androidx.constraintlayout.widget.ConstraintLayout
import com.google.android.material.bottomsheet.BottomSheetBehavior
import com.qlarr.app.R
import com.qlarr.app.databinding.DialogConsentBinding
import com.qlarr.app.ui.common.gone
import com.qlarr.app.ui.common.visible


class ConsentView(context: Context) : ConstraintLayout(context) {

    private val binding = DialogConsentBinding.inflate(LayoutInflater.from(context), this)

    private val sheetBehavior: BottomSheetBehavior<View>
    private val switchList: List<SwitchCompat> =
        mutableListOf(binding.switchGoogleAnalytics, binding.switchCrashlytics)

    private fun anySelected() = switchList.any { it.isChecked }

    init {
        layoutParams = ViewGroup.LayoutParams(MATCH_PARENT, MATCH_PARENT)
        setBackgroundResource(R.color.black_10_percent)
        sheetBehavior = BottomSheetBehavior.from(binding.bottomSheet)
        sheetBehavior.isHideable = true
        sheetBehavior.state = BottomSheetBehavior.STATE_HIDDEN
        binding.tvDetailsAndSettings.setOnClickListener {
            sheetBehavior.state = BottomSheetBehavior.STATE_EXPANDED
        }
        binding.back.setOnClickListener {
            sheetBehavior.state = BottomSheetBehavior.STATE_HIDDEN
            binding.buttonConfirmChoices.text = context.getText(R.string.consent_approve)
        }
        sheetBehavior.peekHeight = 0


        switchList.forEach { switch ->
            switch.setOnCheckedChangeListener { _, _ ->
                onSwitchesChanged()
            }

        }

        sheetBehavior.addBottomSheetCallback(object : BottomSheetBehavior.BottomSheetCallback() {
            override fun onSlide(p0: View, p1: Float) {

            }

            override fun onStateChanged(p0: View, p1: Int) {
                if (shouldApproveAll(p1)) {
                    binding.buttonConfirmChoices.text = context.getText(R.string.consent_approve)
                } else {
                    onSwitchesChanged()
                }

            }
        })


    }

    fun shouldApproveAll(state: Int): Boolean {
        return state in listOf(
            BottomSheetBehavior.STATE_HIDDEN,
            BottomSheetBehavior.STATE_COLLAPSED,
            BottomSheetBehavior.STATE_HALF_EXPANDED
        )
    }

    fun setListenerAndShow(
        isCrashlyticsApproved: Boolean,
        isFirebaseAnalyticsApproved: Boolean,
        consentSettingsListener: ConsentSettingsListener
    ) {
        binding.buttonConfirmChoices.setOnClickListener {
            confirmChoices(consentSettingsListener)
        }
        binding.textIntro.setText(R.string.consent_intro)
        binding.switchCrashlytics.isChecked = isCrashlyticsApproved
        binding.switchGoogleAnalytics.isChecked = isFirebaseAnalyticsApproved

        binding.root.visible()

        visible()
    }

    private fun confirmChoices(consentSettingsListener: ConsentSettingsListener) {
        gone()
        if (shouldApproveAll(sheetBehavior.state)) {
            consentSettingsListener.setConsent(
                firebaseAnalytics = true,
                crashlytics = true
            )
        } else {
            consentSettingsListener.setConsent(
                binding.switchGoogleAnalytics.isChecked,
                binding.switchCrashlytics.isChecked
            )
        }
    }

    private fun onSwitchesChanged() {
        if (anySelected()) {
            binding.buttonConfirmChoices.text = context.getText(R.string.consent_confirm_choices)
        } else {
            binding.buttonConfirmChoices.text =
                context.getText(R.string.consent_confirm_without_tracking)
        }
    }

}

interface ConsentSettingsListener {
    fun setConsent(firebaseAnalytics: Boolean, crashlytics: Boolean)
}