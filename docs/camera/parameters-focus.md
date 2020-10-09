---
title: Parameters-Focus
sidebar_label: Parameters-Focus
---

## Focus

The focus modes can be controlled using this extension.

The available focus modes are defined in the `CameraParameters` class:

- `CameraParameters.FOCUS_MODE_LOCKED`: The focal length is fixed
- `CameraParameters.FOCUS_MODE_AUTO`: The camera does a single scan focus then reverts to locked
- `CameraParameters.FOCUS_MODE_CONTINUOUS`: The camera continuously auto-focuses as needed


### Availability

Focus modes aren't available on all devices so it's important that you check whether
the device supports the mode before attempting to set it.

```actionscript
if (device.isFocusSupported( CameraParameters.FOCUS_MODE_CONTINUOUS ))
{
	// Continuous focus mode is supported
}
```


### Changing Modes

To set the focus simply call `setFocusMode` with the required mode

```actionscript
if (device.isFocusSupported( CameraParameters.FOCUS_MODE_CONTINUOUS ))
{
	device.setFocusMode( CameraParameters.FOCUS_MODE_CONTINUOUS );
}
```


### Point of Interest

You can control the point of interest for the camera to focus on.

This property represents a point where {0,0} corresponds to the top 
left of the picture area, and {1,1} corresponds to the bottom right 
in landscape mode with the home button on the right—this applies 
even if the device is in portrait mode.

To set this point call the `setFocusPointOfInterest()` function with the point 
of interest required. For example to set the middle of the capture area:

```actionscript
device.setFocusPointOfInterest( new Point( 0.5, 0.5 ) );
```

