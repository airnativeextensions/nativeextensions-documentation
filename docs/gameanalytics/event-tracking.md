---
title: Event Tracking
sidebar_label: Event Tracking
---

GameAnalytics features the following event types:

| Event                              | Description                                                                              |
| ---------------------------------- | ---------------------------------------------------------------------------------------- |
| [Ad](#ad-events)                   | Ads shown and clicked, fill rate.                                                        |
| [Business](#business-events)       | In-App Purchases supporting receipt validation on GA servers.                            |
| [Design](#design-events)           | Submit custom event id’s. Useful for tracking metrics specifically needed for your game. |
| [Error](#error-events)             | Submit exception stack traces or custom error messages.                                  |
| [Progression](#progression-events) | Level attempts with Start, Fail & Complete event.                                        |
| [Resource](#resource-events)       | Managing the flow of virtual currencies - like gems or lives                             |

## Ad Events

Ad events are used to track player interactions with ads (e.g. impressions, clicks) and include placement, format and performance data. These events are essential for analyzing ad engagement and performance.

:::info
These events must be manually implemented.
:::

### Event Fields

| Field                 | Description                                                             | Type    | Possible Values                                                                | Required |
| --------------------- | ----------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------ | -------- |
| `ad_action`           | The action made in relation to the ad                                   | int     | Value from `GAAdAction`, eg `GAAdAction.SHOW`                                  | Yes      |
| `ad_type`             | Type of ad                                                              | int     | Value from `GAAdType`, eg `GAAdType.REWARDED_VIDEO`                            | Yes      |
| `ad_sdk_name`         | Name of the ad provider                                                 | String  | Any string, lowercase with no spaces or underscores (e.g. `applovin`, `admob`) | Yes      |
| `ad_placement`        | Placement/identifier of the ad within the game                          | String  | Any string, max 64 characters (e.g. `end_of_game`)                             | Yes      |
| `ad_fail_show_reason` | The reason why the ad failed to show                                    | String  | Value from `GAAdError`, eg `GAAdError.NO_FILL`                                 | No       |
| `ad_duration`         | The duration in milliseconds that the ad was shown for                  | int     | Example: 3500 (in milliseconds = 3.5 seconds)                                  | No       |
| `ad_first`            | The field can be added if this is the first ad to be shown for the user | Boolean | `true`, `false`                                                                | No       |

### Example

```actionscript
// Generic ad event
GameAnalytics.instance.addAdEvent(
    GAAdAction.SHOW,
    GAAdType.REWARDED_VIDEO,
    "admob",
    "rewarded_home"
);

// With duration in milliseconds
GameAnalytics.instance.addAdEvent(
    GAAdAction.SHOW,
    GAAdType.VIDEO,
    "admob",
    "inter_level",
    30000
);

// No-ad reason
GameAnalytics.instance.addAdEventWithNoAdReason(
    GAAdAction.FAILED_SHOW,
    GAAdType.REWARDED_VIDEO,
    "admob",
    "rewarded_home",
    GAAdError.NO_FILL
);
```

## Business Events

Business events capture real-money, in-app purchases (IAP) made by users, including receipt validation on GameAnalytics’ servers.

:::info
These events must be manually implemented.
:::

### Event Fields

| Field     | Description                                          | Type   | Possible Values                                                                  | Required |
| --------- | ---------------------------------------------------- | ------ | -------------------------------------------------------------------------------- | -------- |
| cart_type | The location in the game where the purchase was made | String | E.g. shop, end_of_level, tutorial_pop_up                                         | No       |
| item_type | The type/category of the item                        | String | Max 64 characters                                                                | Yes      |
| item_id   | The specific item bought                             | String | Max 64 characters                                                                | Yes      |
| amount    | The amount of the purchase, in cents                 | int    | E.g. 99 (for $0.99)                                                              | Yes      |
| currency  | The currency (real money) used to make the purchase  | String | Currency code in ISO 4217 format, e.g. USD, EUR                                  | Yes      |
| receipt   | The app store receipt                                | String | See IAP Purchase Validation and specific SDK documentation for more information. | No       |
| signature | The purchase validation signature                    | String | See IAP Purchase Validation and specific SDK documentation for more information. | No       |

:::info
Amount has to be sent as cents of the preferred currency, multiplying the price by 100 and sending the amount as an integer. Note that while the value is stored in US Dollars, the dashboards display the revenue based on the Currency selected in your Personal settings.
:::

### Example

```actionscript
// Basic business event
GameAnalytics.instance.addBusinessEvent(
    "USD",
    499,
    "iap",
    "coins_500",
    "shop"
);

// With receipt fields (when available)
GameAnalytics.instance.addBusinessEvent(
    "USD",
    499,
    "iap",
    "coins_500",
    "shop",
    receipt,
    store,
    signature
);
```

## Design Events

Design events are used to track any custom, game-specific interaction not covered by our other event types (e.g. tutorial steps, feature use, player choices).

- Using our other, prescriptive event types (like Ad, Business or Resource) gives you access to dashboards that are pre-populated with relevant KPIs. Design events, by contrast, are fully custom. You’ll need to create your own dashboards and visualizations to analyze them.
- Tracking levels, worlds, or missions? Use [Progression events](#progression-events) instead — they’re designed specifically for structured progression tracking.

:::info
These events must be manually implemented.
:::

### Event Fields

| Field    | Description                                                                                                                                                                                  | Type   | Possible Values         | Required |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------- | -------- |
| event_id | A colon-separated string of up to 5 segments that define the event hierarchy. Each level in the hierarchy will form a part in the name of the event. See below for more on event hierarchies | String | e.g. `kill:robot:large` | Yes      |
| value    | A field for numeric data, like time, damage or scores                                                                                                                                        | Number | Any numeric value       | No       |

### Example

```actionscript
// Without value
GameAnalytics.instance.addDesignEvent( "ui:button:play" );

// With value
GameAnalytics.instance.addDesignEvent( "combat:damage", 47.5 );
```

## Resource Events

Resource events are used to track virtual economy activity - any time players gain or spend currency. They help model currency flow, detect imbalances and evaluate monetization strategies.

:::info
These events must be manually implemented.
:::

### Event Fields

| Field             | Description                                      | Type   | Possible Values                                               | Required |
| ----------------- | ------------------------------------------------ | ------ | ------------------------------------------------------------- | -------- |
| flow_type         | The direction of the resource transaction        | int    | Value from `GAResourceFlowType`, eg `GAResourceFlowType.SINK` | Yes      |
| resource_currency | Type of virtual currency used                    | String | Up to 50 unique currencies are allowed                        | Yes      |
| amount            | Number of units added or removed                 | Number | 69                                                            | No       |
| item_type         | Category of the item involved in the transaction | String | Up to 20 unique items types are allowed                       | No       |
| item_id           | Specific identifier for the item                 | String | boots_of_speed                                                | No       |

### Example

```actionscript
GameAnalytics.instance.addResourceEvent(
    GAResourceFlowType.SINK,
    "gems",
    25,
    "boost",
    "speed_boost"
);
```

## Progression Events

Progression events are used to track a player’s journey through structured gameplay – such as worlds, levels, missions, and quests. They’re ideal for building funnel views, measuring drop off and analyzing completion rates.

:::info
These events must be manually implemented.
:::


### Event Fields

| Field             | Description                                                  | Type   | Possible Values                        | Required |
| ----------------- | ------------------------------------------------------------ | ------ | -------------------------------------- | -------- |
| progressionStatus | Indicates the outcome of the step                            | int    | Value from `GAProgressionStatus`       | Yes      |
| progression01     | Top-level of progression hierarchy                           | String | E.g. `world_1`, `quest`, `tutorial`    | Yes      |
| progression02     | Mid-level of progression hierarchy                           | String | E.g. `level_4`, `chapter_2`, `quest_1` | No       |
| progression03     | Sub-level or variation of progression hierarchy              | String | E.g. `hard`, `boss`, `time_spent`      | No       |
| value             | Numeric value associated with progression (e.g. time, score) | int    | Any integer (e.g. `1500`, `92`)        | No       |

### Example

```actionscript
// Without score
GameAnalytics.instance.addProgressionEvent(
    GAProgressionStatus.START,
    "world_01",
    "level_03",
    "phase_01"
);

// With score
GameAnalytics.instance.addProgressionEvent(
    GAProgressionStatus.COMPLETE,
    "world_01",
    "level_03",
    "phase_01",
    123450
);
```

## Error Events

Error events are used to log exceptions, warnings and error messages, including stack traces. They help track technical issues that affect performance or stability.

### Event Fields

| Field    | Description                                                          | Type   | Possible Values              | Required |
| -------- | -------------------------------------------------------------------- | ------ | ---------------------------- | -------- |
| severity | Indicates the impotance of the error                                 | int    | Value from `GAErrorSeverity` | Yes      |
| warning  | A description of the error that can be a custom label or stack trace | String | Any string                   | No       |

### Example

```actionscript
GameAnalytics.instance.addErrorEvent(
    GAErrorSeverity.ERROR,
    "Failed to load inventory payload"
);
```
