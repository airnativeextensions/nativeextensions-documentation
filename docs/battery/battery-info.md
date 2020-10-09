---
title: Battery Info
sidebar_label: Battery Info
---


To retrieve the battery information you must call the `getBatteryInfo` function. 
The battery information retrieval is an asynchronous process so you must 
listen for the `BatteryEvent.BATTERY_INFO` event to get the response.

```actionscript
Battery.service.addEventListener( BatteryEvent.BATTERY_INFO, battery_infoHandler );

Battery.service.getBatteryInfo();
```

Then when the battery information is available:

```actionscript
private function battery_infoHandler( event:BatteryEvent ):void
{
	// event contains information about the battery
}
```

The `BatteryEvent` contains 2 pieces of information:
- `batteryState`
- `batteryLevel`


The `batteryLevel` represents the current charge level of the battery. It ranges from `1` (full) to `0` (empty).

The `batteryState` indicates the current state of the battery and will be one of the values defined in the `BatteryState` 
class, which includes states like: full, charging, not charging.


Example:

```actionscript
private function battery_infoHandler( event:BatteryEvent ):void
{
	switch( int(event.batteryState) )
	{
		case BatteryState.CHARGING:
			trace("Battery state: CHARGING");
			break;
		case BatteryState.FULL:
			trace("Battery state: FULL");
			break;
		case BatteryState.NOT_CHARGING:
			trace("Battery state: NOT CHARGING");
			break;
		case BatteryState.NOT_SUPPORTED:
			trace("Battery state: NOT SUPPORTED");
			break;
		case BatteryState.UNKNOWN:
		default:
			trace("Battery state: UNKNOWN");
			break;
	}
	
	trace("Battery level: " + event.batteryLevel );
}
```
