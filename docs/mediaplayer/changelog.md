

###### 2020.10.12 [v4.3.010]

```
Android: Added some checks around exoplayer view creation (resolves #196)
Reduced progress event load with no active listeners

```


###### 2020.08.19 [v4.2.065]

```
Corrected issue with iOS 13+ remote command center (resolves #194)
```


###### 2020.04.15 [v4.1.044]

```
Android: Changed click event to touch down event (resolves #185)
```


###### 2020.04.14 [v4.1.043]

```
Android: Corrected click event dispatch with new exoplayer implementation (resolves #185)
```


###### 2020.04.13 [v4.1.035]

```
Added flag to detect audio from other applications
```


###### 2020.03.20 [v4.0.031]

```
Android X migration (resolves #182)
```


###### 2019.09.17 [v3.0.019]

```
Added progress events to the AudioPlayer (resolves #169)
Fixed issue with createAudioPlayer and null options
```


###### 2019.08.15 [v3.0.014]

```
Android 64bit support (resolves #165)
Updated minimum iOS version to 9.0
Resolved crash with AIR 32 and thumbnail generation (resolves #153)
Automatically correct viewport position and size to integers (resolves #162)  
Corrected issue with progress events when using auto play option (resolves #166)
Added audio output to specify speaker or receiver output (resolves #167)
```


###### 2019.03.12 [v2.6.203]

```
Embedded iOS bitcode
Removed application keys
Resolved issue with second load event (resolves #158)
```


###### 2019.03.05 [v2.5.196]

```
Android: Corrected sound pool continuous looping (resolves #157)
```


###### 2019.02.27 [v2.5.188]

```
Android: Corrected sound pool volume levels + updates for loops on audio player
Updated minimum iOS version to 8.0 (resolves #156)
```


###### 2019.01.17 [v2.4.163]

```
Added very simple audio player FLA example (#150)
```


###### 2018.11.26 [v2.4.161]

```
Updated duration value on iOS (resolves #141)
Added checks for exceptions with seeks (eg with streaming media)
```


###### 2018.11.18 [v2.4.158]

```
Documentation update
```


###### 2018.11.18 [v2.4.158]

```
Android: Added interruption events for loss of audio focus (resolves #139)
```


###### 2018.11.09 [v2.3.154]

```
Added Audio Player PAUSED and PLAYING events (resolves #136)
Android: Fixed ANR when creating player but not loading content (resolves #126)
```


###### 2018.10.27 [v2.2.142]

```
Added AUDIO_BECOMING_NOISY event for audio players when the headphones are removed (resolves #106) 
Android: Added customisation of notification icon (resolves #135)
Android: Added ability to close notification by swiping when paused (resolves #105)
Android: Added documentation on the android.permission.FOREGROUND_SERVICE requirement
Android: Add Next / Previous track buttons to notification (resolves #115)
Android: Corrected notification doesn't close on app termination (resolves #124)

```


###### 2018.09.13 [v2.1.117]

```
iOS: Updated loading events and seek operation for remote mp3 (#120)
```


###### 2018.09.11 [v2.1.114]

```
Android: Corrected launching of application from notification when activity dismissed (resolves #121)
```


###### 2018.09.07 [v2.1.108]

```
iOS: Corrected disconnection from command centre for background audio players (resolves #116)
iOS: Added skip forward / backward controls
```


###### 2018.08.21 [v2.1.092]

```
Android: Set default volume control stream (resolves #111)
```


###### 2018.08.12 [v2.1.088]

```
Fixed destruction issue with audio player (resolves #107)
```


###### 2018.07.26 [v2.1.084]

```
Added the MediaPlayerView interface to allow multiple players and individual control
Added the AudioPlayer for audio playback (including streaming audio)
Complete rewrite of Android and iOS video player implementations 
Added Apple tvOS implementation (resolves #69)
Added the RemoteCommandCenter for controls on lock screen / notification (resolves #42)

Updates:
  - Moved to the iOS AVPlayer framework (resolves #30, resolves #11, resolves #84)
  - Moved to the Android ExoPlayer library (resolves #29, resolves #24, resolves #9, resolves #6, resolves #88)
  - Android: Corrected removing player after complete (resolves #50)
  - Android: Better rotation handling (resolves #86) 
  - Android: Auto-fit video to player dimensions (resolves #6)
  - Player volume controls (resolves #73)
  - Background colour (resolves #62)
```

###### 2018.04.27 [v1.18.071]

```
Android: Added some additional checks for state when player sent to background (#88)
```

###### 2017.10.19 [v1.18.070]

```
Corrected issue with iOS 11 player (resolves #76)
```


###### 2017.07.10 [v1.18.054]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


###### 2016.12.30 [v1.16.002]

```
Android fix for thumbnails on 7+, updated SDKs + new documentation
```


###### 2016.09.02 [v1.15.014]

```
iOS: Corrected using file:// url paths
```


###### 2016.08.17 [v1.15.012]

```
iOS: Correction for exiting fullscreen on playback start (#64)
```


######  2016.07.20

```
Corrected loading of urls with '%' in parameters (resolves #57)
```


###### 2016.04.12

```
iOS: Corrected generated thumbnail orientation (resolves #55)
```


###### 2016.04.12


###### 2016.04.05

```
Added media utils to generate video thumbnail (resolves #53)
```


###### 2015.11.13

```
Updated documentation (resolves #47)
```


###### 2015.11.03

```
Updated documentation link (resolves #41)
```


###### 2015.11.03

```
Added setOptions to set background audio mode (resolves #40)
```


###### 2015.08.31

```
Android: Corrected depth order with other native components (resolves distriqt/ANE-NativeWebView#12)
```


###### 2015.06.16

```
Removed debug code from AS lib
iOS: Updated to latest common lib
Android: Windows: Fix for bug in AIR packager resulting in missing resources
```


###### 2015.06.02

```
Repackaged to test distriqt/ANE-Calendar#10
```


###### 2015.05.12

```
Android: Fixed scaling method with fullscreen (resolves #26)
```


###### 2015.03.17

```
Changed class structure to support FlashBuilder 4.6
Android: Fixed error when removing player before player ready (resolves #17)
Added click event for detecting user interaction with video
```


###### 2015.02.02

```
Added check for .debug suffix in application id
```


###### 2014.12.22

```
Added 'position' to retrieve the current playback position (resolves #4)
Android: Implemented a CONTROLS_BASIC that shows only a Play/Pause button and the Scrubber (resolves #5)
```


###### 2014.12.22

```
iOS: Included arm64 support (resolves #3) 
Android: Corrected crash with removePlayer while controls are visible (resolves #1) 
Android: Corrected application id check when doesn't contain air prefix 
```


###### 2014.12.05

```
Corrected missing EventDispatcher functions from base class
iOS: Implemented autoreleasepools for all C function calls
```


###### 2014.12.01

```
New application based key check, removing server checks
```
