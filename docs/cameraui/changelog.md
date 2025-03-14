### 2024.12.12 [v4.0.0]

```
## Major update 

In this update we have moved all the extensions to use the newer gradle dependencies process. 

### Updates

feat(android): move to gradle dependencies
feat(android): add flags to request front camera device - inconsistently handled by camera apps (https://github.com/distriqt/ANE-CameraUI/issues/96)
```

### 2023.02.27 [v3.6.0]

```
feat(android): update permission requirements for latest android versions (resolves #91)  
```

### 2023.02.15 [v3.5.1]

```
fix(android,auth): correct issue with fallback authorisation events being dispatched to wrong extension (resolves #90)
```

### 2023.01.17 [v3.5.0]

```
fix(docs): correct extension id reference in manual add extension docs (#88)
feat(ios): Xcode 14 update, remove bitcode and add no-objc-msgsend-selector-stubs compiler flag 
feat(android): Move to new permissions request process
```

### 2022.02.04 [v3.4.16]

```
Updates for Android 31
Update docs to use apm
```

### 2021.08.30 [v3.4.15]

```
Implemented new Android chooser for specifying alternative camera applications (resolves #80)
```

### 2021.08.23 [v3.4.14]

```
Added airpackage
Android chooser addition for specifying alternative camera applications (#80)
Android 30 updates around deleting files from camera roll (resolves #82)
```



### 2021.04.07 [v3.3.007]

```
Removed ios minimum version linker option
Corrected removal of media data from gallery on Android
```


### 2021.03.05 [v3.2.025]

```
Added video orientation to video capture event (resolves #78)
```


### 2021.03.01 [v3.1.022]

```
Added ability to request audio permission directly (resolves #77)
```


### 2020.03.23 [v3.0.009]

```
Android X migration (resolves #69)
```


### 2019.08.16 [v2.0.004]

```
Android 64bit support (resolves #64)
Updated minimum iOS version to 9.0 
iOS: Added return value for the launch function (resolves #66)
```


### 2019.02.26 [v1.5.025]

```
Updated minimum iOS version to 8.0 
Removed application key requirement (#63)
```


### 2018.06.20 [v1.4.022]

```
Updated documentation on usage description strings (resolves #57, resolves #52)
```


### 2017.08.14 [v1.4.014]

```
Changed save location of temp images to cache directory (resolves #40)
iOS: Memory optimisations (#39)
```


### 2017.07.10 [v1.3.010]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


### 2017.07.02 [v1.3.009]

```
Added checks for CAMERA permission to correctly request if added to manifest (resolves #36)
```


### 2017.03.31 [v1.3.007]

```
Updated documentation for iOS 10
```


### 2017.03.13 [v1.3.007]

```
Added ability to open device settings (resolves #22)
```


### 2017.01.13 [v1.2.004]

```
Added missing auth functions to default lib (resolves #14)
```


### 2017.01.12 [v1.2.003]

```
Added permission request functionality (#7, #12)
```


### 2016.12.21 [v1.0.009]

```
Updated documentation
```


### 2016.12.08 [v1.0.009]

```
Added option for saveToCameraRoll to control image save location 
Added orientation to complete event (resolves #6)
```


### 2016.11.01 [v1.0.005]

```
Android: Fixed issue with multiple FileProviders (resolves #2)
```


### 2016.09.07 [v1.0.002]

```
Initial release
```
