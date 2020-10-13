---
title: Database - Add the extensions
sidebar_label: Add the extensions
---


## Required Extensions

You should have been through the setup of the Firebase Core before attempting to proceed with Realtime Database.

Make sure you have added all the extensions required for the Firebase Core extension as outlined [here](../core/add-the-extensions).


### Firebase Realtime Database

The Database extension and the Auth extension are required to be added:

- [`com.distriqt.firebase.Database`](https://github.com/distriqt/ANE-Firebase/raw/master/lib/com.distriqt.firebase.Database.ane)
- [`com.distriqt.firebase.Auth`](https://github.com/distriqt/ANE-Firebase/raw/master/lib/com.distriqt.firebase.Auth.ane)


These extensions contain all the required libraries for the main Firebase Realtime Database functionality.



## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Core</extensionID>
    
    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.AdsIdentifier</extensionID>
    
    <extensionID>androidx.core</extensionID>

    <extensionID>com.google.protobuflite</extensionID>
    <extensionID>com.google.firebase.core</extensionID>

    <extensionID>com.distriqt.Firebase</extensionID>
    <extensionID>com.distriqt.firebase.Auth</extensionID>
    <extensionID>com.distriqt.firebase.Database</extensionID>

    <extensionID>com.distriqt.CustomResources</extensionID>
</extensions>
```


---

## Android 

### Manifest Additions

Locate the `ComponentDiscoveryService` service you added as part of the core Firebase manfiest additions and add the following meta data tag:

```xml
<meta-data
    android:name="com.google.firebase.components:com.google.firebase.database.DatabaseRegistrar"
    android:value="com.google.firebase.components.ComponentRegistrar" />
```


It should now appear like the following at a minimum (it may have other meta-data tags from other components):

```xml
<service android:name="com.google.firebase.components.ComponentDiscoveryService" >
    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.database.DatabaseRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />

    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.analytics.connector.internal.AnalyticsConnectorRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />
    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />
</service>
```




