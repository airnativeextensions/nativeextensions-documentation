---
title: Make Purchase
sidebar_label: Make Purchase
---


In order to purchase a product you will construct a `PurchaseRequest` object and pass it to the `makePurchase` function. 

```actionscript
var request:PurchaseRequest = new PurchaseRequest()
        .setProductId( "XXXXXXXXXXXX" );

WindowsStore.service.makePurchase( request );
```

The `makePurchase` call will dispatch one of the following events:

- `PurchaseEvent.MAKE_PURCHASE_COMPLETE`: Dispatched when the purchase completed successfully;
- `PurchaseEvent.MAKE_PURCHASE_ERROR`: Dispatched when an error occurred. 


```actionscript
var request:PurchaseRequest = new PurchaseRequest()
        .setProductId( "XXXXXXXXXXXX" );

WindowsStore.service.addEventListener( PurchaseEvent.MAKE_PURCHASE_COMPLETE, makePurchase_completeHandler );
WindowsStore.service.addEventListener( PurchaseEvent.MAKE_PURCHASE_ERROR, makePurchase_errorHandler );

WindowsStore.service.makePurchase( request );

function makePurchase_completeHandler( event:PurchaseEvent ):void
{
    // event.purchases should contain one Purchase object with the product info
    for each (var purchase:Purchase in event.purchases)
    {
        trace( purchase.toString() );
    }
}

function makePurchase_errorHandler( event:PurchaseEvent ):void
{
    trace( "ERROR: ["+event.errorCode + "] :"+event.errorMessage );
}
``` 

The `PurchaseEvent.MAKE_PURCHASE_COMPLETE` event should contain one `Purchase` object with the product information of the product purchased. At this point there will be no extended information so you can query `getPurchases` if you need additional information on store managed purchases.

