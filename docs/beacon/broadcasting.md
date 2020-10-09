---
title: Broadcasting
sidebar_label: Broadcasting
---

## Broadcasting

Broadcasting will make the device act as a beacon so that other devices can detect the device as if it were a beacon.



### Availability 

To check if broadcasting is available on the current device check the `isBroadcastAvailable()` flag.


```actionscript
if (Beacon.service.isBroadcastAvailable())
{
    // Broadcasting is available on this device
}
```


### Check if broadcasting

You can also check if the current device is already broadcasting as a beacon. This 


```actionscript
if (Beacon.service.isBroadcasting())
{
    // Device is broadcasting 
}
```


### Start broadcasting

To start broadcasting call the `startBroadcast()` function passing in the configuration for the beacon broadcast.
The configuration is set by creating an instance of the `BroadcastConfig` class and setting the properties appropriate for your situation. 

The details provided in the configuration identify the device. Of particular importance is the `UUID` provided to the constructor along with the `major` and `minor` values. 

For example:

```actionscript
var config:BroadcastConfig = new BroadcastConfig( "7b44b47b-52a1-5381-90c2-f09b6838c5d4" );
config.major = 1;
config.minor = 5;

var success:Boolean = Beacon.service.startBroadcast( config );
```

`success` will be `true` if the broadcast was started successfully.


### Stop broadcasting


To stop broadcasting call the `stopBroadcast()` function.


```actionscript
var success:Boolean = Beacon.service.stopBroadcast();
```

`success` will be `true` if the broadcast was stopped successfully. It may be `false` if the device was not broadcasting.

It's often good to wrap the stop call in the `isBroadcasting()` check, to ensure the device is broadcasting before attempting to stop:

```actionscript
if (Beacon.service.isBroadcasting())
{
    Beacon.service.stopBroadcast();
}
```



### Events

There are 3 events that will be dispatched during broadcasting:

- `BroadcastEvent.BROADCAST_START`: Dispatched when the broadcasting starts successfully
- `BroadcastEvent.BROADCAST_ERROR`: Dispatched if there was an error when starting broadcasting
- `BroadcastEvent.BROADCAST_STOP`: Dispatched when broadcasting stops

The events are dispatched by the main `Beacon.service` instance, for example:

```actionscript
Beacon.service.addEventListener( BroadcastEvent.BROADCAST_START, startHandler );
Beacon.service.addEventListener( BroadcastEvent.BROADCAST_ERROR, errorHandler );
Beacon.service.addEventListener( BroadcastEvent.BROADCAST_STOP,  stopHandler );


function startHandler( event:BroadcastEvent ):void
{
    // broadcast started
}

function errorHandler( event:BroadcastEvent ):void
{
}

function stopHandler( event:BroadcastEvent ):void
{
    // broadcast stopped
}
```


