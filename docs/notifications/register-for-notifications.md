---
title: Register for notifications
sidebar_label: Register for notifications
---

Now that you have authorisation to access notifications you can register your user's device.

```actionscript
Notifications.service.register();
```

This call will check for startup events, and reinstate any delayed notifications. 
You should be sure to add your notification event listeners before calling the register function 
to ensure you receive any startup notifications. More on these listeners later but for now just
be aware that to receive notifications that caused your application to start you must call register
and that during this call NotificationEvents may be dispatched.


```actionscript
Notifications.service.addEventListener( NotificationEvent.NOTIFICATION, notificationHandler );
Notifications.service.addEventListener( NotificationEvent.NOTIFICATION_SELECTED, notificationHandler );
Notifications.service.addEventListener( NotificationEvent.ACTION, actionHandler );
Notifications.service.addEventListener( NotificationGroupEvent.GROUP_SELECTED, groupSelectedHandler );

Notifications.service.register();


function notificationHandler( event:NotificationEvent ):void
{
}

function actionHandler( event:NotificationEvent ):void
{
}

function groupSelectedHandler( event:NotificationGroupEvent ):void
{
}
```

With any of notification events they may be stored and dispatched when your application starts up. 
You should be ready to process any of these events when you call `register()`. This may occur if your
 application was not running, or a notification triggered the startup of your application.

To make sure you handle them correctly, have all your event listeners registered before calling 
`register`. There may be multiple `NotificationEvent.NOTIFICATION` events, and 
`NotificationEvent.ACTION` events.

However there will only ever be one selected event, either `NotificationEvent.NOTIFICATION_SELECTED`
or `NotificationGroupEvent.GROUP_SELECTED`. The selected event should be treated as a user 
interaction and you should load the appropriate view in your application.
