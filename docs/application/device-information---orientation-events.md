---
title: Device Information - Orientation Events
sidebar_label: Device Information - Orientation Events
---

The orientation of the device is sometimes important to applications, irrespective of the orientation of 
the UI. The `DeviceOrientationEvent` will give you information about the orientation of the device 
even if your UI doesn't change. 

This can be useful in situations when you have locked your UI to an aspect ratio but still want to 
react to the user rotating their device. 


## Accessing the current orientation

You can access the current orientation of the device by checking the `deviceOrientation` flag of the `device` instance:

```actionscript
var currentOrientation:String = Application.service.device.deviceOrientation;
```

This will return one of the `DeviceOrientation` constants.

>
> Note: The `DeviceOrientation.UNKNOWN` orientation will be returned if the device is flat on a desk ie. when there is no distinct orientation of the device.
>


## Listening for orientation changes

Listening for changes is as simple as adding a listener for the `DeviceOrientationEvent.CHANGED` event.


```actionscript
Application.service.device.addEventListener( DeviceOrientationEvent.CHANGED, orientationChangedHandler );
```

Then in your event handler you can respond to the orientation change appropriately:

```actionscript
private function orientationChangedHandler( event:DeviceOrientationEvent ):void
{
	trace( "orientationChangedHandler(): " + event.orientation );
	switch (event.orientation)
	{
		case DeviceOrientation.DEFAULT:
		case DeviceOrientation.UPSIDE_DOWN:
		case DeviceOrientation.ROTATED_LEFT:
		case DeviceOrientation.ROTATED_RIGHT:
			break;
	}
}
```


## Starting orientation events

By default orientation events are not dispatched. This is due to a small amount of monitoring that is 
required to detect these changes.

To start generating orientation events you must call the `startGeneratingDeviceOrientationEvents` function:

```actionscript
Application.service.device.startGeneratingDeviceOrientationEvents();
```

Conversely if you wish to stop the events you can call `stopGeneratingDeviceOrientationEvents`:

```actionscript
Application.service.device.stopGeneratingDeviceOrientationEvents();
```

