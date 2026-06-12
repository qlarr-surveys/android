package com.qlarr.app.ui.responses

/**
 * The Detail-screen extras for one response, built lazily by [ResponsesViewModel.openDetail] from
 * survey structure: page-grouped answers + the navigation/answer timeline + the disqualified flag.
 * The screen pairs this with the **live** [ResponseItemData] looked up by [responseId] from the list
 * (so audio playback state, status and media counts stay current).
 */
data class ResponseDetailData(
    val responseId: String,
    val disqualified: Boolean,
    val answerPages: List<AnswerPage>,
    val timeline: List<TimelineEntry>,
)

/** A survey page ("P1 · Welcome") and the answer rows captured on it. */
data class AnswerPage(
    val title: String,
    val rows: List<AnswerRow>,
)

data class AnswerRow(
    val question: String,
    val answer: AnswerValue,
)

sealed interface AnswerValue {
    data class Text(
        val value: String,
    ) : AnswerValue

    /** Photo/video answer whose file is still on the device (pre-upload). */
    data class File(
        val data: ResponseValueData.FileValueData,
    ) : AnswerValue

    /** A file answer whose media was cleared from the device after upload. */
    data class Cleared(
        val filename: String,
    ) : AnswerValue

    /** A draft question with no value yet. */
    data object NotAnswered : AnswerValue
}

sealed interface TimelineEntry {
    /** Formatted absolute time of the event. */
    val timeLabel: String

    /** Time since the previous event ("+2.0s", "+1m 4s"), null for the first entry. */
    val delta: String?

    /** A navigation step (page → page) with the direction tag (START/NEXT/…). */
    data class Nav(
        val from: String,
        val to: String,
        val tag: String,
        override val timeLabel: String,
        override val delta: String?,
    ) : TimelineEntry

    /** An answer captured at a point in time. */
    data class Answer(
        val question: String,
        val value: String,
        override val timeLabel: String,
        override val delta: String?,
    ) : TimelineEntry
}
