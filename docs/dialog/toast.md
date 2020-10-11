---
title: Toast
sidebar_label: Toast
---


Displaying a toast is the simplest alert you can use. A toast is a small message displayed to the 
user with no interaction. You can use these to provide small pieces of information to your user, 
such as a background process completing.

It is a very simple dialog and requires no builder, simply call the `toast` function with the 
string you wish to display:

```actionscript
Dialog.service.toast( "An amazing toast" );
```


## Length

You can select either a long or short time for the toast to be displayed. A short toast will be displayed for approximately 2 seconds and a long toast approximately 4 seconds.

```actionscript
Dialog.service.toast( "An amazing toast", Dialog.LENGTH_LONG );
```

The default is a short toast (`Dialog.LENGTH_SHORT`).


## Colour

You can set the background colour of the toast by providing the third parameter to the function. This is an RGB value used for the background area of the toast.

```actionscript
Dialog.service.toast( "An amazing toast", Dialog.LENGTH_SHORT, 0xFF0000 );
```


### Alpha 

We have added the ability to set the alpha as well as the colour of the toast background. This is now the last parameter, for example to set the alpha to `0.5`:

```actionscript
Dialog.service.toast( "An amazing toast", Dialog.LENGTH_SHORT, 0xFF0000, Gravity.BOTTOM, 0.5 );
```



## Position

A standard toast notification appears near the bottom of the screen, centered horizontally. You can change the positioning by changing the `gravity` parameter to be one of:

- `Gravity.TOP` 
- `Gravity.MIDDLE` 
- `Gravity.BOTTOM`  (default)


For example to display a toast in the middle of the screen:

```actionscript
Dialog.service.toast( "An amazing toast", Dialog.LENGTH_SHORT, 0x333333, Gravity.MIDDLE );
```

