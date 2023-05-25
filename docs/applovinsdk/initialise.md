---
title: Initialisation
sidebar_label: Initialisation
---

## Initialising the extension

You should perform this once in your application near where you are going to initially 
display an advert. This initialises the AppLovin platform. 

```as3
if (AppLovinSDK.isSupported)
{
	AppLovinSDK.instance.initialise();
}
```

The initialisation process will dispatch the `AppLovinSDKEvent.INITIALISE_COMPLETE` when the SDK is ready to be used:

```as3
AppLovinSDK.instance.addEventListener( AppLovinSDKEvent.INITIALISE_COMPLETE, initialise_completeHandler );
			
AppLovinSDK.instance.initialise();


function initialise_completeHandler( event:AppLovinSDKEvent ):void
{
	// SDK initialised and ready to use
}
```


### Configuration

You can provide configuration options to the SDK by passing a `AppLovinSDKConfig` instance to the `initialise()` call:


```as3
var config:AppLovinSDKConfig = new AppLovinSDKConfig();
			
AppLovinSDK.instance.initialise( config );
```


This allows you to set optional configuration parameters such as the `mediationProvider`:

```as3
var config:AppLovinSDKConfig = new AppLovinSDKConfig();
config.mediationProvider = "max";
			
AppLovinSDK.instance.initialise( config );
```

