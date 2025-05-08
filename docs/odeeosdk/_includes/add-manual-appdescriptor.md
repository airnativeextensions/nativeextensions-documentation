
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>io.odeeo.OdeeoSDK</extensionID>

	<extensionID>com.distriqt.Core</extensionID>
	<extensionID>com.distriqt.playservices.AdsIdentifier</extensionID>
	<extensionID>androidx.core</extensionID>
	<extensionID>androidx.concurrent</extensionID>
	<extensionID>com.google.code.gson</extensionID>
	<extensionID>com.google.guava</extensionID>
	<extensionID>com.distriqt.square.retrofit2</extensionID>
	<extensionID>com.jetbrains.kotlin</extensionID>
</extensions>
```



### iOS 

If there is an `assets` directory alongside the extension in the repository that contains required assets for the installed extensions.
You must add the files in the `assets/ios` folder to the root of your iOS application package. 


#### Info Additions 


The following additions are for the `InfoAdditions` node of the iPhone section in your application descriptor:

```xml
<iPhone>
	<InfoAdditions><![CDATA[

		<key>MinimumOSVersion</key>
		<string>12.0</string>

	]]></InfoAdditions>
</iPhone>
```



### Android 

If there is an `assets` directory alongside the extension in the repository that contains required assets for the installed extensions.
You must add the files in the `assets/android` folder to the root of your Android application package. 

#### Manifest Additions

The OdeeoSDK extension requires a few additions to the manifest to be able to start certain activities. You should add the listing below to your manifest.

:::caution
Ensure you replace:
-  `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`. Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.
:::


```xml
<manifest android:installLocation="auto" >
	<uses-sdk android:minSdkVersion="21" android:targetSdkVersion="34" />
	<uses-permission android:name="android.permission.INTERNET"/>
	
	<application android:hardwareAccelerated="true">
	</application>

</manifest>
```


#### Android Gradle Version 

We have updated the required gradle version used to build your application to be higher than the default AIR currently uses (May 2025). 

To specify a higher version add the following to your android node in your application descriptor:

```xml
<android>
    <gradleVersion>8.9</gradleVersion>
    <androidGradlePluginVersion>8.7.3</androidGradlePluginVersion>

  ...
</android>
```

If you don't do this you will see the following error when building your application:

```
Unexpected failure: Unable to run java: com.adobe.air.ADTException: gradle tool failed: 
FAILURE: Build failed with an exception.

...

   > BUG! exception in phase 'semantic analysis' in source unit '_BuildScript_' Unsupported class file major version 65
```
