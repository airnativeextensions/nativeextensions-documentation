---
title: Deep Linking
sidebar_label: Deep Linking
---


## Enabling

Deep links are enabled automatically however you will need to add a few additions to your application descriptor in order to receive them correctly. 

### iOS

On iOS add your custom url scheme to the `CFBundleURLTypes` array in your info additions. Replace `CUSTOM_URL_SCHEME` in the below with your scheme:

```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>CUSTOM_URL_SCHEME</string>
    </array>
  </dict>
</array>
```

### Android 

Add the following activity within the `application` node of your manifest additions. Replace `CUSTOM_URL_SCHEME` and `CUSTOM_URL_PATH` with your values:

```xml
<activity>
    <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
        <category android:name="android.intent.category.LAUNCHER"/>
    </intent-filter>
    <intent-filter>
    <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="CUSTOM_URL_SCHEME" android:host="CUSTOM_URL_PATH"/>
    </intent-filter>
</activity>
```

This would open a url link of the form `CUSTOM_URL_SCHEME://CUSTOM_URL_PATH`, eg: `distriqt://app`




## Events 

When a deep link is received and determined to be from Braze the extension will dispatch a `BrazeDeeplinkEvent.RECEIVED` event:

```
Braze.instance.addEventListener( BrazeDeeplinkEvent.RECEIVED, deeplink_receivedHandler );

function deeplink_receivedHandler( event:BrazeDeeplinkEvent ):void
{
    trace( "deeplink received" );
}
```

This event will contain a property `uriAction` which is an instance of the `UriAction` class and contains information relevant to the deep link, such as `url`, `channel` and any `extras`.



