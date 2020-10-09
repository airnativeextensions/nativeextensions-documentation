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
