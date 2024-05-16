---
title: Migration
sidebar_label: Migration v15
---

## Version 15.0

### Google Play Billing

Version 15 implemented Google Play Billing client library v6.0.0.

:::note Android only
These changes only apply to Android and Google Play
:::

:::note apm
If you are using apm then all these changes will be handled for you. This only applies if you are manually updating your manifest additions.
:::


Firstly you will need to update the billing client version in your `manifest` additions:

```xml
<meta-data android:name="com.google.android.play.billingclient.version" android:value="6.0.0" />
```

Secondly add the following to your `queries` section:

```xml
<intent>
    <action android:name="com.android.vending.billing.InAppBillingService.BIND" />
</intent>
```


You manifest should now contain all the following:


```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="com.android.vending.BILLING" />

	<queries>
		<intent>
			<action android:name="com.android.vending.billing.InAppBillingService.BIND" />
		</intent>
	</queries>

	<application>

		<activity 
			android:name="com.distriqt.extension.inappbilling.activities.ProductViewActivity" 
			android:exported="false"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />


		<!-- GOOGLE PLAY BILLING -->
		<meta-data android:name="com.google.android.play.billingclient.version" android:value="6.0.0" />
		<activity
			android:name="com.android.billingclient.api.ProxyBillingActivity"
			android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
			android:exported="false"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />


	</application>

</manifest>
```