---
title: Pending Purchases
sidebar_label: Pending Purchases
---

**Interupted / Pending / Acknowledging Purchases**

Pending purchases are purchases that are currently still in progress and you are yet to deliver the appropriate product and call `finishPurchase()`.

Pending purchases may occur when a purchase is interupted, for example, the user left the application during a purchase, or they were initiated from an external source.

Purchases will remain in the pending purchases queue until you call `finishPurchase()` with the appropriate purchase. 

The main reason for this process is to allow you to verify the transaction with your server before delivering the product to your user and informing the billing service that the purchase has been delivered to the user.


>
> **From version 8, this process is applicable to Apple's In-App Purchases, Google Play Billing and Amazon In-App Purchases!** 
> The process continues to work across all services and platforms.
>

The services use slightly different terminology in their documentation you may need to be aware of:

- Apple uses "pending";
- Google uses "acknowledged", i.e. an un-acknowledged purchase is a pending purchase, 
	- when we finish a purchase we "acknowledge" the purchase;
- Amazon uses "fulfilled", i.e. an un-fulfillled purchase is a pending purchase, 
	- when we finish a purchase we "notify of fulfillment" of the purchase;




## Get Pending Purchases

You can retrieve the list of pending purchases by calling the `getPendingPurchases()` function. This will return the array of `Purchase` objects that are currently 'pending'.


```actionscript
// Check for any pending purchases
var pendingPurchases:Array = InAppBilling.service.getPendingPurchases();
for each (var p:Purchase in pendingPurchases)
{
	// You should process any pending purchases here and then finish if necessary
	processPurchase( p );
}
```


## Setup

The pending purchases queue may not be initialised immediately, so you may find that in your `InAppBillingEvent.SETUP_SUCCESS` event handler that the pending purchases queue is empty even though there are pending purchases.

The queue can be updated just after setup has completed which will be indicated by the normal `PurchaseEvent.PURCHASES_UPDATED` event. This is particularly true on iOS/tvOS where the payment queue update (which populates the pending purchases) will occur a short time after setup succeeds.

We suggest you add event listeners for the `PurchaseEvent.PURCHASES_UPDATED` event before you call `setup()` to make sure you process all pending notifications at startup. You should also perform a check of the pending purchcases in your `InAppBillingEvent.SETUP_SUCCESS` handler. Purchases that are already available at startup may not trigger a purchases updated event so you must handling purchases in both cases.


For example: 

```actionscript
// Add purchases updated handler
InAppBilling.service.addEventListener( PurchaseEvent.PURCHASES_UPDATED,	purchases_updatedHandler );

InAppBilling.service.addEventListener( InAppBillingEvent.SETUP_SUCCESS, setup_successHandler );
InAppBilling.service.addEventListener( InAppBillingEvent.SETUP_FAILURE, setup_failureHandler );

InAppBilling.service.setup(
        new BillingService()
                .setGooglePlayPublicKey( GOOGLE_PLAY_INAPP_BILLING_KEY )
);

function setup_successHandler( event:InAppBillingEvent ):void 
{
	// Check for pending purchases that are already available
	for each (var p:Purchase in InAppBilling.service.getPendingPurchases())
	{
		processPurchase( p );
	}
}

function purchases_updatedHandler( event:PurchaseEvent ):void 
{
	// Your standard purchase queue handler

	for each (var purchase:Purchase in event.data)
	{
		processPurchase( p );
	}
}
```

>
> Note: Do not rely on the `PurchaseEvent.PURCHASES_UPDATED` event as part of your flow. This event may not be dispatched if there aren't any pending purchases, or if they are available in the setup success handler.
>




## Google Play Billing Acknowledgement 

With Google Play Billing the call to `finishPurchase()` performs the acknowledgement of the purchase.

It's very important to note that if you don't acknowledge a purchase (i.e. call finish purchase) it will be refunded.

>
> Google Play supports purchasing products from inside of your app (in-app) or outside of your app (out-of-app). In order for Google Play to ensure a consistent purchase experience regardless of where the user purchases your product, you must acknowledge all purchases received through the Google Play Billing Library as soon as possible after granting entitlement to the user. If you do not acknowledge a purchase within three days, the user automatically receives a refund, and Google Play revokes the purchase. 
>




