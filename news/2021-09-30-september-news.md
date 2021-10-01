---
slug: 2021-09
title: September 2021
description: airsdk.dev, extension updates, and more on APM
image: images/adobeair.png
author: Michael
author_title: Lead Developer
author_url: https://github.com/marchbold
author_image_url: https://avatars3.githubusercontent.com/u/442356?s=460&v=4
tags: [newsletter, air, apm, airsdk.dev]
---

> airsdk.dev, extension updates, and more on APM

I am hope you aren't sick of hearing about APM, we are really excited for this tool so may feel like that is all we are talking about recently. We have been pushing out all our extensions as air packages and have over 70 packages in the repository now and are hoping to complete all our extensions early in October.

<!--truncate-->

![](images/adobeair.png)

### [AIR SDK Developer Site]()

Now that a lot of the existing documentation has been marked as deprecated by Adobe we believe it is very important for a modern site to be available for AIR. AIR is in no way "deprecated" so it's important that this information is available.

To this end we have been working with Harman on putting together a modern documentation site for the AIR SDK. We hope this can become the new home of AIR. Check out the site here:

[https://airsdk.dev](https://airsdk.dev)

The site is still needs a lot of content. We have been working on porting as much as we can but if you have any interest in contributing check out the site in [github](https://github.com/airsdk/airsdk.dev/). All the documentation is in simple markdown so it should be easy for anyone to contribute.

![](images/airpackagemanager.png)

### [APM](https://github.com/airsdk/apm)

It is great to see some involvement from the community with APM, but we really would love to have more feedback on the tool. AIR can be used in a myriad of ways so it's important to us to get as much feedback as possible while designing this tool.

We have started a series of guides to help you get started using the tool and to highlight the advantages of using it. The first one was published last week and we plan to have another guide each week during October.

- [An Introduction to APM](https://medium.com/airnativeextensions/an-introduction-to-apm-29461dc2a20f)

Over the last month we have fixed a range of bugs and are getting a final list of features together for a release candidate.

![](images/facebook.png)

### [Facebook](https://airnativeextensions.com/extension/com.distriqt.FacebookAPI)

The Facebook extensions have all had SDK updates to:

- Android v9.1.1
- iOS v9.3.0

Additionally there have been some fixes around gaming services callbacks and some additions for iOS 14 (ad tracking features).

![](images/ironsource.png)

### [IronSource](https://airnativeextensions.com/extension/com.distriqt.IronSource)

The ironSource extension has been updated to v7.1.10 of the ironSource SDK and all associated mediation adapters have also been updated to their latest releases.

![](images/inappbilling.png)

### [InAppBilling](https://airnativeextensions.com/extension/com.distriqt.InAppBilling)

There have been some functional fixes for the Amazon implementation correcting the consume process and some of the function return values.

If you are using Amazon In-App Purchases we suggest updating to the latest release.

![](images/onesignal.png)

### [Push Notifications](https://airnativeextensions.com/extension/com.distriqt.PushNotifications)

The push extension has had the OneSignal SDK support updated to:

- Android v4.6.0
- iOS v3.7.0

There were also some minor bug fixes around error events that were incorrectly being dispatched.

![](images/firebase.png)

### [Firebase](https://airnativeextensions.com/extension/com.distriqt.Firebase)

The Firebase extensions have been updated with some fixes around the handling of large data responses particularly in the Firestore and Realtime Database extensions where large JSON responses were being handled inefficiently. You should see a decent performance increase if you are dealing with large data queries.

---

As always, if you have any native development needs for AIR, Unity, Flutter or Haxe, please feel free to contact us at [airnativeextensions@distriqt.com](mailto:airnativeextensions@distriqt.com).
