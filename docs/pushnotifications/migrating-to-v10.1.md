---
title: Migrating to v10.1
sidebar_label: Migrating to v10.1
---


v10.1 brings the latest Firebase SDK which requires some changes to your application. Other services remain unchanged at this point.


## Firebase Cloud Messaging

Firebase cloud messaging has been updated to v21.0.1 (android) and v7.4.0 (iOS). Firebase in-app messaging to version v19.1.3 (Android) and v7.4.0 (iOS).

This requires the following updates for Android:

- Addition of `com.distriqt.playservices.CloudMessaging` dependency;
- Changes to the manifest additions for the `ComponentDiscoveryService`, mainly the inclusion of the `DynamicLoadingRegistrar`. We recommend carefully going through the manifest additions again to ensure your additions are correct:
  - [Manifest Additions](firebase/firebase-cloud-messaging#manifest-additions)


No changes are necessary for iOS. 
