---
title: Mounting an OBB File
sidebar_label: Mounting an OBB File
---


Mounting an OBB file makes the contents you packaged into the file previously 
available as normal files in the file system. This way you can easily access 
your content without having to extract the content to another location on the 
device, potentially doubling the storage required.

Mounting simple involves calling `mount` and passing the `ExpansionFile` you wish 
to mount. The mount function will return true if the mount process was started 
successfully and may return false, if the file has already been mounted, if 
the expansion file has not yet been completely downloaded or if file is not 
the correct OBB format (i.e. you didn't correctly use the JOBB tool to 
generate the file).

Once the mount process is complete an event will be dispatched indicating the 
state of the mounted OBB file.


```actionscript
var obbFile:ExpansionFile = new ExpansionFile( ExpansionFile.MAIN, 1001003, 93147195 );

if (ExpansionFiles.service.expansionFilesDelivered())
{
	ExpansionFiles.service.obbUtils.addEventListener( OBBUtilsEvent.STATE_CHANGED, obbUtils_stateChangedHandler );
	var success:Boolean = ExpansionFiles.service.obbUtils.mount( obbFile );
}
```


```actionscript
private function obbUtils_stateChangedHandler( event:OBBUtilsEvent ):void
{
	trace( event.type + " : "+ ExpansionFiles.service.getFilenameForExpansionFile(event.file) );
	if (event.state == OBBState.MOUNTED)
	{
		trace( "OBB file mounted" );
	}
}
```


## Unmounting an OBB File

You can unmount an OBB file if you have finished loading your content into memory 
and no longer require file access. This is a simple call to unmount


```actionscript
var obbFile:ExpansionFile = new ExpansionFile( ExpansionFile.MAIN, 1001003, 93147195 );

if (ExpansionFiles.service.obbUtils.isMounted( obbFile ))
{
	ExpansionFiles.service.obbUtils.unmount( obbFile );
}
```
