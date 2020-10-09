---
title: Migrating to version 10
sidebar_label: Migrating to version 10
---

## Migrating to version 10

Version 10 brings the latest consent gathering processes from Google utilising the User Messaging Platform and preparations for iOS 14's App Tracking Transparency framework requirement.


#### Android Manifest

Ensure you have the latest manifest additions:

```xml
<manifest android:installLocation="auto">
	
	<!--Required. Used to access the Internet to make ad requests-->
	<uses-permission android:name="android.permission.INTERNET"/>

	<!--Optional. Used to check if an internet connection is available prior to making an ad request.-->
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>

	<uses-permission android:name="android.permission.WAKE_LOCK" />

	<application 
		android:hardwareAccelerated="true"
		android:appComponentFactory="androidx.core.app.CoreComponentFactory">

		<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version"/>
		
		<meta-data
			android:name="com.google.android.gms.ads.APPLICATION_ID"
			android:value="ca-app-pub-AAAAAAAAAAAAAAAA~XXXXXXXXXX"/>

		<activity 
			android:name="com.google.android.gms.ads.AdActivity"
			android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|uiMode|screenSize|smallestScreenSize" 
			android:exported="false"
			android:theme="@android:style/Theme.Translucent" />

		<provider
			android:name="com.google.android.gms.ads.MobileAdsInitProvider"
			android:authorities="air.com.distriqt.test.debug.mobileadsinitprovider"
			android:exported="false"
			android:initOrder="100" />

		<service
			android:name="com.google.android.gms.ads.AdService"
			android:enabled="true"
			android:exported="false" />
			
	</application>

</manifest>
```

See [Add the Extension](add-the-extension) for details.



#### iOS Info Additions

Updates are required to support iOS 14, you need to make sure you have the following in your Info Addtions:

```xml
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-AAAAAAAAAAAAAAAA~XXXXXXXXXX</string>

<key>NSUserTrackingUsageDescription</key>
<string>This identifier will be used to deliver personalized ads to you.</string>

<key>SKAdNetworkItems</key>
<array>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>cstr6suwn9.skadnetwork</string>
    </dict>
</array>
```

See [Add the Extension](add-the-extension) for details.





#### Initialisation

You may notice that the `initialisePlatform()` function has been deprecated. This is to ensure that you are aware that there is now a two step process involved:

The legacy call to :

```actionscript
Adverts.service.initialisePlatform( AdvertPlatform.PLATFORM_ADMOB );
```

Is now the equivalent of :

```actionscript
Adverts.service.setup( AdvertPlatform.PLATFORM_ADMOB );
Adverts.service.initialise();
```

This separation has been made so you can access the consent functionality before initialising the platform. `setup()` must be called to setup the platform and make consent functionality available. Once initialise is called the SDK may make calls to preload ads so be sure to request any consent you require before calling `initialise()`. 



#### Consent SDK

To migrate you need to change any usages of the existing consent SDK to the new User Messaging Platform.

Any calls to `Adverts.service.consent.*` functionality need to be replaced with the new `Adverts.service.ump.*` functionality. See the documentation on the [User Messaging Platform](user-messaging-platform) for details.














