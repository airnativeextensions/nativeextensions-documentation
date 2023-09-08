---
title: Analytics
sidebar_label: Analytics
---

## Tracking Sessions

### Session lifecycle

If you have integrated Braze using `BrazeConfig.setSessionHandlingEnabled(true)`, `openSession()` and `closeSession()` will be called automatically for your app.

:::note Android
By default, sessions on Android are opened upon the first call to openSession() and are closed after an app has been out of the foreground for longer than 10 seconds. Note that calling closeSession() does not close a session immediately. Rather, it closes a session in 10 seconds if the user doesn’t call openSession() (e.g., by navigating to another activity) in the interim.

An Android session times out after 10 seconds without any communication from the host application. This means if a user backgrounds the app and returns 9 seconds later, the same session will be continued. Note that if a session closes while the user has the app backgrounded, that data may not be flushed to the server until the app is opened again.
:::

:::note
If you need to force a new session, you can do so by changing users.
:::

### Customizing session timeout

To customize the session timeout, call `setSessionTimeout()` with the number of seconds on your `BrazeConfig` instance.

```actionscript
var options:BrazeConfig = new BrazeConfig()
        ...
        .setSessionTimeout(100)
;
```

### Subscribing to session updates

To listen for session open and close updates add a listener for the `BrazeSessionEvent.SESSION_STARTED` and `BrazeSessionEvent.SESSION_ENDED` events:

```actionscript
Braze.instance.addEventListener( BrazeSessionEvent.SESSION_STARTED, session_startedHandler );
Braze.instance.addEventListener( BrazeSessionEvent.SESSION_ENDED, session_endedHandler );

function session_startedHandler( event:BrazeSessionEvent ):void
{
    trace( "session_startedHandler: " + event.sessionId );
}

function session_endedHandler( event:BrazeSessionEvent ):void
{
    trace( "session_endedHandler: " + event.sessionId );
}
```

## Setting User IDs

User IDs should be set for each of your users. These should be unchanging and accessible when a user opens the app. Naming your user IDs correctly from the start is one of the most crucial steps when setting up user IDs. We strongly suggest using the Braze standard of UUIDs and GUIDs (detailed below). We also strongly recommend providing this identifier as it will allow you to:

- Track your users across devices and platforms, improving the quality of your behavioral and demographic data.
- Import data about your users using our user data API.
- Target specific users with our messaging API for both general and transactional messages.

### Assigning a user ID

You should make the following call as soon as the user is identified (generally after logging in) in order to set the user ID:

```actionscript
Braze.instance.changeUser( YOUR_USER_ID_STRING );
```

:::caution
Do not call `changeUser()` when a user logs out. `changeUser()` should only be called when the user logs into the application. Setting `changeUser()` to a static default value will associate ALL user activity with that default "user" until the user logs in again.
:::

Additionally, we recommend against changing the user ID when a user logs out, as it makes you unable to target the previously logged-in user with reengagement campaigns. If you anticipate multiple users on the same device, but only want to target one of them when your app is in a logged-out state, we recommend separately keeping track of the user ID you want to target while logged out and switching back to that user ID as part of your app’s logout process.

### Aliasing users

A user alias serves as an alternative unique user identifier. Use aliases to identify users along different dimensions than your core user ID:

- Set a consistent identifier for analytics that will follow a given user both before and after they have logged in to a mobile app or website.
- Add the identifiers used by a third-party vendor to your Braze users in order to more easily reconcile your data externally.

Each alias consists of two parts: a name for the identifier itself, and a label indicating the type of alias. Users can have multiple aliases with different labels, but only one name per label.

```actionscript
Braze.instance.getCurrentUser().addAlias( ALIAS_NAME, ALIAS_LABEL );
```

## Assigning User Attributes

To assign attributes to your users, call the `getCurrentUser()`` method on your Braze instance to get a reference to the current user of your app. Once you have a reference to the current user, you can call methods to set predefined or custom attributes.

### Standard user attributes

Braze provides predefined methods for setting the following user attributes within the `BrazeUser` instance .

- First name
- Last name
- Country
- Language
- Date of birth
- Email
- Gender
- Home city
- Phone number

All string values such as first name, last name, country, and home city are limited to 255 characters.

For example:

```actionscript
with (Braze.instance.getCurrentUser())
{
    setFirstName( "John" );
    setLastName( "Smith" );
    setLanguage( "en" );
    setCountry( "COUNTRY" );
    setEmail( "EMAIL@ADDRESS.COM" );
    setGender( Gender.PREFER_NOT_TO_SAY );
    addAlias( "ALIAS_NAME", "ALIAS_LABEL" );
}
```

### Setting custom attribute values

```actionscript
Braze.instance.getCurrentUser().setCustomUserAttribute( "your_attribute_key", "your_attribute_value" );
```

### Unsetting a custom attribute

Custom attributes can also be unset using the following method:

```actionscript
Braze.instance.getCurrentUser().unsetCustomUserAttribute( "your_attribute_key" );
```

### Setting up user subscriptions

To set up a subscription for your users (either email or push), call the functions `setEmailNotificationSubscriptionType()` or `setPushNotificationSubscriptionType()`, respectively. Both of these functions take the enum type NotificationSubscriptionType as arguments. This type has three different states:

| SUBSCRIPTION STATUS                         | DEFINITION                               |
| ------------------------------------------- | ---------------------------------------- |
| `NotificationSubscriptionType.OPTED_IN`     | Subscribed, and explicitly opted in      |
| `NotificationSubscriptionType.SUBSCRIBED`   | Subscribed, but not explicitly opted in  |
| `NotificationSubscriptionType.UNSUBSCRIBED` | Unsubscribed and/or explicitly opted out |

:::note Important
No explicit opt-in is required by Android to send users push notifications. When a user is registered for push, they are set to `SUBSCRIBED` rather than `OPTED_IN` by default. Refer to managing user subscriptions for more information on implementing subscriptions and explicit opt-ins.
:::

```actionscript title="Setting email subscriptions"
Braze.instance.getCurrentUser().setEmailNotificationSubscriptionType( NotificationSubscriptionType.SUBSCRIBED );
```


```actionscript title="Setting push notification subscriptions"
Braze.instance.getCurrentUser().setPushNotificationSubscriptionType( NotificationSubscriptionType.SUBSCRIBED );
```


## Tracking custom events

Before implementation, be sure to review examples of the segmentation options afforded by custom events, custom attributes, and purchase events in the [analytics overview](https://www.braze.com/docs/developer_guide/platform_wide/analytics_overview/#user-data-collection), as well as the notes on [event naming conventions](https://www.braze.com/docs/user_guide/data_and_analytics/custom_data/event_naming_conventions/).

### Adding a custom event

```actionscript
Braze.instance.logCustomEvent( YOUR_EVENT_NAME );
```

### Adding properties

You can add metadata about custom events by passing a `BrazeProperties` object with your custom event.

Properties are defined as key-value pairs.

```actionscript
Braze.instance.logCustomEvent(
        YOUR_EVENT_NAME,
        new BrazeProperties()
                .addProperty( "test", "true" )
                .addProperty( "source", "distriqt-test-app" )
);
```

### Reserved keys

The following keys are reserved and cannot be used as custom event properties:

- `time`
- `event_name`




## Logging Purchases

>
> Record in-app purchases so that you can track your revenue over time and across revenue sources, as well as segment your users by their lifetime value. This reference article shows how to track in-app purchases and revenue and assign purchase properties in your Android or FireOS application.
>

Braze supports purchases in multiple currencies. Purchases that you report in a currency other than USD will be shown in the dashboard in USD based on the exchange rate at the date they were reported.

Before implementation, be sure to review examples of the segmentation options afforded by custom events, custom attributes, and purchase events in the [analytics overview](https://www.braze.com/docs/developer_guide/platform_wide/analytics_overview/#user-data-collection).


To use this feature, call `logPurchase()`  after a successful purchase in your app. If the product Identifier is empty, the purchase will not be logged to Braze.

```actionscript
Braze.instance.logPurchase(
        "productId",
        "currencyCode",
        1.23, // price
        1 // quantity
);
```

:::note Tip
If you pass in a value of 10 USD and a quantity of 3, that will log to the user’s profile as three purchases of 10 dollars for a total of 30 dollars. Quantities must be less than or equal to 100. Values of purchases can be negative.
:::

### Adding properties

You can add metadata about purchases by either passing a `BrazeProperties` object with your purchase information.

Properties are defined as key-value pairs. 

```actionscript
Braze.instance.logPurchase(
        "productId",
        "currencyCode",
        1.23, // price
        1, // quantity
        new BrazeProperties()
			.addProperty( "key", "value" )
);
```

### Reserved keys

The following keys are reserved and cannot be used as purchase properties:

- `time`
- `product_id`
- `quantity`
- `event_name`
- `price`
- `currency`



## Disabling SDK Tracking

In order to comply with data privacy regulations, data tracking activity on the SDK can be stopped entirely using the method `disableSDK()` . This method will cause all network connections to be canceled, and the Braze SDK will not pass any data to Braze’s servers. If you wish to resume data collection at a later point in time, you can use the `enableSDK()`  method in the future to resume data collection.

Additionally, you can use the method `wipeData()`  to fully clear all client-side data stored on the device.

