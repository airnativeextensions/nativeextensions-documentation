---
title: Algorithms and Format
sidebar_label: Algorithms and Format
---

## Algorithm

The available algorithms are defined in the `Algorithm` class. 

There are currently 2 algorithms however we highly recommend using the `Algorithm.NATIVE` 
algorithm. It is the native fusion algorithm and currently produces the most reliable results. This algorithm is implemented by the OS and in recent releases has become the fastest and best algorithm available on mobile devices.

The `Algorithm.FUSION` is an algorithm drawn together from suggested practices however doesn't seem to get as good results as the native algorithm. We don't recommend using this algorithm except on old devices when the native algorithm wasn't as reliable.


## Reference Frame

The reference frame defines reference that is used as the "zero point" of the frame. The main difference between the reference frames is whether the magnetometer and location sensors are used to determine the direction of north for the device.

Generally the best response will be achieved by not using the sensors required to determine the north direction, as these sensors (in particular the magnetometer) can be greatly influenced by the environmental conditions. 

The available reference frames are defined in the `ReferenceFrame` class.

- `ReferenceFrame.Y_ARBITRARY_Z_VERTICAL`: Use this sensor in a game or VR application if you do not care about where north is. This does **not** use the magnetometer.
- `ReferenceFrame.Y_MAGNETICNORTH_Z_VERTICAL`:  Describes a reference frame in which the Z axis is vertical and the Y axis points toward the geomagnetic North Pole.



## Output Format 

The available formats are defined in the `OutputFormat` class.

We highly suggest you use the quaternion format (`OutputFormat.QUATERNION`) to position the device. This format is the most stable and easiest to use. It is widely supported by 3D engines including Away3D which is used in the example code.

Euler angles are the traditional roll, pitch and yaw angles. However these angles are susceptible to what is known as *Gimbal lock*, and should be avoided wherever possible. This becomes more evident in device motion where the gimbal lock conditions can be reached quite easily as part of everyday usage. If you do decide to use this format be prepared to deal with some unusual values around the *Gimbal lock* condition.

For more information : [http://en.wikipedia.org/wiki/Gimbal_lock](http://en.wikipedia.org/wiki/Gimbal_lock)




## Support


You can check if a particular algorithm and format combination is supported on the current device. This allows you to dynamically react to particular devices and choose the most appropriate algorithm and format for your needs. 

To check support, call the `isAlgorithmSupported` function with the algorithm and format of interest:

```actionscript
if (DeviceMotion.service.isAlgorithmSupported( algorithm, format ))
{
	// Algorithm and format are available on the current device
}
```


