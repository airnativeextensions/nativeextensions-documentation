---
title: Handling startup notifications
sidebar_label: Handling startup notifications
---

With any of notification events they may be stored and dispatched when your application starts up. 
You should be ready to process any of these events when you call `register()`. 
This may occur if your application was not running, or a notification triggered the startup of your application.

To make sure you handle them correctly, have all your event listeners registered before calling `register`. 
There may be multiple `PushNotificationEvent.NOTIFICATION` events, and `PushNotificationEvent.ACTION` events.

However there will only ever be one selected event, either `PushNotificationEvent.NOTIFICATION_SELECTED` or `PushNotificationGroupEvent.GROUP_SELECTED`. 
The selected event should be treated as a user interaction and you should load the appropriate view in your application.
