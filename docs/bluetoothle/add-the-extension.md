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


### Core 

The Core ANE is required by this ANE. You must include and package this extension in your application.

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).


### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries. 

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [`androidx.core`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>


>
> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices. 
> There are no issues packaging these extensions with all platforms as there are default implementations available which will allow your code to package without errors however if you are only building an iOS application feel free to remove the Google Play Services and Android Support ANEs from your application.
>


## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.BluetoothLE</extensionID>
    <extensionID>com.distriqt.Core</extensionID>

    <extensionID>androidx.core</extensionID>
</extensions>
```



## Android Manifest Additions

There aren't many additions required for using Bluetooth LE on Android, you just need to add 
the permissions and if you wish to limit the devices your application can be installed on you 
can add the hardware requirement.

Note: Since Android 23, you need to add `ACCESS_COARSE_LOCATION` to be able to scan for devices.

```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	
	<uses-permission android:name="android.permission.BLUETOOTH"/>
	<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
	<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>

	<!-- For Android 10 -->
	<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
	<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION"/>


	<uses-feature android:name="android.hardware.bluetooth_le" android:required="true"/>

	<application>
	
		<activity 
			android:name="com.distriqt.extension.bluetoothle.permissions.AuthorisationActivity"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />

	</application>
</manifest>
```


## iOS InfoAdditions

The following additions are required to enable the background operation modes of the application 
as either a peripheral or a central or both.

The `NSBluetoothAlwaysUsageDescription` and `NSBluetoothPeripheralUsageDescription` keys let you describe the reason your app uses Bluetooth. 
- `NSBluetoothAlwaysUsageDescription` is required for iOS versions 13+;
- if you are also deploying to earlier versions you should also include `NSBluetoothPeripheralUsageDescription`.

When the system prompts the user to allow usage, the value that you provide for this key is displayed as part of the alert.

```xml
<InfoAdditions><![CDATA[
	
	<!-- OTHER SETTINGS --> 

	<key>NSBluetoothAlwaysUsageDescription</key>
	<string>Usage description</string>

	<!-- For iOS versions earlier than 13 -->
	<key>NSBluetoothPeripheralUsageDescription</key>
	<string>Usage description</string>


	<key>UIBackgroundModes</key>
	<array>
		<string>bluetooth-central</string>
		<string>bluetooth-peripheral</string>
	</array>
	

]]></InfoAdditions>
<requestedDisplayResolution>high</requestedDisplayResolution>
<Entitlements>
	<![CDATA[
	]]>
</Entitlements>
```


>
> Important: To protect user privacy, an iOS app linked on or after iOS 10.0, and which accesses 
> the Bluetooth interface, must statically declare the intent to do so. 
> Include the `NSBluetoothPeripheralUsageDescription` key in your app’s Info.plist file and provide 
> a purpose string for this key. 
> **If your app attempts to access the Bluetooth interface without a corresponding purpose string, your app exits.**
>




## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
if (BluetoothLE.isSupported)
{
	// Functionality here
}
```


