---
slug: 2022-02
title: February 2022
description: Android 12 (API 31), apm documentation
image: images/flood.png
authors: [ marchbold ]
tags: [newsletter, air, apm, airsdk.dev]
---

> Android 12 (API 31), apm documentation

This month we were aiming to have released a complete upgrade of all our extensions to be compatible with Android 12 (API 31) including Google Play Services and the AndroidX libraries. Along with this comes a major update to all our documentation to use the AIR Package Manager (`apm`)!

![](images/flood.png)

Unfortunately due to the unexpected weather event in Australia, distriqt's offices have been affected by extreme flooding and power outages and we have been delayed with this release. 

We are currently aiming to start release of these updates over the next fortnight, as soon as our office is operating again.


<!--truncate-->

![](images/android.png)

### Android 31

Android 12 (API 31) contains a range of security and performance changes that have affected nearly all our extensions. Previously many Android developers relied on default values for certain things from the Android OS but we are now being required to explicitly state these values. 

With these updates come a series of changes to the manifest additions, particularly around the addition of `android:exported` attributes. We highly recommend using `apm` to make the migration as easy as possible, `apm` will handle the update of the manifest automatically for you.

Over the coming weeks we will progressively be releasing the updates to our extensions and air packages to support Android 12. In addition, all our documentation is being updated to show how to use `apm` to install and configure the extensions. There's never been a better time to start using the AIR package manager. 

If you are interested in some detailed information on the changes in Android 12 have a look [here](https://developer.android.com/about/versions/12/behavior-changes-12). 




---

As always, if you have any native development needs for AIR, Unity, Flutter or Haxe, please feel free to contact us at [airnativeextensions@distriqt.com](mailto:airnativeextensions@distriqt.com).
