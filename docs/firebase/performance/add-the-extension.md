---
title: Performance - Add the extension
sidebar_label: Add the extension
---


## Required Extensions

You should have been through the setup of the Firebase Core before attempting to proceed with Performance Monitoring.

Make sure you have added all the extensions required for the Firebase Core extension as outlined [here](../core/add-the-extensions).


### Square ANEs

Due to several of our ANE's using the [Square open source libraries](http://square.github.io/) the libraries have been separated into a separate ANEs allowing you to avoid conflicts and duplicate definitions. This means that you need to include the some of the square native extensions in your application along with this extension.

You will add these extensions as you do with any other ANE, and you need to ensure it is packaged with your application.

This ANE requires the following Square extensions:

- [`com.distriqt.square.okhttp3`](https://github.com/distriqt/ANE-SquareLibs/raw/master/lib/com.distriqt.square.okhttp3.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-SquareLibs](https://github.com/distriqt/ANE-SquareLibs).



### Firebase Performance Monitoring

Usage of Performance Monitoring requires adding the Performance Monitoring ANE along with the Remote Config ANE located in this repository:

- [`com.distriqt.firebase.Performance`](https://github.com/distriqt/ANE-Firebase/raw/master/lib/com.distriqt.firebase.Performance.ane)
- [`com.distriqt.firebase.RemoteConfig`](https://github.com/distriqt/ANE-Firebase/raw/master/lib/com.distriqt.firebase.RemoteConfig.ane)

This ANE contains all the required libraries for the main Firebase Performance Monitoring functionality.





## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Core</extensionID>
    
    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.AdsIdentifier</extensionID>

    <extensionID>com.google.protobuflite</extensionID>
    <extensionID>com.google.firebase.core</extensionID>

    <extensionID>androidx.core</extensionID>

    <extensionID>com.distriqt.Firebase</extensionID>
    <extensionID>com.distriqt.firebase.Performance</extensionID>
    <extensionID>com.distriqt.firebase.RemoteConfig</extensionID>

    <extensionID>com.distriqt.square.okhttp3</extensionID>

    <extensionID>com.distriqt.CustomResources</extensionID>
</extensions>
```




---

## Android Manifest Additions

In order to add performance monitoring you need to add the following permissions to 
your manifest additions:

- `com.google.android.providers.gsf.permission.READ_GSERVICES`
- `com.google.android.providers.gsf.permission.WRITE_GSERVICES`

You will also need to add the `FirebasePerfProvider`. You must replace `APPLICATION_PACKAGE` with your 
AIR application's Java package name, something like `air.com.distriqt.test`.
Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.

For example:

```xml
<manifest android:installLocation="auto">
    <uses-permission android:name="android.permission.INTERNET"/>
    
    <!-- OTHER PERMISSIONS / REQUIREMENTS -->

    <uses-permission android:name="com.google.android.providers.gsf.permission.READ_GSERVICES" />
    <uses-permission android:name="com.google.android.providers.gsf.permission.WRITE_GSERVICES" />

    <application>

        <provider
            android:name="com.google.firebase.perf.provider.FirebasePerfProvider"
            android:authorities="APPLICATION_PACKAGE.firebaseperfprovider"
            android:exported="false"
            android:initOrder="101" />

    </application>

    <!-- OTHER ADDITIONS -->

</manifest>
```


Lastly locate the `ComponentDiscoveryService` service you added as part of the core Firebase manfiest additions and add the following meta data tags:

```xml
<meta-data
    android:name="com.google.firebase.components:com.google.firebase.perf.FirebasePerfRegistrar"
    android:value="com.google.firebase.components.ComponentRegistrar" />
<meta-data
    android:name="com.google.firebase.components:com.google.firebase.remoteconfig.RemoteConfigRegistrar"
    android:value="com.google.firebase.components.ComponentRegistrar" />
<meta-data
    android:name="com.google.firebase.components:com.google.firebase.abt.component.AbtRegistrar"
    android:value="com.google.firebase.components.ComponentRegistrar" />
```

It should now appear like:

```xml
<service android:name="com.google.firebase.components.ComponentDiscoveryService" >
    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.perf.FirebasePerfRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />
    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.remoteconfig.RemoteConfigRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />
    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.abt.component.AbtRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />

    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.analytics.connector.internal.AnalyticsConnectorRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />
    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />
</service>
```




## iOS 

No particular additions are required for iOS





