---
title: Auth - Add the extensions
sidebar_label: Add the extensions
---


## Required Extensions

You should have been through the setup of the Firebase Core before attempting to proceed with Authentication.

Make sure you have added all the extensions required for the Firebase Core extension as outlined [here](../core/add-the-extensions).


### Firebase Auth

The only required additional ANE is the Auth ANE located in this repository:

- [`com.distriqt.firebase.Auth`](https://github.com/distriqt/ANE-Firebase/raw/master/lib/com.distriqt.firebase.Auth.ane)


This ANE contains all the required libraries for the main Firebase authentication functionality,
however some of the authentication providers (such as Facebook and Google) may require additional
extensions. We list these in the documentation in each of the specific providers so you only 
include the required extensions for your situation.

You can access all the Firebase extensions here: [https://github.com/distriqt/ANE-Firebase](https://github.com/distriqt/ANE-Firebase).



## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.AdsIdentifier</extensionID>

    <extensionID>com.google.protobuflite</extensionID>
    <extensionID>com.google.firebase.core</extensionID>
    <extensionID>androidx.appcompat</extensionID>
    <extensionID>androidx.core</extensionID>
    <extensionID>androidx.multidex</extensionID>

    <extensionID>com.distriqt.Firebase</extensionID>
    <extensionID>com.distriqt.firebase.Auth</extensionID>

    <extensionID>com.distriqt.CustomResources</extensionID>
</extensions>
```



---

## Android Manifest Additions

There are some small additions required to the manifest for Firebase Auth.

Firstly add the following activity to the application node in the manifest additions:

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

Then locate the `ComponentDiscoveryService` service you added as part of the core Firebase manfiest additions and add the following meta data tag:

```xml
<meta-data
    android:name="com.google.firebase.components:com.google.firebase.auth.FirebaseAuthRegistrar"
    android:value="com.google.firebase.components.ComponentRegistrar" />
```

It should now appear like the following at a minimum (it may have other meta-data tags from other components):

```xml
<service android:name="com.google.firebase.components.ComponentDiscoveryService" 
        android:directBootAware="true"
        android:exported="false">
    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.auth.FirebaseAuthRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />

    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.analytics.connector.internal.AnalyticsConnectorRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />
    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />
    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.dynamicloading.DynamicLoadingRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />
</service>
```




## iOS Info Additions

No additional additions are required. There is an exception with Phone Authentication
and the details of these additions are in the documentation for that method.

