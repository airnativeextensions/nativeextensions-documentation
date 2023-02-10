---
slug: 2023-01
title: January 2023
description: Extension Updates
image: images/playbilling.png
authors: [ marchbold ]
tags: [newsletter, airsdk, application-rater, adverts, google-play-billing]
---

> AIR SDK Manager, Adverts, Application Rater 

As the end of the year approaches we have been cleaning up a lot of the work we have done this year and starting to set out development goals for the first half of next year. As we enter into the final weeks of the year if there is anything in our extensions that you believe should have priority please let us know and we will be sure to schedule it for the beginning of the year.

Importantly this month Harman have released a beta of the new **AIR SDK Manager**. 

<!--truncate-->

---

![](images/adobeair.png)

### [AIR SDK Manager](https://github.com/airsdk/Adobe-Runtime-Support/discussions/2291)

This is an application you can use to manage your AIR SDK installations and update them as new releases are available. Additionally you can configure your SDKs without having to manually edit the `adt.cfg` file and import a license file. This looks to be a great tool and we are excited to see how you find it.

:::info From Andrew at Harman
We would value any feedback/comments/ideas of how to improve this. The idea is that you can update SDK versions where there are bug fixes but then each feature-based update can be managed separately. It also allows you to sort out the configuration settings, hopefully meaning you no longer need to bother with adt.cfg files.
:::

We'd be particularly interested in hearing how you would integrate tools like this into your development process and how tools like `apm` could work alongside the AIR SDK Manager and your IDEs.

For more information and giving feedback, see the  [github discussion](https://github.com/airsdk/Adobe-Runtime-Support/discussions/2291).


---

![](images/admob.png)

### [Adverts](https://airnativeextensions.com/extension/com.distriqt.Adverts)

We have released a few small fixes for the Adverts extension. Firstly resolving a long standing issue with server side verification options on rewarded video ads. Secondly some documentation updates reflecting Google's change from "funding choices" to "privacy and messaging" for the UMP consent dialog setup. And lastly an update to support the new App Set library, removing the usage of  the advertising identifier which can cause privacy concerns particularly in family and children targetted applications.

If you wish to continue using UMP and the advertising identifiers we suggest you also install the IDFA extension. This will give you access to the tools to request access to the advertising identifier and install the required dependencies for it's usage.


---

![](images/application-rater.png)

### [Application Rater](https://airnativeextensions.com/extension/com.distriqt.ApplicationRater)

The Application Rater extension has been updated to support the Samsung Galaxy store. 

This means that it will now detect if your application was installed through the Galaxy store and correctly redirect to the rating page in the Galaxy store from the rating dialog.

You can find more information about handling ratings from the different stores in the documentation on [Handling Stores](/docs/applicationrater/handling-stores)


---

![](images/playbilling.png)

### [InAppBilling](https://airnativeextensions.com/extension/com.distriqt.InAppBilling)

With the latest update to v5 of the play billing library, several developers have noted that certain devices don't return a product list from the `getProducts()` call and instead get an error dispatched.

The latest Play Billing library requires an updated version of the Play Store application to be installed on the device so you may want to check for the availability of this before attempting to retrieve the product list. 

We have added some helpers to check for the availability of the billing service on the current device and included a response that indicates if the store application needs updating:

```actionscript
InAppBilling.service.checkAvailability(
        function ( availability:String ):void
        {
            if (availability == InAppBillingAvailability.STORE_UPGRADE_REQUIRED) 
            {
                // An update for the play store application is required
            }
        }
);
```

For more information on the availabilty see the [documentation](/docs/inappbilling/billing-service#availability).

---

![](images/permissions.png)

### [Permissions](https://airnativeextensions.com/extension/com.distriqt.Permissions)

The permissions extension has had some updates to improve the `openDirectory()` functionality including returning an event on result (`PermissionsEvent.OPEN_DOCUMENT`) which contains the path the user selected.

You can read more about this change [here](/docs/permissions/file-folder-access).

---

![](images/nativewebview.png)

### [NativeWebView](https://airnativeextensions.com/extension/com.distriqt.NativeWebView)

Lastly this month we released a small update for the Native WebView extension to fix some focus issues on Android with the web view and the latest AIR SDK releases.

If you are using this extension it is worth updating just to ensure the focus works correctly particularly if you are managing key inputs and overriding the back key operation on Android. 

---

As always, if you have any native development needs for AIR, Unity, Flutter or Haxe, please feel free to contact us at [airnativeextensions@distriqt.com](mailto:airnativeextensions@distriqt.com).
