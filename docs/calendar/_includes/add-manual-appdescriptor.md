

### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Calendar</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>androidx.core</extensionID>
</extensions>
```



### Android 

#### Manifest Additions

The Calendar ANE requires a few additions to the manifest to be able to start certain activities and get access to the users calendar. 
You should add the listing below to your manifest:

```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	
	<uses-permission android:name="android.permission.READ_CALENDAR"/>
	<uses-permission android:name="android.permission.WRITE_CALENDAR"/>
	
	<application>
		<activity android:name="com.distriqt.extension.calendar.activities.CalendarAddEventWithUIActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:exported="false" />
	
		<activity android:name="com.distriqt.extension.calendar.permissions.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:exported="false" />
	</application>
</manifest>
```


### iOS

#### Info Additions

You now need to add some strings to display messages to the user when certain permissions are requested. As you will be [requesting authorisation](request-authorisation) to the users calendar you will need to set the usage description so the dialog displays correctly.

The following additions are for the InfoAdditions node of the iPhone section in your application descriptor:

```xml
<iPhone>
    <InfoAdditions><![CDATA[

		<key>NSCalendarsUsageDescription</key>
		<string>Access to calendar is required.</string>

    ]]></InfoAdditions>
</iPhone>
```

If you don't do this your application may be terminated by the OS.




