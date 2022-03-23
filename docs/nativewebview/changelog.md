### 2022.03.23 [v5.3.10]

```
Correct reporting of isSupported for M1 macOS (resolves #283)
```

### 2022.02.08 [v5.3.9]

```
Update package and docs for Android 31
Update docs to use apm
```



### 2021.10.25 [v5.3.8]

```
Update Android for API 30, include queries requirement in docs (resolves #271)
Add new airbridge.js to add a message stack to handling multiple messages (resolves #267)
```

### 2021.10.12 [v5.3.7]

```
Add air package
Android: Activity window security flag updates (resolves #250)
Android: Corrected draw viewport functionality on android
Windows: Added windows 64bit support (resolves #255)
```



### 2021.04.21 [v5.2.383]

```
iOS: Fixed issue with browser view failing to initialise correctly (resolves #252)
```


### 2020.12.11 [v5.2.378]

```
Windows: Corrected broken default CachePolicy implementation (resolves #233)
Windows: Changed storage location of debug.log output (resolves #234)
```


### 2020.12.04 [v5.2.362]

```
Fixed browser view failing on devices with Chrome not set as default browser (resolves #232)
Applied global user agent as default for all web views
Windows: Implemented cache policy (resolves #231)
Deprecated wiki
```


### 2020.11.16 [v5.1.341]

```
Android: Fix for Android WebView bug with href links on images (resolves #229)
```


### 2020.11.11 [v5.1.338]

```
Android: Implemented linkTargetAction (resolves #227)
macOS/iOS fixed clearing of cookies with latest OS versions 
Added pageUp/pageDown/scrollTo/scrollBy functionality
Windows: Changed the way target=_blank are handled (resolves #222)
Windows: Added ability to set additional cef command line args (resolves #224)
```


### 2020.10.02 [v5.0.269]

```
Windows implementation
macOS implementation

Updates:
  - New initialisation process
  - Android: Added handling of potential null reference (resolves #213)
```


### 2020.03.20 [v4.0.025]

```
Android X migration (resolves #206)
iOS: Removed UIWebView usage to comply with Apple deprecation (resolves #194)
```


### 2020.02.07 [v3.0.020]

```
Updated docs
```


### 2020.02.07 [v3.0.020]

```
Android: Added some additional handling of the airbridge before page load complete (#205)
```


### 2019.10.16 [v3.0.017]

```
iOS: Fixed NSInternalInconsistencyException crash due to multiple identical load requests (resolves #196)
```


### 2019.09.10 [v3.0.015]

```
Android 64bit support (resolves #188)
iOS: Keyboard hides input area (resolves #134)
iOS: WebView notch related issues (resolves #187, resolves #186, resolves #180)
iOS: BrowserView corrected issue with notch and hidden status bar (resolves #176)
iOS: Changed the default to use WKWebView if useWebKitIfAvailable not specified (#194)
Android: Resolved scroll issue (resolves #177)
Android: Resolved text input focus issues (resolves #154)
Android: Fixed crash on Android 4.4 (resolves #144)
```


### 2019.02.27 [v2.5.182]

```
Updated minimum iOS version to 8.0 (resolves #183)
Embedded iOS bitcode

```


### 2018.12.05 [v2.4.174]

```
iOS: Corrected access to cookies on iOS 12 (resolves #171)
```


### 2018.06.20 [v2.3.157]

```
iOS: Corrected timing of browser view closed event (resolves #162)
```


### 2018.05.30 [v2.3.148]

```
Android: Added ability for video to go fullscreen (resolves #145)
Android: Implemented disableLongPressGestures to disable copy / paste menu (resolves #113)
BrowserView: Added cause to events to distinguish close reason (resolves #158)
```


### 2018.04.17 [v2.2.118]

```
Added options for browser view including colour and animations (resolves #90)
Added ability to get cookies from current page (resolves #146)
Added scroll bar style settings to control colour (resolves #123)
Android: Fixed issue with loading linked local files (resolves #148, resolves #136)
Android: Fixed double load of initial load url page (resolves #83)
iOS: Resolved webkit cookie header issue (resolves #109)
```


### 2018.03.14 [v2.2.039]

```
iOS: Corrected browser view close button (#139)
```


### 2018.02.28 [v2.2.038]

```
Added the ability to close a browser view (resolves #139)
iOS: Corrected local file access for WKWebView version (resolves #141)
iOS: Limited display of PIP (resolves #131)
```


### 2018.01.10 [v2.1.021]

```
Android: Implemented ‘allow zooming’ flag (resolves #135)
```


### 2017.08.08 [v2.1.009]

```
Updated documentation
```


### 2017.08.08 [v2.1.006]

```
Visibility flag (resolves #9)
Added setViewPort function
```


### 2017.07.10 [v2.0.023]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


### 2017.06.23 [v2.0.022]

```
Updated browser view example
```


### 2017.06.23 [v2.0.022]

```
Added browser view example (#118)
```


### 2017.03.01 [v2.0.020]

```
Improved cookie handling with WKWebView (resolves #85)
```


### 2017.01.10 [v2.0.015]

```
Updated build for iOS 7 crash (resolves #98)
```


### 2016.12.30 [v2.0.014]

```
Updated documentation
```


### 2016.12.30 [v2.0.014]

```
Updated documentation
```


### 2016.12.30 [v2.0.014]

```
New documentation
```


### 2016.12.03 [v2.0.014]

```
Corrected documentation (resolves #88)
```


### 2016.11.30 [v2.0.014]

```
Updated documentation
```


### 2016.11.30 [v2.0.014]

```
Added Browser View for simple web page viewer (resolves #80)
```


### 2016.08.08 [v1.23.001]

```
Added geolocation settings (resolves #72)
Implemented new versioning system
```


###  2016.08.01

```
Added cookie manager and a removeAllCookies function (resolves #58)
```


###  2016.06.15

```
Added setFocus and focus events function
Android: Corrected text field focus operation (resolves #51) 
Android: Added ability to move content for input below keyboard (resolves #35)
iOS: Added keyboardDisplayRequiresUserAction (resolves #50)
```


### 2016.05.10

```
Android: Added mediaPlaybackRequiresUserAction allowing autoplay video (resolves #47)
```


### 2016.05.02

```
Added custom request headers (resolves #37)
Android: Fixed disposal of videos (resolves #45)
```


### 2016.04.26

```
Added cache memory and disk size control
```


### 2016.04.26

```
Android: Corrected issue when file chooser active when app moved to background (#42)
```


### 2016.04.12

```
Android: Added check for BrowseActivity and updated documentation (#42)
```


### 2016.04.11

```
Added allowScrolling property to disable scrolling on a WebView (resolves #41)
Android: Implemented file form input launching a browse activity (resolves #42) 
```


### 2016.03.13

```
iOS: Removed setAnimationsEnabled call affecting animations (#39)
```


### 2016.03.06

```
Corrected default lib missing variable (resolves #38)
```


### 2016.02.19

```
iOS: Update for loading local files in WKWebView on iOS 9 (#34)
```


### 2016.02.02

```
Android: Fix for window.location incorrectly returning for local files (#32)
```


### 2016.01.29

```
Android: Fixed issue with comments in javascript stopping page from loading correctly
```


### 2015.12.03

```
iOS: Fixed issue with WKWebView userAgent on first view
```


### 2015.11.27

```
iOS: Implemented WKWebView as alternative for UIWebView   
Android: Corrected keyboard event interception preventing webview inputs (resolves #15)
Android: Added some additional clean up on web view disposal (#14)
Android: Fixed issue with removeEventListener (resolves #13)
Added ability to specify baseUrl for loadString to use local assets in loaded html (resolves #17)
Android: Fixed loading of local assets from local html (resolves #27)
iOS: Added option to disable long press gestures (resolves #20)
```


### 2015.07.23

```
Android: Corrected last historyBack operation on local files (resolves #5)
```


### 2015.07.23

```
Added additional checks around the location property (#1)
iOS: Corrected changing event dispatch (resolves #3)
```


### 2015.07.22

```
Android: Fixed issue with url encoded html links (#2)
```


### 2015.07.22

```
Android: Fixed passing get parameters to local files (#2)
```


### 2015.07.22

```
Corrected processing of url to correctly handle url encoded strings (#2)
Android: Added permission to load scripts in local files
```


### 2015.07.20

```
Android: Added backgound colour and transparency options
```


### 2015.07.20

```
Added example packaged html files and airbridge.js
```


### 2015.07.20

```
Release version v1.0

```