---
title: Sound Pool
sidebar_label: Sound Pool
---

A SoundPool is a collection of samples that can be loaded into memory. It allows you to play short sound effects and samples. The sounds are loaded into memory for low-latency playback.

This is well suited to short sound effects and playback where trigger time is important. 
If you want to playback longer sounds and music look at the [AudioPlayer](audio-player) class for a more complete audio playback solution.
Sounds played through the sound pool may not complete if they are too long. 



## Creating Sounds

When dealing with the sound pool you will use the `SoundPool` functionality to create instances of a `Sound` and use this to load and play sounds.

To create a `Sound` call `createSound()`:

```actionscript
var sound:Sound = MediaPlayer.service.soundPool.createSound();
```

>
> Note: This is the `com.distriqt.extension.mediaplayer.sound.Sound` class and not `flash.media.Sound`. 
> We have used the same name to be able to quickly replace sounds in your application with the native equivalent.
>



## Loading

To load a sound you call the `loadFile` function and pass a reference to a file on the device.

```actionscript
var soundFile:File = File.applicationDirectory.resolvePath("assets/explosion.mp3");

sound.loadFile( soundFile );
```

Loading a file will dispatch one of two events:
- `Event.COMPLETE`: If the load was completed successfully and the sound is now available in memory for playback;
- `IOErrorEvent.IO_ERROR`: If the load failed either due to format or other issues with the file.

The `loadFile` call may also throw an `Error` if the file doesn't exist.


```actionscript
var soundFile:File = File.applicationDirectory.resolvePath("assets/explosion.mp3");

sound.addEventListener( Event.COMPLETE, sound_completeHandler );
sound.addEventListener( IOErrorEvent.IO_ERROR, sound_errorHandler );
sound.loadFile( soundFile );

function sound_completeHandler( event:Event ):void 
{
    // Sound is loaded and ready for playback
}

function sound_errorHandler( event:IOErrorEvent ):void 
{
    // An error occurred
}
```



## Controlling Playback

Once a sound is loaded you can call `play()` to play the sound:

```actionscript
sound.play();
```


To stop a sound call `stop()`:

```actionscript
sound.stop();
```


## Unloading

Once you have finished with a sound and never plan to use it again or if you wish to clear memory resources associated with a sound you can call `unload()`.

```actionscript
sound.unload();
```

Once a sound has been unloaded the `Sound` instance is no longer valid. You will need to create a new sound and load a file again.





## Fallback

If the device doesn't support native sound pool implementation a fallback implementation will be used which uses the `flash.media.Sound` implementation to playback sounds.

You can check what implementation will be used by checking the `isSupportedNatively` flag on the sound pool. If this is `true` then the native implementation will be used and if it is `false` then the `flash.media.Sound` implementation will be used. 

>
> Currently only Android has a native implementation 
>




## Migrating from flash.media.Sound


### Loading

Loading a sound using the flash.media.Sound class:

```actionscript
var effect:Sound = new Sound();
effect.addEventListener( Event.COMPLETE, sound_loadCompleteHandler );
effect.addEventListener( IOErrorEvent.IO_ERROR, sound_errorHandler );
effect.load( new URLRequest( "sounds/effect.mp3" ));

function sound_loadCompleteHandler( event:Event ):void 
{
    effect.play();
}
```

Becomes the following using the `com.distriqt.extension.mediaplayer.sound.Sound` class:

```actionscript
var effect:Sound = MediaPlayer.service.soundPool.createSound();
effect.addEventListener( Event.COMPLETE, sound_loadCompleteHandler );
effect.addEventListener( IOErrorEvent.IO_ERROR, sound_loadErrorHandler );
effect.loadFile( File.applicationDirectory.resolvePath("sounds/effect.mp3"));

function sound_loadCompleteHandler( event:Event ):void 
{
    effect.play();
}
```


### Playback

```actionscript
var loops:int = 1;
var transform:SoundTransform = new SoundTransform();

var channel:SoundChannel = effect.play( 0, loops, transform );
```

becomes (still using flash.media.SoundTransform):

```actionscript
var loops:int = 1;
var transform:SoundTransform = new SoundTransform();

effect.play( loops, transform );
```


### Stopping

Stopping a sound using flash requires the sound channel:

```actionscript
channel.stop();
```

This is simplified to using the sound instance:

```actionscript
effect.stop();
```


### Events

The Event.COMPLETE and IOErrorEvent.IO_ERROR are both dispatched from the sounds.

There is no way to detect the end of playback with the sound pool.

























