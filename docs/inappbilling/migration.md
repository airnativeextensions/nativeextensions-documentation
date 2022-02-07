---
title: Migration
sidebar_label: Migration
---

## Version 12.0

Version 12 implemented Google Play Billing client library v3.0

This brings some breaking changes to the developer payload, which is **no longer supported**! Any metadata that you wish to store about a purchase must now be done on a secure backend server that you maintain. You should associate this data with the purchase token (`transactionIdentifier`).

> 
> To ensure metadata is associated in the case of purchase flow interruptions, Google recommends storing the metadata on your backend server prior to launching the purchase dialog and associating it with your user’s account ID, the SKU being purchased, and the current timestamp.
>

You will still be able to retrieve developer payloads attached to purchases made with previous versions of the library.


### Manifest Additions

Make sure you add the following to your `application` node in your android manifest additions:


```xml
<meta-data android:name="com.google.android.play.billingclient.version" android:value="3.0.0" />
```

Check [Add the Extension](add-the-extension.mdx) for more information.





### In-App Updates
 
If you are looking to add In-App Updates make sure you add the additional extensions and manifest additions as outlined in the [documentation](in-app-updates.md#additional-requirements)








---

## Version 8.0

Version 8 implements the pending purchases and acknowledgement functionality for Google Play Billing that has been recently added, along with the re-implementation of the developer payload.


### Google Play Acknowledging Purchases

>
> Google Play supports purchasing products from inside of your app (in-app) or outside of your app (out-of-app). In order for Google Play to ensure a consistent purchase experience regardless of where the user purchases your product, you must acknowledge all purchases received through the Google Play Billing Library as soon as possible after granting entitlement to the user. If you do not acknowledge a purchase within three days, the user automatically receives a refund, and Google Play revokes the purchase. 
>


Purchases that have been completed but not yet acknowledged will be placed into a pending state and be available through the `getPendingPurchases()` method.

In order to acknowledge that the purchase has been delivered to the user you call `finishPurchase()` on any purchases that are pending. We have implemented the acknowledge call in the `finishPurchase()` method as this should closely resemble the process of how you finish a purchase on iOS. 

These purchases will now be returned by the `getPendingPurchases()` method **as well as the `getPurchases()` method**.

If you have an iOS version of your application already finishing purchases then that logic should remain the same.


### Google Play Pending Purchases

Android's "Pending Purchases" are slightly different from the concept on iOS. On Android pending purchases are purchases that **have not yet been made** and have only been initiated, whereas on iOS pending purchases are completed awaiting the developer confirmation (i.e. `finishPurchase()` call).

Google Play Billing uses this concept as a deferred payment state.

>
> For example, a user might choose to purchase your in-app product at a physical store using cash. This means that the transaction is completed outside of your app. In this scenario, you should grant entitlement only after the user has completed the transaction.
>
> For pending transactions (new in version 2.0), the three-day window (for acknowleding the purchase) starts when the purchase has moved to the SUCCESS state and does not apply while the purchase is in a PENDING state.
>

To better match the concepts across Apple's In App Purchases and Google Play Billing, we represent Android Pending Purchases as Deferred Purchases, ie. a purchase will have the state `STATE_DEFERRED`. 

A deferred purchase means that it has been initiated and is awaiting a further process before it can continue, eg parental approval. We believe this closely matches the Android concept and the logic implemented in your application should already handle this case. The deferred state is really just informing you that the purchase UI process has completed with the user selecting a method that will complete at a later time.

>
> Note: Android Pending Purchases are not returned through the `getPendingPurchases()` call. Instead you should call `getPurchases()` and check for any purchases in the `Purchase.STATE_DEFERRED` state.
>


You may need to update any logic that delivers products through the `getPurchases()` call. Previously you could have assumed that every purchase returned through `getPurchases()` was a product available to the user. You should now ensure you check the state of the purchase is `STATE_PURCHASED` before delivering a product:

```actionscript
if (InAppBilling.service.isGetPurchasesSupported)
{
    InAppBilling.service.addEventListener( PurchaseEvent.GET_PURCHASES_COMPLETE, getPurchasesCompleteHandler );
    InAppBilling.service.addEventListener( PurchaseEvent.GET_PURCHASES_FAILED, getPurchasesFailedHandler );
    
    var success:Boolean = InAppBilling.service.getPurchases();
}


function getPurchasesCompleteHandler( event:PurchaseEvent ):void 
{
    for each (var purchase:Purchase in event.data)
    {
        // Check the purchase state
        if (purchase.transactionState == Purchase.STATE_PURCHASED)
        {
            //  Deliver product to user
        }
    }
}
```



### Google Play Developer Payload

The developer payload has been re-introduced in this version however it is different from using it in the past. It is now only attached when you acknowledge a purchase, rather than when it is initiated. 

>
> You can attach a developer payload parameter to a purchase, but only when the purchase is acknowledged or consumed. This is unlike developer payload in the past, where the payload could be specified when launching the purchase flow. Because purchases can now be initiated from outside of your app, this change ensures that you always have an opportunity to add a payload to purchases.
>

So to attach a developer payload you need to set the payload on a purchase when calling `finishPurchase()`:


```actionscript
purchase.developerPayload = "some_payload";

InAppBilling.service.finishPurchase( purchase );
```

This payload will now be returned in `getPurchases()` and other purchase related events.







### API changes

We have changed the signature of the consume purchase API to better match other parts of the API. It now takes a `Purchase` parameter rather than the `PurchaseRequest`.

This should be a simple change. Existing code using a request:

```actionscript
var request:PurchaseRequest = var request:PurchaseRequest = new PurchaseRequest()
						.setProductId( purchase.productId );

var success:Boolean = InAppBilling.service.consumePurchase( request );
```

becomes:

```actionscript
var success:Boolean = InAppBilling.service.consumePurchase( purchase );
```

or if you don't have a reference to the `Purchase` you can just use the product id: 

```actionscript
var success:Boolean = InAppBilling.service.consumePurchaseByProductId( productId );
```




