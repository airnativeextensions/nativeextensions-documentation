---
title: Crash - Add the extensions
sidebar_label: Add the extensions
---


>
> **DEPRECATED**
>
> Please note that the Crash functionality has been removed from the latest Firebase SDK in favour of the Crashlytics functionality. 
> You should update your applications to use the new Crashlytics implementation.
>
> This documentation is only for legacy reference.
>



## Required Extensions

You should have been through the setup of the Firebase Core before attempting to proceed with Crash Reporting.

Make sure you have added all the extensions required for the Firebase Core 
extension as outlined [here](../core/add-the-extensions).


### Firebase Crash Reporting

The only required additional ANE is the Crash ANE located in this repository:

- `com.distriqt.firebase.Crash` : https://github.com/distriqt/ANE-Firebase

This ANE contains all the required libraries for the main Firebase Crash Reporting functionality.



## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Firebase</extensionID>
    <extensionID>com.distriqt.firebase.Crash</extensionID>
	
    <extensionID>com.distriqt.Core</extensionID>
    
    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.AdsIdentifier</extensionID>

    <extensionID>com.google.protobuflite</extensionID>
    <extensionID>com.google.firebase.core</extensionID>

    <extensionID>androidx.core</extensionID>
    
	<extensionID>com.distriqt.CustomResources</extensionID>
</extensions>
```



---

## Android 

### Manifest Additions

No additional manifest additions are required



