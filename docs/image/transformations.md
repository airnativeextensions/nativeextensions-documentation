---
title: Transformations
sidebar_label: Transformations
---


You can apply transformations to `BitmapData` by using the `transformAsync` function to return `BitmapData` or the `transformAndSaveAsync` function to save to a file.

Each of these functions take an instance of the `ImageTransform` class which specifies the details of the transformation to apply to the image.

The functions will return `true` if the transformation process was started successfully and `false` if there was an error either with the state of the extension or with the conversion of the parameters to native.  

The transformation will occur on a background thread and once complete will dispatch the `ImageEvent.TRANSFORM_COMPLETE` event or `ImageEvent.TRANSFORM_ERROR` if there was an error.


## Rotations

To rotate an image set the `rotate` property of your transform to be the angle of rotation in degrees:

```actionscript
var transform:ImageTransform = new ImageTransform();
transform.rotate = 90;

Image.service.addEventListener( ImageEvent.TRANSFORM_COMPLETE, completeHandler );
Image.service.addEventListener( ImageEvent.TRANSFORM_ERROR, errorHandler );

Image.service.transformAsync( bitmapData, transform );

function completeHandler( event:ImageEvent ):void 
{
    // event.bitmapData contains the transformation result
}

function errorHandler( event:ImageEvent ):void 
{
    // An error occurred
}
```


You can specify any arbitrary angle to rotate the image by. The size of the resulting image will be a bounding box around the rotated image so will most likely be larger than the original image. 



## Resizing

To resize an image there are several options to achieve a different sized image.

The `resizeMethod` specifies the approach the resizing will take to handle dealing with aspect ratios and clipping. It can be one of the following:

- `ImageTransform.RESIZE_NONE`: (Default) no resizing will occur
- `ImageTransform.RESIZE_BEST_FIT`: best fit the image to inside the specified width and height
- `ImageTransform.RESIZE_FILL_NO_CROP`: Uses the width and height as the minimum dimensions and performs no cropping. 
- `ImageTransform.RESIZE_FILL`: Fill the specified width and height with the image, cropping if necessary.

Along with this method you specify the `width` and `height` you require. 

For example, to get an exact image sized `150x150` we would use the fill method:

```actionscript
var transform:ImageTransform = new ImageTransform();
transform.resizeMethod = ImageTransform.RESIZE_FILL;
transform.width = 150;
transform.height = 150;

Image.service.transformAsync( bitmapData, transform );
```

See the `ImageTransform` class in asdocs for more on these methods. 


## Transform and Save

In some circumstances you may need to transform an image and save to a file directly, rather than needing the transformed data in your application. Using the `transformAndSaveAsync` function you will save on the time required to create and return the required bitmap data to AIR and the extension instead will save the result directly to a file on the user's device.

This function takes the same transformation options as the `transformAsync` function however it additionally takes an output parameter that specifies the location and format of the output file.

For example, to generate a `150x150` thumbnail for an image and save to the application storage:

```actionscript
var transform:ImageTransform = new ImageTransform();
transform.resizeMethod = ImageTransform.RESIZE_FILL;
transform.width = 150;
transform.height = 150;

var file:File = File.applicationStorageDirectory.resolvePath("images/thumbnail.jpg");
			
var output:ImageOutput = new ImageOutput( file.nativePath );
output.format = ImageFormat.JPG;

Image.service.transformAndSaveAsync( transformImage.bitmapData, transform, output );
```


## Events and Callbacks

You can use the events to process the completion of the transformation.

```actionscript
Image.service.addEventListener( ImageEvent.TRANSFORM_COMPLETE, completeHandler );
Image.service.addEventListener( ImageEvent.TRANSFORM_ERROR, errorHandler );

function completeHandler( event:ImageEvent ):void 
{
    // event.bitmapData contains the transformation result
}

function errorHandler( event:ImageEvent ):void 
{
    // An error occurred
}
```


Alternatively, you can use a callback function as a parameter to the `transformAsync` or `transformAndSaveAsync` functions.

The callback for `transformAsync` passes the transformed bitmap data as a parameter to the callback:

```actionscript
Image.service.transformAsync( bitmapData, transform, callback );

function callback( bitmapData:BitmapData ):void 
{
    // This will be called when the above transform completes
}
```

The callback for `transformAndSaveAsync` passes the success of the save operation to the callback:


```actionscript
Image.service.transformAndSaveAsync( bitmapData, transform, output, callback );

function callback( success:Boolean ):void 
{
    // This will be called when the above transform completes
}
```





