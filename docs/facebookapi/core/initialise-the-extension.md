---
title: Initialise the Extension
sidebar_label: Initialise the Extension
---


## Core Extension

You must call `Core.init();` once in your application to initialise the extension and correctly add application delegation handling. 

Note you should always check whether the extension is supported before making calls.  This allows you to react to whether the functionality is available on the device.


```actionscript
Core.init();
if (Facebook.isSupported)
{
	//	Functionality here
}
```


## Initialise the Facebook Application

To initialise the Facebook SDK call the `initialise()` function. You must do this before attempting to use any of the functionality in the Facebook Platform SDKs.


```actionscript
Facebook.instance.initialise();
```

If you plan to gather permission to track the user or other such consent you should do this before calling `initialise()`.


:::warning
Previously you may have relied on the Facebook Platform SDKs automatically initialising on launch.
Starting with v9 Facebook has removed this auto-initialisation feature.

If you currently rely on the Facebook Platform SDKs being automatically initialized for use, you will now need to explicitly initialize the SDK by making the appropriate calls.
:::

We suggest you ensure you have disabled automatic initialisation in your application by setting set the `AutoInitEnabled` flag to `false` in the application descriptor.


For iOS you set the `FacebookAutoInitEnabled` key to `false` in your `InfoAdditions`

```xml
<key>FacebookAutoInitEnabled</key>
<false/>
```

For Android you set the `com.facebook.sdk.AutoInitEnabled` meta-data value to `false`:

```xml
<meta-data 
	android:name="com.facebook.sdk.AutoInitEnabled" 
	android:value="false"/>
```

This value should be inside the `application` node in your manifest additions.


