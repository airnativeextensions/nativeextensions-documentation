---
title: Add the Extension
sidebar_label: Add the Extension
---


First step is always to add the extension to your development environment. 
To do this use the tutorial located [here](/docs/tutorials/getting-started).



## Required ANEs

### Core ANE

The Core ANE is required by this ANE. You must include and package this extension in your application.

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: https://github.com/distriqt/ANE-Core.



## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Battery</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
</extensions>
```



## Desktop implementation

The desktop implementations for macOS and Windows use a `NativeProcess` to connect to execute a script that determines the current state of the battery. In order for this to work you must be using extendedDesktop profile.

>
> The NativeProcess class and its capabilities are only available to AIR applications installed with a native installer (extended desktop profile applications). When debugging, you can pass the `-profile extendedDesktop` argument to ADL to enable the NativeProcess functionality. 
>

Please note that the desktop (macOS and Windows) implementation may give you a warning about using the default implementation. This is expected as those platforms are completely handled by the default library.



## Checking for Support

You can use the `isSupported` flag to determine if this extension is supported on the current platform and device.

This allows you to react to whether the functionality is available on the device and provide an alternative solution if not.


```actionscript
if (Battery.isSupported)
{
	// Functionality here
}
```

