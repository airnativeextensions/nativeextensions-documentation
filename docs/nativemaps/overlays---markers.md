---
title: Overlays - Markers
sidebar_label: Overlays - Markers
---


Markers are pins located at a single location. They can be used to identify places of interest.

A marker is represented by the `MapMarker` class.


## Adding a Marker

To add a marker, create an instance of the `MapMarker` class and then pass this object to the `addMarker` function.

```actionscript
var marker:MapMarker = new MapMarker( "demo marker" )
    .setPosition( new LatLng( 50, 3 ) );

NativeMaps.service.addMarker( marker );
```

This will added the marker to the map using the specified options. The marker will appear immediately at the specified position (animating in if selected).




## Z Order

You can set the z-index of markers to ensure certain markers remain above others. The z-index specifies the stack order of this marker, relative to other markers on the map. A marker with a high z-index is drawn on top of markers with lower z-indexes. The default z-index value is 0.

To change the z-index simply set the `zIndex` property of the `MapMarker`:

```actionscript
var marker:MapMarker = new MapMarker( "demo marker" )
    .setPosition( new LatLng( 50, 3 ) )
    .setZIndex( 300 );
```


### MapKit iOS 11+

With iOS 11 Apple have introduced some major changes as to how the z ordering of markers occurs. 

We can no longer apply a z index to simple "pin" markers, i.e. markers without a custom icon. The z-index of markers without a custom icon will be managed by the internal logic of MapKit. We have however been able to override this behaviour for markers with a custom icon. 





## Custom Marker Icons

You can use your own imagery for markers, by loading or creating a BitmapData object and creating a `CustomMarkerIcon` with a unique id. You then pass this icon to the extension through the `addCustomMarkerIcon` function. Once you have added a custom marker icon to the extenion you can use the unique id to create markers using the custom icon.

For example, firstly create a marker icon from an embedded `Marker` image asset:

```actionscript
var markerImage:Bitmap = new Marker() as Bitmap;
					
var markerIcon:CustomMarkerIcon = new CustomMarkerIcon( "UNIQUE_MARKER_ID" )
        .setImage( markerImage.bitmapData )

NativeMaps.service.addCustomMarkerIcon( markerIcon );
```

Then create a marker using this icon:

```actionscript
var marker:MapMarker = new MapMarker()
    .setPosition( new LatLng( 50, 3 ) )
    .setCustomIconId( "UNIQUE_MARKER_ID" );

NativeMaps.service.addMarker( marker );  
```


### Offsets

You can set the offset to correctly place your icon at the position by specifying the `centerOffset` point of the `CustomMarkerIcon`. The `centerOffset` point is the offset in pixels from the center of the marker image to the position that gets placed at the markers coordinate. Positive offset values move the icon down and to the right, while negative values move it up and to the left. 

By default, the center of the marker icon is placed over the coordinate of the marker. i.e. offsets of 0.

So to demonstrate, to use the bottom middle of the image as the anchor point you would set the x offset to be `0` and the y offset to be `- imageHeight / 2`:

```actionscript
var markerImage:Bitmap = new Marker() as Bitmap;

var markerIcon:CustomMarkerIcon = new CustomMarkerIcon( "MARKER_ID_1" )
    .setImage( markerImage.bitmapData )
    .setCenterOffset( 0, -markerImage.height * 0.5 );
```


### Interaction


#### Touch Events

You can listen for a touch events on markers by listening for the `NativeMapEvent.MARKER_TOUCHED` event.

```actionscript
NativeMaps.service.addEventListener( NativeMapEvent.MARKER_TOUCHED, marker_touchHandler );
```

This event will contain the identifier of the marker that was touched, which can be retrieved using the `getMarker` function. For example:

```actionscript
function marker_touchHandler( event:NativeMapEvent ):void
{
    var selectedMarker:MapMarker = NativeMaps.service.getMarker( event.markerId );

    // Change marker as required

    NativeMaps.service.updateMarker( selectedMarker );
}		
```


#### Drag Events

If you have made a marker draggable (see `MapMarker.setDraggable()`) then you can listen for the `NativeMapEvent.MARKER_DRAG_START` and `NativeMapEvent.MARKER_DRAG_END` events to handle drag start and stop events.

```actionscript
NativeMaps.service.addEventListener( NativeMapEvent.MARKER_DRAG_START, marker_dragStartHandler );
NativeMaps.service.addEventListener( NativeMapEvent.MARKER_DRAG_END, marker_dragEndHandler );

function marker_dragStartHandler( event:NativeMapEvent ):void 
{
    trace( "drag start for marker id: " + event.markerId );
}

function marker_dragEndHandler( event:NativeMapEvent ):void 
{
    trace( "drag end for marker id: " + event.markerId );
}
```



