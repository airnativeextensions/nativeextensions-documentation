---
title: Text to Speech
sidebar_label: Text to Speech
---


All text-to-speech functionality is handled through the `TextToSpeech` interface which can be accessed through the `tts` property on the main extension: `Speech.instance.tts`.


## Checking for support

You can check whether text to speech functionality is available on the current device by checking the `isSupported` property:

```actionscript
if (Speech.instance.tts.isSupported)
{
    // TTS functionality is available on this device
}
```



## Initialise

You will need to initialise the Text to Speech functionality by calling the `initialise()` function and awaiting the result.

You can await the result either through the callback function:

```actionscript
Speech.instance.tts.initialise(
        function ( success:Boolean ):void
        {
            trace( "initialise complete:  " + success )
        } 
);
```


Or via standard events:
- `TextToSpeechEvent.INITIALISE_SUCCESS`: If the text to speech functionality was initialised successfully;
- `TextToSpeechEvent.INITIALISE_ERROR`: If an error occurred;


```actionscript
Speech.instance.tts.addEventListener( TextToSpeechEvent.INITIALISE_SUCCESS, initialiseSuccessHandler );
Speech.instance.tts.addEventListener( TextToSpeechEvent.INITIALISE_ERROR, initialiseErrorHandler );

Speech.instance.tts.initialise();

function initialiseSuccessHandler( event:TextToSpeechEvent ):void 
{

}

function initialiseErrorHandler( event:TextToSpeechEvent ):void 
{
    
}
```




## Speak

To use the text to speech output call the `speak()` method passing in an instance of the `Utterance` class. This class represents a series of spoken words and access to any available options. 

As a minimum you need to pass the text to be spoken to the constructor of the `Utterance` class:

```actionscript
var utterance:Utterance = new Utterance( "Hello!" );
```

Then to initiate this output:

```actionscript
Speech.instance.tts.speak( utterance );
```





## Shutdown

If you no longer require text to speech functionality you can call `shutdown()` to release any allocated resources and stop any current output. Once you call this method you will need to initialise the TTS functionality again.

```actionscript
Speech.instance.tts.shutdown();
```

This will also terminate any output currently in progress.

