
## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.AppConfig</extensionID>
	<extensionID>com.distriqt.Core</extensionID>
</extensions>
```



## iOS 


### Info Additions 


The following additions are for the `InfoAdditions` node of the iPhone section in your application descriptor:

```xml
<iPhone>
	<InfoAdditions><![CDATA[

		<key>MinimumOSVersion</key>
		<string>11.0</string>

	]]></InfoAdditions>
	<Entitlements><![CDATA[

		<!-- depending on your requirements you may need to add this one -->
		<!--
		<key>com.apple.developer.associated-domains.mdm-managed</key>
		<true/>
		-->

	]]></Entitlements>

</iPhone>
```



## Android 

### Manifest Additions

The AppConfig extension requires a few additions to the manifest to be able to start certain activities. You should add the listing below to your manifest.

:::caution
Ensure you replace:
-  `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`. Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.
:::


```xml
<manifest android:installLocation="auto">
	<uses-sdk android:minSdkVersion="21" android:targetSdkVersion="33"/>

	<uses-permission android:name="android.permission.INTERNET"/>
	
	<application android:hardwareAccelerated="true">
		
		<meta-data android:name="android.content.APP_RESTRICTIONS" android:resource="@xml/app_restrictions"/>

	</application>
</manifest>
```


You will need to define some custom resources referenced above and ensure they are packaged with your applicaiton. See the [setup documentation](../setup.mdx) for information.


