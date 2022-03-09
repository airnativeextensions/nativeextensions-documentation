---
title: Audio Player - Background Audio
sidebar_label: Audio Player - Background Audio
---

The Audio Player can be used to play back audio files using the native audio player in the background. This allows you to introduce background audio playback, and remote control center display of audio media information.



## Background Audio

The process to play audio while your application is in the background varies on the different operating systems.

There are some general rules here. 

- Only use one AudioPlayer instance with the background audio enabled. Using multiple players with background audio enabled can have undesired affects
- When using background audio the extension may display the remote controls automatically as this is required by some platforms (Android in particular requires you to display a notification showing the playback)


In order to enable background audio on a player you need to enable the option in the `AudioPlayerOptions`:

```actionscript
var options:AudioPlayerOptions = new AudioPlayerOptions()
    .enableBackgroundAudio();
```

Creating a background audio player will enable the remote command center for this player and automatically enable the play and pause commands.

If you wish to set more advance controls including setting the media information and artwork, please see the dedicated documentation on the "Remote Command Center". Using the "Remote Command Center" events allows you to create a more complete player experience for your user across multiple files and players.



### iOS 

In order to play audio in the background you will firstly need to add the `audio` background mode to the `UIBackgroundModes` key in your info additions section of your application descriptor. 

```xml
<key>UIBackgroundModes</key>
<array>
	<string>audio</string>
</array>
```

See [Add the Extension](add-the-extension.mdx#background-audio)

Secondly you will have to inform the ANE to change the audio session to support background audio. This is done by enabling the background audio in the `AudioPlayerOptions` as above. This will change the audio session mode to support background audio. 

:::caution
Be aware that this mode change will affect your entire application not just this player. 
:::


### Android

On Android, background audio will be played through a service using a completely different implementation from the normal audio playback. This is a requirement of Android to continue playback of audio when the application loses focus.

Additionally, it is a requirement that a notification be displayed indicating the playback. This will be automatically created for you and you can modify it's contents through the Remote Command Center. 




