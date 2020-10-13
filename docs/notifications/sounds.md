---
title: Sounds
sidebar_label: Sounds
---

The following documentation describes how to get custom sounds to play when your notification arrives.

Importantly these sounds are always affected by the user's sound settings and generally they can override what you provide (eg by muting the phone), so it's always worth checking your device before deciding sounds are failing.

Sounds need to be treated slightly differently on the different platforms however if you follow the guide you should be able to have a single code base running correctly across all platforms.



## Setting the Sound 

On iOS and Android (prior to version 8.0) you can attach a sound to a notification directly using the `setSound()` function on your `NotificationBuilder`.

```actionscript
new NotificationBuilder()
    
    // Other notification options

    .setSound( sound )

    .build();
```

The `sound` string passed to the `setSound()` function can be a few different things:

- A relative path of an asset file packaged with your application, eg `"assets/notifications/sounds/notification.mp3"`
- A relative path of an asset file packaged with your application without the extension, eg `"assets/notifications/sounds/notification"`
    - In this case the extension will look for an `mp3` file on Android and a `caf` file on iOS.
- Android: The name of a raw sound resource you have packaged with your application (in a custom ANE).


The second method is the suggested method as this is the easiest way to simulataneously support iOS and Android. The extension will select the correct file and you will need to package the `caf` file on iOS and `mp3` file on Android.

For example: 

```actionscript
.setSound( "assets/notifications/sounds/notification" )
```

Will use the following files:
- iOS: `assets/notifications/sounds/notification.caf`
- Android: `assets/notifications/sounds/notification.mp3`

You can either package both of these files or selectively package them for the appropriate platform.


## Using Channels

From Android 8.0 (API level 26), they have introduced the concept of a notification channel. When you create a notification you must specify a channel for the notification to use through the `setChannel()` function on the `NotificationBuilder`.

```actionscript
new NotificationBuilder()
    
    // Other notification options

    .setChannel( "channel_id" )

;
```

The channel you specify controls the sound that will be played for notifications on Android 8 and higher.

You create the channels along with your service (see [Channels](setup-your-service#channels) for more information).

*If you don't specify a channel when creating a notification it will default to the first channel in your service.*



To set the sound played for a notification channel you use the `setSound()` function on the `ChannelBuilder`:

```actionscript
new ChannelBuilder()
    .setId( "test_channel" )
    .setName( "Test Channel" )
    .setGroup( "test_channel_group" )
    .setSound( "assets/notifications/sounds/notification" )
    .build();
```

This function operates the same way as the `setSound()` function for the `NotificationBuilder` so you can specify exactly the same path / resource name that you would have used there. 

>
> Note: Channels are ignored on iOS so the setting on the `NotificationBuilder` will always be used on iOS and on older Android versions. Android version 8.0 and higher will use the channel sound.
>













