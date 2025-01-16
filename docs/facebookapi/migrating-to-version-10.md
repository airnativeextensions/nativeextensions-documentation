---
title: Migrating to v10
---

Version 10 of the FacebookAPI brings a major update to version 13 of the Facebook SDK.

This update also brings the Facebook API extension inline with the latest androidx libraries and support for Android 12 (API 31).

:::info Client Token
There is a new configuration item required called the "client token". It is required for making certain graph queries and will cause the extension to fail if you do not add this new configuration item.
:::

We are highly recommending using `apm` to manage updates now. This simplifies the process greatly as you no longer need to manage your manifest additions.


```
apm update
apm project config set com.distriqt.facebook.Core
apm generate app-descriptor src/MyApp-app.xml
```

### Manual

If you are manually updating, then you will need to firstly ensure you have all the latest dependencies:

```
<extensionID>androidx.appcompat</extensionID>
<extensionID>androidx.browser</extensionID>
<extensionID>androidx.cardview</extensionID>
<extensionID>androidx.core</extensionID>
<extensionID>androidx.emoji2</extensionID>
<extensionID>androidx.vectordrawable</extensionID>
<extensionID>com.android.installreferrer</extensionID>
<extensionID>com.jetbrains.kotlin</extensionID>
```

Note there are additional dependencies from previous versions. 

Then update your manifest additions to include the latest additions. These include new `queries` tag and several changes around the `android:exported` tag. Check the documentation on [adding the extension](core/add-the-extension.mdx#application-descriptor) for the latest information. 

Make sure you add the client token configuration items too. Both to your info additions on iOS and to your manifest additions on Android. 

iOS: 

```
<key>FacebookClientToken</key>
<string>FACEBOOK_CLIENT_TOKEN</string>
```

Android:

```
<meta-data android:name="com.facebook.sdk.ClientToken" android:value="FACEBOOK_CLIENT_TOKEN"/>
```
