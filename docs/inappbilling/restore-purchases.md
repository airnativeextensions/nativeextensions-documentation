---
title: Restore Purchases
sidebar_label: Restore Purchases
---

Restoring purchases is a process that you should allow for user's who have either changed devices 
or reinstalled your application and hence need to gain access to their purchases again.

This process must require user interaction in order to pass the App Store review process. 
You should provide a button somewhere in your application to initiate this process.

For more information on the concepts you can read the Apple documentation [here](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Chapters/Restoring.html).


The restoring purchases process starts by calling the `restorePurchases` function and concludes with either 
a success (`InAppBillingEvent.RESTORE_PURCHASES_SUCCESS`) or failure (`InAppBillingEvent.RESTORE_PURCHASES_FAILED`) event. 

After calling `restorePurchases` you will a receive `PurchaseEvent.PURCHASES_UPDATED` dispatched 
which will contained `Purchase` objects in the restored state having the original purchase 
variable representing the original purchase transaction.


```actionscript
// The service must be setup and a list of products retrieved.

// Make sure you have added your purchases handler
InAppBilling.service.addEventListener( PurchaseEvent.PURCHASES_UPDATED,	purchases_updatedHandler );

InAppBilling.service.addEventListener( InAppBillingEvent.RESTORE_PURCHASES_SUCCESS, restorePurchases_successHandler );
InAppBilling.service.addEventListener( InAppBillingEvent.RESTORE_PURCHASES_FAILED, restorePurchases_failedHandler );

// Start the restore process
InAppBilling.service.restorePurchases();


//
//
//

function purchases_updatedHandler( event:PurchaseEvent ):void
{
	for each (var purchase:Purchase in event.data)
	{
		switch (purchase.transactionState)
		{

			//	Other states...


			case Purchase.STATE_RESTORED:
				// The originalPurchase property will contain all the 
				// information on the original transaction allowing 
				// you to restore the user's product
				
				addPurchaseToInventory( purchase.originalPurchase );
				InAppBilling.service.finishPurchase( purchase );
				
				// Again you could hold on to this purchase and check it against 
				// your application server before calling finishPurchase
				break;


		}
	}	
}


//
//	RESTORE PURCHASE EVENTS
//

function restorePurchases_successHandler( event:InAppBillingEvent ):void
{
	// Called when all purchases have been restored
	// This event contains no data
}

function restorePurchases_failedHandler( event:InAppBillingEvent ):void
{
	// Called if there was an error restoring purchases
}
```

