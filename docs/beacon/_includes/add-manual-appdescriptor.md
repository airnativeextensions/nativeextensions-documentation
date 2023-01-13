
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Beacon</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>androidx.core</extensionID>
</extensions>
```

### Android

#### Manifest Additions

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

		<activity android:name="com.distriqt.core.auth.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:exported="false" />

		<receiver android:name="com.distriqt.extension.beacon.services.StartupBroadcastReceiver" android:exported="false" >
			<intent-filter>
				<action android:name="android.intent.action.BOOT_COMPLETED"/>
				<action android:name="android.intent.action.ACTION_POWER_CONNECTED"/>
				<action android:name="android.intent.action.ACTION_POWER_DISCONNECTED"/>
			</intent-filter>
		</receiver>

		<service android:name="com.distriqt.extension.beacon.services.BeaconService" android:enabled="true" android:exported="false" android:isolatedProcess="false" android:label="beacon" />
		<service android:name="com.distriqt.extension.beacon.services.BeaconIntentProcessor" android:enabled="true" android:exported="false" />

	</application>

</manifest>
```

### iOS

#### InfoAdditions

The following additions are required to support the authorisation process introduced in iOS 8.
You can customise the usage description messages as you see fit to suit your application. 

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
