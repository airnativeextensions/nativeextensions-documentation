---
title: Change a Purchase
sidebar_label: Change a Purchase
---

You can offer users different subscription tiers, such as a base tier and a premium tier in some billing services (such as Google Play Billing).

If your application provides different teirs of subscriptions a user should be able to upgrade and downgrade a subscription by purchasing a different tier subscription.

## Support

Not every service supports changing purchases, so you should check the `isChangePurchaseSupported` flag before attempting any of the following functionality:

```actionscript
if (InAppBilling.service.isChangePurchaseSupported)
{
    // changing purchases is supported on the current platform and service
}
```

:::note
Only call this after [setting up your billing service](billing-service.md).
:::

## Changing a Purchase

You should present a screen with the available subscriptions for a user and then if required trigger the upgrade / downgrade process by calling the `changePurchase()` method.

When upgrading or downgrading, you pass information about the current purchase including the product id and transaction id (i.e. Google Play purchase token) for the current subscription and the product id for the new (upgraded or downgraded) subscription and subscription offer:

```actionscript
var request:PurchaseChangeRequest = new PurchaseChangeRequest()
        .setCurrentDetails( "current_product_id", "current_purchase_transaction_id" )
        .setNewProductId( "new_product_id" )
        .setSubscriptionOfferRequest(
                new SubscriptionOfferRequest()
                        .setSubscriptionOffer( offer )
        );

var success:Boolean = InAppBilling.service.changePurchase( request );
```

Similar to making a purchase you should listen for the `PurchaseEvent.PURCHASES_UPDATED` and `PurchaseEvent.PURCHASE_FAILED` events to handle the result from the purchase change.

```actionscript
InAppBilling.service.addEventListener( PurchaseEvent.PURCHASES_UPDATED, purchases_updatedHandler );
InAppBilling.service.addEventListener( PurchaseEvent.PURCHASE_FAILED, purchase_failedHandler );
```

:::note Subscription Offers
Similar to a `PurchaseRequest` for a normal subscription you must provide an offer as part of the `PurchaseChangeRequest`. This must be an offer on the new subscription.
See [Subscription Offers](subscription-offers.md) for more information.
:::



## Set proration mode

When upgrading or downgrading a subscription, you can call `setProrationMode()` in the `PurchaseChangeRequest` class to provide details about the proration that will be applied when the subscription changes:

```actionscript
var request:PurchaseChangeRequest = new PurchaseChangeRequest()
        .setCurrentDetails( "current_product_id", "current_purchase_transaction_id" )
        .setNewProductId( "new_product_id" )
        .setSubscriptionOfferRequest(
                new SubscriptionOfferRequest()
                        .setSubscriptionOffer( offer )
        )
        .setProrationMode( PurchaseChangeRequest.IMMEDIATE_WITH_TIME_PRORATION );
```

The following table lists all of the proration modes.

|                                                             |                                                                                                                                                                                                     |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PurchaseChangeRequest.IMMEDIATE_WITH_TIME_PRORATION`       | Replacement takes effect immediately, and the new expiration time will be prorated and credited or charged to the user. This is the current default behavior.                                       |
| `PurchaseChangeRequest.IMMEDIATE_AND_CHARGE_PRORATED_PRICE` | Replacement takes effect immediately, and the billing cycle remains the same. The price for the remaining period will be charged. **Note: This option is only available for subscription upgrade.** |
| `PurchaseChangeRequest.IMMEDIATE_WITHOUT_PRORATION`         | Replacement takes effect immediately, and the new price will be charged on next recurrence time. The billing cycle stays the same.                                                                  |
| `PurchaseChangeRequest.DEFERRED`                            | Replacement takes effect on the next recurrence time.                                                                                                                                               |
| `PurchaseChangeRequest.IMMEDIATE_AND_CHARGE_FULL_PRICE`     | Replacement takes effect immediately, and the user is charged full price of new plan and is given a full billing cycle of subscription, plus remaining prorated time from the old plan time.        |


## Application Username

Similar to a purchase, you can attach an obfuscated username or account id to a purchase. You can set this during the change purchase process by calling `setApplicationUsername()` on your purchase change request.

```actionscript
var request:PurchaseChangeRequest = new PurchaseChangeRequest()
        .setCurrentDetails( "current_product_id", "current_purchase_transaction_id" )
        .setNewProductId( "new_product_id" )
        .setApplicationUsername( "..." );
```

## Further Reading

- Google Play Billing: https://developer.android.com/google/play/billing/subs#change
