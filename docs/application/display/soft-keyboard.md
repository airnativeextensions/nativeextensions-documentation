---
title: Soft Keyboard
sidebar_label: Soft Keyboard
---


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


The keyboard functionality is accessed through the `Keyboard` interface, via `Application.service.keyboard`.

If you plan on using the keyboard functionality in your application, we suggest you call in the `init()` function on the `Application.service.keyboard` instance some time before attempting to access any of the functionality. This will initialise the internal listeners and ensure you have a valid initial state. 

```actionscript
Application.service.keyboard.init();
```

You can do this alongside your display mode, eg :

```actionscript
Application.service.display.setDisplayMode( DisplayMode.FULLSCREEN );
Application.service.keyboard.init();
```



## Keyboard Information


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



## Show

>
> Android only
>

On Android we can attempt to force show the keyboard. This can be useful in some scenarios where the keyboard fails to show in AIR, especially when changing focus between stage text input fields.

To show the keyboard, simply call `show()`:

```actionscript
Application.service.keyboard.show();
```


### Notes

If you call this while the keyboard is being shown, this may cause the keyboard to be hidden. This is due to the nature of the native call being a "toggle" more than a force show, so if we fail to detect that the keyboard has been triggered from a different source we may inadvertently trigger a toggle to hide the keyboard.


Related issues:

- https://github.com/BowlerHatLLC/feathersui-starling/issues/1505
- https://github.com/Gamua/Adobe-Runtime-Support/issues/535
- https://github.com/Gamua/Adobe-Runtime-Support/issues/109
- https://github.com/Gamua/Adobe-Runtime-Support/issues/255