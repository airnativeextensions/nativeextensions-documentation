---
slug: 2023-11
title: November 2023
description: Extension Updates
image: images/contacts.png
authors: [ marchbold ]
tags: [newsletter, airsdk, application-rater, adverts, google-play-billing]
---

> ANE updates, AIR SDK Manager 

This year has been remarkably busy and unfortunately news updates were pushed down the list, but as the year comes to a close I'd like to update on what we see as the major native extension news over the past months.

Major changes across all our extensions include:
- iOS/macOS Xcode 14 update that required removal of bitcode support and increasing the minimum sdk to 12;
- Android permissions overhaul for new Android 33+ requirements;
- Android compatibility when running AIR in a background thread; 
- Apple Silicon support for our macOS extensions;

We have several major projects in the works including:
- Scanner rewrite away from the deprecated library currently in use;
- Migration to gradle dependencies in all our dependency extensions;
- apm integration with IDEs;

Some of the key recent changes are listed below.

Looking forward to another year of amazing AIR development!


<!--truncate-->


---

![](images/contacts.png)

### [Contacts](https://airnativeextensions.com/extension/com.distriqt.Contacts)

A complete rewrite of the iOS implementation of the Contacts extension brings the latest functionality from iOS using the newer Contacts framework. 

This update should vastly improve performance of contact retrieval and ensures support on the latest versions of iOS.


---

![](images/gameservices.png)

### [Game Services](https://airnativeextensions.com/extension/com.distriqt.GameServices)

We added support to the Game Services extension for Huawei Game Service v6.10. This extension now gives you access to the major mobile game services:

- Apple Game Center (iOS/macOS)
- Play Games (Android)
- Huawei Game Services (Android)

Additionally we have a major project underway with this extension to update the Play Games implementation to use the newer "Play Games v2" library. 


---

![](images/playbilling.png)

### [InAppBilling](https://airnativeextensions.com/extension/com.distriqt.InAppBilling)

All the SDKs have been updated to the latest releases including:

- Google Play billing library to version 6;
- Amazon to version 3 (including addition of promotions, offers and free trials);
- Huawei v6.10

The latest Play Billing library requires an updated version of the Play Store application to be installed on the device so you may want to check for the availability of this before attempting to retrieve the product list. As part of the updates this year we also added an automatic fallback to the older implementation of products / purchases for Google Play Billing in order to keep supporting devices that haven't updated the Play Store application. 

A range of bug fixes including:

- correct issue with no event after ui cancelled by user;
- correct pending purchase list after purchase consumption;
- correctly supply subscription offer for new purchase;

We also have a major project underway with this extension to provide a simplified "inventory" management wrapper which should handle a lot of the complexities of making purchases. This will be an open source project utilising the extension. We hope to release more on this in the new year. 

---

![](images/permissions.png)

### [Permissions](https://airnativeextensions.com/extension/com.distriqt.Permissions)

The permissions extension has had some major updates. We found the latest updates to Android had broken the usage of this extension so we completely rewrote the authorisation process to better handle the transition through "not determined", "should explain" and then "denied". We have also added callbacks on several of the permission request processes to make handling permissions in your application much simpler.


---

![](images/nativewebview.png)

### [NativeWebView](https://airnativeextensions.com/extension/com.distriqt.NativeWebView)

The windows implementation was updated to use the latest chromium release.

The macOS implementation added support for Apple silicon ensuring support on the latest macOS machines. 

Android support for communicating with a WebView when AIR is running on a background thread.


---

![](images/adobeair.png)

### [AIR SDK Manager](https://airsdk.dev/docs/basics/getting-started)

This is an application you can use to manage your AIR SDK installations and update them as new releases are available. Additionally you can configure your SDKs without having to manually edit the `adt.cfg` file and import a license file. This has become a great tool to install and manage your AIR SDKs and we use it to manage all our developer SDKs now.

The tool has had troubleshooting section added which directly connects to adt to get debugging information when packaging your AIR applications.

We have added this tool as the suggested installation process through the [airsdk.dev getting started guide](https://airsdk.dev/docs/basics/getting-started).


---

As always, if you have any native development needs for AIR, Unity, Flutter or Haxe, please feel free to contact us at [airnativeextensions@distriqt.com](mailto:airnativeextensions@distriqt.com).
