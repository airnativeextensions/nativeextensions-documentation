---
title: Support Incoming Links 
sidebar_label: Support Incoming Links 
---


When people tap the Open / Play button on the invite or the Is Ready installation notification, 
they will be taken to your app. The URL defined in the App Link will be passed in. 

In order to support incoming links you need to add some additions to your application descriptor,
that will ensure your application receives the links correctly.



## Android


To respond to opening links for your custom URL scheme, add an intent-filter for that specific URL.

```xml
<!-- This is the Main AIR launch activity -->
<activity>
	<!-- This part is required to define this as the main activity -->
	<intent-filter>
		<action android:name="android.intent.action.MAIN" />
		<category android:name="android.intent.category.LAUNCHER" />
	</intent-filter>

	<!-- This intent filter is for your custom url -->
	<intent-filter android:autoVerify="true">
		<action android:name="android.intent.action.VIEW" />
		<category android:name="android.intent.category.DEFAULT" />
		<category android:name="android.intent.category.BROWSABLE" />

		<!-- Accepts URIs "distriqttestapp://" -->
		<data android:scheme="distriqttestapp" />
	</intent-filter>

</activity>
```

This should be added within the `application` node of your manifest additions.

For example:

```xml
<manifest android:installLocation="auto" >
	<uses-sdk android:minSdkVersion="19" android:targetSdkVersion="29" />

	<!-- YOUR PERMISSIONS -->

	<application 
		android:appComponentFactory="androidx.core.app.CoreComponentFactory" 
		android:hardwareAccelerated="true" >

		<!-- HERE -->
		<activity>
			<intent-filter>
				<action android:name="android.intent.action.MAIN" />
				<category android:name="android.intent.category.LAUNCHER" />
			</intent-filter>
			<intent-filter android:autoVerify="true">
				<action android:name="android.intent.action.VIEW" />
				<category android:name="android.intent.category.DEFAULT" />
				<category android:name="android.intent.category.BROWSABLE" />
				<data android:scheme="distriqttestapp" />
			</intent-filter>
		</activity>


		<!-- OTHER APPLICATION ADDITIONS -->

	</application>
</manifest>
```

## iOS 

You'll need to add a custom url that you will use to open your application. In the following 
you would be able to open the application using the `distriqttestapp://` url.

```xml
<key>CFBundleURLTypes</key>
<array>
	<dict>
		<key>CFBundleURLSchemes</key>
		<array>
			<string>fbXXXXXXXXXX</string>
			<string>distriqttestapp</string>
		</array>
	</dict>
</array>
```

This should be added to the `InfoAdditions` node in your application descriptor.


