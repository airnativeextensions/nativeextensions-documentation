---
title: Loading as Asset - Deprecated
sidebar_label: Loading as Asset - Deprecated
---
>
> **Deprecated API**
>
> This API is no longer recommended and is only here for historical reference until we remove the API
>


Once your user has selected an asset you can then load the asset from the device. 
Image assets can be loaded into a `BitmapData` structure using the `loadAssetByURL` function.

The example below shows loading an image Asset using this method:

```actionscript
var asset:Asset = ... ; // Asset retrieved via user selection (browseForAsset)

if (asset.type == Asset.IMAGE)
{
	CameraRollExtended.service.addEventListener( CameraRollExtendedEvent.ASSET_LOADED, assetLoadedHandler );
	CameraRollExtended.service.loadAssetByURL( asset.url, AssetRepresentation.THUMBNAIL );
}


function assetLoadedHandler( event:CameraRollExtendedEvent ):void
{
	var asset:Asset = event.assets[0];
	var bitmap:Bitmap = new Bitmap( asset.bitmapData );
	addChild( bitmap );
}
```
