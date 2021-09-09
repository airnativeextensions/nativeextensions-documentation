---
title: Add the Extension
sidebar_label: AIR
---

First step is always to add the extension to your development environment.
To do this use the tutorial located [here](/docs/tutorials/getting-started).

## Dependencies

### Core ANE

The Core ANE is required by this ANE. You must include and package this extension in your application.

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).

### Google Play Services

This ANE requires usage of certain aspects of the Google Play Services client library.
The client library is available as a series of ANEs that you add into your applications packaging options.
Each separate ANE provides a component from the Play Services client library and are used by different ANEs.
These client libraries aren't packaged with this ANE as they are used by multiple ANEs and separating them
will avoid conflicts, allowing you to use multiple ANEs in the one application.

This ANE requires the following Google Play Services:

- [`com.google.android.play`](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.google.android.play.ane)

You must include the above native extensions in your application along with this extension,
and you need to ensure they are packaged with your application.

You can access the Google Play Services client library extensions here: [https://github.com/distriqt/ANE-GooglePlayServices](https://github.com/distriqt/ANE-GooglePlayServices).

> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices.
> There are no issues packaging these extensions with all platforms as there are default implementations available which will allow your code to package without errors however if you are only building an iOS/macOS application feel free to remove the Google Play Services and Android Support ANEs from your application.

## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.ApplicationRater</extensionID>
	<extensionID>com.distriqt.Core</extensionID>
	<extensionID>com.google.android.play</extensionID>
</extensions>
```

## Android Manifest Additions

The Application Rater ANE requires a few additions to the manifest.
You should add the listing below to your application descriptor.

```xml
<manifestAdditions><![CDATA[
	<manifest android:installLocation="auto">
		<uses-permission android:name="android.permission.INTERNET"/>
		<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />

		<application>

			<!-- com.google.android.play -->
			<activity
				android:name="com.google.android.play.core.missingsplits.PlayCoreMissingSplitsActivity"
				android:enabled="false"
				android:exported="false"
				android:launchMode="singleInstance"
				android:process=":playcore_missing_splits_activity"
				android:stateNotNeeded="true" />
			<activity
				android:name="com.google.android.play.core.common.PlayCoreDialogWrapperActivity"
				android:exported="false"
				android:stateNotNeeded="true"
				android:theme="@style/Theme.PlayCore.Transparent" />

			<service
				android:name="com.google.android.play.core.assetpacks.AssetPackExtractionService"
				android:enabled="false"
				android:exported="true" >
				<meta-data
					android:name="com.google.android.play.core.assetpacks.versionCode"
					android:value="11001" />
			</service>
			<service
				android:name="com.google.android.play.core.assetpacks.ExtractionForegroundService"
				android:enabled="false"
				android:exported="false" />

		</application>
	</manifest>
]]></manifestAdditions>
```

## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.

```actionscript
if (ApplicationRater.isSupported)
{
	// Functionality here
}
```
