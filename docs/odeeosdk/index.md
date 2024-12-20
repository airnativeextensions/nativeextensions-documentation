---
title: OdeeoSDK
hide_title: true
slug: /odeeosdk/
---

![](images/hero.png)

# OdeeoSDK

The [OdeeoSDK](https://airnativeextensions.com/extension/io.odeeo.OdeeoSDK) extension gives you access to Odeeo audio ads in your AIR application.

We provide complete guides to get you up and running with sharing quickly and easily.


### Features

- Odeeo audio icon and banner adverts
- Single API interface - your code works across iOS and Android with no modifications
- Sample project code and ASDocs reference

As with all our extensions you get access to a year of support and updates as we are 
continually improving and updating the extensions for OS updates and feature requests.



## Documentation

The [documentation site](https://docs.airnativeextensions.com/docs/odeeosdk) forms the best source of detailed documentation for the extension along with the [asdocs](https://docs.airnativeextensions.com/asdocs/odeeosdk). 

Quick Example: 

```actionscript title="AIR"
OdeeoSDK.instance.addEventListener( OdeeoSDKEvent.INIT_SUCCESS, initSuccessHandler );

OdeeoSDK.instance.initialise( API_KEY );

function initSuccessHandler( event:OdeeoSDKEvent ):void
{
    // sdk is initialised
    var adUnit:AdUnit = OdeeoSDK.instance.createAdUnit( AdUnitType.ICON, "PLACEMENT_ID" );
    adUnit.addEventListener( AdUnitEvent.AVAILABILITY_CHANGED, adUnitAvailabilityChangedHandler );
}

function adUnitAvailabilityChangedHandler( event:AdUnitEvent ):void
{
    var adUnit:AdUnit = AdUnit(event.currentTarget);
    if (adUnit.isAdAvailable())
    {
        adUnit.showAd();
    }
}
```


![](images/promo.png)



