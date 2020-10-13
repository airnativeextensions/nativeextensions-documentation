---
title: Launch Applications
sidebar_label: Launch Applications
---

This function allows your application to start another application on the device. 
It uses different methods on iOS and Android however both will allow you to specify start up parameters to an application:

- On Android it uses an explicit Intent with a package, type, action and extras
- On iOS it uses a custom url scheme with query parameters

The simplest example of launching another application if installed.

```actionscript
var app:Application = new Application( "com.instagram.android", "instagram://" );
 
if (Share.service.applications.isInstalled( app ))
{
	Share.service.applications.launch( app );
}
```

An example of launching Instagram and opening a specific user profile

```actionscript
var app:Application = new Application( "com.instagram.android", "instagram://" );

var options:ApplicationOptions = new ApplicationOptions();
options.action = ApplicationOptions.ACTION_VIEW;
options.data = "http://instagram.com/_u/distriqt";
options.parameters = "user?username=distriqt";
 
if (Share.service.applications.isInstalled( app ))
{
	Share.service.applications.launch( app, options );
}
```


## iOS 

On iOS you must add the application schemes you wish to query or launch to your info additions. 
If you don't perform these additions you will always receive false from the isInstalled and the launch functions.

```xml
<iPhone>
	<InfoAdditions><![CDATA[
		<key>LSApplicationQueriesSchemes</key>
		<array>
			<string>instagram</string>
			<string>whatsapp</string>
		</array>
	]]></InfoAdditions>
</iPhone>
```




## Start Actvity 

**Android only**

This functionality allows you to use the Android Intent system to launch an Intent directly.

This is sometimes required when you need particular control over how the data is passed to an Intent.


Use the `Intent` class to create an Intent and then pass it to the `startActivity` function.

For example to launch a url in the Chrome application

```actionscript
var intent:Intent = new Intent();
intent.action = "android.intent.action.VIEW";
intent.data = "http://distriqt.com";
intent.packageName = "com.android.chrome";

var success:Boolean = Share.service.applications.startActivity( intent );
```

The return value of the `startActivity` function will be `false` if no activity could be launched matching the Intent and will be `true` if an activity was started.

You can also add extras to the intent through the `extras` property. This should be set to an `Object` containing simple data values (eg `String`, `int`, `Number`) that are passed to the activity. 


```actionscript
intent.extras = {
	extraName: "some value"
};
```
