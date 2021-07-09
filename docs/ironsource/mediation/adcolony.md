---
title: Mediation - AdColony
sidebar_label: AdColony
---

This guide shows how to add mediation through AdColony to your IronSource integration.


## Step 1: Create an AdColony Account 

1. Create an account with AdColony. You can do so [here](https://clients.adcolony.com/signup).

2. Once your account has been verified, you can log in to their partner login [here](https://clients.adcolony.com/login).


## Step 2: Create an Application and Ad Zone in AdColony

To gain access to AdColony’s inventory within ironSource’s Mediation platform, you must first add your app and set up Ad Zones in your AdColony account.

https://developers.ironsrc.com/ironsource-mobile/android/adcolony-mediation-guide/#step-2


## Step 3: Activate AdColony in the SDK Networks Setup Module

There are a few parameters from your AdColony account which need to be inserted into your SDK Network Setup Module on the ironSource platform in order for AdColony to work correctly in connection with ironSource. 

See the following guide for more information:

https://developers.ironsrc.com/ironsource-mobile/android/adcolony-mediation-guide/#step-3



## Step 4. Add the AdColony Adapter to Your Build

The `com.distriqt.ironsource.AdColony` ANE includes the AdColony SDK and the IronSource AdColony mediation adapter. This is everything you need to get AdColony mediation working in your application.

To add the ANE download it from the repository and add it to your application:

- [com.distriqt.ironsource.AdColony](https://github.com/distriqt/ANE-IronSource/raw/master/lib/adcolony/com.distriqt.ironsource.AdColony.ane)

Add the extension id to your application descriptor:

```xml
<extensions>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>com.distriqt.IronSource</extensionID>

    <extensionID>com.distriqt.ironsource.AdColony</extensionID>

    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.Ads</extensionID>
    <extensionID>com.distriqt.playservices.AdsIdentifier</extensionID>

    <extensionID>androidx.core</extensionID>
</extensions>
```

More information on adding ANEs in this [tutorial](/docs/tutorials/getting-started)



## Step 5: Additional code required

There is no additional code required just a few additional configuration options and files that need to be packaged with your application.


### Android

Add the following to your manifest additions inside the `application` tag. 

```xml
<!-- AdColony -->
<activity
    android:name="com.adcolony.sdk.AdColonyInterstitialActivity"
    android:configChanges="keyboardHidden|orientation|screenSize"
    android:hardwareAccelerated="true" />

<activity android:name="com.adcolony.sdk.AdColonyAdViewActivity"
    android:configChanges="keyboardHidden|orientation|screenSize"
    android:hardwareAccelerated="true"/>
```



### iOS


Add the following to your `InfoAdditions` node updating the usage description strings as required for your application:

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>fb</string>
    <string>instagram</string>
    <string>tumblr</string>
    <string>twitter</string>
</array>

<key>NSCalendarsUsageDescription</key>
<string>Adding events</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>Taking selfies</string>
<key>NSCameraUsageDescription</key>
<string>Taking selfies</string>
<key>NSMotionUsageDescription </key>
<string>Interactive ad controls</string>

<!-- iOS 14 AdNetwork -->
<key>SKAdNetworkItems</key>
<array>
    <dict>
        <!-- IronSource -->
        <key>SKAdNetworkIdentifier</key>
        <string>SU67R6K2V3.skadnetwork</string> 
    </dict>
    <dict>
        <!-- AdColony -->
        <key>SKAdNetworkIdentifier</key>
        <string>4PFYVQ9L8R.skadnetwork</string>
    </dict>
</array>
```


Additional SKAdNetworks:

```xml
<key>SKAdNetworkItems</key>
<array>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>4pfyvq9l8r.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>yclnxrl5pm.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>v72qych5uu.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>tl55sbb4fm.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>t38b2kh725.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>prcb7njmu6.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>ppxm28t8ap.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>mlmmfzh3r3.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>klf5c3l5u5.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>hs6bdukanm.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>c6k4g5qg8m.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>9t245vhmpl.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>9rd848q2bz.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>8s468mfl3y.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>7ug5zh24hu.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>4fzdc2evr5.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>4468km3ulz.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>3rd42ekr43.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>2u9pt9hc89.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>m8dbw4sv7c.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>7rz58n8ntl.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>ejvt5qm6ak.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>5lm9lj6jb7.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>44jx6755aq.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>mtkv5xtk9e.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>6g9af3uyq4.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>275upjj5gd.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>9nlqeag3gk.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>cg4yq2srnc.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>g28c52eehv.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>rx5hdcabgc.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>u679fj5vs4.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>uw77j35x4d.skadnetwork</string>
    </dict>
</array>
```

