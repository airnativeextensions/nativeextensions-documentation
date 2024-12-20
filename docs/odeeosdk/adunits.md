---
title: Ad Units 
---

The OdeeoSDK supports the following ad units:


| Ad unit Type | Type identifier | Details |
| --- | --- | --- |
| Icon | `AdUnitType.ICON` | Audio ad with a displayed squared icon visual in a customizable size (see size details below) |
| Rewarded Icon | `AdUnitType.REWARDED_ICON` | Audio ad with a displayed squared icon visual in a customizable size (see size details below) which is resulted in a user-in-game reward (and related to a Rewarded Callback) |
| Banner | `AdUnitType.BANNER` | Audio ad with a displayed banner visual (320x50) |
| Rewarded Banner | `AdUnitType.REWARDED_BANNER` | Audio ad with a displayed banner visual (320x50) which is resulted in a user-in-game reward (and related to a Rewarded Callback) |


## Create an Ad Unit

In order to successfully create an ad unit via the Odeeo SDK you must obtain a valid ‘Placement ID’ - this may be created on the Odeeo Publisher Portal, under your relevant created app, or provided by your account manager.


:::note
Odeeo’s SDK allows for multiple ad units with different placement IDs to be created and multiple placements (and hence placement IDs) may be created and used for the same Ad Unit type, with different configurations and per your needs.

The different Audio placements cannot be played simultaneously.
:::

The placement ID you are using is created under the specific app (package ID and API KEY) used for the integration, as this is validated by the SDK.
In addition, the placement ID created via the portal must be created with the same Ad Unit Type used in the SDK function.


To create an `AdUnit` use the appropriate type and call the `createAdUnit()` method, eg to create an icon ad unit:

```actionscript
var adUnit:AdUnit = OdeeoSDK.instance.createAdUnit( AdUnitType.ICON, "PLACEMENT_ID" );
```


## Play the Ad

Check if the ad is available to display:

```actionscript
if (adUnit.isAdAvailable())
{
    // Ad Unit is available
}
```

When an ad is available to display, show ad using the show function:

```actionscript
adUnit.showAd();
```


## Force Ad Close

This function stops and closes the currently playing ad. You will not be able to continue playing it, and a new ad will be fetched to potentially be shown.

**We recommend using this function only in extreme cases and not as a standard.**

As a best practice, we recommend allowing the ads to continue playing without pausing even if the user is starting a new session or ending a session in the game. In case a new audio session begins in the app (can be from a phone call, another video ad etc.) our SDK will pause the playing ad and resume it once the session is done (assuming it is within our ad-session time frame).

```actionscript
adUnit.removeAd();
```


## AdUnit position and size functions

Our ad units are flexible in their position, sizing and general design to allow you the best fit to your app’s design requirements.
We allow multiple functions via the SDK to control the look-and-feel of our ad units.


### Icon Ad Types

Choose the Icon position on the screen and its size using specific pixels, using the `setIconPosition()` and `setIconSize()` methods.

```actionscript
var xOffset:int = 20; //In pixels
var yOffset:int = 400; //In pixels
var size:int = 84; //In pixels

var position:AdPosition = AdPosition.IconPosition_TopRight;

adUnit.setIconPosition(position, xOffset, yOffset);
adUnit.setIconSize(size);
```


### Banner Ad Types 


Use the `setBannerPosition()` function to set up the banner position.

```actionscript
adUnit.setBannerPosition( AdPosition.BannerPosition_TopCenter );
```


## AdUnit additional options

### Device Volume

```actionscript
var volume:Number = OdeeoSDK.instance.getDeviceVolumeLevel();
```

:::note
This function return your current device volume level in percentages from 0 to 100.
:::


### Progress Bar colour

Each of our units (logo and banner) contains a progress bar, indicating the audio ad length and current progress. By default, our progress bar will be displayed in white (in case this function is not used). To allow you to best fit the ad design to your game, you may change the colour of the progress bar by using the function `setProgressBarColour()`.

For example to set the progress bar colour to red:

```actionscript
adUnit.setProgressBarColour( "#FF0000" );
```




## Ad Events

The Ad Units dispatch several events to inform you about ad availability and activity.

- `AdUnitEvent.AVAILABILITY_CHANGED`: Invoked when the ad availability is changing their status
- `AdUnitEvent.CLOSE`: Invoked when ad is closed
- `AdUnitEvent.SHOW`: Invoked when ad is shown
- `AdUnitEvent.CLICK`: Invoked when ad is clicked
- `AdUnitEvent.REWARD`: Invoked when user can be rewarded
- `AdUnitEvent.ERROR`: OnShowFailed Invoked when the function to show ad has failed
- `AdUnitEvent.MUTE`: Invoked when ad is muted by the user
- `AdUnitEvent.PAUSE`: Invoked every time the ad is paused 
- `AdUnitEvent.RESUME`: Invoked every time the ad is resumed after being paused
- `AdUnitImpressionEvent.IMPRESSION`: Invoked on audible impression and contains info about the impression like the eCPM value for the impression, placementID, sessionID, AdType & Country.


Example:

```actionscript
adUnit.addEventListener( AdUnitEvent.AVAILABILITY_CHANGED, adUnitAvailabilityChangedHandler );
adUnit.addEventListener( AdUnitEvent.CLOSE, adUnitCloseHandler );
adUnit.addEventListener( AdUnitEvent.SHOW, adUnitShowHandler );
adUnit.addEventListener( AdUnitEvent.CLICK, adUnitClickHandler );
adUnit.addEventListener( AdUnitEvent.REWARD, adUnitRewardHandler );
adUnit.addEventListener( AdUnitEvent.ERROR, adUnitErrorHandler );
adUnit.addEventListener( AdUnitEvent.MUTE, adUnitMuteHandler );
adUnit.addEventListener( AdUnitImpressionEvent.IMPRESSION, adUnitImpressionHandler );

function adUnitAvailabilityChangedHandler( event:AdUnitEvent ):void
{
    trace( "adUnitAvailabilityChangedHandler: " + event.flag );
    trace( "adData: " + JSON.stringify( event.adData.toObject() ) );
}

function adUnitCloseHandler( event:AdUnitEvent ):void
{
    trace( "adUnitCloseHandler" );
}

function adUnitShowHandler( event:AdUnitEvent ):void
{
    trace( "adUnitShowHandler" );
}

function adUnitClickHandler( event:AdUnitEvent ):void
{
    trace( "adUnitClickHandler" );
}

function adUnitRewardHandler( event:AdUnitEvent ):void
{
    trace( "adUnitRewardHandler: " + event.rewardValue );
}

function adUnitErrorHandler( event:AdUnitEvent ):void
{
    trace( "adUnitErrorHandler: " + event.error.message );
}

function adUnitMuteHandler( event:AdUnitEvent ):void
{
    trace( "adUnitMuteHandler: " + event.flag );
}

function adUnitImpressionHandler( event:AdUnitImpressionEvent ):void
{
    trace( "adUnitImpressionHandler" );
    trace( "impressionData: " + JSON.stringify( event.impressionData.toObject() ) );
}
```
