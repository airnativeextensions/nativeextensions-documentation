---
title: Add the Plugin
sidebar_label: Unity
---

First step is always to add the plugin to your development environment. 


## Asset Store

Open the Asset Store in your browser and add the plugin to your assets.

Open the Package Manager (Window > Package Manager) in the Unity Editor and select the "My Assets" section. Select the plugin, and click Import in the bottom right.


## Manual Installation

In unity you import the package by selecting `Assets / Import Package / Custom Package ...` and then browsing to the unity plugin package file: `com.distriqt.Share.unitypackage`.

![](images/unity-import-package.png)

You can manually download the extension from our repository:

- https://github.com/distriqt/ANE-Share



## Import the Plugin


This will present the import dialog and display all the files for the plugin, make sure all the files are selected.

The plugin will be added to your project and you can now use the plugins functionality in your application.


### iOS Setup

iOS requires set up of an "App Group" for your application(s).

Log into the developer member center and go to your application identifiers.

Firstly you will need to create an App Group.

- Go to [App Groups](https://developer.apple.com/account/ios/identifier/applicationGroup)
- Click the "+" in the top right to register a new group
- Enter a description and an identifier.
  - The identifier is recommended to be a reverse domain style and starting with `group.`
  - eg: `group.com.distriqt.test`


Once you have created a group you need to enable it for the applications that are going to be placed in this group.

- Go to [App IDs](https://developer.apple.com/account/ios/identifier/bundle)
- Select the application of interest and click edit
- Enable "App Groups" in the "iOS App ID Settings"
- Click "Edit" in the "App Groups" row
  - Select the App Group you created previously
  - Click "Continue" and then "Assign"

You will need to regenerate your provisioning profiles and download them again so make sure you do this now.

Next you will need to add this group identifier to the plugin configuration for your application.


### Android

:::note Proguard
If you are using a custom proguard configuration you may need to add the following line to ensure the interface class for the plugin is accessible to unity at runtime.

```
-keep class com.distriqt.extension.appgroupdefaults.AppGroupDefaultsUnityPlugin {*;}
```
:::




## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```csharp
if (AppGroupDefaults.isSupported)
{
	// Functionality here
}
```




## Configuration

To configure your application open the `AppGroupDefaultsConfig.cs` file and change the configuration values for your application. (This file is located at `/Assets/distriqt/AppGroupDefaultsUnity/AppGroupDefaults/Editor/AppGroupDefaultsConfig.cs`).

This file has 2 important configuration values:

- `groupIdentifier`
- `applicationAuthority`

>
> These values are used to configure the iOS Xcode project and the Android manifest. There are some additional configuration values supplied at runtime.
>

### iOS  

For iOS the `groupIdentifier` is the identifier for the group you created in the developer console, eg `group.com.distriqt.test`. 

The `applicationAuthority` value is not used on iOS.

To confirm this was done successfully (or to do it manually) you can open the Xcode project after your build and simply select **Capabilities** in your project settings and ensure the App Group capability is enabled. Then select your application groups you plan to use in this application. 

![](images/unity-xcode-capabilities.png)


### Android

The `groupIdentifier` can be anything you require, generally for simplicity we suggest leaving it as the same identifier as for the iOS group. This value should be the same for every application you use inside this group.

The `applicationAuthority` uniquely identifies this application content provider, while being in a specific pattern that the plugin uses to identify other providers that it can potentially synchronise with. To this end we suggest using `group.COMMON.UNIQUE.provider` as this value, replacing `COMMON` with some common value used across all your applications and `UNIQUE` with something unique for this application, for example:

- `group.com.distriqt.authority.unity1.provider`
- `group.com.distriqt.authority.unity2.provider`
- `group.com.distriqt.authority.unity3.provider`

