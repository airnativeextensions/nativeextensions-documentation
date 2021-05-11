---
title: Interstitials
sidebar_label: Interstitials
---


The interstitials are fullscreen adverts that you can use to transition between 
scenes in your application, such as after a game level.

Interstitials are represented by the `InterstitialAd` class. You create an instance of this class using the extension and then use this instance to set properties, load and display the interstitial.

All of the interstitial functionality is provided through the `Adverts.service.interstitials` singleton.

>
> You must initialise an advert platform before calling any of the interstitial functionality. 
> See the [Initialise Platform](initialise-platform) section.
>



## Support

The interstitials have their own `isSupported` flag as interstitials aren't available on all platform and services.

To check if interstitials are supported:

```actionscript
if (Adverts.service.interstitials.isSupported)
{
	// Interstitials are supported
}
```

This allows you to create a fallback scenario if interstitials aren't supported on the current platform and device. 


## Creating an Interstitial

To create an `InterstitialAd` use the `createInterstitialAd` function:


```actionscript
var interstitial:InterstitialAd = Adverts.service.interstitials.createInterstitialAd();
```

This will instanciate an instance of the `InterstitialAd` class. 


You must set the ad unit on this ad as soon as possible by using the `setAdUnitId` function:

```actionscript
interstitial.setAdUnitId( "interstitial_adUnitId" );
```

Without setting the ad unit id everything else regarding the interstitial will fail.



## Loading

Interstitials should be preloaded in your application. This allows you to start the load at any time, and only display when your application is ready or when the advert has been loaded.

To load an advert you use the `load` function and pass it an `AdRequest` object which will specify the details of the ad request to load. You create an `AdRequest` by using the `AdRequestBuilder`. The builder is used to correctly create the request object and easily set the availble properties on the request.

The simplest example is to just use a generic request:

```actionscript
interstitial.load( new AdRequestBuilder().build() );
```

See [Targeting](targeting) for more on the `AdRequestBuilder` targetting options.

You can listen for events that will inform you on when an advert is available or if there were any errors in loading the advert.
There are two events of interest here:

- `InterstitialAdEvent.LOADED`: dispatched when an ad has finished loading;
- `InterstitialAdEvent.ERROR`: dispatched if the ad failed to load

You can use the loaded event to delay displaying the ad until you are sure an ad is available.

```actionscript
interstitial.addEventListener( InterstitialAdEvent.LOADED, loadedHandler );
interstitial.addEventListener( InterstitialAdEvent.ERROR, errorHandler );


function loadedHandler( event:InterstitialAdEvent ):void
{
	// interstitial loaded and ready to be displayed
}

function errorHandler( event:InterstitialAdEvent ):void
{
	// Load error occurred. The errorCode will contain more information
	trace( "Error" + event.errorCode );
}
```

If an error occurs you can use the `errorCode` on the event to determine what type of error occurred. See the [troubleshooting](troubleshooting) guide to determine what happened.


## Testing and Development

It is very important that while you are developing your application that you do not serve live ads. **This is a requirement of the usage of AdMob and not following this correctly can have your application id blocked from using AdMob.**

While in development you should either use the test ad unit ids available or specify your test device id in your request configuration. More information on this is located in the section on [Test Ads](test-ads)

The following Ad Unit IDs can be used to test interstitial ads in your application:

- Android: `ca-app-pub-3940256099942544/1033173712`
- iOS: `ca-app-pub-3940256099942544/4411468910`		


## Checking Loaded


You can check whether the advert is loaded by waiting for the `InterstitialEvent.LOADED` 
or checking the `isLoaded()` flag. It is useful to use the flag to confirm that the ad is loaded before attempting to display the ad:

```actionscript
if (interstitial.isLoaded())
{
	// Show the ad
}
```


## Display

When you are ready to display your advert you call `show()` as below.

```actionscript
interstitial.show();
```

When showing an advert you should save any content in your application as the advert may take the user out of your application if they follow the presented action. The `InterstitialAdEvent.CLOSED` event is dispatched when the user closes the advert and control returns to your application and you can then resume operation.

As noted above you should check if the advert is loaded before calling show:

```actionscript
if (interstitial.isLoaded())
{
	interstitial.show();
}
```


## Events

There are several events dispatched by the advert as the user interacts with it:

- `FullScreenContentEvent.SHOW`: dispatched when an ad opens an overlay that covers the screen;
- `FullScreenContentEvent.FAILED_TO_SHOW`: dispatched when an ad fails to be shown;
- `FullScreenContentEvent.DISMISSED`: dispatched when a user returns to the app, having dismissed the interstitial;

At the very least we suggest you should listen for the closed event to know when control returns to your application.

```actionscript
interstitial.addEventListener( FullScreenContentEvent.SHOW, showHandler );
interstitial.addEventListener( FullScreenContentEvent.FAILED_TO_SHOW, failedToShowHandler );
interstitial.addEventListener( FullScreenContentEvent.DISMISSED, dismissedHandler );

if (interstitial.isLoaded())
{
	interstitial.show();
}


function showHandler( event:FullScreenContentEvent ):void 
{
	// The interstitial has been opened and is now visible to the user 
}

function failedToShowHandler( event:FullScreenContentEvent ):void 
{
	// The ad failed to be shown 
}

function dismissedHandler( event:FullScreenContentEvent ):void 
{
	// Control has returned to your application
	// you should reactivate any paused / stopped parts of your application.
}
```


## Refresh

Once you have displayed an interstitial a new ad needs to be loaded in order to display the interstitial again. This is a simple matter of starting a new ad request load:

```actionscript
interstitial.load( new AdRequestBuilder().build() );
```

The `FullScreenContentEvent.DISMISSED` event is generally a good place to trigger this load so that you ensure you always have a loaded ad available to display in your application, however you can handle this process as you see fit.

