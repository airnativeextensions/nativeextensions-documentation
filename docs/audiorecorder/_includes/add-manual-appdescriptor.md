
## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.AudioRecorder</extensionID>
	<extensionID>com.distriqt.Core</extensionID>
	
	<extensionID>androidx.core</extensionID>
</extensions>
```



## Android 


### Manifest Additions

The AudioRecorder extension requires a few additions to the manifest to be able to 
start certain activities and get access to the users microphone.

You should add the listing below to your manifest, take particular attention to 
the `RECORD_AUDIO` which is required to access to users microphone and the 
`AuthorisationActivity` which is required on recent versions of Android to 
request permissions at runtime.


```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	
	<uses-permission android:name="android.permission.RECORD_AUDIO"/>
	<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

	<application>

		<activity android:name="com.distriqt.core.auth.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:exported="false" />

	</application>

</manifest>
```

