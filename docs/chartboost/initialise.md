---
title: Initialise
sidebar_label: Initialise
---

To initialise the Chartboost SDK call the `startWithConfig()` method and provide your application configuration.
The `startWithConfig()` method must always be called on bootup, regardless of any other actions your app takes. It will dispatch an event indicating the success or failure of the SDK initialisation.

You will need to firstly create an instance of the `ChartboostConfig` class and specify your Chartboost App identifier and signature.

```actionscript
var config:ChartboostConfig = new ChartboostConfig()
        .setAppId( CHARTBOOST_APPID )
        .setAppSignature( CHARTBOOST_APPSIGNATURE );
```

These values can be found in the dashboard, under "App information" for your application.

Then pass this configuration to the `startWithConfig()` method:

```actionscript
Chartboost.instance.addEventListener( ChartboostEvent.START_SUCCESS, startSuccessHandler );
Chartboost.instance.addEventListener( ChartboostEvent.START_ERROR, startErrorHandler );

Chartboost.instance.startWithConfig( config );

function startSuccessHandler( event:ChartboostEvent ):void
{
    trace( "Chartboost initialised" );
}

function startErrorHandler( event:ChartboostEvent ):void
{
    trace( "Chartboost error: " + event.errorCode + "::" + event.message );
}
```

If an error is dispatched you can check the result and act accordingly.  