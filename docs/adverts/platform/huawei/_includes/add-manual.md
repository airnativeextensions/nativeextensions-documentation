
:::info
The following guide is used to manually install the extension, download dependencies and update the application descriptor. We highly recommend installing extensions using `apm`. Using `apm` will automate the installation and automatically handle updates and dependencies along with greatly simplifying the application descriptor generation.
:::


First step is always to add the extension to your development environment. Download the extension from the repository and then follow the tutorial located [here](/docs/tutorials/getting-started) to add the extension to your development environment.




## Assets

Along with the `agconnect-services.json` there are a series of assets that need to be packaged with your application. 
These assets are required by the Huawei SDK . 

Copy all the files in the `assets` folder (alongside the extension in the repository):

- `grs_sdk_global_route_config_opensdkService.json`
- `grs_sdk_server_config.json`
- `grs_sp.bks`
- `hianalytics_njjn`
- `updatesdkcas.bks`

These need to be added at the root level of your application and packaged with your application. 



## Dependencies

Many of our extensions use some common libraries, for example, the Android Support libraries.

We have to separate these libraries into separate extensions in order to avoid multiple versions of the libraries being included in your application and causing packaging conflicts. This means that you need to include some additional extensions in your application along with the main extension file.

You will add these extensions as you do with any other extension, and you need to ensure it is packaged with your application.


### Core 

The Core ANE is required by this ANE. You must include and package this extension in your application.

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).


### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries. 

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [androidx.appcompat](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.appcompat.ane)
- [androidx.core](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)
- [androidx.constraintlayout](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.constraintlayout.ane)
- [com.jetbrains.kotlin](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.jetbrains.kotlin.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>



### Huawei Mobile Services

This extension requires usage of certain aspects of the Huawei Mobile Services (HMS) SDK. 

The HMS SDK is available as a series of extensions that you add into your applications packaging options.  Each separate extension provides a component(s) from the HMS SDK and are used by different extensions. These client libraries aren't packaged with this extension as they are used by multiple extensions and separating them will avoid conflicts, allowing you to use multiple extensions in the one application.

This extension requires the following HMS extensions:

- [com.huawei.hms.base](https://github.com/distriqt/ANE-HuaweiMobileServices/raw/master/lib/com.huawei.hms.base.ane)
- [com.huawei.hms.adsidentifier](https://github.com/distriqt/ANE-HuaweiMobileServices/raw/master/lib/com.huawei.hms.adsidentifier.ane)
- [com.huawei.hms.adslite](https://github.com/distriqt/ANE-HuaweiMobileServices/raw/master/lib/com.huawei.hms.adslite.ane)


You must include the above native extensions in your application along with this extension, and you need to ensure they are packaged with your application.

You can access the Huawei Mobile Services SDK extensions here: [https://github.com/distriqt/ANE-HuaweiMobileServices](https://github.com/distriqt/ANE-HuaweiMobileServices).

