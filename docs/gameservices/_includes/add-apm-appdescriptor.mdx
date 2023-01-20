

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



### iOS 

If you are supporting saved games on Game Center then you must add the additional configuration for iCloud. You should do this **before** generating your application descriptor.

Firstly add a custom iOS configuration file by running:

```
apm generate config ios
```

This should produce `config/ios/InfoAdditions.xml` and `config/ios/Entitlements.xml` files alongside your project.

Edit the `config/ios/Entitlements.xml` file to resemble the following:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>

    <!-- GAME CENTER SAVED GAMES ADDITIONS -->
    <!-- You only need the following lines if you are going to support GameCenter Saves -->
    <key>com.apple.developer.ubiquity-container-identifiers</key>
    <array>
        <string>${iosContainerIdentifier}</string>
    </array>
    
    <key>com.apple.developer.ubiquity-kvstore-identifier</key>
    <string>${iosKvstoreIdentifier}</string> 
    
</dict>
</plist>
```

Then set the configuration values in your project by running:

```
apm project config set iosContainerIdentifier CONTAINER_IDENTIFIER
apm project config set iosKvstoreIdentifier KVSTORE_IDENTIFIER
```

The container identifier should be the container you created in [Setup Game Center](setup-gamecenter#saved-games) and the kvstore identifier should be your iOS team id followed by your application (bundle) id.  

For example:

```
apm project config set iosContainerIdentifier iCloud.com.distriqt.test.testcontainer
apm project config set iosKvstoreIdentifier XXXXXXYYY.com.distriqt.test
```

Once you have added this configuration run the steps above to update / generate your application descriptor.


:::caution tvOS
Note: **Saved games are not supported on Apple tvOS.** If you are supporting this platform you should not add the container to your application descriptor. If you are supporting both platforms and utilising saved games on iOS you will need to create separate projects for each and only add the above to the iOS application build.
:::
