---
title: Loading an Asset
sidebar_label: Loading an Asset
---


To load an image asset use the `loadAsset()` function passing an `Asset` reference and a constructed `AssetRequest`.

To load an asset you firstly need to have retrieved an `Asset` reference from the extension. 

Once you have a reference to the asset you wish to load, you will construct an `AssetRequest` to specify the version of the asset to retrieve. This allows you to load a version of the asset that suits your usage specifying the width and height of the loaded data. This is so you don't have to allocate memory to accomodate the entire image and additionally this ensures that the loading and resizing of the image data is done as quickly as possible, reducing the load on the cpu of the device.


To construct an `AssetRequest` use the properties on the `AssetRequest` class. You must at least set a width and height to be used.

```actionscript
var request:AssetRequest = new AssetRequest()
		.setResizeMethod( AssetRequest.RESIZE_FILL )
		.setWidth( 400 )
		.setHeight( 400 );
```

or 

```actionscript
var request:AssetRequest = new AssetRequest( 400, 400, AssetRequest.RESIZE_FILL );
```

:::note 
The width and height requested may not exactly be the size of the image returned. The native system may opimise the request and provide a slightly smaller image in order to improve the speed of the request. You should make sure to correctly handle the size of the returned image and not rely on the request size.
:::


Once you have your `Asset` and `AssetRequest` you can initiate the load:

```actionscript
var success:Boolean = CameraRollExtended.service.assets.loadAsset( asset, request );
```

The `loadAsset()` call when initiated successfully will dispatch an event when complete:

- `AssetEvent.ASSET_LOADED`: If the load was successfully completed;
- `AssetEvent.ASSET_ERROR`: If an error occurred during the load



```actionscript
CameraRollExtended.service.assets.addEventListener( AssetEvent.ASSET_LOADED, assetLoadedHandler );
CameraRollExtended.service.assets.addEventListener( AssetEvent.ASSET_ERROR, assetErrorHandler );

CameraRollExtended.service.assets.loadAsset( asset, request );


function assetLoadedHandler( event:AssetEvent ):void
{
	// event.image will contain the bitmap data loaded
	updateImage( event.image );
}


function assetErrorHandler( event:AssetEvent ):void
{
	trace( "load asset error: " + event.message );
}
```


## Preset Requests

To simplify creating requests there are some common preset requests that you may wish to use.

- `THUMBNAIL`: Returns a thumbnail representation of the asset. The size of the thumbnail is the appropriate size for the platform, and in the correct orientation.
- `ASPECT_RATIO_THUMBNAIL`: This representation contains an image with an aspect ratio thumbnail of the asset. The size of the thumbnail is the appropriate size for the platform, and in the correct orientation.
- `FULL_RESOLUTION`: This representation contains the biggest, best representation available. **Use this mode sparingly as it will require a significant amount of memory.**
- `DISPLAY_RESOLUTION`: This request will load an image that is big enough to cover the entire device screen.


To use these presets simply pass the preset to the `loadAsset()` function instead of a constructed request:

```actionscript
CameraRollExtended.service.assets.loadAsset( 
	asset, 
	AssetRequest.ASPECT_RATIO_THUMBNAIL
);
```


## Resize Methods 

When constructing your `AssetRequest` you can pass several different values to the `setResizeMethod()` which controls how the asset will be resized to the specified width and height.

- `RESIZE_NONE`: The image will not be resized and the original image data returned
- `RESIZE_BEST_FIT`: This method will best fit the image to inside the specified width and height dimensions. The result will be smaller than or equal to the specified dimensions. No cropping will occur
- `RESIZE_FILL_NO_CROP`: This method takes the smallest size of the image (either width or height) and makes it equal to the specified width or height value. This is very similar to the `RESIZE_BEST_FIT` method except that rather than **fitting** inside the width and height, the result will **fill** the width and height specified.
- `RESIZE_FILL`: This method fills the specified size, scaling content to fill the entire area and cropping any content falling outside.


Example: 

```actionscript
var request:AssetRequest = new AssetRequest()
		.setResizeMethod( AssetRequest.RESIZE_FILL_NO_CROP )
		.setWidth( 400 )
		.setHeight( 400 );
```
