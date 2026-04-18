
<!-- markdownlint-disable line-length -->

# Contributing to Qlarr Android

Thank you for your interest in contributing to Qlarr Android!

## Development Setup

### Prerequisites

- **Android Studio** Arctic Fox or later
- **Android SDK** 24 (Nougat) or higher
- **Kotlin** 2.2.21
- **Gradle** 8.13+

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/qlarr-surveys/android
   cd android
   ```

2. Open the project in Android Studio

3. Sync Gradle dependencies

4. Build and run:

   ```bash
   ./gradlew assembleDebug
   ./gradlew installDebug
   ```

## Available Commands

| Command | Purpose |
| -------- | --------- |
| `./gradlew assembleDebug` | Build debug APK |
| `./gradlew assembleRelease` | Build release APK |
| `./gradlew installDebug` | Install on connected device |
| `./gradlew test` | Run unit tests |
| `./gradlew connectedAndroidTest` | Run instrumentation tests |

## Architecture

- **Offline-first**: All survey data stored locally
- **Room**: Local database persistence
- **Kotlin Coroutines**: Asynchronous operations
- **Material Design**: UI components

The Android app uses shared `survey-engine-kmp` (Kotlin Multiplatform) for core survey logic.

## Code Conventions

- Follow Kotlin coding conventions
- Use meaningful variable and function names
- Write unit tests for new features
- Document public APIs

## PR Title Format

PR titles should follow a consistent format:

- `fix:` - Bug fix
- `feat:` - New feature
- `refactor:` - Code refactoring
- `chore:` - Maintenance

Example: `fix: offline sync crash` or `feat: add new question type`

## Testing

Run unit tests:

```bash
./gradlew test
```

Run instrumentation tests:

```bash
./gradlew connectedAndroidTest
```

Test on both:

- Android Emulator
- Physical device (for hardware-specific features)

## Offline Functionality

When modifying offline features:

- Test without network connectivity
- Verify sync works when connectivity returns
- Check conflict resolution for multi-device scenarios

## Need Help?

Join our [Discord server](https://discord.gg/3exUNKwsET) to discuss with the team.
