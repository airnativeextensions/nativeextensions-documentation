---
title: Parameters-Flash
sidebar_label: Parameters-Flash
---

## Flash 

Here we describe how to control the flash attached to the camera device. You will 
be able to check whether a flash is available, and control the modes the flash 
will use when capturing.


### Availability

There are two availability checks associated with the flash, 

- `isFlashSupported`
- `isTorchSupported`

These two are provided as some devices will contain a flash but not support the torch 
mode, and some devices may not contain a flash at all.

>
> Torch mode is a mode where the flash is turned on permanently.
>


### Changing Modes

You can control the mode the flash will use when capturing photos by calling the 
`setFlashMode` function on a device.

The available flash modes are defined in the `CameraParameters` class:

- `CameraParameters.FLASH_MODE_OFF`
- `CameraParameters.FLASH_MODE_AUTO`
- `CameraParameters.FLASH_MODE_ON`
- `CameraParameters.FLASH_MODE_RED_EYE`
- `CameraParameters.FLASH_MODE_TORCH`

For example to turn the flash on permanently:

```actionscript
if (device.isTorchSupported())
{
	device.setFlashMode( CameraParameters.FLASH_MODE_TORCH );
}
```

