---
title: Migrating to Version 8
sidebar_label: Migrating to Version 8
---

Version 8 of the FacebookAPI brings a complete rewrite and restructure of the API to bring it inline with the latest Facebook SDK and to remove a series of API elements that Facebook have deprecated and removed over time.

During this redevelopment we have broken the extension up into several extensions each representing a component of the Facebook SDK.

- Core: contains the base SDK including analytics, events, app links and the graph API;
- Login: contains the login SDK allowing you to sign in users using their Facebook credentials;
- Share: contains the share SDK allowing your users to share content;

This allows you to only add the components that you require in your application allowing you to reduce the size of your application.


Migrating from a previous version of the ANE will involve some major changes to your code. Below we will outline some of the major changes and how to address them.

While this guide covers the key points on migrating, we do highly recommend considering re-implementing the extensions from the start, due to the number of changes. 


## Change extensions

Firstly you should remove the `com.distriqt.FacebookAPI` extension from your application.

Then add the 3 new Facebook extensions:

- `com.distriqt.facebook.Core`
- `com.distriqt.facebook.Login`
- `com.distriqt.facebook.Share`


Your extensions node should now contain:

```xml
<extensions>
    <extensionID>com.distriqt.facebook.Core</extensionID>
    <extensionID>com.distriqt.facebook.Login</extensionID>
    <extensionID>com.distriqt.facebook.Share</extensionID>

    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>com.distriqt.Bolts</extensionID>

    <extensionID>androidx.core</extensionID>
    <extensionID>androidx.appcompat</extensionID>
    <extensionID>androidx.browser</extensionID>
    <extensionID>androidx.cardview</extensionID>
    <extensionID>androidx.vectordrawable</extensionID>
    <extensionID>com.android.installreferrer</extensionID>
</extensions>
```

## Application Descriptor

We suggest removing all your manifest additions and info additions and checking the [add the extension](core/add-the-extension) guide to ensure you have the latest.


Note there is a small additional manifest entry for the Share extension [here](share/add-the-extension#manifest-additions)


## Imports 

Remove any imports from the `com.distriqt.extension.facebookapi` package. All the imports now are in the `com.distriqt.extension.facebook` package, eg:

```actionscript
import com.distriqt.extension.facebook.core.Facebook;
```



## Initialisation

Previously you would have called `initialiseApp()` as below:

```actionscript
FacebookAPI.service.initialiseApp( "YOUR_FACEBOOK_APP_ID" );
```

Change this to:

```actionscript
Facebook.instance.initialise();
```

More on initialisation [here](core/initialise-the-extension)


## App Events

Key points:

- Class rename: `FacebookAppEvent` -> `AppEvent`
- `FacebookAPI.service.appEvents.logEvent()` -> `Facebook.instance.appEventsLogger.logEvent()`

For example the following legacy code:

```actionscript
var event:FacebookAppEvent = new FacebookAppEvent( AppEventsConstants.EVENT_NAME_ADDED_TO_CART );
event.valueToSum = 54.23;

event.setParameter( AppEventsConstants.EVENT_PARAM_CURRENCY, "USD" );
event.setParameter( AppEventsConstants.EVENT_PARAM_CONTENT_TYPE, "product" );
event.setParameter( AppEventsConstants.EVENT_PARAM_CONTENT_ID, "HDFU-8452" );


FacebookAPI.service.appEvents.logEvent( event );
```

becomes:

```actionscript
var event:AppEvent = 
    new AppEvent()
        .setEventName( AppEventsConstants.EVENT_NAME_ADDED_TO_CART )
        .setValueToSum( 54.23 )
        .setParameter( AppEventsConstants.EVENT_PARAM_CURRENCY, "USD" )
        .setParameter( AppEventsConstants.EVENT_PARAM_CONTENT_TYPE, "product" )
        .setParameter( AppEventsConstants.EVENT_PARAM_CONTENT_ID, "HDFU-8452" )
    ;

Facebook.instance.appEventsLogger.logEvent( event );
```

More on app events [here](core/app-events/overview)



## Graph API

The graph API remains fairly similar:

- Package move: `com.distriqt.extension.facebookapi.graphapi` -> `com.distriqt.extension.facebook.graphapi`
- Class rename: `GraphAPIRequest` -> `GraphRequest`
- Class rename: `GraphAPIRequestBuilder` -> `GraphRequestBuilder`
- `FacebookAPI.service.graphAPI.makeRequest()` -> `Facebook.instance.graphAPI.makeRequest()`


For example the following legacy code:

```actionscript
var request:GraphAPIRequest = new GraphAPIRequestBuilder()
    .setPath( "/me" )
    .build();

FacebookAPI.service.graphAPI.makeRequest( request );
```

becomes:

```actionscript
var request:GraphRequest = new GraphRequestBuilder()
    .setPath( "/me" )
    .build();

Facebook.instance.graphAPI.makeRequest( request );
```

More on the graph API [here](core/graph-api/overview)



## Login

To login you would have called `createSession()`:

```actionscript
FacebookAPI.service.createSession( [ "public_profile", "email" ], true );
```

This becomes:

```actionscript
FacebookLogin.instance.logInWithReadPermissions( [ "public_profile", "email" ] );
```

There are no longer a series of session events to handle, so you can remove any code handling `FacebookAPISessionEvent`s and replace with a couple of simple `FacebookLoginEvent`/`FacebookLoginErrorEvent` events:

```actionscript
FacebookLogin.instance.addEventListener( FacebookLoginEvent.SUCCESS, successHandler );
FacebookLogin.instance.addEventListener( FacebookLoginEvent.CANCEL, cancelHandler );
FacebookLogin.instance.addEventListener( FacebookLoginErrorEvent.ERROR, errorHandler );

FacebookLogin.instance.logInWithReadPermissions( [ "public_profile", "email" ] );


function successHandler( event:FacebookLoginEvent ):void
{
    trace( "successHandler()" );
    // You can now access the user
}

function cancelHandler( event:FacebookLoginEvent ):void
{
    trace( "cancelHandler()" );
}

function errorHandler( event:FacebookLoginErrorEvent ):void
{
    trace( "errorHandler() code :    " + event.errorID  );
    trace( "errorHandler() message : " + event.text  );
}
```

More on the login process [here](login/facebook-login)



## Share Dialog

Sharing through the Facebook SDK has changed dramatically over the past few years. 

You basically only have access to the Share dialog now and a smaller set of content builders (with open graph stories being removed).

The share dialog show has moved, so:

```actionscript
FacebookAPI.service.shareDialog.show( builder.build() );
```

becomes:

```actionscript
FacebookShare.instance.shareDialog.show( builder.build() );
```


More on the share dialog [here](share/share-dialog)


