---
title: Saving BitmapData to the Camera Roll
sidebar_label: Saving BitmapData to the Camera Roll
---


:::warning
This functionality has been deprecated and will be removed in an upcoming release. 

You should move to the [CameraRollExtended](/docs/camerarollextended/adding-files) extension for adding images to the Camera Roll.

Migration should be relatively straight forward, just replace the `Image.service.saveToCameraRoll()` with `CameraRollExtended.service.addBitmapData()`.
:::


Encoding bitmap data to a file can be a slow process when using AS3 operations. 
This extension provides functionality to use the native encoders to save `BitmapData` 
directly to the user's Camera Roll allowing them to have access to this image 
through their gallery application (Photos, Gallery, etc).

This operation is asynchronous. You will receive an event when the operation completes.


## Authorisation

In order to save to the camera roll you should make sure that the user has granted 
your application permission to save to the camera roll. On Android this is a "dangerous"
permission and requires runtime permission. On iOS it should always be granted.

Take a look at the [Request Authorisation](request-authorisation.md) section for more information.



## Example

This example uses an embedded image asset in the class `SampleImage`.

```actionscript
var image:Bitmap = new SampleImage() as Bitmap;
	
Image.service.addEventListener( ImageEvent.SAVE_TO_CAMERAROLL_COMPLETE, completeHandler );
Image.service.addEventListener( ImageEvent.SAVE_TO_CAMERAROLL_ERROR, errorHandler );
Image.service.saveToCameraRoll( image.bitmapData );
```

You will receive either an `ImageEvent.SAVE_TO_CAMERAROLL_COMPLETE` event 
or an `ImageEvent.SAVE_TO_CAMERAROLL_ERROR` event:


```actionscript
private function completeHandler( event:ImageEvent ):void
{
	trace( "saveToCameraRoll : complete" );
}

private function errorHandler( event:ImageEvent ):void
{
	trace( "saveToCameraRoll : error: "+event.error );
}
```


