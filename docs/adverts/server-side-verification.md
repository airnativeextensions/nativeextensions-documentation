---
title: Server Side Verification
sidebar_label: Server Side Verification
---

Server-side verification callbacks are URL requests, with query parameters expanded by Google, that are sent by Google to an external system to notify it that a user should be rewarded for interacting with a rewarded or rewarded interstitial ad.

For information on the server-side implementation see the [documentation](https://developers.google.com/admob/android/ssv)

## Custom Data

Apps that require additional data in server-side verification callbacks should use the custom data feature of rewarded ads. Any string value set on a rewarded ad object is forwarded within the custom_data query parameter of the SSV callback. If no custom data value is set, the custom_data query parameter value will not be present in the SSV callback.

The code snippet below demonstrates how to set custom data on a rewarded ad object before requesting an ad.

```actionscript
var rewardedAd : RewardedVideoAd = Adverts.service.rewardedVideoAds.createRewardedVideoAd();


rewardedAd.setServerSideVerificationOptions(
        new ServerSideVerificationOptions()
                .setUserId( "user_1023" )
                .setCustomData( "some custom data" )
);
```

If you want to set the custom reward string, you must do so before showing the ad.

This applies to a rewarded video or rewarded interstitial ad.

:::note
Note that the custom reward string will be percent escaped and may require decoding when parsed from the SSV callback.
:::
