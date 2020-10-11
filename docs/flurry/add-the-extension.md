---
title: Add the Extension
sidebar_label: Add the Extension
---

First step is always to add the extension to your development environment. 
To do this use the tutorial located [here](/docs/tutorials/getting-started).



## Dependencies

Many of our extensions use some common libraries, for example, the Android Support libraries.

We have to separate these libraries into separate extensions in order to avoid multiple versions of the libraries being included in your application and causing packaging conflicts. This means that you need to include some additional extensions in your application along with the main extension file.

You will add these extensions as you do with any other extension, and you need to ensure it is packaged with your application.


### Core 

The Core ANE is required by this ANE. You must include and package this extension in your application.

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).




### Google Play Services 

This extension requires usage of certain aspects of the Google Play Services client library. 
The client library is available as a series of extensions that you add into your applications packaging options. 
Each separate extension provides a component(s) from the Play Services client library and are used by different extensions. 
These client libraries aren't packaged with this extension as they are used by multiple ANEs and separating them 
will avoid conflicts, allowing you to use multiple extensions in the one application.

This extension requires the following Google Play Services:

- [com.distriqt.playservices.Base.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Base.ane)
- [com.distriqt.playservices.Analytics.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Analytics.ane)

You must include the above native extensions in your application along with this extension, 
and you need to ensure they are packaged with your application.

You can access the Google Play Services client library extensions here: [https://github.com/distriqt/ANE-GooglePlayServices](https://github.com/distriqt/ANE-GooglePlayServices).


>
> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices. 
> There are no issues packaging these extensions with all platforms as there are default implementations available which will allow your code to package without errors however if you are only building an iOS application feel free to remove the Google Play Services and Android Support ANEs from your application.
>



## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Flurry</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.Analytics</extensionID>
</extensions>
```



## Android 

### Manifest Additions


The Flurry API requires a few additions to the manifest. 
You should add the listing below to your manifest:

```xml
<manifest android:installLocation="auto">
	<!-- Required permissions - Internet access -->
	<uses-permission android:name="android.permission.INTERNET" /> 
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/> 
				
    <!-- Optional permission - Location based ad targeting -->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <!-- OR -->
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

</manifest>
```


