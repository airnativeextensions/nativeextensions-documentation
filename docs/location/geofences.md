---
title: Geofences
sidebar_label: Geofences
---


## Authorisation

In order to use Geofences you should request the `ALWAYS` authorisation. Apps with geofencing capabilities should use Always authorization due to the need to monitor geofences even when the app isn’t running in the foreground.

Additionally you need to have added the location `UIBackgroundModes` on iOS. 


## Start Monitoring a Geofence Region

To start monitoring a region you create a `Region` instance representing the Geofenced region. 
This object has a location (latitude and longitude) and a radius to specify the location and size of the region, and you should also assign a region a unique identifier so you can later identify the region that was entered/exited. 

The radius represents the distance in **meters** from the specified location, at which the system will trigger the notification.

Once you have defined your region you start monitoring by calling `startMonitoringRegion`. 
You can call this multiple times if you wish to monitor several regions.


```actionscript
Location.service.geofences.addEventListener( RegionEvent.START_MONITORING, startMonitoringHandler );
Location.service.geofences.addEventListener( RegionEvent.ENTER, enterHandler );
Location.service.geofences.addEventListener( RegionEvent.EXIT, exitHandler );

var region:Region = new Region();
region.identifier 	= "some-unique-id";
region.latitude 	= 14.123456;
region.longitude 	= 12.345678;
region.radius 		= 100;

var success:Boolean = Location.service.geofences.startMonitoringRegion( region );

function startMonitoringHandler( event:RegionEvent ):void
{
	trace( "start monitor: "+event.region.identifier );
}


function enterHandler( event:RegionEvent ):void
{
	trace( "region enter: "+event.region.identifier );
}

function exitHandler( event:RegionEvent ):void
{
	trace( "region exit: "+event.region.identifier );
}
```


### Android

On Android you can trigger your application to start if it is not running by setting the `startApplicationOnEnter` flag on the region. If you set this flag to `true` then when the device enters the region your application will be automatically started.

```actionscript
var region:Region = new Region();
region.startApplicationOnEnter = true;
```

The default is `false`.


## Stop Monitoring a Geofence Region

Stopping location updates is simply a matter of calling `stopMonitoringRegion` and passing the same `Region` used to start monitoring the region. This will dispatch a `RegionEvent.STOP_MONITORING` event when successful. 

```actionscript
Location.service.geofences.addEventListener( RegionEvent.STOP_MONITORING, stopMonitoringHandler );

var success:Boolean = Location.service.geofences.stopMonitoringRegion( region );


function stopMonitoringHandler( event:RegionEvent ):void
{
	trace( "stop monitor: "+event.region.identifier );
}
```

If you have finished listening to geofences you should also remove any `RegionEvent` listeners you may have been using.

```actionscript
Location.service.geofences.removeEventListener( RegionEvent.START_MONITORING, startMonitoringHandler );
Location.service.geofences.removeEventListener( RegionEvent.STOP_MONITORING, stopMonitoringHandler );
Location.service.geofences.removeEventListener( RegionEvent.ENTER, enterHandler );
Location.service.geofences.removeEventListener( RegionEvent.EXIT, exitHandler );
```



## Operation Notes and Caveats 

The entry and exit events are generated whenever the OS determines that a region is entered or exited. The conditions for this vary on the operating systems and can vary from a few seconds to a few minutes.


### iOS

An app can register up to 20 regions at a time. In order to report region changes in a timely manner, the region monitoring service requires network connectivity.

To work around this limit, consider registering only those regions in the user’s immediate vicinity. As the user’s location changes, you can remove regions that are now farther way and add regions coming up on the user’s path. 

Regions with a radius between 1 and 400 meters work better on iPhone 4S or later devices. On these devices, an app can expect to receive the appropriate region entered or region exited notification within 3 to 5 minutes on average, if not sooner.

The system doesn’t report boundary crossings until the boundary plus a system-defined cushion distance is exceeded. This cushion value prevents the system from generating numerous entered and exited events in quick succession while the user is traveling close the edge of the boundary.


### Android 

Android entry/exit events are dispatched somewhat faster than on iOS.




