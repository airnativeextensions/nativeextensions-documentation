---
title: Status Bar
sidebar_label: Status Bar
---

## Status Bar

The status bar is the small area at the top of a device that contains information such as the battery level, network connectivity and notification icons.


### Style

You can control the style of the status bar by using the `Display.setStatusBarStyle()` function. This allows you to set whether the content (icons, time etc) is light or dark, allowing you to better fit the status bar content with your application.

This function takes a `StatusBarStyle` constant as the parameter:

- `StatusBarStyle.LIGHT`: Light (white) icons and status bar content
- `StatusBarStyle.DARK`: Dark (black/grey) icons and status bar content
- `StatusBarStyle.DEFAULT`: Differs between the platforms, is `DARK` on iOS and `LIGHT` on Android


```actionscript
Application.service.display.setStatusBarStyle( StatusBarStyle.LIGHT );
```

>
> Please note the older styles defined in `IOSStatusBarStyles` have been deprecated in favour of the `StatusBarStyle` constants however the deprecated values will still work when passed into this function.
>


### Hide

On iOS, you can hide the status bar by using the `Display.setStatusBarHidden()` function:

```actionscript
Application.service.display.setStatusBarHidden( false );
```

and display it again using:

```actionscript
Application.service.display.setStatusBarHidden( true );
```


### Colour

On Android version 21 (Lollipop) and newer you can set the background colour of the status bar using the `Display.setStatusBarColour()` function.

The following example shows setting the colour to Red.

```actionscript
Application.service.display.setStatusBarColour( 0xFF0000 );
```

You can also control the transparency with the second parameter being the alpha value between 0 and 1.

```actionscript
Application.service.display.setStatusBarColour( 0xFF0000, 0.4 );
```


### Height 

If you need to know the height of the status bar in pixels you can use the `getStatusBarHeight()` function:

```actionscript
var statusBarHeight:int = Application.service.display.getStatusBarHeight();
```

>
> Note: you may also need to consider the [display cutout](display/cutouts.md) on modern devices.
>


## Navigation Bar

Android contains a navigation bar towards the bottom of the screen, containing the back and menu buttons but varying depending on the version and manufacturer. 


You can set the colour and style of using  `setNavigationBarColour()` and `setNavigationBarStyle()` respectively.

To set the colour:

```actionscript
Application.service.display.setNavigationBarColour( 0xFF0000 );
```

To set the style, you must use one of the constants defined in `NavigationBarStyle`:

- `NavigationBarStyle.LIGHT`: Light navigation bar style will make the icons light for use on dark backgrounds;
- `NavigationBarStyle.DARK`: Dark navigation bar style will make the icons dark for use on light backgrounds


```actionscript
Application.service.display.setNavigationBarStyle( NavigationBarStyle.LIGHT );
```

