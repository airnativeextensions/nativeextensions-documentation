
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.admob.FacebookAudience</extensionID>
	
	<!-- ADVERTS EXTENSIONS -->
	<extensionID>com.distriqt.Adverts</extensionID>
	<extensionID>com.distriqt.Core</extensionID>

	<extensionID>com.distriqt.playservices.Base</extensionID>
	<extensionID>com.distriqt.playservices.Ads</extensionID>
	<extensionID>com.distriqt.playservices.AdsIdentifier</extensionID>

	<extensionID>androidx.appcompat</extensionID>
	<extensionID>androidx.browser</extensionID>
	<extensionID>androidx.core</extensionID>
	<extensionID>androidx.constraintlayout</extensionID>
	<extensionID>androidx.vectordrawable</extensionID>
	<extensionID>androidx.room</extensionID>
	<extensionID>androidx.work</extensionID>
	<extensionID>com.google.code.gson</extensionID>
</extensions>
```

### Android

#### Manifest Additions

Add the `audience_network.dex` file to the root of your application package. (This file is located in the repository, this must be the same version as the extension, i.e. if you update the extension ensure you update this file).

Add the following to your manifest additions, ensuring you only have one `application` tag in your additions. 

:::caution
Ensure you replace:
-  `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`. Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.
:::


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

#### Info Additions


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

:::note SKAdNetworkItems
You should only have one `SKAdNetworkItems` entry. If you have multiple extensions adding these values you must combine them into a single array.
:::

