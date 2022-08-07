

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




### Android `AD_ID` considerations

On Android you will find that apm automatically inserts the `AD_ID` permission to your application descriptor. 

If you wish to remove this you can create a [custom android manifest addition](https://github.com/airsdk/apm/wiki/Usage-Generate#android):


```
apm generate config android
```
 
Then edit the file created at `config/android/AndroidManifest.xml` as follows:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="com.google.android.gms.permission.AD_ID" tools:node="remove"/>

    <!-- other custom manifest additions -->

</manifest>
```

Then when you generate the manifest additions (as above) it will remove this permission if it was added from any of the extensions you have in use.

