---
title: Initialise the Extension
sidebar_label: Initialise the Extension
---


## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
if (Flurry.isSupported)
{
	// Functionality here
}
```



## Initialising the Extension

To use the analytics service you must pass in your Flurry keys that you created through the Flurry website. 

```actionscript
Flurry.service.analytics.initialise( "FLURRY_KEY" );
```


If you are cross compiling both iOS and Android you can use the `initialiseWithKeys` function to initialise both platforms.


```actionscript
Flurry.service.analytics.initialiseWithKeys( "IOS_FLURRY_KEY", "ANDROID_FLURRY_KEY" );
```


