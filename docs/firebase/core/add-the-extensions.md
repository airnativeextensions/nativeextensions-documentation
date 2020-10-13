---
title: Core - Add the extensions
sidebar_label: Add the extensions
---


## Required ANEs

We have attempted to keep the required extensions to a minimum, packaging required libraries into the ANEs wherever possible
however we still will be left with a couple of ANEs that you will need to add to your application.

Each of the separate components of Firebase will require additional ANEs which will be identified in the individual sections 
however the following list will be required by any AIR application using Firebase.

Quick links:

- [`com.distriqt.Core`](https://github.com/distriqt/ANE-Core/raw/master/lib/com.distriqt.Core.ane)
- [`com.distriqt.playservices.Base`](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Base.ane)
- [`com.distriqt.playservices.AdsIdentifier`](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.AdsIdentifier.ane)
- [`androidx.core`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)
- [`com.google.protobuflite`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.protobuflite.ane)
- [`com.google.firebase.core`](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.google.firebase.core.ane)
- [`com.distriqt.Firebase`](https://github.com/distriqt/ANE-Firebase/raw/master/lib/com.distriqt.Firebase.ane)

---

### Core ANE

The Core ANE is required by this ANE. You must include and package this extension in your application.

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).

---

### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries. 

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [`androidx.core`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)
- [`com.google.protobuflite`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.protobuflite.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>


---

### Google Play Services

This ANE requires usage of certain aspects of the Google Play Services client library. 
The client library is available as a series of ANEs that you add into your applications packaging options. 
Each separate ANE provides a component from the Play Services client library and are used by different ANEs. 
These client libraries aren't packaged with this ANE as they are used by multiple ANEs and separating them 
will avoid conflicts, allowing you to use multiple ANEs in the one application.

This ANE requires the following Google Play Services:

- [`com.distriqt.playservices.Base`](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Base.ane)
- [`com.distriqt.playservices.AdsIdentifier`](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.AdsIdentifier.ane)

You must include the above native extensions in your application along with this extension, 
and you need to ensure they are packaged with your application.

You can access the Google Play Services client library extensions here: [https://github.com/distriqt/ANE-GooglePlayServices](https://github.com/distriqt/ANE-GooglePlayServices).

>
> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices. 
> There is no problem packaging these ANEs with all platforms as there are default implementations available which will allow your code to package without errors 
> however if you are only building an iOS application feel free to remove the Google Play Services ANEs from your application.
>


### Firebase Core

To use any Firebase functionality you must include the core Firebase libraries and configure your Firebase application. The core libraries are available in the `com.google.firebase.core` extension alongside the Google Play Services:

- [`com.google.firebase.core`](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.google.firebase.core.ane)

This extension is located separately due to several of our other extensions relying on the Firebase core libraries.


---

### Firebase  

Finally the all important Firebase extension:

- [`com.distriqt.Firebase`](https://github.com/distriqt/ANE-Firebase/raw/master/lib/com.distriqt.Firebase.ane)


You can access all the Firebase extensions here: [https://github.com/distriqt/ANE-Firebase](https://github.com/distriqt/ANE-Firebase)


If you are building for Android using the Android resources configuration you should also make sure you 
package your `com.distriqt.CustomResources.ane`.





## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Firebase</extensionID>
    <extensionID>com.google.protobuflite</extensionID>
    <extensionID>com.google.firebase.core</extensionID>

    <extensionID>com.distriqt.Core</extensionID>

    <extensionID>androidx.core</extensionID>

    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.AdsIdentifier</extensionID>

    <extensionID>com.distriqt.CustomResources</extensionID>
</extensions>
```


---

## Android Manifest Additions 

You must add all of the following Firebase related manifest additions. 

Make sure you only have one `<application>` node in your manifest additions combining them if you have multiple. 

The following shows the complete manifest additions node. You must replace `APPLICATION_PACKAGE` with your 
AIR application's Java package name, something like `air.com.distriqt.test`.
Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.


```xml
<manifest android:installLocation="auto">
    <uses-sdk android:minSdkVersion="19" android:targetSdkVersion="28" />

    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.WAKE_LOCK"/>

    <uses-permission android:name="com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE" /> 
    <!-- Required by older versions of Google Play services to create IID tokens -->
    <uses-permission android:name="com.google.android.c2dm.permission.RECEIVE" />

    <permission android:name="APPLICATION_PACKAGE.permission.C2D_MESSAGE" android:protectionLevel="signature" />
    <uses-permission android:name="APPLICATION_PACKAGE.permission.C2D_MESSAGE" />


    <application
        android:appComponentFactory="androidx.core.app.CoreComponentFactory"
        android:name="androidx.multidex.MultiDexApplication">
        
        <meta-data
            android:name="com.google.android.gms.version"
            android:value="@integer/google_play_services_version" />
        <meta-data
            android:name="google_analytics_automatic_screen_reporting_enabled"
            android:value="false" />
        
        <activity
            android:name="com.google.android.gms.common.api.GoogleApiActivity"
            android:exported="false"
            android:theme="@android:style/Theme.Translucent.NoTitleBar" />

        <!-- FIREBASE CORE -->
        <receiver
            android:name="com.google.android.gms.measurement.AppMeasurementReceiver"
            android:enabled="true"
            android:exported="false" >
        </receiver>

        <service
            android:name="com.google.android.gms.measurement.AppMeasurementService"
            android:enabled="true"
            android:exported="false" />
        <service
            android:name="com.google.android.gms.measurement.AppMeasurementJobService"
            android:enabled="true"
            android:exported="false"
            android:permission="android.permission.BIND_JOB_SERVICE" />
        <service
            android:name="com.google.firebase.components.ComponentDiscoveryService"
            android:directBootAware="true"
            android:exported="false" >
            <meta-data
                android:name="com.google.firebase.components:com.google.firebase.analytics.connector.internal.AnalyticsConnectorRegistrar"
                android:value="com.google.firebase.components.ComponentRegistrar" />
            <meta-data
                android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsRegistrar"
                android:value="com.google.firebase.components.ComponentRegistrar" />
        </service>

        <provider
            android:name="com.google.firebase.provider.FirebaseInitProvider"
            android:authorities="APPLICATION_PACKAGE.firebaseinitprovider"
            android:exported="false"
            android:initOrder="100" />

    </application>

</manifest>
```


#### Component Discovery Service

The `com.google.firebase.components.ComponentDiscoveryService` is particularly important for Firebase configuration.

The `meta-data` tags that are added to this service specify the components that should be initialised by Firebase and you must ensure that you have added the appropriate tags for the services you are using.

Firebase Messaging depends on Analytics so you must at least include the following tags:


- Analytics:

```xml
<meta-data
	android:name="com.google.firebase.components:com.google.firebase.analytics.connector.internal.AnalyticsConnectorRegistrar"
	android:value="com.google.firebase.components.ComponentRegistrar" />
<meta-data
	android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsRegistrar"
	android:value="com.google.firebase.components.ComponentRegistrar" />
```


Each of the component extensions will outline whether they have additional `meta-data` tags to add to the service.



### MultiDex Applications 


If you have a large application and are supporting Android 4.x then you will need to ensure you enable your application to correctly support MultiDex to allow the application to be broken up into smaller dex packages.

This is enabled by default with releases of AIR v25+, except in the Android 4.x case where you need to change the manifest additions for the application tag to match the following and use the `MultiDexApplication`.


#### Using AndroidX

This will require the addition of the `androidx.multidex` extension which contains the `androidx.multidex.MultiDexApplication` implementation.

```xml
<manifest android:installLocation="auto">
	<!-- PERMISSIONS -->

	<application android:name="androidx.multidex.MultiDexApplication">

		<!-- ACTIVITIES / RECEIVERS / SERVICES -->

	</application>
</manifest>
```



---

## iOS 

### Info Additions / Entitlements

In order for the Firebase system to work well with AIR and other extensions we need
to disable the automatic delegate proxy that Firebase implements on iOS. To do so 
you must add the following to your InfoAdditions:

```xml
<key>FirebaseAppDelegateProxyEnabled</key>
<false/>
<key>FirebaseAutomaticScreenReportingEnabled</key>
<false/>
```

Eg:

```xml
<iPhone>
	<InfoAdditions><![CDATA[
		<key>UIDeviceFamily</key>
		<array>
			<string>1</string>
			<string>2</string>
		</array>
		
		<key>FirebaseAppDelegateProxyEnabled</key>
		<false/>
		<key>FirebaseAutomaticScreenReportingEnabled</key>
		<false/>
			
	]]></InfoAdditions>
	<requestedDisplayResolution>high</requestedDisplayResolution>
	<Entitlements>
	<![CDATA[
	]]>
	</Entitlements>
</iPhone>
```

You may wish to add a minimum iOS version to restrict your application to the 
minimum Firebase version.

