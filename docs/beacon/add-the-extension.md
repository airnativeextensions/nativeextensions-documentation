---
title: Add the Extension
sidebar_label: Add the Extension
---


First step is always to add the extension to your development environment. 
To do this use the tutorial located [here](/docs/tutorials/getting-started).



## Required ANEs

### Core ANE

The Core ANE is required by this ANE. You must include and package this extension in your application.

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).


### Android Support ANE

Due to several of our ANE's using the Android Support library the library has been separated 
into a separate ANE allowing you to avoid conflicts and duplicate definitions.
This means that you need to include the some of the android support native extensions in 
your application along with this extension. 

You will add these extensions as you do with any other ANE, and you need to ensure it is 
packaged with your application. There is no problems including this on all platforms, 
they are just **required** on Android.

This ANE requires the following Android Support extensions:

- [com.distriqt.androidsupport.V4.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.distriqt.androidsupport.V4.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).

>
> **Note**: if you have been using the older `com.distriqt.AndroidSupport.ane` you should remove that
> ANE and replace it with the equivalent `com.distriqt.androidsupport.V4.ane`. This is the new 
> version of this ANE and has been renamed to better identify the ANE with regards to its contents.
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
    <extensionID>com.distriqt.Beacon</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>com.distriqt.androidsupport.V4</extensionID>
</extensions>
```



## Android 

### Manifest Additions

Listening for beacons requires several permission and application additions to the Android manifest. 
You will need to add the following to your application descriptor.

```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="android.permission.BLUETOOTH"/>
	<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
	<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
	
	<!-- This permission is required from Android 6.0+ -->
	<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
	
	<application>
		<receiver android:name="com.distriqt.extension.beacon.services.StartupBroadcastReceiver">
			<intent-filter>
				<action android:name="android.intent.action.BOOT_COMPLETED"/>
				<action android:name="android.intent.action.ACTION_POWER_CONNECTED"/>
				<action android:name="android.intent.action.ACTION_POWER_DISCONNECTED"/>
			</intent-filter>
		</receiver>

		<service android:name="com.distriqt.extension.beacon.services.BeaconService" android:enabled="true" android:exported="false" android:isolatedProcess="false" android:label="beacon" />
		<service android:name="com.distriqt.extension.beacon.services.BeaconIntentProcessor" android:enabled="true" android:exported="false" />
		
		<activity android:name="com.distriqt.extension.beacon.permissions.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" />
		
	</application>

</manifest>
```


## iOS 

### InfoAdditions

The following additions are required to support the authorisation process introduced in iOS 8. 
You can customise the `NSLocationAlwaysUsageDescription` and `NSLocationWhenInUseUsageDescription`
messages as you see fit to suit your application.

```xml
<key>UIDeviceFamily</key>
<array>
	<string>1</string>
</array>

<key>UIBackgroundModes</key>
<array>
	<string>location</string>
</array>


<!-- iOS 8 + -->
<key>NSLocationWhenInUseUsageDescription</key>
<string>This application would like to use your location when in use.</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>This application would like to use your location in the background.</string>

<!-- iOS 11 + -->
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>This application would like to use your location in the background and the foreground.</string>
```

If you are using the broadcasting functionality you will also need to add the bluetooth usage strings:

```xml
<key>NSBluetoothPeripheralUsageDescription</key>
<string>This application would like to use bluetooth to be able to broadcast a beacon identification.</string>
<key>NSBluetoothAlwaysUsageDescription</key>
<string>This application would like to use bluetooth to be able to broadcast a beacon identification.</string>
```

These are not required for the NoCoreBluetooth variant of the ANE.

## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
if (Beacon.isSupported)
{
	// Functionality here
}
```


