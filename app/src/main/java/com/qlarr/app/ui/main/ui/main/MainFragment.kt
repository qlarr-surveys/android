package com.qlarr.app.ui.main.ui.main

import android.content.res.Configuration
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.GridLayoutManager
import com.qlarr.app.R
import com.qlarr.app.business.ByteSize
import com.qlarr.app.business.formatBytes
import com.qlarr.app.databinding.FragmentMainBinding
import com.qlarr.app.storage.DownloadState
import com.qlarr.app.ui.common.error.ErrorDisplayManager
import com.qlarr.app.ui.common.visibleOrGone
import com.qlarr.app.ui.responses.ResponsesActivity
import com.qlarr.app.ui.survey.SurveyActivity
import com.qlarr.app.ui.survey.SurveyInfoActivity
import kotlinx.coroutines.launch
import org.koin.android.ext.android.inject
import org.koin.androidx.viewmodel.ext.android.getViewModel
import org.koin.core.parameter.parametersOf

class MainFragment : Fragment() {

    private val viewModel: MainViewModel by lazy {
        getViewModel(ownerProducer = { requireActivity() })
    }
    private val errorDisplayManager: ErrorDisplayManager by inject { parametersOf(requireActivity()) }
    private lateinit var binding: FragmentMainBinding
    private lateinit var adapter: SurveyListAdapter
    private lateinit var gridLayoutManager: GridLayoutManager

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentMainBinding.inflate(inflater, container, false)

        adapter = SurveyListAdapter(
            onDownloadClicked = { surveyData ->
                viewModel.downloadSurveyForOffline(surveyData)
            },
            onPlayClicked = { surveyData ->
                startActivity(
                    SurveyActivity.createIntent(
                        requireContext(),
                        surveyData
                    )
                )
            },
            onResponsesClicked = { surveyData ->
                startActivity(
                    ResponsesActivity.createIntent(
                        requireContext(),
                        surveyData
                    )
                )
            },
            onInfoClicked = { surveyData ->
                startActivity(
                    SurveyInfoActivity.createIntent(binding.root.context, surveyData)
                )
            })
        binding.recycler.adapter = adapter
        gridLayoutManager =
            GridLayoutManager(binding.root.context, resources.configuration.getGridSpanCount())
        binding.recycler.layoutManager = gridLayoutManager

        lifecycleScope.launch {
            viewModel.state.collect { state ->
                binding.guestWarning.visibleOrGone(state.isGuest)
                if (!state.isLoading && state.surveyList.isEmpty()) {
                    binding.noSurveysAvailable.visibleOrGone(true)
                    binding.fetchingSurveysProgress.visibleOrGone(false)
                    binding.recycler.visibleOrGone(false)
                } else {
                    binding.noSurveysAvailable.visibleOrGone(false)
                    binding.fetchingSurveysProgress.visibleOrGone(state.isLoading)
                    binding.recycler.visibleOrGone(true)
                    adapter.submitList(state.surveyList.sortedBy { it.creationDate })
                }
            }
        }
        lifecycleScope.launch {
            viewModel.downloadState.collect { downloadState ->
                processDownloadState(downloadState)
            }
        }

        lifecycleScope.launch {
            viewModel.errors.collect { error ->
                errorDisplayManager.displayError(error)
            }
        }

        return binding.root
    }

    override fun onStart() {
        super.onStart()
        viewModel.syncData()
    }

    override fun onConfigurationChanged(newConfig: Configuration) {
        super.onConfigurationChanged(newConfig)
        gridLayoutManager.spanCount = newConfig.getGridSpanCount()
    }

    private fun Configuration.getGridSpanCount() =
        if (orientation == Configuration.ORIENTATION_PORTRAIT) {
            1
        } else {
            2
        }

    private fun processDownloadState(downloadState: DownloadState) {
        downloadState.run {
            binding.syncingProgressContainer.visibleOrGone(downloadState is DownloadState.Loading)
            if (downloadState !is DownloadState.Loading) {
                return@run
            } else {
                binding.syncingSurveyTitle.text =
                    getString(R.string.syncing_survey_title, downloadState.surveyName)
                binding.syncingSurveyFileOrder.visibleOrGone(downloadState.totalFilesCount > 0)
                binding.syncCurrentSize.visibleOrGone(downloadState.totalSize > 0)
                binding.syncTotalSize.visibleOrGone(downloadState.totalSize > 0)
                formatBytes(downloadState.totalSize).let { formatted ->
                    binding.syncTotalSize.text = getString(
                        if (formatted.byteSize == ByteSize.MEGA) R.string.megabytes else R.string.kilobytes,
                        formatted.value
                    )
                }
                formatBytes(downloadState.currentDownloadedSize).let { formatted ->
                    binding.syncCurrentSize.text = getString(
                        if (formatted.byteSize == ByteSize.MEGA) R.string.megabytes else R.string.kilobytes,
                        formatted.value
                    )
                }
                binding.syncingSurveyFileOrder.text = getString(
                    R.string.syncing_survey_file_order,
                    downloadState.downloadedFileCount + 1,
                    downloadState.totalFilesCount
                )
                binding.syncingProgress.max = 100
                binding.syncingProgress.post {
                    binding.syncingProgress.progress = downloadState.downloadPercent
                }
            }
        }

    }
}