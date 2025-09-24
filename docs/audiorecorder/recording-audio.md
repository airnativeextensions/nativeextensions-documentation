---
title: Recording Audio
sidebar_label: Recording Audio
---


## Start

To start recording audio you create an instance of the `AudioRecorderOptions` and call `start`.

The options allow you to specify the output file along with audio formats and other recording 
settings.

```actionscript
var file:File = File.applicationStorageDirectory.resolvePath( "recording.m4a" );

var options:AudioRecorderOptions = new AudioRecorderOptions();
options.filename = file.nativePath;
options.audioEncoding = AudioEncoder.AAC;

AudioRecorder.service.start( options );
```

:::note
The file extension of the recorded file is important. It should be an extension type that matches the output audio format. Some platforms may fail starting recording if the extension doesn't match.
:::



## Stop

Once you have finished recording you call the `stop` function to complete the recording.

```actionscript
AudioRecorder.service.stop();
```


## Events

There are several events that are dispatched at various points through the recording
defined by the `AudioRecorderEvent` class.

- `AudioRecorderEvent.START` : Dispatched when recording starts
- `AudioRecorderEvent.COMPLETE` : Dispatched when recording completes
- `AudioRecorderEvent.PROGRESS` : Dispatched at periodic intervals while recording


You listen for these events as below:

```actionscript
AudioRecorder.service.addEventListener( AudioRecorderEvent.START, audioRecorderEventHandler );
AudioRecorder.service.addEventListener( AudioRecorderEvent.COMPLETE, audioRecorderEventHandler );
AudioRecorder.service.addEventListener( AudioRecorderEvent.PROGRESS, audioRecorderEventHandler );
```

Example event handler:

```actionscript
function audioRecorderEventHandler( event:AudioRecorderEvent ):void
{
	trace( event.type );
}
```



