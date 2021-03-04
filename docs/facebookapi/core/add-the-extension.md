---
title: Add the Extension
sidebar_label: Add the Extension
---


First step is always to add the extension to your development environment. 
To do this use the tutorial located [here](/docs/tutorials/getting-started).

>
> You must use AIR SDK v33+. Anything less than 33 is not supported due to issues
> with the Android integration.
>


The Facebook Core SDK is contained in the `com.distriqt.facebook.Core` extension. Add this extension to your application along with the following dependencies.


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

- [androidx.core](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)
- [com.android.installreferrer](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.android.installreferrer.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).

>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>


>
> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices. 
> There is no problem packaging these ANEs with all platforms as there are default implementations available which will allow your code to package without errors 
> however if you are only building an iOS application feel free to remove the Google Play Services ANEs from your application.
>


## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.facebook.Core</extensionID>

	<extensionID>com.distriqt.Core</extensionID>
	<extensionID>com.distriqt.Bolts</extensionID>

	<extensionID>androidx.core</extensionID>
	<extensionID>com.android.installreferrer</extensionID>
</extensions>
```


## Android  

### Manifest Additions

The Facebook Core extension requires some additions to the Android section of 
your application descriptor XML file. These settings should be added or modified 
in the `manifestAdditions` node, under the `android` node.

This is an example of the manfiest additions section for our example application. 

Your app may require other settings in the manifest additions, so just ensure 
that all the following entries are added correctly to your version.

You will need to replace the instances of `FACEBOOK_APP_ID` and `FACEBOOK_APP_NAME` 
with the relevant settings from your Facebook app. (Don't include the braces).

You will need to replace the instances of `APPLICATION_PACKAGE` with your applications java package name (generally your AIR application id prefixed with `air.`) eg `air.com.distriqt.test`. 


```xml
<manifest android:installLocation="auto">
	<uses-sdk android:minSdkVersion="15" android:targetSdkVersion="29" />
	<uses-permission android:name="android.permission.INTERNET"/>

	<uses-permission android:name="com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE" />

	<application
		android:appComponentFactory="androidx.core.app.CoreComponentFactory"
		android:hardwareAccelerated="true">

		<!-- IMPORTANT: Do not remove the backslash and space at the beginning of the following value string. -->
		<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="\ FACEBOOK_APP_ID"/>

		<!-- OPTIONAL SETTINGS -->
		<meta-data android:name="com.facebook.sdk.AutoInitEnabled" android:value="false"/>
		<meta-data android:name="com.facebook.sdk.AutoLogAppEventsEnabled" android:value="true"/>
		<meta-data android:name="com.facebook.sdk.AdvertiserIDCollectionEnabled" android:value="true"/>

		<activity
			android:name="com.facebook.FacebookActivity"
			android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />
		<activity android:name="com.facebook.CustomTabMainActivity" />
		<activity
			android:name="com.facebook.CustomTabActivity"
			android:exported="true" >
			<intent-filter>
				<action android:name="android.intent.action.VIEW" />
				<category android:name="android.intent.category.DEFAULT" />
				<category android:name="android.intent.category.BROWSABLE" />
				<data android:scheme="fbFACEBOOK_APP_ID" />

			</intent-filter>
		</activity>

		<provider
			android:name="com.facebook.internal.FacebookInitProvider"
			android:authorities="APPLICATION_PACKAGE.FacebookInitProvider"
			android:exported="false" />

		<receiver
			android:name="com.facebook.CurrentAccessTokenExpirationBroadcastReceiver"
			android:exported="false" >
			<intent-filter>
				<action android:name="com.facebook.sdk.ACTION_CURRENT_ACCESS_TOKEN_CHANGED" />
			</intent-filter>
		</receiver>

	</application>

</manifest>
```


### MultiDex Applications 

If you have a large application and are supporting Android 4.x then you will need to ensure you
enable your application to correctly support MultiDex to allow the application to be broken up
into smaller dex packages.

This is enabled by default with recent releases of AIR (25+), except in the Android 4.x case where 
you need to change the manifest additions for the application tag to match the following and use 
the `MultiDexApplication`:

```xml
<manifest android:installLocation="auto">
	<!-- PERMISSIONS -->

	<application android:name="android.support.multidex.MultiDexApplication">

		<!-- ACTIVITIES / RECEIVERS / SERVICES -->

	</application>
</manifest>
```



## iOS

### Dynamic Frameworks

Facebook is based on a dynamic framework so you must include the framework and dependent swift libs in your application for signing by AIR.

To do this create a `Frameworks` directory at the top / root level of your application and ensure it is packaged with your AIR application.

If should contain all the `dylib` files in the supplied `Frameworks` directory and any of the Facebook SDK components that you are using in your application. 

The Core extension requires the `FBSDKCoreKit.framework` so your `Frameworks` directory should contain:

```
FBSDKCoreKit.framework
libswiftUIKit.dylib
libswiftCore.dylib
libswiftCoreFoundation.dylib
libswiftCoreGraphics.dylib
libswiftCoreImage.dylib
libswiftDarwin.dylib
libswiftDispatch.dylib
libswiftFoundation.dylib
libswiftMetal.dylib
libswiftObjectiveC.dylib
libswiftos.dylib
libswiftQuartzCore.dylib
```


### Info Additions

The Facebook Core extension requires some additions to the iOS section of your application 
descriptor XML file. These settings should be added or modified in the `InfoAdditions` node, 
under the `iPhone` node.

You will need to replace the instances of `FACEBOOK_APP_ID` and `FACEBOOK_APP_NAME` 
with the relevant settings from your Facebook app. (Don't include the braces).

This is required additions for the InfoAdditions section:

```xml
<key>CFBundleURLTypes</key>
<array>
	<dict>
		<key>CFBundleURLSchemes</key>
		<array>
			<!-- Don't remove the 'fb' prefix -->
			<string>fbFACEBOOK_APP_ID</string>
		</array>
	</dict>
</array>
<key>FacebookAppID</key>
<string>FACEBOOK_APP_ID</string>
<key>FacebookDisplayName</key>
<string>FACEBOOK_APP_NAME</string>

<!-- OPTIONAL SETTINGS -->
<key>FacebookAutoInitEnabled</key>
<false/>
<key>FacebookAutoLogAppEventsEnabled</key>
<true/>
<key>FacebookAdvertiserIDCollectionEnabled</key>
<true/>

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
	<string>fbapi20130214</string>
	<string>fbapi20130410</string>
	<string>fbapi20130702</string>
	<string>fbapi20131010</string>
	<string>fbapi20131219</string>
	<string>fbapi20140410</string>
	<string>fbapi20140116</string>
	<string>fbapi20150313</string>
	<string>fbapi20150629</string>
	<string>fbapi20160328</string>
	<string>fbauth</string>
	<string>fb-messenger-share-api</string>
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



