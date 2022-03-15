---
title: Add the Extension
sidebar_label: Add the Extension
---

Here we will show you how to add the extension to your development environment and make the necessary changes to your application descriptor to correctly support the extension.

The extension supports different services and most likely you will not want to use them all in your applications. As such we have produced different "variants" of the extension which include support for different services while providing exactly the same Actionscript API. 

However while the API is identical there are varying dependencies and application descriptor additions required. As such we have broken the guide for adding the extension into the various services, each showing the variant(s) that support the service and the required additions to your application. 

Services:

- [APNS](apple/add-the-extension.mdx)
- [FCM](firebase/add-the-extension.mdx)
- [OneSignal](onesignal/add-the-extension.mdx)
- [Windows](windows/add-the-extension.mdx)


:::info AIR SDK
This ANE currently requires at least AIR 33+. This is required in order to support versions of Android > 9.0 (API 28). We always recommend using the most recent build with AIR especially for mobile development where the OS changes rapidly.
:::






## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
Core.init();
if (PushNotifications.isSupported)
{
	// Functionality here
}
```

