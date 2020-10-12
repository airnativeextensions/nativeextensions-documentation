---
title: Migrating from version 1
sidebar_label: Migrating from version 1
---

Version 2 completely changes the way media players are created and displayed. Migration is simple as laid out below. 

The major difference is that you now will create an `MediaPlayerView` instance and use this to configure, load and control media playback. Whereas you used to only have access to a single player, you can now create multiple and use as required. This means that you will need to hold onto an instance of your `MediaPlayerView` to set properties, listen for events, load, and control media playback.


## Dependencies

There are new ANE dependencies with version 2. In particular the Android support libraries are now required. Check the details in the [Add the Extension](add-the-extension) section.



## Creating a Player

Previously there was only one instance of a player handled internally to the ANE. You now have to retrieve a reference to a player and hold onto a reference, by changing any calls to `createPlayer` to the new `createPlayerView`.

So the following code:

```actionscript
var path:String = "...";
var view:Rectangle = new Rectangle( 0, 0, stage.stageWidth, 480 );

MediaPlayer.service.createPlayer(
        path,
        view.x,
        view.y,
        view.width,
        view.height,
        false,
        MediaPlayer.CONTROLS_NONE,
        false 
);
```

becomes:

```actionscript
var path:String = "...";
var view:Rectangle = new Rectangle( 0, 0, stage.stageWidth, 480 );

var player:MediaPlayerView = MediaPlayer.service.createPlayerView(
        new MediaPlayerOptions()
            .setViewport( view )
            .showControls( false )
);
player.load( path );
```

>
> Note: we have separated the loading call (`load()`) from the creation (`createPlayerView()`). This means you no longer need to pass the path when creating a player. However you can call load immediately if you wish initialise your player with media.
>


## Events

Events are now dispatched by the `MediaPlayerView` instance rather than from the extension `service`.

So for example the following events listeners:

```actionscript
MediaPlayer.service.addEventListener( MediaPlayerEvent.COMPLETE, completeHandler );
MediaPlayer.service.addEventListener( MediaProgressEvent.PROGRESS, progressHandler );
MediaPlayer.service.addEventListener( MediaErrorEvent.ERROR, errorHandler );
```

should now be attached to your `player` instance:

```actionscript
player.addEventListener( MediaPlayerEvent.COMPLETE, completeHandler );
player.addEventListener( MediaProgressEvent.PROGRESS, progressHandler );
player.addEventListener( MediaErrorEvent.ERROR, errorHandler );
```




## Control

Playback control is now controlled through the `player` instance. 

To start playback of your video:

```actionscript
MediaPlayer.service.play();
```

becomes:


```actionscript
player.play();
```

Similarly for the other playback controls such as:

- `pause()`
- `stop()`


## Resize

Player resizing is now done with the `resize` function on the player.


```actionscript
MediaPlayer.service.resize( 0, 0, stage.stageWidth, 500 );
```

Becomes:

```actionscript
player.resize( 0, 0, stage.stageWidth, 500 );
```



## Destroying the player


Previously calling `removePlayer()` would remove and destroy the player. This is now changed to the clearer `destroy()` function on the player instance.

So

```actionscript
MediaPlayer.service.removePlayer();
```

becomes:

```actionscript
player.destroy();
```

After you call `destroy()` on a player instance the player will no longer function. You should remove all event listeners and clear any references to this object. If you need to use a player again, then you'll need to call `createPlayerView()` again to create a new player instance.

