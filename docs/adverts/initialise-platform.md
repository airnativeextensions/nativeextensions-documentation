---
title: Initialise Platform
sidebar_label: Initialise Platform
---

## Setup the platform

You should perform this once in your application preferrably early well before any adverts will be displayed. 

This is a two step process. You should initially call `setup` specifying you platform selection and then call `initialise` to initialise the platform.


Firstly select the platform:

```as3
Adverts.service.setup( AdvertPlatform.PLATFORM_ADMOB );
```

Then call `initialise()`:

```as3
Adverts.service.initialise();
```


>
> **Warning**: Ads may be preloaded by the underlying advertising SDK or mediation partner SDKs upon calling `initialise()`. If you need to obtain consent from users in the European Economic Area (EEA), set any request-specific flags (such as tagForChildDirectedTreatment or tag_for_under_age_of_consent), or otherwise take action before loading ads, ensure you do so before calling `initialise()`. 
>
> This is the main reason there are two steps in the process to allow you to acquire consent before loading any ads.
>



### Checking Support

You can also check whether a platform is supported before initialising it to dynamically swap platforms, 
by using the `isPlatformSupported` function.

```as3
if (Adverts.service.isPlatformSupported( AdvertPlatform.PLATFORM_ADMOB ))
{
	Adverts.service.initialisePlatform( AdvertPlatform.PLATFORM_ADMOB, YOUR_ACCOUNT_ID );
}
else if (Adverts.service.isPlatformSupported( AdvertPlatform.PLATFORM_IAD ))
{
	Adverts.service.initialisePlatform( AdvertPlatform.PLATFORM_IAD, IAD_ACCOUNT_ID );
}
else
{
	trace( "No platform supported on the current device" );
}
```

