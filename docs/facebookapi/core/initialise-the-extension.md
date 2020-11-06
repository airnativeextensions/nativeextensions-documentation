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

Initialising the Facebook application is normally done automatically by the SDK. 

However when you choose to disable automatic initialisation, for example, to ensure you have user consent for analytics, then you can manually initialise the Facebook SDK by calling `initialise()`,

```actionscript
Facebook.instance.initialise();
```


### Disable Automatic Initialisation

To disable automatic initialisation set the `AutoInitEnabled` flag to `false` in the application descriptor.




#### iOS

For iOS you set the `FacebookAutoInitEnabled` key to `false` in your `InfoAdditions`

```xml
<key>FacebookAutoInitEnabled</key>
<false/>
```


#### Android

For Android you set the `com.facebook.sdk.AutoInitEnabled` meta-data value to `false`:

```xml
<meta-data 
	android:name="com.facebook.sdk.AutoInitEnabled" 
	android:value="false"/>
```

This value should be inside the `application` node in your manifest additions.


### Re-enable Automatic Initialisation

Then, re-enable automatic initialisation after an end User provides consent by calling the `setAutoInitEnabled()` method of the `Facebook` class and setting it to `true`. You should then trigger a manual initialisation call to fully initialise the SDK.


```actionscript
Facebook.instance.setAutoInitEnabled( true );
Facebook.instance.initialise();
```


You can also retrieve the current value of this setting by calling `getAutoInitEnabled()`:

```actionscript
var autoInitEnabled:Boolean = 
	Facebook.instance.getAutoInitEnabled();
```

