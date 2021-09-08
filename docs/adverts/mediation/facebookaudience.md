---
title: FacebookAudience
sidebar_label: FacebookAudience
---

This guide is intended for publishers who want to use the Google Mobile Ads SDK to load and display ads from Facebook Audience Network via mediation.

## Step 1: Set up Facebook Audience Network

The Google documentation contains a very detailed guide as to the process to setup your properties and Facebook account to display adverts.

Make sure you follow this guide closely.

- Android: https://developers.google.com/admob/android/mediation/facebook#step_1_set_up_facebook_audience_network
- iOS: https://developers.google.com/admob/ios/mediation/facebook#step_1_set_up_facebook_audience_network

## Step 2: Configure mediation settings for your AdMob ad unit

You need to add Facebook to the mediation configuration for your ad unit.

- Android: https://developers.google.com/admob/android/mediation/facebook#step_2_configure_mediation_settings_for_your_ad_unit
- iOS: https://developers.google.com/admob/ios/mediation/facebook#step_2_configure_mediation_settings_for_your_ad_unit

## Step 3: Import the Facebook Audience Network SDK and adapter ANE

The `com.distriqt.admob.FacebookAudience` ANE includes the Facebook Audience SDK and the AdMob Facebook mediation adapter. This is everything you need to get Facebook mediation working in your application.

To add the ANE download it from the repository and add it to your application:

- [com.distriqt.admob.FacebookAudience.ane](https://github.com/distriqt/ANE-Adverts-Mediation/raw/master/lib/facebookaudience/com.distriqt.admob.FacebookAudience.ane)

Add the extension id to your application descriptor:

```xml
<extensions>
    <!-- OTHER EXTENSIONS -->

    <extensionID>com.distriqt.admob.FacebookAudience</extensionID>
</extensions>
```

More information on adding ANEs in this [tutorial](/docs/tutorials/getting-started)

## Step 4: Additional code required

There is no additional code required just a few additional configuration options and files that need to be packaged with your application.

### Android

Add the `audience_network.dex` file to the root of your application package. (This file is located in the repository, this must be the same version as the extension, i.e. if you update the extension ensure you update this file).

Add the following to your manifest additions . You must replace `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`. Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.

```xml
<queries>
    <package android:name="com.facebook.katana" />
</queries>

<application>
    <activity
        android:name="com.facebook.ads.AudienceNetworkActivity"
        android:configChanges="keyboardHidden|orientation|screenSize"
        android:exported="false"
        android:theme="@android:style/Theme.Translucent.NoTitleBar" />

    <provider
        android:name="com.facebook.ads.AudienceNetworkContentProvider"
        android:authorities="APPLICATION_PACKAGE.AudienceNetworkContentProvider"
        android:exported="false" />
</application>
```

### iOS

Add the following to your info additions. If you already have an `SKAdNetworkItems` then append the `dict` items to the `array`.

```xml
<key>SKAdNetworkItems</key>
<array>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>v9wttpbfk9.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>n38lu8286q.skadnetwork</string>
    </dict>
</array>
```

:::note
If you previously added `FBAudienceNetwork.framework` to your `Frameworks` directory, you should remove it as it is no longer required. The framework is now statically linked in the extension.
:::

## Step 5: Test your implementation

When testing always make sure you are adding your test device id to the request to ensuring AdMob do not block your account for policy violations:

```actionscript
new AdRequestBuilder()
    .addTestDevice( "XXXXXXXXXXXXXXXXXX" )
    .build()
```

See the Adverts docs for more details.

### Facebook Testing

You will need to enable testing in your Facebook account, by adding your test device and enabling an test advert type to serve the device.

See the [Testing Audience Network Implementation guide](https://developers.facebook.com/docs/audience-network/testing) for detailed instructions on how to enable Facebook test ads.

### Forcing Mediation Network

The easiest way we have found to force a mediation network during testing is to disable automatic optimisations and set the eCPM manually.

Doing this you can give the mediation network you are wanting to test a high eCPM value ( eg $1000) and all others (including AdMob) a very low eCPM (eg $0.01).
