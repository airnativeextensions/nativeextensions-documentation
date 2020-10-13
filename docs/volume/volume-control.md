---
title: Volume Control
sidebar_label: Volume Control
---



## Retrieving and setting the volume


Retrieving the volume is as simple as calling the getVolume() function:

```actionscript
if (Volume.isSupported)
{
	var volume:Number = Volume.service.getVolume();
}
```


Similarly to set the volume:


```actionscript
if (Volume.isSupported)
{
	Volume.service.setVolume( 0.75 );
}
```


## Listening for change events

Listening to volume change events is achieved by calling `register` specifying the stream of interest. 
Volume events are dispatched when either the user changes the volume using the native controls, or by
pressing the volume buttons, or when you change the volume using the setVolume function.

```actionscript
if (Volume.isSupported)
{
	Volume.service.addEventListener( VolumeEvent.CHANGED, volumeChangedHandler );
	Volume.service.register();
}	

function volumeChangedHandler( event:VolumeEvent ):void
{
	trace( event.type + "::" +event.volume + " [" + event.stream + "]" );
}
```

You should make sure you call `unregister` when you are done listening to cleanup and remove any 
volume listening functions.

