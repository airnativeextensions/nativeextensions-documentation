---
title: Display - Display Metrics
sidebar_label: Display - Display Metrics
---


## Display Metrics

This allows you to get information about the display on the current device.

The `densityDpi` value is the 'bucket' DPI which is useful for scaling your UI.

The more accurate values are the `xdpi` and `ydpi` which provide the actual x and y
dpi for the device. 

The `screenHeight` and `screenWidth` represent the fullscreen pixel height and width 
of the device.

```actionscript
trace( "DISPLAY METRICS ========================" );
trace( "densityDpi:   " + Application.service.display.displayMetrics.densityDpi );
trace( "screenHeight: " + Application.service.display.displayMetrics.screenHeight );
trace( "screenWidth:  " + Application.service.display.displayMetrics.screenWidth );
trace( "xdpi:         " + Application.service.display.displayMetrics.xdpi );
trace( "ydpi:         " + Application.service.display.displayMetrics.ydpi );
trace( "nativeScale:  " + Application.service.display.displayMetrics.nativeScale );
```

These values are taken from the underlying APIs, in particular:

- Android Display Metrics:  https://developer.android.com/reference/android/util/DisplayMetrics.html
- iOS UIScreen + Custom class: https://developer.apple.com/reference/uikit/uiscreen?language=objc 

The iOS screen density is determined from a lookup and is not provided by the API.


### Native Scale

The `nativeScale` property is only valid on iOS. 

This value reflects the scale factor needed to convert from the default logical coordinate space into the device coordinate space of this screen. The default logical coordinate space is measured using points. For Retina displays, the scale factor may be 3.0 or 2.0 and one point can represented by nine or four pixels, respectively. For standard-resolution displays, the scale factor is 1.0 and one point equals one pixel.

This native scale property will change on an iOS device if the screen is put into it's "zoomed" display state and knowing this value can allow you to react accordingly.

