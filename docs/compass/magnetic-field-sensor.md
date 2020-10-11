---
title: Magnetic Field Sensor
sidebar_label: Magnetic Field Sensor
---


The raw magnetic field values can be retrieved using this extension. 
You can listen for the MagneticFieldEvent for changes in the magnetic field. 
There are 2 important events, both indicating the magnetic field, one in the 
calibrated state and the other the raw uncalibrated data.

The functionality is accessed through the `Compass.service.magneticFieldSensor` instance. 
There are also checks to see if the data updates are available on the current device. 
This checks whether there is a magnetometer on the device and whether the particular 
data updates (calibrated or uncalibrated) are available. (Uncalibrated data was only 
introduced on Android v18).


```actionscript
if (Compass.service.magneticFieldSensor.isCalibratedDataAvailable)
{
	Compass.service.magneticFieldSensor.addEventListener( MagneticFieldEvent.MAGNETIC_FIELD_UPDATED, magneticFieldUpdatedHandler );

	// The true here indicates the request for calibrated data
	Compass.service.magneticFieldSensor.register( SensorRate.SENSOR_DELAY_NORMAL, true );
}
```

Then you retrieve information in the update events:

```actionscript
private function magneticFieldUpdatedHandler( event:MagneticFieldEvent ):void
{
	trace( "calibrated\nx:"+ event.fieldX + "\ny:"+event.fieldY  +"\nz:"+ event.fieldZ +"\na:"+ event.accuracy; );
}
```

Similarly to stop the updates call the `unregister` function:

```actionscript
Compass.service.magneticFieldSensor.unregister();
```
