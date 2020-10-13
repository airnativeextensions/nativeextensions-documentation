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

- [androidx.core.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)

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
    <extensionID>com.distriqt.Notifications</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>androidx.core</extensionID>
</extensions>
```



## Android 

### Manifest Additions

The Notifications extension requires a few additions to the manifest to be able to receive notifications when the application isn't running in the foreground. You should add the listing below to your application descriptor, making sure you replace the `APPLICATION_PACKAGE` with your application id, leaving the `air.` prefix (unless you are removing it from your builds).


```xml
<manifestAdditions><![CDATA[
	<manifest android:installLocation="auto">
		
		<uses-permission android:name="android.permission.INTERNET"/>
		<uses-permission android:name="android.permission.VIBRATE"/>
		<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
		
		<application>
		
			<!-- NOTIFICATIONS -->
			<receiver android:name="com.distriqt.extension.notifications.notifications.receivers.NotificationReceiver">
				<intent-filter>
					<action android:name="APPLICATION_PACKAGE.NOTIFICATION_SELECTED" />
					<action android:name="APPLICATION_PACKAGE.NOTIFICATION_DELETED" />
					<action android:name="APPLICATION_PACKAGE.NOTIFICATION_ACTION" />
					<action android:name="APPLICATION_PACKAGE.NOTIFICATION_DELAYED" />
					<data android:scheme="dtn" />
				</intent-filter>
				<intent-filter>
					<action android:name="android.intent.action.BOOT_COMPLETED" />
					<action android:name="android.intent.action.QUICKBOOT_POWERON" />
				</intent-filter>
			</receiver>
			<provider
				android:name="com.distriqt.extension.notifications.content.FileProvider"
				android:authorities="APPLICATION_PACKAGE.notificationsfileprovider"
				android:grantUriPermissions="true"
				android:exported="false">
				<meta-data 
					android:name="android.support.FILE_PROVIDER_PATHS" 
					android:resource="@xml/distriqt_notifications_paths" />
			</provider>
			
		</application>
		
	</manifest>
]]></manifestAdditions>
```




## iOS

This ANE has been updated for iOS 10 and requires a minimum of the iOS 10 SDK to be linked with your application in order to have access to the iOS 10 notification features.

Make sure you provide a valid iOS 10 SDK when packagaging. See [here](/docs/tutorials/getting-started#ios) for more.


There are no specific info additions or entitlements required for iOS notifications.





## Windows 

See the detailed [Windows section](add-the-extension---windows)





## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
Core.init();
if (Notifications.isSupported)
{
	// Functionality here
}
```

