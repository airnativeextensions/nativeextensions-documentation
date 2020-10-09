---
title: Parameters-White Balance
sidebar_label: Parameters-White Balance
---

## White Balance 

The white balance modes can be controlled using this extension.

The available white balance modes are defined in the `CameraParameters` class:

- `CameraParameters.WHITE_BALANCE_MODE_LOCKED`: The white balance setting is locked
- `CameraParameters.WHITE_BALANCE_MODE_AUTO`: The device performs an auto white balance operation now
- `CameraParameters.WHITE_BALANCE_MODE_CONTINUOUS`: The device continuously monitors white balance and adjusts when necessary


### Availability

White balance modes aren't available on all devices so it's important that you check whether
the device supports the mode before attempting to set it.

```actionscript
if (device.isWhiteBalanceSupported( CameraParameters.WHITE_BALANCE_MODE_CONTINUOUS ))
{
	// Continuous exposure mode is supported
}
```


### Changing Modes

To set the white balance mode simply call `setWhiteBalanceMode` with the required mode

```actionscript
if (device.isWhiteBalanceSupported( CameraParameters.WHITE_BALANCE_MODE_CONTINUOUS ))
{
	device.setWhiteBalanceMode( CameraParameters.WHITE_BALANCE_MODE_CONTINUOUS );
}
```
