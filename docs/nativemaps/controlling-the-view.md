---
title: Controlling the View
sidebar_label: Controlling the View
---


## Changing Map Options

Changing the map options allows you to control map view related options such as:

- `compassEnabled`: Defines whether the compass control is enabled in the map interface
- `rotateGesturesEnabled`: Defines whether rotation gestures are enabled on the map

These options are set to defaults normally however you can use the `setMapOptions` function
to change them as you require. 

For example, to enable the traffic layer and the compass control we can do the following:

```actionscript
var options:MapOptions = new MapOptions();
options.trafficEnabled = true;
options.compassEnabled = true;

NativeMaps.service.setMapOptions( options );
```

For more options see the documentation of the `MapOptions` class in the ASDocs.



## Map Centre

The map centre represents the central focus geographic position of the map view.
It is represented as a `LatLng` geographic coordinate.

Retrieving the current centre is done by calling `getCentre`

```actionscript
var centre:LatLng = NativeMaps.service.getCentre();
```

Setting the centre of the map can be used to focus the user on a particular geographic position. 
You use the `setCentre` function passing the `LatLng` to be used as the new centre point.
The call to `setCentre` also contains parameters to control the animation and zoom.

The following will change the centre point and zoom, using an animation of 500 ms:

```actionscript
var centre:LatLng = new LatLng( -27.0, 155 );

NativeMaps.service.setCentre( centre, 3, true, 500 );
```



## Map Bounds

The "bounds" of the map are the geographic coordinates of the south-west and north-east corners currently displayed in the map.

You can retrieve the current bounds by calling `getBounds`:

```actionscript
var bounds:LatLngBounds = NativeMaps.service.getBounds();
```

The most common first step is to set the bounds of the view. 
Setting the bounds will change the currently displayed map area.

Setting the bounds is achieved by calling the `setBounds` function. 
This takes a `LatLngBounds` parameter which defines the south-west and north-east corners the map.
The map will change to ensure this area is displayed within the map view.


```actionscript
var bounds:LatLngBounds = new LatLngBounds(
					new LatLng(-27.5, 150 ),
					new LatLng(-27.0, 155 )
				);

NativeMaps.service.setBounds( bounds );
```



