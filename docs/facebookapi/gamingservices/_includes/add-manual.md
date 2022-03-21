
:::info
The following guide is used to manually install the extension, download dependencies and update the application descriptor. We highly recommend installing extensions using `apm`. Using `apm` will automate the installation and automatically handle updates and dependencies along with greatly simplifying the application descriptor generation.
:::


First step is always to add the extension to your development environment. Download the extension from the repository and then follow the tutorial located [here](/docs/tutorials/getting-started) to add the extension to your development environment.

The Facebook Gaming Services SDK is contained in the `com.distriqt.facebook.GamingServices` extension.

This extension depends upon the Facebook Core, Share and Login SDK so you will need to make sure you have added these extensions before continuing.

- [Add the Facebook Core extension](../../core/add-the-extension.mdx)
- [Add the Facebook Login extension](../../login/add-the-extension.mdx)
- [Add the Facebook Share extension](../../share/add-the-extension.mdx)


### Dependencies

Many of our extensions use some common libraries, for example, the Android Support libraries.

We have to separate these libraries into separate extensions in order to avoid multiple versions of the libraries being included in your application and causing packaging conflicts. This means that you need to include some additional extensions in your application along with the main extension file.

You will add these extensions as you do with any other extension, and you need to ensure it is packaged with your application.


#### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries. 

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions in addition to the ones from the other extensions:

- [com.google.code.gson](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.code.gson.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


