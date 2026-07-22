---
title: Overlay View
---

## Create an Overlay View

The main interface to a native overlay is provided through the `OverlayView` interface.

To create an overlay view use the `createOverlay()` method.  

```actionscript
var overlay:OverlayView = NativeOverlay.service.createOverlay();
```


### Options

You can pass options to the `createOverlay()` method to specify the initial conditions for the view. 

For example you can set the initial size and position of the view:

```actionscript
var options:OverlayViewOptions = new OverlayViewOptions()
        .setPosition( 200, 200 )
        .setSize( 400, 400 );

var overlay:OverlayView = NativeOverlay.service.createOverlay( options );
```


## Drawing

Once you have created an overlay view you can draw bitmap content into the view by calling the `draw()` method:


```actionscript
var data:BitmapData = ...;

overlay.draw( data );
```

:::note
The bitmap data will be scaled to fit within the size of the view.
:::

## Position and Size

You can change the position and size of the view using the properties on the `OverlayView` instance. 

For example to update the position and size:

```actionscript
overlay.x = 150;
overlay.y = 150;
overlay.width = 600;
overlay.height = 300;
```

:::caution Coordinate System
The view position and size dimensions are in the native coordinate system of the device. If you are using any AIR scaling or alignment methods the position and size will likely not correlate to the native position and size. 

They will align if you are using standard stage alignment and scale modes:

```actionscript
stage.align     = StageAlign.TOP_LEFT;
stage.scaleMode = StageScaleMode.NO_SCALE;
```

On iOS, ensure you have set the requested display resolution to "high" in your application descriptor. 

```xml
<iPhone>
    <requestedDisplayResolution>high</requestedDisplayResolution>
</iPhone>
```
:::

## Events

The `OverlayView` will dispatch a click event if the user clicks on the view. 


```actionscript
overlay.addEventListener( MouseEvent.CLICK, overlay_clickHandler );

function overlay_clickHandler( event:MouseEvent ):void
{
    trace( "Overlay click" );
}
```

:::note
The event will not contain the standard position information or details on key modifiers.
:::


## Dispose 

To remove an overlay view and clean up any associated memory you should call `dispose()` on the view.

```actionscript
overlay.dispose();
```

You should also remove any event listeners prior to disposing, for example:

```actionscript
overlay.removeEventListener( MouseEvent.CLICK, overlay_clickHandler );
overlay.dispose();
```

:::note
Once disposed the view is no longer valid and any further draw operations will fail
:::
