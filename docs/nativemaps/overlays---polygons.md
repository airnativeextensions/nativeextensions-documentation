---
title: Overlays - Polygons
sidebar_label: Overlays - Polygons
---


Polygons are an extension of a [polyline](overlays---polylines) allowing you to fill the area contained within the line, so they can be used to draw shapes on the map.

A polygon is represented by the `Polygon` class.


## Adding a Polygon

To add a polygon, create an instance of the `Polygon` class and pass the object to the `addPolygon` function.

```actionscript
var polygon:Polygon = new Polygon();

polygon.setColour( 0xFFFF00FF );
polygon.setFillColour( 0xFF00FF00 );

polygon.addPoint( new LatLng( -27.5, 150 ) );
polygon.addPoint( new LatLng( -27.5, 151 ) );
polygon.addPoint( new LatLng( -27.0, 150 ) );

NativeMaps.service.addPolygon( polygon );
```



## Z Order 

You can set the z-index of a polygon to ensure certain polygons remain above other overlays. The z-index specifies the stack order of this line, relative to other overlays on the map. 

A high z-index is drawn above objects with lower z-indexes. The default z-index value is 0.

To change the z-index simply set the `zIndex` property of the `Polygon`:

```actionscript
var polygon:Polygon = new Polygon();
polygon.setZIndex( 300 );
```


## Encoded Path

As a polygon can be made up of a large number of points conversion from AS3 to native objects can be time consuming process.

In order to speed this up we suggest investigating encoding a polygon as a string and using the encoded path instead of an Array of LatLng values. This reduces the conversions needed from many LatLng objects to a single String and will speed up the conversion considerably.

To set the encoded path of a polygon use the `setEncodedPath` function:

```actionscript
var polygon:Polygon = new Polygon();
polygon.setEncodedPath( encodedPath );
```

>
> Setting the encoded path of a polygon will override the points on Android. 
>
> On iOS the encoded path is ignored.
>


### Encoding 

To encode a polygon you can use the `encode` function in the `PolyUtil`. This will take a series of `LatLng` objects and encode the path of these points as a String. You can read the details of this process in the `PolyUtil` class.

```actionscript
var points:Vector.<LatLng> = ...;

var encodedPath:String = PolyUtil.encode(points);
```


### Automatic encoding

When adding a large polygon (> 100 points) the NativeMaps extension will automatically encode the points to improve performance. This means that you don't have to manually encode the path for large polygons but simply add points as normal and the extension will handle the encoding internally.




## Holes

You can "cut out" areas of your polygons to remove fill areas of your polygon if you require. 

To do this you create another `Polygon` instance that represents the area of the hole and add it to your `Polygon` instance. The hole polygon will only be used as a series of points and the other options (such as fill colour) will be ignored.

```actionscript
var hole:Polygon = new Polygon();
hole.addPoint( new LatLng( 12, 10 ))
    .addPoint( new LatLng( 12, 11 ))
    .addPoint( new LatLng( 11, 10 ));

polygon.addHole( hole );
```

It is important that a hole must be enclosed completely by the parent polygon. Additionally holes must not overlay with other holes.