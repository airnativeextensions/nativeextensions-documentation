---
title: Consumables
sidebar_label: Consumables
---

Consumable products can be consumed by the user and purchased again.

Once purchased the user will receive an "Already Purchased" message until you inform the store of the consumption of the purchase.

For example, if your user can buy in game currency, then once the currency has been spent in your game you need to inform the store that the user can purchase currency again.

To consume a purchase call the `consumePurchase` function and pass the product id you wish to consume.


```actionscript
WindowsStore.service.consumePurchase( "XXXXXXXXXXXX" );
```


The `consumePurchase` call will dispatch one of the following events:

- `WindowsStoreEvent.CONSUME_PURCHASE_COMPLETE`: Dispatched when the consume purchase completed successfully;
- `WindowsStoreEvent.CONSUME_PURCHASE_ERROR`: Dispatched when an error occurred. 



```actionscript
WindowsStore.service.addEventListener( WindowsStoreEvent.CONSUME_PURCHASE_COMPLETE, consumePurchase_completeHandler );
WindowsStore.service.addEventListener( WindowsStoreEvent.CONSUME_PURCHASE_ERROR, consumePurchase_errorHandler );

WindowsStore.service.consumePurchase( "XXXXXXXXXXXX" );


function consumePurchase_completeHandler( event:WindowsStoreEvent ):void
{
    // purchase was consumed - your user can now purchase the product again
}

function consumePurchase_errorHandler( event:WindowsStoreEvent ):void
{
    trace( "ERROR: ["+event.errorCode + "] :"+event.errorMessage );
}
``` 