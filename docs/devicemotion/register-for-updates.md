---
title: Register for Updates
sidebar_label: Register for Updates
---


Registering for updates forms the core of this extension. The extension works by 
registering for notifications of device motion. When you register for updates you 
specify a series of options about the updates which the extension use to determine 
the algorithm that is used to calculate the device orientation, and also the 
information format that is returned.


To register for updates call the `register` function:

```actionscript
DeviceMotion.service.register();
```



## Options

The `options` passed to the `register` call contains all of the information about the 
algorithm to use, the format to return and the rate of events.  

- The `algorithm` represents the method we use to calculate the position and motion of the device.
- The `format` what data the extension returns when device motion is detected and the type of update events that are fired from the extension
- The `referenceFrame` influences the sensors that are used for the algorithm
- The `rate` is the speed at which update events are delivered. You should pick one of the SensorRate values best suited for your needs. The default is `SensorRate.SENSOR_DELAY_NORMAL` which is the slowest update rate, suitable for "screen orientation changes". Most applications will use something faster than this.

To create the options you can instanciate an instance of the `DeviceMotionOptions` class directly, though we suggest you use the `DeviceMotionOptionsBuilder` to help ensure the options are created correctly and any errors picked up early. The functions on the builder may throw an error if the parameter you supply is invalid.

For example: 

```actionscript
var options:DeviceMotionOptions =
		new DeviceMotionOptionsBuilder()
				.setAlgorithm( Algorithm.NATIVE )
				.setReferenceFrame( ReferenceFrame.Y_ARBITRARY_Z_VERTICAL )
				.setAutoOrient( true )
				.setOutputFormat( OutputFormat.QUATERNION )
				.setSensorRate( SensorRate.SENSOR_DELAY_UI )
				.build();

DeviceMotion.service.register( options );
```

See [Algorithms and Format](u.Algorithms and Format) for more information on the algorithm, formats and reference frames used in the extension.


## Updates

The type of event you listen for is dependent on the format you requested, as each will 
have a different data associated with the update. For example, euler angles with have 
3 numeric values, and quaternion will have 4. 

Having different events allows you to handle them with different functions if you require.

For example to listen for quaternion updates:

```actionscript
DeviceMotion.service.addEventListener( DeviceMotionEvent.UPDATE_QUATERNION, updateHandler );
```

Or to listen for euler angle updates:

```actionscript
DeviceMotion.service.addEventListener( DeviceMotionEvent.UPDATE_EULER, updateHandler );
```

The event contains a `data` property which will be an array of Number values. 
It contains all of the values for the event type. In the following example handler
we switch on the type and then apply the transformation to an Away3D trident object.


```actionscript
private function updateHandler( event:DeviceMotionEvent ):void
{
	// 	Reset to original position then rotate to current position
	var matrix:Matrix3D = new Matrix3D();
	_trident.transform = matrix;
	
	switch (event.type)
	{
		//
		//	EULER ANGLES
		case DeviceMotionEvent.UPDATE_EULER:
		{
			var azimuth:Number 	= event.values[0];
			var pitch:Number 	= event.values[1];
			var roll:Number 	= event.values[2];
			
			matrix.appendRotation( DEG(azimuth), 	_trident.forwardVector );
			matrix.appendRotation( DEG(pitch), 		_trident.rightVector );
			matrix.appendRotation( DEG(roll), 		_trident.upVector );
			
			_trident.transform = matrix; 
			break;			
		}
		
		//
		//	QUARTERNION
		case DeviceMotionEvent.UPDATE_QUATERNION:
		{
			var q:Quaternion = new Quaternion( event.values[1], event.values[2], event.values[3], event.values[0] );
			_trident.transform = q.toMatrix3D();
			_trident.transform.invert();
			break;
		}
			
	}
}
```




## Unregister 


To stop updates and the algorithm processing you call the `unregister` function.

Be sure to unregister a sensor's listener when you are done using the sensor or 
when the sensor activity pauses. If a sensor listener is registered and its activity 
is paused, the sensor will continue to acquire data and use battery resources 
unless you unregister the sensor.


```actionscript
DeviceMotion.service.unregister();
```



## Notes 

We highly suggest that you check for deactivation events in your application and 
make sure that you unregister the device motion updates. This is to reduce strain 
on the device and increase battery life. 

Something like the following:


```actionscript
NativeApplication.nativeApplication.addEventListener( Event.DEACTIVATE, deactivateHandler );

function deactivateHandler( event:Event ):void
{
	try
	{
		if (DeviceMotion.isSupported && DeviceMotion.service.isRegistered)
			DeviceMotion.service.unregister();
	}
	catch (e:Error)
	{
	}
}
```
