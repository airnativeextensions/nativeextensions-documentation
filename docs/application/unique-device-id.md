---
title: Unique Device ID
sidebar_label: Unique Device ID
---

## Retrieving a Unique Device ID

Retrieving a Unique Device ID is as simple as calling the `uniqueId()` function:

```actionscript
Application.init( APPLICATION_KEY );
if (Application.isSupported)
{
	var uniqueId:String = Application.service.device.uniqueId();
}
```


#### Android

On Android the ID is randomly generated when the user first sets up the device and should remain constant for the lifetime of the user's device, 
The value may change if a factory reset is performed on the device. It will be the same for all application independent of the developer.


#### iOS

On iOS the value of this property is the same for apps that come from the same vendor running on the same device. A different value is returned for apps on the same device that come from different vendors, and for apps on different devices regardless of vendor.

The value in this property remains the same while the app (or another app from the same vendor) is installed on the iOS device. The value changes when the user deletes all of that vendor’s apps from the device and subsequently reinstalls one or more of them. 

If you wish the value to persist beyond installations you should set the `persistent` parameter to be `true`. This will store the first generated value of the id in the user's keychain which will persist if the application is uninstalled. 

