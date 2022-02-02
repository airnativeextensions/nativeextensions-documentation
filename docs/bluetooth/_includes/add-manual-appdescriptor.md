
## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Bluetooth</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
</extensions>
```


## Android 

### Manifest Additions

Application descriptor additions are required to give your application permission to use the bluetooth 
functionality on the device. If you require the ability to access the enable function directly, you'll 
need to add the BLUETOOTH_ADMIN permission as well as the normal BLUETOOTH permission.

You will need to add the following to your application descriptor.

```xml
<manifest android:installLocation="auto">

	<uses-permission android:name="android.permission.BLUETOOTH"/>
	<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
	
</manifest>
```

