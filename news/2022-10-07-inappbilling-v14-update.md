---
title: InAppBilling v14
description: Update Play Billing SDK to v5.0.0
image: images/playbilling.png
authors: [ marchbold ]
tags: [ airsdk, gdpr, ane, advertising ]
---

Many of you will have received the following notice from Google over the previous months:

:::info Reminder
Starting on August 2, 2022, all new apps must use Billing Library version 4 or newer. By November 1, 2022, all updates to existing apps must use Billing Library version 4 or newer.
:::

We are excited to announce that version 14 of the InAppBilling extension brings v5.0.0 of the Billing library so you will be able to update your applications before the November deadline for updates. 

<!--truncate-->

---

As announced at Google I/O in 2019 and the [Meet Google Play Billing Library Version 3](https://android-developers.googleblog.com/2020/06/meet-google-play-billing-library.html) blog post, all versions of Play Billing Library will follow a two year deprecation cycle.

Version 5.0.0 brings some major changes to subscriptions and some breaking API changes that you will need to update your application to manage. These changes are mainly focused around subscriptions and generally developers who only use consumable / non-consumable products shouldn't see any change in functionality. 

The changes center around the move from product "discounts" to the newer concept of "offers" to represent the different ways of purchasing a subscription. Offers allow much more flexibility in the ways you can allow your customers to purchase your subscriptions.

Every subscription product now has at least one subscription offer associated with it. Each offer sets out different pricing phases for a subscription. Eg there may be one offer with a free introductory trial period followed by a recurring monthly subscription. The offer contains one or more subscription phases that has the cost and period information for different phases of the subscription.

When purchasing as subscription you must now provide the subscription offer you wish to present to the user.

For more information on migrating, follow the [migration guide](/docs/inappbilling/migration-v14).