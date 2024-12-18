### 2024.12.19 [v6.0.0]

```
## Major update 

In this update we have moved all the extensions to use the newer gradle dependencies process. 

### Updates 

feat(android): move to gradle dependencies
```

### 2024.07.08 [v5.1.2]

```
feat(ios,altitude): add relative and absolute altitude functionality via the pressure sensor in the core motion framework
feat(ios): update build to latest xcode version and increase minimum version to 12
fix(android): correct geofence event dispatch on latest android versions (resolves https://github.com/distriqt/ANE-Location/issues/71)
fix(android): update permission request process to better distinguish denied / not_determined states (resolves https://github.com/distriqt/ANE-Location/issues/72) 
feat(docs): add documentation on android mock locations
```

### 2023.07.05 [v5.0.0]

```
feat(android): update to android location services v21.0.1 including some changes to the location request
```

### 2023.05.18 [v4.5.1]

```
fix(android): remove unused encryption code
```

### 2023.01.23 [v4.5.0]

```
feat(ios): Xcode 14 update, remove bitcode and add no-objc-msgsend-selector-stubs compiler flag 
feat(android): Move to new permissions request process
```

### 2022.03.28 [v4.4.0]

```
Update documentation for Android 31
Update Android permissions process to support new location permissions
```

### 2022.02.08 [v4.3.1]

```
Update package and docs for Android 31
Update docs to use apm
Fix missing dependency in air packages
```

### 2021.11.09 [v4.3.0]

```
Add isMockLocation detection on reported location (resolves #66)
```

### 2021.10.07 [v4.2.20]

```
Add air package
Update Android permission requests
Add security flag to auth activity
Remove iOS minimum version flag
```



### 2020.08.12 [v4.1.009]

```
Corrected documentation on AndroidX (resolves #61)
Moved to latest version of Core iOS dependencies
```


### 2020.03.20 [v4.0.006]

```
Android X migration (resolves #58)
```


### 2019.08.15 [v3.0.002]

```
Android 64bit support (resolves #54)
Updated minimum iOS version to 9.0
```


### 2019.02.13 [v2.2.045]

```
Added geocoding docs
```


### 2019.02.11 [v2.2.044]

```
Geocoder implementation
Embedded bitcode
```


### 2018.11.27 [v2.1.018]

```
Updated to Google Play Services v16.0.5
Removed application keys
```


### 2018.09.10 [v2.0.016]

```
Android: Added persistInBackground to run background updates in a foreground service (resolves #48)
Android: Resolved issue with updates on Android 8+ (resolves #51)
```


### 2018.06.29 [v1.6.093]

```
iOS: Removed preferences references due to Apple review policy change (#50)
```


### 2018.06.25 [v1.6.090]

```
iOS: Removed preferences references due to Apple review policy change (#50)
```


### 2018.03.16 [v1.6.089]

```
Documentation update
```


### 2018.03.16 [v1.6.089]

```
Android: Added checkLocationSettings to turn on settings from app (resolves #47) 
```


### 2018.01.29 [v1.6.070]

```
Updated documentation for iOS 11 (#45)
```


### 2017.12.15 [v1.6.070]

```
iOS: Corrected heading issue (resolves #44)
```


### 2017.09.04 [v1.6.067]

```
iOS: Fixed duplicate region entry events (resolves #39)
```


### 2017.09.01 [v1.6.063]

```
Added ability to set priority on iOS (#38)
```


### 2017.08.24 [v1.6.059]

```
Android: Added ability to start app on geofence entry
Android: Added restoring geofences on boot (resolves #31)
iOS: Corrected display settings on iOS 10+ (#33)
Android: Corrected null api issues (resolves #30)
Android: Corrected starting multiple geofences (resolves #27)
Added distance calculations between positions
```


### 2017.08.14 [v1.5.027]

```
Documentation update + minor fix for Android
```


### 2017.08.10 [v1.5.026]

```
Removed references to old docs (resolves #29)
```


### 2017.07.10 [v1.5.022]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


### 2017.06.21 [v1.5.021]

```
Added minimum interval for update calls (#26)
```


### 2017.06.21 [v1.4.017]

```
Added documentation on update Url (#26)
```


### 2017.05.06 [v1.4.017]

```
Updated documentation (resolves #23)
```


### 2017.04.28 [v1.4.017]

```
Android: Fixed issue with flight mode incorrectly reporting not available (resolves #18)
```


### 2017.04.28 [v1.3.015]

```
Added handling of outdated Google Play Services (resolves #21)
```


### 2017.01.31 [v1.2.011]

```
Updated documentation + update to Google Play Services v10.0.1
```


### 2017.01.18 [v1.2.009]

```
iOS: Added some checks for corrupted regions (#13)
```


### 2017.01.16 [v1.2.008]

```
Updated documentation, minor log output changes
```


### 2016.12.29 [v1.2.002]

```
Latest SDKs + Updated documentation
```


### 2016.11.14 [v1.2.002]

```
Added ability to display the location settings
```


### 2016.10.30 [v1.1.003]

```
Corrected IN_USE definition (resolves #4)
iOS: Corrected operation with removal of UIBackgroundModes (resolves #5)
```


### 2016.09.09 [v1.1.001]

```
Corrected Android runtime permissions (resolves #1)
```


### 2016.09.08 [v1.0.002]

```
Android: Corrected authorisation status (resolves #1)
```


### 2016.08.24 [v1.0.001]

```
Updated documentation
```


### 2016.08.24 [v1.0.001]

```
Release v1.0
```


### 2015.06.16

```
Removed debug code from AS lib
iOS: Updated to latest common lib
Android: Windows: Fix for bug in AIR packager resulting in missing resources
Android: x86 Support
```
