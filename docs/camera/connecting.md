---
title: Connecting
sidebar_label: Connecting
---


Once you have determined the device you wish to use from the `CameraDeviceInfo` you will 
need to connect to the device.

This process opens the camera device and gives you a connection to the device hardware
that you can use to control the camera.

When connecting you will provide the `CameraDeviceInfo` of the device you wish to connect to 
and an optional instance of the `CameraParameters` class which will specify the camera 
settings and, importantly, the camera modes you wish to use (these represent the camera 
resolutions you wish to use).


In the following example we are using a previously obtained `deviceInfo` object from the 
device selection process and we are setting some basic options using an instance of the 
`CameraParameters` class:

```actionscript
var options:CameraParameters = new CameraParameters();
options.enableFrameBuffer = true;
options.previewMode       = new CameraMode( CameraMode.CUSTOM, 640, 480 );
options.cameraMode        = new CameraMode( CameraMode.PRESET_PHOTO );

// Connect
var device:CameraDevice = Camera.instance.connect( deviceInfo, options );
if (device == null)
{
	trace( "failed to connect" );
}
```

You should now have a valid `CameraDevice` instance which represents your connection
to the camera hardware.



## Disconnecting

Once you have finished with the camera hardware connection you should disconnect from 
the hardware. 

It is also highly advisable that you disconnect whenever your application
loses focus. Generally there is only one connection allowed to the hardware and you should 
be a good app citizen and allow other applications to connect when your application isn't 
in focus.


To disconnect we call the `disconnect` function on the `CameraDevice` instance:

```actionscript
var success:Boolean = device.disconnect();
```

We suggest you also remove any preview frame listeners and have completed any operations 
before calling this function. 

