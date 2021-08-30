---
title: Add the Extension
sidebar_label: Add the Extension
---

First step is always to add the extension to your development environment.
To do this use the tutorial located [here](/docs/tutorials/getting-started).

> You must use AIR SDK v33+. Anything less than 33 is not supported due to issues
> with the Android integration.

The Facebook Gaming Services SDK is contained in the `com.distriqt.facebook.GamingServices` extension.

This extension depends upon the Facebook Core, Share and Login SDK so you will need to make sure you have added these extensions before continuing.

- [Add the Facebook Core extension](../core/add-the-extension)
- [Add the Facebook Login extension](../login/add-the-extension)
- [Add the Facebook Share extension](../share/add-the-extension)

## Dependencies

You will add these extensions as you do with any other extension, and you need to ensure it is packaged with your application.

### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries.

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [androidx.core](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)
- [androidx.appcompat](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.appcompat.ane)
- [androidx.browser](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.browser.ane)
- [androidx.cardview](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.cardview.ane)
- [androidx.vectordrawable](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.vectordrawable.ane)
- [com.android.installreferrer](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.android.installreferrer.ane)
- [com.jetbrains.kotlin](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.jetbrains.kotlin.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).

> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.

> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices.
> There is no problem packaging these ANEs with all platforms as there are default implementations available which will allow your code to package without errors
> however if you are only building an iOS application feel free to remove the Google Play Services ANEs from your application.

## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.facebook.Core</extensionID>
	<extensionID>com.distriqt.facebook.Login</extensionID>
	<extensionID>com.distriqt.facebook.Share</extensionID>
	<extensionID>com.distriqt.facebook.GamingServices</extensionID>

	<extensionID>com.distriqt.Core</extensionID>
	<extensionID>com.distriqt.Bolts</extensionID>

	<extensionID>androidx.core</extensionID>
	<extensionID>androidx.appcompat</extensionID>
	<extensionID>androidx.browser</extensionID>
	<extensionID>androidx.cardview</extensionID>
	<extensionID>androidx.vectordrawable</extensionID>
	<extensionID>com.android.installreferrer</extensionID>
	<extensionID>com.jetbrains.kotlin</extensionID>
</extensions>
```

## Android

### Manifest Additions

The Facebook Gaming Services extension doesn't require any manifest additions beyond the ones you have added for the other extensions.

## iOS

### Dynamic Frameworks

Facebook is based on a dynamic framework so you must include the framework and dependent swift libs in your application for signing by AIR.

To do this create a `Frameworks` directory at the top / root level of your application and ensure it is packaged with your AIR application.

If should contain all the `dylib` files in the supplied `Frameworks` directory and any of the Facebook SDK components that you are using in your application.

The Login extension requires the `FBSDKCoreKit.framework`, `FBSDKLoginKit.framework`, `FBSDKShareKit.framework`, and the `FBSDKGamingservicesKit.framework`, so your `Frameworks` directory should contain:

```
FBSDKCoreKit.framework
FBSDKLoginKit.framework
FBSDKShareKit.framework
FBSDKGamingServicesKit.framework
```

### Info Additions

The Facebook Gaming Services extension doesn't require any info additions beyond the ones you have added for the other extensions.
