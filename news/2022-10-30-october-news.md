---
slug: 2022-10
title: October 2022
description: Extension Updates
image: images/playbilling.png
authors: [ marchbold ]
tags: [newsletter, inappbilling, google-play-billing]
---

> Play Billing v5 release, IronSource updates

This last month has seen the release of the major update for our InAppBilling extension to support the latest version of the play billing library from Google for the Play Store. This update brings a major change to the way subscriptions are handled and is critical for any updates or new applications released to the Play Store.

Additionally we have released several updates and new mediation networks for the ironSource extension. 

<!--truncate-->

---

![](images/playbilling.png)

### [InAppBilling](https://airnativeextensions.com/extension/com.distriqt.InAppBilling)

Many of you will have received the following notice from Google over the previous months:

:::info Reminder
Starting on August 2, 2022, all new apps must use Billing Library version 4 or newer. By November 1, 2022, all updates to existing apps must use Billing Library version 4 or newer.
:::

We are excited to announce that version 14 of the InAppBilling extension brings v5.0.0 of the Billing library so you will be able to update your applications to satisfy the latest Play Store requirements. 

Version 5.0.0 brings some major changes to subscriptions and some breaking API changes that you will need to update your application to manage. These changes are mainly focused around subscriptions and generally developers who only use consumable / non-consumable products shouldn't see any change in functionality.

For more information on migrating, follow the [migration guide](/docs/inappbilling/migration-v14).

---

![](images/ironsource.png)

### [IronSource](https://airnativeextensions.com/extension/com.distriqt.IronSource)

Last month we released updates to the mediation adapters for several of the networks, including:
- AdColony
- AppLovin
- AdMob
- UnityAds

We have also added several new mediation adapters for the following networks:
- Vungle
- Digital Turbine (Fyber)

Additionally some minor functionality updates to the IronSource extension included the addition of the `setMetaData` function to help set meta data for mediation networks and other non-specific configuration values.


:::info 
Please note this extension is provided for free, so if you do find it useful, please consider [sponsoring](https://github.com/sponsors/marchbold) the developers involved.
::: 

---


As always, if you have any native development needs for AIR, Unity, Flutter or Haxe, please feel free to contact us at [airnativeextensions@distriqt.com](mailto:airnativeextensions@distriqt.com).
