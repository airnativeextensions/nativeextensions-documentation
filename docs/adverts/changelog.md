### 2025.07.18 [v16.2.0]

```
feat(ios): update admob sdk v12.6.0 - audio issue fix (resolves https://github.com/distriqt/ANE-Adverts/issues/615)
feat(airpackage): add android gradle settings and platforms configuration
```

### 2025.04.30 [v16.1.0]

```
feat(android): update AdMob SDK v24.2.0, UMP SDK v3.2.0
feat(ios): update AdMob SDK v12.12.0, UMP SDK v3.0.0 (resolves https://github.com/distriqt/ANE-Adverts/issues/607)
feat(ios,android): add ump showPrivacyOptionsForm functionality
feat(ios,android): add clicked and impression events on AdViewEvent and FullScreenContentEvent (resolves https://github.com/distriqt/ANE-Adverts/issues/603)
```

### 2024.12.10 [v16.0.0]

```
## Major update 

In this update we have moved all the extensions to use the newer gradle dependencies process. 

See the migration guide: https://docs.airnativeextensions.com/docs/adverts/migrating-to-version-16.0


feat(android): update to use new gradle dependencies
fix(android): correct missing dependency (resolves https://github.com/distriqt/ANE-Adverts/issues/597)
feat(ios): update admob sdk v11.11.0
```

### 2024.10.16 [v15.3.0]

```
feat(android,admob): implement new background initialisation process for admob (resolves #589) 
feat(android): update admob sdk to v23.4.0 and ump sdk to v3.0.0
feat(ios): update admob sdk v11.10.0
```

### 2024.08.27 [v15.2.0]

```
feat(android): update admob sdk to v23.3.0 and ump sdk to v3.0.0
feat(ios): update admob sdk v11.8.0
```

### 2024.06.05 [v15.1.1]

```
feat(admob): add ability to trigger the Ad Inspector programmatically 
```

### 2024.05.16 [v15.1.0]

```
feat(ios): update admob sdk v11.3.0
feat(android): update admob sdk v23.1.0
```

### 2024.05.07 [v15.0.2]

```
fix(admob): add checks for null references (#554, resolves #562)
```

### 2024.04.29 [v15.0.1]

```
fix(admob,android): add missing guava dependency to airpackage and docs (#557)
```

### 2024.04.02 [v15.0.0]

```
feat(docs): update docs to include information about new privacy sandbox (#554)
```

### 2024.03.28 [v15.0.0]

```
feat(android,admob): update android admob sdk v23.0.0 (resolves #553)
feat(ios): update admob ios sdk to v11.2.0
 - add support for privacy manifest files 
 - minimum deployment target to iOS 12
 - minimum OS required to receive ads to iOS 13
 - no longer automatically collects metrics - need to link Firebase analytics
feat(ump): update UMP to support latest functionality include canRequestAds and privacy status
feat(android,ump): changed isSupported tests for ump

feat(ios): make error codes consistent with android implementation (resolves #545)
feat(android): add some checks for reported crashes (resolves #541)
fix(docs): correct admob app open test unit ad id
fix(airpackage): add missing ios platform configs for variants
```

### 2023.08.18 [v14.3.0]

```
feat(huawei): update hms sdk v13.4.62.302
feat(android,ump): update ump to v2.1.0 (resolves #509)
feat(android,admob): update admob sdk to v22.2.0
```

### 2023.07.05 [v14.1.0]

```
feat(android): update google admob version to v22.1.0
feat(ios): update google admob version to v10.6.0
fix(docs): add kotlin missing dependency from manual integration docs
```

### 2023.05.08 [v14.0.3]

```
feat(android): background thread handling (resolves #456)
feat(ios,android,admob): add function to set admob network extras (resolves #461)
```

### 2023.01.12 [v13.8.1]

```
feat(ios): update ios admob sdk to v9.14.0
```

### 2023.01.12 [v13.8.0]

```
feat(ios): Xcode 14 update, remove bitcode and add no-objc-msgsend-selector-stubs compiler flag 
feat(android): update android admob sdk v21.3.0 (resolves #427)
feat(huawei,android): update huawei ads sdk v13.4.58.301
fix(android): add UMP fail gracefully if ad identifier dependency not included (resolves #444)
```

### 2022.11.01 [v13.7.7]

```
fix(ios,admob): correct issue setting server side verification options on rewarded video ads (resolves #371)
feat(docs): update docs for admob move from funding choices to privacy and messaging
fix(docs,package): add appset extension dependency
```

### 2022.11.01 [v13.7.7]

```
fix(ios,admob): correct issue setting server side verification options on rewarded video ads (resolves #371)
feat(docs): update docs for admob move from funding choices to privacy and messaging
fix(docs,package): add appset extension dependency
```

### 2022.09.26 [v13.7.5]

```
 fix(android,nativeads,admob): resolve issue with native ads set to not visible reappearing after main activity resume (resolves #424)
 fix(docs): remove unnecessary permissions
```

### 2022.09.16 [v13.7.4]

```
feat(rewarded): add information on the reward to the LOADED event for rewarded video/interstitial ads (resolves #421)
```

### 2022.08.08 [v13.7.3]

```
feat(docs): add documentation on removing AD_ID permission using apm (resolves #407)
fix(android,admob): correct issue with not handling nativead error dispatch (resolves #413)
```

### 2022.07.20 [v13.7.2]

```
fix(airpackage): correct airpackage assets overlap between admob and huawei implementations
```

### 2022.07.20 [v13.7.1]

```
fix(build): build with AIR 33.1.1.856 due to issue with SWC generation in 889 (resolves #409)
```

### 2022.06.24 [v13.7.0]

```
feat(admob): update admob android sdk v21.0.0
```

### 2022.06.23 [v13.6.0]

```
feat(ios,admob): update ios sdk to v9.2.0 (#371)
feat(admob): add life time value implementation (resolves #361)
```

### 2022.03.08 [v13.5.0]

```
Update SDK: 
  - iOS v8.13.0
  - Android v20.5.0 

Android 31 support (resolves #365, #366, #349)
Documentation update for Android 31 and apm usage (resolves #359)
Android: Update lifecycle handling on some admob adviews
App Open Ads (resolves #257)
```

### 2021.12.23 [v13.4.1]

```
Update documentation and examples on manifest additions for admob (#352)
```

### 2021.11.16 [v13.4.0]

```
Update AdMob iOS SDK to v8.12.0
Add AdMob iOS support for inline adaptive banner sizes (resolves #322)
```

### 2021.10.05 [v13.3.32]

```
Updated package to correctly include admob android application id (resolves #334)
```

### 2021.09.13 [v13.3.31]

```
Corrected Rewarded interstitial event dispatching incorrectly (resolves #326)
```

### 2021.08.31 [v13.3.29]

```
Deprecated the advertising identifier to remove AdSupport / ASIdentifierManager usage (resolves #305)
Implemented Rewarded Interstitials (resolves #297)
Corrected processing of RequestConfiguration on iOS 12 (resolves #301)

Updated UMP SDK v2.0.0
Updated Admob SDK
 - Android v20.2.0
 - iOS v8.9.0

Added air package
```

### 2021.06.19 [v13.2.013]

```
Android: AdMob corrected issue with native ad templates (resolves #293)
iOS: AdMob Corrected user identifier set on rewarded video ads (resolves #292)
```

### 2021.06.14 [v13.2.009]

```
Corrected new AdView delegate definitions on iOS causing issues with events (resolves #290)
```

### 2021.06.09 [v13.2.006]

```
Removed legacy google consent sdk (resolves #287)
Updated consent sdk docs
Added isSupported flag to Consent SDK
Corrected default lib definitions (resolves #288)
```

### 2021.06.05 [v13.1.002]

```
Updated AdMob SDK
 - Android v20.1.0

Added adaptive inline banner sizing setInlineAdaptiveAdSize and setInlineAdaptiveAdSizeWithMaxHeight (resolves #279)
iOS: Fixed crash with UMP caused by removal of consent type information (#286)
```

### 2021.05.11 [v13.0.009]

```
Updated AdMob SDK
 - Android v20.0.0
 - iOS v8.4.0

Major refactoring around AdMob restructured SDK, introducing FullScreenContentEvent and RequestConfiguration
```

### 2021.01.20 [v12.0.009]

```
Updated AdMob SDK
 - Android v19.6.0
 - iOS v7.69.0
```

### 2020.12.11 [v11.0.001]

```
Huawei Ads Kit addition (resolves #220)
Fix iOS AdMob issue with platformVersion (resolves #225)
Added documentation on multidex (#223)
```

### 2020.11.25 [v10.1.037]

```
Added support for AdMob Open Bidding (resolves #211)
Updated initialisation process
Deprecated wiki
```

### 2020.10.19 [v10.0.025]

```
Updated docs (resolves #202, resolves #210) and corrected App Tracking framework dependency (resolves #208)
```

### 2020.10.04 [v10.0.021]

```
Implemented User Messaging Platform (resolves #195)
Updated initialisation process to better handle consent

Updated AdMob SDK
 - Android v19.4.0 (#194)
 - iOS v7.66.0
```

### 2020.08.14 [v9.2.128]

```
Updated AdMob SDK
 - iOS v7.62.0
Updated build and docs with new AdsIdentifier Google Play Services
Android: Corrected native ad ratings star display
iOS: Fixed white background on ios native ad template
```

### 2020.06.11 [v9.1.047]

```
Updated AdMob SDK
 - iOS v7.60.0
Updated show/hide of banners and native ads (resolves #174)
```

### 2020.05.25 [v9.0.022]

```
Updated AdMob SDK
 - Android v19.1.0
 - iOS v7.59.0 (resolves #167)
Added Native Ad templates (resolves #164)
```

### 2020.04.30 [v8.0.051]

```
Updated Rewarded Video API to new version
Added Adaptive banners (resolves #152)
```

### 2020.03.23 [v7.0.031]

```
Android X migration (resolves #161)
Updated Admob SDK
 - Android v18.3.0
 - iOS v7.45.0 (pre Firebase sqlite changes)
```

### 2019.12.11 [v6.1.015]

```
Updated Admob SDK
 - iOS v7.45.0 (pre Firebase sqlite changes)
 - Android v17.1.2
Added Firebase v6.2.0 compatibility
```

### 2019.09.20 [v6.0.008]

```
iOS: Removed dependencies on frameworks that causes usage description errors (resolves #143)
```

### 2019.08.13 [v6.0.002]

```
Android 64bit update (resolves #137)
Updated minimum iOS version to 9.0
```

### 2019.03.12 [v5.5.177]

```
Embedded iOS bitcode
```

### 2019.02.26 [v5.5.176]

```
Updated minimum iOS version to 8.0
```

### 2018.12.12 [v5.4.175]

```
Android: Updated Google Play Services Ads to 17.1.2 (#112)
```

### 2018.11.27 [v5.4.173]

```
Updated to Google Play Services v16.0.5 (#105, #104, #72, #57)
Removed application keys
```

### 2018.11.01 [v5.3.171]

```
Added tagForUnderAgeOfConsent to AdRequest (resolves #90)
iOS: Resolved landscape smart banner full width issue (resolves #74)
```

### 2018.09.05 [v5.3.161]

```
Documentation update + small Android update
```

### 2018.08.08 [v5.3.159]

```
Added Animate example (#78)
```

### 2018.07.31 [v5.3.158]

```
Android: Added handling of crashes in some edge load cases (#76)
```

### 2018.07.14 [v5.3.157]

```
Updated loading calls to remedy ANRs (#72)
```

### 2018.07.06 [v5.3.147]

```
Removed available flags from Google iOS Consent SDK for windows packaging (resolves #71)
```

### 2018.06.25 [v5.3.131]

```
Added the Consent SDK (resolves #63)
```

### 2018.06.20 [v5.2.112]

```
Updated asdocs
```

### 2018.06.01 [v5.2.111]

```
Android: Updated to Google Play Services v15+
```

### 2018.05.18 [v5.2.109]

```
Updated documentation
```

### 2018.05.18 [v5.2.108]

```
iOS: Updated SDK to v7.31.0 (#57)
Added targeting options (resolves #61)
  - child treatment (COPPA)
  - non-personalised ads (GDPR)
  - ad content
  - keywords
```

### 2018.04.23 [v5.1.102]

```
Added Rewarded Video Ads (resolves #42)
```

### 2018.04.20 [v5.0.085]

```
Updated build and corrected isSupported check (resolves #58, #60)
```

### 2018.03.10 [v5.0.083]

```
Major update including complete refactor for future development
Android: Updated SDK to v11.8.0
iOS: Updated SDK to v7.28.0
  - Added ability to get advert size (resolves #46)
  - New method to retrieve advertising id
  - Added advertising id tracking flag info (resolves #41)
  - Added gender and birthday to requests (resolves #6)
  - Better advert positioning (resolves #1)
  - Resolved crash (resolves #44)
```

### 2017.10.26 [v4.0.019]

```
Corrected setTestDetails function definition (#50)
```

### 2017.07.10 [v4.0.011]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```

### 2017.03.15 [v4.0.010]

```
Removed iOS Simulator version to reduce file size
Android: Updated SDK to v10.2.0
iOS: Updated SDK to v3.14.0
```

### 2017.03.15 [v4.0.010]

```
Removed iOS Simulator version to reduce file size
Android: Updated SDK to v10.2.0
iOS: Updated SDK to v3.14.0
```

### 2017.01.06 [v4.0.003]

```
iAd Shutdown, updated SDKs, new documentation
```

### 2016.06.04

```
Android: Minor view parameter changes (#35)
```

### 2016.05.20

```
iOS: Resolved missing framework references (resolves #33, #25)
```

### 2016.05.03

```
Updated SDK versions (#25)
```

### 2016.03.10

### 2015.06.26

```
Android: Fix to prevent unusual crashes (resolves #21)
```

### 2015.04.23

```
Android: Resolved issue with AdMob test details (resolves #19)
```

### 2015.02.26

```
Android: Fixed banner positioning issue (resolves #15)
```

### 2015.02.24

```
Android: Fixed crash when initialising doubleClick (resolves #10)
```

### 2015.02.19

```
Added Interstitial Advert support for AdMob and iAd
Fixed Flash Builder 4.6 missing class issue
iOS: Updated Google Mobile Ads library to version 7.0.0
iOS: Fix for smart banner rendering in landscape mode when flat
iOS: Fix for iOS 8 dimension changes for position banner adverts
iOS: Fixed issue with arm64 compilation error undefined symbols (resolves #5) (notify #12)
Android: Separated Google Play Libraries into separate ANE
```

### 2015.01.31

```
iOS: Removed reference to the IDFA returned as the advertising identifier in the iAdOnly version to avoid review rejection (resolves #3)
```

### 2015.01.31

```
Added check for .debug suffix in application id
```

### 2014.12.17

```
iOS: Included arm64 support (resolves #2)
Android: Corrected application id check when doesn't contain air prefix
```

### 2014.12.05

```
Corrected missing EventDispatcher functions from base class
iOS: Implemented autoreleasepools for all c function calls
```

### 2014.11.26

```
New application based key check, removing server checks
```

### 2014.10.20

```
iOS Update for iOS 8
- iOS: Split into two versions to satisfy Apple review for iAd (resolves #218)
```
