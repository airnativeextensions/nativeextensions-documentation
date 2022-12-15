
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.PushNotifications</extensionID>
	<extensionID>com.distriqt.Core</extensionID>

	<extensionID>com.distriqt.playservices.Base</extensionID>
	<extensionID>com.distriqt.playservices.CloudMessaging</extensionID>
	<extensionID>com.google.firebase.core</extensionID>

	<extensionID>androidx.browser</extensionID>
	<extensionID>androidx.appcompat</extensionID>
	<extensionID>androidx.cardview</extensionID>
	<extensionID>androidx.constraintlayout</extensionID>
	<extensionID>androidx.core</extensionID>
	<extensionID>androidx.exifinterface</extensionID>
	<extensionID>androidx.vectordrawable</extensionID>

	<extensionID>com.google.android.datatransport</extensionID>
	<extensionID>com.google.dagger</extensionID>
	<extensionID>com.google.protobuflite</extensionID>
	<extensionID>com.google.code.gson</extensionID>
	<extensionID>com.google.guava</extensionID>
	<extensionID>com.bumptech.glide</extensionID>
	<extensionID>io.reactivex</extensionID>
	<extensionID>io.grpc</extensionID>

    <extensionID>com.distriqt.square.okhttp</extensionID>
    <extensionID>com.distriqt.square.okhttp3</extensionID>

</extensions>
```


### Android 

#### Manifest Additions

You must add all the Firebase related manifest additions along with several additions for Cloud Messaging. 

The following shows the complete manifest additions node. You must replace `APPLICATION_PACKAGE` with your 
AIR application's Java package name, something like `air.com.distriqt.test`.
Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.


```xml
<manifest android:installLocation="auto">
	
	<uses-permission android:name="android.permission.INTERNET" />
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
	<uses-permission android:name="android.permission.WAKE_LOCK" />
	<uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>

	<!-- OPTIONAL -->
	<uses-permission android:name="android.permission.VIBRATE"/>
	<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
	
	<uses-permission android:name="com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE" /> 
	<uses-permission android:name="com.google.android.c2dm.permission.RECEIVE" />
	<permission android:name="APPLICATION_PACKAGE.permission.C2D_MESSAGE" android:protectionLevel="signature" />
	<uses-permission android:name="APPLICATION_PACKAGE.permission.C2D_MESSAGE" />
	
	<application android:appComponentFactory="androidx.core.app.CoreComponentFactory">
		<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version" />

		<activity android:name="com.google.android.gms.common.api.GoogleApiActivity" 
			android:theme="@android:style/Theme.Translucent.NoTitleBar" 
			android:exported="false"/>


		<!-- NOTIFICATIONS -->
		<receiver android:name="com.distriqt.extension.pushnotifications.notifications.receivers.NotificationReceiver" android:exported="false">
			<intent-filter>
				<action android:name="android.intent.action.BOOT_COMPLETED" />
				<action android:name="android.intent.action.QUICKBOOT_POWERON" />
			</intent-filter>
			<intent-filter>
				<action android:name="APPLICATION_PACKAGE.NOTIFICATION_DELETED" />
				<action android:name="APPLICATION_PACKAGE.NOTIFICATION_ACTION" />
				<data android:scheme="dtpn" />
			</intent-filter>
		</receiver>
		<activity android:name="com.distriqt.extension.pushnotifications.notifications.NotificationActivity" android:exported="false">
			<intent-filter>
				<action android:name="APPLICATION_PACKAGE.NOTIFICATION_SELECTED" />
				<action android:name="APPLICATION_PACKAGE.NOTIFICATION_ACTION" />
				<data android:scheme="dtpn" />
			</intent-filter>
		</activity>
		<provider
			android:name="com.distriqt.extension.pushnotifications.content.FileProvider"
			android:authorities="APPLICATION_PACKAGE.pushnotificationsfileprovider"
			android:grantUriPermissions="true"
			android:exported="false">
			<meta-data
				android:name="android.support.FILE_PROVIDER_PATHS"
				android:resource="@xml/distriqt_pushnotifications_paths" />
		</provider>
		<activity android:name="com.distriqt.extension.notifications.permissions.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:exported="false" />


		<!-- FIREBASE CLOUD MESSAGING -->
		<!--
				FirebaseMessagingService performs security checks at runtime,
				but set to not exported to explicitly avoid allowing another app to call it.
		-->
		<service android:name="com.distriqt.extension.pushnotifications.fcm.FcmMessagingService" android:exported="false">
			<intent-filter>
				<action android:name="com.google.firebase.MESSAGING_EVENT"/>
			</intent-filter>
		</service>
		<service
			android:name="com.google.firebase.messaging.FirebaseMessagingService"
			android:exported="false" >
			<intent-filter android:priority="-500" >
				<action android:name="com.google.firebase.MESSAGING_EVENT" />
			</intent-filter>
		</service>
		<service
			android:name="com.google.firebase.components.ComponentDiscoveryService"
			android:directBootAware="true"
			android:exported="false" >
			<meta-data
				android:name="com.google.firebase.components:com.google.firebase.messaging.FirebaseMessagingRegistrar"
				android:value="com.google.firebase.components.ComponentRegistrar" />
			<meta-data
				android:name="com.google.firebase.components:com.google.firebase.datatransport.TransportRegistrar"
				android:value="com.google.firebase.components.ComponentRegistrar" />
			<meta-data
				android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsRegistrar"
				android:value="com.google.firebase.components.ComponentRegistrar" />
			<meta-data
				android:name="com.google.firebase.components:com.google.firebase.abt.component.AbtRegistrar"
				android:value="com.google.firebase.components.ComponentRegistrar" />

			<meta-data
				android:name="com.google.firebase.components:com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplayRegistrar"
				android:value="com.google.firebase.components.ComponentRegistrar" />
			<meta-data
				android:name="com.google.firebase.components:com.google.firebase.inappmessaging.FirebaseInAppMessagingRegistrar"
				android:value="com.google.firebase.components.ComponentRegistrar" />
		</service>

		<receiver
			android:name="com.google.firebase.iid.FirebaseInstanceIdReceiver"
			android:exported="true"
			android:permission="com.google.android.c2dm.permission.SEND" >
			<intent-filter>
				<action android:name="com.google.android.c2dm.intent.RECEIVE" />
			</intent-filter>
		</receiver>

		<activity
			android:name="com.google.android.gms.common.api.GoogleApiActivity"
			android:exported="false"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />

		<provider
			android:name="com.google.firebase.provider.FirebaseInitProvider"
			android:authorities="APPLICATION_PACKAGE.firebaseinitprovider"
			android:exported="false"
			android:initOrder="100" />

		<receiver
			android:name="com.google.android.gms.measurement.AppMeasurementReceiver"
			android:enabled="true"
			android:exported="false" >
		</receiver>
		<receiver
			android:name="com.google.android.gms.measurement.AppMeasurementInstallReferrerReceiver"
			android:enabled="true"
			android:exported="true"
			android:permission="android.permission.INSTALL_PACKAGES" >
			<intent-filter>
				<action android:name="com.android.vending.INSTALL_REFERRER" />
			</intent-filter>
		</receiver>

		<service
			android:name="com.google.android.gms.measurement.AppMeasurementService"
			android:enabled="true"
			android:exported="false" />
		<service
			android:name="com.google.android.gms.measurement.AppMeasurementJobService"
			android:enabled="true"
			android:exported="false"
			android:permission="android.permission.BIND_JOB_SERVICE" />


		<!-- datatransport -->
		<service
			android:name="com.google.android.datatransport.runtime.backends.TransportBackendDiscovery"
			android:exported="false" >
			<meta-data
				android:name="backend:com.google.android.datatransport.cct.CctBackendFactory"
				android:value="cct" />
		</service>
		<service
			android:name="com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService"
			android:exported="false"
			android:permission="android.permission.BIND_JOB_SERVICE" >
		</service>

		<receiver
			android:name="com.google.android.datatransport.runtime.scheduling.jobscheduling.AlarmManagerSchedulerBroadcastReceiver"
			android:exported="false" />
		
		
		
	</application>
	
</manifest>
```


#### Component Discovery Service

The `com.google.firebase.components.ComponentDiscoveryService` is particularly important for Firebase configuration.

The meta-data tags that are added to this service specify the components that should be initialised by Firebase and you must ensure that you have added the appropriate tags for the services you are using.

Firebase Messaging depends on Analytics so you must at least include the following tags:


- Analytics:

```xml
<meta-data
	android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsRegistrar"
	android:value="com.google.firebase.components.ComponentRegistrar" />
<meta-data
	android:name="com.google.firebase.components:com.google.firebase.abt.component.AbtRegistrar"
	android:value="com.google.firebase.components.ComponentRegistrar" />
```

- Messaging (FCM):

```xml
<meta-data
	android:name="com.google.firebase.components:com.google.firebase.messaging.FirebaseMessagingRegistrar"
	android:value="com.google.firebase.components.ComponentRegistrar" />
<meta-data
	android:name="com.google.firebase.components:com.google.firebase.datatransport.TransportRegistrar"
	android:value="com.google.firebase.components.ComponentRegistrar" />
```

- In-App Messaging: 

```xml
<meta-data
	android:name="com.google.firebase.components:com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplayRegistrar"
	android:value="com.google.firebase.components.ComponentRegistrar" />
<meta-data
	android:name="com.google.firebase.components:com.google.firebase.inappmessaging.FirebaseInAppMessagingRegistrar"
	android:value="com.google.firebase.components.ComponentRegistrar" />
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

In order for the Firebase system to work well with AIR and other extensions we need
to disable the automatic delegate proxy that Firebase implements on iOS. To do so 
you must set the `FirebaseAppDelegateProxyEnabled` option to `false` in your InfoAdditions.


```xml
<iPhone>
	<InfoAdditions><![CDATA[
		
		<key>FirebaseAppDelegateProxyEnabled</key>
		<false/>

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


