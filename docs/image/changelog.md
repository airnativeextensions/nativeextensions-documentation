### 2024.12.17 [v7.0.0]

```
## Major update 

In this update we have moved all the extensions to use the newer gradle dependencies process. 

### Updates 

feat(android): move to gradle dependencies
feat: marking camera roll functionality as deprecated (resolves #51)
```

### 2023.01.18 [v5.2.0]

```
feat(ios): Xcode 14 update, remove bitcode and add no-objc-msgsend-selector-stubs compiler flag (resolves #50)
feat(android): Move to new permissions request process
```

### 2022.02.07 [v5.1.82]

```
Update air package for Android 31
Update docs for Android 31
```

### 2022.01.20 [v5.1.81]

```
Update documentation to use apm
Add descriptions for air package parameters
Add windows x64 support
```

### 2021.10.05 [v5.1.79]

```
Add air package
Add windows implementation
Add default decoding functionality
Remove ios minimum version flag
Add android activity security
```



### 2020.03.21 [v5.0.007]

```
Android X migration (resolves #49)
```


### 2019.08.15 [v4.0.003]

```
Android 64bit support (resolves #45)
Updated minimum iOS version to 9.0
```


### 2019.03.12 [v3.2.098]

```
Updated minimum iOS version to 8.0
Embedded iOS bitcode
```


### 2018.08.21 [v3.1.097]

```
Android: Added additional memory checks on large image operations (#42)
```


### 2018.08.17 [v3.1.095]

```
Added error events when bitmap could not be retrieved (resolves #43)
```


### 2018.01.18 [v3.1.089]

```
Added ability to take a screenshot (resolves #39)
```

### 2017.10.12 [v3.0.038]

```
Added rotate and resize transformations (resolves #32, resolves #25)
Added checks for directories (resolves #28) 
```


### 2017.07.14 [v2.6.020]

```
Updated documentation to reflect new permissions (resolves #31)
iOS: Added authorisation process for iOS 10+ (resolves #35)
iOS: Cached bitmap data internally to avoid async crash (resolves #30)
```


### 2017.07.10 [v2.5.016]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


### 2016.12.29 [v2.5.015]

```
Updated documentation
```


### 2016.12.29 [v2.5.015]

```
Added runtime authorisation for Android, updated SDKs + documentation
```


### 2016.09.20 [v2.4.004]

```
iOS: Corrected legacy support for pre Photos framework (#19)
```


### 2016.09.16 [v2.4.003]

```
Added ability to set filename of file saved to the camera roll (resolves #19)
```


###  2016.08.01

```
Added function to rotate bitmap data (resolves #21)
```


###  2016.07.05

```
Enhanced saveToCameraRoll enabling format and quality options (resolves #19)
```


###  2016.06.30

```
Added the saveToCameraRoll function to save bitmapData to the users photos (resolves #18)
```


### 2016.05.10

```
Release v2.0
Added native load/decode (resolves #14)
Android: Implemented saveBitmapData function (resolves #17)
Added asynchronous versions of all functions
Added checks on inputs (resolves #6)
```


### 2016.02.25

```
Added checks on the quality value to avoid crashes with extreme values (resolves #10)
```


### 2015.07.09

```
Android: Fix for key verification failing for package names starting with a numerical value (resolves #7)
```


### 2015.06.16

```
Removed debug code from AS lib
iOS: Updated to latest common lib
Android: Windows: Fix for bug in AIR packager resulting in missing resources
Android: x86 Support
```


### 2015.02.02

```
Added check for .debug suffix in application id
```


### 2014.12.20

```
iOS: Included arm64 support (resolves #2) 
Android: Corrected application id check when doesn't contain air prefix 
```


### 2014.12.05

```
Corrected missing EventDispatcher functions from base class
iOS: Implemented autoreleasepools for all C function calls
```


### 2014.12.01

```
New application based key check, removing server checks
```
