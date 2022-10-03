---
slug: 2022-09
title: September 2022
description: Extension Updates
image: images/application-safearea.png
authors: [ marchbold ]
tags: [newsletter, cutouts, inappbilling, google-play-billing, adverts, permissions]
---

> Cutouts/Notches, InAppBilling testing

This month a series of smaller updates have been released including updates for Application, Adverts and Permissions extensions to address some minor issues that were found in the extensions and to add some features.

:::info Community announcement 
The AS3 reference has finally been updated to reflect the latest changes in the AIR SDK since harman took over development. We have been able to host it on the air sdk developer portal, so if you need access to the latest actionscript reference you will find it here: [https://airsdk.dev/reference](https://airsdk.dev/reference). 

Additionally if you have any tutorials or guides that may be useful for the AIR community please reach out to us and we can help you get them hosted on the airsdk.dev site.
:::

<!--truncate-->

--- 


![](images/application-safearea.png)

### [Application](https://airnativeextensions.com/extension/com.distriqt.Application)

The Application extension has had some small updates to improve the cutout information available. On Android you now can not only retrieve information on the safe area (i.e. the area of the stage that is safe to draw content) but also get "bounding box" information for each cutout/notch on the current device. This allows you to better render content outside the safe area but still avoid the cutouts.

This update also brings some additional integration for use with alarms on Android 12+ where more restrictions have been placed on exact alarms.


---


![](images/inappbilling.png)

### [InAppBilling](https://airnativeextensions.com/extension/com.distriqt.InAppBilling)

Our InAppBilling extension has been released to beta and is in final testing before the release. This major update contains the update to the latest version of the Google billing library (version 5). 

If you have the capability to help us test, we are looking for people to test the beta release before we finalise the API and changes to the extension. You will find a link to the latest beta build in this issue: [https://github.com/distriqt/ANE-InAppBilling/issues/482](https://github.com/distriqt/ANE-InAppBilling/issues/482)


---


![](images/admob.png)


### [Adverts](https://airnativeextensions.com/extension/com.distriqt.Adverts)

We added some additional information for reward video and interstitials, allowing you to retrieve the reward amount for an advert before displaying it. This allows you to correctly show the reward amount for a video when presenting it to a user.

Some minor bug fixes including: 
- native ads which were reappearing after having been removed from the view
- some minor fixes for the documentation


---


![](images/permissions.png)

### [Permissions](https://airnativeextensions.com/extension/com.distriqt.Permissions)

The Permissions extension has been updated to include the ability to request permissions for managing all files on a storage device. This is a separate authorisation process from the normal android runtime permissions and requires a specific activity to be integrated. This is now available in the latest release.


---


As always, if you have any native development needs for AIR, Unity, Flutter or Haxe, please feel free to contact us at [airnativeextensions@distriqt.com](mailto:airnativeextensions@distriqt.com).
