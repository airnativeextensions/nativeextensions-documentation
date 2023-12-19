---
title: Accessing GDPR Settings
description: Accessing GDPR Transparency and Consent settings from the AIR SDK
image: images/gdpr.png
authors: [ marchbold ]
tags: [ airsdk, gdpr, ane, advertising, tips ]
---

At some point in your application development when you start to store and share data you will need to handle user GDPR settings. 

:::info GDPR
The General Data Protection Regulation (GDPR) is a European Union (EU) regulation that mandates how an organisation should handle personal data. 
:::

If you use personalised advertising or store user related data on your server then you will need to address GDPR concerns in your application.

<!--truncate-->

On mobile devices the GDPR settings are stored through the **IAB Europe Transparency & Consent Framework**. This framework ensures settings are stored in consistent places for developers to access and determine their appropriate behaviour for the user.

These values are stored in [NSUserDefaults](https://developer.apple.com/documentation/foundation/nsuserdefaults#1664798?language=objc) on iOS and in [SharedPreferences](https://developer.android.com/training/data-storage/shared-preferences.html) on Android.

With the AIR SDK we can access these values easily through the [Application extension](https://airnativeextensions.com/extension/com.distriqt.Application). The Application extension allows access to the NSUserDefaults and the SharedPreferences through the [`defaults`](https://docs.airnativeextensions.com/docs/application/defaults) functionality.

Firstly, we set the `useSharedDefaults` flag to ensure we use the application's shared values. 

```actionscript
Application.service.defaults.useSharedDefaults = true;
```

> If we don't set this flag, then the values retrieved through the `defaults` functionality will be isolated from values set via other methods and you won't retrieve the correct TC data values. 

Once you have set this flag you can retrieve any of the TC data from the framework by using the appropriate key. 

For example:

```actionscript
var value:String = 
    Application.service.defaults.
        getString( "IABTCF_TCString" );
```

You can then use this value as required for your implementation of GDPR in your application.


For a full list of the available keys and a description of the values and types see the [documentation here](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20CMP%20API%20v2.md#what-is-the-cmp-in-app-internal-structure-for-the-defined-api).

