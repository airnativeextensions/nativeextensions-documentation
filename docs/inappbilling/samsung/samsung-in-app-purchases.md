---
title: Setup Samsung Galaxy Store
sidebar_label: Setup
---


Samsung devices use a variant of Android. Some may include both Google Play and the Samsung Galaxy Store. 

The following outlines the steps required to enable Galaxy Store in app purchases in your application.



## Developer console

Samsung have created a [guide here](https://developer.samsung.com/iap/programming-guide/integrate-iap-helper-into-your-app.html) to setup an application for IAP. Below we will summarise the key points.

Setup an new application with an **identifier different from the app registered in other app stores**.

:::caution
If package names are not different, app update malfunctions and problems with marketing and promotional support may occur.
:::

Generate an application package to upload to the store as a "dummy" application to go through the process of setting up your application's in-app items and start testing locally. (Ensure you have added the extension to this dummy application so that you have the correct manifest settings).

:::info
You do not need to publish either to beta or live before testing. However make sure you have correctly set your testing users as per [testing](testing.md).
:::


### Register an app and in-app items

1. Sign in to [Seller Portal](https://seller.samsungapps.com/) using your Samsung account.
2. Click **Add New App**

![](images/seller_portal_01_v2.png)

3. Click **Android**, select the default language, and click Next.

![](images/seller_portal_02_v2.png)

:::note
After entering information in each tab, click Save.
:::

4. In the **Binary** tab, upload your app APK.

![](images/seller_portal_03_v2.png)


5. In the **App Information** tab, enter fundamental app details.

6. In the **Country / Region & Price** tab, specify a free or paid app, a paid app price, and countries to sell your items.

7. In the **In App Purchase** tab, register one or more in-app items:

![](images/seller_portal_04_v2.png)


a. Click **Add Item**

![](images/seller_portal_05_v2.png)

b. Enter in-app item information.

c. Click **Save**.

:::note
For a subscription item, ensure your item registration information is correct. After saving a subscription item, you can only change its item title.
:::

d. Verify the item is listed

![](images/seller_portal_guide_v2.png)



## Setting up a Billing Service

> The following is in addition to the documentation in [Setting up a Billing Service](../billing-service).

When setting up your service you will need to specify the `InAppBillingServiceTypes.SAMSUNG_INAPP_PURCHASE` service type. You will also want to set the "operation mode". This is a setting that allows testing of samsung In-App Purchases and should be disabled in production builds (or set to `BillingService.OPERATION_MODE_PRODUCTION`).

```actionscript
var service:BillingService = new BillingService( InAppBillingServiceTypes.SAMSUNG_INAPP_PURCHASE )
                                    .setOperationMode( BillingService.OPERATION_MODE_TEST );

var success:Boolean = InAppBilling.service.setup( service );
```

You should wait for the `InAppBillingEvent.SETUP_SUCCESS` event to ensure the Samsung In-App Purchases are correctly initialised and available on the device.

