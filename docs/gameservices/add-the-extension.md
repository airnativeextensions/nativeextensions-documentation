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
- [com.distriqt.playservices.Drive.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Drive.ane)
- [com.distriqt.playservices.Games.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Games.ane)

You must include the above native extensions in your application along with this extension, and you need to ensure they are packaged with your application.

You can access the Google Play Services client library extensions here: [https://github.com/distriqt/ANE-GooglePlayServices](https://github.com/distriqt/ANE-GooglePlayServices).


>
> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices. 
> There are no issues packaging these extensions with all platforms as there are default implementations available which will allow your code to package without errors however if you are only building an iOS application feel free to remove the Google Play Services and Android Support ANEs from your application.
>


## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.GameServices</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>androidx.core</extensionID>
    <extensionID>androidx.appcompat</extensionID>
    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.Drive</extensionID>
    <extensionID>com.distriqt.playservices.Games</extensionID>
    <extensionID>com.distriqt.playservices.Auth</extensionID>
</extensions>
```



## Android

### Manifest Additions

The Google Play Game Services require a few additions to the manifest to be able to start certain 
activities and set certain information. You should add the listing below to your manifest, replacing 
the `XXXXXXXXXXXX` with your application ID that you took note of when enabling Game Services in the 
console. (Note you must leave the `\ ` before your application id).

You should make sure your manifest contains the following:

```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	
	<application>
		
		<meta-data android:name="com.google.android.gms.games.APP_ID" android:value="\ XXXXXXXXXXXX" />
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

If you are supporting saved games on Game Center then you must add the additional 
iCloud configuration lines, replacing the `CONTAINER_IDENTIFIER` and `YOUR_APPLICATION_IDENTIFIER` 
with your container identifier you created earlier.

```xml
<iPhone>
	<InfoAdditions><![CDATA[
		<key>UIDeviceFamily</key>
		<array>
			<string>1</string>
			<string>2</string>
		</array>
		
	]]></InfoAdditions>
	<requestedDisplayResolution>high</requestedDisplayResolution>
	<Entitlements><![CDATA[
	
		<!-- GAME CENTER SAVED GAMES ADDITIONS -->
		<!-- You only need the following lines if you are going to support GameCenter Saves -->
		<key>com.apple.developer.ubiquity-container-identifiers</key>
		<array>
			<string>CONTAINER_IDENTIFIER</string>
		</array>
		
		<key>com.apple.developer.ubiquity-kvstore-identifier</key>
		<string>YOUR_APPLICATION_IDENTIFIER</string>
		<!-- END GAME CENTER SAVED GAMES ADDITIONS -->
		
	]]></Entitlements>
</iPhone>
```

>
> Note: **Saved games are not supported on Apple tvOS.** If you are supporting this 
> platform you should not add the container to your application descriptor. If you are supporting 
> both platforms and utilising saved games on iOS you will need to create separate application 
> descriptors for each and only add the following to the iOS application build.
>

More information on creating your iCloud container can be found here: [Setup GameCenter](setup-gamecenter#saved-games)
