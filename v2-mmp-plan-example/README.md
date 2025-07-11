# Airbridge React Native v2 MMP Plan Example

## Getting Started

### Prerequisites

#### Android

- Install Android Studio
- Install Android SDK and set up environment variables
- Android emulator or physical Android device

#### iOS (macOS only)

- Install Xcode
- iOS simulator or physical iOS device

### How to run
1. Install dependencies
    ```bash
    npm install
    ```
2. Install iOS dependencies (Required only for iOS development)
    ```bash
    cd ios
    pod install
    ```
    Note: Android dependencies are installed automatically.
3. Run the application
   
   Run on Android:
    ```bash
    npx react-native run-android
    ```
   Run on iOS:
    ```bash
    npx react-native run-ios
    ```

## Test guide

### Sending Events
How to send events**
Click `Send Event` button to send event

**Check on Real-time Logs**
<img src="./screenshot/Screenshot_track_event_log.png"  width="1000">

Event information sent from the Airbridge SDK should be seen in the "Airbridge dashboard → `Raw Data` → `App Real-time Log`" tab.

### Deeplink settings
To set up a deep link, refer to the [Deep Link Setup](https://help.airbridge.io/en/developers/react-native-sdk#deep-link-setup) link

### Deeplink test
You can test deep links using the following two methods:
1. Click on a custom scheme deep link starting with exabr:// with airbridge_referrer query parameter (e.g., exabr://example?airbridge_referrer=value)
2. Click on the Airbridge tracking link: https://abr.ge/4mw2j8

Confirm that the app launches and displays the deep link information.