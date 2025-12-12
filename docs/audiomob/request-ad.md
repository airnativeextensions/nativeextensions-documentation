---
title: Request an Audio Ad
---


There are 2 main types of views (medium rectangle and leaderboard) along with 2 ad types (rewarded and skippable). 


300x250 (Medium Rectangle in Audiomob) is the recommended banner size. This format is the most widely adopted by advertisers and has the highest fill rate. 

![](images/banner-medium-rect.png)

The 320x50 (Leaderboard) size suits traditional banner placements. This format is not as adopted as its 300x250 counterpart.


## Requesting Ads

The `playAd()` function is used to create a view and request an ad. 

You will pass an `AdConfiguration` to the `playAd()` function to configure the view and ad request. 

Use one of the following `AdConfiguration` implementations:

- `RewardedBannerAdConfiguration`: for rewarded ads, requires BannerSize, Banner ViewParams, Unmute ViewParams  
- `SkippableBannerAdConfiguration`: for skipable ads, requires BannerSize, Banner ViewParams

The `playAd()` function returns a boolean value, indicating whether the request was successfully started. 


### Banner Size

You will need to specify the banner size to the configuration. This allows you to control type of ad to display.

For example:

```actionscript 
var config:RewardedBannerAdConfiguration = new RewardedBannerAdConfiguration()
    .setBannerSize( BannerSize.LEADERBOARD )

    ...
```

Valid values for this are defined in the `BannerSize` class:

- `LEADERBOARD`: A leaderboard view  (aspect ratio 320x50)
- `MEDIUM_RECTANGLE`: A rectangular view (aspect ratio 300x250)


### Banner View Params

The `ViewParams` class allows you to set the location and size of the banner. Content will be scaled to fit the specified area so it's important if you are varying the size of the view that you maintain the required aspect ratio for the size. 

```actionscript 
var config:RewardedBannerAdConfiguration = new RewardedBannerAdConfiguration()


    .setBannerViewParams(
        new ViewParams()
            .setVerticalAlign( ViewParams.ALIGN_TOP )
            .setHorizontalAlign( ViewParams.ALIGN_RIGHT )
    )


    ...
```

Using the `ViewParams` class you can set:

- `setPosition( x:int, y:int )`: the x,y position of the view
- `setSize( width:int, height:int )`: the size (width,height) of the view
- `setHorizontalAlign( align:String )`: the horizontal alignment of the view
- `setVerticalAlign( align:String )`: the vertical alignment of the view

:::note
Setting an alignment value may override the position. However you can combine x and vertical alignment or y and horizontal alignment, by setting the other position value to `0`. 
:::



### Unmute View Params

Similarly to the banner view params, you should set a `ViewParams` instance for the unmute view when required (for `RewardedBannerAdConfiguration`)

```actionscript
var config:RewardedBannerAdConfiguration = new RewardedBannerAdConfiguration()

    .setUnmuteViewParams(
        new ViewParams()
            .setVerticalAlign( ViewParams.ALIGN_CENTER )
            .setHorizontalAlign( ViewParams.ALIGN_CENTER )
    )
    
    ...
```

The unmute view is shown when the volume drops below a certain level during a rewarded ad. This ensures that rewards are only received once a user has heard the ad and prompts the user to restore the volume to receive the reward.


![](images/unmute.png)


### Example: Rewarded Medium 

```actionscript
var config:RewardedBannerAdConfiguration = new RewardedBannerAdConfiguration()
    .setBannerSize( BannerSize.MEDIUM_RECTANGLE )
    .setBannerViewParams(
        new ViewParams()
            .setVerticalAlign( ViewParams.ALIGN_TOP )
            .setHorizontalAlign( ViewParams.ALIGN_RIGHT )
    )
    .setUnmuteViewParams(
        new ViewParams()
            .setVerticalAlign( ViewParams.ALIGN_CENTER )
            .setHorizontalAlign( ViewParams.ALIGN_CENTER )
    );

var success:Boolean = Audiomob.instance.playAd(
        config,
        AD_UNIT_ID_REWARDED_MEDIUM
);
```


### Example: Skippable Leaderboard 

```actionscript
var config:SkippableBannerAdConfiguration = new SkippableBannerAdConfiguration()
    .setBannerSize( BannerSize.LEADERBOARD )
    .setBannerViewParams(
        new ViewParams()
            .setPosition( 400, 200 )
            .setSize( 960, 150 )
    );

var success:Boolean = Audiomob.instance.playAd(
        config,
        AD_UNIT_ID_STANDARD_LEADERBOARD
);
```


## Pausing

You can pause ad playback by calling the `pauseAd()` function.

```actionscript
Audiomob.instance.pauseAd();
```

You can resume ad playback by calling `resumePausedAd()`.

```actionscript
Audiomob.instance.resumePausedAd();
```


## Destroy 

You can destroy the current ad by calling `destroyAd()`


```actionscript
Audiomob.instance.destroyAd();
```

This call will stop the ad playback, remove the view and clean up any resources.


## Listening to Events

You can add event listeners to the Audiomob extension to be notified of events during ad requests and playback. These events include:

- `AudiomobEvent.CLICKED`:  Dispatched when the user clicks the banner
- `AudiomobEvent.PAUSED`: Dispatched when the playback is paused, the event will contain the reason for the pause (eg volume was lowered)
- `AudiomobEvent.ERROR`: Dispatched when an error occurs
- `AudiomobPlaybackEvent.STATUS`: Indicates the playback status has changed, `status` will indicate the current state of the ad
- `AudiomobPaidEvent.PAID`: Dispatched when a ad triggered a pay event
- `AudiomobAdDataEvent.DATA_AVAILABLE`: Indicates data is available for the ad

Handling these events is entirely optional. You add listeners for these events in the normal manner:


```actionscript
Audiomob.instance.addEventListener( 
    AudiomobEvent.CLICKED, 
    function ( event:AudiomobEvent ):void
    {
        trace( "CLICKED: " + event.adUnitId );
    } );

Audiomob.instance.addEventListener( 
    AudiomobEvent.PAUSED, 
    function ( event:AudiomobEvent ):void
    {
        trace( "PAUSED: " + event.adUnitId + " reason: " + event.reason );
    } );

Audiomob.instance.addEventListener( 
    AudiomobEvent.ERROR, 
    function ( event:AudiomobEvent ):void
    {
        trace( "ERROR: " + event.adUnitId + " reason: " + event.reason );
    } );

Audiomob.instance.addEventListener( 
    AudiomobPlaybackEvent.STATUS, 
    function ( event:AudiomobPlaybackEvent ):void
    {
        trace( "PLAYBACK STATUS: " + event.status + " for ad sequence: " + JSON.stringify( event.adSequence.toObject() ) );
    } );

Audiomob.instance.addEventListener( 
    AudiomobPaidEvent.PAID, 
    function ( event:AudiomobPaidEvent ):void
    {
        trace( "PAID EVENT: " + JSON.stringify( event.adEcpm.toObject() ) );
    } );

Audiomob.instance.addEventListener( 
    AudiomobAdDataEvent.DATA_AVAILABLE, 
    function ( event:AudiomobAdDataEvent ):void
    {
        trace( "AD DATA AVAILABLE: " + JSON.stringify( event.adData.toObject() ) );
    } );
```



