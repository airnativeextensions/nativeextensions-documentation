---
title: Google Maps
sidebar_label: Google Maps
---

## Add Your Application to the Developer Console

Your application needs an API key to access the Google Maps servers. 
The type of key you need is an API key with restriction for Android apps. 
The key is free. You can use it with any of your applications that call the 
Google Maps Android API, and it supports an unlimited number of users.

The Google Play Developer Console is where you enable the various Google APIs for your application.

https://console.developers.google.com

- Select your project for your application or create a new project
- Enable the API
  - Select Library: A list of available APIs will be shown
  - Select "Google Maps Android API" 
  - Click Enable
- Create Credentials
  - Select Credentials
  - Click "Create credentials" and select "API key"
  - Copy the generated API key and use it to replace `YOUR_API_KEY` in your manifest additions below


## Restricting the API Key

At this point your key can be used in any application which is great for testing. 
However Google suggests that you restrict your key to your application so that you 
can limit the requests to this API to your application. This requires limiting the key
to the application id and the SHA-1 fingerprint of your signing certificate.

- Select the API key in Credentials
- Select "Android apps" in the Key restriction section
  - Select "Add package name and fingerprint"
  - Enter your package name eg: `air.com.distriqt.test` (Note the `air.` prefix)
  - Add the SHA-1 fingerprint of your certificate


You'll need the SHA1 fingerprint of your signing certificate here. This is the certificate you use to sign your application.

```
keytool -exportcert -keystore [YOUR_CERTIFICATE_PATH] -storepass [YOUR_CERT_PASSWORD]  -list -v -storetype PKCS12
```

If you wish to test debug builds you must use the debug certificate used in Flash Builder and enter this fingerprint here. 
You should update it when beta testing to your own certificate. 
The following command retrieves the SHA1 signature for the debug certificate used in Flash Builder (on OSX/macOS):

```
keytool -exportcert -keystore /Applications/Adobe\ Flash\ Builder\ 4.7/eclipse/plugins/com.adobe.flexide.multiplatform.android_4.7.0.349722/resources/debug-certificate-android.p12 -storepass debug  -list -v -storetype PKCS12
```


Read more about restricting the API key [here](https://developers.google.com/maps/documentation/android-api/signup#restrict-key)




## Manifest Additions 

You need to add the following to the `android` node in your application descriptor. 

Make sure you replace `YOUR_PACKAGE_NAME` with your application's package name eg `air.com.distriqt.test`
and `YOUR_API_KEY` with your Google Maps API key from above.


```xml
<manifest android:installLocation="auto">
	<uses-sdk android:minSdkVersion="12" android:targetSdkVersion="24" />

	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
	<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
	<uses-permission android:name="android.permission.DISABLE_KEYGUARD"/>
	<uses-permission android:name="android.permission.WAKE_LOCK"/>
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
	<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>

	<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
	<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
	
	<uses-permission android:name="com.google.android.providers.gsf.permission.READ_GSERVICES"/>

	<!-- Replace 'YOUR_PACKAGE_NAME' here with your application package eg: 'air.your.app.id'  -->
	<uses-permission android:name="YOUR_PACKAGE_NAME.permission.MAPS_RECEIVE" android:protectionLevel="signature"/>

	<uses-feature android:glEsVersion="0x00020000" android:required="true"/>
	
	<application>
		<!-- Replace "YOUR_API_KEY" with your Android Google Maps API Key -->
		<meta-data android:name="com.google.android.geo.API_KEY" android:value="YOUR_API_KEY" />
		<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version" />

		<activity android:name="com.distriqt.extension.nativemaps.permissions.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" />
	</application>

</manifest>
```


