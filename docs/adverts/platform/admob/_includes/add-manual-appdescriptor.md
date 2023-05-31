
## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.Adverts</extensionID>
	<extensionID>com.distriqt.Core</extensionID>

	<extensionID>com.distriqt.playservices.Base</extensionID>
	<extensionID>com.distriqt.playservices.Ads</extensionID>
	<extensionID>com.distriqt.playservices.AppSet</extensionID>

	<extensionID>androidx.appcompat</extensionID>
	<extensionID>androidx.browser</extensionID>
	<extensionID>androidx.core</extensionID>
	<extensionID>androidx.constraintlayout</extensionID>
	<extensionID>androidx.vectordrawable</extensionID>
	<extensionID>androidx.room</extensionID>
	<extensionID>androidx.work</extensionID>
	<extensionID>com.google.code.gson</extensionID>
	<extensionID>com.jetbrains.kotlin</extensionID>
</extensions>
```

## Android

### Manifest Additions

The Adverts extension requires a few additions to the manifest to be able to start certain activities. You should add the listing below to your manifest.

:::caution
Ensure you replace:
-  `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`. Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.
- Make sure you add the `com.google.android.gms.ads.APPLICATION_ID` `meta-data` tag with a string value of your AdMob app ID into the application node. You can [find your App ID](https://support.google.com/admob/answer/7356431) in the AdMob UI. i.e. replace `ca-app-pub-AAAAAAAAAAAAAAAA~XXXXXXXXXX` in the additions below.
:::


Also we suggest you enable hardware acceleration so videos are displayed correctly (i.e. the `android:hardwareAccelerated="true"` attribute on your android `application` tag).

```xml
<manifest android:installLocation="auto">

	<uses-sdk android:minSdkVersion="19" android:targetSdkVersion="31"/>

	<!-- Include required permissions for Google Mobile Ads to run -->
	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
 	<uses-permission android:name="com.google.android.gms.permission.AD_ID" /> 
	
	<!-- Android package visibility setting -->
	<queries>
		<!-- For browser content -->
		<intent>
			<action android:name="android.intent.action.VIEW" />
			<category android:name="android.intent.category.BROWSABLE" />
			<data android:scheme="https" />
		</intent>
		<!-- End of browser content -->
		<!-- For CustomTabsService -->
		<intent>
			<action android:name="android.support.customtabs.action.CustomTabsService" />
		</intent>
		<!-- End of CustomTabsService -->
	</queries>
	<uses-permission android:name="android.permission.WAKE_LOCK"/>
	<uses-permission android:name="com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE"/>

	<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
	<uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>

	<application android:hardwareAccelerated="true" android:appComponentFactory="androidx.core.app.CoreComponentFactory">

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

		<activity
			android:name="com.google.android.gms.common.api.GoogleApiActivity"
			android:exported="false"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />

		<meta-data
			android:name="com.google.android.gms.version"
			android:value="@integer/google_play_services_version" />

		<provider
			android:name="androidx.startup.InitializationProvider"
			android:authorities="APPLICATION_PACKAGE.androidx-startup"
			android:exported="false" >
			<meta-data
				android:name="androidx.work.WorkManagerInitializer"
				android:value="androidx.startup" />
		</provider>

		<service
			android:name="androidx.work.impl.background.systemalarm.SystemAlarmService"
			android:directBootAware="false"
			android:enabled="@bool/enable_system_alarm_service_default"
			android:exported="false" />
		<service
			android:name="androidx.work.impl.background.systemjob.SystemJobService"
			android:directBootAware="false"
			android:enabled="@bool/enable_system_job_service_default"
			android:exported="true"
			android:permission="android.permission.BIND_JOB_SERVICE" />
		<service
			android:name="androidx.work.impl.foreground.SystemForegroundService"
			android:directBootAware="false"
			android:enabled="@bool/enable_system_foreground_service_default"
			android:exported="false" />

		<receiver
			android:name="androidx.work.impl.utils.ForceStopRunnable$BroadcastReceiver"
			android:directBootAware="false"
			android:enabled="true"
			android:exported="false" />
		<receiver
			android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$BatteryChargingProxy"
			android:directBootAware="false"
			android:enabled="false"
			android:exported="false" >
			<intent-filter>
				<action android:name="android.intent.action.ACTION_POWER_CONNECTED" />
				<action android:name="android.intent.action.ACTION_POWER_DISCONNECTED" />
			</intent-filter>
		</receiver>
		<receiver
			android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$BatteryNotLowProxy"
			android:directBootAware="false"
			android:enabled="false"
			android:exported="false" >
			<intent-filter>
				<action android:name="android.intent.action.BATTERY_OKAY" />
				<action android:name="android.intent.action.BATTERY_LOW" />
			</intent-filter>
		</receiver>
		<receiver
			android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$StorageNotLowProxy"
			android:directBootAware="false"
			android:enabled="false"
			android:exported="false" >
			<intent-filter>
				<action android:name="android.intent.action.DEVICE_STORAGE_LOW" />
				<action android:name="android.intent.action.DEVICE_STORAGE_OK" />
			</intent-filter>
		</receiver>
		<receiver
			android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$NetworkStateProxy"
			android:directBootAware="false"
			android:enabled="false"
			android:exported="false" >
			<intent-filter>
				<action android:name="android.net.conn.CONNECTIVITY_CHANGE" />
			</intent-filter>
		</receiver>
		<receiver
			android:name="androidx.work.impl.background.systemalarm.RescheduleReceiver"
			android:directBootAware="false"
			android:enabled="false"
			android:exported="false" >
			<intent-filter>
				<action android:name="android.intent.action.BOOT_COMPLETED" />
				<action android:name="android.intent.action.TIME_SET" />
				<action android:name="android.intent.action.TIMEZONE_CHANGED" />
			</intent-filter>
		</receiver>
		<receiver
			android:name="androidx.work.impl.background.systemalarm.ConstraintProxyUpdateReceiver"
			android:directBootAware="false"
			android:enabled="@bool/enable_system_alarm_service_default"
			android:exported="false" >
			<intent-filter>
				<action android:name="androidx.work.impl.background.systemalarm.UpdateProxies" />
			</intent-filter>
		</receiver>
		<receiver
			android:name="androidx.work.impl.diagnostics.DiagnosticsReceiver"
			android:directBootAware="false"
			android:enabled="true"
			android:exported="true"
			android:permission="android.permission.DUMP" >
			<intent-filter>
				<action android:name="androidx.work.diagnostics.REQUEST_DIAGNOSTICS" />
			</intent-filter>
		</receiver>

		<service
			android:name="androidx.room.MultiInstanceInvalidationService"
			android:directBootAware="true"
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

For iOS 14 you need to add the `NSUserTrackingUsageDescription` string to specify the message shown to users when requesting app tracking through the new App Tracking Transparency framework. The string specified here will be shown to users when the permission request is presented.

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


#### MultiDex Applications 

:::warning
This is enabled by default with the latest AIR builds (33.1.1.x and higher). You should no longer add the `android.multidex` extension. 

This information is for legacy developers only!
:::

If you have a large application and are supporting Android 4.x then you will need to ensure you enable your application to correctly support MultiDex to allow the application to be broken up into smaller dex packages.

This is enabled by default with releases of AIR v25+, except in the Android 4.x case where you need to change the manifest additions for the application tag to match the following and use the `MultiDexApplication`.


This will require the addition of the `androidx.multidex` extension which contains the `androidx.multidex.MultiDexApplication` implementation.

```xml
<manifest android:installLocation="auto">
	<!-- PERMISSIONS -->

	<application android:name="androidx.multidex.MultiDexApplication">

		<!-- ACTIVITIES / RECEIVERS / SERVICES -->

	</application>
</manifest>
```


