

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


### Android Gradle Version 

We have updated the required gradle version used to build your application to be higher than the default AIR currently uses (May 2025). 

To specify a higher version add the following to your android node in your application descriptor:

```xml
<android>
    <gradleVersion>8.9</gradleVersion>
    <androidGradlePluginVersion>8.7.3</androidGradlePluginVersion>

  ...
</android>
```

If you don't do this you will see the following error when building your application:

```
Unexpected failure: Unable to run java: com.adobe.air.ADTException: gradle tool failed: 
FAILURE: Build failed with an exception.

...

   > BUG! exception in phase 'semantic analysis' in source unit '_BuildScript_' Unsupported class file major version 65
```

:::note
May 2025: This is not currently automatically handled by `apm` so you will need to add this manually to your application descriptor.

We are working on an update to handle this.
:::

