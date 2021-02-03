---
title: iOS APNS Payload
sidebar_label: iOS APNS Payload
---


The iOS payload is relatively simple. Using the payload you can set:

- alert title
- alert body
- badge number
- custom sound name
- category (for actions)
- content available flag for background notifications
- any custom data payload


The simplest payload just contains an alert message, badge number and sound.

```json
{
	"aps" : 
	{
		"alert" : "You have a notification",
		"badge" : 1,
		"sound" : "default"
	}
}
```


To show an alert with a title and a body you can expand the alert text into an object.
Also to show actions you can set the `category` to match a category you created 
on your `Service`

```json
{
	"aps" : 
	{
		"alert" : {
			"title" : "Game Request",
			"body" : "Bob wants to play poker",
		},
		"badge" : 1,
		"sound" : "default",
		"category" : "INVITE_CATEGORY"
	}
}
```


To send a silent (background) notification you add the `content-available` field.
You should not send an `alert` as part of a background notification. 
If you do you may receive additional notification events.

```json
{
	"aps" : {
		"content-available" : 1,
		"sound" : ""
	},
	"custom-key" : "custom-value"
}
```

More details here: [https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/TheNotificationPayload.html](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/TheNotificationPayload.html)

