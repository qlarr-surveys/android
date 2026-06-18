package com.qlarr.app.ui.login

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.qlarr.app.R
import com.qlarr.app.ui.common.theme.Colors

@Composable
fun InitialScreen(
    onLoginPrivate: () -> Unit,
    onBrowseExamples: () -> Unit,
) {
    Column(
        modifier =
            Modifier
                .fillMaxSize()
                .background(Colors.White)
                .statusBarsPadding()
                .navigationBarsPadding(),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Spacer(Modifier.weight(1f))
        Image(
            painter = painterResource(R.drawable.logo512),
            contentDescription = null,
            modifier = Modifier.size(76.dp),
        )
        Spacer(Modifier.height(40.dp))
        Text(
            text = stringResource(R.string.welcome_title),
            color = Colors.BrandNavy,
            fontSize = 38.sp,
            fontWeight = FontWeight.Bold,
            fontFamily = FontFamily.SansSerif,
            textAlign = TextAlign.Center,
            modifier = Modifier.padding(horizontal = 36.dp),
        )
        Spacer(Modifier.height(10.dp))
        Text(
            text = stringResource(R.string.welcome_tagline),
            color = Colors.Muted,
            fontSize = 20.sp,
            lineHeight = 28.sp,
            fontFamily = FontFamily.SansSerif,
            textAlign = TextAlign.Center,
            modifier = Modifier.padding(horizontal = 36.dp),
        )

        Spacer(Modifier.weight(1.8f))

        Column(
            modifier =
                Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 28.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            PrimaryActionButton(
                text = stringResource(R.string.login_to_private),
                onClick = onLoginPrivate,
            )
            OutlinedActionButton(
                text = stringResource(R.string.login_as_guest),
                onClick = onBrowseExamples,
            )
        }
        Spacer(Modifier.height(40.dp))
    }
}

@Composable
private fun PrimaryActionButton(
    text: String,
    onClick: () -> Unit,
) {
    Button(
        onClick = onClick,
        shape = RoundedCornerShape(14.dp),
        colors =
            ButtonDefaults.buttonColors(
                containerColor = Colors.Primary,
                contentColor = Color.White,
            ),
        contentPadding = PaddingValues(horizontal = 16.dp),
        modifier =
            Modifier
                .fillMaxWidth()
                .height(52.dp)
                .shadow(
                    elevation = 8.dp,
                    shape = RoundedCornerShape(14.dp),
                    spotColor = Colors.Primary.copy(alpha = 0.55f),
                    ambientColor = Colors.Primary.copy(alpha = 0.55f),
                ),
    ) {
        Text(
            text = text,
            fontSize = 16.sp,
            fontWeight = FontWeight.SemiBold,
            letterSpacing = 0.1.sp,
            fontFamily = FontFamily.SansSerif,
        )
    }
}

@Composable
private fun OutlinedActionButton(
    text: String,
    onClick: () -> Unit,
) {
    OutlinedButton(
        onClick = onClick,
        shape = RoundedCornerShape(14.dp),
        border = BorderStroke(1.5.dp, Colors.Primary),
        colors =
            ButtonDefaults.outlinedButtonColors(
                contentColor = Colors.Primary,
            ),
        contentPadding = PaddingValues(horizontal = 16.dp),
        modifier =
            Modifier
                .fillMaxWidth()
                .height(52.dp),
    ) {
        Text(
            text = text,
            fontSize = 16.sp,
            fontWeight = FontWeight.SemiBold,
            letterSpacing = 0.1.sp,
            fontFamily = FontFamily.SansSerif,
        )
    }
}
