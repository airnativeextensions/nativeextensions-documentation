
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.BluetoothLE</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>androidx.core</extensionID>
</extensions>
```



### Android

#### Manifest Additions

You should add the following manifest additions.

**Make sure you only have one `<application>` node in your manifest additions combining them if you have multiple.**

The following shows the complete manifest additions node. You must replace `YOUR_APPLICATION_PACKAGE` with your
AIR application's Java package name, something like `air.com.distriqt.test`.
Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.

```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>

	<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
	<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

	<!-- optional if your application REQUIRES the camera -->
	<uses-feature android:name="android.hardware.camera" android:required="true" />

	<application android:hardwareAccelerated="true">

		<provider
			android:name="com.distriqt.extension.cameraui.content.FileProvider"
			android:authorities="YOUR_APPLICATION_PACKAGE.camerauifileprovider"
			android:grantUriPermissions="true"
			android:exported="false">
			<meta-data
				android:name="android.support.FILE_PROVIDER_PATHS"
				android:resource="@xml/distriqt_cameraui_paths" />
		</provider>

		<activity 	android:name="com.distriqt.extension.cameraui.permissions.AuthorisationActivity"
					android:theme="@android:style/Theme.Translucent.NoTitleBar"
					android:exported="false" />

	</application>
</manifest>
```


### iOS

#### InfoAdditions

The following additions are for the `InfoAdditions` node of the iPhone section in your application descriptor:

```xml
<iPhone>
	<InfoAdditions><![CDATA[

		HERE

	]]></InfoAdditions>
</iPhone>
```

If you are using **iOS 10** you now need to add some strings to display messages to the user
when certain permissions are requested.

The most important string is the camera usage description which will get displayed during
the request authorisation process (later). The key that controls the text in this dialog is:

```xml
<key>NSCameraUsageDescription</key>
<string>Require camera usage description</string>
```

To be able to record audio along with your video you will need to add the microphone
usage description:

```xml
<key>NSMicrophoneUsageDescription</key>
<string>Require record audio description</string>
```

If you are saving images to the camera roll a dialog will be displayed the first time you attempt to save a captured image to the camera roll. There are 2 keys required here that control the text in this dialog:

```xml
<key>NSPhotoLibraryUsageDescription</key>
<string>Access to photo library is required to save images.</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Access to photo library is required to save images.</string>
```

The second key was added in iOS 11.2. You should add both keys to your info additions.

For more information see [requesting authorisation](../requesting-authorisation.md#usage-description).