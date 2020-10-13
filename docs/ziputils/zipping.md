---
title: Zipping
sidebar_label: Zipping
---

To compress an entire directory into a zip file you use the `zip()` function.


The extension will dispatch one of two events to determine the result of the unzip:

- `ZipUtilsEvent.ZIP_COMPLETE`: Indicates the zip is complete and the zip file is available
- `ZipUtilsEvent.ZIP_ERROR`: Indicates there was an error zipping the file

There is also a progress event that will be dispatched at intervals. 
Depending on the operating system but generally after each file is added to the zip.


## Example


```actionscript
ZipUtils.service.addEventListener( ZipUtilsEvent.ZIP_COMPLETE, zipCompleteHandler );
ZipUtils.service.addEventListener( ZipUtilsEvent.ZIP_ERROR, zipErrorHandler );
ZipUtils.service.addEventListener( ZipUtilsProgressEvent.PROGRESS, progressHandler );

var zipFile:File = File.applicationStorageDirectory.resolvePath( "example.zip" );
var sourceDir:File = ...; // Some directory to zip

ZipUtils.service.zip(
        zipFile.nativePath,
        sourceDir.nativePath
);
```

Event handlers:

```actionscript
private function zipCompleteHandler( event:ZipUtilsEvent ):void
{
	trace( "zip complete" );
}

private function zipErrorHandler( event:ZipUtilsEvent ):void
{
	trace( "zip error" );
}

private function progressHandler( event:ZipUtilsProgressEvent ):void 
{
    trace( "progress: " + event.bytesLoaded +" / "+event.bytesTotal );
}
```
