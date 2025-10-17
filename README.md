# Qlarr Android App

Android application for the Qlarr survey platform - an open-source, offline-first data collection tool.

## About Qlarr

Qlarr is an open-source survey platform designed for professional data collection with a focus on:

- **Offline-First Design**: Collect data anywhere without internet connectivity
- **Advanced Survey Logic**: Customize surveys with predictable and traceable state machine logic
- **Open-Source Freedom**: Complete control and uncompromised privacy
- **Cross-Platform Portability**: Seamlessly move surveys across platforms and devices
- **GDPR Compliance**: Full data privacy and compliance with GDPR standards

## Features

- Offline data collection and synchronization
- Support for various question types
- Skip logic and relevance conditions
- Randomization and weighted sampling
- Built-in data validation
- Real-time tracking and monitoring
- Customizable themes and branding
- AI-compatible JSON format for survey storage

## Architecture

The Qlarr Android app is part of the broader Qlarr ecosystem:

- **survey-engine-kmp**: Kotlin Multiplatform survey engine (shared logic)
- **survey-engine-script**: Survey definition and scripting
- **backend**: Server infrastructure for data synchronization
- **android**: This repository - Android mobile application

## Getting Started

### Prerequisites

- Android Studio Arctic Fox or later
- Android SDK 21 (Lollipop) or higher
- Kotlin 1.9+
- Gradle 8.0+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/qlarr-surveys/android.git
cd android
```

2. Open the project in Android Studio

3. Sync Gradle dependencies

4. Build and run the application:
```bash
./gradlew assembleDebug
./gradlew installDebug
```

## Usage

### Creating and Deploying Surveys

1. Signup at Qlarr [Console](https://console.qlarr.com/)
2. Create a new survey, make sure to publish it from settings
3. Run android app, on Login page click on Login to Private Server, use your console email credentials and server url = https://api.qlarr.com
4. Collect responses offline
5. Sync data when connectivity is available

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
│   │   │   ├── res/
│   │   │   └── AndroidManifest.xml
│   │   └── test/
│   └── build.gradle
├── gradle/
└── build.gradle
```

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

- [survey-engine-kmp](https://github.com/qlarr-surveys/survey-engine-kmp) - Kotlin Multiplatform survey engine
- [survey-engine-script](https://github.com/qlarr-surveys/survey-engine-script) - Survey definition scripting
- [backend](https://github.com/qlarr-surveys/backend) - Backend infrastructure

## Resources

- [Qlarr Website](https://www.qlarr.com)
- [Documentation](https://docs.qlarr.com)
- [API Reference](https://api.qlarr.com)

## Support

For questions, issues, or feature requests:

- Open an issue on [GitHub Issues](https://github.com/qlarr-surveys/android/issues)
- Visit our [community forum](https://community.qlarr.com)
- Check the [FAQ](https://www.qlarr.com/faq)

## Acknowledgments

Built with modern Android development tools and libraries:

- Kotlin for Android development
- Android Jetpack components
- Room for local data persistence
- Coroutines for asynchronous operations
- Material Design components

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
