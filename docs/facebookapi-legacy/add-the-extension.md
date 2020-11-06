---
title: Add the Extension
sidebar_label: Add the Extension
---

:::caution
This is the legacy extension documentation. Find the new documentation [here](../facebookapi/)
:::

## Add the Extension

First step is always to add the extension to your development environment. 
To do this use the tutorial located [here](/docs/tutorials/getting-started).

>
> You must use AIR SDK v29+. Anything less than 29 is not supported due to issues
> with the Android integration.
>



## Dependencies

Many of our extensions use some common libraries, for example, the Android Support libraries.

We have to separate these libraries into separate extensions in order to avoid multiple versions of the libraries being included in your application and causing packaging conflicts. This means that you need to include some additional extensions in your application along with the main extension file.

You will add these extensions as you do with any other extension, and you need to ensure it is packaged with your application.


### Core 

The Core ANE is required by this ANE. You must include and package this extension in your application.

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You must include this extension in your application and call the initialisation function at some point in your application before using any of our extensions. 

```actionscript
Core.init();
```

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).



### Bolts 

The Bolts extension is required by Facebook. 

The Bolts extension doesn't provide any functionality in itself but supports some of our other extensions. 
It contains the Bolts framework.

You can access this extension here: [https://github.com/distriqt/ANE-Bolts](https://github.com/distriqt/ANE-Bolts).



### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries. 

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [androidx.appcompat.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.appcompat.ane)
- [androidx.browser.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.browser.ane)
- [androidx.cardview.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.cardview.ane)
- [androidx.core.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)
- [androidx.recyclerview.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.recyclerview.ane)
- [androidx.transition.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.transition.ane)
- [androidx.vectordrawable.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.vectordrawable.ane)
- [com.android.installreferrer.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.android.installreferrer.ane)
- [com.google.android.material.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.android.material.ane)


You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).

>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>



### Google Play Services 

This ANE requires usage of certain aspects of the Google Play Services client library. 
The client library is available as a series of ANEs that you add into your applications packaging options. 
Each separate ANE provides a component from the Play Services client library and are used by different ANEs. 
These client libraries aren't packaged with this ANE as they are used by multiple ANEs and separating them 
will avoid conflicts, allowing you to use multiple ANEs in the one application.

This ANE requires the following Google Play Services:

- [com.distriqt.playservices.Base.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Base.ane)
- [com.distriqt.playservices.Auth.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Auth.ane)

You must include the above native extensions in your application along with this extension, 
and you need to ensure they are packaged with your application.

You can access the Google Play Services client library extensions here: 
[https://github.com/distriqt/ANE-GooglePlayServices](https://github.com/distriqt/ANE-GooglePlayServices).


>
> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices. 
> There is no problem packaging these ANEs with all platforms as there are default implementations available which will allow your code to package without errors 
> however if you are only building an iOS application feel free to remove the Google Play Services ANEs from your application.
>


## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.FacebookAPI</extensionID>
	<extensionID>com.distriqt.Core</extensionID>
	
	<extensionID>com.distriqt.Bolts</extensionID>

	<extensionID>com.distriqt.playservices.Base</extensionID>
	<extensionID>com.distriqt.playservices.Auth</extensionID>

	<extensionID>androidx.appcompat</extensionID>
	<extensionID>androidx.browser</extensionID>
	<extensionID>androidx.cardview</extensionID>
	<extensionID>androidx.core</extensionID>
	<extensionID>androidx.recyclerview</extensionID>
	<extensionID>androidx.transition</extensionID>
	<extensionID>androidx.vectordrawable</extensionID>
	<extensionID>com.android.installreferrer</extensionID>
	<extensionID>com.google.android.material</extensionID>
</extensions>
```


## Android  

### Manifest Additions

The FacebookAPI extension requires some additions to the Android section of 
your application descriptor XML file. These settings should be added or modified 
in the `manifestAdditions` node, under the `android` node.

This is an example of the manfiest additions section for our example application. 

Your app may require other settings in the manifest additions, so just ensure 
that all the following entries are added correctly to your version.

You will need to replace the instances of `[YOUR_FACEBOOK_APP_ID]` and `[YOUR_FACEBOOK_APP_NAME]` 
with the relevant settings from your Facebook app. (Don't include the braces).

You will need to replace the instances of `YOUR_PACKAGE_NAME` with your applications java package name (generally your AIR application id prefixed with `air.`). 

```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

	<uses-permission android:name="com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE" />

	<application android:name="androidx.multidex.MultiDexApplication">
		<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version" />

		<intent-filter>
			<action android:name="android.intent.action.MAIN" />
			<category android:name="android.intent.category.LAUNCHER" />
		</intent-filter>

		<!-- FACEBOOK API -->	
		<meta-data android:name="com.facebook.sdk.AutoLogAppEventsEnabled" android:value="true"/>
        <meta-data android:name="com.facebook.sdk.AdvertiserIDCollectionEnabled" android:value="true"/>
        <meta-data android:name="com.facebook.sdk.AutoInitEnabled" android:value="true"/>
		
		<activity android:name="com.facebook.FacebookActivity" android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:label="@string/app_name" />
		<activity android:name="com.facebook.CustomTabMainActivity" />
		<provider android:name="com.facebook.internal.FacebookInitProvider" android:exported="false"
			android:authorities="YOUR_PACKAGE_NAME.FacebookInitProvider" />
			
		<receiver android:name="com.facebook.CurrentAccessTokenExpirationBroadcastReceiver" android:exported="false" >
			<intent-filter>
				<action android:name="com.facebook.sdk.ACTION_CURRENT_ACCESS_TOKEN_CHANGED" />
			</intent-filter>
		</receiver>

		<activity android:name="com.facebook.CustomTabActivity" android:exported="true" >
			<intent-filter>
				<action android:name="android.intent.action.VIEW" />
				<category android:name="android.intent.category.DEFAULT" />
				<category android:name="android.intent.category.BROWSABLE" />
				<!-- Don't remove the 'fb' prefix -->
				<data android:scheme="fb[YOUR_FACEBOOK_APP_ID]" />
			</intent-filter>
		</activity>

		<!-- IMPORTANT: Do not remove the backslash and space at the beginning of the following value string. -->
		<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="\ [YOUR_FACEBOOK_APP_ID]"/>
		<provider android:authorities="com.facebook.app.FacebookContentProvider[YOUR_FACEBOOK_APP_ID]" android:name="com.facebook.FacebookContentProvider" android:exported="true" />

		

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

### AIR SDK

If you are using AIR 32 or lower you may need to update the SDK to correctly supply the iOS SDK.

To update the SDK you will need to copy the library `libclang_rt.ios.a` into your AIR SDK and place it at: `[AIR_SDK]/lib/aot/lib`

You can grab the library file [here](https://www.dropbox.com/s/kvhk8yxxomy3tpn/libclang_rt.ios.a?dl=0
): https://www.dropbox.com/s/kvhk8yxxomy3tpn/libclang_rt.ios.a?dl=0


If you don't do this correctly, you will see something like the following error when packaging:

```
ld: library not found for -lclang_rt.ios
Compilation failed while executing : ld64
```




### Info Additions

The FacebookAPI extension requires some additions to the iOS section of your application 
descriptor XML file. These settings should be added or modified in the `InfoAdditions` node, 
under the `iPhone` node.

You will need to replace the instances of `[YOUR_FACEBOOK_APP_ID]` and `[YOUR_FACEBOOK_APP_NAME]` 
with the relevant settings from your Facebook app. (Don't include the braces).

This is required additions for the InfoAdditions section:

```xml
<key>CFBundleURLTypes</key>
<array>
	<dict>
		<key>CFBundleURLSchemes</key>
		<array>
			<!-- Don't remove the 'fb' prefix -->
			<string>fb[YOUR_FACEBOOK_APP_ID]</string>
		</array>
	</dict>
</array>
<key>FacebookAppID</key>
<string>[YOUR_FACEBOOK_APP_ID]</string>
<key>FacebookDisplayName</key>
<string>[YOUR_FACEBOOK_APP_NAME]</string>

<key>NSAppTransportSecurity</key>
<dict>
	<key>NSExceptionDomains</key>
	<dict>
		<key>facebook.com</key>
		<dict>
			<key>NSIncludesSubdomains</key>
			<true/>                
			<key>NSThirdPartyExceptionRequiresForwardSecrecy</key>
			<false/>
		</dict>
		<key>fbcdn.net</key>
		<dict>
			<key>NSIncludesSubdomains</key>
			<true/>
			<key>NSThirdPartyExceptionRequiresForwardSecrecy</key>
			<false/>
		</dict>
		<key>akamaihd.net</key>
		<dict>
			<key>NSIncludesSubdomains</key>
			<true/>
			<key>NSThirdPartyExceptionRequiresForwardSecrecy</key>
			<false/>
		</dict>
	</dict>
</dict>

<!-- Required to check availability and communicate with other Facebook applications -->
<key>LSApplicationQueriesSchemes</key>
<array>
	<string>fb</string>
	<string>fbapi</string>
	<string>fb-messenger-share-api</string>
	<string>fb-messenger-api</string>
	<string>fbauth2</string>
	<string>fbshareextension</string>
</array>
```


We also suggest adding the photo usage description string in case you will be sharing
photos using the share dialogs

```xml
<key>NSPhotoLibraryUsageDescription</key>
<string>Access to photo library is required to save images and videos.</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Access to photo library is required to save images and videos.</string>
```



