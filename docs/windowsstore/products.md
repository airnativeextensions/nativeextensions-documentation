---
title: Products
sidebar_label: Products
---

## Query product information

To query information about your known products you call the `getProducts` function with an array of store product ids.

```actionscript
WindowsStore.service.getProducts( [ "XXXXXXXXXXXX", "XXXXXXXXXXXX" ] );
```

These id's will be set by the store and available in the dashboard when you create your products.

This call will result in one of two possible events:

- `ProductEvent.GET_PRODUCTS_COMPLETE`: Dispatched if product information retrieval was successful;
- `ProductEvent.GET_PRODUCTS_ERROR`: Dispatched if an error occurred.


```actionscript  
WindowsStore.service.addEventListener( ProductEvent.GET_PRODUCTS_COMPLETE, getProducts_completeHandler );
WindowsStore.service.addEventListener( ProductEvent.GET_PRODUCTS_ERROR, getProducts_errorHandler );
				
WindowsStore.service.getProducts( [ "XXXXXXXXXXXX", "XXXXXXXXXXXX" ] );


function getProducts_completeHandler( event:ProductEvent ):void 
{
    for each (var product:Product in event.products)
    {
        trace( "product: [" + product.id + "]:: "+product.priceString+" "+product.description );
    }
}

function getProducts_errorHandler( event:ProductEvent ):void 
{
    trace( "ERROR: ["+event.errorCode+"] : "+ event.errorMessage );
}
```



## Product Types

There are several types of product as indicated by the `type` property of the `Product` object. It will be one of the following:

- `Consumable`: A store managed consumable product that can be purchased, used, and purchased again. The store keeps a track of the user's balance for these types of products.
- `UnmanagedConsumable`: A developer managed consumable product that can be purchased, used, and purchased again. The store does not track the user's total for these types.
- `Durable`: A product that persists for the lifetime specified in the dashboard. **Subscription products will have this type**.




## Skus

Each product may have multiple product skus associated with it, indicating price changes or variations of the product.

Importantly this SKU information contains whether the product is a subscription and billing information about the subscription (eg billing period and whether it has a trial period).

This information is contained in the `skus` array of a `Product`:

```actionscript
for each (var sku:ProductSku in product.skus)
{

    if (sku.isSubscription)
    {
        // Product is a subscription
        if (sku.subscriptionInfo.hasTrialPeriod)
        {
            // Subscription has a trial
        }
    }
    
}
```

>
> In our tests it seems there are sometimes an odd "non-subscription" SKU created for a subscription product. We aren't sure as to the source or reason for this SKU, so always ensure you check all the SKUs for the subscription information.
>





