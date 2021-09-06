---
title: Mediation - AdMob
sidebar_label: AdMob
---

This guide shows how to add mediation through AdMob to your IronSource integration.

## Step 1: Create an AdMob Account

1. To access AdMob’s ad inventory through ironSource‘s Mediation platform, you must create an account with AdMob. You can do so [here](https://www.google.com/admob/).

2. We recommend to adjust the time zone of your AdMob’s account to UTC to align with the ironSource dashboard. This will ensure accurate reporting. More info [here](https://support.google.com/admob/answer/7276705?hl=en).

## Step 2: Create an Application and Ad Zone in Admob

Next, you must add your app and set up Ad Zones in your Admob account.

https://developers.ironsrc.com/ironsource-mobile/android/admob-mediation-guide/#step-2

## Step 3: Activate AdMob in Your ironSource Network Setup Module

Serving Admob’s ads through the ironSource Mediation platform has never been this easy. Sign in to your Google account when setting up Admob on the ironSource SDK Networks Setup and we’ll retrieve all the necessary parameters to run Admob’s Interstitials, Rewarded Video and Banners for you!

See the following guide for more information:

https://developers.ironsrc.com/ironsource-mobile/android/admob-mediation-guide/#step-3

## Step 4. Add the AdMob Adapter to Your Build

The `com.distriqt.ironsource.AdMob` ANE includes the IronSource AdMob mediation adapter. This is everything you need to get AdMob mediation working in your application.

To add the ANE download it from the repository and add it to your application:

- [com.distriqt.ironsource.AdMob](https://github.com/distriqt/ANE-IronSource/raw/master/lib/admob/com.distriqt.ironsource.AdMob.ane)

### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries.

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [androidx.core](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)
- [androidx.browser](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.browser.ane)
- [androidx.room](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.room.ane)
- [androidx.work](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.work.ane)
- [com.google.guava](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.guava.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).

> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.

### Extension IDs

Add the extension id to your application descriptor:

```xml
<extensions>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>com.distriqt.IronSource</extensionID>

    <extensionID>com.distriqt.ironsource.AdMob</extensionID>

    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.Ads</extensionID>
    <extensionID>com.distriqt.playservices.AdsIdentifier</extensionID>

    <extensionID>androidx.core</extensionID>
    <extensionID>androidx.work</extensionID>
    <extensionID>androidx.room</extensionID>
    <extensionID>com.google.guava</extensionID>
    <extensionID>com.jetbrains.kotlin</extensionID>
</extensions>
```

More information on adding ANEs in this [tutorial](/docs/tutorials/getting-started)

## Step 5: Additional code required

There is no additional code required just a few additional configuration options and files that need to be packaged with your application.

### Android

Add the following to your manifest additions inside the `application` tag.

You must replace `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`.
Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.

> You need to ensure you set the `android:value` for your AdMob application, replacing `ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY` in the additions below.

```xml
<!-- ADMOB -->
<meta-data
    android:name="com.google.android.gms.ads.APPLICATION_ID"
    android:value="ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY"/>

<activity
    android:name="com.google.android.gms.ads.AdActivity"
    android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|uiMode|screenSize|smallestScreenSize"
    android:exported="false"
    android:theme="@android:style/Theme.Translucent" />

<provider
    android:name="com.google.android.gms.ads.MobileAdsInitProvider"
    android:authorities="APPLICATION_PACKAGE.mobileadsinitprovider"
    android:exported="false"
    android:initOrder="100" />

<service
    android:name="com.google.android.gms.ads.AdService"
    android:enabled="true"
    android:exported="false" />

<meta-data
    android:name="com.google.android.gms.version"
    android:value="@integer/google_play_services_version" />

<provider
    android:name="androidx.work.impl.WorkManagerInitializer"
    android:authorities="APPLICATION_PACKAGE.workmanager-init"
    android:directBootAware="false"
    android:exported="false"
    android:multiprocess="true" />

<service
    android:name="androidx.work.impl.background.systemalarm.SystemAlarmService"
    android:directBootAware="false"
    android:enabled="@bool/enable_system_alarm_service_default"
    android:exported="false" />
<service
    android:name="androidx.work.impl.background.systemjob.SystemJobService"
    android:directBootAware="false"
    android:enabled="@bool/enable_system_job_service_default"
    android:exported="true"
    android:permission="android.permission.BIND_JOB_SERVICE" />

<receiver
    android:name="androidx.work.impl.utils.ForceStopRunnable$BroadcastReceiver"
    android:directBootAware="false"
    android:enabled="true"
    android:exported="false" />
<receiver
    android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$BatteryChargingProxy"
    android:directBootAware="false"
    android:enabled="false"
    android:exported="false" >
    <intent-filter>
        <action android:name="android.intent.action.ACTION_POWER_CONNECTED" />
        <action android:name="android.intent.action.ACTION_POWER_DISCONNECTED" />
    </intent-filter>
</receiver>
<receiver
    android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$BatteryNotLowProxy"
    android:directBootAware="false"
    android:enabled="false"
    android:exported="false" >
    <intent-filter>
        <action android:name="android.intent.action.BATTERY_OKAY" />
        <action android:name="android.intent.action.BATTERY_LOW" />
    </intent-filter>
</receiver>
<receiver
    android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$StorageNotLowProxy"
    android:directBootAware="false"
    android:enabled="false"
    android:exported="false" >
    <intent-filter>
        <action android:name="android.intent.action.DEVICE_STORAGE_LOW" />
        <action android:name="android.intent.action.DEVICE_STORAGE_OK" />
    </intent-filter>
</receiver>
<receiver
    android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$NetworkStateProxy"
    android:directBootAware="false"
    android:enabled="false"
    android:exported="false" >
    <intent-filter>
        <action android:name="android.net.conn.CONNECTIVITY_CHANGE" />
    </intent-filter>
</receiver>
<receiver
    android:name="androidx.work.impl.background.systemalarm.RescheduleReceiver"
    android:directBootAware="false"
    android:enabled="false"
    android:exported="false" >
    <intent-filter>
        <action android:name="android.intent.action.BOOT_COMPLETED" />
        <action android:name="android.intent.action.TIME_SET" />
        <action android:name="android.intent.action.TIMEZONE_CHANGED" />
    </intent-filter>
</receiver>
<receiver
    android:name="androidx.work.impl.background.systemalarm.ConstraintProxyUpdateReceiver"
    android:directBootAware="false"
    android:enabled="@bool/enable_system_alarm_service_default"
    android:exported="false" >
    <intent-filter>
        <action android:name="androidx.work.impl.background.systemalarm.UpdateProxies" />
    </intent-filter>
</receiver>

<service
    android:name="androidx.room.MultiInstanceInvalidationService"
    android:exported="false" />
```

### iOS

Add the following to your `InfoAdditions` node updating the usage description strings as required for your application:

> You need to ensure you set the `GADApplicationIdentifier` for your AdMob application, replacing `ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY` in the additions below.

```xml
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY</string>

<!-- iOS 14 AdNetwork -->
<key>SKAdNetworkItems</key>
<array>
    <dict>
        <!-- IronSource -->
        <key>SKAdNetworkIdentifier</key>
        <string>SU67R6K2V3.skadnetwork</string>
    </dict>
    <dict>
        <!-- AdMob -->
        <key>SKAdNetworkIdentifier</key>
        <string>cstr6suwn9.skadnetwork</string>
    </dict>
</array>
```
