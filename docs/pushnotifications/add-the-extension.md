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

The Core extension is required by this extension. You must include this extension in your application.

This extension requires you call the `init()` function at some point early in your application, generally at the same time as the initialisation of this extension. If you are using other extensions that also require the Core extension, you only need to initialise it once, before initialising the other extensions.

```actionscript
Core.init();
```

The Core extension doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).


### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries. 

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [`androidx.core`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)
- [`androidx.appcompat`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)
- [`androidx.browser`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.browser.ane)
- [`androidx.cardview`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.browser.ane)
- [`androidx.constraintlayout`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.browser.ane)
- [`androidx.vectordrawable`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.browser.ane)
- [`com.google.android.datatransport`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.android.datatransport.ane)
- [`com.google.dagger`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.dagger.ane)
- [`com.google.protobuflite`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.protobuflite.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>



### Service ANEs

You should check the setup of the individual notification services as each may require additional ANEs.
For example, FCM requires some of the Google Play Services ANEs. 




## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.PushNotifications</extensionID>
	<extensionID>com.distriqt.Core</extensionID>

	<extensionID>com.google.android.datatransport</extensionID>
	<extensionID>com.google.dagger</extensionID>
	<extensionID>com.google.protobuflite</extensionID>

	<extensionID>androidx.core</extensionID>
	<extensionID>androidx.browser</extensionID>
	<extensionID>androidx.appcompat</extensionID>
	<extensionID>androidx.cardview</extensionID>
	<extensionID>androidx.constraintlayout</extensionID>
	<extensionID>androidx.vectordrawable</extensionID>
</extensions>
```



## iOS

This ANE has been updated for iOS 10 and requires a minimum of the iOS 10 SDK to be linked with your application
in order to have access to the iOS 10 notification features.

Make sure you provide a valid iOS 10+ SDK when packagaging. You can do this by using AIR 26+ or by packaging with the iOS SDK, see [here](/docs/tutorials/getting-started#ios) for more.



## Android

See the setup of the individual services for any manifest additions or additional extension configuration options.


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




## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
Core.init();
if (PushNotifications.isSupported)
{
	// Functionality here
}
```

