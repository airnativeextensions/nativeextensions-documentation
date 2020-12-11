---
title: Add the Extension
sidebar_label: Add the Extension
---


First step is always to add the extension to your development environment. To do this use the tutorial located [here](/docs/tutorials/getting-started).



The dependencies and manifest additions are specific to the platform you are utilising so we have separated the guides here based on the platforms:

- [AdMob](platform/admob)
- [Huawei](platform/huawei)



## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
if (Adverts.isSupported)
{
	// Functionality here
}
```



## MultiDex Applications

If you have a large application and are supporting Android 4.x then you will need to ensure you enable your application to correctly support MultiDex to allow the application to be broken up into smaller dex packages.

This is enabled by default with releases of AIR v25+, except in the Android 4.x case where you need to change the manifest additions for the application tag to match the following and use the `MultiDexApplication`.

### Using AndroidX#

This will require the addition of the `androidx.multidex` extension which contains the `androidx.multidex.MultiDexApplication` implementation.

```xml
<manifest android:installLocation="auto">
    <!-- PERMISSIONS -->

    <application android:name="androidx.multidex.MultiDexApplication">

        <!-- ACTIVITIES / RECEIVERS / SERVICES -->

    </application>
</manifest>
```
