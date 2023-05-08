---
title: Migrating to version 14.0
sidebar_label: Migrating to version 14.0
---

Version 14.0 brings support for running the Adverts extension when using the `runtimeInBackgroundThread` configuration for AIR.

Most of the changes have been handled internally however there is one major change to the API that means creation of an `AdView` instance for banner adverts is now asynchronous.

Previously you would have written:

```actionscript
var adView:AdView = Adverts.service.createAdView();

// Set properties and load ads as required
```

The signature of the `createAdView()` function has been changed and now takes a callback function:

```actionscript
Adverts.service.createAdView(
        function( adView:AdView ):void
        {
                // Set properties and load ads as required
        });
```


