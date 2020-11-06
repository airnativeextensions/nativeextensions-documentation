---
title: App Events - Logging
sidebar_label: App Events - Logging
---

:::caution
This is the legacy extension documentation. Find the new documentation [here](../facebookapi/)
:::

## Log Events

App events are the key actions that people take, such as launching your app, viewing content or making a purchase.

You can log app events for any meaningful actions people take in your app. 
There are many pre-defined events such as completed registration, viewed 
content, searched, added to cart, spent credits and more.

Analytics for Apps supports up to 1,000 unique app events for your app, 
so you can also define your own custom events. 

Application activate and deactivate events are automatically handled by the extension.



### App Events

To log an app event you create an instance of the `FacebookAppEvent` class and
pass it to the `FacebookAPI.service.appEvents.logEvent()` function:

```actionscript
var event:FacebookAppEvent = new FacebookAppEvent( AppEventsConstants.EVENT_NAME_ADDED_TO_CART );
event.valueToSum = 54.23;

event.setParameter( AppEventsConstants.EVENT_PARAM_CURRENCY, "USD" );
event.setParameter( AppEventsConstants.EVENT_PARAM_CONTENT_TYPE, "product" );
event.setParameter( AppEventsConstants.EVENT_PARAM_CONTENT_ID, "HDFU-8452" );

FacebookAPI.service.appEvents.logEvent( event );
```

The `AppEventConstants` class defines the current constants for event names and parameters
for the standard set of Facebook events.

You can also specify a set of `parameters` (up to 25 parameters) and a `valueToSum` property which is an 
arbitrary number that can represent any value (e.g., a price or a quantity). 
When reported, all of the valueToSum properties will be summed together. 
For example, if 10 people each purchased one item that cost $10 (and passed in 
valueToSum) then they would be summed to report a number of $100.

The parameters are set in the parameters object `event.parameters` or using 
the `event.setParameter()` function. The must be `String` or `Number` values.

>
> Note that both the `valueToSum` and `parameters` arguments are optional.
>


The full list of pre-defined events and pre-defined parameters are listed in 
the `AppEventConstants` class or in the Facebook documentation.



### Custom App Events 

You can also choose to create your own custom events, which is done simply by specifying their name as a string:

```actionscript
var event:FacebookAppEvent = new FacebookAppEvent( "a_custom_event_name" );
				
FacebookAPI.service.appEvents.logEvent( event );
```

The maximum number of different event names is 1,000. Note no new event types will 
be logged once this cap is hit. However it is possible to [deactivate](https://www.facebook.com/help/analytics/817787101653736) 
obsolete events. 

Read more about event limits in the [FAQ](https://developers.facebook.com/docs/app-events/faq#limits).



### Purchase Events

You can log purchase events using the `logPurchase` function.

```actionscript
var event:FacebookAppPurchaseEvent = new FacebookAppPurchaseEvent( 
	79.99,
	"USD"
);

FacebookAPI.service.appEvents.logPurchase( event );
```

The currency specification is expected to be an [ISO 4217 currency code](http://en.wikipedia.org/wiki/ISO_4217). 
This is used to determine a uniform value for use in ads optimization.


