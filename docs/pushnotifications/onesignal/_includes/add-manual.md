
:::info
The following guide is used to manually install the extension, download dependencies and update the application descriptor. We highly recommend installing extensions using `apm`. Using `apm` will automate the installation and automatically handle updates and dependencies along with greatly simplifying the application descriptor generation.
:::


First step is always to add the extension to your development environment. Download the extension from the repository and then follow the tutorial located [here](/docs/tutorials/getting-started) to add the extension to your development environment.



To use this service add the `com.distriqt.PushNotifications.OneSignal.ane` variant of the extension to your project in place of `com.distriqt.PushNotifications.ane`. You should only add one of the variants to your project. If you need to support multiple services please use the All Services variant.

All variants of the Push Notifications extension have the same extension id: `com.distriqt.PushNotifications` so you should add this to your extensions list in your application descriptor:

```xml
<extensions>
	...

	<extensionID>com.distriqt.PushNotifications</extensionID>

	...
</extensions>
```


### Dependencies

Many of our extensions use some common libraries, for example, the Android Support libraries.

We have to separate these libraries into separate extensions in order to avoid multiple versions of the libraries being included in your application and causing packaging conflicts. This means that you need to include some additional extensions in your application along with the main extension file.

You will add these extensions as you do with any other extension, and you need to ensure it is packaged with your application.


#### Core 

The Core extension is required by this extension. You must include this extension in your application.

This extension requires you call the `init()` function at some point early in your application, generally at the same time as the initialisation of this extension. If you are using other extensions that also require the Core extension, you only need to initialise it once, before initialising the other extensions.

```actionscript
Core.init();
```

The Core extension doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).


#### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries.

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [`androidx.appcompat`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.appcompat.ane)
- [`androidx.browser`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.browser.ane)
- [`androidx.cardview`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.cardview.ane)
- [`androidx.constraintlayout`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.constraintlayout.ane)
- [`androidx.core`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)
- [`androidx.emoji2`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.emoji2.ane)
- [`androidx.exifinterface`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.exifinterface.ane)
- [`androidx.room`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.room.ane)
- [`androidx.vectordrawable`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.vectordrawable.ane)
- [`androidx.work`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.work.ane)

- [`com.jetbrains.kotlin`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.jetbrains.kotlin.ane)
- [`com.google.android.datatransport`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.android.datatransport.ane)
- [`com.google.dagger`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.dagger.ane)
- [`com.google.protobuflite`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.protobuflite.ane)
- [`com.google.code.gson`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.code.gson.ane)
- [`com.google.guava`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.guava.ane)
- [`com.bumptech.glide`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.bumptech.glide.ane)
- [`io.reactivex`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/io.reactivex.ane)
- [`io.grpc`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/io.grpc.ane)


You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).

> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.


#### Google Play Services

This ANE requires usage of certain aspects of the Google Play Services client library.
The client library is available as a series of ANEs that you add into your applications packaging options.
Each separate ANE provides a component from the Play Services client library and are used by different ANEs.
These client libraries aren't packaged with this ANE as they are used by multiple ANEs and separating them
will avoid conflicts, allowing you to use multiple ANEs in the one application.

This ANE requires the following Google Play Services:

- [`com.distriqt.playservices.Base`](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Base.ane)
- [`com.distriqt.playservices.CloudMessaging`](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.CloudMessaging.ane)


You must include the above native extensions in your application along with this extension,
and you need to ensure they are packaged with your application.

You can access the Google Play Services client library extensions here: [https://github.com/distriqt/ANE-GooglePlayServices](https://github.com/distriqt/ANE-GooglePlayServices).


#### Firebase

To use Firebase Cloud Messaging you must include the core Firebase libraries. The core libraries are available in the `com.google.firebase.core` extension alongside the Google Play Services:

- [`com.google.firebase.core`](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.google.firebase.core.ane)

You do not need to initialise or configure this.





### Dynamic Frameworks

The OneSignal SDK requires several dynamic frameworks that need to be packaged and signed with your application.

To do so you must add the `Frameworks` folder at the root of your application package. This folder is found alongside the `ane` in the `assets/ios/` folder.  

