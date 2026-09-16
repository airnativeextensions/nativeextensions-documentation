---
title: Unique Device ID
sidebar_label: Unique Device ID
---


Retrieving a Unique Device ID is as simple as calling the `uniqueId()` function. The process is asynchronous due to certain identifiers potentially taking time to generate or retrieve (particularly if you specify the `SERVICE` identifier).


```actionscript
SystemInfo.instance.uniqueId( 
    UniqueIDType.VENDOR,    // Identifier type
    true,                   // Persistence
    function (id:String):void
    {
        trace( "Unique ID (VENDOR): " + id );
    }
);
```


## Identifier Types

There are two types of identifier available under certain circumstances. Most cases the default, or `VENDOR` identifier is the only identifier available. The details on the identifier returned is platform dependent as described below.

### Android

On Android there are two identifiers available.

- `VENDOR`: the value of the `ANDROID_ID`

On Android 8.0 (API level 26) and higher versions of the platform, a 64-bit number (expressed as a hexadecimal string), unique to each combination of app-signing key, user, and device. Values of `ANDROID_ID` are scoped by signing key and user. The value may change if a factory reset is performed on the device or if an APK signing key changes.

:::info 
Note: For apps that were installed prior to updating the device to a version of Android 8.0 (API level 26) or higher, the value of ANDROID_ID changes if the app is uninstalled and then reinstalled after the OTA. To preserve values across uninstalls after an OTA to Android 8.0 or higher, developers can use Key/Value Backup.
:::

In versions of the platform lower than Android 8.0 (API level 26), a 64-bit number (expressed as a hexadecimal string) that is randomly generated when the user first sets up the device and should remain constant for the lifetime of the user's device. On devices that have multiple users, each user appears as a completely separate device, so the `ANDROID_ID` value is unique to each user. It will be the same for all application independent of the developer.

The value may change if a factory reset is performed on the device. 




- `SERVICE`: uses the Google Play Services AppSet library



### iOS

On iOS this is the value of the `UIDevice` `identifierForVendor` property.

On iOS the value of this property is the same for apps that come from the same vendor running on the same device. A different value is returned for apps on the same device that come from different vendors, and for apps on different devices regardless of vendor.

The value in this property remains the same while the app (or another app from the same vendor) is installed on the iOS device. The value changes when the user deletes all of that vendor’s apps from the device and subsequently reinstalls one or more of them. 


### macOS

On macOS this returns the value of the `IOPlatformUUID` from the registry.

The IOPlatformUUID is a unique identifier assigned to a specific Mac's logic board and does not change under normal circumstances. It is a persistent hardware identifier intended to uniquely identify the physical machine itself. 



### Windows

On Windows this returns the `MachineGuid` from the registry.  It will fallback to the drive volume serial if the machine guid cannot be retrieved. 




## Persistance

If you want to persist the identifier set the second parameter to `true`. This will ask the extension to attempt to store the next generated identifier in some form of persistent storage where it can be retrieved on subsequent accesses. Again the details of this persistence is platform dependent. 


### Android 

Currently not implemented. 


### iOS

On iOS the value of the identifier is stored in the user's keychain which will persist if the application is uninstalled. 


### macOS

On macOS the value of the identifier is stored in the user's keychain which will persist if the application is uninstalled.


### Windows 

On windows the identifier is stored in a registry entry for your application for the current user and should persist if the application is uninstalled.

