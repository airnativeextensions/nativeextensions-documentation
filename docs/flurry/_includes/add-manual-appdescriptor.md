

### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.Flurry</extensionID>
	<extensionID>com.distriqt.Core</extensionID>
	
	<extensionID>com.distriqt.playservices.Base</extensionID>
	<extensionID>com.distriqt.playservices.Analytics</extensionID>
	<extensionID>com.distriqt.playservices.AdsIdentifier</extensionID>
</extensions>
```



### Android 

#### Manifest Additions


The Flurry API requires a few additions to the manifest. 

:::warning
You need to replace `APPLICATION_PACKAGE` with your applications package name, generally your air application id prefixed by `air.`, eg `air.com.distriqt.test`.
:::

You should add the listing below to your manifest:


```xml
<manifest android:installLocation="auto">
	<!-- Required permissions - Internet access -->
	<uses-permission android:name="android.permission.INTERNET" /> 
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/> 
				
	<!-- Optional permission - Location based ad targeting -->
	<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
	<!-- OR -->
	<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

	<application>

		<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version"/>
	
		<provider 
			android:name="com.flurry.android.agent.FlurryContentProvider"
			android:authorities="APPLICATION_PACKAGE.FlurryContentProvider"
			android:exported="false" />
	
	</application>

</manifest>
```

Make sure you only have one `application` node in your manifest additions.
