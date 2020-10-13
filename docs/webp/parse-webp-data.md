---
title: Parse WebP Data
sidebar_label: Parse WebP Data
---

If you load data from a URL or other data source you can use the `parseWebP` 
function to decode the WebP data into useable bitmap pixel data.


```actionscript
// For this example load data from a file into a ByteArray
var file:File = File.applicationDirectory.resolvePath( "image.webp" );
var fs:FileStream = new FileStream();
fs.open( file, FileMode.READ );
var data:ByteArray = new ByteArray();
fs.readBytes( data, 0, fs.bytesAvailable );
fs.close();

var decodedData:ByteArray = new ByteArray();

//
// Use WebP to decode the data
var success:Boolean = WebP.service.parseWebP( data, decodedData );

if (success) 
{
	var rect:Rectangle = new Rectangle( 0, 0, WebP.service.width, WebP.service.height );
	var bd:BitmapData = new BitmapData( WebP.service.width, WebP.service.height, true );
	bd.setPixels( rect, decodedData );
	
	// Use the BitmapData as required
}
```
