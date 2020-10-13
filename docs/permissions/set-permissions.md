---
title: Set Permissions
sidebar_label: Set Permissions
---

You must inform the extension which permissions you wish to request.
This is done by passing an array of `String`'s each being the permission required.

For example to set the camera permission:

```actionscript
Permissions.service.setPermissions( [ "android.permission.CAMERA" ] );
```


