---
title: Camera Modes
sidebar_label: Camera Modes
---


The `CameraDevice` supports two `CameraMode`s, one for preview frames and another for image capture.

The extension will automatically switch between the two for preview and capture images so you no 
longer have to manually change the mode before starting an image capture (which was required by 
previous versions of the ANE).

Both these modes can be controlled separately. 

Generally you should not attempt to create your own `CameraMode` instance. Instead use one of the 
values returned either from the `CameraDevice.getCameraModes` / `CameraDevice.getPreviewModes` or 
the modes returned in the `CameraDeviceInfo` instance when querying the available devices.

This ensures that the mode you are using will be of a supported format for the device.


## Preview Mode

The preview mode represents the mode that preview video frames are returned to your application.


### Availability 

You can retrieve the available preview modes for a camera device by calling the `getPreviewModes` 
function. This returns an `Array` of `CameraMode` instances each representing a mode that is 
supported by the camera preview.

For example you can list all the available preview modes as below:

```actionscript
for each (var mode:CameraMode in device.getPreviewModes())
{
	log( "    mode: " + mode.mode + " ["+mode.width + "x"+mode.height+"]" );
}
```

You can also check whether a particular mode is supported on the device:

```actionscript
if (device.isPreviewModeSupported( mode ))
{
	// mode is supported as a preview mode
}
```

### Change Mode 


To change the preview mode:

```actionscript
if (device.isPreviewModeSupported( mode ))
{
	device.setPreviewMode( mode );
}
```

>
> **Note** : Changing the preview mode will change the size of the image returned in preview
> frames so you should be prepared to handle a bitmap size change in your preview handler.
>


## Camera Mode

The camera mode is the mode that images will be captured in when triggered by a capture request.

### Availability

Similarly to preview modes, you can retrieve the available camera modes supported by the device
by calling the `getCameraModes` function.

For example you can list all the available camera modes as below:

```actionscript
for each (var mode:CameraMode in device.getCameraModes())
{
	log( "    mode: " + mode.mode + " ["+mode.width + "x"+mode.height+"]" );
}
```

You can also check whether a particular camera mode is supported on the device:

```actionscript
if (device.isCameraModeSupported( mode ))
{
	// mode is supported as a camera mode 
}
```


### Change Mode 

Changing the camera mode will not directly affect the current operation of the camera. It simply
sets the mode that will be used for the next capture request.

Again it is a simple matter of calling `setCameraMode` with the required `CameraMode` instance.

```actionscript
device.setCameraMode( mode );
```


## iOS Limitations

Currently iOS only supports capture and previewing using the one mode. So in order for us 
to support both settings we internally change the mode just before capturing an image.

This has one side affect that you must wait for the camera parameters to adjust automatically
before capturing the image otherwise you will capture a dark / unadjusted image.

```actionscript
var request:CaptureImageRequest = new CaptureImageRequest();
request.waitForAdjustments = true;
```

This is the default, but it is important to be aware of.

You can get around this on iOS if you require, by setting the preview mode to be the same 
as the camera mode, this way the mode won't be changed just before capture and the preview
frame will be the same as the captured image. This has the side effect of reducing the preview 
frame rate as much more data needs to be captured and transferred.


