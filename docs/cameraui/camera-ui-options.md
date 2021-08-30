---
title: Camera UI Options
sidebar_label: Camera UI Options
---

## Save To Camera Roll

By default the Camera UI will save a copy of the captured media to the user's camera roll.

If you require you can disable this and only make the captured media available to your application.
Depending on the OS this will change the storage location of the file to a location that is not
scanned by the device media scanner and hence won't appear in the users available media.

To change this option set the `saveToCameraRoll` option in the options:

```actionscript
var options:CameraUIOptions = new CameraUIOptions();

options.saveToCameraRoll = false;

CameraUI.service.launch( MediaType.IMAGE, options );
```

## Save file in cache

If you don't save the image to the camera roll then by default the extension will save the captured images to the application cache directory. This means that the files may be removed by the OS at certain points.

However if you set `saveFilesInCache` to `false` the files will be saved into the applications documents directory, making the files permanent. You can delete them manually (using `File`) if you require.

```actionscript
var options:CameraUIOptions = new CameraUIOptions();

options.saveToCameraRoll = false;
options.saveFilesInCache = false;

CameraUI.service.launch( MediaType.IMAGE, options );
```

## Android Camera App Selection

Android 11 (API 30) has introduced some very strict control over the launching of other applications which impacts the usage of the Camera UI extension. It forces the usage of the pre-installed camera application and will by-pass any user settings (if they have installed another camera application and selected it as their default).

There is no way to completely get around this. However you can specify a list of applications that your user can select from if they are installed on their device.

This is a two step process. Firstly you have to add a list of application packages you want to "whitelist" into the `queries` node of your application descriptor.

```xml
<queries>
	<package android:name="net.sourceforge.opencamera"/>
</queries>
```

This should sit outside the `application` node, alongside the permissions. eg:

```xml
<queries>
	<package android:name="net.sourceforge.opencamera"/>
</queries>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<application

 ...

```

:::info
If you get an error when packaging about the `queries` node not being supported by the Android SDK then you need to update your AIR SDK.
Older versions of AIR "incorrectly" report this as an issue with the Android SDK.
:::

Then secondly when you go to launch your application you set the `useChooser` property to be `true` and add the list of package names to the `cameraPackageCandidates`:

For example:

```actionscript
var options:CameraUIOptions = new CameraUIOptions();

options.useChooser = true;
options.cameraPackageCandidates = [
		"net.sourceforge.opencamera"
];

CameraUI.service.launch( MediaType.IMAGE, options );
```

When the camera ui is shown, if the user has one of the specified applications installed then a chooser will be presented for the user to select their application. Otherwise if the user has none of the applicaitons you have sepecified installed then the default camera application will be launched directly.

Some common applications include:

- `net.sourceforge.opencamera`: https://play.google.com/store/apps/details?id=net.sourceforge.opencamera
- `com.google.android.GoogleCamera`: https://play.google.com/store/apps/details?id=com.google.android.GoogleCamera
- `com.magix.camera_mx`: https://play.google.com/store/apps/details?id=com.magix.camera_mx
- `com.motorola.camera2`
