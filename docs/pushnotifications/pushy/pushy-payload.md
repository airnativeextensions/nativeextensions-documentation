---
title: Pushy Payload
sidebar_label: Pushy Payload
---

The payload for a pushy notification has two distinct sections for iOS and Android.

The Android component is similar to the FCM payload and the iOS component similar to the APNs payload.

Example payload:

```json
{
    "to": "a6345d0278adc55d3474f5",
    "data": {
        "message": "Hello World!"
    },
    "notification": {
        "body": "Hello World \u270c",
        "badge": 1,
        "sound": "ping.aiff"
    }
}
```

The `to` field is the device token for the destination device.

The `data` object will contain any payload data you want to make available to your app's notification listener.

The `notification` object within the sample request body is used to customize the built-in iOS notification and does not affect Android devices.



In order to display a notification on Android, you must also include a `notification` object in the `data` payload, similar to how it is done with FCM.


```json
{
    "to": "a6345d0278adc55d3474f5",
    "data": {
        "message": "Hello World!",
        "notification" : {
			"alert" : "You have a notification",
			"title" : "You have a notification",
			"body"  : "Hello World",
			"badge" : 1,
			"sound" : "default"
		}
    },
    "notification": {
        "body": "Hello World",
        "badge": 1,
        "sound": "ping.aiff"
    }
}
```


You have access to all the fields defined in the FCM payload here, such as icons, grouping and images. See the documentation on the [FCM payload](../firebase/fcm-gcm-payload) for more information.




        