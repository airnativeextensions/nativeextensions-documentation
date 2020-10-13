---
title: Storage - Add the extensions
sidebar_label: Add the extensions
---


## Required Extensions

You should have been through the setup of the Firebase Core before attempting to proceed with Storage.

Make sure you have added all the extensions required for the Firebase Core extension as outlined [here](../core/add-the-extensions).


### Firebase Storage

The Storage extension and the Auth extension are required to be added:

- [`com.distriqt.firebase.Storage`](https://github.com/distriqt/ANE-Firebase/raw/master/lib/com.distriqt.firebase.Storage.ane)
- [`com.distriqt.firebase.Auth`](https://github.com/distriqt/ANE-Firebase/raw/master/lib/com.distriqt.firebase.Auth.ane)


These extensions contain all the required libraries for the main Firebase Storage functionality.


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
    <extensionID>com.distriqt.firebase.Auth</extensionID>
    <extensionID>com.distriqt.firebase.Storage</extensionID>

    <extensionID>com.distriqt.CustomResources</extensionID>
</extensions>
```


---

## Android 

### Manifest Additions

Locate the `ComponentDiscoveryService` service you added as part of the core Firebase manfiest additions and add the following meta data tags:

```xml
<meta-data
    android:name="com.google.firebase.components:com.google.firebase.storage.StorageRegistrar"
    android:value="com.google.firebase.components.ComponentRegistrar" />
```

It should now appear like:

```xml
<service android:name="com.google.firebase.components.ComponentDiscoveryService" >
    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.storage.StorageRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />

    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.analytics.connector.internal.AnalyticsConnectorRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />
    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsRegistrar"
        android:value="com.google.firebase.components.ComponentRegistrar" />
</service>
```



