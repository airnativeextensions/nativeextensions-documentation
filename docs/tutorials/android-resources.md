---
title: Android Resources
---

With Android additional files and static content are defined as **resources**, this includes images, layouts, strings, configuration, icons and more.

Sometimes you will need to include resources with your AIR application either to configure a service (such as Firebase) or to provide visual assets for system interactions (such as notification icons).

:::tip Note
AIR in the past has not had a direct method for including these resources and instead you have had to build a native extension to package these resources with your application.

However, with AIR 33.1.1.406, Harman has now introduced several options to simply include resources with your application.
:::


## Gather Resources

The first step is always to assemble your resources into a folder. Generally we use a folder named `res` to keep it inline with the Android equivalent however you should be able to use any folder name. For example:

```
res/
    drawable/
        graphic.png
    mipmap/
        icon.png
    values/
        values.xml
        strings.xml
```

Generally you will use tools to assemble these resources for you, such as the Android Asset Studio [Notification Icon Generator](https://romannurik.github.io/AndroidAssetStudio/icons-notification.html)


## Packaging

Once you have your resources, you can use one of the methods below to package these resources with your application.


### Application Descriptor 

:::info
Requires AIR 33.1.1.406 or higher
:::

The simplest method (and the method we suggest using) is specifying the resource directory in your application descriptor.

To do this, simply add the `resdir` tag to your application descriptor:

```xml
<resdir>res</resdir>
```

Place this at the same level as the `android` tag, eg:

```xml
<?xml version="1.0" encoding="utf-8" standalone="no"?>
<application xmlns="http://ns.adobe.com/air/application/33.1">

    <!-- Other application descriptor elements -->

	<android>
		<manifestAdditions><![CDATA[
            <!-- MANIFEST ADDITIONS -->
		]]></manifestAdditions>
    </android>

    <resdir>res</resdir>


</application>
```

The `resdir` can be either the:
- relative path (as above);
- absolute path;


When using a relative path, specify the location of the folder relative to your content, eg:

```
bin-debug/
    icons/
        icon16x16.png
        icon29x29.png
        icon32x32.png
        icon36x36.png
        ...
    example.swf
    example-app.xml
    res/
        values/
            values.xml
```

We recommend using the relative path, especially if you are dealing with multiple developers where absolute paths could change between systems.


### Command Line 

:::info
Requires AIR 33.1.1.300 or higher
:::

If you can modify the `adt` command used to build your application you can add a command line option to specify the resources directory similar to the previous method.

To do this, add the `-resdir` option to your command specifying the path to your resources directory.

Unfortunately this process cannot be used by most IDEs as you cannot modify the command directly so we don't suggest using this method. 



### Custom ANE

Previous to AIR 33.1.1.300/406 you would have had to generate a custom resources native extension and add this to your application. 

To this end we made a script available in the following repository to build this extension for you: 

https://github.com/distriqt/ANE-CustomResources/


This project uses an Apache Ant build script to create and package an ANE with your custom Android resources.

Follow the guide in the repository to generate this extension.

>
> This is still a viable solution for AIR, but we recommend the [application descriptor](#application-descriptor) solution for new applications. 
>
