---
title: Set Badge Number
sidebar_label: Set Badge Number
---


You can set the badge number using this extension. The badge number is the small number 
that appears over the application icon.

This was originally part of iOS and is built into the operating system there.


To set the badge number use the `setBadgeNumber()` method:

```actionscript
PushNotifcations.service.setBadgeNumber( 4 );
```


## iOS 

On iOS it is part of the operating system and nothing additional is required. You can use the `setBadgeNumber()` method without any additional configuration.


## Android 

On Android some manufacturers have implemented a replica of the iOS functionality
in the custom Android launchers distributed with their devices. 
Each manufacturer has a slightly different implementation which we have wrapped here.

>
> **Note**: Android does not support this natively and many believe that you shouldn't force iOS
> features onto Android users. So make sure you really want to use this functionality on Android 
> before implementing.
>

You will need to add the following permissions to your manifest additions to ensure
your application has the correct permissions to update the badge number.


```xml
	<!--for Samsung-->
	<uses-permission android:name="com.sec.android.provider.badge.permission.READ"/>
	<uses-permission android:name="com.sec.android.provider.badge.permission.WRITE"/>

	<!--for htc-->
	<uses-permission android:name="com.htc.launcher.permission.READ_SETTINGS"/>
	<uses-permission android:name="com.htc.launcher.permission.UPDATE_SHORTCUT"/>

	<!--for sony-->
	<uses-permission android:name="com.sonyericsson.home.permission.BROADCAST_BADGE"/>
	<uses-permission android:name="com.sonymobile.home.permission.PROVIDER_INSERT_BADGE"/>

	<!--for apex-->
	<uses-permission android:name="com.anddoes.launcher.permission.UPDATE_COUNT"/>

	<!--for solid-->
	<uses-permission android:name="com.majeur.launcher.permission.UPDATE_BADGE"/>

	<!--for huawei-->
	<uses-permission android:name="com.huawei.android.launcher.permission.CHANGE_BADGE"/>
	<uses-permission android:name="com.huawei.android.launcher.permission.READ_SETTINGS"/>
	<uses-permission android:name="com.huawei.android.launcher.permission.WRITE_SETTINGS"/>

	<!--for ZUK-->
	<uses-permission android:name="android.permission.READ_APP_BADGE"/>

	<!--for OPPO-->
	<uses-permission android:name="com.oppo.launcher.permission.READ_SETTINGS"/>
	<uses-permission android:name="com.oppo.launcher.permission.WRITE_SETTINGS"/>

	<!--for EvMe-->
	<uses-permission android:name="me.everything.badger.permission.BADGE_COUNT_READ"/>
	<uses-permission android:name="me.everything.badger.permission.BADGE_COUNT_WRITE"/>
```



## Android 8

Android 8.0 (API level 26) introduces functionality for displaying notification badges on app icons in supported launchers. Notification badges show notifications associated with one or more notification channels in an app, which the user has not yet dismissed or acted on. Users can turn off badges for notification channels or apps from the Settings app. Notification badges are also known as notification dots).

Users can also long-press on an app icon to glance at the notifications associated with a notification badge in supported launchers. Users can then dismiss or act on notifications from the long-press menu in a similar way to the notification drawer.

![](images/android-notification-badges.png)

By default, each new notification in a channel increments the number displayed on the associated launcher long-press menu by one. After a user dismisses a notification or triggers a related action, that number decrements to reflect the change.


### Adjusting Badges

By default, each notification channel reflects its active notifications in your app's launcher icon badge. You can use the `setShowBadge()` method to stop the presence of notifications from a channel being reflected by a badge. You can't programmatically modify this setting for a notification channel after it's created and submitted to the notification manager.

> Note: Users can turn off badges for notification channels or apps from the Settings app at any time.


The following sample code illustrates how to hide badges in association with notifications from a notification channel:

```actionscript
service.channels.push(
		new ChannelBuilder()
				.setId( "test_channel" )
				.setName( "Test Channel" )
				.setShowBadge( false )
				.build()
);
```




## Windows 

On Windows it is part of the operating system and nothing additional is required. You can use the `setBadgeNumber()` method without any additional configuration.

The badge will appear on the application tile pinned to the start menu:

![](images/windows-badge-startmenu.png)

And on the application tile in the task bar (when application is closed):

![](images/windows-badge-taskbar.png)


