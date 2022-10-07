---
title: Introductory Prices
sidebar_label: Introductory Prices
---


**Offer introductory pricing for auto-renewable subscriptions to eligible users.**

>
> Available through Google Play Billing and Apple In-App Purchases
>

Apps with auto-renewable subscriptions can offer a discounted introductory price, including a free trial, to eligible users. You can make introductory offers to customers who haven’t previously received an introductory offer for the given product, or for any products in the same subscription group.

- **Free trial period**: An amount of time during which a user may access a subscription without being billed. A free trial period is a way to entice users to try your subscription before committing to purchase it.

- **Introductory price**: The price of the subscription over a certain number of initial, "introductory" billing periods. Introductory price is a way to entice users to try your subscription while simultaneously gaining some revenue. The Introductory price must be less than the subscription's normal price.



Start by setting up introductory offers in App Store Connect or the Google Play Console. 

The process then follows:

- Retrieving subscription offers
- Determine eligibility
- Display the offer
- Make Purchase


On iOS you will need to determine if the user is eligible to receive an introductory offer. When the app queries the App Store for a list of available products, display the introductory pricing if the user is eligible to receive them.


Before you can display introductory offers and free trials in your app, you must first configure the offers in App Store Connect and the Google Play Console. 

- App Store Connect, see [Set an introductory offer for an auto-renewable subscription](https://help.apple.com/app-store-connect/#/deve1d49254f).
- Google Play Console, see [Create a subscription](https://support.google.com/googleplay/android-developer/answer/140504)



Introductory Prices and Free trials are implemented as a Subscription Offer on a subscription product. You will follow the same approach as a normal offer to purchase and display these.


See [Subscription Offers](subscription-offers.md) for more information.




