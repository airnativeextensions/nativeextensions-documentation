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
    <extensionID>com.distriqt.Calendar</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>androidx.core</extensionID>
</extensions>
```



## Android 

### Manifest Additions

The Calendar ANE requires a few additions to the manifest to be able to start certain activities and get access to the users calendar. 
You should add the listing below to your manifest:

```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="android.permission.READ_CALENDAR"/>
	<uses-permission android:name="android.permission.WRITE_CALENDAR"/>
	
	<application>
		<activity android:name="com.distriqt.extension.calendar.activities.CalendarAddEventWithUIActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar"></activity>
	
		<activity android:name="com.distriqt.extension.calendar.permissions.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" />
	</application>
</manifest>
```


## iOS

### Info Additions

The following additions are for the InfoAdditions node of the iPhone section in your application descriptor:

```xml
<iPhone>
    <InfoAdditions><![CDATA[

        HERE

    ]]></InfoAdditions>
</iPhone>
```

If you are using iOS 10 you now need to add some strings to display messages to the user when certain 
permissions are requested. As you will be requesting access to the users calendar you will need to add 
display the following dialog at some point:

![](images/ios-permission-dialog.png)

From iOS 10 you must add a string to your Info Addition to set the text in this dialog:

```xml
	<key>NSCalendarsUsageDescription</key>
	<string>Access to calendar is required.</string>
```


## Supported

You should always check whether the extension is supported before making calls. 
This allows you to react to whether the functionality is available on the device.

```actionscript
if (Calendar.isSupported)
{
	//	Functionality here
}
```


