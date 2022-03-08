---
title: Add the Extension
sidebar_label: Add the Extension
---

Here we will show you how to add the extension to your development environment and make the necessary changes to your application descriptor to correctly support the extension.

The dependencies and manifest additions are specific to the service you are utilising so we have separated the guides here based on the services:

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

