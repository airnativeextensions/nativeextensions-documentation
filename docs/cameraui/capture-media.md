---
title: Capture Media
sidebar_label: Capture Media
---

## Capture an Image

To launch the native UI to capture an image (or a video) you use the `CameraUI.service.launch` function and specify the `MediaType.IMAGE` media type.
This will present the appropriate UI to the user.

The result of the user interface will be given through one of the following events:

- `CameraUIEvent.COMPLETE`: When the user completes capture and media data is available
- `CameraUIEvent.CANCEL`: When the user cancels without capturing any image/video

The following code will work across both platforms

```actionscript
CameraUI.service.addEventListener( CameraUIEvent.COMPLETE, cameraUI_completeHandler );
CameraUI.service.addEventListener( CameraUIEvent.CANCEL, cameraUI_cancelHandler );

CameraUI.service.launch( MediaType.IMAGE );

function cameraUI_completeHandler( event:CameraUIEvent ):void
{
	// Here you can use the event.path to access the media file as you require
	//	Display the captured image
	var l:Loader = new Loader();
	l.load( new URLRequest( event.path ));
	addChild( l );
}

function cameraUI_cancelHandler( event:CameraUIEvent ):void
{
	trace( "user cancel" );
}
```

:::note
The size of the image returned from most modern camera's is quite large so be aware when attempting to display it as a bitmap in your application. You may be best resizing the captured data.
:::

## Capture a Video

Capturing a video is very similar to capturing an image, except we use the `MediaType.VIDEO` media type.
We also can specify some additional options to the video capture, such as video quality as shown in the following example:

```actionscript
CameraUI.service.addEventListener( CameraUIEvent.COMPLETE, cameraUI_completeHandler );
CameraUI.service.addEventListener( CameraUIEvent.CANCEL, cameraUI_cancelHandler );

var options:CameraUIOptions = new CameraUIOptions();
options.videoQuality = QualityType.TYPE_HIGH;

CameraUI.service.launch( MediaType.VIDEO, options );

function cameraUI_completeHandler( event:CameraUIEvent ):void
{
	// Here you can use the event.path to access the media file as you require
	// For example using the distriqt MediaPlayer:
	MediaPlayer.service.createPlayer( event.path, 0, 0, 640, 480, true );
	MediaPlayer.service.addEventListener( MediaPlayerEvent.COMPLETE, function(e:MediaPlayerEvent):void {
		MediaPlayer.service.removeEventListener( MediaPlayerEvent.COMPLETE, arguments.callee );
		MediaPlayer.service.removePlayer();
	});
}

function cameraUI_cancelHandler( event:CameraUIEvent ):void
{
	trace( "user cancel" );
}
```
