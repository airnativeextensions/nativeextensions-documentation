---
title: Saving BitmapData to File
sidebar_label: Saving BitmapData to File
---


Encoding bitmap data to a file can be a slow process when using AS3 operations. 
This extension provides functionality to use the native PNG and JPG encoders to 
save BitmapData to a file which greatly increases the speed of saving images.

Most of the operations provided by this ANE can be performed synchronously or 
asynchronously. Synchronous operations may block your UI if you are dealing 
with large images so we suggest you use the asynchronous versions wherever possible.


```actionscript
var image:Bitmap = new SampleImage() as Bitmap;
var f:File = File.applicationStorageDirectory.resolvePath("test.png");

Image.service.addEventListener( ImageEvent.SAVE_COMPLETE, saveBitmapDataAsync_completeHandler );
Image.service.addEventListener( ImageEvent.SAVE_ERROR, saveBitmapDataAsync_errorHandler );

var success:Boolean = Image.service.saveBitmapDataAsync( image.bitmapData, f.nativePath, ImageFormat.PNG );
```

When the save operation completes you will receive either an `ImageEvent.SAVE_COMPLETE` 
event or an `ImageEvent.SAVE_ERROR` event:

```actionscript
function saveBitmapDataAsync_completeHandler( event:ImageEvent ):void
{
	trace( "Save successfully: " + event.identifier );
}

function saveBitmapDataAsync_errorHandler( event:ImageEvent ):void
{
	trace( "Save failed: " + event.identifier );
}
```


## Caching Internally

In order to avoid crashes when AIR garbage collects the Bitmap Data we make a copy of the image
and use this cached version internally. 

If you pass a local variable to the `saveBitmapDataAsync` function and we don't cache the
image data, AIR isn't aware of the ANE reference and may dealloc the memory we are using
to save the image. So by default we cache the image internally.

This can have a small affect on the performance as we need to create a copy of the image.

If you are concerned about the speed of this function you should try to set `cacheBitmapInternally`
to `false` and make sure that you hold onto a reference to your bitmap data, for example, as 
a class variable. 

```actionscript
// Class variable will hold reference to bitmap
private var image:Bitmap;


private function saveBitmap():void 
{
	Image.service.addEventListener( ImageEvent.SAVE_COMPLETE, saveBitmapDataAsync_completeHandler );
	Image.service.addEventListener( ImageEvent.SAVE_ERROR, saveBitmapDataAsync_errorHandler );

	// Set cacheBitmapInternally to false
	var success:Boolean = Image.service.saveBitmapDataAsync( image.bitmapData, f.nativePath, ImageFormat.PNG, false );
}

private function saveBitmapDataAsync_completeHandler( event:ImageEvent ):void
{
	trace( "Save successfully: " + event.identifier );
	// dispose image if required.
}

private function saveBitmapDataAsync_errorHandler( event:ImageEvent ):void
{
	trace( "Save failed: " + event.identifier );
	// dispose image if required.
}


