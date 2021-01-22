---
title: Firestore - Add the extension
sidebar_label: Add the extension
---


## Required Extensions

You should have been through the setup of the Firebase Core before attempting to proceed with Cloud Firestore.

Make sure you have added all the extensions required for the Firebase Core extension as outlined [here](../core/add-the-extensions).


### Cloud Firestore

Usage of the Cloud Firestore requires adding the Firestore ANE along with the Database and Auth ANEs located in this repository:

https://github.com/distriqt/ANE-Firebase

- [`com.distriqt.firebase.Firestore`](https://github.com/distriqt/ANE-Firebase/raw/master/lib/com.distriqt.firebase.Firestore.ane)
- [`com.distriqt.firebase.Database`](https://github.com/distriqt/ANE-Firebase/raw/master/lib/com.distriqt.firebase.Database.ane)
- [`com.distriqt.firebase.Auth`](https://github.com/distriqt/ANE-Firebase/raw/master/lib/com.distriqt.firebase.Auth.ane)


These ANEs contain the required libraries for the Cloud Firestore functionality.


### Square ANEs

Due to several of our ANE's using the [Square open source libraries](http://square.github.io/) the libraries have been separated into a separate ANEs allowing you to avoid conflicts and duplicate definitions. This means that you need to include the some of the square native extensions in your application along with this extension.

You will add these extensions as you do with any other ANE, and you need to ensure it is packaged with your application.

This ANE requires the following Square extensions:

- [`com.distriqt.square.okhttp`](https://github.com/distriqt/ANE-SquareLibs/raw/master/lib/com.distriqt.square.okhttp.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-SquareLibs](https://github.com/distriqt/ANE-SquareLibs).


### GSON

Add the `com.google.code.gson` extension which adds support for GSON in the application. This extension is available in the Android support repository:

- [`com.google.code.gson`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.code.gson.ane)


### Guava

Add the `com.google.guava` extension which adds support for Google Guava libraries in the application. This extension is available in the Android support repository:

- [`com.google.guava`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.guava.ane)


### gRPC

Add the `io.grpc` extension which adds support for gRPC libraries in the application. This extension is available in the Android support repository:

- [`io.grpc`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/io.grpc.ane)



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

    <extensionID>com.distriqt.CustomResources</extensionID>

    <extensionID>com.distriqt.Firebase</extensionID>
    
    <!-- Firestore additions -->
    <extensionID>com.distriqt.firebase.Auth</extensionID>
    <extensionID>com.distriqt.firebase.Database</extensionID>
    <extensionID>com.distriqt.firebase.Firestore</extensionID>

    <extensionID>com.distriqt.square.okhttp</extensionID>
    <extensionID>com.google.code.gson</extensionID>
    <extensionID>com.google.guava</extensionID>
    <extensionID>io.grpc</extensionID>

</extensions>
```


---

## Android 

### Manifest Additions

Locate the `ComponentDiscoveryService` service you added as part of the core Firebase manfiest additions and add the following meta data tag:

```xml
<meta-data
    android:name="com.google.firebase.components:com.google.firebase.firestore.FirestoreRegistrar"
    android:value="com.google.firebase.components.ComponentRegistrar" />
```

It should now appear like:

```xml
<service
        android:name="com.google.firebase.components.ComponentDiscoveryService"
        android:directBootAware="true"
        android:exported="false">
    <meta-data
        android:name="com.google.firebase.components:com.google.firebase.firestore.FirestoreRegistrar"
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






---

## Create a Cloud Firestore project

1. Open the [Firebase Console](https://console.firebase.google.com/) and create a new project.

2. In the Database section, click the Get Started button for Cloud Firestore.

3. Select a starting mode for your Cloud Firestore Security Rules:
  - **Test mode**: Good for getting started with the mobile and web client libraries, but allows anyone to read and overwrite your data. After testing, make sure to see the [Secure your data](https://firebase.google.com/docs/firestore/quickstart#secure_your_data) section. 
  - **Locked mode**: Denies all reads and writes from mobile and web clients. Your authenticated application servers (C#, Go, Java, Node.js, PHP, Python, or Ruby) can still access your database.

4. Click **Enable**.


