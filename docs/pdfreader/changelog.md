###### 2021.10.12 [v5.0.26]

```
Add air package
```



###### 2021.07.30 [v5.0.25]

```
Resolved crash on Android when viewing truncated pdfs (resolves #89)
Android: Implemented shouldOverrideLinks behaviour to intercept url links
```


###### 2020.04.17 [v5.0.013]

```
Added better error handling including errorCode on event for http status (resolves #83)
```


###### 2020.03.20 [v5.0.008]

```
Android X migration (resolves #82)
```


###### 2019.07.04 [v4.0.003]

```
Android 64bit support (resolves #75)
```


###### 2019.03.07 [v3.7.177]

```
Corrected cancelation of loading on dispose (resolves #70)
```


###### 2018.10.29 [v3.6.174]

```
Android: Created specific file provider to avoid conflicts
```


###### 2018.09.27 [v3.6.171]

```
Corrected iOS version with removal of keys
Updated android pdfview lib (#60, #68)
Added Android orientation (resolves #62)
```


###### 2018.02.14 [v3.5.099]

Android: complete rewrite of PDF viewer including better scrolling approach (resolves #56)


###### 2017.11.23 [v3.4.041]

Android: Corrected shown and hidden events (resolves #51)
iOS: Added title to iPhone resolution devices (resolves #52)


###### 2017.08.30 [v3.4.031]

iOS: Changed interactions when zoomed (resolves #22)


###### 2017.08.16 [v3.3.026]

Android: Added work around for certificate issues on Android 4.4 and lower (resolves #44)


###### 2017.07.24 [v3.3.011]

Added ability to control cache using setCachePolicy (resolves #42)


###### 2017.07.10 [v3.2.003]

Updated for compatibility with new Core library (for Notifications/PushNotifications fix)


###### 2017.06.19 [v3.2.002]

Page control current/total/change (resolves #32, resolves #39)


###### 2016.12.30 [v3.1.022]

Updated documentation


###### 2016.12.30 [v3.1.022]

Updated build method + new documentation


###### 2016.11.22 [v3.0.017]

iOS: Added ability to hide the title and page bars (resolves #34)


###### 2016.09.16 [v3.0.014]

Fit mode
Android: Transparent background
Android: Improved touch interactions
Android: Corrected initial viewport (resolves #29)


######  2016.08.01

Complete rewrite with new PDFView features to manage a view 
Android implementation (resolves #9)
iOS: Complete rewrite and a range of bug fixes (#15, #14, resolves #7)
iOS: Print options (resolves #6)


###### 2015.06.29

Fixed crash when calling dispose
Added a resetState option to showPDF to allow clearing of the stored page index (resolves #10)


###### 2015.06.16

Removed debug code from AS lib
iOS: Updated to latest common lib
Android: Windows: Fix for bug in AIR packager resulting in missing resources


###### 2015.03.18

Corrected status bar operation when not in fullscreen (resolves #4)
Added 'Share' option to display share actions


###### 2015.02.19

Changed class structure to support FlashBuilder 4.6 (resolves #2)


###### 2015.02.03

Added check for .debug suffix in application id


###### 2014.12.22

iOS: Included arm64 support (resolves #1) 
Android: Corrected application id check when doesn't contain air prefix


###### 2014.12.08

Corrected missing EventDispatcher functions from base class
iOS: Implemented autoreleasepools for all C function calls


###### 2014.12.01

New application based key check, removing server checks


###### 2014.10.20
iOS Update for iOS 8
- iOS: Updated core library version to fix crashes on iOS 8 (resolves #243)
- iOS: Changed name of localizable strings to avoid conflicts (resolves #135)