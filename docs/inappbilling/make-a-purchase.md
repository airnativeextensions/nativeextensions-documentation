---
title: Make a Purchase
sidebar_label: Make a Purchase
---

Finally we reach the most important process in this extension, making a purchase. 

Making a purchase requires making a request to initiate the purchase and then "finishing the purchase" to 
finalise the purchase and remove it from any internal queues.

Firstly create a `PurchaseRequest` object and set the `productId` and `quantity` you wish to purchase. 
Then pass this object to the `makePurchase` function. 
This will initiate the purchase flow, most likely leaving your application and taking the user to the store interface.

As the state of the purchase transaction changes you will be notified through the `PurchaseEvent.PURCHASES_UPDATED` event.

>
> Note: We have deprecated all of the old `PurchaseEvent`'s such as `PURCHASE_SUCCESS` in favour 
> of a processing queue through the `PURCHASES_UPDATED` event.
>
> If you use any of the old events they will still work in the near future however we 
> suggest you migrate to the `PURCHASES_UPDATED` event to better handle purchase transaction states.
>


```actionscript
InAppBilling.service.addEventListener( PurchaseEvent.PURCHASES_UPDATED, purchases_updatedHandler );
InAppBilling.service.addEventListener( PurchaseEvent.PURCHASE_FAILED, purchase_failedHandler );

var request:PurchaseRequest = new PurchaseRequest();
request.productId = productId;
request.quantity = 1;

var success:Boolean = InAppBilling.service.makePurchase( request );
```


It is also important that you listen for the `PURCHASE_FAILED` event. This will be dispatched 
in situations where the purchase could not be attempted due to various reasons. You should
refer to the error code and message in the event to determine if it can be resolved.

One of the most common situations that this will occur on is when the product is already owned
by the user on Android. This case you should check for the `ITEM_ALREADY_OWNED` error code and 
then load the purchases to retrieve the purchase.

See the section on [Get Purchases](get-purchases.md) for more information on this process of retrieving purchases.


---


## Finishing Purchases 

As a rule it is important that you call `finishPurchase()` when you have completed the purchase 
and either handled the error or deployed the product to the user's inventory.

If you don't call `finishPurchase()` then the next time the user opens the application and 
you call `setup()` you will get notified again of the purchase as the system believes it to 
still be pending. In some circumstances, failing to finish a purchase may result in the purchase
being cancelled and the user refunded.

Once complete the extension will dispatch the `FINISH_SUCCESS` event or if an error occurred then the `FINISH_FAILED` event will be dispatched:

```actionscript
InAppBilling.service.addEventListener( InAppBillingEvent.FINISH_SUCCESS, successHandler );
InAppBilling.service.addEventListener( InAppBillingEvent.FINISH_FAILED, failedHandler );


function successHandler( event:InAppBillingEvent ):void
{
	trace( "finish purchase complete" );
}

function failedHandler( event:InAppBillingEvent ):void
{
	trace( "finish failed: ["+event.errorCode+"]" + event.message );
}
```

	
>
> You must call `finishPurchase` and confirm by receiving the `FINISH_SUCCESS` event 
> before attempting any other operation such as consuming the purchase. 
>
> The purchase is still in a pending state and not considered delivered to the user until you do. 
>
					


### Apple In-App Purchases

With Apple's In-App Purchases `finishPurchase()` will remove the purchase from the transaction queue, 
and inform Apple that you have delivered (and potentially verified) the purchase.

On iOS you most often use this process to verify the transaction with your server, to verify whether you should deliver the product before calling `finishPurchase()` and the purchase information is removed from the queue.


### Google Play Billing

With Google Play Billing the call to `finishPurchase()` performs the acknowledgement of the purchase.
Purchases that aren't acknowledged will be returned by the `getPendingPurchases()` method and **may be refunded if you do not acknowledge them**.

>
> Google Play supports purchasing products from inside of your app (in-app) or outside of your app (out-of-app). In order for Google Play to ensure a consistent purchase experience regardless of where the user purchases your product, you must acknowledge all purchases received through the Google Play Billing Library as soon as possible after granting entitlement to the user. If you do not acknowledge a purchase within three days, the user automatically receives a refund, and Google Play revokes the purchase. 
>


Note: *Previously you may have attached a developer payload at this point. This is no longer supported and has been removed by Google in the Play Billing library v3.0.* Instead consider using an obfuscated `applicationUsername` on your purchase request which will now get returned with a `Purchase` through Google Play Billing.




---


## Example

The simplest way to do this is to simply call this in the event handler, however you may wish to do this at a later time, 
for example, if you wish to validate the purchase using the transaction receipt with your application server. 


```actionscript
// The service must be setup and a list of products retrieved.

InAppBilling.service.addEventListener( PurchaseEvent.PURCHASES_UPDATED, purchases_updatedHandler );
InAppBilling.service.addEventListener( PurchaseEvent.PURCHASE_FAILED, purchase_failedHandler );
InAppBilling.service.addEventListener( InAppBillingEvent.FINISH_SUCCESS, finishPurchase_successHandler );
InAppBilling.service.addEventListener( InAppBillingEvent.FINISH_FAILED, finishPurchase_failedHandler );


var request:PurchaseRequest = new PurchaseRequest();
request.productId = productId;
request.quantity = 1;

var success:Boolean = InAppBilling.service.makePurchase( request );

trace( "makePurchase( "+productId+" ) = " + success );



//
//	PURCHASE HANDLER
//

function purchases_updatedHandler( event:PurchaseEvent ):void
{
	for each (var purchase:Purchase in event.data)
	{
		switch (purchase.transactionState)
		{
			// These transactions are in progress, so don't finish them unless you don't want them to complete
			case Purchase.STATE_PURCHASING:
			case Purchase.STATE_DEFERRED:
				break;
			
			// The purchased state should finished after you have delivered the product if applicable
			case Purchase.STATE_PURCHASED:
            {
				trace( "purchase success" );
				
				//
				// If you wish you can add the purchase to your inventory
				// and finish the purchase here
				addPurchaseToInventory( purchase );
				InAppBilling.service.finishPurchase( purchase );
				
				//
				// Alternatively hold onto this purchase so we can call
				// finish when you've delivered the product
				//
				// You would do this if you are validating the purchase on a server or
				// other operation that is required to complete before the product is delivered
				//_purchases.push( purchase );
				break;
			}
			
			
			// For all other states you should handle appropriately and call finish purchase 
			case Purchase.STATE_FAILED:
			case Purchase.STATE_REFUNDED:
			case Purchase.STATE_RESTORED:
			case Purchase.STATE_REMOVED:
			case Purchase.STATE_CANCELLED:
			case Purchase.STATE_NOTALLOWED:
				InAppBilling.service.finishPurchase( purchase );
				break;
		}
	}
}

function purchase_failedHandler( event:PurchaseEvent ):void
{
	// This transaction failed so you should notify your user and finish the purchase
	log( "purchase failed [" + event.errorCode + "] :: "+ event.message );
	if (event.data && event.data.length > 0)
	{
		InAppBilling.service.finishPurchase( event.data[0] );
	}
	
	//
	// Android may return this code if the item is already owned
	//
	if (event.errorCode == ErrorCodes.ITEM_ALREADY_OWNED)
	{
		// You should use getPurchases() to retrieve the users purchases
		// and then add them as missing from their current inventory
		InAppBilling.service.getPurchases();
	}
	
}

function finishPurchase_successHandler( event:InAppBillingEvent ):void
{
	trace( "finish purchase complete" );
}

function finishPurchase_failedHandler( event:InAppBillingEvent ):void
{
	trace( "finish failed: ["+event.errorCode+"]" + event.message );
}

```

---


## Handling User Cancellations

When a user cancels a purchase there are two avenues that you'll need to handle, due to the different ways that Android and iOS handle these cases.

On iOS there will be a `Purchase` initiated immediately so when the user cancels the purchase you will receive a `PurchaseEvent.PURCHASES_UPDATED` and the purchases transaction state will be set to `Purchase.STATE_CANCELLED`.
You will need to handle this case in your purchases updated handler and finish the purchase to remove it from the pending purchases queue.

For example:

```actionscript
function purchases_updatedHandler( event:PurchaseEvent ):void
{
	for each (var purchase:Purchase in event.data)
	{
		switch (purchase.transactionState)
		{
			// Other states ... 

			case Purchase.STATE_CANCELLED:
				// User Cancelled
				InAppBilling.service.finishPurchase( purchase );
				break;
		}
	}
} 
```


On Android the purchase is not initiated so there is no `Purchase` to return, hence you will not receive a purchases updated event but instead a `PurchaseEvent.PURCHASE_FAILED` event will be dispatched. The error code on the failed event will be set to `ErrorCodes.USER_CANCELLED` or `ErrorCodes.RESPONSE_CANCELLED` so you can use this code to process the user cancellation. As this purchase was not initiated it does not need to be finished and will not appear in the pending purchases queue.

For example:

```actionscript
function purchase_failedHandler( event:PurchaseEvent ):void
{
	switch (event.errorCode)
	{
		// Other error codes...

		case ErrorCodes.RESPONSE_CANCELLED:
		case ErrorCodes.USER_CANCELLED:
			// User cancelled
			break;
	}
}
```

You should ensure you handle both these cases in your application if you wish to handle user cancellations. 


---


## Deferred Purchases

Of special note are deferred purchases. Deferred purchases are purchases that are in progress and require further user action external to your application, such as a parental approval or payment in cash at a physical store.

With Apple's In-App Purhcases:

>
> The transaction is in the queue, but its final status is pending external action such as Ask to Buy. Update your UI to show the deferred state, and wait for another callback that indicates the final status.
>

With Google Play Billing the deferred state is equivalent to the "PENDING" purchase state where additional action is required before granting entitlement.

>
> For example, a user might choose to purchase your in-app product at a physical store using cash. This means that the transaction is completed outside of your app. In this scenario, you should grant entitlement only after the user has completed the transaction.
>



In order to correctly handle deferred purchases you should **not finish the purchase**, but leave it in the queue until the user completes the external action.

Once the user completes the action you will receive a purchases updated event and should process the purchase at that point.
It is important however if you display some "purchase in progress" UI during the making a purchase process that you close that once you receive this event. You may wish to display a message appropriate to your application indicating that they need to take action outside the app.

```actionscript
function purchases_updatedHandler( event:PurchaseEvent ):void
{
	for each (var purchase:Purchase in event.data)
	{
		switch (purchase.transactionState)
		{
			// Do nothing with the deferred purchase. Ensure you close any "purchase in progress" UI 
			case Purchase.STATE_DEFERRED:
				break;

...
```



