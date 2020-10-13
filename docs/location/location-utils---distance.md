---
title: Location Utils - Distance
sidebar_label: Location Utils - Distance
---

## Calculating distance

You can use the utilities to calculate the distance between two geographic positions.


```actionscript
var from:Position = ...;
var to:Position = ...;

var distance:Number = Location.service.locationUtils.distanceBetween( from, to );
```


This method measures the distance between the two locations by tracing a line between them that follows the curvature of the Earth. The resulting arc is a smooth curve and does not take into account specific altitude changes between the two locations.

Distance is defined in meters using the WGS84 ellipsoid.

