### 2024.01.18 [v8.4.3]

```
feat(android,ios): implement new player identifiers and access to team id consistent across developer apps (resolves #241)
feat(android, ios): add the playerId deprecated value on a player to access the deprecated identifier for migration to the newer identifiers
feat(ios): update AuthUtil.getToken to use new game center fetchItemsForIdentityVerificationSignature (#241)
feat(ios): update AuthUtil.getToken to allow usage of the legacy implementation (#241)

Note: If you need access to the deprecated identifier on iOS to migrate players you can use `player.playerId`
```

### 2023.08.17 [v8.3.0]

```
feat(android): Huawei Game Service v6.10.0.300 integration (sign in, leaderboards, achievements) (resolves #225)
fix(gamecenter): fix crash if called initialise multiple times 
feat(docs): update docs to separate services and add documentation for huawei
```

### 2023.07.05 [v8.2.0]

```
feat(android): update to google game services v23.1.0
feat(android): air background thread handling
feat(gamecenter, docs, airpackage): add game center capability setup process and addition to entitlements (resolves #233)
```

### 2023.01.27 [v8.1.1]

```
fix(air): reverted extension namespace to air 33.1
```

### 2023.01.20 [v8.1.0]

```
feat(ios): Xcode 14 update, remove bitcode and add no-objc-msgsend-selector-stubs compiler flag
```

### 2022.12.15 [v8.0.5]

```
fix(desktop): fix issue with isSupported flag with adl on macOS
```

### 2022.11.14 [v8.0.4]

```
fix(airpackage,docs): fix missing queries manifest additions required to check Play Games install state (resolves #227)
```

### 2022.03.22 [v8.0.3]

```
Correct missing dependency in air package (resolves #214)
```

### 2022.03.11 [v8.0.2]

```
Fix for issue creating save games caused by an undocumented Play Games change (resolves #210)
```

### 2022.03.08 [v8.0.0]

```
Android: Update Google Play Games to v22.0.1 (#210, #203)
Android: Update for Android 31
macOS: Initial implementation of Game Center

Add descriptions to air package
Update docs to use apm and additions for Android 31
```

### 2021.09.28 [v7.2.7]

```
Corrected timestamp negative value issues (resolves #204)
```

### 2021.09.01 [v7.2.2]

```
Added leaderboard score tags to add context to a score entry
Added airpackage
```



### 2021.08.11 [v7.1.13]

```
Updated documentation around adding Google Play Games app id to manifest (resolves #199)
```


### 2021.07.19 [v7.1.11]

```
Removed ios minimum version flag
```


### 2021.03.03 [v7.1.009]

```
Added Access Point functionality for Game Center on iOS 14+
Added generic show UI functionality to show dashboard elements (resolves #189) 
```


### 2021.01.20 [v7.0.005]

```
Updated Google Play Games to v21.0.0
 - Deprecated Google related multiplayer functionality  

```


### 2020.09.01 [v6.3.001]

```
Updated Google Play Games to v20.0.1
```


### 2020.07.09 [v6.2.062]

```
Implemented automatic sign in continuation after GPG installation
Added isGooglePlayGamesInstalled flag (resolves #177)
```


### 2020.06.30 [v6.1.056]

```
Updated to Google Play Games v19.0.0 
Clarified documentation around sign out events (resolves #176)
Removed additional permission request that isn't required for Google Play Games to simplify sign in process (resolves #166)
Removed pre-check of Play Games app for isServiceSupported check allowing display of the “Install Google Play Games” dialog (resolves #173)
```


### 2020.03.22 [v6.0.033]

```
Android X migration (resolves #164)
Android: Play Games: Fixed issue with id token not refreshing (resolves #161)
```


### 2020.02.26 [v5.1.026]

```
Documentation update + minor AuthUtil updates
```


### 2019.12.11 [v5.1.020]

```
Android: Added checks for saved game data (resolves #158)
Android: Better handling of achievements and leaderboard ui display
Android: Added additional checks for support for Google Play games 
```


### 2019.09.05 [v5.0.011]

```
Android 64bit support (resolves #146)
Updated minimum iOS version to 9.0
Added checks for null pointer (#144)
Android: Corrected UI element display when not calling signIn (resolves #147)
Corrected TBM rematch functionality (resolves #151)  
Embedded iOS bitcode
Added GoogleSignInStatusCode to sign in failed event (resolves #145)
Game Center corrected dismiss match when not active player turn (resolves #154)
```


### 2019.02.21 [v4.3.224]

```
Updated minimum iOS version option
```


### 2019.02.21 [v4.3.223]

```
Corrected missing class from default implementation (resolves #140)
```


### 2019.01.14 [v4.3.222]

```
Add loadPlayer method for asynchronous player information retrieval (resolves #132)
```


### 2019.01.07 [v4.2.213]

```
Android: Ensured sign in call always dispatches event (resolves #135)
```


### 2018.11.27 [v4.2.206]

```
Updated to Google Play Services v16.0.5 
Removed application keys 
```


### 2018.11.18 [v4.1.204]

```
Updated documentation
```


### 2018.11.18 [v4.1.203]

```
Simplified integration with Google Identity sign-in
```


### 2018.10.25 [v4.1.198]

```
Started some troubleshooting docs
```


### 2018.10.25 [v4.1.196]

```
Updated Turn Based Multiplayer documentation (#107)
Added NoRecording variant without ReplayKit (resolves #124) 
Added checks for replay kit on iOS 8 and lower (#124)
```


### 2018.10.08 [v4.1.186]

```
Corrected events from Turn Based Matches on certain Android versions (#107)
```


### 2018.09.14 [v4.1.183]

```
iOS: GameCenter: Handled duplicate notification of conflicts from Apple (resolves #115)
```


### 2018.09.10 [v4.1.175]

```
iOS: GameCenter: Corrected resolve conflict return events (#115)
```


### 2018.09.10 [v4.1.174]

```
iOS: GameCenter: Corrected loading of saved game data on conflict (resolves #115)
```


### 2018.07.04 [v4.1.166]

```
Android: Removed automatic request of email address of Google Play users (#110)
```


### 2018.06.22 [v4.1.165]

```
Added screen recording:
  - ReplayKit on iOS;
  - Google Play Games Recording on Android
Added ability to reset achievements where available 
Android: Corrected sign in process on relaunch where account still present (resolves #104)
Android: Corrected display of notification popups (resolves #106)
Android: Additional checks on player success (resolves #108)
```


### 2018.03.02 [v4.0.068]

```
Android: Corrected all leaderboards display (#101)
```


### 2018.03.01 [v4.0.067]

```
Removed incorrectly packaged Google iOS frameworks (#101)
```


### 2018.02.25 [v4.0.066]

```
AppleTV (tvOS) implementation
Major Google Play Games update
- Updated SDK
- New sign in method (resolves #100) (https://developers.google.com/identity/sign-in/android/migration-guide)
- Updated Auth utilities
- Added Players functionality
- Quests deprecated (https://android-developers.googleblog.com/2017/04/focusing-our-google-play-games-services.html)
- iOS deprecated
```


### 2017.10.08 [v3.4.015]

```
Added Achievements and Leaderboard documentation (resolves #96)
Added Saved Games conflict handling documentation (resolves #97)
```


### 2017.07.26 [v3.4.015]

```
Added issue template and support docs
```


### 2017.07.26 [v3.4.015]

```
Fixed error on dispose (resolves #90)
iOS: Corrected sign in failed event with silent signin (resolves #91)
```


### 2017.07.10 [v3.3.011]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


### 2017.06.20 [v3.3.010]

```
Added Turn Based Multiplayer Documentation
```


### 2017.04.28 [v3.3.010]

```
Updated Game Center documentation (#86)
```


### 2017.02.07 [v3.3.010]

```
Android: Update for incorrect handling of native UI sign out (resolves #84)
Android: Update to Google Play Services v10.0.1
```


### 2017.02.07 [v3.3.010]

```
Android: Update for incorrect handling of native UI sign out (resolves #84)
Android: Update to Google Play Services v10.0.1
```


### 2016.12.28 [v3.3.006]

```
Updated documentation
```


### 2016.12.20 [v3.3.005]

```
Update wiki
```


### 2016.12.20 [v3.3.005]

```
Fix for crash on iOS 7 + initial wiki
```


### 2016.10.26 [v3.3.001]

```
Added Game Center load player friends functionality (resolves #77)
```


### 2016.08.18 [v3.2.006]

```
Android: Corrected loading saved games with no cover images (#74)
```


### 2016.08.10 [v3.2.003]

```
Android: Removed additional activity dependencies to remove visual issues (resolves #66)
Added ability to load player centered leaderboard data (resolves #62)
Added ability to load current players leaderboard score (resolves #61)  
Game Center: Added ability to get player server authentication (resolves #69) 
```


###  2016.07.04

```
iOS: Added Game Center Saved Games (resolves #64)
iOS: Resolved sign-in popup displaying twice for Game Center (resolves #63)
iOS: Updated to latest Google Play Games SDK
Renamed ANE files to be less confusing on supported platforms
```


### 2016.05.12

```
Google Play: Quests and Events for iOS + Android (resolves #51)
```


### 2016.02.14

```
iOS: Corrected framework inclusions (resolves #52)
```


### 2016.02.13

```
iOS: Updated Play Gamse SDK (resolves #52)
```


### 2016.02.01

```
Android: Fix for incorrect handling of owner of save game in openGame (#50)
```


### 2015.12.24

```
Fixed issue with signIn after sign out from native UI (resolves #44)
```


### 2015.12.23

```
Android: Fixed issue when attempting to save game after signing out
Android: Added SIGN_OUT_SUCCESS event when user signs out through native UI (resolves #44)
```


### 2015.11.05

```
Updated to latest SDK versions
Added retrieval of Google auth token on iOS and Android (resolves #43)
Added retrieval of iconUrl and imageUrl where available 
Added loading of player icon assets (resolves #18)
Android: Added timestamps to players (resolves #42)
Added 'silent' sign in for determining sign in status at start up (resolves #26)
```


### 2015.07.23

```
iOS: GameCenter: Added checks for getPlayer call (#33)
```


### 2015.06.23

```
iOS: Added a new version of the ANE for iOS 6 compatibility of Game Center (resolves #28)
```


### 2015.06.23

```
iOS: Added a new version of the ANE for iOS 6 compatibility of Game Center (resolves #28)
```


### 2015.06.15

```
Removed debug code from AS lib
```


### 2015.06.09

```
Android: GooglePlay: Corrected open saved game event when saved game was not found
```


### 2015.06.05

```
Android: Corrected operation of conflicts of saved games
```


### 2015.06.03

```
Android: Corrected some sign in events when user cancels the sign in (resolves #25)
```


### 2015.05.15

```
iOS: GameCenter: Corrected multiple sign in/out events (resolves #24)
```


### 2015.05.12

```
Added the ALL leaderboards UI displayed when no board ID specified (resolves #23)
Added automatic check if signin required when application brought to foreground
Android: Corrected timing of initialised event
```


### 2015.04.29

```
Android: x86 Build
Android: Corrected issue with UI popups not displaying (resolves #16)
```


### 2015.03.04

```
Separated common app delegates and notifications into a centralised Core ANE to resolve issues with conflicting ANEs (resolves #10)
```


### 2015.02.25

```
iOS: Corrected packaged framework structure which was causing an 'invalid binary' error (resolves #8)
```


### 2015.02.23

```
Android: Separated Google Play Services Library into shared ANE (resolves #5)
```


### 2015.02.13

```
Corrected application key check on iOS (#2)
```


### 2015.02.05

```
Added iOS Simulator version and some documentation updates
```


### 2015.01.05

```
First complete release version of the Game Services ANE with iOS GameCenter and iOS/Android Google Play
```

