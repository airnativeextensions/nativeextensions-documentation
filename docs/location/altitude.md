---
title: Altitude
sidebar_label: Altitude
---

You can get additional information about the altitude of the device by using the barometric pressure sensors available on many devices. Altitude events report changes in both the relative and absolute altitude. For example, a hiking app could use this object to track the user’s elevation change over the course of a hike, or to report their current absolute altitude during the hike.

This is generally not super accurate but can be useful for determining relative height changes eg calculating the number of floors a person climbed throughout a day or elevation changes over a walk. 

All the altitude functionality is available through the `Altitude` interface instance accessed via `Location.service.altitude`.


## Relative Altitude

To get access to the altitude, firstly check if the device supports relative altitude updates:

```actionscript
if (Location.service.altitude.isRelativeAltitudeAvailable)
{
    trace( "relative altitude services are supported " );
}
```

To start updates, call `startRelativeAltitudeUpdates()`. The extension will then dispatch `AltitudeEvent.UPDATE_RELATIVE` events at regular intervals (regardless of whether the data has changed).

For the first altitude event delivered, the value of this property is 0. Subsequent events contain a number that reflects the relative change in altitude with respect to the first reported event. For example, if the altitude changed five meters between the first and second events, the value in this property is 5 for the second event.

For example:

```actionscript
Location.service.altitude.addEventListener( AltitudeEvent.UPDATE_RELATIVE, altitude_updateHandler );
Location.service.altitude.startRelativeAltitudeUpdates();

function altitude_updateHandler( event:AltitudeEvent ):void
{
    trace( event.data.altitude );
}
```

To stop updates, call `stopRelativeAltitudeUpdates()`

```actionscript
Location.service.altitude.stopRelativeAltitudeUpdates();
```


## Absolute Altitude

:::note
Absolute altitude is only available on iPhone 12 and later and Apple Watch 6 or SE and later.
:::

To get access to the altitude, firstly check if the device supports absolute altitude updates:

```actionscript
if (Location.service.altitude.isAbsoluteAltitudeAvailable)
{
    trace( "absolute altitude services are supported " );
}
```

To start updates, call `startAbsoluteAltitudeUpdates()`. The extension will then dispatch `AltitudeEvent.UPDATE` events containing the absolute altitude of the device relative to sea level, measured in meters.

```actionscript
Location.service.altitude.addEventListener( AltitudeEvent.UPDATE, altitude_updateHandler );
Location.service.altitude.startAbsoluteAltitudeUpdates();

function altitude_updateHandler( event:AltitudeEvent ):void
{
    trace( event.data.altitude );
}
```

To stop updates, call `stopAbsoluteAltitudeUpdates()`

```actionscript
Location.service.altitude.stopAbsoluteAltitudeUpdates();
```


