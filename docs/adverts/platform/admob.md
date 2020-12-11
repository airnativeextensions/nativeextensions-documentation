---
title: Google AdMob
sidebar_label: Google AdMob
---

This section describes how to setup your AIR application to use AdMob with this extension. 

>
> You work hard on your app. AdMob makes earning revenue easy with in-app ads, actionable insights, and powerful, easy-to-use tools that grow your app business.
>

You should make sure you have been through the process of creating an AdMob account by following the guide below:

- https://admob.google.com/home/get-started/



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

- [androidx.appcompat.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.appcompat.ane)
- [androidx.browser.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.browser.ane)
- [androidx.core.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)
- [androidx.constraintlayout.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.constraintlayout.ane)
- [androidx.vectordrawable.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.vectordrawable.ane)
- [com.google.code.gson.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.code.gson.ane)

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
- [com.distriqt.playservices.Ads.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Ads.ane)
- [com.distriqt.playservices.AdsIdentifier.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.AdsIdentifier.ane)

You must include the above native extensions in your application along with this extension, 
and you need to ensure they are packaged with your application.

You can access the Google Play Services client library extensions here: 
[https://github.com/distriqt/ANE-GooglePlayServices](https://github.com/distriqt/ANE-GooglePlayServices).

>
> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices. 
> There are no issues packaging these extensions with all platforms as there are default implementations available which will allow your code to package without errors however if you are only building an iOS application feel free to remove the Google Play Services and Android Support ANEs from your application.
>


## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.Adverts</extensionID>
	<extensionID>com.distriqt.Core</extensionID>

	<extensionID>com.distriqt.playservices.Base</extensionID>
	<extensionID>com.distriqt.playservices.Ads</extensionID>
	<extensionID>com.distriqt.playservices.AdsIdentifier</extensionID>

	<extensionID>androidx.appcompat</extensionID>
	<extensionID>androidx.browser</extensionID>
	<extensionID>androidx.core</extensionID>
	<extensionID>androidx.constraintlayout</extensionID>
	<extensionID>androidx.vectordrawable</extensionID>
	<extensionID>com.google.code.gson</extensionID>
</extensions>
```




## Android 

### Manifest Additions

The Adverts ANE requires a few additions to the manifest to be able to start certain activities. You should add the listing below to your manifest, replacing `APPLICATION_PACKAGE` with your AIR application package name on Android (eg `air.com.distriqt.test`) Note that it may be prefixed by `air.`.

Make sure you add the  `com.google.android.gms.ads.APPLICATION_ID` `meta-data` tag with a string value of your AdMob app ID into the application node. You can [find your App ID](https://support.google.com/admob/answer/7356431) in the AdMob UI. i.e. replace `ca-app-pub-AAAAAAAAAAAAAAAA~XXXXXXXXXX` in the additions below.

Also we suggest you enable hardware acceleration so videos are displayed correctly (i.e. the `android:hardwareAccelerated="true"` attribute on your android `application` tag).


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
			android:authorities="APPLICATION_PACKAGE.mobileadsinitprovider"
			android:exported="false"
			android:initOrder="100" />

		<service
			android:name="com.google.android.gms.ads.AdService"
			android:enabled="true"
			android:exported="false" />
			
	</application>

</manifest>
```

We also suggest that you add the `containsVideo` tag to your `android` configuration:


```xml
<android>
	<manifestAdditions><![CDATA[
		<!-- MANIFEST -->
	]]></manifestAdditions>
	
	<containsVideo>true</containsVideo>

</android>
```




## iOS 

### Info Additions

Add a `GADApplicationIdentifier` key with a string value of your AdMob app ID into the info additions node. You can [find your App ID](https://support.google.com/admob/answer/7356431) in the AdMob UI.


**Note: If you fail to add the `GADApplicationIdentifier` key you may find your application will crash on launch.**



```xml
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-AAAAAAAAAAAAAAAA~XXXXXXXXXX</string>
```


App Transport Security (ATS) is a privacy feature introduced in iOS 9. It's enabled 
by default for new applications and enforces secure connections.

All iOS 9 or higher devices running apps that don't disable ATS will be affected by 
this change. This may affect your app's integration with the Google Mobile Ads SDK.

The following log message appears when a non-ATS compliant app attempts to serve an 
ad via HTTP on iOS 9 or iOS 10:

> App Transport Security has blocked a cleartext HTTP (http://) resource load since it is insecure. Temporary exceptions can be configured via your app's Info.plist file.

To ensure your ads are not impacted by ATS, add the following to the `InfoAdditions`
node in your `iPhone` settings of your application descriptor:

```xml
<key>NSAppTransportSecurity</key>
<dict>
	<key>NSAllowsArbitraryLoads</key>
	<true/>
	<key>NSAllowsArbitraryLoadsForMedia</key>
	<true/>
	<key>NSAllowsArbitraryLoadsInWebContent</key>
	<true/>
</dict>
```

The `NSAllowsArbitraryLoads` exception is required to make sure your ads are not 
impacted by ATS on iOS 9 devices, while `NSAllowsArbitraryLoadsForMedia` and 
`NSAllowsAribtraryLoadsInWebContent` are required to make sure your ads are 
not impacted by ATS on iOS 10 devices.



Add the `SKAdNetworkItems` key with Google's `SKAdNetworkIdentifier` value of `cstr6suwn9.skadnetwork`:

```xml
<key>SKAdNetworkItems</key>
<array>
	<dict>
		<key>SKAdNetworkIdentifier</key>
		<string>cstr6suwn9.skadnetwork</string>
	</dict>
</array>
```


For iOS 14 you need to add the `NSUserTrackingUsageDescription` string to specify the message shown to users when requesting app tracking through the new App Tracking Transparency framework.  The string specified here will be shown to users when the permission request is presented.

```xml
<key>NSUserTrackingUsageDescription</key>
<string>This identifier will be used to deliver personalized ads to you.</string>
```



Example:


```xml
<iPhone>
	<InfoAdditions><![CDATA[
		<key>UIDeviceFamily</key>
		<array>
			<string>1</string>
			<string>2</string>
		</array>

		<key>NSAppTransportSecurity</key>
		<dict>
			<key>NSAllowsArbitraryLoads</key>
			<true/>
			<key>NSAllowsArbitraryLoadsForMedia</key>
			<true/>
			<key>NSAllowsArbitraryLoadsInWebContent</key>
			<true/>
		</dict>

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
	]]></InfoAdditions>
	<requestedDisplayResolution>high</requestedDisplayResolution>
	<Entitlements>
		<![CDATA[
		]]>
	</Entitlements>
</iPhone>
```





### Check Google Play Services Availability

This extension requires the use of Google Play Services.

You should use the  `GoogleApiAvailability` helper in the `com.distriqt.playservices.Base` ANE. The documentation for this class is available in the [Google Play Services wiki](https://github.com/distriqt/ANE-GooglePlayServices/wiki/API-Availability). 

For example:

```actionscript
import com.distriqt.extension.playservices.base.ConnectionResult;
import com.distriqt.extension.playservices.base.GoogleApiAvailability;
```

```actionscript
var result:int = GoogleApiAvailability.instance.isGooglePlayServicesAvailable();
if (result != ConnectionResult.SUCCESS)
{
    if (GoogleApiAvailability.instance.isUserRecoverableError( result ))
    {
        GoogleApiAvailability.instance.showErrorDialog( result );
    }
    else
    {
        trace( "Google Play Services aren't available on this device" );
    }
}
else
{
    trace( "Google Play Services are Available" );
}
```

If Google Play Services aren't available then you won't be able to use the functionality in this extension.
