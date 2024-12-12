### 2024.12.12 [v7.0.0]

```
## Major update 

In this update we have moved all the extensions to use the newer gradle dependencies process. 

### Updates

feat(android): move to gradle dependencies
```

### 2023.11.23 [v6.0.1]

```
feat(ios): move to Apple's modern Contacts framework (resolves #81, resolves #71)
feat(android,ios): add ability to save notes, social services and websites when adding a contact (resolves #23)
```

### 2023.09.06 [v5.1.1]

```
fix(android): correct android auth usage of write external storage (#82)
```

### 2023.01.17 [v5.1.0]

```
feat(ios): Xcode 14 update, remove bitcode and add no-objc-msgsend-selector-stubs compiler flag 
feat(android): Move to new permissions request process
```

### 2022.02.04 [v5.0.12]

```
Update package descriptions 
Improve add the extension docs
```

### 2022.01.25 [v5.0.10]

```
Update for Android 11 queries and Android 12 exported requirements
```

### 2021.12.16 [v5.0.9]

```
Add air package parameter descriptions
```

### 2021.09.24 [v5.0.8]

```
Added air package
Added android x64 support
Removed ios minimum version flag
Updated build
```



### 2020.03.23 [v5.0.006]

```
Android X migration (resolves #76)
```


### 2019.08.16 [v4.0.002]

```
Android 64bit support (resolves #74)
Updated minimum iOS version to 9.0 
```


### 2019.03.14 [v3.9.029]

```
Updated minimum iOS version to 8.0
Embedded iOS bitcode
Removed application keys 
```


### 2018.03.11 [v3.8.027]

```
Corrected release build process (resolves #67)
```


### 2018.01.18 [v3.8.019]

```
Android: Made authorisation request dependent on manifest permissions (resolves #65)
```


### 2017.07.10 [v3.8.014]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


### 2017.02.07 [v3.8.013]

```
Android: Correction for timestamp on devices pre API 18 (resolves #49)
Android: Added additional checks for activity availability (#47)
```


### 2016.12.21 [v3.8.012]

```
Updating documentation
```


### 2016.12.21 [v3.8.012]

```
Updating documentation
```


### 2016.12.21 [v3.8.012]

```
Updating documentation
```


### 2016.11.30 [v3.8.012]

```
Automatically load image from contact picker ui (resolves #44)
Memory optimisations for loading images (#41)
```


### 2016.11.21 [v3.8.006]

```
Added wiki documentation
```


### 2016.09.05 [v3.8.002]

```
Android: Corrected async operation interfering with other native processes (resolves #33)
```


###  2016.07.04

```
iOS: Corrected getContactDetails and showContactPicker returning limited set of data (resolves #29)
```


###  2016.07.02

```
iOS: Fixed issue when selecting contact on iOS 9 (resolves #28)
iOS: Fixed crash 'EXC_BAD_ACCESS DTCNABController' (resolves #25)
```


###  2016.06.15

```
Android: Corrected image loading on Android 6 (resolves #26)
```


### 2016.05.03

```
iOS: Fixed memory related issue which may cause an occasional crash
```


### 2016.04.07

```
Added permission checks for Android 6+ and updated iOS (resolves #20)
Android: Added check for intent in showContactPicker (resolves #22)
```


### 2016.02.22

```
Android: Corrected organisation field when not tagged as work (resolves #19)
```


### 2015.12.29

```
Retrieve JSON array of contact list
Retrieve contacts by modification date (resolves #14)
Additional fields (Prefix, Suffix, Nickname, SocialService's, Instant Message service, url, notes, related names) 
Save contact images to directory
Bug fixes (resolves #12)
Fix for package names starting with numbers (resolves #15)
Fixed issue with missing contacts (resolves #11)
Documentation updates
```


### 2015.08.13

```
Corrected organisation field saving in addContact (resolves #9)
```


### 2015.06.15

```
Changed default behaviour of image retrieval
Removed debug code from AS lib
iOS: Updated to latest common lib
Android: Windows: Fix for bug in AIR packager resulting in missing resources
Android: x86 Support
```


### 2015.06.05

```
Android: Corrected getContactDetails operation on Lollipop. Was incorrectly retrieving email addresses
```


### 2015.06.03

```
Implemented the ability to add a contact to the user's contacts
Added retrieval of contact images (thumbnails) 
Android: Updated contacts query method for Lollipop 
Corrected emailCount and phoneCount on basic contact list (resolves #5)
```


### 2015.03.18

```
iOS: Fixed crash on startup when user had denied access (resolves #4)
```


### 2015.03.10

```
iOS: Corrected crash when calling functions within a small interval
```


### 2015.03.10

```
iOS: Corrected crash when calling functions within a small interval
```


### 2015.03.10

```
iOS: Corrected contact picker on iOS 8 not correctly returning selection (resolves #2)
Added mailing address information to returned details (resolves #3)
```


### 2015.02.12

```
Final updates and checks for release
```


### 2015.02.02

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
iOS: Implemented autoreleasepools for all C function calls
```


### 2014.12.03

```
New application based key check, removing server checks
```
