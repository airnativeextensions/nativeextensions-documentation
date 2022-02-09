---
title: Set Badge Number
sidebar_label: Set Badge Number
---


You can set the badge number using this extension. The badge number is the small number 
that appears over the application icon.

This was originally part of iOS and is built into the operating system there, but has been extended to Android and Windows.

To set the badge number use the `setBadgeNumber()` method:

```actionscript
Notifcations.service.setBadgeNumber( 4 );
```

- [iOS](#ios)
- [Android](#android)
- [Windows](#windows)




## iOS 

On iOS it is part of the operating system and nothing additional is required. You can use the `setBadgeNumber()` method without any additional configuration.



## Android 

On Android some manufacturers have implemented a replica of the iOS functionality in the custom Android launchers distributed with their devices. 

Each manufacturer has a slightly different implementation which we have wrapped here.

If you aren't using `apm` then you will need to ensure you have added all the additional permissions for each of the manufacturers to enable this functionality. Check the [Add the Extension](add-the-extension.mdx#application-descriptor) for more information.


### Android 8

Android 8.0 (API level 26) introduces functionality for displaying notification badges on app icons in supported launchers. Notification badges show notifications associated with one or more notification channels in an app, which the user has not yet dismissed or acted on. Users can turn off badges for notification channels or apps from the Settings app. Notification badges are also known as notification dots).

Users can also long-press on an app icon to glance at the notifications associated with a notification badge in supported launchers. Users can then dismiss or act on notifications from the long-press menu in a similar way to the notification drawer.

![](images/android-notification-badges.png)

By default, each new notification in a channel increments the number displayed on the associated launcher long-press menu by one. After a user dismisses a notification or triggers a related action, that number decrements to reflect the change.


#### Adjusting Badges

By default, each notification channel reflects its active notifications in your app's launcher icon badge. You can use the `setShowBadge()` method to stop the presence of notifications from a channel being reflected by a badge. You can't programmatically modify this setting for a notification channel after it's created and submitted to the notification manager.

:::note
Users can turn off badges for notification channels or apps from the Settings app at any time.
:::

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

