
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.PushNotifications</extensionID>
	<extensionID>com.distriqt.Core</extensionID>
</extensions>
```

### iOS

#### Info Additions and Entitlements

Push notifications require a few additions to the Info plist and Entitlements section 
of your application to correctly configure your application for push notifications. 

You should add the listing below to application descriptor iPhone node.

You must replace the `BUNDLE_SEED_ID` and `BUNDLE_IDENTIFIER` with the information you
gathered when setting up your application. Also make sure you set the environment 
correctly either using production or development, both are shown in the example 
below with the production version commented out. More on this below.

```xml
<iPhone>
	<InfoAdditions><![CDATA[
	]]></InfoAdditions>
	<requestedDisplayResolution>high</requestedDisplayResolution>
	<Entitlements><![CDATA[
		
		<!-- DEVELOPMENT -->
		<key>get-task-allow</key>
		<true/>
		<key>aps-environment</key>
		<string>development</string>
		
		<!-- PRODUCTION -->
		<!--
		<key>get-task-allow</key>
		<false/>
		<key>aps-environment</key>
		<string>production</string>
		-->
		
		<key>application-identifier</key>
		<string>BUNDLE_SEED_ID.BUNDLE_IDENTIFIER</string>
		<key>keychain-access-groups</key>
		<array>
			<string>BUNDLE_SEED_ID.*</string>
		</array>
		
	]]></Entitlements>
</iPhone>
```


The first entitlement field is the `aps-environment`. This field indicates whether 
we are using the development or the production environment. It must be either 
`development` or `production` and depends on which configuration you are using. 
If you are running a debug build you should use development. If you are looking 
to publish the application to the AppStore, you should use production.

You should have noted the `BUNDLE_SEED_ID` (or App ID Prefix) and `BUNDLE_IDENTIFIER` 
when you were setting up your application in the iOS developer center. 
The seed id should be a unique ten character string and the identifier should be 
similar to your AIR application id.


:::note 
Note the difference between a development and production / adhoc entitlements. The `get-task-allow` and `aps-environment` must be set correctly for your build.

These values **must** match the values in your provisioning profile, ie you must have setup push notifications for the matching environment.
:::



