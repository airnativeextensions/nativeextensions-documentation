---
title: Android
sidebar_label: Android
---

## Android Setup

There are two methods available on Android to share settings between applications.

- Provider Method - uses a content provider and broadcast receiver to share variables
- File Method - uses an encrypted file to share variables. 

>
> ### Unity
> 
> For unity these additions should be placed in your applications `AndroidManifest.xml` file. 
> If you don't have one, create a file at `Assets/Plugins/Android/AndroidManifest.xml` and add the 
> content from the example, then proceed as below to update the manifest as per the method you 
> plan to use.
> 




### Provider Method

The provider method requires that you add several additions to the manifest. This 
includes a content provider and a broadcast receiver, along with some permissions 
and settings.

This method requires that you sign all of the applications with the same certificate.
This is required so that the settings are secured between your applications.

```xml
<!-- For the content provider and broadcast receiver method -->
<application>
				
	<meta-data android:name="app_group" android:value="[APPGROUP]" />
	<meta-data android:name="app_authority" android:value="group.[APPID].provider" />
	<meta-data android:name="app_authority_matcher" android:value="group\\.(?:[a-z,1-9]{1,}\\.)*provider" />

	<provider
		android:name="com.distriqt.extension.appgroupdefaults.provider.SharedProvider"
		android:authorities="group.[APPID].provider"
		android:exported="true" >
	</provider>
		
	<receiver
		android:name="com.distriqt.extension.appgroupdefaults.provider.SharedContentChangedReceiver"
		android:enabled="true"
		android:exported="true" >
		<intent-filter>
			<action android:name="[APPGROUP]"/>
		</intent-filter>
	</receiver>

</application>
```


You should replace `[APPGROUP]` with your application group.
This must be done in the meta-data tag and in the receiver. 
For example: `group.com.distriqt.test`

```xml
	<meta-data android:name="app_group" android:value="group.com.distriqt.test" />
```


You also need to define an **application authority**, this must be different for
each of your applications but must be matchable using the matcher. We suggest using 
the example above replacing `[APPID]` with your application id, for example an app_authority 
may be, `group.com.distriqt.test.app1.provider` as below:

```xml
	<meta-data android:name="app_authority" android:value="group.com.distriqt.test.app1.provider" />
```

You must place the application authority both in the meta-data tag and in the provider.





### File Method


The default is the provider method however if you wish to use the shared file method you 
can specify the type in the `setup` call:

AIR:

```actionscript
AppGroupDefaults.service.setup( 
	"12345678", 
	"group.com.distriqt.test", 
	AppGroupDefaults.TYPE_FILE 
);
```

Unity:

```csharp
AppGroupDefaults.Instance.Setup( 
	"12345678", // salt
	"group.com.distriqt.test", // app group identifier
	AppGroupDefaults.TYPE_FILE // Android type
);
```


This method writes to a public file with the content encrypted.

This requires read / write permissions to the external storage:

```xml
<android>
	<manifestAdditions><![CDATA[
		<manifest android:installLocation="auto">
			<uses-permission android:name="android.permission.INTERNET"/>
			
			<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
			<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
		</manifest>
	]]></manifestAdditions>
</android>
```

>
> With recent versions of Android you will need to request runtime permissions to access the storage.
>
> With AIR you can use the Permissions ANE to request the permissions at runtime.
>
> ```actionscript
> Permissions.service.setPermissions( [
> 		"android.permission.READ_EXTERNAL_STORAGE",
> 		"android.permission.WRITE_EXTERNAL_STORAGE"
> 		]);
> 
> if (!Permissions.service.hasAuthorisation())
> 	Permissions.service.requestAuthorisation();
> ```
>
>
> Unity you can use the  `UnityEngine.Android.Permission` helper class to request permissions.
> 
> ```csharp
> if (!Permission.HasUserAuthorizedPermission(Permission.ExternalStorageWrite) 
>     || !Permission.HasUserAuthorizedPermission(Permission.ExternalStorageRead))
> {
> 	Permission.RequestUserPermission(Permission.ExternalStorageWrite);
> 	Permission.RequestUserPermission(Permission.ExternalStorageRead);
> }
> ```
>





