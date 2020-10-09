---
title: Preview Frames
sidebar_label: Preview Frames
---

## Preview Frames

Once you have connected to a camera device you are most likely going to want to show a 
preview to your users. 

Preview frames are provided through the `CameraEvent.VIDEO_FRAME` event. This is dispacted 
from a camera device whenever a preview frame is available. The event indicates that bitmap
data representing the current view through the camera device is available.

```actionscript
device.addEventListener( CameraEvent.VIDEO_FRAME, camera_videoFrameHandler );
```

When you receive the event you can then query the extension for the frame buffer using the 
`getFrameBuffer` function. This function takes a `ByteArray` which will be filled with the 
bitmap data of the preview frame. 

> A `ByteArray` is used to ensure we can transfer the data from the native side to your AS3
> quickly, attempting to keep the frame rate of your preview frame as high as possible. 

To render the data you should create an appropriately sized `BitmapData` object and use the 
`setPixels` to update the bitmap data from the `ByteArray`.

Firstly lets create the bitmap data:

```actionscript 
var _previewBitmapData:BitmapData = new BitmapData( 1, 1, false );
var _previewBitmapRect:Rectangle = new Rectangle( 0, 0, 1, 1 );

//
//	Check we have an appropriately sized bitmapdata and texture
//		Recreate if not
if (_previewBitmapData.width != device.width || _previewBitmapData.height != device.height)
{
	trace( "resizing to: (" + device.width +", "+ device.height +")" );
	_previewBitmapData.dispose();
	
	_previewBitmapData = new BitmapData( device.width, device.height, false );
	
	_previewBitmapRect = new Rectangle( 0, 0, _previewBitmapData.width, _previewBitmapData.height );
}
```

Then in our event handler we update from the frame buffer.

```actionscript
private function camera_videoFrameHandler( event:CameraEvent ):void 
{
	if (-1 != device.getFrameBuffer( _previewData ))
	{
		try
		{
			//
			//	Update the bitmapdata and texture
			_previewBitmapData.setPixels( _previewBitmapRect, _previewData );
			
			// For Starling 1.x
			// flash.display3D.textures.Texture(_previewTexture.base).uploadFromBitmapData( _previewBitmapData );

			// For Starling 2.x
			flash.display3D.textures.RectangleTexture(_previewTexture.base).uploadFromBitmapData( _previewBitmapData );
		}
		catch (e:Error)
		{
			trace( e );
		}
		finally
		{
			_previewData.clear();
			_lastFrameProcessed = frame;
		}
	}
}
```

We also suggest you rotate the container of your bitmap data to match the orientation of the 
camera device. You should use the `device.info.orientation` value to rotate appropriately.

See the example applications for demonstrations of this, and the following gists:

- [Starling Camera Preview Example](https://gist.github.com/marchbold/ce93ed72a5fb60db045e6168362d5508)


