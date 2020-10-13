---
title: User Consent
sidebar_label: User Consent
---


>
> Currently only available for the OneSignal service implementation. Other services you will have to implement manually.
>

In order to comply with GDPR or other regulations, you should make sure you appropriately disclose and get consent to send data to the notification service. For EU GDPR compliance in particular, recommend displaying a dialog to users and having them provide unambiguous consent for data to be shared with the notification service.

If you require your users to consent to gathering information for usage then you can set the `requiresUserPrivacyConsent` option on your `Service`. This will delay initialisation and prevent any data from being sent to the service until the user has provided consent.


```actionscript
var service:Service = new Service( Service.ONESIGNAL, Config.oneSignalAppId );
service.requiresUserPrivacyConsent = true; 
```

Once you have gathered consent from the user you can inform the service by calling `provideUserConsent`:


```actionscript
PushNotifications.service.provideUserConsent( true );
```



