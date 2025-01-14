

### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.Application</extensionID>
	<extensionID>com.distriqt.Core</extensionID>

	<extensionID>androidx.core</extensionID>
	<extensionID>com.distriqt.playservices.Base</extensionID>
	<extensionID>com.distriqt.playservices.AppSet</extensionID>
</extensions>
```



### Android 

#### Manifest Additions

You should add the following manifest additions. Read the individual sections for details on which parts are needed for the functionality you require or you can just add them all.

**Make sure you only have one `<application>` node in your manifest additions combining them if you have multiple.**

The following shows the complete manifest additions node. You must replace `APPLICATION_PACKAGE` with your 
AIR application's Java package name, something like `air.com.distriqt.test`.
Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.


```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	
	<uses-permission android:name="android.permission.WAKE_LOCK" />
	<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />

	<application>
		
		<!-- AUTO START and ALARM MANAGER -->
		<receiver android:enabled="true"
			android:name="com.distriqt.extension.application.receivers.ApplicationStartupReceiver"
			android:permission="android.permission.RECEIVE_BOOT_COMPLETED"
			android:exported="false">
			<intent-filter>
				<action android:name="android.intent.action.BOOT_COMPLETED" />
				<category android:name="android.intent.category.DEFAULT" />
			</intent-filter>
		</receiver>

		<!-- ALARM MANAGER -->
		<receiver android:name="com.distriqt.extension.application.alarms.AlarmReceiver" android:enabled="true" android:exported="false" />
		<activity android:name="com.distriqt.extension.application.alarms.AlarmActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:exported="false" />

		<!-- SETTINGS -->
		<activity android:name="com.distriqt.extension.application.settings.SettingsActivity" android:label="Settings" android:exported="false" />


	</application>

</manifest>
```


#### MultiDex Applications 

:::warning
This is enabled by default with the latest AIR builds (33.1.1.x and higher). You should no longer add the `android.multidex` extension. 

This information is for legacy developers only!
:::

If you have a large application and are supporting Android 4.x then you will need to ensure you enable your application to correctly support MultiDex to allow the application to be broken up into smaller dex packages.

This is enabled by default with releases of AIR v25+, except in the Android 4.x case where you need to change the manifest additions for the application tag to match the following and use the `MultiDexApplication`.


This will require the addition of the `androidx.multidex` extension which contains the `androidx.multidex.MultiDexApplication` implementation.

```xml
<manifest android:installLocation="auto">
	<!-- PERMISSIONS -->

	<application android:name="androidx.multidex.MultiDexApplication">

		<!-- ACTIVITIES / RECEIVERS / SERVICES -->

	</application>
</manifest>
```


