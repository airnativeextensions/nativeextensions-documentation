---
title: Life Time Value (LTV)
sidebar_label: Life Time Value (LTV)
---

When an impression occurs, the extension calls the paid event handler with its associated revenue data. By implementing this event handler, you can use the data to calculate a user's life time value, or forward the data downstream to other relevant systems.

:::info
You must reach out to your account manager to get allowlisted for this feature.
:::

This feature applies to:
- Banner Ad
- Interstitial Ad
- Rewarded Video Ad
- Rewarded Interstitial Ad


## Paid Event Handler


Each ad format dispatches a `PaidEvent.PAID` event. During the lifecycle of an ad event, the SDK monitors impression events and dispatches the event with an earned value.


```actionscript

var rewardedVideoAd : RewardedVideoAd = Adverts.service.rewardedVideoAds.createRewardedVideoAd();
rewardedVideoAd.setAdUnitId( "REWARDED_AD_UNIT_ID" );
rewardedVideoAd.load( new AdRequestBuilder().build() );


rewardedVideoAd.addEventListener( PaidEvent.PAID, paidHandler );

function paidHandler( event:PaidEvent ):void
{
	// event.adValue will contain the paid event revenue information
	trace( event.adValue.value + " ("+event.adValue.currencyCode+")" );
}
```

The event has a property `adValue` which is an instance of the `AdValue` class. It contains information about the amount, currency and precision of the revenue.

