---
title: Device Information - Display Metrics
sidebar_label: Device Information - Display Metrics
---

## Device State




### Power Save Mode

Recent releases of both iOS and Android have introduced a "power save mode" where applications should reduce their functionality in order to conserve battery as much as possible.

You can determine if the power save mode is active with the `isPowerSaveMode()` function, which returns `true` if the power save mode is currently active.

```actionscript
var powerSaveMode:Boolean = Application.service.device.isPowerSaveMode();
```

You can monitor changes of this state by listening for the `DeviceStateEvent.POWER_SAVE_MODE_CHANGED` event:

```actionscript
Application.service.device.addEventListener( DeviceStateEvent.POWER_SAVE_MODE_CHANGED, deviceStateEventHandler );

function deviceStateEventHandler( event:DeviceStateEvent ):void
{
    // power save mode changed
}
```


| Android | iOS |
| --- | --- |
| [images/device_powersave_android.png]] ](-[[images/device_powersave_ios.png) |




### Idle Mode

The idle mode indicates when a device has been sitting unused and unmoving for a sufficiently long period of time, so that it decides to go into a lower power-use state. 
This may involve things like turning off network access to apps. 

Currently the idle mode is only support on Android.

You can detect this with the `isDeviceIdleMode()` function, which returns `true` if the device is currently in idle mode.

```actionscript
var idleMode:Boolean = Application.service.device.isDeviceIdleMode();
```

You can monitor changes of this state by listening for the `DeviceStateEvent.IDLE_MODE_CHANGED` event:

```actionscript
Application.service.device.addEventListener( DeviceStateEvent.IDLE_MODE_CHANGED, deviceStateEventHandler );
		
function deviceStateEventHandler( event:DeviceStateEvent ):void
{
    // idle mode changed
}
```


#### Testing

You can use the `adb` command line to test the changing of this state. 

Using the following will send the device into the idle state:

```
adb shell dumpsys deviceidle force-idle
```

Using the following will bring the device out of the idle state:

```
adb shell dumpsys deviceidle step
```

Each of these commands should trigger the dispatch of the `DeviceStateEvent.IDLE_MODE_CHANGED`.






