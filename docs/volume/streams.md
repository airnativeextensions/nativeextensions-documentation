---
title: Streams
sidebar_label: Streams
---

## Android

Streams represent the different types of sound that can be generated from a device, inlcuding 
ring volumes, notifications, alarms and music. Most of the time you'll only be interested in 
the default music stream.

Android gives access to all the streams in the VolumeStream class.

On iOS there is only the music stream available to developers.

```actionscript
if (Volume.isSupported)
{
	var volume:Number = Volume.service.getVolume( VolumeStream.STREAM_MUSIC );
}	
```


On Android you can set the default stream that will get controlled by the volume keys. The default 
is generally the ring volume so you can call this function to change the default to be one of the 
other supported streams.

```actionscript
if (Volume.isSupported)
{
	Volume.service.setVolumeControlStream( VolumeStream.STREAM_MUSIC );
}
```