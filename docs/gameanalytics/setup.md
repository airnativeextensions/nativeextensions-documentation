---
title: Setup
sidebar_label: Setup
---


## Configuration

The available configuration options are:

- build
- available (allowed) custom dimensions
- available (allowed) resource currencies
- available (allowed) resource item types

### Build 

The build parameter is used to specify the current version of your game. Specify it using a string. It is recommended to use a 3 digit version like [major].[minor].[patch].

```actionscript
// Set build version
GameAnalytics.instance.configureBuild("android 1.0.0");
```

#### Auto detect app version to use for build field

There is an option to auto detect app version to use for build field. Just call this before intializing the SDK:

```actionscript
GameAnalytics.instance.configureAutoDetectAppVersion(true);
```


### User ID

The SDK will automatically generate a user id and this is perfectly fine for almost all cases.

Sometimes it is useful to supply this user_id manually – for example if you download raw data for processing and need to match your internal user id (could be a database index on your user table) to the data collected through GameAnalytics.

Note that if you introduce this into a game that is already deployed (using the automatic id) it will start counting existing users as new users and your metrics will be affected. Use this from the start of the app lifetime.

```actionscript
GameAnalytics.instance.configureUserId("user1234567879");
```

### Specifying Allowed Values

For certain types it is required to define a whitelist containing possible unique values during the configuration phase.

When the SDK is being used (after initialization) only the specified values will be allowed. A maximum of 20 values are allowed for each list.

:::danger Danger
Processing many unique dimension values can be taxing for our servers. A few games with a poor implementation can seriously increase our cost and affect stability. Games will be blocked if they submit too many unique dimension values. We have this configuration requirement to guide users into planning what dimension values can be used.
:::

```actionscript
// Configure available virtual currencies and item types
GameAnalytics.instance.configureAvailableResourceCurrencies("gems", "gold");
GameAnalytics.instance.configureAvailableResourceItemTypes("boost", "lives");

// Configure available custom dimensions
GameAnalytics.instance.configureAvailableCustomDimensions01("ninja", "samurai");
GameAnalytics.instance.configureAvailableCustomDimensions02("whale", "dolphin");
GameAnalytics.instance.configureAvailableCustomDimensions03("horde", "alliance");
```


:::info
Each resource currency string should only contain `[A-Za-z]` characters.
:::

### Event Submission

If you for GDPR purposes need to disable event submission you can call the following:

```actionscript
GameAnalytics.instance.setEnabledEventSubmission(false);
```

:::info
By default event submission is of course enabled. You will still receive configs if you have set any for your game even after disabling event submission.
:::



## Initialisation

To initialise the SDK call the `initializeWithGameKey()` method and supply the **game key** and **game secret** for your game.

```actionscript
GameAnalytics.instance.initializeWithGameKey( "[game key]", "[secret key]" )
```



## Session handling

By default sessions are automatic.

Once initialize is called it will start the first session and automatically handle session changes based on activity events. By default the session will start when the application initializes the sdk and when it goes in foreground, the session will end when the application closes or when it goes into background.

If for some reason you want to, you can manually manage your session. This can be enabled with the following method:

```actionscript
GameAnalytics.instance.setEnabledManualSessionHandling(true);
```

After setting the manual session handling you will have to start the session yourself by calling the next method:

```actionscript
GameAnalytics.startSession();
```

And when you need to close the session, you will have to end the current session by calling:

```actionscript
GameAnaylytics.endSession();
```

:::warning Caution
By using manual session handling you will be responsible to decide when the session begins and ends, if not setup correctly it will result in inaccurate readings.
:::

