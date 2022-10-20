

Updating your application descriptor will insert the required `extensionID`'s and generate the manifest and info additions for your application. 

You update your application descriptor by running:

```
apm generate app-descriptor src/MyApp-app.xml
```

Change the path (`src/MyApp-app.xml`) to point to your application descriptor.

:::caution
This will modify your application descriptor replacing the manifest additions and info additions with the ones generated from `apm`. 

You should backup your application descriptor before running this command to ensure you don't lose any information.

If you need to insert custom data into these sections see the guides for [Android](https://github.com/airsdk/apm/wiki/Usage-Generate#android) and [iOS](https://github.com/airsdk/apm/wiki/Usage-Generate#ios)
:::



:::note 
`apm` does not support the legacy file provider method without some additional configuration. If you need to use this legacy method please contact our support and we will guide you through the usage.
::: 


### Queries

Since Android API v30, Google has limited the ability to discover other applications via use of the `<queries>` tag in your manifest. You must specify the applications you wish to access in this area otherwise the application won't be able to discover other applications.

Firstly, create a custom configuration by running:

```
apm generate config android
```

Then edit the manifest generated at `config/android/AndroidManifest.xml`, and add the following:

```xml
<queries>
	<provider android:authorities="group.${applicationId}.provider" />
</queries>
```

You should add a provider line for each application you are communicating with and replacing `${applicationId}` with the package name for each application.

Alternatively you can add the `QUERY_ALL_PACKAGES` permission, however this is discouraged.

```xml
<uses-permission android:name="android.permission.QUERY_ALL_PACKAGES"/>
```


