---
title: Browse for an Asset
sidebar_label: Browse for an Asset
---

To ask the user to select an asset (or multiple assets) you will need to call the `browseForAsset()` function. 
This will present the user interface and allow the user to select an asset from their device. In the following events you will get information about the selected items as `Asset` objects which you can use to load the asset as you require. 

You can limit what the user is presented with and allowed to select by changing the options in the `CameraRollExtendedBrowseOptions`.

The extension will dispatch one of two events to determine the result of the browse,

- `CameraRollExtendedEvent.CANCEL`: Indicates the user cancelled the browsing operation and no assets where selected
- `CameraRollExtendedEvent.SELECT`: Indicates the user selected an asset(s) and the details of the assets will be attached to the event

The following example shows selection of up to 5 images:

```actionscript
CameraRollExtended.service.addEventListener( CameraRollExtendedEvent.CANCEL, cancelHandler );
CameraRollExtended.service.addEventListener( CameraRollExtendedEvent.SELECT, selectHandler );

var options:CameraRollExtendedBrowseOptions = new CameraRollExtendedBrowseOptions();

options.maximumCount = 5;
options.type = Asset.IMAGE;

CameraRollExtended.service.browseForAsset( options );



function cancelHandler( event:CameraRollExtendedEvent ):void
{
	trace( "camera roll cancelled" );
}

function selectHandler( event:CameraRollExtendedEvent ):void
{
	trace( "camera roll select" );
	for each (var asset:Asset in event.assets)
	{
		trace( asset.toString() );
	}
}
```


## Android

With Android there are a two distinct implementations, a custom UI built to provide similar functionality as on iOS, and the native implementation.

The native implementation has the advantage of being closely integrated with the system allowing a user to select an image from a range of media. However this varies betweens versions of Android and does not support most of the browse options.

The custom implementation is a little more limited in that it can only select from media that the application can access through the system content provider. However this implementation allows you to control the number of images and other options more easily.

To switch between these methods you set the `useNativePicker` option on the `CameraRollExtendedBrowseOptions` instance:

```actionscript
var options:CameraRollExtendedBrowseOptions = new CameraRollExtendedBrowseOptions();

options.useNativePicker = true;

CameraRollExtended.service.browseForAsset( options );
```

We highly recommend using the native picker however feel free to try the custom implementation and see if it suits your needs.