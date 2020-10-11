---
title: Reading an OBB File
sidebar_label: Reading an OBB File
---


Once you have completed mounting your OBB file, you can then start to read the 
contents from the package. To do this you can simply use normal AIR File access 
to read the data.

You ask the extension for the mounted path of the files, this directory path 
indicates the root content you created in your package, i.e. the directory you 
passed to the JOBB tool. You can then reference the content in this directory 
with normal File objects. In the following example we access a file we placed 
in an images directory call image.jpg


```actionscript
var obbFile:ExpansionFile = new ExpansionFile( ExpansionFile.MAIN, 1001003, 93147195 );

if (ExpansionFiles.service.obbUtils.isMounted( obbFile ))
{
	var path:String = ExpansionFiles.service.obbUtils.getMountedPath( obbFile );
	var file:File = new File( path + "/images/image.jpg" ); 
	
	// You can use normal file operations
	trace( file.url );
	trace( "exists="+file.exists );
	trace( "size="+file.size );
	
	var loader:Loader = new Loader();
	loader.load( new URLRequest( file.url ) );
	loader.contentLoaderInfo.addEventListener( Event.COMPLETE, loader_completeHandler );
}
```

```actionscript
private function loader_completeHandler(event:flash.events.Event):void
{
	var bitmap:Bitmap = event.currentTarget.loader.content as Bitmap;
	// Use your bitmap as required
}
```
