
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.CloudStorage</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
</extensions>
```



### iOS 

Here we will detail the additions to the application descriptor iPhone node, for the Info Additions and Entitlements.
The following additions should be placed in the "Entitlements" node as specified. That is :

```xml
<iPhone>
	<Entitlements>
	<![CDATA[

		HERE

	]]>
	</Entitlements>
</iPhone>
```


#### Key-Value Store 

To support iCloud storage of key-value information for your app, you will need to add the entitlements for your application to use the key-value store.

As the value for this entitlement key, provide the bundle identifier for your app, such as:

```
BUNDLE_SEED_ID.APPLICATION_ID
```

For example, the distriqt test application with application id `com.distriqt.test` uses the following:

```xml
<key>com.apple.developer.ubiquity-kvstore-identifier</key>
<string>X5LW23Q6CJ.com.distriqt.test</string>
```



### tvOS 

Apple TV OS setup is the same as the iOS setup with one exception, you cannot add the document storage section. Document storage is not support on tvOS so if you include the `com.apple.developer.ubiquity-container-identifiers` key in your entitlements the build will fail.

We suggest creating 2 separate application descriptors, one for iOS (+ other mobile platforms) and one for tvOS.

The tvOS descriptor must have the tvOS device type added to the iPhone node info additions, UIDeviceFamily. 

```xml
<iPhone>
	<InfoAdditions><![CDATA[
		<key>UIDeviceFamily</key>
		<array>
			<string>3</string>
		</array>
		<key>UILaunchImages</key>
		<array>
			<dict>
				<key>UILaunchImageSize</key>
				<string>{1920, 1080}</string>
				<key>UILaunchImageName</key>
				<string>LaunchImage</string>
				<key>UILaunchImageMinimumOSVersion</key>
				<string>9.0</string>
				<key>UILaunchImageOrientation</key>
				<string>Landscape</string>
			</dict>
		</array>
		<key>TVTopShelfImage</key>
		<dict>
			<key>TVTopShelfPrimaryImage</key>
			<string>Top Shelf Image</string>
			<key>TVTopShelfPrimaryImageWide</key>
			<string>Top Shelf Image Wide</string>
		</dict>
		<key>CFBundleIcons</key>
		<dict>
			<key>CFBundlePrimaryIcon</key>
			<string>App Icon</string>
		</dict>
	]]></InfoAdditions>
	...
```

