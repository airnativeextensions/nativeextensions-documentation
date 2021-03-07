---
title: Tapjoy
sidebar_label: Tapjoy
---


This guide is intended for publishers who want to use the Google Mobile Ads SDK to load and display ads from Tapjoy through mediation.


## Step 1: Set up Tapjoy

The Google documentation contains a very detailed guide as to the process to setup your properties and Tapjoy account to display adverts:

Make sure you follow this guide closely.

- Android: https://developers.google.com/admob/android/mediation/tapjoy#step_1_set_up_tapjoy
- iOS: https://developers.google.com/admob/ios/mediation/tapjoy#step_1_set_up_tapjoy



## Step 2: Configure mediation settings for your AdMob ad unit

You need to add Tapjoy to the mediation configuration for your ad unit:

- Android: https://developers.google.com/admob/android/mediation/tapjoy#step_2_configure_mediation_settings_for_your_ad_unit
- iOS: https://developers.google.com/admob/ios/mediation/tapjoy#step_2_configure_mediation_settings_for_your_ad_unit



## Step 3: Import the Tapjoy SDK and adapter ANE


The `com.distriqt.admob.TapJoy` ANE includes the TapJoy SDK and the AdMob TapJoy adapter. This is everything you need to get TapJoy mediation working in your application.

To add the ANE download it from the repository and add it to your application:

- [com.distriqt.admob.TapJoy.ane](https://github.com/distriqt/ANE-Adverts-Mediation/raw/master/lib/tapjoy/com.distriqt.admob.TapJoy.ane)

Add the extension id to your application descriptor:

```xml
<extensions>
    <!-- OTHER EXTENSIONS -->

    <extensionID>com.distriqt.admob.TapJoy</extensionID>
</extensions>
```

More information on adding ANEs in this [tutorial](/docs/tutorials/getting-started)


## Step 4: Additional code required


### Android

Add the following to your manifest additions inside the `application` tag. You must replace `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`. Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.

```xml
<!-- TAPJOY -->
<activity
    android:name="com.tapjoy.TJAdUnitActivity"
    android:configChanges="orientation|keyboardHidden|screenSize"
    android:hardwareAccelerated="true"
    android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />
<activity
    android:name="com.tapjoy.mraid.view.ActionHandler"
    android:configChanges="orientation|keyboardHidden|screenSize" />
<activity
    android:name="com.tapjoy.mraid.view.Browser"
    android:configChanges="orientation|keyboardHidden|screenSize" />
<activity
    android:name="com.tapjoy.TJContentActivity"
    android:configChanges="orientation|keyboardHidden|screenSize"
    android:hardwareAccelerated="true"
    android:theme="@android:style/Theme.Translucent.NoTitleBar" />

<receiver android:name="com.tapjoy.TapjoyReceiver" />
```


### iOS

Add the following to your info additions. If you already have an `SKAdNetworkItems` then append the `dict` items to the `array`.

```xml
<key>SKAdNetworkItems</key>
<array>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>ecpz2srf59.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>7ug5zh24hu.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>9t245vhmpl.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>prcb7njmu6.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>5lm9lj6jb7.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>578prtvx9j.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>22mmun2rn5.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>uw77j35x4d.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>c6k4g5qg8m.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>hs6bdukanm.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>yclnxrl5pm.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>3sh42y64q3.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>cj5566h2ga.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>klf5c3l5u5.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>8s468mfl3y.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>2u9pt9hc89.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>7rz58n8ntl.skadnetwork</string>
    </dict>
    <dict>
      <key>SKAdNetworkIdentifier</key>
      <string>ppxm28t8ap.skadnetwork</string>
    </dict>
</array>
```



## Optional Steps

### EU consent and GDPR

Under the Google EU User Consent Policy, you must ensure that certain disclosures are given to, and consents obtained from, users in the European Economic Area (EEA) regarding the use of device identifiers and personal data. This policy reflects the requirements of the EU ePrivacy Directive and the General Data Protection Regulation (GDPR). When seeking consent, you must identify each ad network in your mediation chain that may collect, receive, or use personal data and provide information about each network's use. Google currently is unable to pass the user's consent choice to such networks automatically.

The code below shows you how to enable or disable personalized ads for TapJoy.


```actionscript
TapJoy.instance.setUserConsent( true );
```

>
> If you choose to call this method, it is recommended that you do so prior to requesting ads via the Adverts extension.
>
