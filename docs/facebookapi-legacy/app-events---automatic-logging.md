---
title: App Events - Automatic Logging
sidebar_label: App Events - Automatic Logging
---

:::caution
This is the legacy extension documentation. Find the new documentation [here](../facebookapi/)
:::

## Automatically Logged Events

When you use the Facebook SDK, certain events in your app are automatically logged and collected for Facebook Analytics unless you disable automatic event logging. These events are relevant for all use cases - targeting, measurement and optimization.


### Disable Automatically Logged Events

To disable automatic logging you must add certain fields to the manifest and info additions in your application descriptor.

For Android add the following line to your manifest additions:

```xml
<meta-data android:name="com.facebook.sdk.AutoLogAppEventsEnabled"
           android:value="false"/>
```

This must be added inside the `application` node of your manifest additions.

For iOS add the following to your info additions:

```xml
<key>FacebookAutoLogAppEventsEnabled</key>
<false/>
```


In some cases, you want to only delay the collection of automatically logged events, such as to obtain User consent or fulfill legal obligations. In this case disable the automatic logging as above and then once you have been provided consent call the `setAutoLogAppEventsEnabled` function:

```actionscript
FacebookAPI.service.appEvents.setAutoLogAppEventsEnabled( true );
```

Similarly to suspend collection again for any reasons:

```actionscript
FacebookAPI.service.appEvents.setAutoLogAppEventsEnabled( false );
```




### Disable Collection of Advertiser IDs

To disable collection of the advertiser id, you must add certain fields to the manifest and info additions in your application descriptor.

For Android add the following line to your manifest additions:

```xml
<meta-data android:name="com.facebook.sdk.AdvertiserIDCollectionEnabled"
           android:value="false"/>
```

This must be added inside the `application` node of your manifest additions.

For iOS add the following to your info additions:

```xml
<key>FacebookAdvertiserIDCollectionEnabled</key>
<false/>
```


In some cases, you want to delay the collection of the advertiser id, such as to obtain User consent or fulfill legal obligations, instead of disabling it.
In this case disable the collection of the advertiser id as above and then once you have been provided consent call the `setAdvertiserIDCollectionEnabled` function:

```actionscript
FacebookAPI.service.appEvents.setAdvertiserIDCollectionEnabled( true );
```

Similarly to suspend collection again for any reasons:

```actionscript
FacebookAPI.service.appEvents.setAdvertiserIDCollectionEnabled( false );
```

