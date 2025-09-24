---
title: Playback
sidebar_label: Playback
---

## Playback Recorded Audio

### Native Playback

We recommend playback using the native [audio player](https://docs.airnativeextensions.com/docs/mediaplayer/audio-player) from the MediaPlayer extension:

```actionscript
var file:File = ...; // The file reference for the recording

var player:AudioPlayer = MediaPlayer.service.createAudioPlayer();
player.load( file.nativePath );
player.play();
```


### AIR Playback

You should be able to playback the recording using the standard AIR `NetStream` class. This can depend on the format you recorded the audio in as there are particular formats that AIR playback supports. 

For example:

```actionscript
var file:File = ...; // The file reference for the recording

var _nc:NetConnection = null;
var _ns:NetStream = null;
		
_nc = new NetConnection();
_nc.connect(null);

_ns = new NetStream( _nc );
_ns.client = new Object();
_ns.play( "file://" + file.nativePath );
```

:::note
The `flash.media.Sound` class generally won't playback these files as they aren't mp3 encoded
:::
