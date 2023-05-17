---
title: Tracking Events and Revenue
sidebar_label: Tracking Events and Revenue
---

Singular can collect data about in-app events to help analyze the performance of your campaigns and measure KPIs. For example, your organization may want to collect data about user logins, registrations, tutorial completions, or leveling up in a gaming app.


## Tracking Events

Singular supports a variety of standard events. These commonly used events are often supported by ad networks for reporting and optimization. Another advantage is that when you use standard event names, Singular recognizes them automatically and adds them to the Events list without you having to define them manually. We recommend using standard events whenever possible.

To log an event use the `event()` method, passing an event name and any optional attributes as key/value pairs in a standard `Object`.

The standard Singular event names are defined as constants in the `SingularEvents` class and similarly standard attributes are defined in the `SingularAttributes` class. 



#### Send the standard event sng_tutorial_complete with the recommended standard attributes

```actionscript
var args:Object = {};
args[SingularAttributes.CONTENT] = "Tutorial name";
args[SingularAttributes.CONTENT_ID] = "contentId";
args[SingularAttributes.CONTENT_TYPE] = "type of content";
args[SingularAttributes.SUCCESS] = true;

var success:Boolean = Singular.instance.event( SingularEvents.TUTORIAL_COMPLETE, args );
```


#### Send the standard event "Subscribe" (sng_subscribe), no attributes

```actionscript
Singular.instance.event( SingularEvents.SUBSCRIBE );
```


#### Send a custom event named "bonus_points_earned" with a custom attribute

```actionscript
Singular.instance.event(
        "bonus_points_earned",
        {
            "points": 500
        }
);
```


## Tracking Revenue

Singular can collect data about revenue gained through the app to help analyze the performance and ROI of your campaigns. Singular will make the data available to you in reports, log export, and postbacks.


To send revenue information call the `revenue()` method and pass the currency and amount. 

```actionscript
Singular.instance.revenue( "AUD", 1.99 );
```


You can also pass product information along with the revenue information:

```actionscript
Singular.instance.revenue(
        "AUD",
        0.86,
        "product_id",   // product sku / id 
        "test product", // product name
        "testing_cat",  // product category
        1,              // product quantity
        0.86            // product price
);
```



