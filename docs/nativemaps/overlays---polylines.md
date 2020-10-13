---
title: Overlays - Polylines
sidebar_label: Overlays - Polylines
---


Polylines are a series of points that trace out a line. They can be used to outline areas or to indicate paths.

A polyine is represented by the `Polyline` class.


## Adding a Polyline

To add a polyline, create an instance of the `Polyline` class and pass the object to the `addPolyline` function.

```actionscript
var polyline:Polyline = new Polyline()
    .setColour( 0xFFFF00FF )
    .addPoint( new LatLng( -27.5, 150 ) )
    .addPoint( new LatLng( -27.5, 151 ) );

NativeMaps.service.addPolyline( polyline );
```



## Z Order

You can set the z-index of a polyline to ensure certain lines remain above other overlays. The z-index specifies the stack order of this line, relative to other overlays on the map. 

A high z-index is drawn above objects with lower z-indexes. The default z-index value is 0.

To change the z-index simply set the `zIndex` property of the `Polyline`:

```actionscript
var polyline:Polyline = new Polyline()
    .setZIndex( 300 );
```



## Encoded Path

As a polyline can be made up of a large number of points conversion from AS3 to native objects can be time consuming process.

In order to speed this up we suggest investigating encoding a polyline as a string and using the encoded path instead of an Array of LatLng values. This reduces the conversions needed from many LatLng objects to a single String and will speed up the conversion considerably.

To set the encoded path of a polyline use the `setEncodedPath` function:

```actionscript
var polyline:Polyline = new Polyline()
    .setEncodedPath( encodedPath );
```

>
> Setting the encoded path of a polyline will override the points on Android. 
>
> On iOS the encoded path is ignored.
>


### Encoding 

To encode a polyline you can use the `encode` function in the `PolyUtil`. This will take a series of `LatLng` objects and encode the path of these points as a String. You can read the details of this process in the `PolyUtil` class.

```actionscript
var points:Vector.<LatLng> = ...;

var encodedPath:String = PolyUtil.encode(points);
```


### Automatic encoding

When adding a large polyline (> 100 points) the NativeMaps extension will automatically encode the points to improve performance. This means that you don't have to manually encode the path for large polylines but simply add points as normal and the extension will handle the encoding internally.











