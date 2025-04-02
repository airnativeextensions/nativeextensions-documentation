### 2025.04.02 [v7.0.1]

```
fix(ios): correct the opening of the review page when calling the rate method (resolves https://github.com/distriqt/ANE-ApplicationRater/issues/93)
```

### 2024.12.11 [v7.0.0]

```
## Major update 

In this update we have moved all the extensions to use the newer gradle dependencies process. 

https://docs.airnativeextensions.com/docs/applicationrater/migrating

feat(android): move to gradle dependencies 
feat(unity): remove old version breaking dependencies
```

### 2024.05.21 [v6.4.2]

```
feat(airpackage): update airpackage dependencies
```

### 2024.05.21 [v6.4.1]

```
feat(android): remove min sdk 24 requirement in preparation of AIR update
```

### 2024.05.08 [v6.4.0]

```
feat(android): update to support v2.0.1 of the Google Play Core review library (resolves #84)
```

### 2024.05.08 [v6.4.0]

```
feat(android): update to support v2.0.1 of the Google Play Core review library (resolves #84)
```

### 2023.06.13 [v6.3.2]

```
fix(android): add additional error checking when dispatching events to catch background app crash (#79)
```

### 2023.05.18 [v6.3.1]

```
fix(android): remove unused encryption code
```

### 2023.01.11 [v6.3.0]

```
feat(dialog): add ability to set the dialog theme (resolves #75)
feat(ios): remove bitcode and add no-objc-msgsend-selector-stubs compiler flag (resolves #74)
feat(android): update to android-play v1.10.3
```

### 2022.11.16 [v6.2.0]

```
feat: add ability to use the Samsung Galaxy Store (resolves #73)
```

### 2022.02.02 [v6.1.3]

```
Add check for isSupported call on unsupported platforms (M1)
Update docs to use apm
Update air package dependencies
```

### 2021.09.09 [v6.1.0]

```
Added air package
Updated com.google.android.play dependency to 1.10.1
```



### 2021.07.19 [v6.0.12]

```
Removed ios minimum version flag
```


### 2021.03.15 [v6.0.011]

```
Updated docs on unity proguard usage and included proguard rules in plugin aar
```

### 2021.02.15 [v6.0.002]

```
Unity plugin release
```


### 2021.02.12 [v5.5.001]

```
Added macOS support including AppStore redirects and Review Controller (resolves #56)
Removed deprecated IOS10 variant
```


### 2021.01.13 [v5.4.012]

```
Added Huawei App Gallery support (resolves #49)
Deprecated wiki
```


### 2020.09.16 [v5.3.008]

```
Corrected issue with hasMetConditions and default params (-1) (resolves #48)
```


### 2020.08.25 [v5.2.001]

```
Implemented Google Play In-App Review
```


### 2020.04.02 [v5.1.016]

```
Added option to require all conditions before hasMetConditions returns true (resolves #45)
```


### 2020.03.23 [v5.0.012]

```
Android X migration (resolves #44)
```


### 2019.08.13 [v4.0.002]

```
Android 64bit update (resolves #40)
Updated minimum iOS version to 9.0
```


### 2019.04.18 [v3.5.080]

```
Android: Added error handling for missing app store application (#37)
```


### 2019.03.12 [v3.5.078]

```
Embedded iOS bitcode
```


### 2019.02.26 [v3.5.075]

```
Updated minimum iOS version to 8.0
```


### 2018.11.06 [v3.4.073]

```
Corrected dispatching of displayed event
```


### 2018.10.13 [v3.4.072]

```
Added null reference check for application launched date (#32)
```


### 2018.10.12 [v3.4.069]

```
Corrected issue with first run initialisation (#31)
```


### 2018.08.29 [v3.4.063]

```
Updated documentation
```


### 2018.08.29 [v3.4.062]

```
Apple TV implementation
iOS: Fixed crash when retrieving application id without network (resolves #28)
iOS: Migrated dialog to latest UIKit implementation

```


### 2017.11.07 [v3.3.043]

```
Updated documentation
```


### 2017.10.25 [v3.3.043]

```
Corrected iOS 11 review link
Created build without review controller (resolves #11, #13)
Added Amazon store support (resolves #14)
Added ability to retrieve the store the application was installed from
Added automatic application id retrieval:
```


### 2017.07.10 [v3.2.015]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


### 2017.05.26 [v3.2.014]

```
Added iOS Review Controller (resolves #9)
```


### 2016.12.22 [v3.1.005]

```
Updating documentation
```


### 2016.12.01 [v3.1.004]

```
Updated documentation with new wiki
```


### 2016.10.05 [v3.1.003]

```
Updated Android dialog theme to device defaults
```


### 2015.06.15

```
iOS: Updated to latest common library
Android: Windows: Fix for bug in AIR packager resulting in missing resources
Android: Changed name of resource folder to avoid conflicts
Android: x86 Support (resolves #2)
```


### 2015.02.12

```
Changed class structure to support FlashBuilder 4.6
```


### 2015.01.31

```
Added check for .debug suffix in application id
```


### 2014.12.18

```
iOS: Included arm64 support (resolves #1) 
Android: Corrected application id check when doesn't contain air prefix 
```


### 2014.12.05

```
Corrected missing EventDispatcher functions from base class
iOS: Implemented autoreleasepools for all c function calls
```


### 2014.11.27

```
Updated README
```


### 2014.11.26

```
New application based key check, removing server checks
```


### 2014.10.22

```
iOS Update for iOS 8
```

