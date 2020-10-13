---
title: Migrating to v4
sidebar_label: Migrating to v4
---

Version 4 brings a major update of the Firebase extensions and with it a series of changes.

The main changes you will need to do are for the Android implementation. 

## AndroidX

Firstly migrate all AndroidSupport extensions to AndroidX.  AndroidX is a major improvement to the original Android Support Library, which is no longer maintained. androidx packages fully replace the Support Library by providing feature parity and new libraries.

As there will be no further updates to the Android Support libraries we are migrating all our extensions to AndroidX. Importantly Android Support libraries are not compatible with AndroidX so applications have to migrate all functionality from the support libraries to AndroidX together.

**This means you cannot use older extensions that rely on the Android Support libraries with the latest builds of our extensions and you must upgrade all of our extensions simultaneously.** 

Generally migrating is fairly simple. 

Simply use the table below to swap the extensions you currently have in your application.


| Android Support | Android X |
| --- | --- |
| `com.distriqt.androidsupport.V4` | `androidx.core` |
| `com.distriqt.androidsupport.AppCompatV7` | `androidx.appcompat` |
| `com.distriqt.androidsupport.CardViewV7` | `androidx.cardview` |
| `com.distriqt.androidsupport.CustomTabs` | `androidx.browser` |
| `com.distriqt.androidsupport.Design` | `com.google.android.material` |
| `com.distriqt.androidsupport.InstallReferrer` | `com.android.installreferrer` |
| `com.distriqt.androidsupport.RecyclerView` | `androidx.recyclerview` |


We have included all these extensions in the existing Android Support repository and will continue to use this repository to hold any common Google provided Android libraries that aren't dependent on the Google Play Services. 

>
> You should remove any android support ANEs you are using and replace them with the androidx equivalents.
> Check the documentation on the extensions you are using to confirm which of the new extensions you will need.
>


## Firebase update

Now that we have access to AndroidX we have been able to update the Android Firebase libraries to the latest releases. The migration to AndroidX has been holding back this development.

This means that there has been many changes to the manifest and extension dependency of the ANEs.

- Firstly you will need to add the `com.google.firebase.core` extension. This extension contains all the common core Firebase functionality that is needed across any extensino that utilises Firebase, including Firebase Messaging (in the Push Notifications extension) and all the Firebase collection extensions.

- Then check the "Add the Extension" page for each of the Firebase components you use. There have been a lot of manifest changes, in particular around the `ComponentDiscoveryService`.



>
> As always, if you have any problems during the migration, please contact support through the github issue tracker and we will help you through the migration. 
>

