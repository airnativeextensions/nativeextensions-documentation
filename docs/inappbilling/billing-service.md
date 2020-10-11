---
title: Billing Service
sidebar_label: Billing Service
---

## Setting up a Billing Service

Before starting here you should make sure you have already setup the service for your application 
as outlined in earlier sections. 
This is where you would have added products to your application in the appropriate developer console.

The next step to using the functionality in this extension is to setup a billing (or purchasing) service. 
This simply requires you to set the service you plan on using and calling `setup` with the service key (if required).

The following uses the default for the current platform and specifies the Google Play Billing Public License key:

```actionscript
var service:BillingService = new BillingService()
    .setGooglePlayPublicKey( GOOGLE_PLAY_INAPP_BILLING_KEY );

var success:Boolean = InAppBilling.service.setup( service );
```

This call performs a few things internally 

- Initialises the billing service
- Initialises the purchase queue 
- Adds appropriate purchase handlers
- Checks the state of any pending purchases

The return value of the `setup` function indicates if the configured service type is supported on 
the current device. This may return `false` if you have for example requests Apple In-App Purchases on
an Android device. 

Once this is complete the `InAppBillingEvent.SETUP_SUCCESS` event will be dispatched and the service
is available for queries.

If an error occurred then the `InAppBillingEvent.SETUP_FAILURE` event will be dispatched. This is a fatal
event and will stop any other functionality from working successfully. Generally this only occurs due 
to a misconfiguration and is to help you get an application working correctly however you should make 
sure that you handle the event appropriately.


### Events

We suggest you listen to the following four events before calling setup:

- `InAppBillingEvent.SETUP_SUCCESS`: Dispatched when setup is successfully completed;
- `InAppBillingEvent.SETUP_FAILURE`: Dispatched when there was an error during setup;
- `PurchaseEvent.PURCHASES_UPDATED`: Dispatched if there are pending purchases needing to be processed;
- `PurchaseRequestEvent.SHOULD_ADD_PURCHASE`: Dispatched if the app was launched from an AppStore promotional purchase (see [Promotions](promotions)).


```actionscript
InAppBilling.service.addEventListener( InAppBillingEvent.SETUP_SUCCESS, setup_successHandler );
InAppBilling.service.addEventListener( InAppBillingEvent.SETUP_FAILURE, setup_failureHandler );
InAppBilling.service.addEventListener( PurchaseEvent.PURCHASES_UPDATED, purchases_updatedHandler );
InAppBilling.service.addEventListener( PurchaseRequestEvent.SHOULD_ADD_PURCHASE, purchaseRequest_shouldAddPurchaseHandler );
						
InAppBilling.service.setup(
        new BillingService()
                .setGooglePlayPublicKey( GOOGLE_PLAY_INAPP_BILLING_KEY )
);
```



### Service Type

The billing service type will be automatically selected based on the default of the current device platform. However if you wish to specify you can set a particular type in the `BillingService` constructor to specify a particular platform:

```actionscript
var service:BillingService = new BillingService( )
    .setGooglePlayPublicKey( GOOGLE_PLAY_INAPP_BILLING_KEY );

var success:Boolean = InAppBilling.service.setup( service );


// Set the required service type and call setup
InAppBilling.service.setServiceType( InAppBillingServiceTypes.GOOGLE_PLAY_INAPP_BILLING );
```

**This must be called before `setup()`.** Calling it after `setup()` will have no affect.

>
> Note: 
>
> You do not need to call `setServiceType`. 
> If you do not call it then the default for the current platform will be used, 
> i.e. Apple InApp Purchases on iOS and Google's Play InApp Billing on Android.
>



### Pending Purchases

Note that the pending purchases may not be available to you at the  `InAppBillingEvent.SETUP_SUCCESS` event, as they may be updated after setup has completed. This is particularly true on iOS/tvOS where the payment queue update (which populates the pending purchases) will occur a short time after setup succeeds.

This update will be indicated by a `PurchaseEvent.PURCHASES_UPDATED`, indicating there are purchases to process.




