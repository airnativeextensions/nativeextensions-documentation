---
slug: 2021-04
title: April 2021
description: General Updates, APM, Game Controller, and Unity NFC 
image: images/game-controller.png
author: distriqt
author_url: https://github.com/distriqt
author_image_url: https://avatars3.githubusercontent.com/u/532565?s=460&v=4
tags: [ newsletter, air, gamecontroller, apm, nfc, unity ]
---

> General Updates, APM, Game Controller, and Unity NFC.

This month has seen a range of smaller bug fixes and updates to the extensions, including:

- Flurry: SDK update;
- MediaPlayer: Fix for display issue on destroy;
- CameraUI: Android gallery meta-data issue fix;
- Adverts Mediation: Tap Joy resources issue;

We are continuing towards some Flutter extensions and are still looking for suggestions. If anyone has any requests we are looking for a good initial project to expand our services, please feel free to get in [touch](mailto:airnativeextensions@distriqt.com) with your ideas.

Additionally we have released another Unity plugin for NFC available now for our subscribers in github and in the Unity Asset Store. 

<!--truncate-->


#### In Development

We have a major update for [Adverts](https://airnativeextensions.com/extension/com.distriqt.Adverts) in testing to bring the latest build of AdMob to you. This update involves some refactoring and updates to reflect the latest SDK changes. So you may want to plan some development time to integrate the next release. 

We are going through and removing duplicate iOS/tvOS linker options in our extensions and specifying common ones in the Core extension. This should help with developers who encounter the "input line too long" error message when packaging for iOS on Windows. Additionally we are removing any minimum iOS version specifications in the extensions, this will now be up to the developer to specify. These changes will be rolled out with other updates for the extensions.


![](images/airpackagemanager.png)




### [AIR Package Manager](https://github.com/airsdk/apm)

This month we have invested some time in the development of APM. We believe this is such an important missing component of the AIR eco-system that we are pushing ahead with the development. 

>
> The AIR Package Manager allows management of AIR libraries and extensions and assists in creation of the application descriptor.
>

Initially we have just been scoping the components and planning the development but will be moving into development in May.

Have a look at the [repository](https://github.com/airsdk/apm) and if you have any thoughts and feel you could help please reach out, either by [sponsoring](https://github.com/sponsors/marchbold) or contributing.





![](images/game-controller.png)


### Game Controller

We have had a few requests around improving the game controller support in AIR on mobile. 

> This will allow us to create a new "Game Controller" ANE to provide advanced features and events from controllers on iOS and Android. Features would include: connected / disconnected events, input buttons / axis events, and retrieving controller information such as such as type / provider / vendor.

You can read the discussion [here](https://forum.starling-framework.org/d/23008-gamepad-controller-support-iosandroid/18)

Sponsoring helps us to fund the initial development work for a new extension and is the simplest way we can continue further development of the AIR platform. We have had a large contribution to the development but are still looking for additional funding to get this extension started. If you are interested you can sponsor the development on [github](https://github.com/sponsors/distriqt).





![](images/unity.png)


### [Unity Plugins](https://assetstore.unity.com/publishers/46451)

We have released another plugin to the Unity Asset Store this month:

- [NFC](https://assetstore.unity.com/packages/tools/integration/nfc-190517) 

Scan NFC tags and launch your application to engage users physically with the real world! 

Check all our Unity plugins out in the [store](https://assetstore.unity.com/publishers/46451). If there are any you think would be useful to your Unity project please let us know.

**Note: If you already have a subscription to the AIR version of these plugins then you have access to the Unity Plugin for free.**




---

As always, if you have any native development needs for AIR, Unity, Flutter or Haxe, please feel free to contact us at [airnativeextensions@distriqt.com](mailto:airnativeextensions@distriqt.com).


