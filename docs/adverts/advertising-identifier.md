---
title: Advertising Identifier
sidebar_label: Advertising Identifier
---

## Advertising Identifier

The advertising identifier is a user-specific, unique, resettable ID for advertising, provided by Google Play services and the iOS SDK. It gives users better controls and provides developers with a simple, standard system to continue to monetize your apps. It is an anonymous identifier for advertising purposes and enables users to reset their identifier or opt out of interest-based ads within Google Play and iOS apps.

- **iOS**: this is the value of the `ASIdentifierManager` `advertisingIdentifier` property - <a href="http://developer.apple.com/documentation/adsupport/asidentifiermanager">documentation</a>
- **Android**: this is the value of the Google Play Services advertising ID - <a href="http://developers.google.com/android/reference/com/google/android/gms/ads/identifier/AdvertisingIdClient">documentation</a>.


The user has the ability to limit ad tracking on both iOS and Android through the device settings. This value can also be retrieved so that you can respect this value in any tracking your application performs.


Retrieving this information is through the use of the `getAdvertisingId()` function which asynchronously retrieves the current `AdvertisingIdInfo` object. 
This object contains the current advertisting identifier and whether the user has limited ad tracking.


For example:

```actionscript
Adverts.service.addEventListener( AdvertisingIdEvent.ADVERTISING_ID, advertisingIdHandler );
Adverts.service.getAdvertisingId();

function advertisingIdHandler( event:AdvertisingIdEvent ):void
{
	// event.info contains the advertising info object
    
    var info:AdvertisingIdInfo = event.info;

    trace( info.advertisingId );
    trace( info.isLimitAdTrackingEnabled );
}
```



### Callback 

If you wish you can also add a callback to the `getAdvertisingId` function. This callback takes one parameter being the `AdvertisingIdInfo` object.

For example:

```actionscript
Adverts.service.getAdvertisingId( 
    function( info:AdvertisingIdInfo ):void 
    {
        trace( info.advertisingId );
        trace( info.isLimitAdTrackingEnabled );
    }
);
```



### Errors

Please note that you need to include the `com.distriqt.playservices.AdsIdentifier` dependency in order to support the advertising identifier on Android.

If you don't include this extension you may receive an `ErrorEvent.ERROR` during the `getAdvertisingId()` call with text indicating the missing extension.


```actionscript
Adverts.service.addEventListener( ErrorEvent.ERROR, errorHandler );


...

Adverts.service.getAdvertisingId();

...


function errorHandler( event:ErrorEvent ):void 
{
    // An error occurred
}
```

