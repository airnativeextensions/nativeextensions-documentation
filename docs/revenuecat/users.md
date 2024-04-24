---
title: Identifying Users
---

For information on what RevenueCat treats as a customer or user it is important you read through the [official documentation](https://www.revenuecat.com/docs/customers/user-ids#what-is-a-customer-in-revenuecat)

Generally a user will be given an anonymous user id unless you provide a specific user id from your application. Overall the concept of a user is central to the platforms ability to track and manage in-app purchases and subscriptions.


## Logging In with a Custom App User ID

### Provide App User ID on configuration

If you have your own App User IDs at app launch, you can pass those when configuring the SDK:

```actionscript
var configuration:RevenueCatConfiguration = new RevenueCatConfiguration()
        .setSdkKey( "PUBLIC_SDK_KEY" )
        .setAppUserID( "app_user_id" );
```


### Provide App User ID after configuration

If your app doesn't receive its own App User ID until later in its lifecycle, you can set (or change) the App User ID at any time by calling `logIn()`. If the logged in identity does not already exist in RevenueCat, it will be created automatically.


```actionscript
RevenueCat.instance.logIn(
        "my-user-id",
        function ( customerInfo:CustomerInfo, created:Boolean ):void
        {
            trace( "logIn:onSuccess()" );
        },
        function ( error:PurchasesError ):void
        {
            trace( "logIn:onError(): " + error.message );
        }
);
```

When logging in from an Anonymous ID to a provided custom App User ID, RevenueCat will decide whether the identities should be merged (aliased) into the same CustomerInfo object or not.

For more details on this merging process see the documentation [here](https://www.revenuecat.com/docs/customers/user-ids#provide-app-user-id-after-configuration).


## Logging Out

When an identified user logs out of your application you should call the `logOut()` method within the SDK. This will generate a new anonymous App User ID for the logged out state.

```actionscript
RevenueCat.instance.logOut();
```
