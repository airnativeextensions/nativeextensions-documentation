---
title: Parameters-Exposure
sidebar_label: Parameters-Exposure
---

## Exposure

The exposure modes can be controlled using this extension.

The available exposure modes are defined in the `CameraParameters` class:

- `CameraParameters.EXPOSURE_MODE_LOCKED`: The exposure level is fixed at its current level
- `CameraParameters.EXPOSURE_MODE_AUTO`: The device automatically adjusts the exposure once and then changes the exposure mode to locked
- `CameraParameters.EXPOSURE_MODE_CONTINUOUS`: The device automatically adjusts the exposure level as needed


### Availability

Exposure modes aren't available on all devices so it's important that you check whether
the device supports the mode before attempting to set it.

```actionscript
if (device.isExposureSupported( CameraParameters.EXPOSURE_MODE_CONTINUOUS ))
{
	// Continuous exposure mode is supported
}
```


### Changing Modes

To set the exposure mode simply call `setExposureMode` with the required mode

```actionscript
if (device.isFocusSupported( CameraParameters.EXPOSURE_MODE_CONTINUOUS ))
{
	device.setExposureMode( CameraParameters.EXPOSURE_MODE_CONTINUOUS );
}
```


### Point of Interest

You can control the point of interest for the camera to calculate exposure on.

This property represents a point where {0,0} corresponds to the top 
left of the picture area, and {1,1} corresponds to the bottom right 
in landscape mode with the home button on the right—this applies 
even if the device is in portrait mode.

To set this point call the `setExposurePointOfInterest()` function with the point 
of interest required. For example to set the middle of the capture area:

```actionscript
device.setExposurePointOfInterest( new Point( 0.5, 0.5 ) );
```

