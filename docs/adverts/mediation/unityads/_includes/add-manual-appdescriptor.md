
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.admob.AppLovin</extensionID>
	
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

Add the following to your manifest additions inside the `application` tag. 

```xml
<!-- UNITY ADS -->
<activity
    android:name="com.unity3d.services.ads.adunit.AdUnitActivity"
    android:configChanges="fontScale|keyboard|keyboardHidden|locale|mnc|mcc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|uiMode|touchscreen"
    android:hardwareAccelerated="true"
    android:theme="@android:style/Theme.NoTitleBar.Fullscreen" />
<activity
    android:name="com.unity3d.services.ads.adunit.AdUnitTransparentActivity"
    android:configChanges="fontScale|keyboard|keyboardHidden|locale|mnc|mcc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|uiMode|touchscreen"
    android:hardwareAccelerated="true"
    android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />
<activity
    android:name="com.unity3d.services.ads.adunit.AdUnitTransparentSoftwareActivity"
    android:configChanges="fontScale|keyboard|keyboardHidden|locale|mnc|mcc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|uiMode|touchscreen"
    android:hardwareAccelerated="false"
    android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />
<activity
    android:name="com.unity3d.services.ads.adunit.AdUnitSoftwareActivity"
    android:configChanges="fontScale|keyboard|keyboardHidden|locale|mnc|mcc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|uiMode|touchscreen"
    android:hardwareAccelerated="false"
    android:theme="@android:style/Theme.NoTitleBar.Fullscreen" />
```


### iOS

#### Info Additions


Add the following to your info additions. If you already have an `SKAdNetworkItems` then append the `dict` items to the `array`.

```xml
<key>SKAdNetworkItems</key>
<array>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>4dzt52r2t5.skadnetwork</string>
    </dict>
</array>
```

:::note SKAdNetworkItems
You should only have one `SKAdNetworkItems` entry. If you have multiple extensions adding these values you must combine them into a single array.
:::

