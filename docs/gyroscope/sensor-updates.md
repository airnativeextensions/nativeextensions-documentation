---
title: Sensor Updates
sidebar_label: Sensor Updates
---

## Listening for Sensor Updates

In order to listen for updates from the Gyroscope sensor you must first attach a listener 
for the `GyroscopeEvent.UPDATE` event and then call `register` with your desired update 
rate.

```actionscript
Gyroscope.service.addEventListener( GyroscopeEvent.UPDATE, gyro_updateHandler );

Gyroscope.service.register( Gyroscope.SENSOR_DELAY_GAME );
```

The extension will now dispatch events at the specified rate giving you access to the 
angular speeds:

```actionscript
private function gyro_updateHandler(event:GyroscopeEvent):void
{
	trace( "Angular Speeds: " + event.x +", "+ event.y +", "+ event.z );
}
```



## Stopping Sensor Updates

Whenever you are done listening for sensor events you should inform the extension 
to stop monitoring the sensor and hence conserve battery life. 

This is done by a simple call to `unregister`:

```actionscript
Gyroscope.service.unregister();
```

After calling this you will no longer receive `GyroscopeEvent.UPDATE` events.

