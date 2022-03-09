---
title: Audio Player
sidebar_label: Audio Player
---

The Audio Player can be used to play back audio files using the native audio player. 

Using the native audio player gives you access to a high performance player that allows
streaming from http sources and playback of music and audio files packaged with your 
application.

Additionally it allows playback of [audio in the background](audio-player---background-audio.md).

Here we will cover the basics of creating and using an `AudioPlayer` instance.



## Create a Player

To create a player use the `createAudioPlayer` function. This function returns an instance of the `AudioPlayer` class that you will use as the main interface to control the audio playback.

```actionscript
var player:AudioPlayer = MediaPlayer.service.createAudioPlayer(); 
```

This will create a default audio player that you can use to load and playback audio files.
There are a series of options available when you create a player through the `AudioPlayerOptions` class,
for example to enable background audio playback you create an instance of this class and enable background audio,
and pass this instance to the `createAudioPlayer` function:

```actionscript
var options:AudioPlayerOptions = new AudioPlayerOptions()
    .enableBackgroundAudio();

var player:AudioPlayer = MediaPlayer.service.createAudioPlayer( options ); 
```


> You can create multiple players to playback different audio files simultaneously and control their playback individually


Once you have created the player you will need to load a file into the player, which will prepare the player for playback loading the file as neccessary.

For example, to load a file from the `applicationStorageDirectory` named `audio-file.mp3`:

```actionscript
var file:File = File.applicationStorageDirectory.resolvePath("audio-file.mp3");

player.load( file.nativePath );
```



## Playing Audio

Once you have created an `AudioPlayer` instance and called `load` to specify the audio file, playing the audio is simply a matter of calling `play`

```actionscript
player.play();
```

The player will dispatch the following events:

- `AudioPlayerEvent.COMPLETE`: When the playback of the audio is complete (reaches the end);
- `AudioPlayerEvent.PAUSED`: When the playback of the audio is paused (either from calling pause or user interaction with controls);
- `AudioPlayerEvent.PLAYING`: When the playback of the audio has started or resumes;
- `MediaErrorEvent.ERROR`: If an error occurred reading or playing the file, check the values in the `MediaErrorEvent` for more information on the error that occurred.


```actionscript
player.addEventListener( AudioPlayerEvent.COMPLETE, audioPlayer_completeHandler );
player.addEventListener( MediaErrorEvent.ERROR, audioPlayer_errorHandler );

function audioPlayer_errorHandler( event:MediaErrorEvent ):void
{
    trace( "error: [" + event.code + "] " + event.description );
}

function audioPlayer_completeHandler( event:AudioPlayerEvent ):void
{
    trace( "complete" );
}
```


To **pause** playback you can call the `pause` function on the player.

```actionscript
player.pause();
```

This will pause playback but not change the current playback position, so calling play again will resume play from the same position.


To change the current playback position you can call `seek` and pass the new playback position.

```actionscript
player.seek( 10.2 );
```



## Playback Speed 

The playback speed can be controlled by using the `setPlaybackSpeed` function. In order for this functionality to work however you must first have enabled the player to support changing the playback speed by enabling in the player options.


```actionscript
var options:AudioPlayerOptions = new AudioPlayerOptions()
    .enablePlaybackSpeed();

var player:AudioPlayer = MediaPlayer.service.createAudioPlayer( options ); 
```

Once you have enabled the playback speed option you can call `setPlaybackSpeed`, the speed should be a value between `0.5` and `2`:

```actionscript
player.setPlaybackSpeed( 0.5 );
```



## Headphones

When headphones are plugged in the audio will continue playing through the headphones. 
However when they are removed the standard process is that audio will be paused. 

If you wish to alter this behaviour the `AudioPlayerEvent.AUDIO_BECOMING_NOISY` will be dispatched at this point.
This event is dispatched when the application audio would become "noisy", for example the headphones were removed and play would continue through the device speakers. However instead the system automatically pauses playback and you can use this event to trigger playback again. 


```actionscript
player.addEventListener( AudioPlayerEvent.AUDIO_BECOMING_NOISY, audioBecomingNoisyHandler );

function audioBecomingNoisyHandler( event:AudioPlayerEvent ):void 
{
    player.play();
}
```


## Audio Interruptions

Interuptions may occur when a user receives a phone call or when another app requests audio focus.

You are expected to be a "good app citizen" and not continue playing audio in these scenarios so you should listen for the `AudioPlayerEvent.INTERRUPTION_START` event on your audio player and ensure that you respond appropriately, pausing any active playback as a minimum.


```actionscript
player.removeEventListener( AudioPlayerEvent.INTERRUPTION_START, interruptionHandler );

function interruptionHandler( event:AudioPlayerEvent ):void
{
    // Respond to audio interruption
    player.pause();
}
```

You may also receive a `AudioPlayerevent.INTERRUPTION_END`, depending on the circumstances, to signal the end of the interruption. This event is not guaranteed to be delivered on all platforms and in all scenarios, so it can be used but do not rely on it.

```actionscript
player.removeEventListener( AudioPlayerEvent.INTERRUPTION_END, interruptionEndHandler );

function interruptionEndHandler( event:AudioPlayerEvent ):void 
{
    // Application has regained audio focus and can resume or start playback
}
```


## Other Applications

If you play music in your application it is a good idea to check whether there is another application currently playing audio before starting your own audio. For example if there is a background music player application actively playing music.

You can use the `isOtherAudioPlaying` flag to check this in your application:

```actionscript
if (MediaPlayer.service.isOtherAudioPlaying)
{
    // Other application is playing audio
}
```

In this case it is generally advised to disable your audio or at least any music that your application may play.






