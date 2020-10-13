---
title: Receiving notifications
sidebar_label: Receiving notifications
---

There are several events that can be dispatched by a notification.

The most important is the `NotificationEvent.NOTIFICATION` event. This event is dispatched as soon as possible after a notification is received. 
The exact timing of this event depends on the platform, the application settings (such as background modes) and the application state. 

Next is the `NotificationEvent.NOTIFICATION_SELECTED` event. This event is dispatched when a user clicks a displayed notification. 
It will not be dispatched if the user dismisses or otherwise removes the notification without directly clicking on the notification.

On Android, you additionally have the `NotificationGroupEvent.GROUP_SELECTED` event. 
This event is very similar to the `NOTIFICATION_SELECTED` event in that it is dispatched when the user clicks the notification, 
however as this notification was a group of notifications it is dispatched as a single event with an array of payloads indicating 
each of the individual events contained in the group.

The `NotificationEvent.ACTION` is dispatched when a user clicks an action on a notification. 
This event currently is missed on iOS when the application is not running (background, suspended and foreground states operate correctly). 
This is due to an issue with AIR not allowing AIR application to launch into the background.


```actionscript
// Previously called init, setup and checked authorisation

Notifications.service.addEventListener( NotificationEvent.NOTIFICATION, notificationHandler );
Notifications.service.addEventListener( NotificationEvent.NOTIFICATION_SELECTED, notificationHandler );
Notifications.service.addEventListener( NotificationEvent.ACTION, actionHandler );
Notifications.service.addEventListener( NotificationGroupEvent.GROUP_SELECTED, groupSelectedHandler );

Notifications.service.register();


function notificationHandler( event:PushNotificationEvent ):void
{
	trace( "Notification: ["+event.type+"] state="+event.applicationState+" startup="+event.startup );
	trace( event.payload );
}

function actionHandler( event:PushNotificationEvent ):void
{
	trace( "Action: ["+event.type+"] identifier="+event.identifier+" state="+event.applicationState+" startup="+event.startup );
	trace( event.payload );
}

function groupSelectedHandler( event:PushNotificationGroupEvent ):void
{
	trace( "Group Selected: ["+event.type+"] groupKey="+event.groupKey+" state="+event.applicationState+" startup="+event.startup );
	for each (var payload:String in event.payloads)
	{
		trace( "PAYLOAD: "+ payload );
	}
}
```