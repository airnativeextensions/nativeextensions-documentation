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

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).


### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries. 

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [androidx.core.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>


## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.PDFReader</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>androidx.core</extensionID>
</extensions>
```





## Android 

### Manifest Additions

The PDF Reader ANE requires a few additions to the manifest to be able to start certain 
activities and provide the PDF files. You should add the listing below to your manifest. 
You will need to replace the any occurences of `APPLICATION_PACKAGE` with your applications 
package name (generally your application id prefixed with `air.` eg: `air.com.distriqt.test`).

```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
    
	<application>
		<activity android:name="com.distriqt.extension.pdfreader.pdfview.activities.OpenPDFActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" />
		
		<provider
			android:name="com.distriqt.extension.pdfreader.content.FileProvider"
			android:authorities="APPLICATION_PACKAGE.pdfreaderfileprovider"
			android:grantUriPermissions="true"
			android:exported="false">
			<meta-data
				android:name="android.support.FILE_PROVIDER_PATHS"
				android:resource="@xml/distriqt_paths" />
		</provider>
			
	</application>
</manifest>
```


## iOS

### Info Additions

If you are going to be downloading PDFs from your server you need to make sure your 
access will satisfy the Apple App Transport security (i.e. access content via https) 
or else you will need to override the setting in the info additions.

The following shows how to override all loads, however it is suggested you only 
override the particular servers you will use, so take care when using this setting.

```xml
<key>UIDeviceFamily</key>
<array>
	<string>1</string>
	<string>2</string>
</array>
<key>NSAppTransportSecurity</key>
<dict>
	<key>NSAllowsArbitraryLoads</key>
	<true/>
</dict>
```




## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
if (PDFReader.isSupported)
{
	// Functionality here
}
```

