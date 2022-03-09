---
title: Media Player - Loading Media
sidebar_label: Media Player - Loading Media
---

Once you have [created a `MediaPlayerView`](media-player---create.md) instance then you will need to load your media into the player. In the following code `player` is assumed to be the `MediaPlayerView` instance you created:

```actionscript
var player:MediaPlayerView = MediaPlayer.service.createPlayerView(
        new MediaPlayerOptions()
                .setViewport( new Rectangle( 0, 0, 100, 100 ) )
);
```



Loading media is done with the `load()` function. This function takes a `path` parameter. 

```actionscript
player.load( path );
```

The path can either be a path to a local file or a url to a remote file. For example a local video:

```actionscript
var path:String = File.applicationStorageDirectory.resolvePath( "video.mp4" ).nativePath;
```

Or a remote file:

```actionscript
var path:String = "http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4";
```



