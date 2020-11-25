---
title: Initialise Platform
sidebar_label: Initialise Platform
---

## Setup the platform

You should perform this once in your application preferrably early well before any adverts will be displayed. 

This is a two step process. You should initially call `setup` specifying you platform selection and then call `initialise` to initialise the platform.


Firstly select the platform:

```actionscript
Adverts.service.setup( AdvertPlatform.PLATFORM_ADMOB );
```

This simply specifies the platform the extension will use, so the correct implementation will be used for all other functionality. At this point you can use other functionality of the extension around consent and the user messaging platform, however adverts will not function.


Next call `initialise()`:

```actionscript
Adverts.service.initialise();
```

This will initialise the actual platforms advertising SDK. 

>
> **Warning**: Ads may be preloaded by the underlying advertising SDK or mediation partner SDKs upon calling `initialise()`. If you need to obtain consent from users in the European Economic Area (EEA), set any request-specific flags (such as tagForChildDirectedTreatment or tag_for_under_age_of_consent), or otherwise take action before loading ads, ensure you do so before calling `initialise()`. 
>
> This is the main reason there are two steps in the process to allow you to acquire consent before loading any ads.
>


The initialisation process is asynchronous and will take a short amount of time depending on the platform. An event is dispatched when this process is complete. 

```as3
Adverts.service.addEventListener( AdvertsEvent.INITIALISED, initialisedHandler );

Adverts.service.initialise();

function initialisedHandler( event:AdvertsEvent ):void 
{
	// Platform is now initialised and ready to load ads
}
```


### Open Bidding

If you are planning to use "Open Bidding Mediation" then you need to ensure you await the initialised event. *Before an open bidding adapter can participate in an ad request, it must first be initialized.* The `initialise()` method initializes open bidding adapters and dispatches the `AdvertsEvent.INITIALISED` event once all adapters complete initialisation (or after a 30 second timeout).

The initialised event will contain details of the available mediator adapters, including their state and latency:

```as3
Adverts.service.addEventListener( AdvertsEvent.INITIALISED, initialisedHandler );

Adverts.service.initialise();

function initialisedHandler( event:AdvertsEvent ):void 
{
	for each (var adapterStatus:AdapterStatus in e.adapterStatus)
	{
		trace( "adapter: " + adapterStatus.name + " : " + adapterStatus.state + " [" + adapterStatus.latency + "] - " + adapterStatus.description );
	}
}
```



### Checking Support

You can also check whether a platform is supported before initialising it to dynamically swap platforms, 
by using the `isPlatformSupported` function.

```actionscript
if (Adverts.service.isPlatformSupported( AdvertPlatform.PLATFORM_ADMOB ))
{
	Adverts.service.setup( AdvertPlatform.PLATFORM_ADMOB );
}
else
{
	trace( "No platform supported on the current device" );
}
```

