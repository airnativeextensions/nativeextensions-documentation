---
title: Loading BitmapData from File
sidebar_label: Loading BitmapData from File
---


This process is the reverse of saving bitmap data, where it will load a PNG or JPG 
file and decode the file into a BitmapData object.

Using the native decoders can increase the speed of loading images in your application, 
however the difference is much closer here, and sometimes the built in AIR methods can 
be faster, mainly due to the time taken to move the bitmap across the native - AIR boundary.


```actionscript
Image.service.addEventListener( ImageEvent.LOAD_COMPLETE, loadBitmapDataAsync_completeHandler );
Image.service.addEventListener( ImageEvent.LOAD_ERROR, loadBitmapDataAsync_errorHandler );

var file:File = File.applicationStorageDirectory.resolvePath("test.png");

var success:Boolean = Image.service.loadBitmapDataAsync( file.nativePath );
```

When the load operation completes you will receive either an `ImageEvent.LOAD_COMPLETE` 
event or an `ImageEvent.LOAD_ERROR` event:

```actionscript
function loadBitmapDataAsync_completeHandler( event:ImageEvent ):void
{
	trace( "Load successful" );
	
	// Use the bitmap data
	var b:Bitmap = new Bitmap( event.bitmapData );
	addChild( b );
}

function loadBitmapDataAsync_errorHandler( event:ImageEvent ):void
{
	trace( "Load error: " + event.error );
}
```