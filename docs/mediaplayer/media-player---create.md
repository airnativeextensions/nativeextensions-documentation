---
title: Media Player - Create
sidebar_label: Media Player - Create
---

## Media Player View

The `MediaPlayerView` represents an instance of a media player and it's view. This can be used to present a visible player in your application with playback controls.


### Create

You create an instance of a `MediaPlayerView` by calling the `createPlayerView` function and passing a `MediaPlayerOptions` instance. The options class is used to specify any options on the view, including it's initial size and the type of controls to display.

For example, the following will create a player with initial dimensions 100x100 located in the top left corner:

```actionscript
var player:MediaPlayerView = MediaPlayer.service.createPlayerView(
        new MediaPlayerOptions()
                .setViewport( new Rectangle( 0, 0, 100, 100 ) )
);
```

The coordinates here are native coordinates so if you are utilising stage scaling at all you must take that into account when specifying the size and position of the player.  



### Options

The options you pass to the creation function specify how the player will be displayed and some playback features. 


#### Auto Play

If you wish the video playback to commence as soon as the video is loaded set the `autoPlay` option to `true`:

```actionscript
var options:MediaPlayerOptions = new MediaPlayerOptions()
        setAutoPlay( true );
```



#### Controls

You specify whether to display the controls with the the `MediaPlayerOptions.controlsEnabled` option and the `showControls()` helper:

```actionscript
var options:MediaPlayerOptions = new MediaPlayerOptions()
        showControls();
```

The exact controls and appearance vary across different platforms and versions, as they match the native ui of the system. 


If you wish no controls to be displayed you can set this to `false`:

```actionscript
var options:MediaPlayerOptions = new MediaPlayerOptions()
        showControls( false );
```




#### Chaining

All the functions in the options class are designed to be chained to allow easy creation of options to pass to the `createPlayerView` function. This is so you can simply create a player in your code as below:

```actionscript
var player:MediaPlayerView = MediaPlayer.service.createPlayerView(
        new MediaPlayerOptions()
                .setViewport( new Rectangle( 0, 0, 100, 100 ) )
                .setBackgroundColour( 0xFFFFFFFF )
                .showControls()
);
```


This is the equivalent of the more traditional code below:

```actionscript
var options:MediaPlayerOptions = new MediaPlayerOptions();
options.viewport = new Rectangle( 0, 0, 100, 100 );
options.backgroundColour = 0xFFFFFFFF;
options.controlsEnabled = true;

var player:MediaPlayerView = MediaPlayer.service.createPlayerView( options );
```

You can use whichever method you choose.
