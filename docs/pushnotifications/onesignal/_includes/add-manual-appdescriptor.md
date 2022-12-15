
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.PushNotifications</extensionID>
	<extensionID>com.distriqt.Core</extensionID>

	<extensionID>com.distriqt.playservices.Base</extensionID>
	<extensionID>com.distriqt.playservices.CloudMessaging</extensionID>
	<extensionID>com.google.firebase.core</extensionID>

	<extensionID>androidx.appcompat</extensionID>
	<extensionID>androidx.browser</extensionID>
	<extensionID>androidx.cardview</extensionID>
	<extensionID>androidx.constraintlayout</extensionID>
	<extensionID>androidx.core</extensionID>
	<extensionID>androidx.emoji2</extensionID>
	<extensionID>androidx.exifinterface</extensionID>
	<extensionID>androidx.room</extensionID>
	<extensionID>androidx.vectordrawable</extensionID>
	<extensionID>androidx.work</extensionID>

	<extensionID>com.jetbrains.kotlin</extensionID>
	<extensionID>com.google.android.datatransport</extensionID>
	<extensionID>com.google.dagger</extensionID>
	<extensionID>com.google.protobuflite</extensionID>
	<extensionID>com.google.code.gson</extensionID>
	<extensionID>com.google.guava</extensionID>
	<extensionID>com.bumptech.glide</extensionID>
	<extensionID>io.reactivex</extensionID>
	<extensionID>io.grpc</extensionID>
</extensions>
```

### iOS

Firstly make sure you have generated your iOS Push Certificates. You can follow the guide by OneSignal:

- [Generate an iOS Push Certificate](https://documentation.onesignal.com/docs/generate-an-ios-push-certificate)

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

        <key>UIBackgroundModes</key>
		<array>
			<string>remote-notification</string>
		</array>

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

### Android

Firstly make sure you have generated your Google Service API Key. You can follow the guide by OneSignal:

- [Generate a Google Server API Key](https://documentation.onesignal.com/docs/generate-a-google-server-api-key)
- [Use an existing Firebase project](https://documentation.onesignal.com/docs/firebase-cloud-messaging-fcm#section-sender-id-server-key)

#### Manifest Additions

You must add all the OneSignal related manifest additions along with several additions for Cloud Messaging. This includes all the manifest additions required for Firebase core / analytics implementation.

The following shows the complete manifest additions node. You must replace `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `APPLICATION_PACKAGE`.
Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.

```xml
<manifest android:installLocation="auto">
    <uses-sdk android:targetSdkVersion="31" />

	<uses-permission android:name="android.permission.INTERNET" />
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
	<uses-permission android:name="android.permission.WAKE_LOCK" />
	<uses-permission android:name="android.permission.VIBRATE" />
	<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />

	<uses-permission android:name="com.google.android.c2dm.permission.RECEIVE" />
	<permission android:name="APPLICATION_PACKAGE.permission.C2D_MESSAGE" android:protectionLevel="signature" />
	<uses-permission android:name="APPLICATION_PACKAGE.permission.C2D_MESSAGE" />
	<uses-permission android:name="com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE" />
	<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
	
    <!-- BADGE -->
	<uses-permission android:name="com.sec.android.provider.badge.permission.READ" />
    <uses-permission android:name="com.sec.android.provider.badge.permission.WRITE" />
    <uses-permission android:name="com.htc.launcher.permission.READ_SETTINGS" />
    <uses-permission android:name="com.htc.launcher.permission.UPDATE_SHORTCUT" />
    <uses-permission android:name="com.sonyericsson.home.permission.BROADCAST_BADGE" />
    <uses-permission android:name="com.sonymobile.home.permission.PROVIDER_INSERT_BADGE" />
    <uses-permission android:name="com.anddoes.launcher.permission.UPDATE_COUNT" />
    <uses-permission android:name="com.majeur.launcher.permission.UPDATE_BADGE" />
    <uses-permission android:name="com.huawei.android.launcher.permission.CHANGE_BADGE" />
    <uses-permission android:name="com.huawei.android.launcher.permission.READ_SETTINGS" />
    <uses-permission android:name="com.huawei.android.launcher.permission.WRITE_SETTINGS" />
    <uses-permission android:name="android.permission.READ_APP_BADGE" />
    <uses-permission android:name="com.oppo.launcher.permission.READ_SETTINGS" />
    <uses-permission android:name="com.oppo.launcher.permission.WRITE_SETTINGS" />
    <uses-permission android:name="me.everything.badger.permission.BADGE_COUNT_READ" />
    <uses-permission android:name="me.everything.badger.permission.BADGE_COUNT_WRITE" />


	<application android:appComponentFactory="androidx.core.app.CoreComponentFactory">
		<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version" />

		<activity android:name="com.google.android.gms.common.api.GoogleApiActivity"
			android:theme="@android:style/Theme.Translucent.NoTitleBar"
			android:exported="false"/>


		<provider
			android:name="com.distriqt.extension.pushnotifications.content.FileProvider"
			android:authorities="APPLICATION_PACKAGE.pushnotificationsfileprovider"
			android:grantUriPermissions="true"
			android:exported="false">
			<meta-data
				android:name="android.support.FILE_PROVIDER_PATHS"
				android:resource="@xml/distriqt_pushnotifications_paths" />
		</provider>


        <!-- ONE SIGNAL -->
        <meta-data 
			android:name="com.onesignal.NotificationServiceExtension" 
			android:value="com.distriqt.extension.pushnotifications.onesignal.NotificationServiceExtension" />

        <receiver
            android:name="com.onesignal.FCMBroadcastReceiver"
			android:exported="true"
            android:permission="com.google.android.c2dm.permission.SEND" >

            <!-- High priority so OneSignal payloads can be filtered from other FCM receivers -->
            <intent-filter android:priority="999" >
                <action android:name="com.google.android.c2dm.intent.RECEIVE" />
                <category android:name="APPLICATION_PACKAGE" />
            </intent-filter>
        </receiver>

        <service
			android:name="com.onesignal.FCMIntentService"
			android:exported="false" />
		<service
			android:name="com.onesignal.FCMIntentJobService"
			android:exported="false"
			android:permission="android.permission.BIND_JOB_SERVICE" />
		<service
			android:name="com.onesignal.SyncService"
			android:exported="false"
			android:stopWithTask="true" />
		<service
			android:name="com.onesignal.SyncJobService"
			android:exported="false"
			android:permission="android.permission.BIND_JOB_SERVICE" />

		<activity
			android:name="com.onesignal.PermissionsActivity"
			android:exported="false"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />

		<receiver
			android:name="com.onesignal.NotificationDismissReceiver"
			android:exported="true" />
		<receiver
			android:name="com.onesignal.BootUpReceiver"
			android:exported="true" >
			<intent-filter>
				<action android:name="android.intent.action.BOOT_COMPLETED" />
				<action android:name="android.intent.action.QUICKBOOT_POWERON" />
			</intent-filter>
		</receiver>
		<receiver
			android:name="com.onesignal.UpgradeReceiver"
			android:exported="true" >
			<intent-filter>
				<action android:name="android.intent.action.MY_PACKAGE_REPLACED" />
			</intent-filter>
		</receiver>

		<activity
			android:name="com.onesignal.NotificationOpenedReceiver"
			android:excludeFromRecents="true"
			android:exported="true"
			android:noHistory="true"
			android:taskAffinity=""
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />
		<activity
			android:name="com.onesignal.NotificationOpenedReceiverAndroid22AndOlder"
			android:excludeFromRecents="true"
			android:exported="true"
			android:noHistory="true"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />
		<activity
			android:name="com.google.android.gms.common.api.GoogleApiActivity"
			android:exported="false"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" />

		<receiver
			android:name="com.google.firebase.iid.FirebaseInstanceIdReceiver"
			android:exported="true"
			android:permission="com.google.android.c2dm.permission.SEND" >
			<intent-filter>
				<action android:name="com.google.android.c2dm.intent.RECEIVE" />
			</intent-filter>
		</receiver>
		<!--
				FirebaseMessagingService performs security checks at runtime,
				but set to not exported to explicitly avoid allowing another app to call it.
		-->
		<service
			android:name="com.google.firebase.messaging.FirebaseMessagingService"
			android:directBootAware="true"
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
		</service>

		<provider
			android:name="com.google.firebase.provider.FirebaseInitProvider"
			android:authorities="APPLICATION_PACKAGE.firebaseinitprovider"
			android:directBootAware="true"
			android:exported="false"
			android:initOrder="100" />

		<meta-data
			android:name="com.google.android.gms.version"
			android:value="@integer/google_play_services_version" />

		<provider
			android:name="androidx.startup.InitializationProvider"
			android:authorities="APPLICATION_PACKAGE.androidx-startup"
			android:exported="false" >
			<meta-data
				android:name="androidx.emoji2.text.EmojiCompatInitializer"
				android:value="androidx.startup" />
			<meta-data
				android:name="androidx.work.WorkManagerInitializer"
				android:value="androidx.startup" />
			<meta-data
				android:name="androidx.lifecycle.ProcessLifecycleInitializer"
				android:value="androidx.startup" />
		</provider>

		<service
			android:name="androidx.work.impl.background.systemalarm.SystemAlarmService"
			android:directBootAware="false"
			android:enabled="@bool/enable_system_alarm_service_default"
			android:exported="false" />
		<service
			android:name="androidx.work.impl.background.systemjob.SystemJobService"
			android:directBootAware="false"
			android:enabled="@bool/enable_system_job_service_default"
			android:exported="true"
			android:permission="android.permission.BIND_JOB_SERVICE" />
		<service
			android:name="androidx.work.impl.foreground.SystemForegroundService"
			android:directBootAware="false"
			android:enabled="@bool/enable_system_foreground_service_default"
			android:exported="false" />

		<receiver
			android:name="androidx.work.impl.utils.ForceStopRunnable$BroadcastReceiver"
			android:directBootAware="false"
			android:enabled="true"
			android:exported="false" />
		<receiver
			android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$BatteryChargingProxy"
			android:directBootAware="false"
			android:enabled="false"
			android:exported="false" >
			<intent-filter>
				<action android:name="android.intent.action.ACTION_POWER_CONNECTED" />
				<action android:name="android.intent.action.ACTION_POWER_DISCONNECTED" />
			</intent-filter>
		</receiver>
		<receiver
			android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$BatteryNotLowProxy"
			android:directBootAware="false"
			android:enabled="false"
			android:exported="false" >
			<intent-filter>
				<action android:name="android.intent.action.BATTERY_OKAY" />
				<action android:name="android.intent.action.BATTERY_LOW" />
			</intent-filter>
		</receiver>
		<receiver
			android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$StorageNotLowProxy"
			android:directBootAware="false"
			android:enabled="false"
			android:exported="false" >
			<intent-filter>
				<action android:name="android.intent.action.DEVICE_STORAGE_LOW" />
				<action android:name="android.intent.action.DEVICE_STORAGE_OK" />
			</intent-filter>
		</receiver>
		<receiver
			android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$NetworkStateProxy"
			android:directBootAware="false"
			android:enabled="false"
			android:exported="false" >
			<intent-filter>
				<action android:name="android.net.conn.CONNECTIVITY_CHANGE" />
			</intent-filter>
		</receiver>
		<receiver
			android:name="androidx.work.impl.background.systemalarm.RescheduleReceiver"
			android:directBootAware="false"
			android:enabled="false"
			android:exported="false" >
			<intent-filter>
				<action android:name="android.intent.action.BOOT_COMPLETED" />
				<action android:name="android.intent.action.TIME_SET" />
				<action android:name="android.intent.action.TIMEZONE_CHANGED" />
			</intent-filter>
		</receiver>
		<receiver
			android:name="androidx.work.impl.background.systemalarm.ConstraintProxyUpdateReceiver"
			android:directBootAware="false"
			android:enabled="@bool/enable_system_alarm_service_default"
			android:exported="false" >
			<intent-filter>
				<action android:name="androidx.work.impl.background.systemalarm.UpdateProxies" />
			</intent-filter>
		</receiver>
		<receiver
			android:name="androidx.work.impl.diagnostics.DiagnosticsReceiver"
			android:directBootAware="false"
			android:enabled="true"
			android:exported="true"
			android:permission="android.permission.DUMP" >
			<intent-filter>
				<action android:name="androidx.work.diagnostics.REQUEST_DIAGNOSTICS" />
			</intent-filter>
		</receiver>

		<service
			android:name="androidx.room.MultiInstanceInvalidationService"
			android:directBootAware="true"
			android:exported="false" />
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



### Amazon

Amazon is a specific implementation of Android and requires some additional manifest additions if you are distributing your application via the Amazon AppStore.

Firstly add the amazon namespace to your manifest tag:

```xml
<manifest android:installLocation="auto"
    xmlns:amazon="http://schemas.amazon.com/apk/res/android"
>
```

Add the following permissions:

```xml
<uses-permission android:name="com.amazon.device.messaging.permission.RECEIVE" />
<permission android:name="APPLICATION_PACKAGE.permission.RECEIVE_ADM_MESSAGE" android:protectionLevel="signature" />
<uses-permission android:name="APPLICATION_PACKAGE.permission.RECEIVE_ADM_MESSAGE" />
```

In the `application` tag, add the following:

```xml
<amazon:enable-feature android:name="com.amazon.device.messaging" android:required="false"/>
<service android:name="com.onesignal.ADMMessageHandler" android:exported="false" />
<service android:name="com.onesignal.ADMMessageHandlerJob"
         android:permission="android.permission.BIND_JOB_SERVICE"
         android:exported="false" />
<receiver android:name="com.onesignal.ADMMessageHandler$Receiver"
          android:permission="com.amazon.device.messaging.permission.SEND" >
    <intent-filter>
        <action android:name="com.amazon.device.messaging.intent.REGISTRATION" />
        <action android:name="com.amazon.device.messaging.intent.RECEIVE" />
        <category android:name="APPLICATION_PACKAGE" />
    </intent-filter>
</receiver>
```

Follow the [guide here](https://documentation.onesignal.com/docs/generate-an-amazon-api-key) to generate your Amazon API Key. You should end up with a file (`api_key.txt`) that you will need to add to the root of your application and ensure it is packaged into your application.

:::warning
Do not place the `api_key.txt` file in an `assets` folder as mentioned in the OneSignal documentation. Any assets from AIR are automatically added into this directory, so add it at the top level of your application package.
:::

:::info
You will need to be using a recent version of AIR to be able to support these additional manifest namespaces and tags.
:::

