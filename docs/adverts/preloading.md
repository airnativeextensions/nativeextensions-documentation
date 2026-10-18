---
title: Ad preloading (beta)
sidebar_label: Ad preloading
---

Ad preloading is an SDK managed ad loading feature in Google Mobile Ads SDK that manages ad loading and caching on your behalf. Ad preloading requires a change in how you manage ad loading. 

To optimize performance using ad preloading, disable any custom caching or loading calls and delegate that responsibility to the SDK.

You can use preloaders for the following ad types:

| Ad Type | Preloader Service | Ad Class |
| --- | --- | --- |
| Interstitial Ads | `Adverts.service.interstitials.preloader` | `InterstitialAd` |
| Rewarded Video Ads | `Adverts.service.rewardedVideoAds.preloader` | `RewardedVideoAd` |
| App Open Ads | `Adverts.service.appOpenAds.preloader` | `AppOpenAd` |


The following documentation applies to all ad types just use the appropriate preloader service.


## Start preloading ads

When the app starts, call the start method once. After you call the start method, the SDK automatically preloads ads and retries failed requests for preloaded configurations.

The following example starts preloading ads:

```actionscript
var success:Boolean = Adverts.service.interstitials.preloader.start(
						new PreloadConfiguration( "AD_UNIT_ID" )
				);
```

Replace `AD_UNIT_ID` with your ad unit ID.

`start()` returns a boolean success value. If this is `true` then the preloader has been started and ads will be loaded. If it is `false` either the preloading isn't supported or you already have started preloading. 


## Get and show the preloaded ad

When using ad preloading, the SDK holds cached ads. When you want to show an ad, call the `pollAd` method. The extension retrieves an available ad and automatically preloads the next ad in the background.

Avoid calling the `pollAd` method until you're ready to show an ad. Keeping ads in the cache lets the SDK automatically refresh expired ads and perform cache optimization.

The following example retrieves and shows a preloaded ad:

```actionscript
var interstitial:InterstitialAd = 
    Adverts.service.interstitials.preloader.pollAd( "AD_UNIT_ID" );

if (interstitial != null)
{
    // Interact with the ad as needed - add event listeners etc

    // Show the ad immediately
    interstitial.show();
}
```


## Check preloading ad availability


### Get preloaded ad availability

The following example checks for ad availability:

```actionscript
if (!Adverts.service.interstitials.preloader.isAdAvailable( "AD_UNIT_ID" ))
{
    // No ads are available to show
}
```



### Listen to preloaded ad availability

Register for preload events to get notified when ads are preloaded successfully, fail to preload, or the ad cache is exhausted.

The following events are dispatched from the preloader service:
- `PreloaderEvent.LOADED`: Called when a new ad is available
- `PreloaderEvent.ERROR`: Called when an ad failed to load
- `PreloaderEvent.EXHAUSTED`: Called when all preloaded ads for a given preload ID have been exhausted


```actionscript
Adverts.service.interstitials.preloader.addEventListener( PreloaderEvent.LOADED, loadedHandler );
Adverts.service.interstitials.preloader.addEventListener( PreloaderEvent.ERROR, errorHandler );
Adverts.service.interstitials.preloader.addEventListener( PreloaderEvent.EXHAUSTED, exhaustedHandler );

function loadedHandler( event:PreloaderEvent ):void
{
    // Called when preloaded ads are available
    trace( "ad ready: " + event.adUnitId );
}

function errorHandler( event:PreloaderEvent ):void
{
    trace( "error: " + event.adUnitId + " [" + event.error.code + "]: " + event.error.message );
}

function exhaustedHandler( event:PreloaderEvent ):void
{
    trace( "ads exhausted: " + event.adUnitId );
}
```




## Stop preloading ads

If you don't need to show ads for a preload ID again in the session, you can stop preloading ads. To stop preloading ads for a specific preload ID, call `destroy` with a ad unit preload ID. To stop preloading for all preloaders, call `destroyAll`.

```actionscript
// Stops the preloading and destroy preloaded ads.
Adverts.service.interstitials.preloader.destroy( "AD_UNIT_ID" );
// Stops the preloading and destroy all ads.
Adverts.service.interstitials.preloader.destroyAll();
```


## Set the buffer size

Buffer size controls the number of preloaded ads held in memory. By default, Google optimizes buffer size to balance memory consumption and ad serving latency. If your app displays ads before the next ad is loaded, you can set a custom buffer size to increase the number of ads kept in memory.

```actionscript
// Define a PreloadConfiguration and set the buffer size to 2 preloaded ads.
var config:PreloadConfiguration = 
    new PreloadConfiguration( "AD_UNIT_ID" )
        .setBufferSize( 2 );

Adverts.service.rewardedVideoAds.preloader.start( config );
```

### Preload cache limits

Google Mobile Ads SDK (Legacy) enforces an app-wide limit on the total number of preloaded ads across all ad units and preload IDs:

- Default limit: Google Mobile Ads SDK (Legacy) holds a maximum of 6 preloaded ads in memory. This limit is shared across all formats and preload IDs.
- It is recommended keeping a buffer size of two for each preload ID.

