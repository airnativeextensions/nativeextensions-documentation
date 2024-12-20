---
title: Initialisation
---

Once you have installed the extension you will need to initialise the Odeeo SDK. 



## Log level selection

The log level allows you to define what type of log information you would like to receive from the OdeeoSDK. The default level in case nothing is sent will be "info".



You may change the Log Level as detailed below:

| Level | Description |
| --- | --- |
| `LogLevel.NONE` | OdeeoSDK doesn’t produce any log output |
| `LogLevel.INFO` | OdeeoSDK produces only critical log statements |
| `LogLevel.DEBUG` | OdeeoSDK produces full verbose logs. This should be used while developing and troubleshooting |

```actionscript
OdeeoSDK.service.setLogLevel( LogLevel.DEBUG );
```


## Initialise

:::caution
This should be done once, when your app starts.
:::


```actionscript
OdeeoSDK.instance.initialise( API_KEY );
```

The `APP_KEY` is your Odeeo API key for your application which can be retrieved from the Odeeo dashboard.


### Initialisation State

To check if the SDK is initialised use the `isInitialised()` method:

```actionscript
if (OdeeoSDK.instance.isInitialised())
{
    // SDK is initialised
}
```

You can also use the callback events, `OdeeoSDKEvent.INIT_FAILED` and `OdeeoSDKEvent.INIT_SUCCESS` to determine when the SDK has been initialised.

```actionscript
OdeeoSDK.instance.addEventListener( OdeeoSDKEvent.INIT_FAILED, initFailedHandler );
OdeeoSDK.instance.addEventListener( OdeeoSDKEvent.INIT_SUCCESS, initSuccessHandler );

OdeeoSDK.instance.initialise( API_KEY );

function initFailedHandler( event:OdeeoSDKEvent ):void
{
    // initialisation error: event.error.message
}

function initSuccessHandler( event:OdeeoSDKEvent ):void
{
    // sdk is initialised
}
```



## Optional: Send UserID

We provide the option to send us an internal user ID for reporting an attribution reasons. This ID may be your own generated ID, or your MMP user ID - depending on your reporting needs.
This ID can later on be used for reporting revenue per user to your desired platform (for example - ILRD reporting to your MMP for LTV calculation).

To pass the User ID via the SDK use the following API:

```actionscript
OdeeoSDK.instance.setPublisherUserID( "USER_ID" );
```

You can retrieve previously set User ID value by using this functions:

```actionscript
var userId:String = OdeeoSDK.instance.getPublisherUserID();
```



## Regulation Advanced Settings


### CCPA - Privacy String


The intention of the California Consumer Privacy Act of 2018 (CCPA) is to protect the personal information of California residents. CCPA applies to all companies doing business in California. If a California resident uses an app developer’s mobile app, CCPA applies to the developer and every company that processes the personal information of the app’s users.

The CCPA requires you to collect your user's consent to collect their data for users within the region scope.

See IAB’s CCPA specs [here](https://iabtechlab.com/standards/ccpa/).

**Once you have collected the user’s consent, you can pass it onto the SDK using the following API:**

```actionscript
OdeeoSDK.instance.setDoNotSell( doNotSell, "privacyString" );
```


### COPPA Compliance (Child-Directed Apps with Age Gates)

Odeeo’s SDK (starting SDK Version 1.4.0+) enables publishers to flag specific end-users as children, as may be permitted or required by applicable law. 
Publishers of child-directed apps are responsible for determining whether an app is permitted to flag at the end-user level or must treat all end-users as children. Publishers should consult with their legal counsel accordingly.

If your app is entirely directed to children or entirely not directed to children, this can be placed as a global flag on Odeeo’s end (please approach your account manager for this setup). Otherwise, you may choose to send this indication on a user-level basis via the SDK function.

**The indication of whether a specific end-user is a child should be done using a “IsChildDirected” flag, by setting its value to “true” or “false” as detailed below:**

```actionscript
OdeeoSDK.instance.setIsChildDirected( true );
```


