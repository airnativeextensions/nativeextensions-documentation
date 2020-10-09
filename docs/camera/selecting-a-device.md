---
title: Selecting a Device
sidebar_label: Selecting a Device
---

## List Available Devices

When you need to interact with the camera on a device you will need to select the particular device you wish to use.
Most devices have several cameras, generally a lower spec front camera and high spec back camera.

To get a list of the available devices you can use the `getAvailableDevices` function:

```actionscript
var devices:Array = Camera.instance.getAvailableDevices();
for each (var deviceInfo:CameraDeviceInfo in devices)
{
	if (deviceInfo.position == CameraDeviceInfo.POSITION_BACK)
	{
		// This is the back camera
	}
}
```

This function returns an array of `CameraDeviceInfo` objects each describing a camera device.

The `CameraDeviceInfo` class not only contains the position of the camera, (front, back etc) but
the available modes of the camera, for both previewing and capturing images, and information 
about additional hardware, such as a flash.



