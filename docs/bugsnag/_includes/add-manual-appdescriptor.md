## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.BugSnag</extensionID>
	<extensionID>com.distriqt.Core</extensionID>
	<extensionID>androidx.core</extensionID>
	<extensionID>com.jetbrains.kotlin</extensionID>
</extensions>
```

## iOS

### Info Additions

The following additions are for the `InfoAdditions` node of the iPhone section in your application descriptor.

:::caution
Ensure you replace:

- `YOUR_IOS_BUGSNAG_API_KEY` with your Bugsnag iOS API key for this application;
:::

```xml
<iPhone>
	<InfoAdditions><![CDATA[

		<key>bugsnag</key>
		<dict>
			<key>apiKey</key>
			<string>YOUR_IOS_BUGSNAG_API_KEY</string>
		</dict>

	]]></InfoAdditions>
</iPhone>
```

## Android

### Manifest Additions

The BugSnag extension requires a few additions to the manifest to be able to start certain activities. You should add the listing below to your manifest.

:::caution
Ensure you replace:

- `YOUR_ANDROID_BUGSNAG_API_KEY` with your Bugsnag Android API key for this application;

- `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`. Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.
  :::

```xml
<manifest android:installLocation="auto">

	<uses-sdk android:minSdkVersion="21" android:targetSdkVersion="33"/>
	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
	<application>
		
		<meta-data android:name="com.bugsnag.android.API_KEY" android:value="YOUR_ANDROID_BUGSNAG_API_KEY"/>

		<provider android:name="com.bugsnag.android.internal.BugsnagContentProvider" android:authorities="APPLICATION_PACKAGE.bugsnag-startup" android:exported="false" android:initOrder="9000"/>
	</application>

</manifest>
```
