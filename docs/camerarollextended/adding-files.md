---
title: Adding Files
sidebar_label: Adding Files
---

With the standard `CameraRoll` implementation you can easily add a `BitmapData` reference to the camera roll, using the `addBitmapData` function. 

This functionality is also duplicated in this extension:

```actionscript
var bd:BitmapData = ...;

CameraRollExtended.service.addBitmapData( bd );
```

You may have image files that you wish to add to the camera roll without have to load the bitmap data into memory, and you may also have video content that you want to add to the camera roll.

To achieve this you can use the `addFile()` function, passing the `File` reference to the file you wish to add to the camera roll.

```actionscript
var video:File = File.applicationDirectory.resolvePath("assets/video.mp4");

var success:Boolean = CameraRollExtended.service.addFile( video, Asset.VIDEO );
```

If the functionality is not supported or there was an error initiating the transfer to the camera roll then this function may return `false`. If it returns `true`, the process was started successfully and you can expect one of the following events:

- `CameraRollExtendedEvent.ADD_FILE_COMPLETE`: When the file was successfully transferred to the camera roll;
- `CameraRollExtendedEvent.ADD_FILE_ERROR`: If there was an error.


```actionscript
CameraRollExtended.service.addEventListener( CameraRollExtendedEvent.ADD_FILE_COMPLETE, addFile_completeHandler );
CameraRollExtended.service.addEventListener( CameraRollExtendedEvent.ADD_FILE_ERROR, addFile_errorHandler );
				
CameraRollExtended.service.addFile( video, Asset.VIDEO );

function addFile_completeHandler( event:CameraRollExtendedEvent ):void
{
    trace( "addFile_completeHandler()" );
}

function addFile_errorHandler( event:CameraRollExtendedEvent ):void
{
    trace( "addFile_errorHandler(): ["+event.errorCode+"] :: " + event.message );
}
```

