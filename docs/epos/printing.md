---
title: Printing
sidebar_label: Printing
---

Once you have created your `EposPrinter` instance and initiated a connection you can print to the connected device by using a series of commands.


## Image

To send an image to the printer use the `addImage()` method.
This method adds a raster image print command to the command buffer. You will need to load your image into a `BitmapData` instance and pass this (along with any options) to the `addImage()` method.


```actionscript
var image:BitmapData = (new EmbeddedImage() as Bitmap).bitmapData;

printer.addImage( image );
```

You can also specify some options for the image if required:

```actionscript
var options:ImageOptions = new ImageOptions();
options.x = 10;
options.y = 10;

printer.addImage( image, options );
```

The image should contain a single pixel for each dot on the printer. We have found a 500 pixel wide image works well with the `TM_T88VII` printer.


## Cutting

To trigger a cut of the paper, call the `addCut()` method and pass the cut type.  The cut types are defined by the constants in the `EposCut` class.

```actionscript
printer.addCut( EposCut.CUT_FEED );
```



## Print

Once you have assembled your commands, call the `sendData()` method to send your print commands to the printer. Calling this method will start the print process.


```actionscript
printer.sendData();
```



## Clear Command Buffer

Once you have completed your print you should clear the command buffer by calling `clearCommandBuffer()`. This will ensure the command buffer is empty before any further prints are done. 


```actionscript
printer.clearCommandBuffer();
```




## Example

The following example prints an image and cuts the paper.

```actionscript
var image:BitmapData = (new EmbeddedImage() as Bitmap).bitmapData;

printer.addImage( image );
printer.addCut( EposCut.CUT_FEED );
printer.sendData();
printer.clearCommandBuffer();
```

