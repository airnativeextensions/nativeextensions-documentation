---
title: Test Ads
sidebar_label: Test Ads
---


It is very important that while you are developing your application that you do not serve live ads. **This is a requirement of the usage of AdMob and not following this correctly can have your application id blocked from using AdMob.**

>
> It is important to enable test ads during development so that you can click on them without charging Google advertisers. If you click on too many ads without being in test mode, you risk your account being flagged for invalid activity.
>

## Sample ad units

The quickest way to enable testing is to use Google-provided test ad units. These ad units are not associated with your AdMob account, so there's no risk of your account generating invalid traffic when using these ad units. Here are sample ad units that point to specific test creatives for each format:

### Android

| Ad format | Sample ad unit ID |
| --- | --- |
| Banner | `ca-app-pub-3940256099942544/6300978111` |
| Interstitial | `ca-app-pub-3940256099942544/1033173712` |
| Interstitial Video | `ca-app-pub-3940256099942544/8691691433` |
| Rewarded Video | `ca-app-pub-3940256099942544/5224354917` |
| Native Advanced | `ca-app-pub-3940256099942544/2247696110` |
| Native Advanced Video | `ca-app-pub-3940256099942544/1044960115` |

### iOS

| Ad format | Sample ad unit ID |
| --- | --- |
| Banner | `ca-app-pub-3940256099942544/2934735716` |
| Interstitial | `ca-app-pub-3940256099942544/4411468910` |
| Interstitial Video | `ca-app-pub-3940256099942544/5135589807` |
| Rewarded Video | `ca-app-pub-3940256099942544/1712485313` |
| Native Advanced | `ca-app-pub-3940256099942544/3986624511` |
| Native Advanced Video | `ca-app-pub-3940256099942544/2521693316` |



## Test Devices

If you need to confirm your ad unit id you must specify the test device id on your requests:

```as3
var request:AdRequest = new AdRequestBuilder()
							.addTestDevice( "33BE2250B43518CCDA7DE426D04EE231" )
							.build();

adView.load( request );
```

This test id is listed in the device logs when testing an ad request.


#### Android

Check the logcat output for a message that looks like this:

```
I/Ads: Use AdRequest.Builder.addTestDevice("33BE2250B43518CCDA7DE426D04EE231") to get test ads on this device."
```

>
> Android emulators are automatically configured as test devices.
>

Read more [here](https://developers.google.com/admob/android/test-ads)



#### iOS

Check the console (device logs) for a message that looks like this:

```
<Google> To get test ads on this device, call: request.testDevices = @[ @"2077ef9a63d2b398840261c8221a0c9b" ];
```


Read more [here](https://developers.google.com/admob/ios/test-ads)
