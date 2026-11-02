package com.qlarr.app.api.auth

import com.qlarr.app.api.survey.objectMapper
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class LoginResponseTest {
    @Test
    fun `a rotating refresh response carries the new refresh token`() {
        val response =
            objectMapper.readValue(
                """
                {"id": "u1", "firstName": "Ada", "lastName": "Lovelace",
                 "accessToken": "AT2", "refreshToken": "RT2",
                 "email": "ada@example.com", "roles": ["SURVEYOR"]}
                """,
                LoginResponse::class.java,
            )
        assertEquals("AT2", response.activeToken)
        assertEquals("RT2", response.refreshToken)
    }

    @Test
    fun `a grace refresh response omits the refresh token`() {
        val response =
            objectMapper.readValue(
                """
                {"id": "u1", "firstName": "Ada", "lastName": "Lovelace",
                 "accessToken": "AT3",
                 "email": "ada@example.com", "roles": ["SURVEYOR"]}
                """,
                LoginResponse::class.java,
            )
        assertEquals("AT3", response.activeToken)
        assertNull(response.refreshToken)
    }

    @Test
    fun `a login response carries both tokens`() {
        val response =
            objectMapper.readValue(
                """
                {"id": "u1", "firstName": "Ada", "lastName": "Lovelace",
                 "accessToken": "AT1", "refreshToken": "RT1",
                 "email": "ada@example.com", "roles": ["SURVEYOR"]}
                """,
                LoginResponse::class.java,
            )
        assertEquals("AT1", response.activeToken)
        assertEquals("RT1", response.refreshToken)
    }
}
