---
title: Migration
sidebar_label: Migration v15.4
---

## Version 15.4

### Google Play Billing

Version 15.4 implemented Google Play Billing client library v6.2.1.

:::note Android only
These changes only apply to Android and Google Play
:::

:::note apm
If you are using apm then all these changes will be handled for you. This only applies if you are manually updating your manifest additions.
:::


Firstly you will need to update the billing client version in your `manifest` additions:

```xml
<meta-data android:name="com.google.android.play.billingclient.version" android:value="6.2.1" />
```

Next add a new activity:

```xml
<activity
	android:name="com.android.billingclient.api.ProxyBillingActivityV2"
	android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
	android:exported="false"
	android:theme="@android:style/Theme.Translucent.NoTitleBar" />
```

Also ensure you have set the minimum sdk version to 24 or higher.

Your manifest should now contain all the following:


```xml
<manifest android:installLocation="auto">
	<uses-sdk android:minSdkVersion="24" android:targetSdkVersion="34"/>

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
		<meta-data android:name="com.google.android.play.billingclient.version" android:value="6.2.1" />
		<activity
			android:name="com.android.billingclient.api.ProxyBillingActivity"
			android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
			android:exported="false"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />
		<activity
            android:name="com.android.billingclient.api.ProxyBillingActivityV2"
            android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
            android:exported="false"
            android:theme="@android:style/Theme.Translucent.NoTitleBar" />


	</application>

</manifest>
```