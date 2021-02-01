---
title: Testing Subscriptions
sidebar_label: Testing Subscriptions
---

## iOS Subscriptions

When testing subscriptions, you should be aware that they work differently in the sandbox, TestFlight and on the App Store. 

In order to test correctly you will need to be aware of these differences.

>
> Importantly be aware that while running your application in sandbox or TestFlight you will not be able to use Touch / Face ID and that you will experience a much large number of password requests. Basically for every AppStore interaction the password dialog will be presented. 
>
> You have to trust that this process is not how your live application will perform once deployed to production in the AppStore.
> 
> We often advise developers to make a simple way for beta testers to switch between subscribed and unsubscribed otherwise you may find your subscribed state will get a lot less testing due to the number of password requests required (sometimes up to three to purchase a subscription).
>


### Duration

Subscription durations are greatly reduced for testing purposes allowing you to quickly test multiple renewals and expirations via TestFlight and in the sandbox.

| Subscription Duration | Test Duration |
| --- | --- |
| 1 week | 3 minutes |
| 1 month | 5 minutes |
| 2 months | 10 minutes |
| 3 months | 15 minutes |
| 6 months | 30 minutes |
| 1 year | 1 hour |


A subscription will automatically renew 6 times per account per 8 hour window, at which point the subscription will expire.

There is no way to test cancellation directly as these renewals happen automatically.

There is also no way to test subscription management while in the sandbox or TestFlight.


### Suggested Tests

Note that with the notes above about the 8 hour window performing several of these tests within a short period may have unexpected results. You should be aware that every subscription may not renew 6 times within that window. Try to perform tests within the first subscription period (5 minutes for monthly).

We suggest you test the **Renewals and Expiration** first as this is the main test that uses the renewal attempts.

Also it is helpful to test with multiple sandbox accounts as these restrictions are per account.



#### Renewals and Expiration

This process is to test the the subscription, renewals and expiration process works correctly.

- Subscribe to a monthly subscription
- Close your app and wait 5 minutes
- Launch your app
- If a prompt is displayed enter the password

Your application should still be subscribed at this point.

- Repeat this process until 35 minutes have passed (6 renewal periods + original subscription period)

Your application should now be in an un-subscribed state.


#### Restoring after Expiration

This process is to test whether the restore purchases call correctly reports no active subscriptions after a subscription has expired.

- Subscribe to a monthly subscription
- Perform the **Renewals and Expiration** test to expire the subscription or simply close the app and wait 35 minutes
- Launch the application (enter password if prompted)
- Go through your restore purchases process

At this point it should report no active subscriptions were found and your application should be in the un-subscribed state. 



#### Restoring during Subscription

This process is to check the restoring of a subscription during an active subscription period.

- Subscribe to a monthly subscription
- Close and uninstall the application
- Reinstall the application within 5 minutes
- Go through your restore purchases process

At this point the application should have restored the active subscription and be in the subscribed state.



#### Restoring during Subscription on multiple devices

This process is to check the updating of the subscription state across a user's devices.

- Subscribe to a monthly subscription
- Install the application on another device before the expiration
- Go through your restore purchases process using the same test user as on the first device

The restore process should have picked up the active subscription purchased on the first device and the second device should be in the subscribed state. 





