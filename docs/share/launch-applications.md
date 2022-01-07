---
title: Launch Applications
sidebar_label: Launch Applications
---

This function allows your application to start another application on the device. 
It uses different methods on iOS and Android however both will allow you to specify start up parameters to an application:

- On Android it uses an explicit Intent with a package, type, action and extras
- On iOS it uses a custom url scheme with query parameters

The simplest example of launching another application if installed.


```actionscript title="AIR"
var app:Application = new Application( "com.instagram.android", "instagram://" );
 
if (Share.service.applications.isInstalled( app ))
{
	Share.service.applications.launch( app );
}
```

```csharp title="Unity"
plugins.share.applications.Application app
        = new plugins.share.applications.Application(
            "com.instagram.android",
            "instagram://");

if (Share.Instance.Applications.IsInstalled(app))
{
    Share.Instance.Applications.Launch(app);
}
```

An example of launching Instagram and opening a specific user profile


```actionscript title="AIR"
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

```csharp title="Unity"
plugins.share.applications.Application app
        = new plugins.share.applications.Application(
            "com.instagram.android",
            "instagram://");

ApplicationOptions options = new ApplicationOptions();
options.action = ApplicationOptions.ACTION_VIEW;
options.data = "http://instagram.com/_u/distriqt";
options.parameters = "user?username=distriqt";
 
if (Share.Instance.Applications.IsInstalled(app))
{
    Share.Instance.Applications.Launch(app, options);
}
```


## iOS 

On iOS you must add the application schemes you wish to query or launch to your info additions. 
If you don't perform these additions you will always receive `false` from the `isInstalled()` and the launch functions.


### AIR

You should add the `LSApplicationQueriesSchemes` value to your `InfoAdditions` in your application descriptor, and include the schemes for the applications you intend to query.

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

### Unity

You should add the `LSApplicationQueriesSchemes` value to your `Info.plist`, and include the schemes for the applications you intend to query.

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>instagram</string>
    <string>whatsapp</string>
</array>
```


## Android 

Android 11 introduces changes related to package visibility. These changes affect apps only if they target Android 11. In order for you to correctly query if an application is installed you will need to add the package names you wish to query to the manifest.


```xml
<queries>
    <package android:name="PACKAGENAME" />
</queries>
```

For example if you are querying whatsapp and instagram:

```xml
<queries>
    <package android:name="com.whatsapp" />
    <package android:name="com.instagram.android" />
</queries>
```



## Start Actvity 

**Android only**

This functionality allows you to use the Android Intent system to launch an Intent directly.

This is sometimes required when you need particular control over how the data is passed to an Intent.


### AIR 

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


### Unity

Use the `Intent` class to create an Intent and then pass it to the `StartActivity` function.

For example to launch a url in the Chrome application


```csharp
Intent intent = new Intent(Intent.ACTION_VIEW);
intent.packageName = "com.android.chrome";
intent.data = "https://distriqt.com";

Share.Instance.Applications.StartActivity(intent);
```

The return value of the `StartActivity` function will be `false` if no activity could be launched matching the `Intent` and will be `true` if an activity was started.

