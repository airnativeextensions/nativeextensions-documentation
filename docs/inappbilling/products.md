---
title: Products
sidebar_label: Products
---

At the core of the InAppBilling functionality is a list of products. 
Before making any purchases or restoring any transactions you must retrieve a list of the 
products you support in your application from the payment service by calling `getProducts`.

This will initialise the list of products available, retrieving information about the product such as: 
- price, 
- title, 
- description etc.

Generally we advise immediately retrieving this list as soon as the service is setup, 
however you can make this call wherever you see fit, as long as it's done before any 
purchase operations are attempted.

If there are any invalid product codes in the specified array the `InAppBillingEvent.INVALID_PRODUCT` event 
will be dispatched. This error occurs when there was an invalid product ID requested. 
If this error occurs you should check that you have correctly specified a product ID and 
that it matches an ID that was setup in the store. 
In this case the `errorCode` variable of event will contain the invalid product ID. 
You should not display invalid products to your user. 

When this operation completes successfully the `InAppBillingEvent.PRODUCTS_LOADED` event be dispatched. 
The data in the event contains an array of the successfully loaded products.

When this operation fails the `InAppBillingEvent.PRODUCTS_FAILED` event be dispatched. 
When this happens you are advised to wait a small interval and retry the call. 
You may also wish to check if the user has a valid network connection using the 
[NetworkInfo ANE](http://airnativeextensions.com/extension/com.distriqt.NetworkInfo) 
or other such method and inform the user of the problem.


To retrieve the list of products you call `getProducts` with an array of 
product ids eg `com.distriqt.testProduct`.

```actionscript
InAppBilling.service.getProducts( [ `com.distriqt.testProduct` ] );
```

More than likely you will have more than one product in your application 
so you must pass all of your product ids to this function.


## Subscriptions

Subscriptions are treated slightly differently internally so we need to specify the list 
of subscription product ids separately from the single purchase products.

If you have subscriptions in your application you need to pass a second array of 
ids to the `getProducts` for example:

```actionscript
InAppBilling.service.getProducts( 
	[ `com.distriqt.testProduct` ],
	[ `com.distriqt.testSubscription` ] 
);
```

>
> If you provide a subscription product id in the product array you may receive an
> invalid product event for that subscription and vice-versa.
>


A subscription product may contain information about the subscription period. This is only supported through stores that return this information.
Some stores assume you "know" this information (eg Apple In-App Purchasing) and don't return the information. 

If it is available `product.subscriptionPeriod` will be a valid instance of the `SubscriptionPeriod` class. If it is unavailable the `subscriptionPeriod` will be `null`.

This class contains two properties:

- `numberOfUnits`: The number of units per subscription period
- `unit`: The increment of time that a subscription period is specified in (available values are defined in the class eg : `SubscriptionPeriod.UNIT_DAY`)

For example, if the `numberOfUnits` was `2` and the `unit` was  `SubscriptionPeriod.UNIT_WEEK` then the subscription payment recurs every 2 weeks (fortnightly). Or if the `numberOfUnits` was `3` and the `unit` was  `SubscriptionPeriod.UNIT_MONTH`, then the payment recurs every 3 months (or quarterly).



## Discounts

A `Product` may contain information about available discounts for the subscription.

See the section on "Introductory Prices" and "Discounts" for more information.




## Example code

The following demonstrates calling `setup` and then `getProducts` on setup success:

```actionscript
var products : Array;
var productIds : Array = [ "com.distriqt.testProduct1", "com.distriqt.testProduct2" ];
var subscriptionIds : Array = [ "com.distriqt.testSubscription1", "com.distriqt.testSubscription2" ];

InAppBilling.service.addEventListener( InAppBillingEvent.SETUP_SUCCESS,   		setup_successHandler );
InAppBilling.service.addEventListener( InAppBillingEvent.SETUP_FAILURE,   		setup_failureHandler );

InAppBilling.service.addEventListener( InAppBillingEvent.PRODUCTS_LOADED, 		products_loadedHandler );
InAppBilling.service.addEventListener( InAppBillingEvent.PRODUCTS_FAILED, 		products_failedHandler );
InAppBilling.service.addEventListener( InAppBillingEvent.INVALID_PRODUCT,		product_invalidHandler );

InAppBilling.service.setup(
        new BillingService()
                .setGooglePlayPublicKey( GOOGLE_PLAY_INAPP_BILLING_KEY )
);




function setup_successHandler( event:InAppBillingEvent ):void
{
	// Retrieve the product list
	InAppBilling.service.getProducts( productIds, subscriptionIds );
}

function products_loadedHandler( event:InAppBillingEvent ):void
{
	// event.data will be an Array of Product instances for each product and subscription successfully loaded
	for each (var product:Product in event.data)
	{
		trace( product.toString() );
	}
	products = event.data;
}
```
