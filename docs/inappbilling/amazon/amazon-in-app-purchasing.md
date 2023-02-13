---
title: Setup Amazon IAP
sidebar_label: Setup
---

## Add Your Application to the Developer Console

Login to the Amazon developer console and add your application to the available apps:

https://developer.amazon.com/apps-and-games/console/apps/list.html



## Creating your products

Select "In-App Items" and add all your products making sure to correctly set them up as either a consumable, entitlement (non-consumable) or subscription. 

Ensure the status of your items is "Live" in order to correctly access the products through your application and take note of all your product identifiers (SKUs).

While you are in this section after setting up all your products it is useful to download the IAP exported JSON file to use when testing. See [Testing Amazon In-App Purchasing](testing) for more.


### Types of Purchasable Items

IAP includes three different categories of purchasable items:

- **Consumables**: Purchase that is made, then consumed within the app, such as extra lives, extra moves, or in-game currency. May be purchased multiple times.
- **Entitlements**: One-time purchase to unlock access to features or content within an app or game.
- **Subscriptions**: Offers access to a premium set of content or features for a limited period of time.


### SKUs

A SKU (technically a stock-keeping unit) is a unique identifier for each distinct purchasable item. It is unique to you (specifically your developer account registered on the developer portal), and is a (up to) 150-character length string of arbitrary structure that can contain the characters a-z, A-Z, 0-9, underscores, periods, and dashes, and is case sensitive. Purchasable items and SKUs have a 1:1 mapping. Your app will pass the SKU value via the PurchasingManager helper class to the client. The SKU is how the client knows what the customer is trying to purchase, and will manage the purchase flow accordingly.

You need to ensure that every purchasable item you define has a unique SKU. The SKUs are unique across your developer account. When you submit SKUs for multiple apps you need to ensure that there is no overlap.

Before a SKU can be used, it must be configured via the developer portal. Refer to the developer portal section of the Frequently Asked Questions for information on how to configure SKUs.


#### Subscription SKUs

Subscriptions will have a "parent SKU" which is the main subscription IAP in the console. You shouldn't use this SKU directly. Instead when you create a "Subscription Term" you will create a secondary SKU for the particular subscription term. This is the identifier you should use for `getProducts()` and when making a purchase. 

Unfortunately there is no functionality in the SDK to retrieve the parent subscription currently so you must understand the relationship between your subscriptions and the subscription terms.

:::note Recommendation
We recommend you use a convention on naming these subscriptions so you can easily determine which is the parent subscription and ensure you deliver the correct content. 

For example, if your parent subscription has an SKU of `com.application.subscription1`, then make your term SKUs extend this identifier, eg : `com.application.subscription1.monthly`, `com.application.subscription1.annually` etc. 
:::




### App Submission Process

You need to create and submit the in-app items for your IAP-integrated app before you submit the app to the Appstore. The Amazon Appstore will not test your app until both the app and your in-app items are submitted.

**If you decide to add or edit your purchasable items after submitting your app, you will need to re-submit both the new/changed items and the app itself to the Amazon Appstore.**










