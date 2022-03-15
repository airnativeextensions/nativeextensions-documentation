---
title: OneSignal - Migrating to v7.5
sidebar_label: Migrating to v7.5
---

## Migrating

v7.5 brings a few changes to OneSignal:

- Addition of GDPR user consent
- Android migration to Firebase Cloud Messaging (FCM)



## User Consent

See the documentation on [user consent](../user-consent.md)



## Firebase Cloud Messaging

v3.9.1 of the OneSignal SDK utilises FCM on Android. 

This means you will need to add the Firebase dependencies to your application and remove the Play Services GCM ANE.


- Add the Firebase core ANE: [com.google.firebase.core.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.google.firebase.core.ane)
- Add the Firebase core [manifest additions](add-the-extension.mdx#application-descriptor) 
- Ensure you are using a Firebase server key in your OneSignal configuration: https://documentation.onesignal.com/docs/firebase-cloud-messaging-fcm


>
> iOS still uses APNS directly so no changes are required if you only use iOS
>


