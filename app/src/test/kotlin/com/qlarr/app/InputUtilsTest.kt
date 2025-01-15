package com.qlarr.app

import com.qlarr.app.ui.common.InputUtils.trimServerUrl
import org.junit.Assert
import org.junit.Test

class InputUtilsTest {
    @Test
    fun trimServerUrlTest() {
        Assert.assertEquals(trimServerUrl(SERVER_NAME), SERVER_NAME)
        Assert.assertEquals(trimServerUrl("$SERVER_NAME  "), SERVER_NAME)
        Assert.assertEquals(trimServerUrl("$SERVER_NAME/"), SERVER_NAME)
        Assert.assertEquals(trimServerUrl("$SERVER_NAME  //"), SERVER_NAME)
        Assert.assertEquals(trimServerUrl("$SERVER_NAME  //   "), SERVER_NAME)
        Assert.assertEquals(trimServerUrl("   $SERVER_NAME  //   "), SERVER_NAME)
    }

    companion object {
        private const val SERVER_NAME = "https://stg.api.qlarr.com"
    }
}
