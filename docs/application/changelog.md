### 2024.09.19 [v7.3.1]

```
fix(android): fix ANR with a display information call
```

### 2024.07.25 [v7.3.0]

```
feat(ios): add isiOSAppOnMac flag to check if ios app is running on macos (resolves https://github.com/distriqt/ANE-Application/issues/291)
feat(unity): basic unity plugin only supporting the uniqueId method
feat(ios): add PrivacyInfo.xcprivacy to specify API access privacy requirements
```

### 2023.11.02 [v7.1.0]

```
feat(android): update activity lifecycle listener to new android implementation
feat(ios): update database for new iphone 15 models (resolves #280)
```

### 2023.09.26 [v7.0.3]

```
fix(android): handle null activity case when updating visibility state (resolves #278)
```

### 2023.07.31 [v7.0.2]

```
feat(ios): update device database for latest ipad and iphone device details (resolves #276)
feat(ios): add retrieval of device name and model for ios simulators (resolves #259)
```

### 2023.06.22 [v7.0.0]

```
feat(accessibility): add guided mode detection (resolves #273)
feat(android): air background thread handling (resolves #274)
```

### 2023.01.13 [v6.12.0]

```
feat(ios): Xcode 14 update, remove bitcode and add no-objc-msgsend-selector-stubs compiler flag 
feat(android): Add ability to check for availability of the request auto start permission (resolves #240)
feat(android): Move to new permissions request process
```

### 2022.09.09 [v6.11.0]

```
fix(alarms): Android 12+ alarms require additional permissions, this adds checks for the permission and error event if missing (resolves #255)
```

### 2022.09.05 [v6.10.0]

```
feat(display): add ability to retrieve bounding rectangle dimensions for screen cutouts/notches (resolves #241) 
```

### 2022.06.23 [v6.9.2]

```
feat(defaults): add ability to use shared preferences on android to access gdpr values
feat(defaults): add docs for changing shared preferences approach
feat(device): add ability to retrieve unique id through the appset play services library
fix(ios): update device database to add iPad12,1,2 ipad models (resolves #248)
fix(ios): update device database to add iPad13,4,5,6,7,8,9,10,11 (iPad Pro 2021) iPad13,16,17 (iPad AIR 2022) iPhone14,6 (SE 3rd) (resolves #248)
```

### 2022.03.15 [v6.8.5]

```
Android: Update to make compatible with latest androidx.core lifecycle library 
```

### 2022.01.28 [v6.8.4]

```
Update for Android 31 exported attribute requirement
Add docs for apm usage
```

### 2022.01.18 [v6.8.3]

```
Update android startup receiver to use new AIR app entry activity name (resolves #234)
```

### 2021.12.21 [v6.8.2]

```
Add minimise function for Android (resolves #231)
```

### 2021.09.02 [v6.8.1]

```
Added air package
Android: Removed logging output from wasAutoStarted function (resolves #224)
Android: Added new method for auto start on Android 30 (including new permission access) (resolves #222)
Android: Corrected behaviour of status bar light / dark on Android 30 (resolves #225)
Android: Security flags on activities (resolves #214)
Corrected documentation on DefaultsEvent.CHANGED event on iOS (resolves #212)
```



### 2021.08.05 [v6.7.7]

```
Corrected tvOS implementation (issue with set brightness integration)
```


### 2021.07.01 [v6.7.4]

```
Added screen brightness implementation
```


### 2021.06.09 [v6.6.003]

```
Updated ios device definitions and clarified documentation for year class and device information (resolves #218)
```


### 2021.03.22 [v6.5.056]

```
Added better alarm handling when app active
```


### 2021.03.16 [v6.5.051]

```
Removed ios_version_min
```


### 2020.12.11 [v6.5.049]

```
Updated docs
```


### 2020.12.11 [v6.5.049]

```
Updated docs
```


### 2020.12.11 [v6.5.049]

```
Android: Added ability to show keyboard manually (resolves #206)
Android: Added ability to retrieve the automatic time and time zone (resolves #207)
```


### 2020.09.11 [v6.4.021]

```
Added Android x64 support (resolves #201)
```


### 2020.09.08 [v6.3.019]

```
Added changed event to default fallback implementation (resolves #198)
```


### 2020.08.12 [v6.3.017]

```
Updated iOS device definitions with new 2020 iPads and iPhone SE (resolves #196)
```


### 2020.07.23 [v6.3.015]

```
Android: Added access to getExternalFilesDir important for external storage on API 29
```


### 2020.06.09 [v6.2.010]

```
Updated iOS device list with recent devices
```


### 2020.04.15 [v6.1.008]

```
iOS: Added nativeScale for detecting zoomed state (resolves #116)
```


### 2020.03.26 [v6.0.006]

```
Updated documentation
```


### 2020.03.24 [v6.0.006]

```
Android X migration (resolves #177)
```


### 2020.03.12 [v5.1.469]

```
iOS: Corrected issue with status bar and dark mode on iOS 13 (resolves #176)
```


### 2019.11.22 [v5.1.465]

```
Updated docs
```

### 2019.11.22 [v5.1.465]

```
Dark Mode detection - retrieve user interface style 
Android: Additional checks for display related crash (#165)
```


### 2019.11.02 [v5.0.453]

```
iOS: Updated device database to support latest iPhone devices (resolves #166)
```


### 2019.10.03 [v5.0.452]

```
Updated docs
```


### 2019.10.02 [v5.0.452]

```
Android: Fix for keyboard info on some devices running Android 4.3
Android: Resolved keyboard monitor crash (resolves #158)
```


### 2019.09.06 [v5.0.439]

```
Updated docs
```


### 2019.09.06 [v5.0.439]

```
Android 64bit support (resolves #149)

Added information about display cutouts (notches) (resolves #138, resolves #120)

Added Keyboard information 
 - heights (resolves #11)
 - activation events (resolves #74)

Android: Added helper for back button issue with android target sdk 28+ (resolves #153)
Android: Fixed issue with black screen helper (resolves #130)
Android: Added  function to determine if app was auto launched (resolves #23)
Android: Added ability to set navigation bar colour + style
Android: Added ability to control system ui visibility flags (resolves #150)
iOS: Updated iOS device list
Updated minimum iOS version to 9.0
```


### 2019.03.17 [v4.7.182]

```
Updated documentation on auto start and alarm manager
```


### 2019.03.12 [v4.7.180]

```
Updated minimum iOS version to 8.0 (resolves #137)
Updated Status Bar styles and added Android support (resolves #136)
```


### 2019.02.18 [v4.6.173]

```
Added time zone information (resolves #131)
```


### 2019.02.11 [v4.5.167]

```
Added Locale information
Embedded bitcode
```


### 2018.10.20 [v4.4.159]

```
iOS: Updated device definitions for latest Apple iPhone devices (resolves #123
```


### 2018.08.09 [v4.4.150]

```
Added yearClass device information for performance decisions (resolves #115)
Updated iOS device information database 

```


### 2018.06.29 [v4.3.141]

```
Android: Removed initial dispatch of foreground application state event (resolves #110)
```


### 2018.06.26 [v4.3.139]

```
Android: Added checks around system ui visibility changes (#109)
```


### 2018.06.20 [v4.3.138]

```
Android: Fixed crash with lifecycle listener (resolves #108)
```


### 2018.06.20 [v4.3.137]

```
Updated example to show authorisation
```


### 2018.04.04 [v4.3.130]

```
Additional state checks to avoid Android crashes (#103)
```


### 2018.03.12 [v4.3.122]

```
Added Power Save mode detection and idle mode on Android (resolves #96)
```


### 2018.03.11 [v4.3.110]

```
Added Apple tvOS implementation 
Added better ApplicationStateEvents for application foreground / background rather than activate / deactivate (resolves #94)
```


### 2018.03.03 [v4.2.058]

```
Corrected return values for device display metrics on latest iOS devices
```


### 2017.11.15 [v4.2.054]

```
Fixed issue with defaults setString and getString
```


### 2017.11.10 [v4.2.052]

```
Fixed issue with default values of settings on Android (resolves #89)
```


### 2017.09.22 [v4.2.049]

```
iOS 7 crash on launch fix
```


### 2017.08.17 [v4.1.041]

```
Updated missing functionality from default lib
```


### 2017.08.11 [v4.0.038]

```
Added Keychain iOS implementation (resolves #75)
Added Settings implementation (resolves #76)
Updated iOS model names to better represent actual devices (resolves #77)
```


### 2017.07.10 [v3.4.006]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


### 2017.04.28 [v3.4.004]

```
Fixed lockstate rejection issue (resolves #68)
```


### 2017.04.03 [v3.3.009]

```
Updated documentation
```


### 2017.04.03 [v3.3.009]

```
Added ability to add AIR bitmap overlay (resolves #67)
Added Accessibility options to get access to the voice over state
Android: Added the blackScreenHelper function 
```


### 2016.12.22 [v3.2.007]

```
Updating documentation
```


### 2016.12.22 [v3.2.007]

```
Updating documentation
```


### 2016.12.15 [v3.2.007]

```
Added Defaults getObject to read dictionary values (#55)
Added Device Orientation Events to get orientation changes irrespective of UI lock
```


### 2016.12.09 [v3.1.013]

```
Added display metrics for accurate dpi (resolves #57)
Android: Fix for black screen on lock screen (resolves #53)
```


### 2016.11.23 [v3.0.031]

```
Added alarm manager cancel all and cancel by id (#52)
```


### 2016.11.22 [v3.0.029]

```
Added the cancelAlarm functionality (resolves #52)
```


### 2016.10.24 [v3.0.024]

```
Corrected default implementation (#47)
```


### 2016.10.24 [v3.0.023]

```
Added getStatusBarHeight to default implementation (resolves #47)
```


### 2016.10.22 [v3.0.022]

```
Added getFilesDir for lookup of system directory (resolves #46)
```


### 2016.09.30 [v3.0.020]

```
Android: Alarm will now attempt to unlock device, or run in front of lock screen (resolves #44)
```


### 2016.09.28 [v3.0.019]

```
Added wiki documentation
```


### 2016.09.28 [v3.0.019]

```
Added wiki documentation
```


### 2016.09.28 [v3.0.019]

```
Added wiki documentation
```


### 2016.09.28 [v3.0.019]

```
Added wiki documentation
```


### 2016.08.25 [v3.0.019]

```
iOS: Corrected persistent device id (resolves #39)
```


### 2016.08.24 [v3.0.016]

```
Android: Added access to the AlarmManager to set device alarms
Added getStatusBarHeight function (resolves #37)
iOS: Corrected persistent id to not restore on different devices (resolves #38)
```


###  2016.08.03

```
Updated Core library compatibility
```


###  2016.08.01

```
Android: Added ability to set the alpha of the status bar (resolves #36)
Android: Added new display mode to work with semi-transparent status bar
```


###  2016.07.05

```
Android: Changed os.version to be the version string (6.0.1) and added the api_level field (resolves #31)
```


###  2016.07.02

```
Expanded defaults implementation to use SharedPreferences on Android and SharedObject on unsupported platforms (resolves #30)
```


### 2016.04.27

```
Android: Added IMMERSIVE display mode (resolves #28)
```


### 2016.04.05

```
Corrected setStatusBarColour and device properties on Android 6.0 (resolves #25)
```


### 2016.03.16

```
Added access to the device phone number on Android (resolves #21)
```


### 2016.02.01

```
iOS: Added persistent ID storage in the Keychain (resolves #19)
```


### 2016.01.28

```
Fixed issue with ACTIVATE / DEACTIVATE events when not supported (resolves #18)
Android: Add Android Status bar colour (resolves #14)
```


### 2015.10.06

```
Updated documentation (resolves #13)
```


### 2015.07.13

```
Android: Implemented the checkUrlSchemeSupport function
```


### 2015.06.15

```
Added information about the device such as OS version, device name  
Android: Windows: Fix for bug in AIR packager resulting in missing resources
Android: Changed name of resource folder to avoid conflicts
Android: x86 Support
```


### 2015.02.12

```
Changed class structure to support FlashBuilder 4.6
```


### 2015.01.31

```
Added check for .debug suffix in application id
```


### 2014.12.22

```
iOS: Fixed crash on deactivation due to lock/home check (resolves #3)
```


### 2014.12.17

```
iOS: Included arm64 support (resolves #2) 
Android: Corrected application id check when doesn't contain air prefix (resolves #1)
```


### 2014.12.05

```
Corrected missing EventDispatcher functions from base class
iOS: Implemented autoreleasepools for all c function calls
```


### 2014.12.05

```
Corrected missing EventDispatcher functions from base class
iOS: Implemented autoreleasepools for all c function calls
```


### 2014.11.26

```
Updated README with correct links
```


### 2014.11.26

```
New application based key check, removing server checks
```


### 2014.10.22

```
iOS Update for iOS 8
```

