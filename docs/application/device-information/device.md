---
title: Device Information
sidebar_label: Device Information
---

Device functionality allows you to retrieve information about the device.

There are many pieces of information available through the Device interface that allow 
you to determine what device you are currently running on, including things like the operating system version and the device model. 


```actionscript
trace( "DEVICE INFO ============================" );
trace( " name:         " + Application.service.device.name );
trace( " brand:        " + Application.service.device.brand );
trace( " manufacturer: " + Application.service.device.manufacturer );
trace( " device:       " + Application.service.device.device );
trace( " model:        " + Application.service.device.model );
trace( " yearClass:    " + Application.service.device.yearClass );
trace( " product:      " + Application.service.device.product );
```


### Locale

The device locale settings can be retrieved through the `locale` accessor:

```actionscript
var locale:Locale = Application.service.device.locale
```

This object contains information about the device locale:

- `locale.country`: The country/region code for this locale, which should either be the empty string, an uppercase ISO 3166 2-letter code, or a UN M.49 3-digit code;
- `locale.language`: The language code of this Locale, or the empty string if none is defined





### Paths

The functionality also includes some access to some system dependant paths, 
such as the [`getFilesDir()`](https://developer.android.com/reference/android/content/Context#getFilesDir()) and [`getExternalFilesDir()`](https://developer.android.com/reference/android/content/Context#getExternalFilesDirs(java.lang.String)) on Android.


```actionscript
trace( "PATHS ==================================" );
trace( "files dir:      " + Application.service.device.getFilesDir() );
trace( "ext files dir:  " + Application.service.device.getExternalFilesDir() );
```

The returned values are native paths to common storage locations for Android applications. Generally no additional file permissions are required to read and write to these locations.




### Time Zone

You can access information about the current system time zone on the device using the `localTimeZone` accessor:


```actionscript
var timezone:TimeZone = Application.service.device.localTimeZone;
```

The `TimeZone` class represents a time zone offset indicating the standard time policies for a geopolitical region.

Time zones have identifiers like `"America/Los_Angeles"` which can be accessed through the `id` property:

```actionscript
var timezoneId:String = Application.service.device.localTimeZone.id;
```

You can also access the offset from UTC using the `utcOffset` property. This gives you the amount of time in milliseconds to add to UTC to get standard time in this time zone.


```actionscript
var utcOffset:Number = Application.service.device.localTimeZone.utcOffset;
```


### Automatic Time

You can check whether the user has enabled automatic time / time zone settings on their device using the `isAutoTimeEnabled()` and the `isAutoTimeZoneEnabled()`.

```actionscript
var autoTime:Boolean = Application.service.device.isAutoTimeEnabled();
```

This can be useful if you are attempting to check the accuracy of the time on the device (for example, to check if the user is attempting to cheat some time based operations in your game or app).


> **Available on Android only.**
> 
> These will return `false` on all unsupported platforms.


### Year Class

[Year Class](year-class)


### Phone Number 

[Phone Number](phone-number)


### Operating system

[Operating System](operating-system)


### Device State

[Device State](device-state)


### Display Metrics

[Display Metrics](display-metrics)


### Device Orientation

[Device Orientation](orientation-events)

