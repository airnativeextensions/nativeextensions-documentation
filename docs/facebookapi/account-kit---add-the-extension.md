---
title: Account Kit - Add the Extension
sidebar_label: Account Kit - Add the Extension
---


>
> **Account Kit has been discontinued and has been removed**
>
> Account Kit was deprecated on March 9, 2020. For more information, see [Account Kit services no longer available starting in March](https://developers.facebook.com/blog/post/2019/09/09/account-kit-services-no-longer-available-starting-march). 
>
> 



## Android Manifest Additions

If you are using Account Kit then you will need to add some additional information here, including 

- meta-data tags
- activities

You will need to replace `[YOUR_FACEBOOK_APP_NAME]`, `[YOUR_ACCOUNT_KIT_CLIENT_TOKEN]`and `[YOUR_FACEBOOK_APP_ID]` in the 
below with the relevant details for your application. 

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

These should be added within the `application` node.


### Phone Permissions 

Facebook recommends requesting the following permissions for SMS:

- `RECEIVE_SMS` - auto-fill SMS confirmation code
- `READ_PHONE_STATE` - auto-read device's phone number

#### Auto-fill confirmation code from received SMS

If people grant the `RECEIVE_SMS` permission, the Account Kit SDK automatically fills in the confirmation code sent to the device. People still need to manually submit the code to continue the login process.

Add the following permission to your manifest additions to allow the SDK to auto-fill the confirmation code from the SMS:

```xml
<uses-permission android:name="android.permission.RECEIVE_SMS" />
```

#### Read Phone Number on Device

If people grant the `READ_PHONE_STATE` permission, the SDK can automatically fill in the device’s phone number. People still need to manually submit their phone number to continue the login process

Add the following permission to your manifest additions to allow the SDK to auto-fill the device's phone number:

```xml
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
```


### Email Permissions 

Facebook recommends requesting the following permissions:

- `GET_ACCOUNTS` - provide drop-down list of device emails

Certain features of the Account Kit SDK are only available when specific Android Permissions are granted to your app. If people grant the `GET_ACCOUNTS` permission, the SDK allows them to select the emails available on the device.

Add the following permission to your manifest additions to allow the SDK to populate a drop-down of emails:

```xml
<uses-permission android:name="android.permission.GET_ACCOUNTS" />
```



## iOS Info Additions

If you are using Account Kit then you will need to add some additional information 
added to the Info Additions on top of the base Facebook API additions:  

- An additional url scheme with the `ak` prefix
- The `AccountKitClientToken` key from your Account Kit configuration

Your info additions should end up looking like the following:

```xml
<key>CFBundleURLTypes</key>
<array>
	<dict>
		<key>CFBundleURLSchemes</key>
		<array>	
			<!-- Don't remove the 'fb' prefix -->
			<string>fb[YOUR_FACEBOOK_APP_ID]</string>
			<!-- Account Kit Addition -->
			<string>ak[YOUR_FACEBOOK_APP_ID]</string>
		</array>
	</dict>
</array>
<key>FacebookAppID</key>
<string>[YOUR_FACEBOOK_APP_ID]</string>
<key>FacebookDisplayName</key>
<string>[YOUR_FACEBOOK_APP_NAME]</string>
<key>AccountKitClientToken</key>
<string>[YOUR_ACCOUNT_KIT_CLIENT_TOKEN]</string>
```


