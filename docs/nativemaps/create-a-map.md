---
title: Create a Map
sidebar_label: Create a Map
---

## Preparing the view on Android

Due to the way AIR applications are rendered on Android, the native map view layer can behave strangely with regard to z-ordering.

To work around this issue, the extension has a method called `prepareViewOrder` which will modify 
the application's view in order to allow the map layer to be rendered consistently. 

> This method must be called before you create a map.

Using this method will cause a short flash of a black screen while the view order is modified. Unfortunately there is no way to avoid this currently. However, since you can do this at any time after your application has started (once the main class is added to the stage), you can choose an appropriate time in your application's life cycle, before you create a map, where it will be least noticeable by the user.

If you do not call this method before creating a map, it will be called automatically.

```actionscript
if (NativeMaps.isSupported)
{
	NativeMaps.service.prepareViewOrder();
}
```


## Create the Map

Creating a map is a simple process of calling the `createMap` function, passing the required viewport (width, height, x and y) and the map type.


```actionscript
var viewport:Rectangle = new Rectangle( 0, 0, 500, 800 );
NativeMaps.service.createMap( viewport, MapType.MAP_TYPE_HYBRID );
```

There are also some events around the creation of a map that allow you to be notified when the map is created and ready to be used.

```actionscript
var viewport:Rectangle = new Rectangle( 0, 0, 500, 800 );

NativeMaps.service.addEventListener( NativeMapEvent.MAP_CREATED, mapCreatedHandler );

var success:Boolean = NativeMaps.service.createMap( viewport, MapType.MAP_TYPE_HYBRID );
if (success)
{
	trace( "Map creation started successfully" );
}
else 
{
	trace( "Map creation failed - most likely a map has already been created" );
}

...

private function mapCreatedHandler( event:NativeMapEvent ):void
{
	trace( "Map created" );
}
```


### Set the map centre

The `createMap` function also takes some additional parameters to set the initial location 
and zoom of the map

```actionscript
var viewport:Rectangle = new Rectangle( 0, 0, 500, 800 );
var centre:LatLng = new LatLng( -27.0, 155 );
var zoom:Number = 3;

NativeMaps.service.createMap( viewport, MapType.MAP_TYPE_HYBRID, centre, zoom );
```


### Timing

Some crashes or problems can be caused by trying to initialise and create a map too quickly when your app starts up. 
For example, a lot of developers add all their code to init, create and set up a map in the addedToStage handler of the main class.

This can be problematic, because the extension needs to perform some view reordering and modification to fix the z-indexing problem. We strongly suggest:

- Wait a short time after your app starts to work with the map objects, a preloader or something similar is enough;
- Ensure the `NativeMapEvent.MAP_CREATED` event has been received before attempting to perform other actions on your map.











