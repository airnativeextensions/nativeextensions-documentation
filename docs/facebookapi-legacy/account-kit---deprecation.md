---
title: Account Kit - Deprecation
sidebar_label: Account Kit - Deprecation
---


:::caution
This is the legacy extension documentation. Find the new documentation [here](../facebookapi/)
:::

>
> **Account Kit has been discontinued and has been removed**
>
> Account Kit was deprecated on March 9, 2020. For more information, see [Account Kit services no longer available starting in March](https://developers.facebook.com/blog/post/2019/09/09/account-kit-services-no-longer-available-starting-march). 
>
> 


## Android 

You will need to remove any references you may have in your manifest additions to the account kit activities etc:

i.e. Remove these:

```xml
<meta-data android:name="com.facebook.accountkit.ApplicationName" android:value="[YOUR_FACEBOOK_APP_NAME]" />
<meta-data android:name="com.facebook.accountkit.ClientToken" android:value="[YOUR_ACCOUNT_KIT_CLIENT_TOKEN]" />

<activity android:name="com.facebook.accountkit.ui.AccountKitActivity" android:theme="@style/AppLoginTheme" android:launchMode="singleTop" android:windowSoftInputMode="adjustResize" />

<activity android:name="com.facebook.accountkit.ui.AccountKitEmailRedirectActivity" android:exported="true" android:noHistory="true">
	<intent-filter>
		<action android:name="android.intent.action.VIEW" />
		<category android:name="android.intent.category.DEFAULT" />
		<category android:name="android.intent.category.BROWSABLE" />
		<data android:scheme="ak[YOUR_FACEBOOK_APP_ID]" />
	</intent-filter>
</activity>
```

## iOS

You can remove  `<string>ak[YOUR_FACEBOOK_APP_ID]</string>` from the `CFBundleURLSchemes` in your Info Additions and also remove the `AccountKitClientToken` key.



## Code

If you correctly wrapped your code in the `isSupported` flag then this will now return `false` and you shouldn't need to make any changes.


```actionscript
if (FacebookAPI.service.accountKit.isSupported)
{
	// Account Kit is available
}
```

The functions should still all operate however none of the events will fire and you should just expect them to fail silently. We suggest you remove or plan to remove this code from your app in the near future. 


