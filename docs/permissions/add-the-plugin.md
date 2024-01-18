---
title: Add the Plugin
sidebar_label: Unity
---

First step is always to add the plugin to your development environment. 


## Asset Store

Open the Asset Store in your browser and add the plugin to your assets.

Open the Package Manager (Window > Package Manager) in the Unity Editor and select the "My Assets" section. Select the plugin, and click Import in the bottom right.


## Manual Installation

In unity you import the package by selecting `Assets / Import Package / Custom Package ...` and then browsing to the unity plugin package file: `com.distriqt.AppGroupDefaults.unitypackage`.

![](images/unity-import-package.png)

You can manually download the extension from our repository:

- https://github.com/distriqt/ANE-Permissions



## Import the Plugin


This will present the import dialog and display all the files for the plugin, make sure all the files are selected.

The plugin will be added to your project and you can now use the plugins functionality in your application.




### Android

:::note Proguard
If you are using a custom proguard configuration you may need to add the following line to ensure the interface class for the plugin is accessible to unity at runtime.

```
-keep class com.distriqt.extension.permissions.PermissionsUnityPlugin {*;}
```
:::




## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```csharp
if (Permissions.isSupported)
{
	// Functionality here
}
```



