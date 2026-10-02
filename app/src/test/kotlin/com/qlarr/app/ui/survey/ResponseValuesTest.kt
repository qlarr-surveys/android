package com.qlarr.app.ui.survey

import com.qlarr.surveyengine.model.exposed.ColumnName
import com.qlarr.surveyengine.model.exposed.ResponseField
import com.qlarr.surveyengine.model.exposed.ReturnType
import org.junit.Assert.assertEquals
import org.junit.Test

// labels keyed as the engine emits them: `<rootQuestion><answerCode>`. For an
// scq/mcq the root IS the question (`Q1A2`); for an array the columns live under
// the array root, not the row (`Q9Ac1`, NOT `Q9A1Ac1`).
private val labels =
    mapOf(
        "Q1A2" to "Option 2",
        "Q1A3" to "Option 3",
        "Q1Aother" to "Other",
        "Q9Ac1" to "Agree",
        "Q9Ac2" to "Disagree",
        "Q1A4" to "<b>Bold</b> option",
    )

private val enum = ReturnType.Enum(emptySet())
private val list = ReturnType.List(emptySet())

class ResolveListAndEnumValuesTest {
    @Test
    fun `enum resolves an scq answer code to its label`() {
        assertEquals("Option 2", resolveListAndEnumValues("A2", "Q1", enum, labels))
    }

    @Test
    fun `enum resolves an array_scq column code against the array root`() {
        // row Q9A1 stores column code "Ac1"; its label lives at Q9Ac1.
        assertEquals("Agree", resolveListAndEnumValues("Ac1", "Q9", enum, labels))
    }

    @Test
    fun `enum falls back to the raw code when no label exists`() {
        assertEquals("Azzz", resolveListAndEnumValues("Azzz", "Q1", enum, labels))
    }

    @Test
    fun `enum strips HTML tags from the resolved label`() {
        assertEquals("Bold option", resolveListAndEnumValues("A4", "Q1", enum, labels))
    }

    @Test
    fun `enum passes a non-string value through untouched`() {
        assertEquals(7, resolveListAndEnumValues(7, "Q1", enum, labels))
    }

    @Test
    fun `enum resolves a blank code to blank, not the question label`() {
        // Q9's own label would live at labels["Q9"]; an empty row answer must not
        // resolve to it. Regression for array_scq rows left unanswered.
        val withQuestionLabel = labels + ("Q9" to "How much do you agree?")
        assertEquals("", resolveListAndEnumValues("", "Q9", enum, withQuestionLabel))
        assertEquals(" ", resolveListAndEnumValues(" ", "Q9", enum, withQuestionLabel))
    }

    @Test
    fun `list resolves every code and comma-joins the labels`() {
        assertEquals(
            "Option 2, Option 3, Other",
            resolveListAndEnumValues(listOf("A2", "A3", "Aother"), "Q1", list, labels),
        )
    }

    @Test
    fun `list keeps unknown codes as-is within the joined list`() {
        assertEquals(
            "Option 2, Azzz",
            resolveListAndEnumValues(listOf("A2", "Azzz"), "Q1", list, labels),
        )
    }

    @Test
    fun `list passes a non-array value through untouched`() {
        assertEquals("A2", resolveListAndEnumValues("A2", "Q1", list, labels))
    }

    @Test
    fun `non-choice types return the raw value`() {
        assertEquals("free text", resolveListAndEnumValues("free text", "Q1", ReturnType.String, labels))
        assertEquals(42, resolveListAndEnumValues(42, "Q1", ReturnType.Double, labels))
        assertEquals(false, resolveListAndEnumValues(false, "Q1", ReturnType.Boolean, labels))
    }

    @Test
    fun `unknown dataType returns the raw value`() {
        assertEquals("x", resolveListAndEnumValues("x", "Q1", null, labels))
    }
}

class FormatInstructionsTest {
    @Test
    fun `getAllFormatInstructions returns every placeholder in document order`() {
        assertEquals(
            listOf("{{ Q1.value }}", "{{ Q2.value }}"),
            getAllFormatInstructions("You picked {{ Q1.value }} and {{ Q2.value }}."),
        )
    }

    @Test
    fun `replaceFormatInstructions substitutes the nth placeholder with its stored result`() {
        val state = mapOf("format_label_en_1" to "5", "format_label_en_2" to "apples")
        assertEquals(
            "You have 5 apples",
            replaceFormatInstructions("You have {{ x }} {{ y }}", state, "label", "en"),
        )
    }

    @Test
    fun `replaceFormatInstructions leaves a placeholder untouched when no stored result exists`() {
        val state = mapOf("format_label_en_1" to "5")
        assertEquals(
            "5 of {{ total }}",
            replaceFormatInstructions("{{ picked }} of {{ total }}", state, "label", "en"),
        )
    }

    @Test
    fun `replaceFormatInstructions passes text through when there are no placeholders`() {
        assertEquals(
            "plain label",
            replaceFormatInstructions("plain label", mapOf("format_label_en_1" to "x"), "label", "en"),
        )
    }

    @Test
    fun `replaceFormatInstructions returns the input untouched for null or blank or empty state`() {
        assertEquals(null, replaceFormatInstructions(null, mapOf("format_label_en_1" to "x"), "label", "en"))
        assertEquals("{{ x }}", replaceFormatInstructions("{{ x }}", emptyMap(), "label", "en"))
    }

    @Test
    fun `formatState slices the component prefix off the response values`() {
        val values =
            mapOf(
                "Q1.value" to "A2",
                "Q1.format_label_en_1" to "5",
                "Q2.value" to "x",
            )
        assertEquals(
            mapOf("value" to "A2", "format_label_en_1" to "5"),
            formatState(values, "Q1"),
        )
    }

    @Test
    fun `pickFormatLang prefers the response language when present`() {
        val state = mapOf("format_label_en_1" to "a", "format_label_de_1" to "b")
        assertEquals("de", pickFormatLang(state, "label", "de"))
    }

    @Test
    fun `pickFormatLang falls back to a stored language when the preferred one is absent`() {
        val state = mapOf("format_label_en_1" to "a")
        assertEquals("en", pickFormatLang(state, "label", "de"))
    }

    @Test
    fun `pickFormatLang falls back to the preferred language when nothing is stored`() {
        assertEquals("de", pickFormatLang(mapOf("value" to "x"), "label", "de"))
    }

    @Test
    fun `resolveLabelFormat strips HTML then substitutes the response's computed values`() {
        val values = mapOf("Q1.format_label_en_1" to "3")
        assertEquals(
            "You have 3 left",
            resolveLabelFormat("<b>You have {{ remaining }} left</b>", "Q1", values, "en"),
        )
    }

    @Test
    fun `resolveLabelFormat leaves a label without placeholders as plain stripped text`() {
        assertEquals(
            "How old are you?",
            resolveLabelFormat("<p>How old are you?</p>", "Q1", emptyMap(), "en"),
        )
    }
}

class IsEmptyAnswerTest {
    @Test
    fun `null, empty string and empty list count as empty`() {
        assertEquals(true, isEmptyAnswer(null))
        assertEquals(true, isEmptyAnswer(""))
        assertEquals(true, isEmptyAnswer(emptyList<String>()))
    }

    @Test
    fun `an actual answer does not count as empty`() {
        assertEquals(false, isEmptyAnswer("A2"))
        assertEquals(false, isEmptyAnswer(0))
        assertEquals(false, isEmptyAnswer(false))
        assertEquals(false, isEmptyAnswer(listOf("A2")))
    }
}

class ValueDataTypesTest {
    @Test
    fun `maps componentCode to dataType for VALUE fields only`() {
        val schema =
            listOf(
                ResponseField("Q1", ColumnName.VALUE, list),
                ResponseField("Q1", ColumnName.ORDER, ReturnType.Int),
                ResponseField("Q9A1", ColumnName.VALUE, enum),
                ResponseField("Q9A1", ColumnName.PRIORITY, ReturnType.Int),
            )
        assertEquals(
            mapOf("Q1" to list, "Q9A1" to enum),
            valueDataTypes(schema),
        )
    }

    @Test
    fun `returns an empty map when there are no VALUE fields`() {
        val schema = listOf(ResponseField("Q1", ColumnName.ORDER, ReturnType.Int))
        assertEquals(emptyMap<String, ReturnType>(), valueDataTypes(schema))
    }
}
