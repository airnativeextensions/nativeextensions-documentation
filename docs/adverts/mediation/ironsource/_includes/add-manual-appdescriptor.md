
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.admob.IronSource</extensionID>
	<extensionID>com.jetbrains.kotlin</extensionID>

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

:::caution
Ensure you replace:
-  `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`. Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.
:::

```xml
<!-- IRONSOURCE -->
<activity
    android:name="com.ironsource.sdk.controller.ControllerActivity"
    android:configChanges="orientation|screenSize"
    android:exported="false"
    android:hardwareAccelerated="true" />
<activity
    android:name="com.ironsource.sdk.controller.InterstitialActivity"
    android:configChanges="orientation|screenSize"
    android:exported="false"
    android:hardwareAccelerated="true"
    android:theme="@android:style/Theme.Translucent" />
<activity
    android:name="com.ironsource.sdk.controller.OpenUrlActivity"
    android:configChanges="orientation|screenSize"
    android:exported="false"
    android:hardwareAccelerated="true"
    android:theme="@android:style/Theme.Translucent" />

<provider
    android:name="com.ironsource.lifecycle.IronsourceLifecycleProvider"
    android:authorities="APPLICATION_PACKAGE.IronsourceLifecycleProvider" />
```



### iOS

#### Info Additions

Add the following to your info additions. If you already have an `SKAdNetworkItems` then append the `dict` items to the `array`.

```xml
<key>SKAdNetworkItems</key>
<array>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>su67r6k2v3.skadnetwork</string>
    </dict>
</array>
```

:::note SKAdNetworkItems
You should only have one `SKAdNetworkItems` entry. If you have multiple extensions adding these values you must combine them into a single array.
:::

