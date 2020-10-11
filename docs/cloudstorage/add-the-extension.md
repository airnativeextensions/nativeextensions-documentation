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

The Core ANE doesn't provide any functionality in itself but supports some of our other extensions. 
It's a centralised location for some common actions that can cause issues if they are implemented 
in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).



## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.CloudStorage</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
</extensions>
```



## iOS 

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


### Key-Value Store 

To support iCloud storage of key-value information for your app, you will need to add the 
entitlements for your application to use the key-value store.

As the value for this entitlement key, provide the bundle identifier for your app, such as:

```
(TeamIdentifierPrefix)com.mycompany.myapplication
```

For example, the distriqt test application uses the following:

```xml
<key>com.apple.developer.ubiquity-kvstore-identifier</key>
<string>X5LW23Q6CJ.com.distriqt.test</string>
```



### Document Storage

Similarly to enable support for document storage you will need to add a list of the 
container ids that you have created and plan to use in your application.

>
> Note: Document storage is not supported on Apple tvOS. If you are supporting this 
> platform you should not add this to your application descriptor. If you are supporting 
> both platforms you will need to create separate application descriptors for each and 
> only add the following to the iOS application build.
>

These container identifiers must match exactly the ones you created in the developer
member center.

For example, the distriqt test application uses a container with an identifier: `iCloud.com.distriqt.test.testcontainer`

```xml
<key>com.apple.developer.ubiquity-container-identifiers</key>
<array>
	<string>iCloud.com.distriqt.test.testcontainer</string>
</array>
```



## tvOS 

Apple TV OS setup is the same as the iOS setup with one exception, you cannot add the document storage section. Document storage is not support on tvOS so if you include the 
`com.apple.developer.ubiquity-container-identifiers` key in your entitlements the build will fail.

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






# Unity 

In unity you import the package by selecting `Assets / Import Package / Custom Package ...` and then browsing to the unity plugin package file: `com.distriqt.CloudStorage.unitypackage`.

![](images/unity-import-package.png)

This will present the import dialog and display all the files for the plugin, make sure all the files are selected.

The plugin will be added to your project and you can now use the plugins functionality in your application.



## iOS / tvOS 

The `Capabilities` editor script should automatically enable iCloud key-value store for your Xcode project, which should add the appropriate value for the `com.apple.developer.ubiquity-kvstore-identifier` key in your entitlements.

We suggest you ensure the value is correct and that cloud kit has been enabled in the capabilities section of your project.








# Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.

AIR: 

```actionscript
if (CloudStorage.isSupported)
{
	// Functionality here
}
```


Unity: 

```csharp
if (CloudStorage.isSupported)
{
	// Functionality here
}
```


