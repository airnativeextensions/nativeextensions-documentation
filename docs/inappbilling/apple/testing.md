---
title: Testing Apple In-App Purchases
sidebar_label: Testing
---

## iOS Subscriptions

StoreKit 2 subscription testing uses the same Xcode, sandbox, and TestFlight environments as other StoreKit purchases. The extension listens for StoreKit 2 transaction updates and reports them through `PurchaseEvent.PURCHASES_UPDATED`; register this listener during setup and update entitlements from verified purchase data.

Authentication prompts and purchase-sheet behavior vary by environment and OS version. Test the purchase flow on the OS versions and devices you support; sandbox behavior isn't a reliable preview of the production purchase sheet.

Use separate test accounts and controlled test data to exercise subscribed and unsubscribed states. Don't add a production entitlement bypass for beta testing.

### Sandbox and TestFlight

Sandbox subscription renewals are accelerated, and the renewal rate can be configured for each Sandbox Apple Account. Sandbox subscriptions renew up to 12 times after the initial purchase. The exact elapsed time depends on the selected renewal rate; see Apple's [sandbox account settings](https://developer.apple.com/help/app-store-connect/test-in-app-purchases/manage-sandbox-apple-account-settings/) and [sandbox subscription testing guide](https://developer.apple.com/documentation/storekit/testing-an-auto-renewable-subscription).

The accelerated sandbox timings are configurable and differ from production. TestFlight also uses the sandbox, but its timing and sign-in workflow differ; don't use sandbox elapsed times as a release criterion for production.

You can test turning off auto-renew in sandbox account settings. On iOS, open **Settings > Developer**, tap your **Sandbox Apple Account**, then tap **Manage**. Select the subscription and cancel it. See Apple's [guide to testing disabled auto-renew](https://developer.apple.com/documentation/storekit/testing-disabling-auto-renew). Subscription-management options and UI depend on the test environment.


### Suggested Tests

Use the renewal rate configured for the test account when planning waits. Test with more than one Sandbox Apple Account when you need independent purchase histories; sandbox settings and transaction history are account-specific.



#### Renewals and Expiration

Test that StoreKit 2 subscription transactions update entitlements as the subscription renews and expires.

- Subscribe to a monthly subscription
- Keep the app open or relaunch it after the configured sandbox renewal interval.
- Observe `PurchaseEvent.PURCHASES_UPDATED` and update access using the verified transaction state.
- Finish each transaction after processing it, then verify that completed transactions aren't delivered again as unfinished on the next launch.

The app should continue to grant access while the subscription is active.

- Continue through the configured renewal attempts until the subscription expires.

The app should stop granting access when the verified subscription is expired. Don't use a fixed elapsed time; renewal rate and renewal limits are configurable for the sandbox account.


#### Restoring after Expiration

Test that restoring after expiration does not grant access to an expired subscription.

- Subscribe to a monthly subscription
- Let the subscription expire using the renewal rate configured for the sandbox account.
- Launch the application (enter password if prompted)
- Go through your restore purchases process

The expired subscription should not grant access. StoreKit 2 restore calls `AppStore.sync()` and refreshes current entitlements; it doesn't reactivate an expired subscription.



#### Restoring during Subscription

This process is to check the restoring of a subscription during an active subscription period.

- Subscribe to a monthly subscription
- Close and uninstall the application
- Reinstall the application while the subscription is still active.
- Go through your restore purchases process

The app should regain access to the active subscription after restore and entitlement refresh.



#### Restoring during Subscription on multiple devices

This process is to check the updating of the subscription state across a user's devices.

- Subscribe to a monthly subscription
- Install the application on another device before the expiration
- Go through your restore purchases process using the same test user as on the first device

The second device should receive or restore the active subscription for the same Sandbox Apple Account and grant the corresponding entitlement.

## Further Information

- [Testing Apple In-App Purchases in Xcode](https://developer.apple.com/documentation/storekit/testing-in-app-purchases-in-xcode)
- [Testing Apple In-App Purchases with sandbox](https://developer.apple.com/documentation/storekit/testing-in-app-purchases-with-sandbox)
- [StoreKit 2 transaction updates](https://developer.apple.com/documentation/storekit/transaction/updates)
- [Restoring purchased products](https://developer.apple.com/documentation/storekit/restoring-purchased-products)





