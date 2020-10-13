---
title: Silent Switch
sidebar_label: Silent Switch
---

Currently this is only available for the iOS silent switch. It does not work with the 
Android muted states.

## Monitor the mute state

In order to be sure that you have the correct mute state registered you must monitor 
the mute state. Monitoring the mute state periodically starts a process that checks 
whether mute has been enabled on the device.

```actionscript
Volume.service.monitorMuteState( true );
```

You can stop this at any time:

```actionscript
Volume.service.monitorMuteState( false );
```


## Most Recent Mute state

The most recently detected mute state can be retrieved using the `isMuted()` function.

```actionscript
var isMuted:Boolean = Volume.service.isMuted();
```


## Listening for changes

Once you are monitoring the mute state, change events will be dispatched. You can 
react in your event handlers as you see fit. There are two events, `MUTED` and `UNMUTED`
representing the change to mute and unmuted respectively.

```actionscript
Volume.service.addEventListener( VolumeEvent.MUTED, mutedHandler );
Volume.service.addEventListener( VolumeEvent.UNMUTED, unmutedHandler );
```




