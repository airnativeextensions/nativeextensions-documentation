---
title: File Access
sidebar_label: File Access
---

### Asynchronous Access

If you wish to access the bytes of the asset directly, or access a video file you will most likely want to get a `File` object access to the Asset. 

This is not as simple as it would seem as both operating systems restrict access to certain media assets on the device, so commonly the extension will copy the asset to your application and give you access to that file. 

**You must be aware that after calling the `getFileForAssetAsync` function you may have a copy of the asset contained in your application storage.**


```actionscript
var asset:Asset = ... ; // Asset retrieved via user selection (browseForAsset)

CameraRollExtended.service.addEventListener( AssetFileEvent.FILE_FOR_ASSET_COMPLETE, assetFile_completeHandler );
CameraRollExtended.service.addEventListener( AssetFileEvent.FILE_FOR_ASSET_ERROR, assetFile_errorHandler );

CameraRollExtended.service.getFileForAssetAsync( asset ); 


function assetFile_completeHandler( event:AssetFileEvent ):void
{
	var f:File = event.file;
	if (f.exists) message( "ASSET FILE:: "+ f.nativePath + "("+f.size+")");
	else message( "ASSET FILE:: "+ f.nativePath + " (ERROR:doesn't exist!) " );
}

function assetFile_errorHandler( event:AssetFileEvent ):void
{
	trace( "FAILED TO GET FILE" );
}
```


### Direct Access

This method using direct access is not as reliable and will fail in more recent versions of iOS.

We don't recommend using this method. It has been deprecated and most likely remove it in a future release.

```actionscript
var asset:Asset = ... ; // Asset retrieved via user selection (browseForAsset)

var f:File = CameraRollExtended.service.getFileForAsset( asset );
if (f != null && f.exists)
{
	trace( "ASSET FILE: "+f.nativePath );
	// Use File as you require
}
```


