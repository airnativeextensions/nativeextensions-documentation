---
slug: 2022-01
title: January 2022
description: Android 31, Google Play Services, AndroidX, APM Documentation
image: images/android.png
author: Michael
author_title: Lead Developer
author_url: https://github.com/marchbold
author_image_url: https://avatars3.githubusercontent.com/u/442356?s=460&v=4
tags: [newsletter, air, apm, airsdk.dev]
---

> Android 31, Google Play Services, AndroidX, APM Documentation

The start to the year has been a disrupted one, with our team having to deal with several COVID cases in our families. Fortunately we weren’t too badly affected and are all back on deck now. But this has meant our schedule for native extension work has been delayed.


<!--truncate-->

![](images/android.png)

### Android 12, Google Play Services and AndroidX

We have been working on a major update for Google Play Services and AndroidX libraries to bring them up to date with the latest releases and simultaneously updating all our extensions with Android 12 (API 31) support. This was due to be released during January but will now be released towards the end of February.

> You should currently be targeting API 30 as a maximum while we work through these latest changes.
> 
> ```xml
> <uses-sdk android:targetSdkVersion="30" />
> ```

Android 12 support mainly involves an update to the manifest additions to support the new requirement that all services/activities etc require an exported flag. Previously these have had default values applied by the SDK but with Android 12 Google now requires us to define a specific value for this flag. If you are using APM then this should be a simple update call, otherwise we are updating all our documentation with the new manifest additions which you can apply when you move to targeting API 31.

Updating Google Play Services always is a big job for us. They reach into many of our extensions and all of them must be updated simultaneously to ensure they all work together. We have completed the Google Play Services updates internally and are working through our extensions to ensure compatibility and updating documentation as required.

> Now is a great time to consider moving to apm before these updates arrive, in order to simplify your update process! [*Get started with apm here*](https://airsdk.dev/docs/basics/install-apm).



![](images/airpackagemanager.png)

### Documentation

We have been updating our documentation on using our extensions to show how to use apm to install them. Check out the following example:

https://docs.airnativeextensions.com/docs/application/add-the-extension

Using `apm` is the simplest method to use native extensions and swc libraries so we are encouraging all our users to start using this tool. Particularly with major updates like Google Play Services and the Android 12 manifest addition changes coming this month, using apm will make the update painless.

We are always looking for ways to improve so would love any feedback on the new documentation, and if anything would help in your migration to `apm`.


---

As always, if you have any native development needs for AIR, Unity, Flutter or Haxe, please feel free to contact us at [airnativeextensions@distriqt.com](mailto:airnativeextensions@distriqt.com).
