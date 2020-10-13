---
title: WebPLoader
sidebar_label: WebPLoader
---

## Asynchronous Loading using the WebPLoader

To load a WebP file asynchronously is a simple matter of using the WebPLoader. 
Firstly you create a new loader using the WebP.service.createLoader() function. 
This gives you access to a WebPLoader instance which you can then attach event 
listeners for

- `WebPLoaderEvent.COMPLETE`
- `WebPErrorEvent.ERROR`

To start the load simply call `load` on the loader and wait for one of the 
above events to fire.


### Example

```actionscript
var loader:WebPLoader = WebP.service.createLoader();
			
loader.addEventListener( WebPLoaderEvent.COMPLETE, loader_completeHandler );
loader.addEventListener( WebPErrorEvent.ERROR, loader_errorHandler );
			
var success:Boolean = loader.load( file.url );
			
trace( "loader.load( " + file.url + " ) = " + success );
```

Then in your event handlers: 

```actionscript
private function loader_completeHandler( event:WebPLoaderEvent ):void
{
	trace( "loader complete" );
	displayBitmapData( event.data.convertToBitmapData() );
	
	var loader:WebPLoader = WebPLoader(event.currentTarget);
	loader.removeEventListener( WebPLoaderEvent.COMPLETE, loader_completeHandler );
	loader.removeEventListener( WebPErrorEvent.ERROR, loader_errorHandler );
	loader.dispose();
}

private function loader_errorHandler( event:WebPErrorEvent ):void
{
	trace( "loader error ::["+event.code+"] "+event.error );
	
	var loader:WebPLoader = WebPLoader(event.currentTarget);
	loader.removeEventListener( WebPLoaderEvent.COMPLETE, loader_completeHandler );
	loader.removeEventListener( WebPErrorEvent.ERROR, loader_errorHandler );
	loader.dispose();
}
```