---
title: Integration
sidebar_label: Integration
---


## Configure your application

This extension requires you call the `Core.init()` function at some point early in your application, generally at the same time as the initialisation of this extension. If you are using other extensions that also require the Core extension, you only need to initialise it once, before initialising any of our extensions.

```actionscript
Core.init();
```

To configure the Braze SDK you will call `configure()` passing an instance of the `BrazeConfig` class which contains all the configuration information for your application.

Importantly you must set the apiKey and endpoint from the settings of your application in the Braze console: 

```actionscript
var options:BrazeConfig = new BrazeConfig()
        .setApiKey( "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" )
        .setCustomEndpoint( "sdk.XXX-01.braze.eu" );

Braze.instance.configure( options );
```


The `BrazeConfig` class also contains a range of other configuration options. 


## Tracking user sessions

The sessions and in-app messaging subscriptions can optionally be handled be automatically.

To enable automatic handling call `setSessionHandlingEnabled( true )`, and  `setInAppMessagingRegistrationEnabled(true)`:


```actionscript
var options:BrazeConfig = new BrazeConfig()
        ...
        .setSessionHandlingEnabled(true)
        .setInAppMessagingRegistrationEnabled(true)
;
```

The first argument instructs the listener to handle `openSession()` and `closeSession()` calls. The second argument instructs the listener to handle `inAppMessaging.register()` and `inAppMessaging.unregister()` calls.


If you set these to false, ensure you call the appropriate session open and close calls in your application.



## Test the integration

At this point, you should have session tracking working in your Braze integration. To test this, go to Overview, select your application from the selected app name dropdown (defaulted to “All Apps”), and set Display Data For to “Today”. Then open your app and refresh the page - your main metrics should all have increased by 1.



## Logging

If you need to debug the Braze SDK calls you can control the log level using the `setLogLevel()` method:

```actionscript
Braze.instance.setLogLevel( BrazeLogLevel.VERBOSE );
```

Logging statements can be observed through the [native logs](https://docs.airnativeextensions.com/docs/tutorials/device-logs) (logcat for Android and the Console for iOS).



## Advertising Identifier (Optional)

The Advertising ID is not automatically collected by the Braze SDK and must be set manually via the `setAdvertisingId()` method.


```actionscript
Braze.instance.setAdvertisingId( advertisingId, isLimitAdTrackingEnabled );
```

You can use the [IDFA](https://airnativeextensions.com/extension/com.distriqt.IDFA) extension to retrieve these values if you require them.

