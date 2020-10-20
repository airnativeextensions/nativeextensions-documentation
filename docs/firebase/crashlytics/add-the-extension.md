---
title: Crashlytics - Add the extension
sidebar_label: Add the extension
---


## Required Extensions

You should have been through the setup of the Firebase Core before attempting to proceed with Crashlytics.

Make sure you have added all the extensions required for the Firebase Core extension as outlined [here](../core/add-the-extensions).

>
> If you have previously been using [Firebase Crash Reporting](../crash/introduction) then you must make sure you remove this before integrating Crashlytics. Importantly remove `com.distriqt.firebase.Crash` extension from the extensions packaged with your application.
>


### Firebase Crashlytics

The only required additional ANE is the Crashlytics ANE located in this repository:

- [`com.distriqt.firebase.Crashlytics`](https://github.com/distriqt/ANE-Firebase/raw/master/lib/com.distriqt.firebase.Crashlytics.ane)

This ANE contains all the required libraries for the main Firebase Crashlytics functionality.


---

### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries. 

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [`com.google.android.datatransport`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.android.datatransport.ane)
- [`com.google.dagger`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.dagger.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).



---

### Square ANEs

Due to several of our ANE's using the [Square open source libraries](http://square.github.io/) the libraries have been separated into a separate ANEs allowing you to avoid conflicts and duplicate definitions. This means that you need to include the some of the square native extensions in your application along with this extension.

You will add these extensions as you do with any other ANE, and you need to ensure it is packaged with your application.

This ANE requires the following Square extensions:

- [`com.distriqt.square.okhttp3`](https://github.com/distriqt/ANE-SquareLibs/raw/master/lib/com.distriqt.square.okhttp3.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-SquareLibs](https://github.com/distriqt/ANE-SquareLibs).



## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Firebase</extensionID>

    <extensionID>com.distriqt.Core</extensionID>

    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.AdsIdentifier</extensionID>

    <extensionID>androidx.core</extensionID>
    <extensionID>com.google.protobuflite</extensionID>
    <extensionID>com.google.firebase.core</extensionID>

    <extensionID>com.distriqt.CustomResources</extensionID>

    <!-- Crashlytics -->
    <extensionID>com.distriqt.firebase.Crashlytics</extensionID>

    <extensionID>com.distriqt.square.okhttp3</extensionID>
    <extensionID>com.google.dagger</extensionID>
    <extensionID>com.google.android.datatransport</extensionID>

</extensions>
```



---

## Android 

### Manifest Additions

There are some small additions required to the manifest for Crashlytics. 

Firstly, the following must be added inside the `application` node in your manifest additions.

```xml
<!-- Firebase Crashlytics -->
<meta-data android:name="firebase_crashlytics_collection_enabled" android:value="false" />
<activity android:name="com.distriqt.extension.firebase.crashlytics.activities.CrashActivity" />

<!-- datatransport -->
<service
    android:name="com.google.android.datatransport.runtime.backends.TransportBackendDiscovery"
    android:exported="false" >
    <meta-data
        android:name="backend:com.google.android.datatransport.cct.CctBackendFactory"
        android:value="cct" />
</service>
<service
    android:name="com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService"
    android:exported="false"
    android:permission="android.permission.BIND_JOB_SERVICE" >
</service>
<receiver
    android:name="com.google.android.datatransport.runtime.scheduling.jobscheduling.AlarmManagerSchedulerBroadcastReceiver"
    android:exported="false" />
```


Next, locate the `ComponentDiscoveryService` service you added as part of the core Firebase manfiest additions and add the following meta data tag:

```xml
<meta-data
    android:name="com.google.firebase.components:com.google.firebase.crashlytics.CrashlyticsRegistrar"
    android:value="com.google.firebase.components.ComponentRegistrar" />
```


It should now appear like:

```xml
<service
        android:name="com.google.firebase.components.ComponentDiscoveryService"
        android:directBootAware="true"
        android:exported="false">

    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.analytics.connector.internal.AnalyticsConnectorRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />
    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />

    <!-- Firebase Crashlytics -->
    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.crashlytics.CrashlyticsRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />

</service>
```



You must replace `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`. Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.





## iOS 

### Info Additions

You must add the following flag to your info additions node. This will delay initialisation of crashlytics until you call `enableCollection` allowing us to setup Crashlytics correctly.

```xml
<key>FirebaseCrashlyticsCollectionEnabled</key>
<false/>
```



