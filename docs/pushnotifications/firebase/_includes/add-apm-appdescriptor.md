

Updating your application descriptor will insert the required `extensionID`'s and generate the manifest and info additions for your application. 

You update your application descriptor by running:

```
apm generate app-descriptor src/MyApp-app.xml
```

Change the path (`src/MyApp-app.xml`) to point to your application descriptor.

:::note Build Types
If you setup a development build type you can update your app descriptor with this configuration by using :

```
apm -b development generate app-descriptor src/MyApp-app.xml
```

Or you could maintain a separate "development" app descriptor by changing the output eg:

```
apm -b development generate app-descriptor src/MyApp-dev-app.xml
```
:::

:::caution
This will modify your application descriptor replacing the manifest additions and info additions with the ones generated from `apm`. 

You should backup your application descriptor before running this command to ensure you don't lose any information.

If you need to insert custom data into these sections see the guides for [Android](https://github.com/airsdk/apm/wiki/Usage-Generate#android) and [iOS](https://github.com/airsdk/apm/wiki/Usage-Generate#ios)
:::

