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




## Stop listening

Once you have completed your recognition process you must call `stopListening()` to end the audio session and stop the speech recognition task.


```actionscript
Speech.instance.recogniser.stopListening();
```