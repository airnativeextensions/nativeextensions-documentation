---
slug: 2021-11
title: November 2021
description: Camera Roll Extended, and APM
image: images/camerarollextended.png
author: Michael
author_title: Lead Developer
author_url: https://github.com/marchbold
author_image_url: https://avatars3.githubusercontent.com/u/442356?s=460&v=4
tags: [newsletter, air, apm, airsdk.dev]
---

> Camera Roll Extended, and APM

It has been a quieter month here at distriqt. The team took some time early in the month to have a much needed break especially before the end of year rush.

Work continues on the AIR package manager. If you are using the tool we’d really love to hear any [feedback you may have](https://github.com/airsdk/apm/discussions). We are currently looking to v2.0 and what features the community will need in this utility going forward.

<!--truncate-->

![](images/camerarollextended.png)

### [Camera Roll Extended](https://airnativeextensions.com/extension/com.distriqt.CameraRollExtended)

We have updated the iOS implementation to utilise the latest iOS image selection view controller. iOS 14 introduced a new set of UI views to make image selection much more consistent across iOS and you now have access to this new view in AIR. Our custom implementation will still be used on iOS 13 and earlier.

Additionally there have been some changes for image loading in iOS 15, particularly around image resizing and scaling. These updates have been integrated into the latest release of the extension.



![](images/airpackagemanager.png)

### [AIR Package Manager](https://github.com/airsdk/apm)

After we saw the first release of APM last month we have just been doing a series of minor updates and polish around the utility. We will be shortly releasing several new features in the tool including:

- build configurations to easily switch between development & production;
- more control over the project configuration including package parameter walk-throughs where we guide you through setting the parameters for a package;
- install performance improvements and introduction of a “lock” file to ensure consistent configuration across build environments;

All this will be coming in v1.1 in the first week in December.


---

As always, if you have any native development needs for AIR, Unity, Flutter or Haxe, please feel free to contact us at [airnativeextensions@distriqt.com](mailto:airnativeextensions@distriqt.com).
