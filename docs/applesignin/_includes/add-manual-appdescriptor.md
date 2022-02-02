
## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.AppleSignIn</extensionID>
	<extensionID>com.distriqt.Core</extensionID>
</extensions>
```



## iOS 


### Info Additions 

You will need to add the `com.apple.developer.applesignin` entitlement key to the `iPhone` / `Entitlements` node:

```xml
<key>com.apple.developer.applesignin</key>
<array>
    <string>Default</string>
</array>
```


eg:

```xml
<iPhone>
    <InfoAdditions><![CDATA[
        <key>UIDeviceFamily</key>
        <array>
            <string>1</string>
            <string>2</string>
        </array>
    ]]></InfoAdditions>
    <requestedDisplayResolution>high</requestedDisplayResolution>
    <Entitlements>
        <![CDATA[
            <key>com.apple.developer.applesignin</key>
            <array>
                <string>Default</string>
            </array>
        ]]>
    </Entitlements>
</iPhone>
```


## Android 

Nothing specific is required for the manifest additions here. You will need to ensure you have added the internet permission `android.permission.INTERNET`. 






