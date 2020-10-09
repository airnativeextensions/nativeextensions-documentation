---
title: Device Information - Year Class
sidebar_label: Device Information - Year Class
---


The current Android device list has around more than 10k different handsets. So it's hard to know how your application will perform on different devices. All having different amount of RAM, CPU speed, number of cores etc.

The **year class** is an attempt to categorise the device by placing it in a year where the device specifications would have placed it alongside the high-end devices. This allows you to easily modify the behavior of your application according the capabilities of the phone’s hardware. It is not neccessarily the year of manufacture or release of the device.

To retrieve this value use the `yearClass` property on the `Device` instance:

```actionscript
var year:int = Application.service.device.yearClass;
```

You can use this property to make decisions on the performance to attempt in your application, for example:

```actionscript
if (year >= 2013) 
{
    // Do advanced animation
}
else if (year > 2010) 
{
    // Do simple animation
}
else
{
    // Phone too slow, don't do any animations
}
```


## Implementation 

On Android this uses the "Device Year Class" provided by Facebook: https://github.com/facebook/device-year-class

On iOS this returns the year of release as Apple devices generally are high-end when released.
