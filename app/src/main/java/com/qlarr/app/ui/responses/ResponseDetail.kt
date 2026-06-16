package com.qlarr.app.ui.responses

data class ResponseDetailData(
    val responseId: String,
    val disqualified: Boolean,
    val answerPages: List<AnswerPage>,
    val timeline: List<TimelineEntry>,
)

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

    data class File(
        val data: ResponseValueData.FileValueData,
    ) : AnswerValue

    data class Cleared(
        val filename: String,
    ) : AnswerValue

    data object NotAnswered : AnswerValue
}

sealed interface TimelineEntry {
    val timeLabel: String

    val delta: String?

    data class Nav(
        val from: String,
        val to: String,
        val tag: String,
        override val timeLabel: String,
        override val delta: String?,
    ) : TimelineEntry

    data class Answer(
        val question: String,
        val value: String,
        override val timeLabel: String,
        override val delta: String?,
    ) : TimelineEntry
}
