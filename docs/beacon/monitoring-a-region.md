---
title: Monitoring a Region
sidebar_label: Monitoring a Region
---

A region of beacons is designated by a UUID and a simple identifier. You should always supply 
a valid UUID string that matches the UUID used in your beacons and a simple identifier to allow 
the system to distinguish regions internally.

During the lifetime of monitoring a region you'll receive the following events:

- `REGION_MONITORING_START`: when monitoring of a region begins
- `REGION_ENTER`: when a region is entered by a device
- `REGION_EXIT`: when a region is left by a device
- `BEACON_UPDATE`: when a beacon is detected and ranged within a region


When the application is in the foreground, a region change detection can take ~ 1 second.

>
> " 
> In general ranging only works in the foreground, but monitoring updates can happen in the background. 
> There are two ways to configure background monitoring, and even when done properly updates can take 
> a long time to come. Because these delays, some people mistakenly believe that monitoring in the 
> background doesn't work. 
> "
>


>
> **iOS**: On iOS you must ensure you have the `ALWAYS` permission granted to successfully monitor regions. Without this permission you may not get any region entry or exit events.
>



### Start Monitoring

To start the monitoring call the `startMonitoringRegionWithUUID` function with your `UUID` and `identifier`:


```actionscript
Beacon.service.addEventListener( BeaconEvent.REGION_MONITORING_START, monitoringStartHandler );
Beacon.service.addEventListener( BeaconEvent.REGION_ENTER, regionEnterHandler );
Beacon.service.addEventListener( BeaconEvent.REGION_EXIT, regionExitHandler );
Beacon.service.addEventListener( BeaconEvent.BEACON_UPDATE, beaconUpdateHandler );

var started:Boolean = Beacon.service.startMonitoringRegionWithUUID( "D57092AC-DFAA-446C-8EF3-C81AA22815B5", "an_identifying_string" );
trace( "Bluetooth monitoring started: " + started );
```

Then setup event handlers as below:

```actionscript
private function monitoringStartHandler( event:BeaconEvent ):void
{
	trace( "monitoringStartHandler(): " + event.region.identifier + "::" + event.region.uuid );
}

private function regionEnterHandler( event:BeaconEvent ):void
{
	trace( "Entered region: " + event.region.uuid );
}

private function regionExitHandler( event:BeaconEvent ):void
{
	trace( "Exit region: " + event.region.uuid );
}

private function beaconUpdateHandler( event:BeaconEvent ):void
{
	trace( "Beacon update for region: "+event.region.uuid );
	for each (var beacon:BeaconObject in event.beacons)
	{
		trace( "Beacon: "+beacon.major+"."+beacon.minor +"::"+beacon.proximity +"["+beacon.accuracy +"]");
	}
}
```


### Multiple Regions 

If you wish to monitor multiple regions simulataneously you must make sure that the identifier parameter 
is unique for each region as well as the uuid! If you do not you will only receive updates for the last 
region you started monitoring. The iOS SDK uses the identifier to determine if the region is unique, and 
replaces any existing region monitoring if it is the same.



### Stop Monitoring

Similarly to stop monitoring call the `stopMonitoringRegionWithUUID` function:

```actionscript
if (Beacon.service.isMonitoringRegionWithUUID( uuid ))
{
	var stopped:Boolean = Beacon.service.stopMonitoringRegionWithUUID( uuid, identifier );
	trace( "Bluetooth monitoring stopped: "+stopped );
}
```








