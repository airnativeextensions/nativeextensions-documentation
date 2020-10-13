---
title: Purchases
sidebar_label: Purchases
---

## Get Purchases

In order to retrieve a list of purchases the user has made use the `getPurchases` function. This call will query the store for any purchases the user has made and any valid license information.

This call will return a complete or an error event:

- `PurchaseEvent.GET_PURCHASES_COMPLETE`: Dispatched when successfully retrieve the purchases, the event will contain an array of `Purchase` objects each describing a user's purchase;
- `PurchaseEvent.GET_PURCHASES_ERROR`: Dispatched when an error occurred.


For example:

```actionscript
WindowsStore.service.addEventListener( PurchaseEvent.GET_PURCHASES_COMPLETE, getPurchases_completeHandler );
WindowsStore.service.addEventListener( PurchaseEvent.GET_PURCHASES_ERROR, getPurchases_errorHandler );
			
WindowsStore.service.getPurchases();


function getPurchases_completeHandler( event:PurchaseEvent ):void
{
    for each (var purchase:Purchase in event.purchases)
    {
        trace( purchase.toString() );
    }
}

function getPurchases_errorHandler( event:PurchaseEvent ):void
{
    trace("ERROR: [" + event.errorCode + "] "+event.errorMessage  );
}
```


This appears to only return store managed purchases, such as durable products. Developer managed consumables may not be returned through the `getPurchases` call.





### Subscriptions 

Purchases that relate to a subscription product will have additional information in the `Purchase` object.

The `active` flag will indicate whether the subscription is currently active. This should always be `true` for purchases queried through the `getPurchases()` functionality as this only retrieves active purchases. 

Additionally for subscription purchases there will be a valid `expirationDate` property on the object, indicating when the current billing period for the subscription will end.



