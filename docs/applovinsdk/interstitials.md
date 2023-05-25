---
title: Interstitials
sidebar_label: Interstitials
---


The interstitials are fullscreen adverts that you can use to transition between scenes in your application, such as after a game level.

All of the interstitial functionality is provided through the `AppLovinSDK.instance.interstitials` singleton.


## Creating an Interstitial

To create an `MaxInterstitialAd` use the `createMaxInterstitialAd` function:


```as3
var interstitial:MaxInterstitialAd = AppLovinSDK.instance.interstitials.createMaxInterstitialAd();
```

This will instanciate an instance of the `MaxInterstitialAd` class. 


You must set the ad unit on this ad as soon as possible by using the `setAdUnitId` function:

```as3
interstitial.setAdUnitId( "interstitial_adUnitId" );
```

Without setting the ad unit id everything else regarding the interstitial will fail.



## Loading

Interstitials should be preloaded in your application. This allows you to start the load at any time, and only display when your application is ready or when the advert has been loaded.

To load an advert you use the `load` function. 

```as3
interstitial.load();
```

You can listen for events that will inform you on when an advert is available or if there were any errors in loading the advert.
There are two events of interest here:

- `InterstitialAdEvent.LOADED`: dispatched when an ad has finished loading;
- `InterstitialAdEvent.ERROR`: dispatched if the ad failed to load

You can use the loaded event to delay displaying the ad until you are sure an ad is available.

```as3
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

If an error occurs you can use the `errorCode` on the event to determine what type of error occurred. 



## Checking Loaded


You can check whether the advert is loaded by waiting for the `InterstitialEvent.LOADED` 
or checking the `isLoaded()` flag. It is useful to use the flag to confirm that the ad is loaded before attempting to display the ad:

```as3
if (interstitial.isLoaded())
{
	// Show the ad
}
```


## Display

When you are ready to display your advert you call `show()` as below.

```as3
interstitial.show();
```

When showing an advert you should save any content in your application as the advert may take the user out of your application if they follow the presented action. The `InterstitialAdEvent.CLOSED` event is dispatched when the user closes the advert and control returns to your application and you can then resume operation.

As noted above you should check if the advert is loaded before calling show:

```as3
if (interstitial.isLoaded())
{
	interstitial.show();
}
```


## Events

There are several events dispatched by the advert as the user interacts with it:

- `InterstitialAdEvent.OPENED`: dispatched when an ad opens an overlay that covers the screen;
- `InterstitialAdEvent.LEFT_APPLICATION`: when a user click opens another app (such as Google Play), backgrounding the current app;
- `InterstitialAdEvent.CLOSED`: dispatched when a user returns to the app, having closed the interstitial;

At the very least we suggest you should listen for the closed event to know when control returns to your application.

```as3
interstitial.addEventListener( InterstitialAdEvent.OPENED, openedHandler );
interstitial.addEventListener( InterstitialAdEvent.LEFT_APPLICATION, leftApplicationHandler );
interstitial.addEventListener( InterstitialAdEvent.CLOSED, closedHandler );

if (interstitial.isLoaded())
{
	interstitial.show();
}


function openedHandler( event:InterstitialAdEvent ):void 
{
	// The interstitial has been opened and is now visible to the user 
}

function leftApplicationHandler( event:InterstitialAdEvent ):void 
{
	// Control has left your application, 
	// you can deactivate any none important parts of your application
}

function closedHandler( event:InterstitialAdEvent ):void 
{
	// Control has returned to your application
	// you should reactivate any paused / stopped parts of your application.
}
```


## Refresh

Once you have displayed an interstitial a new ad needs to be loaded in order to display the interstitial again. This is a simple matter of starting a new ad request load:

```as3
interstitial.load();
```

The `CLOSED` event is generally a good place to trigger this load so that you ensure you always have a loaded ad available to display in your application, however you can handle this process as you see fit.

