---
title: Add the Extension
sidebar_label: Add the Extension
---

First step is always to add the extension to your development environment. 
To do this use the tutorial located [here](/docs/tutorials/getting-started).


## Dependencies

Many of our extensions use some common libraries, for example, the Android Support libraries.

We have to separate these libraries into separate extensions in order to avoid multiple versions of the libraries being included in your application and causing packaging conflicts. This means that you need to include some additional extensions in your application along with the main extension file.

You will add these extensions as you do with any other extension, and you need to ensure it is packaged with your application.


### Core 

The Core extension is required by this extension. You must include this extension in your application.

The Core extension doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

This extension requires you call the `init()` function at some point early in your application, generally at the same time as the initialisation of this extension. If you are using other extensions that also require the Core extension, you only need to initialise it once, before initialising the other extensions.

```actionscript
Core.init();
```

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).



## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.InAppBilling</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
</extensions>
```



## Android

### Manifest Additions

The following additions must be added to your applications manifest additions in your 
application descriptor.

There are additions specific for Google Play Billing and Amazon In App Purchases. 
If you aren't using either of those services you can remove those additions if you wish.


```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="com.android.vending.BILLING" />
	<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />

	<application>

		<activity 
			android:name="com.distriqt.extension.inappbilling.activities.ProductViewActivity" 
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />


		<!-- GOOGLE PLAY BILLING -->
		<meta-data android:name="com.google.android.play.billingclient.version" android:value="3.0.0" />
		<activity
			android:name="com.android.billingclient.api.ProxyBillingActivity"
			android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />


		<!-- AMAZON IN APP PURCHASING -->
		<receiver android:name="com.amazon.device.iap.ResponseReceiver"
				android:permission="com.amazon.inapp.purchasing.Permission.NOTIFY" >
			<intent-filter>
				<action android:name = "com.amazon.inapp.purchasing.NOTIFY" />
			</intent-filter>
		</receiver>


	</application>

</manifest>
```



## iOS 

There are no required iOS additions to the application descriptor.


### iOS SDK 

**Not currently required when using AIR 33+. AIR 33.1+ contains iOS 13 so you shouldn't need to add a separate version of the iOS SDK.**



#### Issues and Notes

Here are some notes on using the current version of the iOS SDK with the AIR SDK:

- [https://airnativeextensions.github.io/tutorials/iOS-versions](https://airnativeextensions.github.io/tutorials/iOS-versions)






## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
if (InAppBilling.isSupported)
{
	// Functionality here
}
```


Note: This only checks if there is some functionality supported, not whether a particular billing service is available.

