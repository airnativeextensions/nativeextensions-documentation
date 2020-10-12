---
title: Add the Extension
sidebar_label: Add the Extension
---

## Add the Extension

First step is always to add the extension to your development environment. 
To do this use the tutorial located [here](/docs/tutorials/getting-started).



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
- [androidx.appcompat.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.appcompat.ane)
- [androidx.vectordrawable.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.vectordrawable.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>


>
> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices. 
> There are no issues packaging these extensions with all platforms as there are default implementations available which will allow your code to package without errors however if you are only building an iOS application feel free to remove the Google Play Services and Android Support ANEs from your application.
>



## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.MediaPlayer</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
	<extensionID>androidx.core</extensionID>
	<extensionID>androidx.appcompat</extensionID>
	<extensionID>androidx.vectordrawable</extensionID>
</extensions>
```




## Android

### Manifest Additions

Displaying video on Android requires that we enable hardware acceleration on most devices. 
You can check whether this is required for your supported device list however generally 
we advise you enable acceleration.

You also need to add a service. This service is only required if you are using background audio
playback on Android, however it doesn't hurt to add the service either way.

```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
	
	<application android:hardwareAccelerated="true">

		<service android:name="com.distriqt.extension.mediaplayer.audio.AudioPlayerService" android:enabled="true" android:exported="true"></service>

	</application>

</manifest>
```



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



## iOS

### Info Additions

The extension requires some additions to the iOS section of your application 
descriptor XML file. These settings should be added or modified in the `InfoAdditions` node, 
under the `iPhone` node.

Similar to Android these additions are for playback of background audio and only required 
if you plan to support playing audio when your application is not in the foreground
(i.e. generally not required).

To enable background audio on iOS you need to add the `audio` string to the `UIBackgroundModes`
as below:

```xml
<key>UIBackgroundModes</key>
<array>
	<string>audio</string>
</array>
```








## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
if (MediaPlayer.isSupported)
{
	// Functionality here
}
```
