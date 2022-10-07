---
title: Consuming Purchases
sidebar_label: Consuming Purchases
---

Once an item is purchased, it is considered to be "owned". 

Some application stores require you to "consume" a purchase before you can purchase the item again.
This is useful when you are providing items that may be purchased multiple times within your application, 
for example, health points or coins in a game.

Consuming an item involves calling the `consumePurchase` function with a product request 
containing the product id to consume.

If you consider a product to be a consumable you should implement this process either when your 
user uses the product or you can call it as soon as you deliver the product to the user.


```actionscript
// The service must be setup and a list of products retrieved.

// Make sure you have the following listeners
InAppBilling.service.addEventListener( InAppBillingEvent.CONSUME_SUCCESS, consumePurchase_successHandler );
InAppBilling.service.addEventListener( InAppBillingEvent.CONSUME_FAILED, consumePurchase_failedHandler );

InAppBilling.service.consumePurchase( new Purchase( productId ) );


function consumePurchase_successHandler( event:InAppBillingEvent ):void
{
	trace( "consume success" );
}

function consumePurchase_failedHandler( event:InAppBillingEvent ):void
{
	trace( "consume failed" );
}
```

:::info Note
You must have completed the purchase by calling `finishPurchase()` before attempting to consume a purchase.
:::



