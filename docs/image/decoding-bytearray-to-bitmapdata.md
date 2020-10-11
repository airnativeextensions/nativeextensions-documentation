---
title: Decoding ByteArray to BitmapData
sidebar_label: Decoding ByteArray to BitmapData
---


This process is the opposite of the encode function. It allows you to decode 
encoded image data into bitmap data. It is the core functionality used to 
load a bitmap from file converting the file bytes to bitmap data.

```actionscript
var data:ByteArray = ...; // Encoded data from a file load for example

Image.service.addEventListener( ImageEvent.DECODE_COMPLETE, decodeAsync_completeHandler );
Image.service.addEventListener( ImageEvent.DECODE_ERROR, decodeAsync_errorHandler );

var success:Boolean = Image.service.decodeAsync( data );
```

When the decode operation completes you will receive either an `ImageEvent.DECODE_COMPLETE` 
event or an `ImageEvent.DECODE_ERROR` event:

```actionscript
function decodeAsync_completeHandler( event:ImageEvent ):void
{
	trace( "Decode successful" );
	
	// Use the bitmap data
	var b:Bitmap = new Bitmap( event.bitmapData );
	addChild( b );
}

function decodeAsync_errorHandler( event:ImageEvent ):void
{
	trace( "Decode failed: " + event.error );
}
```

