---
title: RemoteConfig - Add the extensions
sidebar_label: Add the extensions
---


## Required Extensions

You should have been through the setup of the Firebase Core before attempting to proceed with Remote Config.

Make sure you have added all the extensions required for the Firebase Core extension as outlined [here](../core/add-the-extensions).


### Firebase Remote Config

The only required additional ANE is the Remote Config ANE located in this repository:

- [`com.distriqt.firebase.RemoteConfig`](https://github.com/distriqt/ANE-Firebase/raw/master/lib/com.distriqt.firebase.RemoteConfig.ane)

This ANE contains all the required libraries for the main Firebase Remote Config functionality.




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
    <extensionID>com.distriqt.firebase.RemoteConfig</extensionID>

    <extensionID>com.distriqt.CustomResources</extensionID>
</extensions>
```



---

## Android

### Manifest Additions

Locate the `ComponentDiscoveryService` service you added as part of the core Firebase manfiest additions and add the following meta data tags:

```xml
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
