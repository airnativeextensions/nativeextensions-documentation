---
title: Media Player - Control Playback
sidebar_label: Media Player - Control Playback
---


## Controlling playback


To start playback of a player call the `play()` function:

```actionscript
player.play();
```


To pause playback call the `pause()` function:

```actionscript
player.pause();
```


To stop playback and reset the player position to the beginning call `stop()`:

```actionscript
player.stop();
```


To move the current playback position use the `seek()` function and pass required new playback position :

```actionscript
player.seek( time );
```  

where `time` is the new playback position in seconds. The time must be less than the total duration of the media, otherwise nothing is done.




## Fullscreen

You can change the player view to display as a fullscreen view by calling the `setFullscreen()` function.

```actionscript
player.setFullscreen( true );
```

Similarly you can minimise the fullscreen view using the same process:

```actionscript
player.setFullscreen( false );
```


You can also listen for the fullscreen events, to determine when the view enters and exits fullscreen. These will be dispatched if the user caused the fullscreen change or if it occurred through the programatic method above.

```actionscript
player.addEventListener( MediaPlayerEvent.FULLSCREEN_ENTER, fullscreenEnterHandler );
player.addEventListener( MediaPlayerEvent.FULLSCREEN_EXIT, fullscreenExitHandler );
				
function fullscreenEnterHandler( event:MediaPlayerEvent ):void
{
    trace( "fullscreen enter" );
}

function fullscreenExitHandler( event:MediaPlayerEvent ):void
{
    trace( "fullscreen exit" );
}
```


