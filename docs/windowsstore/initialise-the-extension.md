---
title: Initialise the Extension
sidebar_label: Initialise the Extension
---


You should perform this once in your application by calling the `setup()` method. This initialises the extension and internally sets up the native extension implementation.

Note you should always check whether the extension is supported before making calls. This allows you to react to whether the functionality is available on the device.


```actionscript
try
{
	if (WindowsStore.isSupported)
	{
		WindowsStore.service.setup();

		// Functionality here

	}
}
catch (e:Error)
{
	trace( e );
}
```


