---
title: Unzipping a file
sidebar_label: Unzipping a file
---

To unzip a file call the `unzip` function. This will unzip the specified zip file 
to the specified destination directory.

If you specify `overwrite` to the function, files that exist will be overwritten 
with the files from the zip file, otherwise files that already exist will be 
ignored and not extracted from the zip.

The extension will dispatch one of two events to determine the result of the unzip:

- `ZipUtilsEvent.UNZIP_COMPLETE`: Indicates the unzip is complete and the files are now available
- `ZipUtilsEvent.UNZIP_ERROR`: Indicates there was an error unzipping the file

There is also a progress event that will be dispatched at intervals. 
Depending on the operating system but generally after each file is extracted.


## Example

```actionscript
ZipUtils.service.addEventListener( ZipUtilsEvent.UNZIP_COMPLETE, zipUtils_completeHandler );
ZipUtils.service.addEventListener( ZipUtilsEvent.UNZIP_ERROR, zipUtils_errorHandler );

var zipFile:File = File.applicationStorageDirectory.resolvePath( "example.zip" );
var destinationDir:File = ...; // Output location

ZipUtils.service.unzip( zipFile.nativePath, destination.nativePath, true );
```

Event handlers:

```actionscript
private function zipUtils_completeHandler( event:ZipUtilsEvent ):void
{
	trace( "unzip complete" );
}

private function zipUtils_errorHandler( event:ZipUtilsEvent ):void
{
	trace( "unzip error" );
}
```
