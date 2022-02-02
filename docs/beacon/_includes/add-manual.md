
:::info
The following guide is used to manually install the extension, download dependencies and update the application descriptor. We highly recommend installing extensions using `apm`. Using `apm` will automate the installation and automatically handle updates and dependencies along with greatly simplifying the application descriptor generation.
:::


First step is always to add the extension to your development environment. Download the extension from the repository and then follow the tutorial located [here](/docs/tutorials/getting-started) to add the extension to your development environment.



### Dependencies

Many of our extensions use some common libraries, for example, the Android Support libraries.

We have to separate these libraries into separate extensions in order to avoid multiple versions of the libraries being included in your application and causing packaging conflicts. This means that you need to include some additional extensions in your application along with the main extension file.

You will add these extensions as you do with any other extension, and you need to ensure it is packaged with your application.


#### Core ANE

The Core ANE is required by this ANE. You must include and package this extension in your application.

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).



#### Android Support ANE

Due to several of our ANE's using the Android Support library the library has been separated
into a separate ANE allowing you to avoid conflicts and duplicate definitions.
This means that you need to include the some of the android support native extensions in
your application along with this extension.

You will add these extensions as you do with any other ANE, and you need to ensure it is
packaged with your application. There is no problems including this on all platforms,
they are just **required** on Android.

This ANE requires the following Android Support extensions:

- [`androidx.core`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).

> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices.
> There is no problem packaging these ANEs with all platforms as there are default implementations available which will allow your code to package without errors
> however if you are only building an iOS application feel free to remove the Google Play Services ANEs from your application.

