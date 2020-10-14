---
title: Initialise the Extension
sidebar_label: Initialise the Extension
---

## Initialising the Extension

You should perform this once in your application to initialise the extension . 
Note you should always check whether the extension is supported before making calls. 
This allows you to react to whether the functionality is available on the device.


```actionscript
try
{
	Core.init();
	FacebookAPI.init();
	if (FacebookAPI.isSupported)
	{
		//	Functionality here
	}
}
catch (e:Error)
{
	trace( e );
}
```

