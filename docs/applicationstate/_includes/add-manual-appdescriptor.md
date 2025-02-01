
## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.ApplicationState</extensionID>
	<extensionID>com.distriqt.Core</extensionID>
	<extensionID>androidx.core</extensionID>
	<extensionID>com.jetbrains.kotlin</extensionID>
</extensions>
```



## iOS 


### Info Additions 


The following additions are for the `InfoAdditions` node of the iPhone section in your application descriptor:

```xml
<iPhone>
	<InfoAdditions><![CDATA[

		HERE

	]]></InfoAdditions>
</iPhone>
```



## Android 

### Manifest Additions

The ApplicationState extension requires a few additions to the manifest to be able to start certain activities. You should add the listing below to your manifest.

:::caution
Ensure you replace:
-  `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`. Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.
:::


```xml
<manifest android:installLocation="auto" >
  <uses-sdk android:minSdkVersion="21" android:targetSdkVersion="34"/>

  <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
  <uses-permission android:name="android.permission.FOREGROUND_SERVICE_SPECIAL_USE" />
  <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>

  <application>
    <meta-data android:name="android.max_aspect" android:value="2.5"/>
    <meta-data android:name="android.notch_support" android:value="true"/>
    
	<service android:name="com.distriqt.extension.applicationstate.controller.RestartAppService"
      android:exported="true"
      android:permission="android.permission.BIND_ACCESSIBILITY_SERVICE"
      android:foregroundServiceType="specialUse">
      <intent-filter>
        <action android:name="android.accessibilityservice.AccessibilityService"/>
      </intent-filter>
    </service>
    <receiver android:name="com.distriqt.extension.applicationstate.controller.ApplicationStateMonitor" android:exported="true">
      <intent-filter>
        <action android:name="android.intent.action.SCREEN_ON"/>
        <action android:name="android.intent.action.SCREEN_OFF"/>
      </intent-filter>
    </receiver>
    <receiver android:name="com.distriqt.extension.applicationstate.controller.BootReceiver" android:exported="true" android:permission="android.permission.RECEIVE_BOOT_COMPLETED">
      <intent-filter>
        <action android:name="android.intent.action.BOOT_COMPLETED"/>
        <category android:name="android.intent.category.DEFAULT"/>
      </intent-filter>
    </receiver>

	<!-- CORE -->
    <activity android:name="com.distriqt.core.auth.AuthorisationActivity" android:exported="false" android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
  </application>
</manifest>
```




