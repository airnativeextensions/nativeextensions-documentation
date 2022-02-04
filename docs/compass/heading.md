---
title: Heading
sidebar_label: Heading
---

## Heading Updates

Once you've initialised the extension calling the `register` function will start 
the update of event updates (`CompassEvent`).

```actionscript
if (Compass.isSupported)
{
	Compass.init( APP_KEY );
	Compass.service.addEventListener( CompassEvent.HEADING_UPDATED, compass_headingUpdatedHandler );
	Compass.service.register();
}
```

Listening for the `CompassEvent.HEADING_UPDATED` will give you periodic events with 
heading information:

```actionscript
private function compass_headingUpdatedHandler( event:CompassEvent ):void
{
	trace( "Heading: " + event.magneticHeading +"   ["+event.headingAccuracy+"]" );
}
```

When your application no longer requires the heading updates it's important to call 
`unregister` to stop the active usage of the sensors on the device. This will 
conserve battery life etc. This is important when your application goes into 
background operation. It's suggested that you use a mechanism to unregister 
the ANE when this occurs, by using something like the ACTIVATE/DEACTIVATE events.

```actionscript
if (Compass.isSupported && Compass.service.isRegistered)
{
	Compass.service.unregister();
}
```




## True Heading

On iOS you can access the true heading of the device, however this requires access to the device location so you will need to add some additional properties to your application and request permission to access the device location. 

For more information on this see the section on [request authorisation](request-authorisation.md)

:::note Android
True Heading is not supported on Android
:::

