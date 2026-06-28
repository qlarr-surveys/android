# Qlarr Android App

Android client for the Qlarr survey platform — an open-source, offline-first data collection tool.
Enumerators install the app, download published surveys, and collect responses anywhere, syncing to
the backend whenever connectivity returns.

## About Qlarr

Qlarr is an open-source survey platform designed for professional data collection with a focus on:

- **Offline-First Design**: Collect data anywhere without internet connectivity
- **Advanced Survey Logic**: Customize surveys with predictable and traceable state machine logic
- **Open-Source Freedom**: Complete control and uncompromised privacy
- **Cross-Platform Portability**: Seamlessly move surveys across platforms and devices
- **GDPR Compliance**: Full data privacy and compliance with GDPR standards

## The Qlarr Ecosystem

The Android app is one piece of a larger, survey-as-code ecosystem. Surveys are defined as JSON for
structure and JavaScript for logic, then executed consistently across web, Android, and iOS from a
single definition by a shared engine.

- **[frontend](https://github.com/qlarr-surveys/frontend)** — React WYSIWYG survey editor and web
  renderer
- **[backend](https://github.com/qlarr-surveys/backend)** — Spring Boot/Kotlin API for survey
  management, response sync, and GraalVM-powered logic evaluation
- **[survey-engine-kmp](https://github.com/qlarr-surveys/survey-engine-kmp)** — Kotlin Multiplatform
  survey engine (shared navigation and domain logic)
- **[survey-engine-script](https://github.com/qlarr-surveys/survey-engine-script)** — survey
  definition and scripting
- **android** — this repository: the offline-capable mobile data collection client

## Features

- Offline data collection with automatic background synchronization
- A wide range of question types
- Skip logic and relevance conditions
- Randomization and weighted sampling
- Built-in input validation
- Multilingual surveys and answer piping
- Customizable themes and branding
- AI-compatible JSON format for survey storage

## Tech Stack

- **Language:** Kotlin 2.2.21, targeting JVM 17
- **UI:** Jetpack Compose with Material 3 (Activities host Compose screens at navigation boundaries)
- **Dependency Injection:** Koin (feature-scoped modules)
- **Networking:** Retrofit 3 + Jackson, with automatic JWT refresh on `401`
- **Persistence:** Room 2.7 (offline-first local store)
- **Background Sync:** WorkManager with network constraints and exponential backoff
- **Images:** Coil
- **Survey Engine:** [survey-engine-kmp](https://github.com/qlarr-surveys/survey-engine-kmp)
- **Survey Rendering:** the React frontend is bundled as assets and rendered inside a custom
  `QlarrWebView`, which bridges to native code via a JavaScript interface

## Architecture

The app follows Clean Architecture with three layers:

- **Presentation** (`ui/`) — MVVM with ViewModels and Compose. Key flow:
  `LaunchActivity → LoginActivity → SurveyListActivity → SurveyActivity`.
- **Business** (`business/`) — use cases and repositories: session/token management, survey
  fetching, and the response sync pipeline.
- **Data** (`api/`, `db/`, `storage/`) — Retrofit for the REST API, Room for local persistence, and
  file storage for uploads.

Data flows offline-first: responses are stored locally first, then a WorkManager upload worker syncs
them to the backend once the device is online. Surveys themselves are rendered by the bundled React
app inside `QlarrWebView`, which communicates with native navigation via a JavaScript bridge.

## Getting Started

### Prerequisites

- Android Studio (current stable release)
- Android SDK 24 (Android 7.0 Nougat) or higher
- JDK 17
- Gradle is provided via the included wrapper (`./gradlew`)
- Node.js / npm and git — required to fetch and build the bundled React survey renderer (see below)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/qlarr-surveys/android.git
cd android
```

2. Fetch the React survey renderer (**required** — these assets are not committed to the repo, and
   surveys will not render without them):

```bash
./update_react_files.sh
```

3. Open the project in Android Studio

4. Sync Gradle dependencies

5. Build and run the application:
```bash
./gradlew assembleDebug
./gradlew installDebug
```

## Usage

You can collect against the hosted Qlarr Console or a self-hosted server.

**Using the hosted Console:**

1. Sign up at the Qlarr [Console](https://console.qlarr.com/) (also serves as a live demo)
2. Create a new survey, then publish it from settings
3. Run the Android app. On the Login page, choose **Login to Private Server**, and use your Console
   email credentials with server url `https://api.qlarr.com`
4. Collect responses offline
5. Sync data when connectivity is available

**Self-hosting (local server in ~30 seconds):**

```bash
git clone https://github.com/qlarr-surveys/frontend.git && cd frontend/deploy
docker compose -f docker-compose.local.yml up -d
```

This brings up the full stack — the Qlarr UI at `http://localhost:3000` and the backend API at
`http://localhost:8080` — with default credentials `admin@admin.admin` / `admin`. Use the UI to
create and publish a survey, then point the app's **Login to Private Server** at the backend API
url to collect against it (from the Android emulator, reach the host machine via
`http://10.0.2.2:8080`). To stop the stack, run
`docker compose -f docker-compose.local.yml down`.

See the [deployment guide](https://qlarr-surveys.github.io/docs/guides/deployment/local) for full
details.

### Offline Data Collection

The app is designed to work seamlessly in offline environments:

- All survey data is stored locally
- Automatic synchronization when network becomes available
- Conflict resolution for multi-device scenarios

## Development

### Project Structure

```
android/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   ├── assets/react-app/   # bundled React survey renderer
│   │   │   ├── res/
│   │   │   └── AndroidManifest.xml
│   │   └── test/
│   └── build.gradle
├── gradle/
└── build.gradle
```

### React Assets

The bundled React renderer in `app/src/main/assets/react-app/` is generated, not edited by hand, and
is **not checked into the repository** (it is git-ignored). You must run the fetch script after
cloning — and any time you want the latest renderer — before building:

```bash
./update_react_files.sh
```

The script clones the [frontend](https://github.com/qlarr-surveys/frontend) repo, runs
`npm install`, builds the production and debug bundles, and copies them into
`app/src/main/assets/react-app/` and `app/src/debug/assets/react-app/`. It requires git and
Node.js/npm.

### Building from Source

To build the release version:

```bash
./gradlew assembleRelease
```

To run tests:

```bash
./gradlew test
./gradlew connectedAndroidTest
```

## Contributing

We welcome contributions to the Qlarr Android app! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more information.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow Kotlin coding conventions
- Use meaningful variable and function names
- Write unit tests for new features
- Document public APIs

## Testing

### Unit Tests

```bash
./gradlew test
```

### Instrumentation Tests

```bash
./gradlew connectedAndroidTest
```

## License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0) - see the [LICENSE](LICENSE) file for details.

The AGPL-3.0 license ensures that:
- You have the freedom to use, modify, and distribute this software
- Any modifications must be released under the same license
- Network use triggers source code disclosure requirements
- The software remains free and open for all users

## Related Projects

- [frontend](https://github.com/qlarr-surveys/frontend) - WYSIWYG survey editor and web renderer
- [backend](https://github.com/qlarr-surveys/backend) - Backend infrastructure
- [survey-engine-kmp](https://github.com/qlarr-surveys/survey-engine-kmp) - Kotlin Multiplatform survey engine
- [survey-engine-script](https://github.com/qlarr-surveys/survey-engine-script) - Survey definition scripting

## Resources

- [Qlarr Website](https://www.qlarr.com)
- [Live Demo / Console](https://console.qlarr.com/)
- [Documentation](https://qlarr-surveys.github.io/docs/)
- [Documentation (legacy)](https://docs.qlarr.com)
- [API Reference](https://api.qlarr.com)

## Support

For questions, issues, or feature requests:

- Join the [Discord community](https://discord.gg/9mbRh6SpGj)
- Open an issue on [GitHub Issues](https://github.com/qlarr-surveys/android/issues)
- Visit our [community forum](https://community.qlarr.com)
- Check the [FAQ](https://www.qlarr.com/faq)

## Acknowledgments

Built with modern Android development tools and libraries:

- Kotlin and Coroutines
- Jetpack Compose and Material 3
- Koin for dependency injection
- Retrofit and Jackson for networking
- Room for local data persistence
- WorkManager for background synchronization

## Roadmap

Upcoming features and improvements:

- Enhanced offline capabilities
- Additional question types
- Improved data visualization
- Advanced analytics integration
- Multi-language support enhancements

---

**Qlarr** - Open Source, Offline-First Survey Platform

For more information, visit [qlarr.com](https://www.qlarr.com)
