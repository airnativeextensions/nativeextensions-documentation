---
title: Add the Extension
sidebar_label: Add the Extension
---

First step is always to add the extension to your development environment. 
To do this use the tutorial located [here](/docs/tutorials/getting-started).


### AIR SDK


This ANE currently requires at least AIR 33+. This is required in order to support versions of Android > 9.0 (API 28). We always recommend using the most recent build with AIR especially for mobile development where the OS changes rapidly.


## Dependencies

Many of our extensions use some common libraries, for example, the Android Support libraries.

We have to separate these libraries into separate extensions in order to avoid multiple versions of the libraries being included in your application and causing packaging conflicts. This means that you need to include some additional extensions in your application along with the main extension file.

You will add these extensions as you do with any other extension, and you need to ensure it is packaged with your application.


### Core 

The Core ANE is required by this ANE. You must include and package this extension in your application.

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).


### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries. 

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [androidx.core.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>


### Google Play Services

This ANE requires usage of certain aspects of the Google Play Services client library. 
The client library is available as a series of ANEs that you add into your applications
packaging options. Each separate ANE provides a component from the Play Services client 
library and are used by different ANEs. These client libraries aren't packaged with this 
ANE as they are used by multiple ANEs and separating them will avoid conflicts, allowing 
you to use multiple ANEs in the one application.

This ANE requires the following Google Play Services:

- [com.distriqt.playservices.Base.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Base.ane)
- [com.distriqt.playservices.Location.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Location.ane)

You must include the above native extensions in your application along with this extension, 
and you need to ensure they are packaged with your application.

You can access the Google Play Services client library extensions here: [https://github.com/distriqt/ANE-GooglePlayServices](https://github.com/distriqt/ANE-GooglePlayServices).


>
> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices. 
> There are no issues packaging these extensions with all platforms as there are default implementations available which will allow your code to package without errors however if you are only building an iOS application feel free to remove the Google Play Services and Android Support ANEs from your application.
>



## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Location</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>androidx.core</extensionID>
    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.Location</extensionID>
</extensions>
```





## Android

### Manifest Additions

The Location ANE requires a few additions to the manifest. These additions are to request permissions for the location information and to list receivers for the location updates. 
You should add the listing below to your manifest, you only need one of the permission 
strings (coarse/fine) however both are listed below.

> 
> Make sure you replace `APPLICATION_PACKAGE` with your applications package eg. `air.com.distriqt.test`.
> This is generally your AIR application id prefixed with `air.`
>

```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
	
	<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
	<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

	<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>


	<application>
	
		<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version" />
		
		<receiver android:name="com.distriqt.extension.location.receivers.LocationReceiver" >
			<intent-filter>
				<action android:name="APPLICATION_PACKAGE.LOCATION_UPDATE" />
			</intent-filter>
		</receiver>
		<service android:name="com.distriqt.extension.location.services.LocationUpdateService" android:enabled="true" android:exported="true" />

		<receiver android:name="com.distriqt.extension.location.receivers.GeofenceTransitionReceiver">
			<intent-filter>
				<action android:name="APPLICATION_PACKAGE.GEOFENCE_TRANSITION_ACTION" />
			</intent-filter>
		</receiver>
		<receiver android:name="com.distriqt.extension.location.receivers.BootReceiver">
			<intent-filter>
				<action android:name="android.intent.action.BOOT_COMPLETED"/>
				<action android:name="android.location.PROVIDERS_CHANGED"/>
			</intent-filter>
		</receiver>
		<service android:name="com.distriqt.extension.location.services.GeofenceRestartService" />

		<activity android:name="com.distriqt.extension.location.permissions.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" />

		
	</application>
	
</manifest>
```


## iOS 

### Info Additions

Location updates require a few additions to the Info plist and Entitlements section of your application to correctly configure your application for location. You should add the listing below to your application descriptor iPhone info additions node.

```xml
<key>UIDeviceFamily</key>
<array>
	<string>1</string>
</array>

<!-- Add this if your application needs location services to run -->
<key>UIRequiredDeviceCapabilities</key>
<array>
	<string>location-services</string>
</array>

<!-- Required if you wish to receive background location updates -->
<key>UIBackgroundModes</key>
<array>
	<string>location</string>
</array>

<!-- iOS 6,7 -->
<key>NSLocationUsageDescription</key>
<string>This application would like to use your location.</string>

<!-- iOS 8 + -->
<key>NSLocationWhenInUseUsageDescription</key>
<string>This application would like to use your location when in use.</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>This application would like to use your location in the background.</string>

<!-- iOS 11 + -->
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>This application would like to use your location in the background and the foreground.</string>
```

If you are planning to setup your application to receive background updates then you should include the `UIBackgroundModes` key, however it is not required if you wish to remove it. If it is enabled, you will be able to receive updates in the background to trigger an event when your application is running in the background (and you have been granted the `ALWAYS` authorisation by the user, see later). If you remove it, then you will only receive the updates when the application is running in the foreground. 

Currently due to an AIR bug we can't receive location updates on iOS when the application isn't running. This is due to a bug where AIR applications cannot "start into the background" on iOS.

>
> If you are going to be sending data to a url don't forget to add the appropriate `NSAppTransportSecurity` definitions to your info additions.
>
> For example to allow all http requests:
>
>```xml
><key>NSAppTransportSecurity</key>
><dict>
>	<key>NSAllowsArbitraryLoads</key>
>	<true/>
></dict>
>```
>


#### URL Schemes

If in the past you have added the CFBundleURLSchemes to your InfoAdditions you must now remove them. Apple have changed their policy on directly accessing sections of the settings application and you will now get rejected by review if you include these in your application. 

So it is important that you **remove** the following from your application:

```xml
<key>CFBundleURLTypes</key>
<array>
	<dict>
		<key>CFBundleURLSchemes</key>
		<array>
			<string>prefs</string>
			<string>App-Prefs</string>
		</array>
	</dict>
</array>
```

