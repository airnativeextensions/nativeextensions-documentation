---
title: Rewarded Interstitial Ads
sidebar_label: Rewarded Interstitial Ads
---

Rewarded interstitial is a type of incentivized ad format that allows you offer rewards for ads that appear automatically during natural app transitions. Unlike rewarded ads, users aren't required to opt-in to view a rewarded interstitial.

All of the rewarded interstitial ads functionality is provided through the `Adverts.service.rewardedInterstitialAds` singleton.

:::info
You must initialise an advert platform before calling any of the rewarded interstitial ad functionality.
See the [Initialise Platform](initialise-platform) section.
:::

## Support

The rewarded interstitial ads have their own `isSupported` flag as rewarded interstitial ads may not be available on all platform and services.

To check if rewarded interstitial ads are supported:

```actionscript
if (Adverts.service.rewardedInterstitialAds.isSupported)
{
	// rewarded interstitial ads are supported
}
```

This allows you to create a fallback scenario if rewarded interstitial ads aren't supported on the current platform and device.

## `RewardedInterstitialAd`

To create a `RewardedInterstitialAd` instance use the `createRewardedInterstitialAd()` function:

```actionscript
var rewardedAd : RewardedInterstitialAd = Adverts.service.rewardedInterstitialAds.createRewardedInterstitialAd();
```

This will instanciate an instance of the `RewardedInterstitialAd` class. You are required to destroy this instance when you are finished with it.

You are required to set the ad unit id by calling the `setAdUnitId` function before any loading is performed.

```actionscript
rewardedAd.setAdUnitId( "REWARDED_AD_UNIT_ID" );
```

## Loading

Rewarded interstitial Ads should be preloaded in your application. This allows you to start the load at any time, and only display when your application is ready and when the advert has been loaded. You cannot display a rewarded interstitial ad until it is loaded and ready.

To load an advert you use the `load` function and pass it an `AdRequest` object which will specify the details of the ad request to load.

The simplest example is to just use a generic request:

```actionscript
rewardedAd.load( new AdRequestBuilder().build() );
```

See [Targeting](targeting) for more on the `AdRequestBuilder` targetting options.

You can listen for events that will inform you on when an advert is available or if there were any errors in loading the advert.

- `RewardedInterstitialAdEvent.LOADED`: dispatched when an ad has finished loading;
- `RewardedInterstitialAdEvent.ERROR`: dispatched if the ad failed to load

```actionscript
rewardedAd.addEventListener( RewardedInterstitialAdEvent.LOADED, loadedHandler );
rewardedAd.addEventListener( RewardedInterstitialAdEvent.ERROR, errorHandler );

function loadedHandler( event:RewardedInterstitialAdEvent ):void
{
	// rewarded interstitial ad loaded and ready to be displayed
}

function errorHandler( event:RewardedInterstitialAdEvent ):void
{
	// Load error occurred. The errorCode will contain more information
	trace( "Error" + event.errorCode );
}
```

If an error occurs you can use the `errorCode` on the event to determine what type of error occurred. See the [troubleshooting](troubleshooting) guide to determine what happened.

## Testing and Development

It is very important that while you are developing your application that you do not serve live ads. **This is a requirement of the usage of AdMob and not following this correctly can have your application id blocked from using AdMob.**

While in development you should either use the test ad unit ids available or specify your test device id in your ad requests. More information on this is located in the section on [Test Ads](test-ads)

The following Ad Unit IDs can be used to test rewarded interstitial ads in your application:

- Android: `ca-app-pub-3940256099942544/5354046379`
- iOS: `ca-app-pub-3940256099942544/6978759866`

## Checking Loaded

You can check whether the advert is loaded by waiting for the `RewardedInterstitialAdEvent.LOADED`
or checking the `isLoaded()` flag. It is useful to use the flag to confirm that the ad is loaded before attempting to display the ad:

```actionscript
if (rewardedAd.isLoaded())
{
	// Show the ad
}
```

## Display

When you are ready to display the rewarded interstitial you call `show()` as below:

```actionscript
rewardedAd.show();
```

You should check whether the ad is loaded before calling show to ensure that there is an ad available to display (as noted above). If there isn't this call will fail and return `false`.

```actionscript
if (rewardedAd.isLoaded())
{
	rewardedAd.show();
}
```

## Events

There are several events dispatched by the rewarded interstitial ad as the user interacts with it (in addition to the loaded and error events already mentioned):

- `FullScreenContentEvent.SHOW`: dispatched when an ad shows an overlay that covers the screen;
- `FullScreenContentEvent.DISMISSED`: dispatched when a user returns to the app, having closed the rewarded interstitial ad;
- `FullScreenContentEvent.FAILED_TO_SHOW`: dispatched if there was an error presenting the ad;
- `FullScreenContentEvent.CLICKED`: dispatched when a user clicks the ad;
- `FullScreenContentEvent.IMPRESSION`: dispatched when a an ad impression occurs;
- `RewardedInterstitialAdEvent.REWARD`: See the [reward section](#rewards)

```actionscript
rewardedAd.addEventListener( FullScreenContentEvent.SHOW, showHandler );
rewardedAd.addEventListener( FullScreenContentEvent.DISMISSED, dismissedHandler );

function showHandler( event:FullScreenContentEvent ):void
{
    // The rewarded interstitial ad has been shown and is now visible to the user
}

function dismissedHandler( event:FullScreenContentEvent ):void
{
	// Control has returned to your application
	// you should reactivate any paused / stopped parts of your application.
}
```

## Rewards

Rewarding your user should take place after the `RewardedInterstitialAdEvent.REWARD` event is dispatched.
This is the important event that is dispatched after the user has finished watching the video ad and is when you should give the reward associated with this event to your user.

```actionscript
rewardedAd.addEventListener( RewardedInterstitialAdEvent.REWARD, rewardHandler );

function rewardHandler( event:RewardedInterstitialAdEvent ):void
{
    // Here you should reward your user

    //     event.rewardAmount contains the amount that should be awarded to your user
    //     event.rewardType contains the type of this reward
}
```

## Refresh

Once you have displayed a rewarded interstitial ad a new ad needs to be loaded in order to display the rewarded interstitial ad again. This is a simple matter of starting a new ad request load:

```actionscript
rewardedAd.load( new AdRequestBuilder().build() );
```

The `FullScreenContentEvent.DISMISSED` event is generally a good place to trigger this load so that you ensure you always have a loaded ad available to display in your application, however you can handle this process as you see fit.
