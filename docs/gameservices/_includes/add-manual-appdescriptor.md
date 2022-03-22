
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.GameServices</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>androidx.core</extensionID>
    <extensionID>androidx.appcompat</extensionID>
    <extensionID>com.jetbrains.kotlin</extensionID>
    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.Drive</extensionID>
    <extensionID>com.distriqt.playservices.Games</extensionID>
    <extensionID>com.distriqt.playservices.Auth</extensionID>
</extensions>
```




### Android

#### Manifest Additions

The Google Play Game Services require a few additions to the manifest to be able to start certain 
activities and set certain information. You should add the listing below to your manifest, replacing 
the `XXXXXXXXXXXX` with your application ID that you took note of when enabling Game Services in the 
console. (Note you must leave the `\u003` before your application id).

You should make sure your manifest contains the following:

```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	
	<application android:appComponentFactory="androidx.core.app.CoreComponentFactory">
		
		<meta-data android:name="com.google.android.gms.games.APP_ID" android:value="\u003XXXXXXXXXXXX" />
		<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version" />

		<activity
			android:name="com.google.android.gms.auth.api.signin.internal.SignInHubActivity"
			android:excludeFromRecents="true"
			android:exported="false"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />
		<service
			android:name="com.google.android.gms.auth.api.signin.RevocationBoundService"
			android:exported="true"
			android:permission="com.google.android.gms.auth.api.signin.permission.REVOCATION_NOTIFICATION"
			android:visibleToInstantApps="true" />

		<activity
			android:name="com.google.android.gms.common.api.GoogleApiActivity"
			android:exported="false"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />
		
	</application>
	
</manifest>
```

#### MultiDex Applications 

:::warning
This is enabled by default with the latest AIR builds (33.1.1.x and higher). You should no longer add the `android.multidex` extension. 

This information is for legacy developers only!
:::

If you have a large application and are supporting Android 4.x then you will need to ensure you enable your application to correctly support MultiDex to allow the application to be broken up into smaller dex packages.

This is enabled by default with releases of AIR v25+, except in the Android 4.x case where you need to change the manifest additions for the application tag to match the following and use the `MultiDexApplication`.


This will require the addition of the `androidx.multidex` extension which contains the `androidx.multidex.MultiDexApplication` implementation.

```xml
<manifest android:installLocation="auto">
	<!-- PERMISSIONS -->

	<application android:name="androidx.multidex.MultiDexApplication">

		<!-- ACTIVITIES / RECEIVERS / SERVICES -->

	</application>
</manifest>
```




### iOS 

If you are supporting saved games on Game Center then you must add the additional 
iCloud configuration lines, replacing the `CONTAINER_IDENTIFIER` and `YOUR_APPLICATION_IDENTIFIER` 
with your container identifier you created earlier.

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
	<Entitlements><![CDATA[
	
		<!-- GAME CENTER SAVED GAMES ADDITIONS -->
		<!-- You only need the following lines if you are going to support GameCenter Saves -->
		<key>com.apple.developer.ubiquity-container-identifiers</key>
		<array>
			<string>CONTAINER_IDENTIFIER</string>
		</array>
		
		<key>com.apple.developer.ubiquity-kvstore-identifier</key>
		<string>YOUR_APPLICATION_IDENTIFIER</string>
		<!-- END GAME CENTER SAVED GAMES ADDITIONS -->
		
	]]></Entitlements>
</iPhone>
```

:::caution tvOS
Note: **Saved games are not supported on Apple tvOS.** If you are supporting this platform you should not add the container to your application descriptor. If you are supporting both platforms and utilising saved games on iOS you will need to create separate application descriptors for each and only add the above to the iOS application build.
:::

More information on creating your iCloud container can be found here: [Setup GameCenter](setup-gamecenter#saved-games)
