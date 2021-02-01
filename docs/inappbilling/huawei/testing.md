---
title: Testing Huawei AppGallery 
sidebar_label: Testing
---


## Huawei AppGallery In-App Purchases

https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/iap-sandbox-testing-v4



## Set Installer Package

In order to correctly detect that the app was installed via the Huawei AppGallery you must set the installer package when installing your debug application. This is done normally by the App Gallery. 

When installing your application you will need to use the following commands using the `adb` terminal command:

```
adb push YOURAPP.apk /data/local/tmp/app.apk
adb shell pm install -i "com.huawei.appmarket" -r /data/local/tmp/app.apk
adb shell rm /data/local/tmp/app.apk
```

Change `YOURAPP.apk` to be the path to your application. This command will set the installer package name to be the Huawei AppGallery's package name `com.huawei.appmarket`.

If you don't set this and rely on the default detection then you will find debugging may default to the Google Play Billing implementation.
