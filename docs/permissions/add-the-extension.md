---
title: Add the Extension
sidebar_label: Add the Extension
---

First step is always to add the extension to your development environment.
To do this use the tutorial located [here](/docs/tutorials/getting-started).

## Dependencies

Many of our extensions use some common libraries, for example, the Android Support libraries.

We have to separate these libraries into separate extensions in order to avoid multiple versions of the libraries being included in your application and causing packaging conflicts. This means that you need to include some additional extensions in your application along with the main extension file.

You will add these extensions as you do with any other extension, and you need to ensure it is packaged with your application.

### Core

The Core ANE is required by this ANE. You must include and package this extension in your application.

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions. It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).

### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries.

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [androidx.core](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).

> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.

> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices.
> There is no problem packaging these ANEs with all platforms as there are default implementations available which will allow your code to package without errors
> however if you are only building an iOS application feel free to remove the Google Play Services ANEs from your application.

## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Permissions</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>androidx.core</extensionID>
</extensions>
```

## Android

### Manifest Additions

Making authorisation requests requires the some additions to the manifest, in
particular you need to add the `activity` in the listing below.

Additionally you will need to add your application permissions as normal.
**Using this ANE does not elliminate the need to define your permissions in the manifest!**

```xml
<manifest android:installLocation="auto">
	<uses-sdk android:minSdkVersion="14" android:targetSdkVersion="28"/>
	<uses-permission android:name="android.permission.INTERNET"/>

	<!-- PERMISSIONS -->
	<!-- You should add your permissions here normally eg: -->
	<uses-permission android:name="android.permission.CAMERA" />

	<application>
		<activity
			android:name="com.distriqt.extension.permissions.permissions.AuthorisationActivity"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />
	</application>

</manifest>
```

## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.

```actionscript
if (Permissions.isSupported)
{
	// Functionality here
}
```
