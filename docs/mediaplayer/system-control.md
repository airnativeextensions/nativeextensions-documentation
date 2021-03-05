---
title: System Control
sidebar_label: System Control
---


The system control interface allows your application to dispatch system wide events that other applications can respond to. These events are the default system control events for media and may control the active media player (most player respond to these events however it does depend on the application implementation).

This functionality is provided through the `SystemControl` interface, which can be accessed via `MediaPlayer.service.systemControl`.


Currently this is only supported on Android v19+.


## Support

You can check whether the current device is supported by checking the `isSupported` property.

```actionscript
if (MediaPlayer.service.systemControl.isSupported)
{
    // System control actions are supported
}
```


## Control

You can perform several operations that can control the current media player:

- `play()` : Dispatches the media play event;
- `pause()` : Dispatches the media pause event;
- `next()` : Dispatches the media next track event;
- `previous()` : Dispatches the media previous track event;
- `playPause()` : Dispatches the media play pause event to toggle the play state;


For example, to pause the active media:

```actionscript
if (MediaPlayer.service.systemControl.isSupported)
{
    MediaPlayer.service.systemControl.pause();
}
```

