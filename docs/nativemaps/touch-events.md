---
title: Touch Events
sidebar_label: Touch Events
---

There are several events that will be dispatched by the map to indicate the user is interacting with the map.


## Touch Events

There are two main touch events, a simple touch, tap or press represented by `NativeMapTouchEvent.TOUCH` 
and a long touch or long press represented by `NativeMapTouchEvent.TOUCH_LONG`.

These events will have an associated location attached to them, indicating the geographic location 
on the map that the user has touched.

The event will contain the `location` as a `LatLng` instance.

```actionscript
NativeMaps.service.addEventListener( NativeMapTouchEvent.TOUCH, nativeMaps_touchHandler );
NativeMaps.service.addEventListener( NativeMapTouchEvent.TOUCH_LONG, nativeMaps_touchHandler );

...

private function nativeMaps_touchHandler( event:NativeMapTouchEvent ):void
{
	trace( event.type );
	trace( event.location.toString() );
}
```



## Drag Events

Drag events are dispatched whenever the map is moved by the user. 
This can be done by either using one or two fingers and as such doesn't have a specific location
attached to it and `location` will be `null`. 


```actionscript
NativeMaps.service.addEventListener( NativeMapTouchEvent.DRAG_START, nativeMaps_dragHandler );
NativeMaps.service.addEventListener( NativeMapTouchEvent.DRAG_END, nativeMaps_dragHandler );

...

private function nativeMaps_dragHandler( event:NativeMapTouchEvent ):void
{
	trace( event.type );
}
```


