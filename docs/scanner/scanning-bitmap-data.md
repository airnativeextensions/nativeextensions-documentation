---
title: Scanning Bitmap Data
---

This method of scanning doesn't utilise the camera directly, instead you can use other methods to acquire image data and use the extension to scan the image for any symbols directly. 

For example you could allow the user to select an image from their camera roll or capture an image using the CameraUI interface.

Once you have acquired your image data, you can scan the image for symbols by calling the `scanBitmap()` method. This method is synchronous.


```actionscript
var image:BitmapData = ...; // Your image data

var scanResults:Array = Scanner.service.scanBitmap( image );
```

The `scanResults` array returned from this method is an `Array` of `ScanResult` objects. 

(This is the same format as the data returned in the `ScannerEvent.CODE_FOUND` event from the camera based methods).


```actionscript
var scanResults:Array = Scanner.service.scanBitmap( image );

for each (var result:ScanResult in scanResults)
{
    trace( "code found: " + result.data 
            + "[" + result.symbologyType + "] " );
}
```

If no results were found the `scanResults` array will be empty.




## Options

When scanning bitmaps there are some options that can be used.  The `ScannerOptions` class represents any options relating to the scanning algorithm to use, such as the list of symbol types to enable. 

To create a `ScannerOptions` you can use the properties on an instance of the class or use the builder methods.

```actionscript
var scanOptions:ScannerOptions = new ScannerOptions();
scanOptions.symbologies = [ Symbology.QRCODE ];
```

or 

```actionscript
var scanOptions:ScannerOptions = new ScannerOptions()
	.setSymbologies( [ Symbology.QRCODE ] );
```


In order to set these options call `setScanBitmapOptions()` passing the `ScannerOptions` instance. For example:


```actionscript
Scanner.service.setScanBitmapOptions(
        new ScannerOptions()
                .setSymbologies( [ Symbology.QRCODE ] )
);
```

You can call this function once and it will apply to every call of `scanBitmap()` (unless you dispose the extension).


