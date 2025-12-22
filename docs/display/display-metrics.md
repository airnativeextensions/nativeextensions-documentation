---
title: Display Metrics
sidebar_label: Display Metrics
---

This allows you to get information about the display on the current device.

The `densityDpi` value is the 'bucket' DPI which is useful for scaling your UI.

The more accurate values are the `xdpi` and `ydpi` which provide the actual x and y
dpi for the device. 

The `screenHeight` and `screenWidth` represent the fullscreen pixel height and width 
of the device.

```actionscript
trace( "DISPLAY METRICS ========================" );
trace( "densityDpi:   " + Display.instance.displayMetrics.densityDpi );
trace( "screenHeight: " + Display.instance.displayMetrics.screenHeight );
trace( "screenWidth:  " + Display.instance.displayMetrics.screenWidth );
trace( "xdpi:         " + Display.instance.displayMetrics.xdpi );
trace( "ydpi:         " + Display.instance.displayMetrics.ydpi );
trace( "scale:        " + Display.instance.displayMetrics.scale );
trace( "nativeScale:  " + Display.instance.displayMetrics.nativeScale );
```

These values are taken from the underlying APIs, in particular:

- Android Display Metrics:  https://developer.android.com/reference/android/util/DisplayMetrics.html
- iOS UIScreen + Custom class: https://developer.apple.com/reference/uikit/uiscreen?language=objc 

The iOS screen density is determined from a lookup and is not provided by the API.

:::note iOS
If you encounter an issue with a newer device not reporting information correctly, firstly check if there is an update available and otherwise please let us know. 
We need to update the lookup data with each new device Apple manufactures.
:::



### Native Scale

The `scale` & `nativeScale` property are only valid on iOS. 

These value reflects the scale factor needed to convert from the default logical coordinate space into the device coordinate space of this screen. The default logical coordinate space is measured using points. For Retina displays, the scale factor may be 3.0 or 2.0 and one point can represented by nine or four pixels, respectively. For standard-resolution displays, the scale factor is 1.0 and one point equals one pixel.

This native scale property will change on an iOS device if the screen is put into it's "zoomed" display state and knowing this value can allow you to react accordingly.

The following logic is useful when checking for the zoomed state of a device:

```as3
function isZoomed( displayMetrics:DisplayMetrics ):Boolean
{
    return displayMetrics.scale < displayMetrics.nativeScale;
}

if (isZoomed( Application.service.device.displayMetrics ))
{
    // zoomed state
}
```





