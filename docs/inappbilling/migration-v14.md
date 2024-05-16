---
title: Migration
sidebar_label: Migration v14
---

## Version 14.0

Version 14 implemented Google Play Billing client library v5.0.0

This brings some major changes to subscriptions and some breaking API changes that you will need to update your application to manage.


### Subscription Offers

Instead of "discounts" we have moved to the newer concept of "offers" to represent the different ways of purchasing a subscription. Offers allow much more flexibility in the ways you can allow your customers to purchase your subscriptions.

Every subscription product now has at least one subscription offer associated with it. Each offer sets out different pricing phases for a subscription. Eg there may be one offer with a free introductory trial period followed by a recurring monthly subscription. The offer contains one or more subscription phases that has the cost and period information for different phases of the subscription. 

When purchasing as subscription you must now provide the subscription offer you wish to present to the user. 

```actionscript
var subscription:Product = ...;

// You can either have some logic, or allow the user to select. 
// If you only have one offer for your subscriptions you can just use the first available  

var offer:SubscriptionOffer = subscription.subscriptionOffers[0];

var request:PurchaseRequest = new PurchaseRequest()
    .setProductId( sub.id )
    .setSubscriptionOfferRequest( 
        new SubscriptionOfferRequest()
            .setSubscriptionOffer( offer )
     );

InAppBilling.service.makePurchase( request );
```

To migrate it will depend if you were previously using product discounts (`ProductDiscount`) in your application to provide promotional discounts, free trials or introductory periods.


#### Not using discounts

If you haven't setup subscription offers on Google Play and aren't using any promotional discounts on iOS then to migrate to the new approach is to simply find the first offer in the subscription and supply that in the offer request.

```actionscript
var offer:SubscriptionOffer = product.subscriptionOffers[0];

var request:PurchaseRequest = new PurchaseRequest()
    .setProductId( sub.id )
    .setSubscriptionOfferRequest( 
        new SubscriptionOfferRequest()
            .setSubscriptionOffer( offer )
     );

InAppBilling.service.makePurchase( request );
```

You need to do this on all platforms and services and we internally 

As you investigate offers you may wish to expand this, but this is a simple way to move to the latest subscription purchase approach.


#### Using discounts

If in the past you have used discounts and the `ProductDiscount` class then you will need to completely migrate to the new `SubscriptionOffer` approach.

Check the documentation on [Subscription Offers](subscription-offers.md) for more information.



