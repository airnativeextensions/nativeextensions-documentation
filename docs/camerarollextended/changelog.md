

###### 2020.09.01 [v6.0.001]

```
Updated Picasso library usage to latest release including latest androidx usages (for compatibility with Firebase In App Messaging)
```


###### 2020.05.15 [v5.1.069]

```
Fixed compatibility issue with other ANEs containing dynamic frameworks
```


###### 2020.03.24 [v5.0.058]

```
Android X migration (resolves #128)
```


###### 2020.03.12 [v4.1.045]

```
iOS: Removed usage of available flags (resolves #127)
```


###### 2020.01.20 [v4.1.044]

```
Dark mode support (resolves #124)
```


###### 2019.10.01 [v4.0.033]

```
Android 64bit support (resolves #122)
Android: Implemented Assets functionality (resolves #114, resolves #113, resolves 3)
Added open setting functionality
Android: Fixed crash with legacy loadAssetByURL (resolves #115, resolves #120)
Added ability to add file directly (resolves #112)
```


###### 2019.03.12 [v3.6.071]

```
Updated minimum iOS version to 8.0
Embedded iOS bitcode
Removed application keys 
```


###### 2018.09.20 [v3.4.043]

```
Extracted square open source library to resolve conflict (resolves #110)
```


###### 2018.02.01 [v3.4.040]

```
Correctly returned ASSET_ERROR when image is too large for a BitmapData (resolves #107)
iOS: Fixed issues with videos in iCloud (resolves #73)
```


###### 2017.08.28 [v3.4.030]

```
iOS library updates for range of bug fixes (#99)
```


###### 2017.07.10 [v3.3.025]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


###### 2017.06.13 [v3.3.024]

```
Android: Updated dependent libraries (#98)
Added minimum count (resolves #82)
```


###### 2017.05.23 [v3.2.012]

```
Android: Added correct loading from content provider sources (resolves #97)
```


###### 2017.01.09 [v3.1.009]

```
iOS: Corrected iOS 7 build (resolves #83)
```


###### 2016.12.23 [v3.1.007]

```
Updating documentation
```


###### 2016.11.28 [v3.1.002]

```
Updated documentation
```


###### 2016.11.28 [v3.1.002]

```
Updated documentation
```


###### 2016.11.28 [v3.1.002]

```
Android: Removed max count of selection to bring custom picker inline with native (resolves #67) 
iOS: Fix for cancel with no assets (resolves #71)
```


###### 2016.10.31 [v3.0.011]

```
Complete rewrite for asset browser
iOS: iCloud corrupted images fix (resolves #56)
```


######  2016.06.22

```
iOS: Rebuild for iOS 8+ for display issues (resolves #64)
Android:  Added retrieval of video orientation (resolves #65)
```


###### 2016.05.27

```
Android: Added retrieval of video dimensions (resolves #62)
```


###### 2016.05.03

```
iOS: Added new iOS 9 method of retrieving asset filename (resolves #60)
Android: Corrected thumbnail generation in custom picker (resolves #31)
```


###### 2016.04.07

```
Added getFileForAssetAsync to handle iOS API change (resolves #54)
```


###### 2016.03.08

```
Android: Implemented the auth status for Android M permissions (resolves #48)
```


###### 2016.03.03

```
iOS: Corrected issue with autoCloseOnCountReached (resolves #50)
```


###### 2016.02.19

```
Added some additional checks when disposing the extension (resolves #46)
```


###### 2016.02.12

```
Android: Fixed some issues with asset loading and permissions (#42)
```


###### 2016.02.03

```
iOS: Fix for language definition error (#40)
```


###### 2016.02.02

```
iOS: Fixed issue with iOS 8 causing crash on load
```


###### 2016.02.01

```
Android: Memory optimisations for large images (#38)
```


###### 2016.01.28

```
iOS: Resolved issue with loading images from My Photo Stream (resolves #39)
Android: Improved memory handling 
Android: Resolved issue with multiple fast sequential asset loads (#38) 
```


###### 2016.01.15

```
Fixed issue with loading a deleted asset (resolves #37)
```


###### 2015.12.09

```
Updated examples
```


###### 2015.12.09

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


###### 2015.10.20

```
Updated default lib with new authorisation functions
```


###### 2015.10.20

```
iOS: Added ability to check whether the user has granted access to photos (resolves #28)
```


###### 2015.09.02

```
Android: Corrected loading of thumbnails, added video browsing, general improvements
```


###### 2015.08.31

```
Android Beta Version (#1)
```


###### 2015.06.15

```
iOS: Updated to latest common lib
Removed debug code from AS lib
Android: Windows: Fix for bug in AIR packager resulting in missing resources
```


###### 2015.02.27

```
Changed class structure to support FlashBuilder 4.6 (#10)
```


###### 2015.02.02

```
Added check for .debug suffix in application id
```


###### 2015.01.22

```
iOS: Implemented reading of the asset Exif and GPS data, added 'metadata' and 'location' variables to the Asset class to hold this information (resolves #3)
```


###### 2015.01.22

```
iOS: Implemented reading of the asset Exif and GPS data, added 'metadata' and 'location' variables to the Asset class to hold this information (resolves #3)
```


###### 2014.12.18

```
iOS: Included arm64 support (resolves #2) 
Android: Corrected application id check when doesn't contain air prefix 
```


###### 2014.12.05

```
Corrected missing EventDispatcher functions from base class
iOS: Implemented autoreleasepools for all C function calls
```


###### 2014.12.01

```
Updated README
```


###### 2014.10.29

```
iOS Update for iOS 8
- iOS: Added new iOS8 process for loading images from Photo Stream (fixes #254, fixes #247) 
```

