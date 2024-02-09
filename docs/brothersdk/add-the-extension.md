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


### Core ANE

The Core ANE is required by this ANE. 

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions. It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).


### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries. 

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [androidx.core](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)
- [com.jetbrains.kotlin](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.jetbrains.kotlin.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


### Permissions

You will need the Permissions extension to request the permissions you need for connecting to the various printers. 


## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.BrotherSDK</extensionID>
    <extensionID>com.distriqt.Permissions</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>androidx.core</extensionID>
    <extensionID>com.jetbrains.kotlin</extensionID>
</extensions>
```


## Android

### Manifest Additions

The BrotherSDK extension requires a few additions to the manifest to be able to start certain activities. 

```xml
<manifest android:installLocation="auto">
	<uses-sdk android:minSdkVersion="21" android:targetSdkVersion="31"/>

	<uses-permission android:name="android.permission.INTERNET"/>

	<!-- For Bluetooth -->
	<uses-permission android:name="android.permission.BLUETOOTH"/>
	<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
	<uses-permission android:name="android.permission.BLUETOOTH_CONNECT"/>
	<!-- For Bluetooth Low Energy -->
	<uses-permission android:name="android.permission.BLUETOOTH_SCAN"/>
	<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
	
	<application android:hardwareAccelerated="true">
		
		<!-- Permissions (if using) -->
		<activity android:name="com.distriqt.extension.permissions.permissions.AuthorisationActivity" android:exported="false" android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
  
	</application>

</manifest>
```


## iOS 

### Info Additions

The following additions are for the `InfoAdditions` node of the iPhone section in your application descriptor:

```xml
<iPhone>
	<InfoAdditions><![CDATA[

		<key>NSAppTransportSecurity</key>
		<dict>
			<key>NSAllowsArbitraryLoads</key>
			<true/>
		</dict>

		<key>UISupportedExternalAccessoryProtocols</key>
		<array>
			<string>com.brother.ptcbp</string>
		</array>

		<key>NSLocalNetworkUsageDescription</key>
		<string>Local Network Usage Description</string>

		<key>NSBonjourServices</key>
		<array>
			<string>_pdl-datastream._tcp</string>
			<string>_printer._tcp</string>
			<string>_ipp._tcp</string>
		</array>


		<key>NSBluetoothAlwaysUsageDescription</key>
		<string>Used to connect to your printer</string>
		<key>NSBluetoothPeripheralUsageDescription</key>
		<string>Used to connect to your printer</string>

	]]></InfoAdditions>
</iPhone>
```


## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
if (BrotherSDK.isSupported)
{
	// Functionality here
}
```

