---
title: Speech Recognition
sidebar_label: Speech Recognition
---


All speech recognition functionality is handled through the `SpeechRecogniser` interface which can be accessed through the `recogniser` property on the main extension: `Speech.instance.recogniser`.


## Start listening 

To process audio from the microphone call the `startListening()` method. This will activate an audio recording session and start passing the audio through the speech recogniser.

This process may dispatch the following events:
- `SpeechRecogniserEvent.RESULT`: When the recogniser decodes audio to text;
- `SpeechRecogniserEvent.ERROR`: If an error occurs;
 


```actionscript
Speech.instance.recogniser.addEventListener( SpeechRecogniserEvent.RESULT, resultHandler );
Speech.instance.recogniser.addEventListener( SpeechRecogniserEvent.ERROR, errorHandler );
Speech.instance.recogniser.startListening();

function resultHandler( event:SpeechRecogniserEvent ):void
{
    trace( "result: " + event.result.formattedString );
}

function errorHandler( event:SpeechRecogniserEvent ):void
{
    trace( "errorHandler [" + event.errorCode + "]:" + event.error )
}
```

`startListening()` will return a `Boolean` value, indicating whether the process was started successfully. It may return `false` if recognition is not supported or there was an error creating the audio session. (An error event may also be dispatched depending on the error).


On a `SpeechRecogniserEvent.RESULT` event there is a `result` property which is an instance of the `SpeechRecogniserResult` class. This class contains a `formattedString` representing all the detected speech in the audio. It also contains a `segments` array representing each of the individual detected words.


On a `SpeechRecogniserEvent.ERROR` there will be an `errorCode` that can be identified from the definitions in the `SpeechRecogniserError` class. 



## Options

Speech recognition has a few options you can set via an instance of the `SpeechRecogniserOptions` class passed as the parameter to the `startListening()` method.

```actionscript
var options:SpeechRecogniserOptions = new SpeechRecogniserOptions();

Speech.instance.recogniser.startListening( options );
```

Using the options you can control whether you prefer "on device" or "network" recognition:

```actionscript
var options:SpeechRecogniserOptions = new SpeechRecogniserOptions()
    .setPreferOnDevice( false );
```

The default prefers on device, so if you want to use network enabled speech recognition (generally more accurate) you should disable this option as above. 



## Listening

You can check the `isListening` flag at any point to determine if the extension is currently actively listening for speech.

```actionscript
if (Speech.instance.recogniser.isListening)
{
    // extension is listening
}
```



## Stop listening

Once you have completed your recognition process you must call `stopListening()` to end the audio session and stop the speech recognition task.


```actionscript
Speech.instance.recogniser.stopListening();
```

You can remove your event listeners at this point.

