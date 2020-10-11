---
title: Encoding BitmapData to ByteArray
sidebar_label: Encoding BitmapData to ByteArray
---

This process is the allows you to encode image data into encoded image bytes. 
It is the core functionality used to save a bitmap to file.


```actionscript
var image:Bitmap = new SampleImage() as Bitmap;

Image.service.addEventListener( ImageDataEvent.ENCODE_COMPLETE, encodeAsync_completeHandler );
Image.service.addEventListener( ImageDataEvent.ENCODE_ERROR, encodeAsync_errorHandler );

var success:Boolean = Image.service.encodeAsync( image.bitmapData, ImageFormat.PNG ); 
```


When the encode operation completes you will receive either an `ImageDataEvent.ENCODE_COMPLETE` 
event or an `ImageDataEvent.ENCODE_ERROR` event:

```actionscript
function encodeAsync_completeHandler( event:ImageDataEvent ):void
{
	var encodedData:ByteArray = event.data;
}

function encodeAsync_errorHandler( event:ImageDataEvent ):void
{
	trace( "Encode failed: " + event.error );
}
```
