---
title: Recognising Text
sidebar_label: Recognising Text
---


Recognising text is as simple as calling the `recognise` function with the `BitmapData` you wish to scan.

The result is then returned in the `OCREvent.RECOGNISE` event.

For example:

```actionscript
OCR.service.addEventListener( OCREvent.RECOGNISE, ocr_recogniseHandler );
OCR.service.recognise( bitmapData );
```

Then in your event handler:

```actionscript
private function ocr_recogniseHandler( event:OCREvent ):void
{
	trace( "RECOGNISED: " );
	trace( event.text );
}
```


If an error occurred during the process a `OCREvent.RECOGNISE_ERROR` event will be dispatched
and there will be no complete event. You should make sure you handle this case.

```actionscript 
OCR.service.addEventListener( OCREvent.RECOGNISE_ERROR, ocr_recogniseErrorHandler );

private function ocr_recogniseErrorHandler( event:OCREvent ):void
{
	trace( "Error occurred" );
}
```

## Image Data

The `bitmapData` should be a `BitmapData` instance containing the bitmap data of the image 
you are scanning.

For example if we were to use an embedded image:

```actionscript
[Embed(source="image_sample.jpg")]
public var Image:Class;

var image:Bitmap = new Image() as Bitmap;

OCR.service.recognise( image.bitmapData );
```

Or to load from a URL using a `Loader`:

```actionscript
var imageLoader:Loader = new Loader();
imageLoader.load( new URLRequest( "http://example.com/image.jpg" ));
imageLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, loaded);

function loaded(e:Event):void
{
	var image:Bitmap = e.target.content;

	OCR.service.recognise( image.bitmapData );
}
```


## Specifying Options

You can control some aspects of the scanning process by supplying an `OCROptions` instance 
to the `recognise` function. The options allow you to specify some parameters that will
be used in the algorithm, such as the language and whitelist characters.

For example:

```actionscript
var options:OCROptions = new OCROptions();
options.language = "eng";
options.whitelist = "0123456789.,€$";

OCR.service.recognise( bitmapData, options );
```

