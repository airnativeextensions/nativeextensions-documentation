---
title: CameraRollExtended
hide_title: true
slug: /camerarollextended
---

![](images/hero.png)

# Camera Roll Extended

The [CameraRollExtended](http://airnativeextensions.com/extension/com.distriqt.CameraRollExtended) extension provides functionality for the user to select multiple assets from the device. Additionally you can use this extension to load the selected images from the device and use the loaded BitmapData objects in your application.

It extends the functionality of the AIR built in CameraRoll.

The simple API allows you to quickly integrate image and video selection in your AIR application in just a few lines of code.
Identical code base can be used across all platforms allowing you to concentrate on your application and not device specifics.
You can select multiple assets, including images and videos and access them either as BitmapData or through File access.

We provide complete guides to get you up and running with asset selection quickly and easily.

### Features:

- Uses the latest Photos framework on iOS;
- Pick using user applications (such as Photos) on Android; or
- Pick using a custom grid view on Android;
- Read assets using File access for raw data on both platforms;
- Allows selection of multiple assets;
- Loading the thumbnail or full resolution versions of images;
- Auto loading the images after user selection;
- Sample project code and ASDocs reference;

As with all our extensions you get access to a year of support and updates as we are continually
improving and updating the extensions for OS updates and feature requests.

## Documentation

The [documentation site](https://docs.airnativeextensions.com/docs/camerarollextended) forms the best source of detailed documentation for the extension along with the [asdocs](https://docs.airnativeextensions.com/asdocs/camerarollextended).

Quick Example:

```actionscript
var options:CameraRollExtendedBrowseOptions = new CameraRollExtendedBrowseOptions();
options.autoCloseOnCountReached = true;
options.autoLoadBitmapData = true;
options.autoLoadType = AssetRepresentation.THUMBNAIL;

CameraRollExtended.service.browseForImage( options );
```

More information here:

[com.distriqt.Application](https://airnativeextensions.com/extension/com.distriqt.Application)

## License

You can purchase a license for using this extension:

[airnativeextensions.com](https://airnativeextensions.com/)

distriqt retains all copyright.

![](images/promo.png)
