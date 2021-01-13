

###### 2021.01.13 [v8.1.021]

```
Gaming Services SDK Added 
 - Game Request Dialog
 - Friend Finder Dialog

Updated SDK 
 - iOS v8.2.0 (resolves #285)
 - Android v8.2.0
```


###### 2020.11.27 [v8.0.013]

```
Major update and refactoring (resolves #277)
Extension has been broken up into Facebook SDK components

Updates
 - Resolved delayed initialisation (resolves #274, resolves #265)
 - Removed the deprecated game request share dialog (resolves #235)
```


###### 2020.08.14 [v7.1.194]

```
Corrected multidex documentation + updated build
```


###### 2020.05.08 [v7.1.193]

```
Updated SDK
 - iOS v5.15.1

Removed discontinued AccountKit (https://developers.facebook.com/blog/post/2019/09/09/account-kit-services-no-longer-available-starting-march) 
 - contained UIWebView usages (resolves #266)
```


###### 2020.03.26 [v7.0.187]

```
Corrected issue with make request events not dispatching (#260)
```


###### 2020.03.23 [v7.0.186]

```
Android X migration (resolves #259)
Updated SDK 
 - iOS: v5.9.0
 - Android: v6.1.0 (resolves #258, resolves #249, #235)
Added functionality to handle batch requests (resolves #257)

```


###### 2019.11.22 [v6.1.173]

```
Updated SDK (resolves #252, resolves #234, #249)
 - iOS: v5.9.0
 - Android: v5.9.0
```


###### 2019.07.31 [v6.0.168]

```
Android 64bit support (resolves #238)
Updated SDK (resolves #236)
 - iOS: v5.3.0  
 - Android: v5.2.0
Added ability to disable / enable automatic logging (resolves #215)
```


###### 2019.03.12 [v5.8.144]

```
Embedded iOS bitcode
```


###### 2019.02.23 [v5.8.143]

```
Updated SDK 
 - iOS: v4.40.0 - January 22, 2019
 - Android: v4.40.0 - January 22, 2019
 - resolves #226
```


###### 2018.11.02 [v5.7.138]

```
Updated SDK 
 - iOS: v4.38.0 - October 23, 2018
 - Android: v4.38.1 - November 1, 2018
```


###### 2018.08.31 [v5.6.131]

```
Improved performance of logEvent and logPurchase calls (resolves #203)
```


###### 2018.07.23 [v5.6.126]

```
Updated SDK 
 - iOS: v4.34.0 - June 18, 2018
 - Android: v4.34.0 - June 18, 2018
(resolves #199, #197, #194, #189, #188) 
```


###### 2018.04.28 [v5.5.122]

```
Added ability to add int/Number typed parameters to a GraphAPIRequest (resolves #193)
```


###### 2018.03.30 [v5.5.120]

```
Corrected graph requests on iOS made with a different access token
```


###### 2018.03.26 [v5.5.118]

```
Updated docs
```


###### 2018.03.26 [v5.5.118]

```
Account Kit dependencies correction (#188)
```


###### 2018.03.13 [v5.5.088]

```
Updated SDK 
 - iOS: v4.30.0 - January 24, 2018
 - Android: v4.30.0 - January 24, 2018
Added Share Open Graph Stories (resolves #162)
Corrected canShow share dialog flags (resolves #173)
Added additional LoginBehaviour options
Added the ShareAPI for dialog free sharing
```


###### 2017.09.08 [v5.4.015]

```
Updated to the latest SDK (v4.26.0 - August 24, 2017)
Corrected missing classes from default lib (resolves #172)
```


###### 2017.07.12 [v5.3.005]

```
Updated to the latest SDK (v4.24.0 - June 26, 2017)
```


###### 2017.07.10 [v5.2.006]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


###### 2017.05.31 [v5.2.002]

```
Updated to the latest SDK (v4.23.0 - May 25, 2017) (#155,#156,#160)
Fixes issue with unsupported language in App Store Review process (resolves #157)
```


###### 2017.04.28 [v5.1.114]

```
Added user properties for AppEvents / Analytics
```


###### 2017.04.02 [v5.0.112]

```
Release v5.0 (resolves #149)
Account Kit Implementation (resolves #129) 
Added System Account Login Behaviour (resolves #108)
Android: Resolved NPE (resolves #144)
Added missing functions for platforms (resolves #127)
Deferred deep linking (resolves #48) 
Game request filters (resolves #74)
Graph API implementation (resolves #136)
New login process (resolves #144, resolves #138, resolves #133, resolves #125, resolves #116, resolves #144, resolves #113, resolves #111, resolves #109, resolves #108, resolves #75)
New share dialogs (resolves #145, resolves #146, resolves #134, resolves #132, resolves #130, resolves #122, resolves #120, resolves #117, resolves #112, resolves #74, resolves #32)
App Links (resolves #128, resolves #48)
```


###### 2017.01.16 [v4.1.011]

```
Updated Android Facebook SDK, new documentation
```


###### 2017.01.05 [v4.1.001]

```
Update to fix some errors with share dialogs
```


###### 2016.09.07 [v4.0.001]

```
Updated documentation
```


###### 2016.09.07 [v4.0.001]

```
Updated documentation
```


###### 2016.08.18 [v4.0.001]

```
Update to latest version, resolving issues with login behaviours and restoring sessions etc
```

###### 2016.05.12

```
iOS: Made some changes to help automatically restore a session. After calling 'initialiseApp', you should receive a SESSION_INFO event if a previous session was found (resolves #28)

Fixed an issue to correctly return the postId of a share post (resolves #57)

Fixed a bug which would not always populate the 'data' parameter of a Game Request object (resolves #65)

Android: Fixed a bug which could cause a crash depending on the result of a graph request call (resolves #89)

Fixed a bug where the recipientIds for a game request were not always correctly returned (resolves #93)

Fixed a bug where the properties for a share dialog would not be passed through successfully in some cases depending on the preferred dialog type (resolves #95)
```


###### 2015.10.27

```
Added missing call to initialiseApp() in example code
```


###### 2015.10.27

```
Updated to FacebookSDK v4.7.0 for iOS to support iOS9 changes; Added a new basic example application and descriptor; Added initial implementation of deferred app-link handling for testing
```


###### 2015.09.18

```
Corrected a bug on Android which could prevent graph requests which contained field parameters from working correctly
```


###### 2015.09.08

```
Updated FacebookSDK to latest version, 5.4.1
```


###### 2015.07.23

```
Made changelog publicly available
```


###### 2015.07.23

```
Made changelog publicly available
```


###### 2015.07.23

```
Updated to support latest version of Facebook's SDK (4.2+)
```


###### 2015.03.12

```
Updated iOS Facebook SDK version and added capability to issue app install events without a session being required
```


###### 2015.02.24

```
Fixed system account login bug for iOS native login
```


###### 2015.01.06

```
iOS: Included arm64 support
```


###### 2014.12.17

```
Re-added support for missing methods - logEvent, logPurchase etc
```


###### 2014.12.11

```
Updated with new base key check etc
```


###### 2014.12.11

```
New application based key check, removing server checks
iOS: Implemented autoreleasepools for all C function calls
Both platforms now support the V2 SDK Message dialog (basic share)
```


###### 2014.12.10

```
First version of FacebookAPI V2 added to new repo
```
