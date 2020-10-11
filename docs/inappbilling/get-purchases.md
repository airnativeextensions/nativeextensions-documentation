---
title: Get Purchases
sidebar_label: Get Purchases
---

On services where you can directly query the service for user purchases you can call the `getPurchases` 
function to retrieve them directly from the service.

>
> This is not supported on services like Apple's InAppPurchases where the only method of retrieving 
> purchases is through a user initiated restore purchases process. See [Restore Purchases](restore-purchases)
> for more on this.
>
> Except in the situation where you are using the application receipt variant of the ANE. In that variant on iOS
> this functionality will extract all the purchase information from the application receipt by decoding the receipt
> locally on the device. 
>


To query the purchases, simply call `getPurchases` and wait for one of the following events:

- `PurchaseEvent.GET_PURCHASES_COMPLETE`: Dispatched when the purchases have been retrieved successfully
- `PurchaseEvent.GET_PURCHASES_FAILED`: Dispatched when there was an error

If the call is not supported it will return `false`.

You can also check the `isGetPurchasesSupported` flag to determine if the functionality is supported
on the current service.


For example:

```actionscript
if (InAppBilling.service.isGetPurchasesSupported)
{
	InAppBilling.service.addEventListener( PurchaseEvent.GET_PURCHASES_COMPLETE, getPurchasesCompleteHandler );
	InAppBilling.service.addEventListener( PurchaseEvent.GET_PURCHASES_FAILED, getPurchasesFailedHandler );

	InAppBilling.service.getPurchases();
}
else 
{
	// Not supported - you should use restore purchases and track purchases in your app
}

function getPurchasesCompleteHandler( event:PurchaseEvent ):void
{
	for each (var purchase:Purchase in event.data)
	{
		processPurchase( purchase );
	}
} 

function getPurchasesFailedHandler( event:PurchaseEvent ):void 
{
	// getPurchases failed
}

```


> 
> During your `processPurchase` implementation you should be sure to check the `purchase.transactionState`. Only purchases in the state `Purchase.STATE_PURCHASED` should be delivered to your user. You may find there are deferred states on some platforms.
>

```actionscript
// Check the purchase state
if (purchase.transactionState == Purchase.STATE_PURCHASED)
{
	//  Deliver product to user
}
```
