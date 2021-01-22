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
- [androidx.appcompat.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.appcompat.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>


### Google Play Services 

This extension requires usage of certain aspects of the Google Play Services client library. 
The client library is available as a series of extensions that you add into your applications packaging options. 
Each separate extension provides a component(s) from the Play Services client library and are used by different extensions. 
These client libraries aren't packaged with this extension as they are used by multiple ANEs and separating them 
will avoid conflicts, allowing you to use multiple extensions in the one application.

This extension requires the following Google Play Services:

- [com.distriqt.playservices.Base.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Base.ane)
- [com.distriqt.playservices.Auth.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Auth.ane)
- [com.distriqt.playservices.Identity.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Identity.ane)

You must include the above native extensions in your application along with this extension, 
and you need to ensure they are packaged with your application.

You can access the Google Play Services client library extensions here: 
[https://github.com/distriqt/ANE-GooglePlayServices](https://github.com/distriqt/ANE-GooglePlayServices).


>
> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices. 
> There are no issues packaging these extensions with all platforms as there are default implementations available which will allow your code to package without errors however if you are only building an iOS application feel free to remove the Google Play Services and Android Support ANEs from your application.
>



### Square ANEs

Due to several of our ANE's using the [Square open source libraries](http://square.github.io) the libraries have been separated into a separate ANEs allowing you to avoid conflicts and duplicate definitions. This means that you need to include the some of the square native extensions in your application along with this extension. 

You will add these extensions as you do with any other ANE, and you need to ensure it is packaged with your application. 

This ANE requires the following Square extensions:

- [com.distriqt.square.okhttp.ane](https://github.com/distriqt/ANE-SquareLibs/raw/master/lib/com.distriqt.square.okhttp.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-SquareLibs](https://github.com/distriqt/ANE-SquareLibs).



## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.GoogleIdentity</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>androidx.core</extensionID>
    <extensionID>androidx.appcompat</extensionID>
    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.Auth</extensionID>
    <extensionID>com.distriqt.playservices.Identity</extensionID>
    <extensionID>com.distriqt.square.okhttp</extensionID>
</extensions>
```





## Android: Manifest Additions

Making requests and accessing the Google Identity functionality requires the some additional permissions, so these must also be declared in the manifest. Additionally you will need to add the activities to the manifest as in the section below:

```xml
<manifest android:installLocation="auto">
	<uses-sdk android:minSdkVersion="19" android:targetSdkVersion="29"/>

	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
	
	<application>
	
		<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version" />

		<activity
			android:name="com.google.android.gms.auth.api.signin.internal.SignInHubActivity"
			android:excludeFromRecents="true"
			android:exported="false"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />
		<service
			android:name="com.google.android.gms.auth.api.signin.RevocationBoundService"
			android:exported="true"
			android:permission="com.google.android.gms.auth.api.signin.permission.REVOCATION_NOTIFICATION" />

		<activity
			android:name="com.google.android.gms.common.api.GoogleApiActivity"
			android:exported="false"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />
				
	</application>

</manifest>
```

## iOS Info Additions

Accessing the Google Identity functionality requires some additions to the InfoAdditions on iOS. 
This allows callbacks from external applications that may handle signin and sign outs. You should 
replace the `URL_SCHEME` and `URL_NAME` in the additions with the ones you created when setting 
up your application in the Google developer console.

```xml
<InfoAdditions><![CDATA[
	<key>UIDeviceFamily</key>
	<array>
		<string>1</string>
	</array>
	
	<key>CFBundleURLTypes</key>
	<array>
		<dict>
			<key>CFBundleURLSchemes</key>
			<array>
				<string>URL_SCHEME</string>
			</array>
			<key>CFBundleURLName</key>
			<string>URL_NAME</string>
		</dict>
	</array>
	
]]></InfoAdditions>
```

The `URL_SCHEME` should be your reversed ios client id, along the lines of the following: 
`com.googleusercontent.apps.XXXXXXXXXXX-xxxxxxxxxxxxxxxxxxxxxxxxxxx`

The `URL_NAME` should be your application identifier, eg: `com.distriqt.test`

See the example application for our test application implementation.



## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
Core.init();
if (GoogleIdentity.isSupported)
{
	// Functionality here
}
```


