### 2026.02.17 [v8.1.0]

```
Update to support the latest Google Identity SDK 

### Updates

feat(android): update google identity sdk v1.2.0
feat(ios): update google sign in sdk v9.1.0
```

### 2025.08.26 [v8.0.0]

```
feat(ios): update sdk v9.0.0 (compatible with Firebase v12.1.0)
feat(android): update playservices auth to v21.4.0 
feat(android): implement new disconnect functionality using revokeAccess
feat(docs): correct manual docs to correctly list firebase core as a dependency (resolves https://github.com/distriqt/ANE-GoogleIdentity/issues/80)
```

### 2025.07.02 [v7.1.1]

```
## Setup Change

There has been a slight change to the setup call, it will now perform a check if the user has previously 
signed in successfully and start a silent sign in process. This ensures the `isSignedIn` flag is correct
after setup. 

Notes:
- this makes the setup process asynchronous if you want to ensure the `isSignedIn` flag is correct
- may present a UI ("signing you in") on Android if the user has signed in previously
- can disable this new functionality by setting `options.attemptSilentSignIn = false;`

### Updates

feat(android): add ability to automatically perform silent sign in at setup if previously signed in
feat(ios): clean up sign in process at setup
feat: add attemptSilentSignIn parameter to options to control auto sign in attempt at setup
feat(android): update androidx credentials sdk to v1.5.0 
```

### 2025.01.20 [v7.0.1]

```
fix(ios): move ios frameworks to common core extension that were causing conflicts from multiple extensions (https://github.com/airsdk/Adobe-Runtime-Support/issues/3644)
```

### 2024.12.05 [v7.0.0]

```
See the migration guide: https://docs.airnativeextensions.com/docs/googleidentity/migrating-to-v7.0

feat(android): update from google sign in to new androidx credentials manager (resolves https://github.com/distriqt/ANE-GoogleIdentity/issues/75, resolves https://github.com/distriqt/ANE-GoogleIdentity/issues/76)
feat(android): move to gradle dependencies
feat(ios): update google sign in lib to v8.0.0
```

### 2024.05.16 [v6.0.0]

```
feat(android): update auth sdk to v21.1.1
feat(ios): update sdk to v7.1.0 (compatible with Firebase v10.25.0)
```

### 2023.07.05 [v5.5.0]

```
feat(android): update google play services auth version to v20.5.0
feat(ios): update google sign in version to v7.0.0
```

### 2023.01.20 [v5.4.0]

```
feat(ios): Xcode 14 update, remove bitcode and add no-objc-msgsend-selector-stubs compiler flag
```

### 2022.11.24 [v5.3.2]

```
fix(docs,airpackage): correct dependency on kotlin library (resolves #73)
```

### 2022.03.29 [v5.3.1]

```
Correct air package dependencies (resolves #72)
```

### 2022.03.08 [v5.3.0]

```
Updated SDK
  - Android v20.1.0
  
Android 31 documentation updates
```

### 2022.02.07 [v5.2.5]

```
Update docs to use apm
```


### 2022.01.19 [v5.2.4]

```
Update air package parameter descriptions
```

### 2021.10.05 [v5.2.3]

```
Add air package
```



### 2021.01.20 [v5.2.002]

```
Updated SDK
 - Android v19.0.0
 - iOS v5.0.2
```


### 2020.09.01 [v5.1.043]

```
Updated SDK (now Firebase compatible)
Resolved crash on iOS 12 (resolves #67)
```


### 2020.08.14 [v5.0.031]

```
Updated build and added SWC
```


### 2020.05.11 [v5.0.029]

```
Updated SDK
  - Android v18.0.0
  - iOS v5.0.2 (resolves #66)
```


### 2020.03.22 [v4.0.016]

```
Android X migration (resolves #65)
```


### 2019.11.22 [v3.1.012]

```
iOS: Resolved duplicate symbols with Firebase performance extension (resolves #64)
```


### 2019.08.16 [v3.0.002]

```
Android 64bit support (resolves #62)
Updated minimum iOS version to 9.0 
Added checks for null pointer in edge case (#58)
```


### 2019.02.22 [v2.3.092]

```
Corrected Android requestEmail option (#59)
Updated minimum iOS version to 8.0
```


### 2018.11.27 [v2.2.089]

```
Updated to Google Play Services v16.0.5 
Removed application keys 
```


### 2018.11.18 [v2.1.087]

```
Simplified integration with Games Services sign-in
```


### 2018.10.18 [v2.1.080]

```
Update for new square okhttp extension
```


### 2018.09.20 [v2.1.079]

```
Extracted square open source library to resolve conflict
```


### 2018.06.01 [v2.1.062]

```
Android: Updated to Google Play Services v15+
```


### 2018.03.15 [v2.0.059]

```
Corrected Firebase compat ANE build
```


### 2018.03.15 [v2.0.057]

```
Updated to latest SDK
  - Android v11.8.0 
  - iOS v4.1.2
Refactored options and introduced builder utility to clarify config and processes (resolves #45)
Deprecated getToken as against best practices (resolves #40)
Added getUser and isSignedIn functionality
```


### 2017.11.18 [v1.8.036]

```
Updated documentation (#45)
```


### 2017.10.20 [v1.8.036]

```
Resolved conflict with Firebase Auth (resolves #42)
```


### 2017.07.10 [v1.7.018]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


### 2017.06.19 [v1.7.013]

```
Corrected missing getToken function from default lib (#38)
```


### 2017.06.07 [v1.7.012]

```
Android: Updated detection of Google Play Services version on device
```


### 2017.03.01 [v1.7.006]

```
Android Update for Google Play Services v10.2.0
```


### 2017.02.07 [v1.7.005]

```
Updated documentation
```


### 2017.02.07 [v1.7.005]

```
Add additional profile information (resolves #18)
```


### 2017.01.30 [v1.6.007]

```
Updated to Google Play Services v10.0.1
```


### 2016.12.29 [v1.6.004]

```
Updated documentation
```


### 2016.12.29 [v1.6.004]

```
Update to latest SDKs + documentation
```


### 2016.11.22 [v1.6.001]

```
Updated for Firebase compatibility
```


### 2016.08.17 [v1.5.002]

```
iOS: Updated native SDK to v4.0.0 (resolves #8)
```


### 2016.08.11 [v1.4.004]

```
New versioning system
Corrected key check (#5)
```


###  2016.07.01

```
Android: Corrected potential null pointer reference (resolves #4)
```


###  2016.06.18

```
Added serverAuthCode to user object (resolves #3)
```


###  2016.06.16

```
iOS: Removed logging that could cause an issue (#2)
```


### 2016.06.10

```
Added getToken function to retrieve access tokens (#1)
```


### 2016.05.27

```
Updated example app
```


### 2016.05.27

```
Release v1.0
```
