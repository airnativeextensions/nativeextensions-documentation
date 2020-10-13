---
title: Defer System Gestures
sidebar_label: Defer System Gestures
---

On iOS 11 Apple has introduced a range of system gestures to interact with the OS without having to use the physical home button, such as to display Control Center. 

These system gestures can interfere with your application gestures, in which case iOS gives you the opportunity to defer these gestures allowing your application to grab these interactions. By deferring the gesture the OS will instead show a small tab, indicating the presence of the system UI without fully extending it. Your user can then repeat the gesture to get to the normal system UI, if they still require.

Whenever possible, you should allow the system gestures to take precedence. However, immersive apps can set this property to make app-defined gestures take precedence over the system gestures.


## Deferring

In order to defer the system gestures you will need to indicate the edges of the screen for which you want your gestures to take precedence over the system gestures. This is done by calling the `setDeferredScreenEdges` function and passing the `ScreenEdges` you require to defer.


For example to defer the BOTTOM screen edge system gesture:

```actionscript
SystemGestures.service.setDeferredScreenEdges( ScreenEdges.BOTTOM );
```

To set multiple edges you should bitwise OR the `ScreenEdges` values together, eg: `ScreenEdges.BOTTOM | ScreenEdges.LEFT`

For example to defer the BOTTOM and LEFT screen edges system gestures:

```actionscript
SystemGestures.service.setDeferredScreenEdges( ScreenEdges.BOTTOM | ScreenEdges.LEFT );
```

>
> If you wish to disable all screen edge gestures use the `ScreenEdges.ALL` value: `SystemGestures.service.setDeferredScreenEdges( ScreenEdges.ALL )`
>


## Resetting

To enable system gestures again you can call:

```actionscript
SystemGestures.service.setDeferredScreenEdges( ScreenEdges.NONE );
```



