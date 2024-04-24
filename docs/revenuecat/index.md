---
title: RevenueCat
hide_title: true
slug: /revenuecat/
---

![](images/hero.png)

# RevenueCat

The [RevenueCat](https://airnativeextensions.com/extension/com.distriqt.RevenueCat) extension gives you access to the RevenueCat service in your AIR application.

> RevenueCat is a powerful and reliable in-app purchase server that makes it easy to build, analyze, and grow your subscriber base whether you're just starting out or already have millions of customers.


We provide complete guides to get you up and running with sharing quickly and easily.


### Features

- Get offerings and product information;
- Purchase consumable and non-consumable products;
- Restore purchases on a new or other device;
- Get current purchases on supported services;
- Subscriptions;
- Single API interface - your code works across supported platforms with no modifications;
- Sample project code and ASDocs reference;

As with all our extensions you get access to a year of support and updates as we are 
continually improving and updating the extensions for OS updates and feature requests.



## Documentation

The [documentation site](https://docs.airnativeextensions.com/docs/revenuecat) forms the best source of detailed documentation for the extension along with the [asdocs](https://docs.airnativeextensions.com/asdocs/revenuecat). 

Quick example to configure the SDK and get customer information: 

```actionscript title="AIR"
var configuration:RevenueCatConfiguration = new RevenueCatConfiguration()
        .setSdkKey( "YOUR_APPLICATION_SDK_KEY" );

RevenueCat.instance.configure( configuration );

RevenueCat.instance.getCustomerInfo(
        function ( customerInfo:CustomerInfo ):void
        {
            // successfully retrieved customer information and entitlements
        },
        function ( error:PurchasesError ):void
        {
            // an error occurred
        }
);
```


![](images/promo.png)



