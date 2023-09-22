### 2023.09.22 [v6.6.1]

```
fix(android): correct handling of authorisation denied state, incorrectly returned not_determined resulting in ANRs
```

### 2023.08.18 [v6.6.0]

```
feat(api): update as3 api to include addChannel method similar to push notifications (resolves #202)
```

### 2023.01.27 [v6.5.0]

```
feat(ios): Xcode 14 update, remove bitcode and add no-objc-msgsend-selector-stubs compiler flag (resolves #199)
feat(android): Move to new permissions request process
```

### 2022.12.15 [v6.4.0]

```
feat(android): add android 13 notification permission request
```

### 2022.02.18 [v6.3.1]

```
Android: Fix for issue with Android 12 trampoline incorrectly resolved (resolves #193)
```

### 2022.02.10 [v6.3.0]

```
Update for Android 31 (resolve notification trampoline issue)
Update docs for Android 31
Update docs to use apm
```

### 2021.10.12 [v6.2.0]

```
Add air package
Add windows 64 bit support
```



### 2021.03.16 [v6.1.124]

```
Removed ios_version_min
```


### 2020.08.17 [v6.1.121]

```
Corrected windows cancel operations for scheduled notifications
```


### 2020.04.29 [v6.0.116]

```
Fixed several issues around displaying and removing group notifications (resolves #186)
```


### 2020.03.25 [v6.0.103]

```
Android X migration (resolves #184)
```


### 2019.08.15 [v5.0.009]

```
Android 64bit update (resolves #175)
Updated minimum iOS version to 9.0
Corrected issue with large icon and delayed notifications (resolves #177)
```


### 2019.03.12 [v4.8.125]

```
Updated minimum iOS version to 8.0
Embedded iOS bitcode
```


### 2018.10.29 [v4.7.122]

```
Android: Created specific file provider to avoid conflicts
Android: Added missing Channel sound property for latest Android OS
```


### 2018.10.19 [v4.7.120]

```
iOS: Added limited ability to specify the time for repeat intervals  
Android: Corrected action cancel not closing notification panel

```


### 2018.08.02 [v4.7.114]

```
Android: Corrected setBadgeNumber for Android 8 (resolves #162)
```


### 2018.07.26 [v4.7.111]

```
Corrected clearing of badge with notifications without count (resolves #160)
```


### 2018.07.04 [v4.7.108]

```
Updated Android min sdk documentation (resolves #159)
```


### 2018.02.14 [v4.7.106]

```
Android 8.0 support - Added channels
```


### 2017.12.18 [v4.6.099]

```
Added additional checks to notification builders
Updated notification icon documentation
Updated badge number documentation 
```


### 2017.11.27 [v4.5.092]

```
Better Emoji integration (#148)
Additional context checks (resolves #152)
Removed legacy alert/title requirement (resolves #153)
```


### 2017.09.29 [v4.4.054]

```
Removed Android 8 support while Adobe fix AIR SDK issue
```


### 2017.09.19 [v4.4.052]

```
Android 8.0: Notification Channels + Badges (resolves #145)
Android: Added background image
```


### 2017.07.10 [v4.3.028]

```
Updated Android file paths
```


### 2017.07.10 [v4.3.026]

```
Updated Android file paths
```


### 2017.07.10 [v4.3.025]

```
Android: Added setBadgeNumber for supported Android devices (resolves #110)
iOS 10: Centralisation of new notifications delegate (#132)
```


### 2017.07.05 [v4.2.019]

```
Android: Corrected immediate event with delayed notification (resolves #138)
```


### 2017.07.05 [v4.2.017]

```
iOS: Corrected authorisation status on iOS 10 (resolves #136)
```


### 2017.04.13 [v4.2.011]

```
Fixed Android conflict with Push Notifications service definitions
```


### 2017.04.06 [v4.2.007]

```
Android: Corrected sound access permissions (resolves #128)
```


### 2017.03.26 [v4.2.004]

```
Android: Added setShouldCancelOnAction to make actions close a notification (resolves #112)
Android: Added enableNotificationsWhenActive false (resolves #123)
Added timestamp to notification events (resolves #118)
```


### 2016.12.30 [v4.1.004]

```
Updated documentation
```


### 2016.12.30 [v4.1.004]

```
New documentation
```


### 2016.12.21 [v4.1.004]

```
Updated image
```


### 2016.12.21 [v4.1.004]

```
Changed usage of alert/title/body to be more consistent across platforms and versions
Android: Corrected action dismissing notification (resolves #109)
```

### 2016.12.20 [v4.0.031]

```
Fix for crash on iOS 7
```


### 2016.11.28 [v4.0.030]

```
Added fallback if no body is supplied (resolves #107)
```


### 2016.11.23 [v4.0.029]

```
Updated docs
```


### 2016.11.23 [v4.0.029]

```
iOS 10 updates including: (resolves #97)
 - expanded image style
 - cancel a single notification from displayed and scheduled (resolves #98)
 - display notifications when app is in foreground
Android: Corrected cancel single notification from a group (resolves #103)
Android: Heads-up notifications (resolves #104)
Added openDeviceSettings
```


### 2016.11.15 [v3.7.010]

```
Updated examples
```


### 2016.11.15 [v3.7.010]

```
Updated group example
```


### 2016.11.15 [v3.7.010]

```
Added group summary to collapsed notification state (#100)
```


### 2016.09.18 [v3.7.006]

```
Updated simple example to new API (#89)
```


### 2016.09.07 [v3.7.006]

```
iOS: Added some checks for notifications with unexpected values (resolves #85, #74)
```


### 2016.09.05 [v3.7.004]

```
Updated documentation and version numbering
```


### 2016.08.12 [v3.7.003]

```
Android: Corrected usage of http large icons (resolves #136)
```


###  2016.07.02

```
Android: Corrected double notification issue on startup when register before activation (resolves #58, #71)
Android: Added 'willLaunchApplication' option to actions to allow app to start (resolves #63)
```


###  2016.06.19

```
Android: Increased speed of notify function with large number of delayed notifications (#69)
```


### 2016.05.19

```
Added REPEAT_WEEK and REPEAT_FORTNIGHT intervals (resolves #64)
Android: Corrected operation of on-going notifications (resolves #62)
```


### 2016.05.12

```
Android: Implemented OnGoing Notifications (resolves #60)
```


### 2016.04.27

```
Android: Set delayed notifications to use exact timings on v19+ where possible (resolves #59)
```


### 2016.04.12

```
Removed debug code from example app
```


### 2016.04.12

```
Android: Removed debug code which was slowing down custom sounds (#50)
```


### 2016.04.12

```
iOS: Corrected authorisation status value (resolves #49)
```


### 2016.04.08

```
iOS: Corrected setAlertTitle crash on iOS < 8.2 (resolves #48)
```


### 2016.04.06

```
Corrected references to PushNotifications (#47)
```


### 2016.04.04

```
Updated documentation
```


### 2016.04.04

```
Version 3.0 Release
Notification Actions
Builders for all notification types
Android: Group / Stacking notifications
Android: Expanded view notifications (resolves #45)
Android: Custom icons (resolves #35)
Android: Correctly restore notifications on restart (resolves #44)
Android: Repeat interval implementation (resolves #41)
```


### 2015.10.20

```
Android: Fixed issue with notification being dispatched twice (resolves #17)
```


### 2015.06.16

```
Removed debug code from AS lib
iOS: Updated to latest common lib
Android: Windows: Fix for bug in AIR packager resulting in missing resources
Android: x86 Support
```


### 2015.06.02

```
Repackaged to test distriqt/ANE-Calendar#10
```


### 2015.03.05

```
Separated common app delegates into Core ANE to resolve conflicting ANEs issues
```


### 2015.02.10

```
iOS: Added some additional checks to input variables to isolate crash (#5)
```


### 2015.02.03

```
Added check for .debug suffix in application id
```


### 2014.12.22

```
iOS: Included arm64 support (resolves #1) 
Android: Corrected application id check when doesn't contain air prefix
```


### 2014.12.08

```
Corrected missing EventDispatcher functions from base class
iOS: Implemented autoreleasepools for all C function calls
```


### 2014.12.01

```
New application based key check, removing server checks
```


### 2014.10.18

```
iOS Update for iOS 8
- iOS: Fixed iOS 8 registering for notification permission (resolves #219)
- iOS: Added function to check if user has allowed notifications
- iOS: Fixed vibrate on notification selection (resolves #209, closes #177)
- Android: cancelAll was previously implemented (closes #71)
```
