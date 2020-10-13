---
title: upgrade-new-version
sidebar_label: upgrade-new-version
---
# Version X upgrade steps 

The latest version (vX.X.X) of our NativeMaps extension has been updated
to simplify and resolve known issues with the Android version.

The updated version requires some changes to the way you set up your
application descriptor, etc.

This page outlines the steps to update your app to support the new
version of the ANE.

#
## Known Issues

The Android version of the ANE has had many known issues which were problematic for all different
versions of Android and therefore difficult to diagnose and fix for all users.

This version has been fairly well tested and we're reasonably confident that with the right
configuration the maps should function reliably across different devices and OS versions.

#
## Resolved issues in this version

### 1. Map not displaying
The main issue we have been trying to resolve for a long time has been the issue of the map 
not being visible, or disappearing. It's always been a problem because of the way AIR apps
work internally, and because of how Android handles z-indexing of SurfaceView layers. We have 
rewritten all of the view code which creates and runs the native map layer and are reasonably 
confident that we've solved this problem! 💃

### 2. UI controls invisible
A lot of reported issues correctly noted that after creating a map, the z-order problems caused
the UI controls to disappear on many versions of Android (the zoom buttons and user location
button). The fixes to the z-ordering in this new version should resolve this problem.

### 3. Problems with 'gms version' mismatch
A lot of crashes have been reported which were caused by an incorrect value of the
```com.google.android.gms.version``` meta tag value. The new version has changes to
use the correct value of ```@integer/google_play_services_version``` rather than a 
specific integer, which should fix this problem. 


#
## Required changes

### 1. Add supporting ANEs
Firstly, make sure you download and add the latest versions of each of the required
support extensions to your app. This includes:
- Core - https://github.com/distriqt/ANE-Core
- GooglePlayServices - https://github.com/distriqt/ANE-GooglePlayServices
- AndroidSupport - https://github.com/distriqt/ANE-AndroidSupport

### 2. Use AIR 22
AIR 22 is still in beta at the time of writing, but we believe it is the most stable and best
release of AIR so far, and so we recommend using it if possible.

### 3. Update your application descriptor
There are a few changes you need to make to the Android manifest section of your app XML. Below is an example of a complete manifest:

```
<android>
	<manifestAdditions><![CDATA[
		<manifest android:installLocation="auto">
			<uses-sdk android:minSdkVersion="12" android:targetSdkVersion="19" />
			<uses-permission android:name="android.permission.INTERNET"/>
			<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
			<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
			<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
			<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
			<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
			<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
			<uses-permission android:name="com.google.android.providers.gsf.permission.READ_GSERVICES"/>
			<uses-feature android:glEsVersion="0x00020000" android:required="true"/>
			<!-- Replace 'air.com.distriqt.test' here with 'air.your.app.id' etc -->
			<uses-permission android:name="air.com.distriqt.test.permission.MAPS_RECEIVE" android:protectionLevel="signature"/>
			<application>	
				<!-- Replace "YOUR_API_KEY" with your Android Google Maps v2 api key -->
				<meta-data android:name="com.google.android.maps.v2.API_KEY" android:value="YOUR API KEY" />
				<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version" />
			</application>
		</manifest>]]>
	</manifestAdditions>
</android>
```

### Summary of changes
TODO


#
## General notes

### 1. Creating maps - not so fast!
Some crashes or problems can be caused by trying to initialise and create a map too quickly when
your app starts up. For example, a lot of developers add all their code to init, create and set 
up a map in the ```addedToStage``` handler of the main class.

This can be problematic, especially in this new version because the extension needs to perform
some view reordering and modification to fix the z-indexing problem. We strongly suggest:
- Wait a short time after your app starts to work with the map objects
- Call ```NativeMaps.service.createMap()``` separately, before other map functions
- Listen for the ```NativeMapEvent.MAP_CREATED``` event and then perform other actions on your map 




#
## Documentation

Latest documentation:

http://airnativeextensions.com/extension/com.distriqt.NativeMaps



