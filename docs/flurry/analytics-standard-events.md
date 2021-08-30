---
title: Analytics Standard Events
sidebar_label: Standard Events
---

Events track standardized actions that users take within your app – for example, making a purchase, adding a social comment, or clicking on an Ad. This helps you understand how users interact with your app.

Please Note: You must initiate the session with one of the startSession method variants prior to logging any standard events. Any events logged prior to session initialization will not be recorded.

:::note
You can track up to 1000 unique standard events per session. Once one single session hits the 1000 standard event limit, no further events would be tracked. Note that this limit is shared with other types of events such as the custom event.
:::

##

To log a standard event use the `logStandardEvent()` method and pass the event name and event parameters.

```actionscript
var status:int = Flurry.service.analytics.logStandardEvent(
        FlurryEvent.TUTORIAL_STARTED,
        new FlurryEventParams()
                .putString( FlurryEventParams.TUTORIAL_NAME, "introduction" )
);
```

The return value is the `status` of the event logging and will be one of the values in the `FlurryEventRecordStatus` class. A success is indicated by the `FlurryEventRecordStatus.RECORDED` value (`1`).

## Event Names

Like a custom event, a standard event also has a two-level structure. The highest level is the specific action.

Flurry SDK defines 58 standardized event names, and they are categorized in advertising, gaming, content, commerce, membership, onboarding, registration, search, social, media, and privacy.

These event names are defined in the `FlurryEvent` class, eg `FlurryEvent.PURCHASED`.

## Event Parameters

The second level in the standard event structure is the event parameter, which will be an instance of the `FlurryEventParams` class.

In order for SDK to log a standard event, you might want to put the standardized parameters as well as your own defined parameters together. There will be recommended standardized parameter keys and mandatory standardized parameter keys defined for each standard event name.

For instance, to log `FlurryEvent.PURCHASED` event name, SDK suggests to include `FlurryEventParams.ITEM_COUNT`, `FlurryEventParams.TOTAL_AMOUNT`, `FlurryEventParams.ITEM_ID`, `FlurryEventParams.SUCCESS`, `FlurryEventParams.ITEM_NAME`, `FlurryEventParams.ITEM_TYPE`, `FlurryEventParams.CURRENCY_TYPE` and `FlurryEventParams.TRANSACTION_ID` parameters, in which `FlurryEventParams.TOTAL_AMOUNT` is also a mandatory parameter that is indicated by the SDK.

See the docs on standard events for details on the required parameters for each event:

https://developer.yahoo.com/flurry/docs/analytics/standard_events/

There are a total of 42 standardized parameter keys that each can only be mapped to its corresponding data value - String, Boolean, int, Number. So when you assemble your `FlurryEventParams` object with the standardized parameters, you will need to use the public APIs specified in `FlurryEventParams` class to map them correctly.

| Param Name             | DataType |
| ---------------------- | -------- |
| AD_TYPE                | String   |
| LEVEL_NAME             | String   |
| LEVEL_NUMBER           | int      |
| CONTENT_NAME           | String   |
| CONTENT_TYPE           | String   |
| CONTENT_ID             | String   |
| CREDIT_NAME            | String   |
| CREDIT_TYPE            | String   |
| CREDIT_ID              | String   |
| IS_CURRENCY_SOFT       | Boolean  |
| CURRENCY_TYPE          | String   |
| PAYMENT_TYPE           | String   |
| ITEM_NAME              | String   |
| ITEM_TYPE              | String   |
| ITEM_ID                | String   |
| ITEM_COUNT             | int      |
| ITEM_CATEGORY          | String   |
| ITEM_LIST_TYPE         | String   |
| PRICE                  | Number   |
| TOTAL_AMOUNT           | Number   |
| ACHIEVEMENT_ID         | String   |
| SCORE                  | int      |
| RATING                 | String   |
| TRANSACTION_ID         | String   |
| SUCCESS                | Boolean  |
| IS_ANNUAL_SUBSCRIPTION | Boolean  |
| SUBSCRIPTION_COUNTRY   | String   |
| TRIAL_DAYS             | int      |
| PREDICTED_LTV          | String   |
| GROUP_NAME             | String   |
| TUTORIAL_NAME          | String   |
| STEP_NUMBER            | int      |
| USER_ID                | String   |
| METHOD                 | String   |
| QUERY                  | String   |
| SEARCH_TYPE            | String   |
| SOCIAL_CONTENT_NAME    | String   |
| SOCIAL_CONTENT_ID      | String   |
| LIKE_TYPE              | String   |
| MEDIA_NAME             | String   |
| MEDIA_TYPE             | String   |
| MEDIA_ID               | String   |
| DURATION               | int      |

## Example

Here is an example of logging a purchase event using the new standard event protocol:

```actionscript
var status:int = Flurry.service.analytics.logStandardEvent(
        FlurryEvent.PURCHASED,
        new FlurryEventParams()
                .putNumber( FlurryEventParams.TOTAL_AMOUNT, 34.99 )
                .putBoolean( FlurryEventParams.SUCCESS, true )
                .putString( FlurryEventParams.ITEM_NAME, "bool 1" )
                .putString( "note", "This is an awesome book to purchase !!!" )
);
```

Like a custom event, each standard event can also have up to 10 parameters, and each parameter can have an infinite number of values associated with it. For example, for the `"note"` parameter, there may be 1,000 possible values who wrote an article.
