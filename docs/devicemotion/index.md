---
title: DeviceMotion
hide_title: true
slug: /devicemotion
---

![](images/hero.png)

# Device Motion

[Device motion](https://airnativeextensions.com/extension/com.distriqt.DeviceMotion) is an extension that you can use for getting updates about the position or more precisely the orientation of the device in 3D space.

The extension calculates and reports angles by use of various sensor fusion algorithms 
which combine the available sensors into orientation and rotational information. 
The quality of this information depends mainly on the hardware contained in the current device. 
Generally we require 3 sensors for these calculations: an accelerometer, a magnetometer and a gyroscope.

![](images/axis_device.png)

The extension works by registering for notifications of device motion. When you register for updates you specify a series of options about the updates which the extension use to determine the algorithm that is used to calculate the device orientation, and also the information format that is returned.


### Features

- Provides access to the orientation of the device in 3D space
- Uses sensor fusion algorithms to combine information from the accelerometer, magnetometer and gyroscope
- Works across iOS and Android with the same code
- Sample project code and ASDocs reference


As with all our extensions you get access to a year of support and updates as we are continually improving and updating the extensions for OS updates and feature requests.

This Wiki forms the best source of detailed documentation for the extension along with the 
[asdocs](https://docs.airnativeextensions.com/asdocs/devicemotion). 

![](images/promo.png)
