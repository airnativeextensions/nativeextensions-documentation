---
title: Migrating to version 13.6
sidebar_label: Migrating to version 13.6
---

Version 13.6 brings version 9+ of the AdMob iOS SDK which includes some significant changes to the SDK. Most of the changes have been handled internal to the extension however there is one important piece of information that you must be aware of:


### Ads stop serving on iOS 10

The minimum iOS version the Google Mobile Ads SDK version 9.0.0 supports is iOS 11.

Upgrading to Google Mobile Ads SDK version 9.0.0 will not break your app on iOS 10 devices, however, no ads will be served on those devices.



## Life Time Value (LTV) 

This update also includes the preview implementation of the life time value events.


Most of the adverts will now dispatch a `PaidEvent.PAID` event with information on the revenue obtained for presenting an advert. By implementing this event handler, you can use the data to calculate a user's life time value, or forward the data downstream to other relevant systems.


More information in the [Life Time Value](life-time-value) section.





