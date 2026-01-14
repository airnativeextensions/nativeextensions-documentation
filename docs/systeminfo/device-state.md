---
title: Device State
---

You can access cetain properties of the device state relating to power modes and locale information through the `DeviceState` interface 


## Time 

You can check if the device currently has the auto time preference checked with the `isAutoTimeEnabled` flag:

```actionscript
var isAutoTimeEnabled:Boolean = SystemInfo.instance.deviceState.isAutoTimeEnabled;
```

Similarly you can check if the device currently has the auto time zone preference checked:

```actionscript
var isAutoTimeZoneEnabled:Boolean = SystemInfo.instance.deviceState.isAutoTimeZoneEnabled;
```


## Device Idlde Mode

The `isDeviceIdleMode` flag returns `true` if the device is currently in idle mode.

This happens when a device has been sitting unused and unmoving for a sufficiently
long period of time, so that it decides to go into a lower power-use state.
This may involve things like turning off network access to apps.

```actionscript
var isDeviceIdleMode:Boolean = SystemInfo.instance.deviceState.isDeviceIdleMode;
```

You can listen for the `DeviceStateEvent.IDLE_MODE_CHANGED` to determine when the value of this flag changes:

```actionscript
SystemInfo.instance.deviceState.addEventListener( DeviceStateEvent.IDLE_MODE_CHANGED, idleModeChangedHandler );
```


## Power Save Mode

The `isPowerSaveMode` flag returns `true` if the device is currently in power save mode.
When in this mode, applications should reduce their functionality in order to conserve battery as much as possible.

```actionscript
var isPowerSaveMode:Boolean = SystemInfo.instance.deviceState.isPowerSaveMode;
```

You can listen for the `DeviceStateEvent.POWER_SAVE_MODE_CHANGED` to determine when the value of this flag changes:

```actionscript
SystemInfo.instance.deviceState.addEventListener( DeviceStateEvent.POWER_SAVE_MODE_CHANGED, powerSaveModeChangedHandler );
```
