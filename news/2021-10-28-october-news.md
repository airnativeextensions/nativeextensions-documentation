---
slug: 2021-10
title: October 2021
description: AIR Packages, APM v1.0.0
image: images/airnativeextension-packages.png
authors: [ marchbold ]
tags: [newsletter, air, apm]
---

> AIR Packages, APM v1.0.0

Again this month has seen a large focus on APM. Porting our extensions over to the new AIR package has taking up much of this month.

Notable ANE updates include:
- critical patch for the [Facebook API](https://airnativeextensions.com/extension/com.distriqt.FacebookAPI) ANE (v9.3.1 was a corrupted build);
- fix for authorisation process in OneSignal on iOS ([Push Notifications](https://airnativeextensions.com/extension/com.distriqt.PushNotifications));
- [Native Web View](https://airnativeextensions.com/extension/com.distriqt.NativeWebView) updates for Android API 30 and Windows 64bit support;
- [Permissions](https://airnativeextensions.com/extension/com.distriqt.Permissions) updated with new System Settings permissions;
- [BluetoothLE](https://airnativeextensions.com/extension/com.distriqt.BluetoothLE) iOS authorisation process update;


<!--truncate-->

![](images/airnativeextension-packages.png)

### AIR Packages

This month we have gone through all our extensions and created AIR Packages for each of them. **You can now install all of our extensions using APM!**

This has been another very large piece of work and has taken a lot of this month to produce these packages so we are very excited that this has been completed. All updates to our extensions in the future will be made available through packages (and we will continue to publish to the repositories).

Over the coming months we will be changing all our documentation to reflect using APM as the preferred installation method.


![](images/airpackagemanager.png)

### [APM](https://github.com/airsdk/apm)

This month has seen a lot of polish and cleanup of the APM tool and we have finally released v1.0.0. We believe this tool is ready for usage and encourage you to start using it to manage your AIR projects.

Continuing with our series of guides we published two more this last month:
- [Migrating to the AIR Package Manager](https://medium.com/airnativeextensions/migrating-to-the-air-package-manager-7ed4794215d9)
- [Updating an AIR Project using APM](https://medium.com/airnativeextensions/updating-an-air-project-using-apm-b476ea23d577)

Hopefully these guides will encourage you to start using `apm`.

---

### [Image Scripts](https://github.com/distriqt/AIR-ImageScripts)

You may be aware that in the past we made a script available to help create your application icons and launch images. This was created out of the need to start providing an asset catalogue version of icons for iOS (`Assets.car`).

The script takes an icon image and a launch image and generates a series of icons, the `Assets.car` and a `LaunchScreen.storyboard` for your application. You can simply drop these files into your application and have all the correctly sized icons for your application.
We have recently updated this script as it was failing in some circumstances. The new version is available in github now:

https://github.com/distriqt/AIR-ImageScripts


---

As always, if you have any native development needs for AIR, Unity, Flutter or Haxe, please feel free to contact us at [airnativeextensions@distriqt.com](mailto:airnativeextensions@distriqt.com).
