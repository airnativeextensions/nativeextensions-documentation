---
title: Interstitials
sidebar_label: Interstitials
---

:::note
You must [initialise](initialise.md) the SDK before attempting to load and display ads.
:::

To display a full-screen interstitial ad using the UnityAds API:

1. [Initialise](initialise.md) the SDK.
2. Use the [load](#load) API to load an ad for the specified Ad Unit.
3. After the ad loads, you can then display it using the [show](#display) API.


## Load

To load an interstitial call the `load()` method on the `interstitials` interface passing the identifier of the ad you wish to load:


```actionscript
UnityAds.instance.interstitials.load( AD_UNIT_ID );
```

This process will dispatch one of the following events:

- `UnityAdsInterstitialEvent.LOADED`: if an ad was loaded and is ready for display;
- `UnityAdsInterstitialEvent.LOAD_ERROR`: if an error occurred.

For example:

```actionscript
UnityAds.instance.interstitials.addEventListener( UnityAdsInterstitialEvent.LOADED, interstitial_loadedHandler );
UnityAds.instance.interstitials.addEventListener( UnityAdsInterstitialEvent.LOAD_ERROR, interstitial_loadErrorHandler );

UnityAds.instance.interstitials.load( AD_UNIT_ID );

function interstitial_loadedHandler( event:UnityAdsInterstitialEvent ):void
{
    // Interstitial loaded and ready to display
}

function interstitial_loadErrorHandler( event:UnityAdsInterstitialEvent ):void
{
    trace( "error: " + event.errorType + "::" + event.message );
}
```

When an error occurs, `errorType` can be one of:

- `ErrorType.NOT_INITIALISED`
- `ErrorType.INTERNAL_ERROR`
- `ErrorType.INVALID_ARGUMENT`
- `ErrorType.NO_FILL`
- `ErrorType.TIMEOUT`





## Display

To display a loaded interstitial call the `show()` method on the `interstitials` interface passing the identifier of the ad you wish to show:


```actionscript
UnityAds.instance.interstitials.show( AD_UNIT_ID );
```

This process may dispatch the following events:

- `UnityAdsInterstitialEvent.START`: when the ad is shown to the user;
- `UnityAdsInterstitialEvent.COMPLETE`: when the ad display was completed and focus returned to your app;
- `UnityAdsInterstitialEvent.CLICK`: if the user clicked the advert;
- `UnityAdsInterstitialEvent.ERROR`: if an error occurred.


```actionscript
UnityAds.instance.interstitials.addEventListener( UnityAdsInterstitialEvent.START, interstitial_showHandler );
UnityAds.instance.interstitials.addEventListener( UnityAdsInterstitialEvent.CLICK, interstitial_showHandler );
UnityAds.instance.interstitials.addEventListener( UnityAdsInterstitialEvent.ERROR, interstitial_showErrorHandler );
UnityAds.instance.interstitials.addEventListener( UnityAdsInterstitialEvent.COMPLETE, interstitial_completeHandler );

UnityAds.instance.interstitials.show( AD_UNIT_ID );

function interstitial_showHandler( event:UnityAdsInterstitialEvent ):void
{
    trace( event.type );
}

function interstitial_showErrorHandler( event:UnityAdsInterstitialEvent ):void
{
    trace( "error: " + event.errorType + "::" + event.message );
}

function interstitial_completeHandler( event:UnityAdsInterstitialEvent ):void
{
    // Ad completed and focus returned to your app
}
```


When an error occurs, `errorType` can be one of:

- `ErrorType.NOT_INITIALISED`
- `ErrorType.ALREADY_SHOWING`
- `ErrorType.INTERNAL_ERROR`
- `ErrorType.INVALID_ARGUMENT`
- `ErrorType.NOT_READY`
- `ErrorType.NO_CONNECTION`
- `ErrorType.VIDEO_PLAYER_ERROR`
- `ErrorType.TIMEOUT`

