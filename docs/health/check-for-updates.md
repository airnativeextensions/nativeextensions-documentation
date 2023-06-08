---
title: Availablility & Updates
sidebar_label: Availablility & Updates
---

:::note iOS
This is required on Android and can be skipped if you are developing for iOS only.
:::

On Android you will need to ensure the Health Connect application is installed and available for the user.

You can do this by checking the `isUpdateRequired()` function:


```actionscript
var updateRequired:Boolean = Health.instance.isUpdateRequired();
```

If this returns `true` then you must redirect the user to update (or install) the health connect functionality on their device.

You can do this by calling `update()` 


```actionscript
Health.instance.update();
```


This will redirect the user to the appropriate location in the store or settings to install or update the health connect functionality.



:::note
You must do this before any other functionality in the extension will operate correctly.
:::

