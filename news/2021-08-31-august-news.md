---
slug: 2021-08
title: August 2021
description: APM, Adverts, Android 30, AIR Config
image: images/airpackagemanager.png
author: Michael
author_title: Lead Developer
author_url: https://github.com/marchbold
author_image_url: https://avatars3.githubusercontent.com/u/442356?s=460&v=4
tags: [newsletter, air, apm, adverts, android-30]
---

> APM, Adverts and Android 30

Another big month, APM is moving along quickly and our first version of manifest merging has been added! We are super excited about this tool and the way it will change AIR development. I know a lot of the people we talk to emphasise the lack of quick integration being the biggest hurdle with AIR development and we believe this tool is almost ready to resolve that.

Other updates include latest AdMob SDK and mediation networks. Flurry SDK has been updated and the new "standard events" added. CameraUI has had some major changes integrated to support Android 30, and the Scanner extension had some bug fixes released.

<!--truncate-->

![](images/adobeair.png)

### AIR SDK Configuration

While working with apm we have been investigating options to make development using the AIR SDK easier and have come across some concerns around configuration of the SDK.

Basically I'm concerned about the configuration options for a project being placed inside the SDK. I believe this is a really bad practice and that we need to have a more consistent approach for configuration settings. I have raised our concerns on the AIR discussion forum and I think it's important as a community that we push a direction for Harman here, before they take the SDK down a bad path.

Please take the time to have a read and let Harman know about where you think the configuration options should be placed.

You can find the discussion here: [https://github.com/airsdk/Adobe-Runtime-Support/discussions/1112](https://github.com/airsdk/Adobe-Runtime-Support/discussions/1112)

![](images/airpackagemanager.png)

### [AIR Package Manager](https://github.com/airsdk/apm)

We have rolled out several more iterations of the `apm` tool and we have made amazing progress around generation of the application descriptor, most importantly the **automatic generation of the manifest additions for Android**.

I seriously cannot emphasise enough how much this will change integrating packages in AIR applications.

It makes adding a new package (extension) to your application as easy as:

```
apm install com.distriqt.CameraUI
apm generate app-descriptor
```

And your application descriptor will automatically have the manifest additions and extension id's inserted, not only for the CameraUI extension but **all the dependencies**!

This is still a work in progress (eg we haven't completed iOS merging yet) and we are working hard on getting all our extensions available as packages, but we would really welcome any feedback.

For example, a basic app descriptor after running the above:

```
<application xmlns="http://ns.adobe.com/air/application/33.1">
  <id>com.my.app</id>
  <versionNumber>1.0.0</versionNumber>
  <filename>MyApplication</filename>
  <name>My Application</name>
  <initialWindow>
    <content>[]</content>
    <visible>true</visible>
    <fullScreen>false</fullScreen>
    <autoOrients>false</autoOrients>
    <renderMode>direct</renderMode>
  </initialWindow>
  <android>
    <manifestAdditions><![CDATA[<manifest android:installLocation="auto" >
  <uses-sdk android:minSdkVersion="19" android:targetSdkVersion="30"/>
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
  <application android:appComponentFactory="androidx.core.app.CoreComponentFactory" android:hardwareAccelerated="true">
    <provider android:name="androidx.lifecycle.ProcessLifecycleOwnerInitializer" android:authorities="air.com.my.app.lifecycle-process" android:exported="false" android:multiprocess="true"/>
    <provider android:name="androidx.startup.InitializationProvider" android:authorities="air.com.my.app.androidx-startup" android:exported="false"/>
    <provider android:name="com.distriqt.extension.cameraui.content.FileProvider" android:authorities="air.com.my.app.camerauifileprovider" android:exported="false" android:grantUriPermissions="true">
      <meta-data android:name="android.support.FILE_PROVIDER_PATHS" android:resource="@xml/distriqt_cameraui_paths"/>
    </provider>
    <activity android:name="com.distriqt.extension.cameraui.permissions.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
  </application>
</manifest>
]]></manifestAdditions>
    <containsVideo>true</containsVideo>
  </android>
  <extensions>
    <extensionID>androidx.core</extensionID>
    <extensionID>com.distriqt.CameraUI</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
  </extensions>
</application>
```

Currently we have the following air packages available:

- All the Google Play Services
- All the androidx and android dependencies
- Square libs
- Camera UI
- Flurry
- Adverts (including mediators)

#### Get Involved

This tool is for the community, so we really want your feedback. It is opensource and publicly available now. If you are at all interested in testing out the client we are looking for any and all feedback! Check out the [wiki](https://github.com/airsdk/apm/wiki) for installation details.

If you have any thoughts and feel you could help please reach out, either by [sponsoring](https://github.com/sponsors/marchbold) or contributing directly through the repository.

![](images/admob.png)

### [Adverts](https://airnativeextensions.com/extension/com.distriqt.Adverts)

The Adverts extension has been updated to the latest SDK releases and we have added support for the new "Rewarded Interstitials" ad type.

The extension now contains AdMob version 20.2.0 on Android and version 8.9.0 on iOS. Additionally the UMP SDK has been updated to version 2.0.0.

Excitingly this extension has been released as an airpackage. This means you can use `apm` to install and generate the manifest additions for you.

```
apm install com.distriqt.Adverts
apm project config set adMobAndroidApplicationId XXXXXXX
apm project config set adMobIOSApplicationId YYYYYYY
```

![](images/android.png)

### Android 30

Now that the AIR SDK supports Android 30 we have been updating all our extensions to support this latest iteration of the Android platform. There are several major changes around opening and querying other installed packages and changes around file access that have affected some of our extensions, such as the CameraUI.

If you run into any issues, please let us know and we will make sure any issues are addressed promptly!

---

As always, if you have any native development needs for AIR, Unity, Flutter or Haxe, please feel free to contact us at [airnativeextensions@distriqt.com](mailto:airnativeextensions@distriqt.com).
