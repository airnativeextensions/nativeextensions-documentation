---
title: Media Player - Playback Events
sidebar_label: Media Player - Playback Events
---


There are 3 main types of events associated with the media player: status, progress and errors.


### Status Events

Status events are dispatched using the `MediaPlayerEvent` class. These events include playback status, (playing, paused, stopped etc), player ready event, completion event, and fullscreen events.

You add a listener to your `MediaPlayerView` instance to receive these events, for example to register for the `READY` events:

```actionscript
var player:MediaPlayerView = ...;

player.addEventListener( MediaPlayerEvent.READY, readyHandler );

function readyHandler( event:MediaPlayerEvent ):void 
{
    trace( "ready" );
}
```


### Progress Events

Progress events are dispatched using the `MediaProgressEvent` class. This class includes the current playback position and the total time of the media. 

It's dispatched approximately 5 times a second.

```actionscript
player.addEventListener( MediaProgressEvent.PROGRESS, progressHandler );

function progressHandler( event:MediaProgressEvent ):void
{
    trace( "progress: " + event.current + " / " +event.total );
}
```



### Error Events 

Error events are dispatched using the `MediaErrorEvent` class. 

This event will contain more information on the error, but generally it's either due to incorrect file path or a network problem (for network streamed media).


```actionscript
player.addEventListener( MediaErrorEvent.ERROR, errorHandler );

function errorHandler( event:MediaErrorEvent ):void
{
    trace( "error: "+ event.code + "::"+event.description );
}
```
