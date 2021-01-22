---
title: Migrating to v6
sidebar_label: Migrating to v6
---

Version 6 brings a major update of the Firebase extensions and with it a series of changes.


## Auth 

Firebase Auth requires some changes to the manifest additions. 

You will need to replace the following:

```xml
<!-- FIREBASE AUTH -->
<activity
    android:name="com.google.firebase.auth.internal.FederatedSignInActivity"
    android:excludeFromRecents="true"
    android:exported="true"
    android:launchMode="singleTask"
    android:permission="com.google.firebase.auth.api.gms.permission.LAUNCH_FEDERATED_SIGN_IN"
    android:theme="@android:style/Theme.Translucent.NoTitleBar" />
```

with this:

```xml
<!-- FIREBASE AUTH -->
<activity
    android:name="com.google.firebase.auth.internal.GenericIdpActivity"
    android:excludeFromRecents="true"
    android:exported="true"
    android:launchMode="singleTask"
    android:theme="@android:style/Theme.Translucent.NoTitleBar" >
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />

        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />

        <data
            android:host="firebase.auth"
            android:path="/"
            android:scheme="genericidp" />
    </intent-filter>
</activity>
<activity
    android:name="com.google.firebase.auth.internal.RecaptchaActivity"
    android:excludeFromRecents="true"
    android:exported="true"
    android:launchMode="singleTask"
    android:theme="@android:style/Theme.Translucent.NoTitleBar" >
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data
            android:host="firebase.auth"
            android:path="/"
            android:scheme="recaptcha" />
    </intent-filter>
</activity>
<service
    android:name="com.google.firebase.auth.api.fallback.service.FirebaseAuthFallbackService"
    android:enabled="true"
    android:exported="false" >
    <intent-filter>
        <action android:name="com.google.firebase.auth.api.gms.service.START" />
        <category android:name="android.intent.category.DEFAULT" />
    </intent-filter>
</service>
```



## Remote Config

Remote config extension has been updated and the API brought inline with the Firebase SDK.

The changes include:

- The `fetch()` method has been removed and the newer `fetchAndActivate()` method added.

- The ability to change the settings has been updated to utilise the `FirebaseRemoteConfigSettings` class through the `setConfigSettings()` function. 

- Retrieving the instance info also includes the current settings, `FirebaseRemoteConfigInfo.settings` retrieved through the call to `getInfo()`.

