---
title: Add the Extension
sidebar_label: Add the Extension
---

## Add the Extension

First step is always to add the extension to your development environment. 
To do this use the tutorial located [here](/docs/tutorials/getting-started).


This extension requires to be packaged against iOS SDK v13 or higher.

You will need to ensure the version of the iOS SDK contains this or provide the iOS SDK in the platform sdk option at package time.

More information [here](https://airnativeextensions.github.io/tutorials/iOS-SDK).





## Dependencies

Many of our extensions use some common libraries, for example, the Android Support libraries.

We have to separate these libraries into separate extensions in order to avoid multiple versions of the libraries being included in your application and causing packaging conflicts. This means that you need to include some additional extensions in your application along with the main extension file.

You will add these extensions as you do with any other extension, and you need to ensure it is packaged with your application.


### Core 

The Core extension is required by this extension. You must include this extension in your application.

The Core extension doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).




## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.AppleSignIn</extensionID>
	<extensionID>com.distriqt.Core</extensionID>
</extensions>
```



## iOS 


### Info Additions 

You will need to add the `com.apple.developer.applesignin` entitlement key to the `iPhone` / `Entitlements` node:

```xml
<key>com.apple.developer.applesignin</key>
<array>
    <string>Default</string>
</array>
```


eg:

```xml
<iPhone>
    <InfoAdditions><![CDATA[
        <key>UIDeviceFamily</key>
        <array>
            <string>1</string>
            <string>2</string>
        </array>
    ]]></InfoAdditions>
    <requestedDisplayResolution>high</requestedDisplayResolution>
    <Entitlements>
        <![CDATA[
            <key>com.apple.developer.applesignin</key>
            <array>
                <string>Default</string>
            </array>
        ]]>
    </Entitlements>
</iPhone>
```


## Android 

Nothing specific is required for the manifest additions here. You will need to ensure you have added the internet permission `android.permission.INTERNET`. 





## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
if (AppleSignIn.isSupported)
{
	// Functionality here
}
```

