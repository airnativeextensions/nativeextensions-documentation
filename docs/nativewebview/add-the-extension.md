---
title: Add the Extension
sidebar_label: Add the Extension
---

First step is always to add the extension to your development environment. 
To do this use the tutorial located [here](/docs/tutorials/getting-started).


Quick links:

- [`com.distriqt.NativeWebView`](https://github.com/distriqt/ANE-NativeWebView/raw/master/lib/com.distriqt.NativeWebView.ane)
- [`com.distriqt.Core`](https://github.com/distriqt/ANE-Core/raw/master/lib/com.distriqt.Core.ane)
- [`androidx.core`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)
- [`androidx.browser`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.browser.ane)



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

- [`androidx.core`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>


>
> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices. 
> There is no problem packaging these ANEs with all platforms as there are default implementations available which will allow your code to package without errors 
> however if you are only building an iOS application feel free to remove the Google Play Services ANEs from your application.
>




## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.NativeWebView</extensionID>
    <extensionID>com.distriqt.Core</extensionID>

    <!-- ANDROID -->
    <extensionID>androidx.browser</extensionID>
    <extensionID>androidx.core</extensionID>

</extensions>
```




## Android

### Manifest Additions

The NativeWebView will require a small addition to the manifest to be able to browse for files.
If you are looking to play videos in your webpage on Android we highly recommend adding the 
`android:hardwareAccelerated="true"` flag to your application. 

You should make sure your manifest contains the following:

```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	
	<!-- android:hardwareAccelerated is highly recommended for video playback and scroll performance -->
	<!-- android:windowSoftInputMode is used to push the content up when an input appears below the keyboard -->
	<application 
		android:hardwareAccelerated="true"
		android:windowSoftInputMode="adjustResize">
					
		<activity 
			android:name="com.distriqt.extension.nativewebview.activities.BrowseActivity" 
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />

    <activity 
      android:name="com.distriqt.extension.nativewebview.permissions.AuthorisationActivity" 
      android:theme="@android:style/Theme.Translucent.NoTitleBar" />

	</application>
</manifest>
```


## iOS 

### Info Additions

Since iOS 9, Apple has introduced the concept of App Transport Security (ATS). is encouraging the use of HTTPS

App Transport Security (ATS) lets an app add a declaration to its Info.plist file that specifies 
the domains with which it needs secure communication. ATS prevents accidental disclosure, provides 
secure default behavior, and is easy to adopt. You should adopt ATS as soon as possible, regardless 
of whether you're creating a new app or updating an existing one. 

If you're developing a new app, you should use HTTPS exclusively. If you have an existing app, you 
should use HTTPS as much as you can right now, and create a plan for migrating the rest of your app 
as soon as possible.

In simple terms, this means that if your application attempts to connect to any HTTP server 
(in this example, yourserver.com) that doesn’t support the latest SSL technology (TLSv1.2), 
your connections will fail with an error.

Basically the repercussions mean that you'll need to add exceptions in for any non secure domain 
you access. For example the following adds an exception for the `yourserver.com` domain and subdomains.

```xml
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSExceptionDomains</key>
  <dict>
    <key>yourserver.com</key>
    <dict>
      <!--Include to allow subdomains-->
      <key>NSIncludesSubdomains</key>
      <true/>
      <!--Include to allow HTTP requests-->
      <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
      <true/>
    </dict>
  </dict>
</dict>
```

To read more about this there is a great article [here](https://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/)





## Windows 

The native code has a dependency on the Visual C++ 2017 Redistributable package. This package contains code that is required to run code developed using C++ in Visual Studio and is very common amongst Windows applications.

There are two ways to ensure this is available to your application:

- Create an installer that runs the redistributable installer;
- Package the required DLL files from the redistributable with your application;

The first is the suggested method. Installing the redistributable via an installer allows it to be put into the windows update process, allowing bug fixes and security updates to be handled automatically.

The second method is only advised if you need a complete standalone application, where you don't (or cannot) use an installation process. This requires you to package DLLs from the redistributable with your application. 


### Creating an Installer

There are many methods to create application installers and many tutorials available. We suggest you find a method suitable to your environment and application and utilise the tutorials online. 

Some methods include:

- [Inno Setup](http://www.jrsoftware.org/isinfo.php)
- [Wix](http://wixtoolset.org/)
    - [WixEdit](http://wixedit.sourceforge.net)


Tutorials:

- [Generating a Windows installer](http://www.adobe.com/devnet/air/articles/customize-setup-for-AIR-app-with-captive-runtime.html)


You need to include the x86 c++ 2017 redistributable in the installer, there are many examples and documentation online to achieve this.

>
> **The advantage of this method is that the libraries will be updated along with any system updates and will not require manual updating of the libraries and releasing of your application.**
>


### Packaging DLLs

Packaging the DLLs into your application involves copying the DLLs specified below into your application root and including in your application package.

The best option is to install Visual Studio 2017 and locate the `Program Files[ (x86)]\Microsoft Visual Studio\2017\edition\VC\Redist\MSVC\lib-version` folder, eg: `C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\VC\Redist\MSVC\14.16.27012\x86\Microsoft.VC141.CRT`

Alternatively, download and install the x86 redistributable from the [Microsoft website](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads). This should install the DLLs into `C:\Windows\System32` folder. 


Open the folder and copy the following DLLs to your application:

- `msvcp140.dll`
- `vcruntime140.dll`

If you are having issues locating these files, feel free to contact us for help.


> 
> You should ensure you are allowed to package these files as per the Microsoft Software License terms but generally these are safe to redistribute subject to the license terms. More information here: [Redistributing Visual C++ Files](https://docs.microsoft.com/en-us/cpp/windows/redistributing-visual-cpp-files)
>
> You should get legal advice if you are unsure. 
>



## MacOS

No specific additions are required for macOS. 

