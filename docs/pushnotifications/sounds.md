---
title: Sounds
sidebar_label: Sounds
---

The following documentation describes how to get custom sounds to play when your notification arrives.

Importantly these sounds are always affected by the user's sound settings and generally they can override what you provide (eg by muting the phone), so it's always worth checking your device before deciding sounds are failing.


## APNS 

With APNS the notification sound is sent as part of the payload on the notification. The `sound` field will specify the sound to use, the simplest case is to set it to `"default"` which will trigger the default notification sound on the device. 

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

You can package a supported file type with your application to use as a custom sound. This sound file should just be included as any normal asset file. Then pass the path to the file in the `sound` field.

For example, if we package a caf sound file called `notification.caf` in a `sounds` directory (at `sounds/notification.caf`) then the payload would be:

```json
{
	"aps" : 
	{
		"alert" : "You have a notification",
		"badge" : 1,
		"sound" : "sounds/notification.caf"
	}
}
```

You cannot set the "default" sound on iOS, this is a user setting.



## Android

Sounds on Android are handled slightly differently depending on the version of Android. 

Before Android 8.0 (v26) a `sound` field could be sent along with the notification payload and the file or resource would be played as a custom sound.

```json
{
	"data": {
		"notification" : {
			"alert" : "You have a notification",
			"title" : "You have a notification",
			"body"  : "The body of the notification",
			"sound" : "default"
		}
	}
}
```

This field will look for a local file or a raw resource mp3, matching the name specified. Resources will take priority over files.


From Android 8.0 (v26), sounds must be associated with a "channel" and the channel specified in the notification payload affects the sound that is played.

eg:

```actionscript
new ChannelBuilder()
	.setId( "test_channel" )
	.setName( "Test Channel" )
	.setSound( "assets/notifications/sounds/notification.mp3" )
	.build()
```

[Channel Sounds](setup-your-service.md#channel-sounds)


## FCM

With FCM there are 2 methods of notifications being sent and processed. When the application is in the foreground our extension will handle the displaying of notifications, however when it is in the background our extension will only handle data notifications, message notifications (sent either through the notification API or through the console) will be handled by the Firebase SDK internally.

### Android 7 and lower

*Android uses individual sounds for notifications.*

When our extension handles the notification, the `sound` field can refer to a file or to a resource. If you are always using data notifications then you can safely use a file reference for your sound and package the sound with your application as you do with iOS. 

To use a file, the `sound` field should be the mp3 file path within your application package. For example, if we package an mp3 sound file called `notification.mp3` in a `sounds` directory (at `sounds/notification.caf`) then the payload would be:

```json
{
	"data": {
		"notification" : {
			"alert" : "You have a notification",
			"title" : "You have a notification",
			"body"  : "The body of the notification",
			"sound" : "sounds/notification.mp3"
		}
	}
}
```

> Note: You can leave the extension off if you want. i.e. `"sound" : "sounds/notification"`

To use a resource, the `sound` field should be the name of the resource:

```json
"sound" : "notification_res_name"
```


When the Firebase SDK handles the notification the `sound` field **must** refer to a resource. It will not look for files in your application. 

```json
{
    "notification" : {
        "alert" : "You have a notification",
        "title" : "You have a notification",
        "body"  : "The body of the notification",
        "sound" : "notification_res_name"
    }
}
```

> Note: The absence of the `data` node means this is a message notification payload, not a data payload.


To package a resource, you must add your mp3 file to the `raw` directory in your [custom resources extension](https://github.com/distriqt/ANE-CustomResources/) along with your icons and configuration values. 

Additionally you should use AIR 33 or higher. Previous versions of AIR can compress the raw resources making them unusable by services such as FCM.




### Android 8+

*Android 8+ uses the channel for notification sounds.*

Ensure you set the default channel:

```xml
<meta-data
    android:name="com.google.firebase.messaging.default_notification_channel_id"
    android:value="test_sound_channel"/>
```

This default channel will be used for notifications that are sent without a specified channel. 

As you can always specify a channel in either a message or data notification you don't have the different scenarios that you have in older versions of Android. The channel can be created with either a file or a resource mp3 and both will work.

Any `sound` property sent to an Android 8+ device will be ignored when creating the notification.



### Recommendation

With this in mind, we recommend using a resource(s) for all sounds if possible. This approach gives you the most consistent experience across message and data notifications with Firebase Cloud Messaging.

It does add some complexity in creating a custom resources extension containing your sounds however you will normally be doing this for your icons and FCM configuration values so shouldn't be too much of an addition.

Then always specify the resource name in any references to sounds, you should continue to include the `sound` property in your payloads to correctly address older versions of Android and include the `channel` for Android 8+.


