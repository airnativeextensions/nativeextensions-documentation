---
title: Proximity
sidebar_label: Proximity
---

The proximity sensor is a sensor that lets you determine how close the face of a device is to an object (known as the proximity sensor). Most commonly this is used to detect if the user is holding the device to their face (eg during a phone call) so that the device can deactivate the screen and controls.

The proximity sensor is accessed through the `proximity` property on the `SensorManager` singleton:

```actionscript
SensorManager.service.proximity 
```

This object dispatches events and provides the interface for you to access the proximity sensor.


## Monitoring Proximity

In order to start monitoring proximity you need to call `startMonitoring()`. This function will initiate proximity detection.

```actionscript
SensorManager.service.proximity.startMonitoring();
```

After this has been called `ProximityEvent.CHANGED` events will be dispatched whenever the proximity state changes.

```actionscript
SensorManager.service.proximity.addEventListener( ProximityEvent.CHANGED, proximity_changedHandler );


function proximity_changedHandler( event:ProximityEvent ):void
{
    trace( "proximity changed: " + event.state );
}
```


You can also directly access the current state at any time using the `proximityState` property:

```actionscript
var state:String = SensorManager.service.proximity.proximityState;
```

The values of the proximity state are definded in the `ProximityState` class:

- `ProximityState.UNKNOWN`: The state has yet to be determined or is unavailable;
- `ProximityState.NEAR`: The user is near to the device;
- `ProximityState.FAR`: The user is far from the device;





>
> Note: On iOS the screen will be automatically dimmed when the proximity sensor is enabled and the proximity state is determined to be "near" (close to the user).
>





## Stop Monitoring


To stop proximity monitoring you call the `stopMonitoring()` function.

```actionscript
SensorManager.service.proximity.startMonitoring();
```

After calling this the proximity state will be invalid.

You should also remove any proximity event listeners you may have added.

```actionscript
SensorManager.service.proximity.removeEventListener( ProximityEvent.CHANGED, proximity_changedHandler );
```








