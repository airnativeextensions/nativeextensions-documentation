---
title: Add the Plugin
sidebar_label: Unity
---

First step is always to add the plugin to your development environment. 


## Asset Store

Open the Asset Store in your browser and add the plugin to your assets.

Open the Package Manager (Window > Package Manager) in the Unity Editor and select the "My Assets" section. Select the plugin, and click Import in the bottom right.


## Manual Installation

In unity you import the package by selecting `Assets / Import Package / Custom Package ...` and then browsing to the unity plugin package file: `com.distriqt.AgeRange.unitypackage`.

![](images/unity-import-package.png)

You can manually download the extension from our repository:

- https://github.com/distriqt/ANE-AgeRange



## Import the Plugin


This will present the import dialog and display all the files for the plugin, make sure all the files are selected.

The plugin will be added to your project and you can now use the plugins functionality in your application.




## Resolve Android Dependencies

This plugin depends on some common Android libraries, particularly the Google Play Core Library, which enables in-app reviews.

You can get these dependencies using one of the following methods.


### Unity Jar Resolver

This is the suggested method.

Use the *Unity Jar Resolver* plugin to download and manage the Android dependencies. 



#### Importing

> If you already use the *Unity Jar Resolver* in your project you can skip this step.

- Download the latest version of the [*Unity Jar Resolver*](https://github.com/googlesamples/unity-jar-resolver/releases)
- Import the plugin by selecting `Assets / Import Package / Custom Package ...` and locate the plugin you downloaded. The plugin will be in the zip named: `external-dependency-manager-latest.unitypackage` 
- In the *Import Unity Package* window, click Import


#### Resolving

By default, the resolver should run automatically and will add the dependencies required by this plugin. 

If you have need to resolve the dependencies manually then you will need to:

- Open the menu under: `Assets / External Dependency Manager / Android Resolver`
- Select `Resolve` or `Force Resolve`


More information on the *Unity Jar Resolver* can be found [here](https://github.com/googlesamples/unity-jar-resolver)



### Custom Gradle AgeRange

Unity's in-built gradle build support and exporting to android studio does not support per plugin gradle script. Therefore, this plugin cannot add the dependencies by itself.

The `mainAgeRange.gradle` is generated when you enable the **Custom Gradle AgeRange** property on the Player window.

The `build.gradle` exists in generated Gradle project when you enable the **Export Project** property on the Player window and Build the project.

Update the `dependencies` section in your `mainAgeRange.gradle` or `build.gradle` as below:

```
dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    
	implementation 'com.google.android.play:core:1.9.1'
}
```


## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```csharp
if (AgeRange.isSupported)
{
	// Functionality here
}
```