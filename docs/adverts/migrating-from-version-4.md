---
title: Migrating from version 4
sidebar_label: Migrating from version 4
---


Version 5 completely changes the way adverts are displayed, including more control over the ad units that are displayed. Migration is simple as laid out below. 

The major difference is that you now will create an `AdView` or an `InterstitialAd` instance and use this to configure, load and display your adverts. Whereas you used to only have access to a single advert with one ad unit id, you can now create multiple and use as required. This means that you will need to hold onto an instance of your `AdView` or `InterstitialAd` to set properties, listen for events, load, and display your advert.



# Banners


## Initialise

With v5.0 you specify the unit id on the advert view. So you no longer have to set the unit id on the initialisePlatform functions.

This means the follow version 4 code,

```actionscript
Adverts.service.initialisePlatform( AdvertPlatform.PLATFORM_ADMOB, AD_UNIT_ID );
```

becomes:

```actionscript
Adverts.service.initialisePlatform( AdvertPlatform.PLATFORM_ADMOB );

var adView:AdView = Adverts.service.createAdView();
adView.setAdSize( AdSize.SMART_BANNER );
adView.setAdUnitId( AD_UNIT_ID );
```

> Note: You must set an AdSize and a unit id on an AdView before attempting to load or display the ad.



## Displaying an Banner Advert

Previously to display an advert:

```actionscript
var position:AdvertPosition = new AdvertPosition();
position.verticalAlign   = AdvertPosition.ALIGN_BOTTOM;
position.horizontalAlign = AdvertPosition.ALIGN_CENTER;

Adverts.service.showAdvert( position );
```

This now becomes:

```actionscript
var adView:AdView = Adverts.service.createAdView();
adView.setAdUnitId( AD_UNIT_ID );
adView.setAdSize( AdSize.SMART_BANNER );
adView.setViewParams( new AdViewParamsBuilder()
		.setVerticalAlign( AdViewParams.ALIGN_BOTTOM )
		.setHorizontalAlign( AdViewParams.ALIGN_CENTER )
		.build()
);
adView.load( new AdRequestBuilder().build() );
adView.show();
```

There is a bit more to the code now, however we believe this gives you much more functionality to control the way adverts are displayed in your application.



## Events


Listening for events is much more specified now. The following:

```actionscript
Adverts.service.addEventListener( AdvertEvent.RECEIVED_AD, adverts_receivedAdHandler );
private function adverts_receivedAdHandler( event:AdvertEvent ):void
{
	trace( "received an advertisement" );
}
```

becomes:

```actionscript
adView.addEventListener( AdViewEvent.LOADED, loadedHandler );

function loadedHandler( event:AdViewEvent ):void
{
	// Ad loaded and ready to be displayed
}
```

You can listen for many more events on the `AdView` now as well.



## Hiding an Advert

Hiding an advert is a simple change, the following:

```actionscript
Adverts.service.hideAdvert();
```

becomes:

```actionscript
adView.hide();
```




## Refreshing/Updating an advert

If you wish to manually refresh the advert you can call the refresh function. 
This will make the advert update with a new ad request.

```actionscript
Adverts.service.refresh();
```

This now changes to a new load request:

```actionscript
adView.load( new AdRequestBuilder().build() );
```






# Interstitials

Interstitials are still provided through the `Adverts.service.interstitials` singleton, however the process is now similar to the `AdView` process above. 



## Loading

Previously to load an interstitial you called `load` on the `Interstitials` class, however now you need to create an instance of an `InterstitialAd` and then call `load` on that instance.

So

```actionscript
Adverts.service.interstitials.addEventListener( InterstitialEvent.LOADED, loadedHandler );
Adverts.service.interstitials.addEventListener( InterstitialEvent.ERROR, errorHandler );

Adverts.service.interstitials.load( AD_UNIT_ID );
```

becomes:

```actionscript
var interstitial:InterstitialAd = Adverts.service.interstitials.createInterstitialAd();

interstitial.setAdUnitId( AD_UNIT_ID );
interstitial.addEventListener( InterstitialAdEvent.LOADED, loadedHandler );
interstitial.addEventListener( InterstitialAdEvent.ERROR, errorHandler );
interstitial.load( new AdRequestBuilder().build() );
```

The `interstitial` instance should be held onto and reused in your application.


## Displaying an Interstitial

Previously to display an interstitial:

```actionscript
Adverts.service.interstitials.addEventListener( InterstitialEvent.DISMISSED, dismissedHandler );

if (Adverts.service.interstitials.isReady())
{
	Adverts.service.interstitials.show();
}
```

This now becomes:


```actionscript
interstitial.addEventListener( InterstitialAdEvent.CLOSED, closedHandler );

if (interstitial.isLoaded())
{
	interstitial.show();
}
```



# Advertising Identifier

The `uniqueId` function has been deprecated. If you need access to the device unique id (vendorForIdentifier etc) 
please use the `com.distriqt.Application` ANE.

This will now only return the advertisting identifier, however we have improved its functionality to retrieve more information about the advertising identifier.

Previously:

```actionscript
var advertisingId:String = Adverts.service.uniqueId( Adverts.ADVERTISING );
```

Becomes:

```actionscript
Adverts.service.addEventListener( AdvertisingIdEvent.ADVERTISING_ID, advertisingIdHandler );
Adverts.service.getAdvertisingId();

function advertisingIdHandler( event:AdvertisingIdEvent ):void
{
	var advertisingId:String = info.advertisingId;
}
```

> The asynchronous nature of the new implementation resolves issues with the previous implementation sometimes returning incorrect values.




