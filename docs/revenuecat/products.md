---
title: Displaying Products
---


## Fetching Offerings

Offerings are fetched through the SDK based on their configuration in the RevenueCat dashboard.

The `getOfferings()` method will fetch the Offerings from RevenueCat. 
These are pre-fetched in most cases on app launch, so the completion block to get offerings won't need to make a network request in most cases.

```actionscript
RevenueCat.instance.getOfferings(
        function ( offerings:Offerings ):void
        {
            // success
            for each (var availablePackage:Package in offerings.getCurrent().availablePackages)
            {
                // display availablePackage
            }
        },
        function ( error:PurchasesError ):void
        {
            // error
        }
);
```

