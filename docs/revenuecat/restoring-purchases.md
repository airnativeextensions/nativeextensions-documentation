---
title: Restoring Purchases
---

Restoring purchases is a mechanism by which your user can restore their in-app purchases, reactivating any content that had previously been purchased from the same store account.

It is recommended that all apps have some way for users to trigger the restorePurchases method, even if you require all customers to create accounts.

```actionscript
RevenueCat.instance.restorePurchases(
        function ( customerInfo:CustomerInfo ):void
        {
            // restorePurchases:onSuccess
        },
        function ( error:PurchasesError ):void
        {
            // restorePurchases:onError
        }
);
```


The restorePurchases method should not be triggered programmatically, since it may cause OS level sign-in prompts to appear, and should only be called from some user interaction (e.g. tapping a "Restore" button.)

