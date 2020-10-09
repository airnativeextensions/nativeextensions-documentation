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

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).


### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries. 

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [androidx.core.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)
- [androidx.appcompat.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.appcompat.ane)
- [androidx.exifinterface.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.exifinterface.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>


>
> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices. 
> There are no issues packaging these extensions with all platforms as there are default implementations available which will allow your code to package without errors however if you are only building an iOS application feel free to remove the Google Play Services and Android Support ANEs from your application.
>



### Square ANEs

Due to several of our ANE's using the [Square open source libraries](http://square.github.io) the libraries have been separated into a separate ANEs allowing you to avoid conflicts and duplicate definitions. This means that you need to include the some of the square native extensions in your application along with this extension. 

You will add these extensions as you do with any other ANE, and you need to ensure it is packaged with your application. 

This ANE requires the following Square extensions:

- [com.distriqt.square.okhttp3.ane](https://github.com/distriqt/ANE-SquareLibs/raw/master/lib/com.distriqt.square.okhttp3.ane)
- [com.distriqt.square.picasso.ane](https://github.com/distriqt/ANE-SquareLibs/raw/master/lib/com.distriqt.square.picasso.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-SquareLibs](https://github.com/distriqt/ANE-SquareLibs).



## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.CameraRollExtended</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>androidx.core</extensionID>
    <extensionID>androidx.appcompat</extensionID>
    <extensionID>androidx.exifinterface</extensionID>
	<extensionID>com.distriqt.square.okhttp3</extensionID>
    <extensionID>com.distriqt.square.picasso</extensionID>
</extensions>
```


## Android 

### Manifest Additions

The Camera Roll Extended ANE requires a few additions to the manifest to be able to start certain activities 
and get access to the users media. You should add the listing below to your manifest.


```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
	<uses-permission android:name="com.google.android.apps.photos.permission.GOOGLE_PHOTOS"/>

	<!-- OPTIONAL: Only add this one if you want to add to the camera roll -->
	<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

	<application>
		
		<activity android:name="com.distriqt.extension.camerarollextended.permissions.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" />
		
		
		<activity android:name="com.distriqt.extension.camerarollextended.activities.MultiImagePickerActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:configChanges="orientation|screenSize" />
		<activity android:name="com.distriqt.extension.camerarollextended.activities.SelectorActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:configChanges="orientation|screenSize" />
		
	</application>
</manifest>
```


## iOS 

### Info Additions

The following additions are for the `InfoAdditions` node of the iPhone section in your application descriptor:

```xml
<iPhone>
	<InfoAdditions><![CDATA[

		HERE

	]]></InfoAdditions>
</iPhone>
```


If you are using iOS 10 you now need to add some strings to display messages to the user 
when certain permissions are requested. If you are sharing images then there is a chance 
the user may select to save to their camera roll in which case the following is displayed 
the first time your user attempts to access the camera roll.

![](images/ios-permission-dialog.png)

There are 2 keys required here that control the text in this dialog:

```xml
	<key>NSPhotoLibraryUsageDescription</key>
	<string>Access to photo library is required to save images.</string>
	<key>NSPhotoLibraryAddUsageDescription</key>
	<string>Access to photo library is required to save images.</string>
```

The second key was added in iOS 11.2. You should add both keys to your info additions.





## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
if (CameraRollExtended.isSupported)
{
	// Functionality here
}
```