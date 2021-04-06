

###### 2021.04.06 [v10.3.046]

```
Added setUserId and removeUserId to associate custom user identifiers (resolves #485)
```


###### 2021.02.08 [v10.2.043]

```
Corrected missing OneSignal data fields (resolves #480)
```


###### 2021.02.03 [v10.2.039]

```
OneSignal SDK update:
 - iOS v3.1.1
 - Android v4.1.0
```


###### 2021.01.20 [v10.1.025]

```
Firebase SDK update:
 - iOS v7.4.0
 - Android v21.0.1

Firebase In-App Messaging update:
 - iOS v7.4.0
 - Android v19.1.3

Added in-app messaging dismissed event (resolves #475)
```


###### 2020.12.23 [v10.0.016]

```
OneSignal: Added handling of group notifications (resolves #474)
```


###### 2020.12.02 [v10.0.013]

```
Corrected documentation links and FirebaseInitProvider authority (resolves #470)
```


###### 2020.09.01 [v10.0.012]

```
In-App Messaging implementations:
 - One Signal In-App Messaging (resolves #449)
 - Firebase In-App Messaging (resolves #408)

OneSignal SDK update:
 - iOS v2.15.3
 - Android v3.15.3 (#375, #450)

Firebase SDK update:
 - iOS v6.30.0 (resolves #386)
 - Android v20.2.4
```


###### 2020.08.14 [v9.3.231]

```
OneSignal SDK update:
 - iOS v2.14.3
 - Android v3.15.1

```


###### 2020.05.25 [v9.2.222]

```
FCM SDK update:
 - iOS v6.11.0 
 - Android v20.1.6

Azure SDK update:
 - iOS v2.0.4
 - Android v0.6
```


###### 2020.05.04 [v9.0.158]

```
FCM
 - Android SDK update v20.1.6

Fixed several issues around displaying and removing group notifications
```


###### 2020.04.20 [v9.0.155]

```
OneSignal
 - Android SDK update  v3.13.0 (resolves #430)
 - iOS SDK update v2.13.1

Windows: Removed EventLog usage
Windows: Added error checking on setBadgeNumber call
```


###### 2020.03.25 [v9.0.142]

```
Android X migration (resolves #423)
Firebase Cloud Messaging:
  - Android SDK: v20.1.2
  - iOS SDK: v6.2.0

Windows implementation supporting Windows Notification Service

Split Firebase ANE requirement for FCM into common dependency extension  (resolves #421)
iOS: Updated method of deviceToken retrieval for iOS 13 (resolves #398)
```


###### 2020.01.30 [v8.3.049]

```
Improved Android sound handling now resources can be used with AIR 33 (resolves #387)
```


###### 2020.01.30 [v8.3.044]

```
Added ability to request critical alerts (resolves #419)
OneSignal
 - Android SDK update  v3.12.5 
 - iOS SDK update v2.12.5
```


###### 2019.12.11 [v8.2.023]

```
Firebase Cloud Messaging:
  - iOS SDK update v6.2.0
```


###### 2019.11.02 [v8.1.020]

```
OneSignal
 - Android SDK update  v3.12.2 (resolves #401)
 - iOS SDK update v2.11.2
```


###### 2019.08.12 [v8.0.011]

```
Android 64bit support (resolves #389)
Updated minimum iOS version to 9.0
OneSignal
 - Android SDK update  v3.11.2
 - iOS SDK update v2.10.1
Updated OneSignal Android Icon documentation (resolves #393)
FCM: Respected default colour manifest setting for foreground notifications (resolves #374)
OneSignal: corrected iOS init order fixing missing auth events (resolves #397)
```


###### 2019.04.16 [v7.9.301]

```
OneSignal 
  - Android SDK update v3.10.7 (#375)
  - iOS SDK update v2.9.5
```


###### 2019.02.27 [v7.8.295]

```
Updated minimum iOS version to 8.0 
Embedded iOS bitcode
```


###### 2019.02.19 [v7.7.295]

```
iOS: Corrected categories incorrectly being added (resolves #360)
```


###### 2019.02.01 [v7.7.286]

```
OneSignal SDK Update: Android v3.10.6 iOS v2.9.5 (resolves #352)
```


###### 2018.11.27 [v7.7.284]

```
Firebase Cloud Messaging:
  - Android SDK update v17.3.4
  - iOS SDK update v5.13.0

Updated to Google Play Services v16.0.5 
Removed application keys 
```


###### 2018.10.29 [v7.6.275]

```
Android: Created specific file provider to avoid conflicts
Removed application key requirement
```


###### 2018.10.19 [v7.6.272]

```
Android: Corrected action cancel not closing notification panel (resolves #335)
```


###### 2018.09.14 [v7.6.270]

```
OneSignal: Android: Added ability to use a packaged asset for sounds
```


###### 2018.09.06 [v7.6.263]

```
Updated iOS FCM SDK to v5.6.0 (resolves #321)
```


###### 2018.08.11 [v7.6.262]

```
OneSignal 
  - Android SDK update v3.10.1 (#317)
  - iOS SDK update v2.8.6
```


###### 2018.08.02 [v7.5.254]

```
Android: Corrected setBadgeNumber for Android 8
```


###### 2018.07.04 [v7.5.253]

```
OneSignal: Added setLocationShared to service for additional privacy controls (resolves #305) 
OneSignal: iOS: Corrected enableNotificationsWhenActive (resolves #306) 
```


###### 2018.06.10 [v7.5.248]

```
Docs: Corrected FCM manifest additions (#151)
Docs: Added information about colour in FCM payload (#300)
Android: Added ability to set sound on a channel (resolves #298)
```


###### 2018.06.01 [v7.5.245]

```
Updates:
  - Android: Implemented checks for enabled notifications and ability to open device settings (resolves #288)
  - One Signal User consent (resolves #294)

Firebase Cloud Messaging:
  - Android SDK update v17.0.0
  - iOS SDK update v5.1.0

OneSignal 
  - User consent
  - Android SDK update v3.9.1
  - iOS SDK update v2.8.5
  - [migration guide](https://github.com/distriqt/ANE-PushNotifications/wiki/s.OneSignal---Migrating-to-v7.5)
```


###### 2018.04.17 [v7.4.227]

```
Corrected manifest addition documentation for OneSignal (#284)
```


###### 2018.04.07 [v7.4.227]

```
Implemented cancelAll for iOS (resolves #281)
Added Tags for OneSignal (resolves #256)
```


###### 2018.03.15 [v7.4.219]

```
Latest SDK updates and fixes:
  - Removed debug trace (resolves #270)

Firebase Cloud Messaging:
  - Android SDK update v11.8.0
  - iOS SDK update v4.10.1 (#198)

OneSignal: 
  - Android SDK update v3.7.1
  - iOS SDK update v2.7.2 
  - iOS removed dynamic framework requirement, now statically linked (#273)
```


###### 2018.02.14 [v7.3.193]

```
Android 8.0 support - Added channels
```


###### 2017.12.18 [v7.2.187]

```
Updated notification icon documentation
Updated badge number documentation (resolves #249)
Android: Added better handling of FCM display messages (resolves #257)
```


###### 2017.11.27 [v7.1.178]

```
Better Emoji integration
Additional context checks
```


###### 2017.10.31 [v7.0.176]

```
Updated documentation
```


###### 2017.10.31 [v7.0.176]

```
OneSignal Integration (resolves #159)
```


###### 2017.10.03 [v6.8.091]

```
Corrected background image implementation for GCM (#239)
```


###### 2017.09.29 [v6.8.090]

```
Removed Android 8 support while Adobe fix AIR SDK issue
```


###### 2017.09.19 [v6.8.083]

```
Updated documentation for background image
```


###### 2017.09.19 [v6.8.082]

```
Android 8.0: Notification Channels + Badges 
Android: Added background image (resolves #239)
```


###### 2017.09.01 [v6.7.074]

```
Updated documentation
```


###### 2017.09.01 [v6.7.074]

```
Microsoft Azure Notification Hub implementation (resolves #227)
Separated variants into directories
Android: Implemented badge count from notification data (resolves #221)
```


###### 2017.08.04 [v6.6.031]

```
Updated FCM SDK (Android v11.0.4, iOS v4.0.4)
```


###### 2017.07.10 [v6.5.028]

```
Updated Android file paths
```


###### 2017.07.10 [v6.5.027]

```
Updated FCM SDK (Android v11.0.2, iOS v4.0.3)
FCM ability to subscribe to a topic (resolves #111)
Android: Added setBadgeNumber for supported Android devices (resolves #141)
iOS: Better handling of registration events (#213, #188)

iOS 10: Centralisation of new notifications delegate (resolves #177, resolves #201, resolves #219)
```


###### 2017.06.16 [v6.4.006]

```
Updated FCM iOS v4.0.2
```


###### 2017.06.10 [v6.4.005]

```
Updated FCM to Android v11.0.0, iOS v4.0.1
```


###### 2017.06.10 [v6.4.005]

```
Updated FCM to Android v11.0.0, iOS v4.0.1
```


###### 2017.05.31 [v6.3.047]

```
Update to Firebase (FCM) SDK (Android v10.2.6, iOS v4.0.0)
```


###### 2017.05.02 [v6.2.044]

```
Corrected accidental inclusion of debug config files (#208)
```


###### 2017.04.13 [v6.2.043]

```
Correction for should cancel on action (resolves #203)
```


###### 2017.04.12 [v6.2.038]

```
Android: Small fix for startup notifications
```


###### 2017.04.11 [v6.2.036]

```
Corrected priority with GCM (#196)
```


###### 2017.04.06 [v6.2.033]

```
Updated documentation
```


###### 2017.04.06 [v6.2.033]

```
Android: Added ability to set the number of notifications in groupSummary (resolves #197)
Android: Added ability to set priority for headsup notifications (resolves #196) 
Android: Corrected sound access permissions
```


###### 2017.03.23 [v6.2.028]

```
iOS: Corrected inclusion of frameworks that would break app store submission
```


###### 2017.03.15 [v6.1.024]

```
Android: Corrected FCM registration process (resolves #184)
iOS: Added additional checks on authorisation status (resolves #185)
```


###### 2017.03.01 [v6.1.019]

```
Android Update for Google Play Services v10.2.0
```


###### 2017.02.23 [v6.1.018]

```
Updated Firebase iOS SDK to v3.13 (resolves #180)
```


###### 2017.02.08 [v6.1.014]

```
Corrected issue displaying notifications from particular data (resolves #176)
Android: Update to Google Play Services v10.0.1
```


###### 2017.01.30 [v6.1.012]

```
Updated to Google Play Services v10.0.1
```



###### 2017.01.18 [v6.1.004]

```
Updated documentation
```


###### 2017.01.18 [v6.1.004]

```
Updated documentation
```


###### 2017.01.12 [v6.1.004]

```
Updated documentation image links
```


###### 2017.01.12 [v6.1.004]

```
Updated documentation to include service setup tutorials
```


###### 2016.12.30 [v6.1.004]

```
New documentation
```


###### 2016.11.25 [v6.1.004]

```
Added topic subscriptions
Android: Updated to Play Services v9.8.0
```


###### 2016.11.23 [v6.0.034]

```
iOS: Fixed issue with startup auth status being denied on iOS 10
```


###### 2016.10.28 [v6.0.031]

```
iOS 10 update (resolves #145, resolves #142)
Firebase Cloud Messaging (#130, resolves #70)
```


###### 2016.09.01 [v5.3.005]

```
Added ability to open the application device settings (resolves #138)
```


######  2016.08.02

```
Updated far latest Google Play Services libraries
```


######  2016.07.22

```
iOS: Fixed issue with hideAneLibSymbols (resolves #133)
```


######  2016.07.16

```
Updated to be compatible with latest support ANEs (#123)
```


######  2016.07.02

```
Android: Corrected double notification issue on startup when register before activation
Android: Added 'willLaunchApplication' option to actions to allow app to start
```


###### 2016.05.03

```
iOS: Resolved conflicts with GameServices (resolves #104)
```


###### 2016.04.12

```
iOS: Corrected authorisation status value
```


###### 2016.04.12

```
iOS: Corrected authorisation status value
```


###### 2016.03.28

```
Updated readme
```


###### 2016.03.28

```
Complete refactor of the API to allow for future development
Update registration method (resolves #69)
Implemented Actions
Implemented Expanded notifications
Implemented Group notifications
Custom icons (resolves #10, resolves #88)
Background/silent notifications (resolves #76)
```


###### 2015.10.20

```
Fix for error when no notification specified and application not running (resolves #67)
```


###### 2015.09.24

```
iOS 9 updates (#57)
```


###### 2015.09.17

```
Android: Added custom large notification icons (resolves #5)
Android: Added custom notification sound (#5)
Android: Added lights setting
Android: Added a cancelAll function to remove notifications (resolves #40)
Android: Added customisation of variable names to help integration with other platforms (eg OneSignal)
```


###### 2015.06.16

```
Android: Windows: Fix for bug in AIR packager resulting in missing resources
```


###### 2015.06.16

```
Removed debug code from AS lib
iOS: Updated to latest common lib
Android: Windows: Fix for bug in AIR packager resulting in missing resources
Android: x86 Support
```


###### 2015.03.16

```
Android: Fix for incorrectly detecting manifest reciever (#28)
```


###### 2015.03.13

```
Android: Corrected issue when no id supplied in payload
```


###### 2015.03.13

```
Updated documentation
```


###### 2015.03.13

```
Android: Corrected issue with wrong notification data being passed when multiple notifications have been displayed (resolves #24)
```


###### 2015.03.05

```
Separated common app delegates into Core ANE to resolve conflicting ANEs issues
```


###### 2015.02.10

```
Images for second tutorial
```


###### 2015.02.10

```
Images for first tutorial
```


###### 2015.02.10

```
Fixed issue with classes not importing correctly in FlashBuilder 4.6 (resolves #16)
iOS: Permissions implementation to allow developer to display permission dialog at appropriate time (resolves #12)
```


###### 2015.02.03

```
Added check for .debug suffix in application id
```


###### 2014.12.22

```
iOS: Included arm64 support (resolves #3) 
Android: Corrected application id check when doesn't contain air prefix
```


###### 2014.12.17

```
Added SELECTED notification event dispatched when the user selects a notification
Android: Corrected application id check when doesn't contain air prefix
```


###### 2014.12.08

```
Corrected missing EventDispatcher functions from base class
iOS: Implemented autoreleasepools for all C function calls
```


###### 2014.12.01

```
New application based key check, removing server checks
```


###### 01-11-14

```
Added header image
```


###### 01-11-14

```
Android: Addition to correctly handle an invalid id value
```
