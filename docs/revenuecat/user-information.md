---
title: Checking Subscription Status
---


## Get User Information

The `CustomerInfo` object contains all of the purchase and subscription data available about the user. This object is updated whenever a purchase or restore occurs and periodically throughout the lifecycle of your app. The latest information can always be retrieved by calling `getCustomerInfo()`:

```actionscript
RevenueCat.instance.getCustomerInfo(
        function ( customerInfo:CustomerInfo ):void
        {
            // access latest customerInfo
        },
        function ( error:PurchasesError ):void
        {
            // handle error
        }
);
```

It's safe to call `getCustomerInfo()` frequently throughout your app. Since the SDK updates and caches the latest `CustomerInfo` when the app becomes active, the completion block won't need to make a network request in most cases.



## Get Entitlement Information

The `EntitlementInfo` object gives you access to all of the information about the status of a user's entitlements.

To list all the active entitlements use the `active` dictionary:

```actionscript
for each (var entitlement:EntitlementInfo in customerInfo.entitlements.active)
{
    // 
}
```



## Listening For CustomerInfo Updates

A user's CustomerInfo may change from a variety of sources. You can respond to any changes in `CustomerInfo` by listening to the `PurchaseEvent.CUSTOMER_INFO_UPDATED` event.
This will fire whenever we receive a change in `CustomerInfo` on the current device and you should expect it to be called at launch and throughout the life of the app.

CustomerInfo updates are not pushed to your app from the RevenueCat backend, updates can only happen from an outbound network request to RevenueCat.

Depending on your app, it may be sufficient to ignore the delegate and simply handle changes to customer information the next time your app is launched. Or throughout your app as you request new `CustomerInfo` objects.


```actionscript 
RevenueCat.instance.addEventListener( PurchaseEvent.CUSTOMER_INFO_UPDATED, customerInfoUpdatedHandler );

function customerInfoUpdatedHandler( event:PurchaseEvent ):void
{
    // event.customerInfo contains the updated customer information
}
```

