---
title: Auto Start
sidebar_label: Auto Start
---

**This is an Android only feature.**


## Auto Start

This process allows your application to automatically start when the device is booted or turned on.

You must run your application at least once before automatic starting can be initialised. You enable
it by calling the `setAutoStart` function as below:

```actionscript
Application.service.setAutoStart( true );
```

If you wish to disable auto start at a later point you can pass `false` to this same function:

```actionscript
Application.service.setAutoStart( false );
```


### State 

You can check if auto start is enabled by checking the `isAutoStartEnabled()` flag.

```actionscript
if (Application.service.isAutoStartEnabled())
{
	//
}
```


### Was Auto Started

You can check if your application was launched using the auto start mechanism using the `wasAutoStarted()` flag.

```actionscript
if (Application.service.wasAutoStarted())
{
	// This launch was from an auto start
}
```



### Manifest Additions

You must make sure you have added the following receiver and permission to your application descriptors
manifest additions. 

```actionscript
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />

<application>
	<receiver android:enabled="true" android:name="com.distriqt.extension.application.receivers.ApplicationStartupReceiver" android:permission="android.permission.RECEIVE_BOOT_COMPLETED">
		<intent-filter>
			<action android:name="android.intent.action.BOOT_COMPLETED" />
			<action android:name="android.intent.action.QUICKBOOT_POWERON" />
			<category android:name="android.intent.category.DEFAULT" />
		</intent-filter>
	</receiver>
</application>	
```

