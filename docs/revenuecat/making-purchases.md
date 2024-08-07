---
title: Making Purchases
---

The SDK has a simple method, `purchase()`, that takes a package from the fetched Offering and purchases the underlying product with the store.


```actionscript
RevenueCat.instance.purchase(
        packageToPurchase,
        function ( customerInfo:CustomerInfo, storeTransaction:StoreTransaction ):void
        {
            // purchase:success
        },
        function ( error:PurchasesError, userCancelled:Boolean ):void
        {
            // purchase:failure
        } );
```

There are two callback methods one of which will be called after completion of the purchase. If successful the success callback will contain an updated `CustomerInfo` object, along with some details about the transaction.

If an error occurs details of the error will be returned in the error callback in a `PurchaseError` object and a `Boolean` value indicates if the purchase was cancelled by the user.

