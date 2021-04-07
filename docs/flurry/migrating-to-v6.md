---
title: Migrating to v6.0
sidebar_label: Migrating to v6.0
---

v6.0 brings the current release of Flurry (as at April 2021):

- Android v12.11.0
- iOS v11.2.0

This update has changed some of the functionality and added [User Properties](user-properties).


## Manifest

You now need to add the following to your application node in your manifest additions:


```xml
<provider
    android:name="com.flurry.android.agent.FlurryContentProvider"
    android:authorities="APPLICATION_PACKAGE.FlurryContentProvider"
    android:exported="false" />
```

:::warning
You need to replace `APPLICATION_PACKAGE` with your applications package name, generally your air application id prefixed by `air.` 
:::


## API Changes

In order to update you will need to remove any calls to:

- `setLogEnabled()`: Moved to `FlurryAnalyticsConfig`
- `setSessionContinueSeconds()`: Moved to `FlurryAnalyticsConfig`
- `setCrashReportingEnabled()`: Moved to `FlurryAnalyticsConfig`
- `setLocation()`: This was previously deprecated and has now been removed. Location tracking is done automatically. 


## Configuration

There are several options that are now required at initialisation time, (logging etc) so there is a new class `FlurryAnalyticsConfig` that can be passed in at initialisation time:


```actionscript
var config:FlurryAnalyticsConfig = new FlurryAnalyticsConfig()
		.setLogEnabled(true)
		.setCrashReportingEnabled(true)
		.setSessionContinueSeconds( 6 )
;

Flurry.service.analytics.initialise( "FLURRY_KEY", config );
```


