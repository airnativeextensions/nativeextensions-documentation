---
title: Capturing Images
sidebar_label: Capturing Images
---


There are two parts to image capture, a request and a result. 


### Capture Request

To capture an image we start by creating an instance of the `CaptureImageRequest` class.
This object encapsulates all the information about the image capture you wish to make 
and you will pass this to the `captureImage` function of a device for processing.

```actionscript
var request:CaptureImageRequest = new CaptureImageRequest();
request.saveToCameraRoll = true;
request.waitForAdjustments = true;

device.captureImage( request );
```

A `CaptureImageRequest` allows you to control several options, such as whether the 
captured image is saved to the camera roll, and whether we should wait for camera 
adjustments to complete before capturing the image. 


This process will potentially dispatch several events:

- `CameraCaptureEvent.COMPLETE`: When capture completes
- `CameraCaptureEvent.ERROR`: If an error occurs
- `CameraCaptureEvent.IMAGE_SAVE_COMPLETE`: When the image is saved to the camera roll
- `CameraCaptureEvent.IMAGE_SAVE_ERROR`: If an error occurs when saving the image


```actionscript
device.addEventListener( CameraCaptureEvent.COMPLETE, captureComplete_Handler );
device.addEventListener( CameraCaptureEvent.ERROR, captureHandler );
device.addEventListener( CameraCaptureEvent.IMAGE_SAVE_COMPLETE, captureHandler );
device.addEventListener( CameraCaptureEvent.IMAGE_SAVE_ERROR, captureHandler );
```


### Capture Result

Once the capture request is complete, you will be able to access the captured image
through the `captureImageResult()` function. This function returns an instance of the 
`CaptureImageResult` class containing the `BitmapData` captured along with any other 
relevant information.

```actionscript
private function captureComplete_Handler( event:CameraCaptureEvent ):void 
{
	var result:CaptureImageResult = device.captureImageResult();
	if (result != null && result.data != null)
	{
		// result.data will contain the BitmapData object captured
	}
}
```

>
> **Note**: The capture image result will be cleared as soon as it is retrieved or 
> another request is made so you should hold onto the reference if you wish to use 
> it in other places.
>

