### 2025.02.13 [v10.1.0]

```
feat(firestore): add snapshot pagination (resolves https://github.com/distriqt/ANE-Firebase/issues/249)
feat(firestore): add filter queries (resolves https://github.com/distriqt/ANE-Firebase/issues/497)
feat(firestore): add new cache settings (remove deprecated usage and mark docs appropriately)
fix(airpackage): increase minimum ios version to 13 (resolves https://github.com/airsdk/Adobe-Runtime-Support/issues/3663)
```

### 2025.01.20 [v10.0.2]

```
feat(core): add ios on-device conversion measurement api (resolves https://github.com/distriqt/ANE-Firebase/issues/505) 
fix(auth,database,firestore,remoteconfig,performance): move ios frameworks to common core extension that were causing conflicts from multiple extensions (https://github.com/airsdk/Adobe-Runtime-Support/issues/3644)
```

### 2024.12.05 [v10.0.0]

```
## Major update 

In this update we have moved all the extensions to use the newer gradle dependencies process. 

See the migration guide: https://docs.airnativeextensions.com/docs/firebase/migrating-to-v10.0


feat(android): update to use new gradle dependencies
feat(ios): update ios firebase sdk v11.5.0
```

### 2024.12.05 [v10.0.0]

```
## Major update 

In this update we have moved all the extensions to use the newer gradle dependencies process. 

See the migration guide: https://docs.airnativeextensions.com/docs/firebase/migrating-to-v10.0


feat(android): update to use new gradle dependencies
feat(ios): update ios firebase sdk v11.5.0
```

### 2024.06.26 [v9.0.4]

```
fix(firestore): add checks on batch method parameters to avoid confusion (resolves https://github.com/distriqt/ANE-Firebase/issues/494)
```

### 2024.06.19 [v9.0.3]

```
fix(database): correct handling of '%' characters in updateChildren call (resolves https://github.com/distriqt/ANE-Firebase/issues/493)
```

### 2024.05.30 [v9.0.2]

```
fix(crashlytics): add missing androidx.datastore dependency to airpackage (resolves #490)
```

### 2024.05.27 [v9.0.1]

```
fix(firestore): correct issue with removing snapshot listeners from a document (resolves #489)
```

### 2024.05.17 [v9.0.0]

```
feat(android): update firebase sdk bom 33.0.0 (#476, #479)
feat(ios): update firebase sdk v10.25.0 (resolves #484)
```

### 2024.03.01 [v8.0.4]

```
fix(database,android): resolve issue with updateChildren null values not deleteing value (resolves #477) 
```

### 2024.01.31 [v8.0.3]

```
fix(firestore): update dependencies for compatibility with guava update (resolves #455)
feat(database): add ability to set database url for handling multiple databases (resolves #471)
```

### 2024.01.31 [v8.0.3]

```
fix(firestore): update dependencies for compatibility with guava update (resolves #455)
feat(database): add ability to set database url for handling multiple databases (resolves #471)
```

### 2023.07.13 [v8.0.1]

```
fix(auth): correct package dependencies and update documentation (resolves #449)
```

### 2023.07.05 [v8.0.0]

```
feat(auth): add language functionality (resolves #447)

feat(auth): update auth sdk, android v22.0.0, ios v10.11.0
feat(core): update analytics sdk, android v21.3.0, ios v10.11.0
feat(crashlytics): update crashlytics sdk, android v18.3.7, ios v10.11.0
feat(database): update database sdk, android v20.2.2, ios v10.11.0
feat(dynamiclinks): update dynamiclinks sdk, android v21.1.0, ios v10.11.0
feat(firestore): update firestore sdk, android v24.6.1, ios v10.11.0
feat(performance): update performance sdk, android v20.3.3, ios v10.11.0
feat(remoteconfig): update remoteconfig sdk, android v21.4.0, ios v10.11.0
feat(storage): update storage sdk, android v20.2.1, ios v10.11.0
```

### 2023.01.20 [v7.3.0]

```
feat(ios): Xcode 14 update, remove bitcode and add no-objc-msgsend-selector-stubs compiler flag (resolves #435)
fix(crashlytics): ios add nil check for error in recordError (#429)
feat(auth): Add user reload functionality (resolves #430)
```

### 2022.08.03 [v7.2.3]

```
fix(build): rebuild with AIR 33.1.1.856 due to swc build issue in 889 (resolves #421)
```

### 2022.07.01 [v7.2.2]

```
feat(docs,version): update version references + docs for storage list files functionality
```

### 2022.06.23 [v7.2.1]

```
feat(ios): update ios sdk to v8.1.5 (#358)
feat(storage): add ability to list items and directories (resolves #414)
```

### 2022.04.29 [v7.1.1]

```
fix(firestore): critical fix for issue with processing data from queries (resolves #408) 
```

### 2022.04.29 [v7.1.0]

```
Firestore: Changed Date object operation from being converted to a string to being converted to and from a timestamp object (resolves #408)
```

### 2022.03.15 [v7.0.1]

```
Correct crashlytics package dependency
```

### 2022.03.10 [v7.0.0]

```
Update Firebase SDK
 - Android BOM v29.0.4 (resolves #396, resolves #360, potential #362)

Updates for Android 31
Documentation update to use apm and changes for Android 31 (resolves #397)

DynamicLinks: Add ability to decode a short url using getDynamicLink function (resolves #399)
Remote Config: Add getByteArray implementation on Android (resolves #402)
```


### 2021.11.11 [v6.0.9]

```
Update Auth Facebook example with complete apm usage
Update Auth examples and documentation for Facebook auth provider (resolves #395)
```

### 2021.10.22 [v6.0.8]

```
Update builds that failed to be deployed correctly (resolves #390)
```

### 2021.09.17 [v6.0.8]

```
Added air package
Corrected issues with processing json responses causing delays and errors (resolves #370)
Corrected FCM documentation link (resolves #368)
Corrected conversion tool link (resolves #369)
```



### 2021.06.14 [v6.0.006]

```
Database: Resolved iOS crash with null param passed to child function (resolves #366)
```


### 2021.04.21 [v6.0.005]

```
Corrected issue with realtime database startAt query (resolves #361)
```


### 2021.01.26 [v6.0.003]

```
Corrected issue in remote config setConfigSettings on iOS (resolves #352)
```


### 2021.01.22 [v6.0.002]

```
Auth: Corrected documentation on manifest changes (resolves #350)
Firestore: Fixed crash on iOS when changing settings
Analytics: Updated event and param definitions
```


### 2021.01.20 [v6.0.0]

```
Updated Firebase SDK 
 - Android v26.3.0
 - iOS v7.4.0 (resolves #348)
```


### 2020.12.18 [v5.2.046]

```
Crashlytics: iOS updated to v6.30.0 migration from Fabric to Firebase (requires AIR update to 33.1.1.345) (resolves #317)
Crashlytics: Added checks for empty stack trace when reporting errors (resolves #337) 
Analytics: Automatically convert deprecated setCurrentScreen function to event (#325)
```


### 2020.10.20 [v5.1.044]

```
Updated docs for Microsoft Auth and Crashlytics
```


### 2020.09.17 [v5.1.042]

```
Firestore: Added Blob handling (resolves #319)
```


### 2020.09.14 [v5.0.038]

```
Crashlytics: iOS rollback to fix issue with current release and AIR (resolves #317)
```


### 2020.09.01 [v5.0.036]

```
SDK update:
 - iOS v6.30.0 (#301, resolves #275)
 - Android v17.5.0

Auth
  - Added Sign in with Apple (resolves #250)

Dynamic Links
  - Updated dynamic link handling (#295)

Firebase Crashlytics (resolves #304)
```


### 2020.06.18 [v4.2.028]

```
Auth
  - Added Email Link (password less) authentication (resolves #256)

Analytics
  - Documentation on iOS debugging (#238)
```


### 2020.05.25 [v4.1.025]

```
SDK update:
 - iOS v6.11.0 (resolves UIWebView issue) 
```


### 2020.05.04 [v4.0.020]

```
Updated SDK:
 - Android 17.4.0 (#275, #283)
Added error checking to analytics (resolves #280)
Firestore: Corrected issue with multiple queries on same (or similar) collection (resolves #271, resolves #284)
```


### 2020.03.30 [v4.0.015]

```
Corrected iOS build inclusion of incorrect frameworks (resolves #274)
```


### 2020.03.24 [v4.0.013]

```
Updated docs
```


### 2020.03.24 [v4.0.012]

```
Android X migration (resolves #268)
Major Android SDK update
New versioning system 
```


### 2020.03.12 [v3.1.016]

```
Android: Update for slow setCurrentScreen call (resolves #266)
```


### 2019.12.11 [v3.1.013]

```
Updated SDK:
  - iOS v6.2.0 (#246)

Removed deprecated Invites functionality
Removed deprecated Crash functionality 
```


### 2019.09.06 [v3.0.003]

```
Android 64bit support (resolves #220)
Updated minimum iOS version to 9.0
```


### 2019.03.11 [v2.4.078]

```
Updated minimum iOS version to 8.0 (resolves #207)
```


### 2019.03.02 [v2.4.077]

```
Clearer GPS Requirement Documentation (resolves #201)
Embedded iOS bitcode
```


### 2019.01.24 [v2.4.074]

```
Updated documentation for latest ANEs (resolves #193)
```


### 2019.01.15 [v2.4.072]

```
iOS: Performance: Resolved invalid bundle packaging issue (resolves #186)
```


### 2018.12.12 [v2.4.070]

```
Firestore: Corrected issue with queries not returning document references in snapshots (resolves #179)
```


### 2018.11.27 [v2.4.069]

```
Updated SDK:
  - iOS v5.13.0 (#164)
  - Android v16.0.5 (#142, #162)

Updated to Google Play Services v16.0.5 
```


### 2018.11.18 [v2.3.065]

```
Added Firestore implementation (resolves #111)
Crashlytics: Added custom error report (resolves #167)
```


### 2018.09.01 [v2.2.060]

```
Updated documentation
```


### 2018.09.01 [v2.2.059]

```
Updated SDK:
  - iOS v5.6.0

Added Crashlytics implementation (resolves #60)

Core: Improved performance of logEvent call (resolves #166)
Storage: Resolved crash when uploading to unauthorised location (resolves #160) 

```


### 2018.06.01 [v2.1.055]

```
Updated SDK:
  - Android v16.0.1
  - iOS v5.1.0

Storage : Add getDownloadUrl to storage reference
```


### 2018.04.20 [v2.0.043]

```
Database: updateChildren Android performance improvements (resolves #141)
```


### 2018.03.15 [v2.0.042]

```
Updated SDK: 
  - Android v11.8.0 
  - iOS v4.10.1
  - (resolves #137, #134, #116, #105)

Updates:
  - Corrected docs formatting (resolves #106)
```


### 2017.12.17 [v1.9.029]

```
Updated documentation for Facebook Auth (resolves #126)
```


### 2017.11.24 [v1.9.029]

```
Corrected Database iOS build
```


### 2017.11.24 [v1.9.027]

```
Updated SDK: Android v11.0.4 iOS v4.6.0
Added Invites (resolves #5)
iOS: Fixed crash when no network connection (resolves #117)
Updated documentation
```


### 2017.09.02 [v1.8.019]

```
Database: Added getKey functionality (resolves #100)
```


### 2017.08.04 [v1.8.017]

```
Updated SDK: Android v11.0.4 iOS v4.0.4 
Added Performance Monitoring (resolves #58)
RemoteConfig: Added  (resolves #87)
```


### 2017.07.14 [v1.7.029]

```
Database: Removed debug traces (resolves #86)
```


### 2017.07.10 [v1.7.027]

```
Updated SDK: Android v11.0.2 iOS v4.0.3 
Added Phone Auth (resolves #81)
Added Custom Auth (resolves #71)
Auth: Added more error information for better error handling (#84)
```


### 2017.06.27 [v1.6.019]

```
Dynamic Links implementation (resolves #4)
```


### 2017.06.19 [v1.5.003]

```
Database update to correctly handle invalid references (#61)
```


### 2017.06.16 [v1.5.001]

```
Updated SDK: iOS v4.0.2 
Fixed issue with incorrectly loading config files (#67)
```



### 2017.06.10 [v1.4.005]

```
RemoteConfig implementation (resolves #6)
Updated SDK: Android v11.0.0, iOS v4.0.1 (#57, #45, resolves #30)
Correct operation for '.info' properties (resolves #64)
```


### 2017.05.31 [v1.3.0]

```
Updated SDK: Android v10.2.6, iOS v4.0.0 (#30, #45, #57)
```


### 2017.05.17 [v1.2.011]

```
Database: Added onDisconnect functionality (resolves #55)
```


### 2017.03.23 [v1.1.011]

```
Minor framework updates
```


### 2017.03.23 [v1.1.011]

```
Analytics: Added additional functionality (resolves #52)
```


### 2017.03.15 [v1.1.009]

```
Database: Added once functionality (resolves #47)
```


### 2017.03.06 [v1.1.007]

```
Corrected release error (#39)
```


### 2017.03.06 [v1.1.007]

```
Database: Added ServerValue TIMESTAMP (resolves #34)
```


### 2017.03.06 [v1.1.003]

```
Implemented core default lib (resolves #39)
Corrected storage getBytes success event (resolves #42)
Corrected storage config documentation (resolves #41)
Updated config script (resolves #28)
```


### 2017.03.02 [v1.1.003]

```
Corrected build removing duplicate libraries (resolves #38)
```


### 2017.03.01 [v1.1.002]

```
Android Update for Google Play Services and Firebase v10.2.0
```


### 2017.02.28 [v1.1.0]

```
Storage: iOS implementation (resolves #18)
Auth: Changed photoUri reference to photoUrl for consistency (resolves #32)
```


### 2017.02.28 [v1.1.0]

```
Storage: iOS implementation (resolves #18)
Auth: Changed photoUri reference to photoUrl for consistency (resolves #32)
```


### 2017.02.20 [v1.0.0]

```
Updated documentation
```


### 2017.02.20 [v1.0.0]

```
Updated iOS SDK to v3.13 which now gives analytics on iOS (resolves #27)
Implementation of Crash Reporting v1.0 (resolves #26)
```


### 2017.02.09 [v1.0.0]

```
Updating documentation
```


### 2017.02.09 [v1.0.0]

```
Android Implementation of Storage (#18)
```


### 2017.02.03 [v1.0.0]

```
Realtime Databases complete implementation (resolves #1)
```


### 2017.01.30 [v..]

```
Realtime Databases for Android release + update to v10.0.1
```


### 2016.11.22 [v..]

```
Added Firebase Auth
```


### 2016.10.28 [v..]

```
Initial release
```
