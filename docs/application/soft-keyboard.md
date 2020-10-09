---
title: Soft Keyboard
sidebar_label: Soft Keyboard
---


## Keyboard Information

>
> **Experimental**
>

This functionality is a native implementation for getting access to the keyboard size and activation events.

>
> **In order to use this functionality on Android you must use this extension to set a [display mode](display). If you don't set a display mode through this extension then the keyboard information may not be correct.**
>
> ```actionscript
> Application.service.display.setDisplayMode( DisplayMode.FULLSCREEN );
> ```
>


The keyboard information is accessed through the `Keyboard` interface, via `Application.service.keyboard`.



### Keyboard Size

You can access the position and size of the keyboard through the interface accessors:

```actionscript
var keyboardY:int = Application.service.keyboard.y;
var keyboardHeight:int = Application.service.keyboard.height;
```

These values are in native pixel dimensions, so if you are using scaling you'll need to take that into account.



### Activation events

You can get notified when the keyboard activates and deactivates through the `flash.events.SofyKeyboardEvent`s:

```actionscript
Application.service.keyboard.addEventListener( SoftKeyboardEvent.SOFT_KEYBOARD_ACTIVATE, keyboard_activateHandler );
Application.service.keyboard.addEventListener( SoftKeyboardEvent.SOFT_KEYBOARD_DEACTIVATE, keyboard_deactivateHandler );
```

These are global events and will be dispatched independent of the method that triggered the keyboard.




### Android IMMERSIVE mode considerations

If you are using Android's immersive mode, you may wish to display the navigation bar when the keyboard appears. By default the navigation bar is always hidden in immersive mode, which will hide the default navigation controls even when the keyboard is displayed. This can easily be overcome with the following code in your keyboard activate and deactivate handlers:

```actionscript
function keyboard_activateHandler( event:SoftKeyboardEvent ):void
{
    // Show the navigation bar
    var visibility:int = Application.service.display.getSystemUiVisibility();
    Application.service.display.setSystemUiVisibility(
            visibility & ~AndroidSystemUiFlags.SYSTEM_UI_FLAG_HIDE_NAVIGATION
    );
}
		
function keyboard_deactivateHandler( event:SoftKeyboardEvent ):void
{
    // Return to previous display mode (will adjust navigation bar if required)
    Application.service.display.setDisplayMode( DisplayMode.IMMERSIVE );
}
```


