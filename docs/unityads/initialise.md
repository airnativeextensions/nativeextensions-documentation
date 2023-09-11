---
title: Initialising the SDK
sidebar_label: Initialise
---


To initialize the SDK, you must reference your Project’s Game ID for the appropriate platform. You can locate the ID on the [Monetization dashboard](https://dashboard.unity3d.com/monetization) by selecting CURRENT PROJECT > Project Settings from the secondary navigation menu.

In your script, you need to listen for two events that are dispatched when initialisation completes:

- `UnityAdsEvent.INITIALISE_SUCCESS`: dispatched when initialisation is successful and the sdk is ready to use;
- `UnityAdsEvent.INITIALISE_ERROR`: dispatched when initialisation fails due to an error;

Initialise the SDK early in your project’s run-time life cycle before you need to load an ad. For example:


```actionscript
UnityAds.instance.addEventListener( UnityAdsEvent.INITIALISE_SUCCESS, initialise_successHandler );
UnityAds.instance.addEventListener( UnityAdsEvent.INITIALISE_ERROR, initialise_errorHandler );


UnityAds.instance.initialise( UNITY_GAME_ID );


function initialise_successHandler( event:UnityAdsEvent ):void
{
    // SDK ready to use
}

function initialise_errorHandler( event:UnityAdsEvent ):void
{
    trace( "initialise_errorHandler: " + event.errorType + "::" + event.message );
}
```



When an error occurs, `errorType` can be one of:

- `ErrorType.AD_BLOCKER_DETECTED`
- `ErrorType.INTERNAL_ERROR`
- `ErrorType.INVALID_ARGUMENT`




