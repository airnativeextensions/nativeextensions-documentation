---
title: Rewarded Video
sidebar_label: Rewarded Video
---

Rewarded video ads are full-screen video ads that users have the option of watching in full in exchange for in-app rewards.


MAX Rewarded Video Ads are represented by the `MaxRewardedAd` class. 

All of the rewarded video ads functionality is provided through the `AppLovinSDK.instance.rewardedVideoAds` singleton.



## `MaxRewardedAd`

To create a `MaxRewardedAd` instance use the `createMaxRewardedAd()` function:

```as3
var rewardedVideoAd:MaxRewardedAd = AppLovinSDK.instance.rewardedVideoAds.createMaxRewardedAd();
```

This will instanciate an instance of the `MaxRewardedAd` class. You are required to destroy this instance when you are finished with it.


You are required to set the ad unit id by calling the `setAdUnitId` function before any loading is performed.

```as3
rewardedVideoAd.setAdUnitId( "REWARDED_AD_UNIT_ID" );
```


## Loading

Rewarded Video Ads should be preloaded in your application. This allows you to start the load at any time, and only display when your application is ready and when the advert has been loaded. You cannot display a rewarded video ad until it is loaded and ready.

To load an advert you use the `load` function:


```as3
rewardedVideoAd.load();
```

You can listen for events that will inform you on when an advert is available or if there were any errors in loading the advert.

- `RewardedVideoAdEvent.LOADED`: dispatched when an ad has finished loading;
- `RewardedVideoAdEvent.ERROR`: dispatched if the ad failed to load


```as3
rewardedVideoAd.addEventListener( RewardedVideoAdEvent.LOADED, loadedHandler );
rewardedVideoAd.addEventListener( RewardedVideoAdEvent.ERROR, errorHandler );

function loadedHandler( event:RewardedVideoAdEvent ):void
{
	// rewarded video ad loaded and ready to be displayed
}

function errorHandler( event:RewardedVideoAdEvent ):void
{
	// Load error occurred. The errorCode will contain more information
	trace( "Error" + event.errorCode );
}
```

If an error occurs you can use the `errorCode` on the event to determine what type of error occurred. 



## Checking Loaded

You can check whether the advert is loaded by waiting for the `RewardedVideoAdEvent.LOADED` 
or checking the `isLoaded()` flag. It is useful to use the flag to confirm that the ad is loaded before attempting to display the ad:

```as3
if (rewardedVideoAd.isLoaded())
{
	// Show the ad
}
```



## Display 

When you are ready to display the rewarded video you call `show()` as below:

```as3
rewardedVideoAd.show();
```

You should check whether the ad is loaded before calling show to ensure that there is an ad available to display (as noted above). If there isn't this call will fail and return `false`.

```as3
if (rewardedVideoAd.isLoaded())
{
	rewardedVideoAd.show();
}
```



## Events

There are several events dispatched by the rewarded video ad as the user interacts with it (in addition to the loaded and error events already mentioned):

- `RewardedVideoAdEvent.OPENED`: dispatched when an ad opens an overlay that covers the screen;
- `RewardedVideoAdEvent.CLOSED`: dispatched when a user returns to the app, having closed the rewarded video ad;
- `RewardedVideoAdEvent.REWARD`: See the ![](reward section|u.Rewarded Video Ads#rewards)
- `RewardedVideoAdEvent.ERROR`: dispatched if there was an error presenting the ad


```as3
rewardedVideoAd.addEventListener( RewardedVideoAdEvent.OPENED, openedHandler );
rewardedVideoAd.addEventListener( RewardedVideoAdEvent.CLOSED, closedHandler );

function openedHandler( event:RewardedVideoAdEvent ):void 
{
    // The rewarded video ad has been opened and is now visible to the user 
}

function closedHandler( event:RewardedVideoAdEvent ):void 
{
	// Control has returned to your application
	// you should reactivate any paused / stopped parts of your application.
}
```


## Rewards

Rewarding your user should take place after the `RewardedVideoAdEvent.REWARD` event is dispatched.
This is the important event that is dispatched after the user has finished watching the video ad and is when you should give the reward associated with this event to your user.

```as3
rewardedVideoAd.addEventListener( RewardedVideoAdEvent.REWARD, rewardHandler );

function rewardHandler( event:RewardedVideoAdEvent ):void 
{
    // Here you should reward your user

    //     event.rewardAmount contains the amount that should be awarded to your user
    //     event.rewardType contains the type of this reward
}
```



## Refresh

Once you have displayed a rewarded video ad a new ad needs to be loaded in order to display the rewarded video ad again. This is a simple matter of starting a new ad request load:

```as3
rewardedVideoAd.load();
```

The `CLOSED` event is generally a good place to trigger this load so that you ensure you always have a loaded ad available to display in your application, however you can handle this process as you see fit.

