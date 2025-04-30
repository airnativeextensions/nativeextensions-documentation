### 2025.04.30 [v8.0.1]

```
fix(android): correctly release loaded image data (resolves https://github.com/distriqt/ANE-CameraRollExtended/issues/156)
```

### 2024.12.11 [v8.0.0]

```
## Major Update

In this update we have moved all the extensions to use the newer gradle dependencies process. We also have added a new "permissionless" version of the extension which requires greatly reduced permissions but can only perform simple selection and load operations. 

https://docs.airnativeextensions.com/docs/camerarollextended/migrating-to-v8.0

feat(android): move to gradle dependencies
feat(android): add permissionless picker to allow picking images without read authorisation (resolves https://github.com/distriqt/ANE-CameraRollExtended/issues/154)
feat(android): add ability to use `addBitmapData` without any read permissions added to the app (resolves https://github.com/distriqt/ANE-CameraRollExtended/issues/152)
```

### 2024.05.20 [v7.1.0]

```
feat(android): update dependencies to align with other extensions
```

### 2023.09.16 [v7.0.2]

```
fix(android): correct issue with load asset using best fit when image required rotation (resolves #146)
```

### 2023.06.12 [v7.0.1]

```
fix(android): update authorisation process for Android 33+ (resolves #141)
feat(android,ios): add native addBitmapData and improve addFile functionality to support latest Android implementations 
```

### 2023.01.16 [v6.4.0]

```
feat(ios): Xcode 14 update, remove bitcode and add no-objc-msgsend-selector-stubs compiler flag (resolves #140)
feat(android): Move to new permissions request process
```

### 2022.03.29 [v6.3.0]

```
Add support for limited authorisation on iOS where a user selects a subset of photos for access 
Add ability to display limited selection change dialog 
```

### 2022.02.04 [v6.2.2]

```
Updates for Android 31
Update docs to use apm
```

### 2021.12.15 [v6.2.1]

```
Update air package parameter descriptions
```

### 2021.11.09 [v6.2.0]

```
Implement iOS native browse view controller on iOS 14+ (resolves #138)
Update iOS load asset resizing process for iOS 15 changes (resolves #135)
```

### 2021.09.24 [v6.1.10]

```
Added air package 
Updated build to latest
Removed ios minimum version flag
```



### 2021.06.29 [v6.1.9]

```
Updated iOS modal presentation style to correctly dispatch cancel event (resolves #134)
```


### 2021.06.15 [v6.1.007]

```
Android: Corrected issue with parcelable extra with mutliple select browse on certain devices (resolves #133)
```


### 2020.09.01 [v6.0.001]

```
Updated Picasso library usage to latest release including latest androidx usages (for compatibility with Firebase In App Messaging)
```


### 2020.05.15 [v5.1.069]

```
Fixed compatibility issue with other ANEs containing dynamic frameworks
```


### 2020.03.24 [v5.0.058]

```
Android X migration (resolves #128)
```


### 2020.03.12 [v4.1.045]

```
iOS: Removed usage of available flags (resolves #127)
```


### 2020.01.20 [v4.1.044]

```
Dark mode support (resolves #124)
```


### 2019.10.01 [v4.0.033]

```
Android 64bit support (resolves #122)
Android: Implemented Assets functionality (resolves #114, resolves #113, resolves 3)
Added open setting functionality
Android: Fixed crash with legacy loadAssetByURL (resolves #115, resolves #120)
Added ability to add file directly (resolves #112)
```


### 2019.03.12 [v3.6.071]

```
Updated minimum iOS version to 8.0
Embedded iOS bitcode
Removed application keys 
```


### 2018.09.20 [v3.4.043]

```
Extracted square open source library to resolve conflict (resolves #110)
```


### 2018.02.01 [v3.4.040]

```
Correctly returned ASSET_ERROR when image is too large for a BitmapData (resolves #107)
iOS: Fixed issues with videos in iCloud (resolves #73)
```


### 2017.08.28 [v3.4.030]

```
iOS library updates for range of bug fixes (#99)
```


### 2017.07.10 [v3.3.025]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


### 2017.06.13 [v3.3.024]

```
Android: Updated dependent libraries (#98)
Added minimum count (resolves #82)
```


### 2017.05.23 [v3.2.012]

```
Android: Added correct loading from content provider sources (resolves #97)
```


### 2017.01.09 [v3.1.009]

```
iOS: Corrected iOS 7 build (resolves #83)
```


### 2016.12.23 [v3.1.007]

```
Updating documentation
```


### 2016.11.28 [v3.1.002]

```
Updated documentation
```


### 2016.11.28 [v3.1.002]

```
Updated documentation
```


### 2016.11.28 [v3.1.002]

```
Android: Removed max count of selection to bring custom picker inline with native (resolves #67) 
iOS: Fix for cancel with no assets (resolves #71)
```


### 2016.10.31 [v3.0.011]

```
Complete rewrite for asset browser
iOS: iCloud corrupted images fix (resolves #56)
```


###  2016.06.22

```
iOS: Rebuild for iOS 8+ for display issues (resolves #64)
Android:  Added retrieval of video orientation (resolves #65)
```


### 2016.05.27

```
Android: Added retrieval of video dimensions (resolves #62)
```


### 2016.05.03

```
iOS: Added new iOS 9 method of retrieving asset filename (resolves #60)
Android: Corrected thumbnail generation in custom picker (resolves #31)
```


### 2016.04.07

```
Added getFileForAssetAsync to handle iOS API change (resolves #54)
```


### 2016.03.08

```
Android: Implemented the auth status for Android M permissions (resolves #48)
```


### 2016.03.03

```
iOS: Corrected issue with autoCloseOnCountReached (resolves #50)
```


### 2016.02.19

```
Added some additional checks when disposing the extension (resolves #46)
```


### 2016.02.12

```
Android: Fixed some issues with asset loading and permissions (#42)
```


### 2016.02.03

```
iOS: Fix for language definition error (#40)
```


### 2016.02.02

```
iOS: Fixed issue with iOS 8 causing crash on load
```


### 2016.02.01

```
Android: Memory optimisations for large images (#38)
```


### 2016.01.28

```
iOS: Resolved issue with loading images from My Photo Stream (resolves #39)
Android: Improved memory handling 
Android: Resolved issue with multiple fast sequential asset loads (#38) 
```


### 2016.01.15

```
Fixed issue with loading a deleted asset (resolves #37)
```


### 2015.12.09

```
Updated examples
```


### 2015.12.09

```
Android support (resolves #1)
Added getFileForAsset function to retrieve a File instance for an Asset (resolves #16, resolves #32)
Android: Fixed back button interaction on non native picker (resolves #30)
Android: Implemented hasAccess + authorisationStatus functions (resolves #35)
Android: Fixed browsing of both VIDEO and IMAGE (resolves #33)
Android: Improved asset loading procedure (resolves #36)
iOS: Moved to the new Photos Framework for iOS > 8 (resolves #20)
iOS: Corrected whitespace in newer screen resolutions (resolves #17)
iOS: Memory improvements (#34, #19, #22, #15)
iOS: Added indicators to videos to separate from images (resolves #11)
iOS: Allowed selection from different albums (iOS > 8) (resolves #9)
```


### 2015.10.20

```
Updated default lib with new authorisation functions
```


### 2015.10.20

```
iOS: Added ability to check whether the user has granted access to photos (resolves #28)
```


### 2015.09.02

```
Android: Corrected loading of thumbnails, added video browsing, general improvements
```


### 2015.08.31

```
Android Beta Version (#1)
```


### 2015.06.15

```
iOS: Updated to latest common lib
Removed debug code from AS lib
Android: Windows: Fix for bug in AIR packager resulting in missing resources
```


### 2015.02.27

```
Changed class structure to support FlashBuilder 4.6 (#10)
```


### 2015.02.02

```
Added check for .debug suffix in application id
```


### 2015.01.22

```
iOS: Implemented reading of the asset Exif and GPS data, added 'metadata' and 'location' variables to the Asset class to hold this information (resolves #3)
```


### 2015.01.22

```
iOS: Implemented reading of the asset Exif and GPS data, added 'metadata' and 'location' variables to the Asset class to hold this information (resolves #3)
```


### 2014.12.18

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
Updated README
```


### 2014.10.29

```
iOS Update for iOS 8
- iOS: Added new iOS8 process for loading images from Photo Stream (fixes #254, fixes #247) 
```

