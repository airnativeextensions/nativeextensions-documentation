
## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Display</extensionID>
	<extensionID>com.distriqt.Core</extensionID>
	<extensionID>androidx.core</extensionID>
	<extensionID>com.jetbrains.kotlin</extensionID>
</extensions>
```



## iOS 


### Info Additions 


The following additions are for the `InfoAdditions` node of the iPhone section in your application descriptor:

```xml
<key>MinimumOSVersion</key>
<string>13.0</string>

<key>UIViewControllerBasedStatusBarAppearance</key>
<false/>
```


For example:

```xml
<iPhone>
	<InfoAdditions><![CDATA[

		<key>UIDeviceFamily</key>
		<array>
			<string>1</string>
			<string>2</string>
		</array>

		<key>MinimumOSVersion</key>
		<string>13.0</string>

		<key>UIViewControllerBasedStatusBarAppearance</key>
		<false/>

	]]></InfoAdditions>
</iPhone>
```



## Android 

### Manifest Additions

The Display extension requires a few additions to the manifest to be able to start certain activities. You should add the listing below to your manifest.

:::caution
Ensure you replace:
-  `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`. Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.
:::


```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	
	<application android:hardwareAccelerated="true">
		
		
	</application>
</manifest>
```




