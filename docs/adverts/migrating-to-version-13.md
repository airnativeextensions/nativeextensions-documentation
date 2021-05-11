---
title: Migrating to version 13
sidebar_label: Migrating to version 13
---

Version 13 brings the latest AdMob SDK which includes some significant changes to the SDK. This update includes:

- Android v20+
- iOS v8+



## App Open Ads

[App Open Ads](app-open-ads) have been added with this release 



## Event Changes

### Left Application Events

All `LEFT_APPLICATION` events have been removed and are no longer dispatched. This includes:

- `RewardedVideoAdEvent.LEFT_APPLICATION`
- `InterstitialAdEvent.LEFT_APPLICATION`
- `AdViewEvent.LEFT_APPLICATION`

We suggest using the Application extension state events to handle background deactivate events instead.


### `FullScreenContentEvent`

All the fullscreen ads (Interstitials, RewardedVideoAd, AppOpenAds) now dispatch `FullScreenContentEvent`s when:

- they are shown: `FullScreenContentEvent.SHOW`
- they fail to show: `FullScreenContentEvent.FAILED_TO_SHOW`
- they are dismissed: `FullScreenContentEvent.DISMISSED`

These events replace the equivalent events that were defined in the `InterstitialAdEvent`, and `RewardedVideoAdEvent`.

So you need to replace the following with their new equivalents: 

- `InterstitialAdEvent.OPENED` -> `FullScreenContentEvent.SHOW`
- `InterstitialAdEvent.CLOSED` -> `FullScreenContentEvent.DISMISSED`
- `RewardedVideoAdEvent.OPENED` -> `FullScreenContentEvent.SHOW`
- `RewardedVideoAdEvent.CLOSED` -> `FullScreenContentEvent.DISMISSED`


eg for an interstitial, the following code:

```actionscript
var interstitial:InterstitialAd = Adverts.service.interstitials.createInterstitialAd();
interstitial.setAdUnitId( "AD_UNIT_ID" );

interstitial.addEventListener( InterstitialAdEvent.LOADED, interstitial_loadedHandler );
interstitial.addEventListener( InterstitialAdEvent.ERROR, interstitial_errorHandler );
interstitial.addEventListener( InterstitialAdEvent.OPENED, interstitial_openedHandler );
interstitial.addEventListener( InterstitialAdEvent.CLOSED, interstitial_closedHandler );

// ...

function interstitial_openedHandler( event:InterstitialAdEvent ):void
{
        trace( "interstitial shown" );
}

function interstitial_closedHandler( event:InterstitialAdEvent ):void
{
        trace( "interstitial dismissed" );
}
```

becomes:


```actionscript
var interstitial:InterstitialAd = Adverts.service.interstitials.createInterstitialAd();
interstitial.setAdUnitId( "AD_UNIT_ID" );

interstitial.addEventListener( InterstitialAdEvent.LOADED, interstitial_loadedHandler );
interstitial.addEventListener( InterstitialAdEvent.ERROR, interstitial_errorHandler );
interstitial.addEventListener( FullScreenContentEvent.SHOW, interstitial_showHandler );
interstitial.addEventListener( FullScreenContentEvent.DISMISSED, interstitial_dismissedHandler );

// ...

function interstitial_showHandler( event:FullScreenContentEvent ):void
{
        trace( "interstitial shown" );
}

function interstitial_dismissedHandler( event:FullScreenContentEvent ):void
{
        trace( "interstitial dismissed" );
}
```

We also suggest adding the listener for the `FullScreenContentEvent.FAILED_TO_SHOW` event, handling any errors that are specific to displaying the fullscreen adverts. This should be done similarly to the load error events eg `InterstitialAdEvent.ERROR` 



## RequestConfiguration

AdMob has moved some of the request options to a general "Request Configuration" API. This includes child directed treatments, targetting under age and max content ratings, along with the device ids used for testing. These options used to be set in the `AdRequestBuilder` but are now set globally through a `RequestConfiguration` object passed to `Adverts.service.setRequestConfiguration()`.

In the past you may have used:

```actionscript
var builder:AdRequestBuilder = new AdRequestBuilder()
        .tagForChildDirectedTreatment( false )
        .tagForUnderAgeOfConsent( false )
        .maxAdContentRating( "G" )
;
```


You should change these settings to be in a central location (after initialisation) using the following:

```actionscript
var config:RequestConfiguration = new RequestConfiguration()
        .setTagForChildDirectedTreatment( RequestConfiguration.TAG_FOR_CHILD_DIRECTED_TREATMENT_FALSE )
        .setTagForUnderAgeOfConsent( RequestConfiguration.TAG_FOR_UNDER_AGE_OF_CONSENT_FALSE )
        .setMaxAdContentRating( RequestConfiguration.MAX_AD_CONTENT_RATING_G )
        .setTestDeviceIds( ["XXXSSSAAA"] )
;

Adverts.service.setRequestConfiguration( config );
```


Then when requesting an ad just construct a simple builder:

```actionscript
var builder:AdRequestBuilder = new AdRequestBuilder();
```

More information in the [Targeting](targeting) section.





