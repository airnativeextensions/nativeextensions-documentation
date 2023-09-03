---
title: Speech
hide_title: true
slug: /speech/
---

![](images/hero.png)

# Speech

The [Speech](https://airnativeextensions.com/extension/com.distriqt.Speech) extension 
gives access to Text-to-Speech and Speech-to-Text (speech recognition) functionality.


### Features:

- Speech recognition - attempts to listen to the microphone and convert audio to text
- Text to speech - converts text strings to spoken audio output
- Single API interface - your code works across supported platforms with no modifications
- Sample project code and ASDocs reference

As with all our extensions you get access to a year of support and updates as we are 
continually improving and updating the extensions for OS updates and feature requests.


## Documentation

The [documentation site](https://docs.airnativeextensions.com/docs/speech) forms the best source of detailed documentation for the extension along with the [asdocs](https://docs.airnativeextensions.com/asdocs/speech). 

Quick Example: 

```actionscript title="AIR"
Speech.instance.tts.initialise(
        function ( success:Boolean ):void
        {
            if (success)
            {
                Speech.instance.tts.speak( new Utterance( "Hello!" ) );
            }
        }
);
```

More information here: 

[com.distriqt.Speech](https://airnativeextensions.com/extension/com.distriqt.Speech)


## License

You can purchase a license for using this extension:

- [airnativeextensions.com](https://airnativeextensions.com/)


distriqt retains all copyright.


![](images/promo.png)



