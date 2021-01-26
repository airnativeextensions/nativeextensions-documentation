

###### 2021.01.26 [v6.0.003]

```
Corrected issue in remote config setConfigSettings on iOS (resolves #352)
```


###### 2021.01.22 [v6.0.002]

```
Auth: Corrected documentation on manifest changes (resolves #350)
Firestore: Fixed crash on iOS when changing settings
Analytics: Updated event and param definitions
```


###### 2021.01.20 [v6.0.0]

```
Updated Firebase SDK 
 - Android v26.3.0
 - iOS v7.4.0 (resolves #348)
```


###### 2020.12.18 [v5.2.046]

```
Crashlytics: iOS updated to v6.30.0 migration from Fabric to Firebase (requires AIR update to 33.1.1.345) (resolves #317)
Crashlytics: Added checks for empty stack trace when reporting errors (resolves #337) 
Analytics: Automatically convert deprecated setCurrentScreen function to event (#325)
```


###### 2020.10.20 [v5.1.044]

```
Updated docs for Microsoft Auth and Crashlytics
```


###### 2020.09.17 [v5.1.042]

```
Firestore: Added Blob handling (resolves #319)
```


###### 2020.09.14 [v5.0.038]

```
Crashlytics: iOS rollback to fix issue with current release and AIR (resolves #317)
```


###### 2020.09.01 [v5.0.036]

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


###### 2020.06.18 [v4.2.028]

```
Auth
  - Added Email Link (password less) authentication (resolves #256)

Analytics
  - Documentation on iOS debugging (#238)
```


###### 2020.05.25 [v4.1.025]

```
SDK update:
 - iOS v6.11.0 (resolves UIWebView issue) 
```


###### 2020.05.04 [v4.0.020]

```
Updated SDK:
 - Android 17.4.0 (#275, #283)
Added error checking to analytics (resolves #280)
Firestore: Corrected issue with multiple queries on same (or similar) collection (resolves #271, resolves #284)
```


###### 2020.03.30 [v4.0.015]

```
Corrected iOS build inclusion of incorrect frameworks (resolves #274)
```


###### 2020.03.24 [v4.0.013]

```
Updated docs
```


###### 2020.03.24 [v4.0.012]

```
Android X migration (resolves #268)
Major Android SDK update
New versioning system 
```


###### 2020.03.12 [v3.1.016]

```
Android: Update for slow setCurrentScreen call (resolves #266)
```


###### 2019.12.11 [v3.1.013]

```
Updated SDK:
  - iOS v6.2.0 (#246)

Removed deprecated Invites functionality
Removed deprecated Crash functionality 
```


###### 2019.09.06 [v3.0.003]

```
Android 64bit support (resolves #220)
Updated minimum iOS version to 9.0
```


###### 2019.03.11 [v2.4.078]

```
Updated minimum iOS version to 8.0 (resolves #207)
```


###### 2019.03.02 [v2.4.077]

```
Clearer GPS Requirement Documentation (resolves #201)
Embedded iOS bitcode
```


###### 2019.01.24 [v2.4.074]

```
Updated documentation for latest ANEs (resolves #193)
```


###### 2019.01.15 [v2.4.072]

```
iOS: Performance: Resolved invalid bundle packaging issue (resolves #186)
```


###### 2018.12.12 [v2.4.070]

```
Firestore: Corrected issue with queries not returning document references in snapshots (resolves #179)
```


###### 2018.11.27 [v2.4.069]

```
Updated SDK:
  - iOS v5.13.0 (#164)
  - Android v16.0.5 (#142, #162)

Updated to Google Play Services v16.0.5 
```


###### 2018.11.18 [v2.3.065]

```
Added Firestore implementation (resolves #111)
Crashlytics: Added custom error report (resolves #167)
```


###### 2018.09.01 [v2.2.060]

```
Updated documentation
```


###### 2018.09.01 [v2.2.059]

```
Updated SDK:
  - iOS v5.6.0

Added Crashlytics implementation (resolves #60)

Core: Improved performance of logEvent call (resolves #166)
Storage: Resolved crash when uploading to unauthorised location (resolves #160) 

```


###### 2018.06.01 [v2.1.055]

```
Updated SDK:
  - Android v16.0.1
  - iOS v5.1.0

Storage : Add getDownloadUrl to storage reference
```


###### 2018.04.20 [v2.0.043]

```
Database: updateChildren Android performance improvements (resolves #141)
```


###### 2018.03.15 [v2.0.042]

```
Updated SDK: 
  - Android v11.8.0 
  - iOS v4.10.1
  - (resolves #137, #134, #116, #105)

Updates:
  - Corrected docs formatting (resolves #106)
```


###### 2017.12.17 [v1.9.029]

```
Updated documentation for Facebook Auth (resolves #126)
```


###### 2017.11.24 [v1.9.029]

```
Corrected Database iOS build
```


###### 2017.11.24 [v1.9.027]

```
Updated SDK: Android v11.0.4 iOS v4.6.0
Added Invites (resolves #5)
iOS: Fixed crash when no network connection (resolves #117)
Updated documentation
```


###### 2017.09.02 [v1.8.019]

```
Database: Added getKey functionality (resolves #100)
```


###### 2017.08.04 [v1.8.017]

```
Updated SDK: Android v11.0.4 iOS v4.0.4 
Added Performance Monitoring (resolves #58)
RemoteConfig: Added  (resolves #87)
```


###### 2017.07.14 [v1.7.029]

```
Database: Removed debug traces (resolves #86)
```


###### 2017.07.10 [v1.7.027]

```
Updated SDK: Android v11.0.2 iOS v4.0.3 
Added Phone Auth (resolves #81)
Added Custom Auth (resolves #71)
Auth: Added more error information for better error handling (#84)
```


###### 2017.06.27 [v1.6.019]

```
Dynamic Links implementation (resolves #4)
```


###### 2017.06.19 [v1.5.003]

```
Database update to correctly handle invalid references (#61)
```


###### 2017.06.16 [v1.5.001]

```
Updated SDK: iOS v4.0.2 
Fixed issue with incorrectly loading config files (#67)
```



###### 2017.06.10 [v1.4.005]

```
RemoteConfig implementation (resolves #6)
Updated SDK: Android v11.0.0, iOS v4.0.1 (#57, #45, resolves #30)
Correct operation for '.info' properties (resolves #64)
```


###### 2017.05.31 [v1.3.0]

```
Updated SDK: Android v10.2.6, iOS v4.0.0 (#30, #45, #57)
```


###### 2017.05.17 [v1.2.011]

```
Database: Added onDisconnect functionality (resolves #55)
```


###### 2017.03.23 [v1.1.011]

```
Minor framework updates
```


###### 2017.03.23 [v1.1.011]

```
Analytics: Added additional functionality (resolves #52)
```


###### 2017.03.15 [v1.1.009]

```
Database: Added once functionality (resolves #47)
```


###### 2017.03.06 [v1.1.007]

```
Corrected release error (#39)
```


###### 2017.03.06 [v1.1.007]

```
Database: Added ServerValue TIMESTAMP (resolves #34)
```


###### 2017.03.06 [v1.1.003]

```
Implemented core default lib (resolves #39)
Corrected storage getBytes success event (resolves #42)
Corrected storage config documentation (resolves #41)
Updated config script (resolves #28)
```


###### 2017.03.02 [v1.1.003]

```
Corrected build removing duplicate libraries (resolves #38)
```


###### 2017.03.01 [v1.1.002]

```
Android Update for Google Play Services and Firebase v10.2.0
```


###### 2017.02.28 [v1.1.0]

```
Storage: iOS implementation (resolves #18)
Auth: Changed photoUri reference to photoUrl for consistency (resolves #32)
```


###### 2017.02.28 [v1.1.0]

```
Storage: iOS implementation (resolves #18)
Auth: Changed photoUri reference to photoUrl for consistency (resolves #32)
```


###### 2017.02.20 [v1.0.0]

```
Updated documentation
```


###### 2017.02.20 [v1.0.0]

```
Updated iOS SDK to v3.13 which now gives analytics on iOS (resolves #27)
Implementation of Crash Reporting v1.0 (resolves #26)
```


###### 2017.02.09 [v1.0.0]

```
Updating documentation
```


###### 2017.02.09 [v1.0.0]

```
Android Implementation of Storage (#18)
```


###### 2017.02.03 [v1.0.0]

```
Realtime Databases complete implementation (resolves #1)
```


###### 2017.01.30 [v..]

```
Realtime Databases for Android release + update to v10.0.1
```


###### 2016.11.22 [v..]

```
Added Firebase Auth
```


###### 2016.10.28 [v..]

```
Initial release
```
