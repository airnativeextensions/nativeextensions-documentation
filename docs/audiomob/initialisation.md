---
title: Initialisation
---

This section details the process to setup and initialise the extension in your application.


## Sign up to the Developer Dashboard

If you don’t already have an account for the Audiomob Developer Dashboard you’ll need to [create one](https://developer.audiomob.com/signup).

## Create an Asset on the Developer Dashboard

Once you log onto the [Developer Dashboard](https://developer.audiomob.com/), press ‘Create new game’ and enter your game details. 

- Android App Bundle ID and Google Play Store ID are required for the Android SDK integration
- iOS App Bundle ID and Apple App Store ID are required for the iOS SDK integration. 

## Find your API key

On the Developer Dashboard, at the top right corner, click API Key and it will be copied to your clipboard. You will need this API key to initialise the Android SDK.


## Initialise

At application start up you should initialize the Audiomob extension by passing your API key, and background mode setting. 

```actionscript
Audiomob.instance.initialise( API_KEY, false );
```

Optionally, construct an `AudiomobConfig` instance to configure granular settings like contextual signals, geolocation, and test ads.


```actionscript
var config:AudiomobConfig = new AudiomobConfig()
        .forceTestAds( true );

Audiomob.instance.initialise(
        API_KEY,
        false,
        config
);
```


### Events

The initialise call will result in an event indicating whether the SDK was successfilly initialised.

```actionscript
Audiomob.instance.addEventListener( 
    AudiomobEvent.INITIALISE_SUCCESS, 
    function ( event:AudiomobEvent ):void
    {
        trace( "INITIALISE_SUCCESS" );
    }
);

Audiomob.instance.addEventListener( 
    AudiomobEvent.INITIALISE_FAILED, 
    function ( event:AudiomobEvent ):void
    {
        trace( "INITIALISE_FAILED" );
    } 
);
```

If initialisation failed you should check your API KEY or retry the initialisation again at a later point.
