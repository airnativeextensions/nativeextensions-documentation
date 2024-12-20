
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.PushNotifications</extensionID>
	<extensionID>com.distriqt.Core</extensionID>

	<extensionID>com.distriqt.playservices.Base</extensionID>
	<extensionID>com.distriqt.playservices.CloudMessaging</extensionID>
	<extensionID>com.google.firebase.core</extensionID>
	<extensionID>com.google.firebase.messaging</extensionID>

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

	<uses-sdk android:minSdkVersion="21" />

	<uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
	<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
	
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
	
	<application>
		<activity android:name="com.distriqt.core.auth.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:exported="false" />

		<!-- NOTIFICATIONS -->
		<receiver android:name="com.distriqt.extension.pushnotifications.notifications.receivers.NotificationReceiver" android:exported="false">
			<intent-filter>
				<action android:name="android.intent.action.BOOT_COMPLETED" />
				<action android:name="android.intent.action.QUICKBOOT_POWERON" />
			</intent-filter>
			<intent-filter>
				<action android:name="${applicationId}.NOTIFICATION_DELETED" />
				<action android:name="${applicationId}.NOTIFICATION_ACTION" />
				<data android:scheme="dtpn" />
			</intent-filter>
		</receiver>
		<activity android:name="com.distriqt.extension.pushnotifications.notifications.NotificationActivity" android:exported="false">
			<intent-filter>
				<action android:name="${applicationId}.NOTIFICATION_SELECTED" />
				<action android:name="${applicationId}.NOTIFICATION_ACTION" />
				<data android:scheme="dtpn" />
			</intent-filter>
		</activity>
		<provider
			android:name="com.distriqt.extension.pushnotifications.content.FileProvider"
			android:authorities="${applicationId}.pushnotificationsfileprovider"
			android:grantUriPermissions="true"
			android:exported="false">
			<meta-data
				android:name="android.support.FILE_PROVIDER_PATHS"
				android:resource="@xml/distriqt_pushnotifications_paths" />
		</provider>

		<!-- FIREBASE CLOUD MESSAGING -->
		<!-- <meta-data android:name="com.google.firebase.messaging.default_notification_icon" android:resource="@drawable/ic_stat_distriqt" /> -->
		<!-- <meta-data android:name="com.google.firebase.messaging.default_notification_color" android:resource="@color/blue" /> -->
		<!-- <meta-data android:name="com.google.firebase.messaging.default_notification_channel_id" android:value="test_sound_res_channel"/> -->

		<service android:name="com.distriqt.extension.pushnotifications.fcm.FcmMessagingService" android:exported="false">
			<intent-filter>
				<action android:name="com.google.firebase.MESSAGING_EVENT"/>
			</intent-filter>
		</service>
		

	</application>

</manifest>
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


