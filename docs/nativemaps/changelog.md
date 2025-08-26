### 2025.08.26 [v7.0.0]

```
feat(android): update play maps sdk v19.2.0
fix(android): resolve hide map issue with recent android armv8 (resolves https://github.com/distriqt/ANE-NativeMaps/issues/234) 
```

### 2024.12.19 [v6.0.0]

```
## Major update 

In this update we have moved all the extensions to use the newer gradle dependencies process. 

### Updates 

feat(android): move to gradle dependencies
```

### 2023.01.26 [v5.2.0]

```
feat(ios): Xcode 14 update, remove bitcode and add no-objc-msgsend-selector-stubs compiler flag 
feat(android): Move to new permissions request process
```

### 2022.03.09 [v5.1.0]

```
Android: Updated Maps SDK to v18.0.2

Update package and docs for Android 31 and latest dependencies
Added descriptions to air package parameters
```

### 2022.02.08 [v5.0.18]

```
Update package and docs for Android 31
Update docs to use apm
Fix missing dependency and config parameters in air packages
```

### 2021.10.08 [v5.0.17]

```
Add air package
Remove ios minimum version flag
Add security flag to auth activity on android
```



### 2020.03.20 [v5.0.011]

```
Android X migration (resolves #214)
```


### 2019.11.21 [v4.0.008]

```
iOS: Corrected custom marker drag interactions (resolves #212)
```


### 2019.10.17 [v4.0.003]

```
Updated documentation
```


### 2019.08.15 [v4.0.003]

```
Android 64bit support (resolves #207)
Updated minimum iOS version to 9.0
```


### 2019.04.02 [v3.5.211]

```
Updated minimum iOS version to 8.0
Embedded iOS bitcode
```


### 2018.11.27 [v3.4.208]

```
Updated documentation
```


### 2018.11.27 [v3.4.207]

```
Updated to Google Play Services v16.0.5 
Removed application keys 
```


### 2018.11.14 [v3.3.202]

```
Android: Added additional checks on map ready handler (#198)
```


### 2018.06.01 [v3.3.201]

```
Android: Updated to Google Play Services v15+
```


### 2018.03.02 [v3.3.199]

```
iOS: Changed z-index implementation on iOS 11 + to fix crashes (resolves #188)
```


### 2018.02.27 [v3.3.166]

```
iOS: Fixed crash with destroy map containing markers (resolves #188)
```


### 2018.01.09 [v3.3.156]

```
iOS: Resolved visibility issue (resolves #185)
iOS: Resolved iOS 11 z-index issues (resolves #179)
Android: Improved performance of Polyline additions (resolves #126)
Android: Improved performance of Polygon additions (resolves #178)
Added PolyUtils
```


### 2017.10.13 [v3.2.098]

```
Updated documentation (resolves #170)
```


### 2017.09.02 [v3.2.096]

```
Fixed issue with updating first added marker (resolves #163)
```


### 2017.09.01 [v3.2.092]

```
Android: Fixed issue with resetting anchor point for default icons (resolves #164)
```


### 2017.08.31 [v3.2.090]

```
Added Marker z index (resolves #121) 
Added Custom Marker Icon offsets (resolves #54)
iOS: Migrated to camera calls for all view actions (resolves #156, resolves #157 resolves #158)
iOS: Corrected setCentre zoom issue (resolves #155)
iOS: Added traffic for MapKit on iOS > 9
```


### 2017.07.10 [v3.1.050]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


### 2017.03.13 [v3.1.049]

```
Android: Corrected authorisation status response (resolves #134)
Android: Fix for prepareViewOrder hiding Stage elements (resolves #43)
Projection implementation for screen / location conversions (resolves #115)
Added some createMap viewport checks (resolves #97)
```



### 2016.12.30 [v3.1.040]

```
Updated documentation
```


### 2016.12.02 [v3.1.040]

```
iOS: Corrected setBearing and setAltitude animation flags (resolves #111)
```


### 2016.11.28 [v3.1.039]

```
Updated example
```


### 2016.11.28 [v3.1.039]

```
Android: Corrected showMap and hideMap functionality (resolves #85)
Android: Added clear map styles by passing null (resolves #107)
Android: Added check for bounds
Removed limitation on setTilt method (resolves #109)
```


### 2016.11.24 [v3.1.033]

```
Android: Added setMapStyle for styling support (resolves #102)
Added mapToolbarEnabled to options to disable directions and open in google maps options on a marker (resolves #101) 
Android: Fixed crash when dispose map while moving (#99)
iOS: Added showScale to show the scale (resolves #86)
```


### 2016.11.15 [v3.1.028]

```
Updated example to new API
```


### 2016.11.13 [v3.1.028]

```
Changed createMap function to accept an initial position and zoom (resolves #95)
Android: Corrected update marker function (resolves #93)
```


### 2016.11.13 [v3.1.028]

```
Changed  function to accept an initial position and zoom (resolves #95)
Android: Corrected update marker function (resolves #93)
```


### 2016.11.01 [v3.1.016]

```
iOS: Corrected custom marker image scaling (resolves #92)
```


### 2016.11.01 [v3.1.014]

```
Removed debug trace statements (#91)
```


### 2016.11.01 [v3.1.013]

```
Corrected issue with marker events (resolves #91)
```


### 2016.10.31 [v3.1.004]

```
Added new drag touch events (resolves #89)
```


### 2016.10.18 [v3.0.019]

```
Android: Fixed zoom changing during call to setCentre (resolves #81)
```


### 2016.10.07 [v3.0.018]

```
Major update to latest APIs and many bug fixes (resolves #72, resolves #77, resolves #76, resolves #70, resolves #69, resolves #60, resolves #44, resolves #38)
Android: Corrected view order (resolves #52)
Android: Dangerous permissions for v23+ (resolves #51)
Android: Fixed keyboard event issues (resolves #37)
```


### 2015.11.26

```
Update ANE file
```


### 2015.11.24

```
Added key press handlers and redirection from the map view to correctly pass key events to the AIR application
```


### 2015.03.20

```
Correctly added the new version of the ANE
```


### 2015.03.19

```
Updated to use our shared GooglePlayServices library, added a fix for z-ordering issued on Android
```


### 2015.01.06

```
Added 64bit support, added support for new iOS8 location permissions to allow geolocation services
```


### 2014.12.12

```
Updated example changing references to 'developer key'
```


### 2014.12.11

```
New application based key check, removing server checks
iOS: Implemented autoreleasepools for all C function calls
```
