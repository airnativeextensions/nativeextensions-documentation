---
title: Catappult
sidebar_label: Setup
---


The following outlines the steps required to enable Catappult in app purchases in your application.



### Register

Registering on Catappult is a very simple and quick process.

- Sign up and enter your applications details, following the [instructions](https://docs.catappult.io/docs/sign-up-and-login)
- Setup your products and subscriptions as required


:::note
This extension implements Catappult's Native Android Billing and not the One-Step Payment (OSP).
:::


## Setting up a Billing Service

> The following is in addition to the documentation in [Setting up a Billing Service](../billing-service.md).

When setting up your service you will need to specify the `InAppBillingServiceTypes.CATAPPULT_NATIVE_BILLING` service type and provide your Catappult Public key. The public key is used to verify purchases to provide a level of fraud protection:

```actionscript
var service:BillingService = new BillingService( InAppBillingServiceTypes.CATAPPULT_NATIVE_BILLING )
    .setCatappultPublicKey( CATAPPULT_PUBLIC_KEY );

var success:Boolean = InAppBilling.service.setup( service );
```

You should wait for the `InAppBillingEvent.SETUP_SUCCESS` event to ensure Catappult is correctly initialised and available on the device.


