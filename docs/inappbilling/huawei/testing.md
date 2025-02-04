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



## Troubleshooting

If you are having issues with the service not being available, or setup failing, please check the following:
- You have packaged the `agconnect-services.json` file at the root level (alongside your swf) of your application;
- The `HUAWEI_APP_ID` and `HUAWEI_CP_ID` in your manifest additions match the values in the `agconnect-services.json` file;
- The package name must be the same as the one filled in when registering a HUAWEI ID and applying for the HUAWEI ID Service. If it is not, change the app package name;
- The signing certificate fingerprint must be the same as the one filled in when applying for the HUAWEI ID service.


