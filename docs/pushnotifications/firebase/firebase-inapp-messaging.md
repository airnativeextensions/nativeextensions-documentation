---
title: Firebase InApp Messaging
sidebar_label: Firebase InApp Messaging
---


>
> **Important**: You must have performed the setup process outlined in [Add the Extension](../add-the-extension) **and** [Setup Firebase Cloud Messaging](firebase-cloud-messaging) before performing these additional setup steps.
>

 
*Firebase In-App Messaging helps you engage your app's active users by sending them targeted, contextual messages that encourage them to use key app features. For example, you could send an in-app message to get users to subscribe, watch a video, complete a level, or buy an item. You can customize messages as cards, banners, modals, or images, and set up triggers so that they appear exactly when they'd benefit your users most.*

*Use Firebase In-App Messaging to encourage exploration and discovery: highlight a sale or coupon in your ecommerce app, give clues or tips in your game, or prompt a like or share in your social media app.*


## Required ANEs

### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries. 

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following additional extensions:

- [io.reactivex](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/io.reactivex.ane)
- [io.grpc](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/io.grpc.ane)
- [com.google.code.gson](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.code.gson.ane)
- [com.google.guava](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/com.google.guava.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>


### Square ANEs

Due to several of our ANE's using the [Square open source libraries](http://square.github.io/) the libraries have been separated into a separate ANEs allowing you to avoid conflicts and duplicate definitions. This means that you need to include the some of the square native extensions in your application along with this extension.

You will add these extensions as you do with any other ANE, and you need to ensure it is packaged with your application.

Firebase InAppMessaging requires the following Square extensions:

- [`com.distriqt.square.okhttp`](https://github.com/distriqt/ANE-SquareLibs/raw/master/lib/com.distriqt.square.okhttp.ane)
- [`com.distriqt.square.okhttp3`](https://github.com/distriqt/ANE-SquareLibs/raw/master/lib/com.distriqt.square.okhttp.ane)
- [`com.distriqt.square.picasso`](https://github.com/distriqt/ANE-SquareLibs/raw/master/lib/com.distriqt.square.okhttp.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-SquareLibs](https://github.com/distriqt/ANE-SquareLibs).




## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.PushNotifications</extensionID>
    <extensionID>com.distriqt.Core</extensionID>

    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.CloudMessaging</extensionID>

    <extensionID>com.google.firebase.core</extensionID>
    <extensionID>com.google.android.datatransport</extensionID>
    <extensionID>com.google.dagger</extensionID>
    <extensionID>com.google.protobuflite</extensionID>
    <extensionID>androidx.core</extensionID>
    <extensionID>androidx.browser</extensionID>
    <extensionID>androidx.appcompat</extensionID>
    <extensionID>androidx.cardview</extensionID>
    <extensionID>androidx.constraintlayout</extensionID>
    <extensionID>androidx.vectordrawable</extensionID>

    <extensionID>com.distriqt.CustomResources</extensionID>


    <!-- InAppMessaging -->
    <extensionID>com.distriqt.square.okhttp</extensionID>
    <extensionID>com.distriqt.square.okhttp3</extensionID>
    <extensionID>com.distriqt.square.picasso</extensionID>

    <extensionID>io.reactivex</extensionID>
    <extensionID>io.grpc</extensionID>
    <extensionID>com.google.code.gson</extensionID>
    <extensionID>com.google.guava</extensionID>

</extensions>
```


# Android 

## Manifest Additions

You must add all the Firebase related manifest additions along with several additions for Cloud Messaging and InApp Messaging. 

You must replace `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`. Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.

For InApp Messaging you will need to add the picasso provider:

```xml
<!-- picasso -->
<provider
    android:name="com.squareup.picasso.PicassoProvider"
    android:authorities="APPLICATION_PACKAGE.com.squareup.picasso"
    android:exported="false" />
```

and update the component discovery service (see below) to include:

```xml
<meta-data
    android:name="com.google.firebase.components:com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplayRegistrar"
    android:value="com.google.firebase.components.ComponentRegistrar" />
<meta-data
    android:name="com.google.firebase.components:com.google.firebase.inappmessaging.FirebaseInAppMessagingRegistrar"
    android:value="com.google.firebase.components.ComponentRegistrar" />
<meta-data
    android:name="com.google.firebase.components:com.google.firebase.abt.component.AbtRegistrar"
    android:value="com.google.firebase.components.ComponentRegistrar" />
```


The following shows the complete manifest additions node.

```xml
<manifest android:installLocation="auto">
	
	<uses-permission android:name="android.permission.INTERNET" />
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
	<uses-permission android:name="android.permission.WAKE_LOCK" />
	
	<!-- OPTIONAL -->
	<uses-permission android:name="android.permission.VIBRATE"/>
	<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
	
	<uses-permission android:name="com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE" /> 
	<uses-permission android:name="com.google.android.c2dm.permission.RECEIVE" />
	<permission android:name="APPLICATION_PACKAGE.permission.C2D_MESSAGE" android:protectionLevel="signature" />
	<uses-permission android:name="APPLICATION_PACKAGE.permission.C2D_MESSAGE" />
	
	<application>
		<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version" />

		<activity android:name="com.google.android.gms.common.api.GoogleApiActivity" 
			android:theme="@android:style/Theme.Translucent.NoTitleBar" 
			android:exported="false"/>


		<!-- NOTIFICATIONS -->
		<receiver android:name="com.distriqt.extension.pushnotifications.notifications.receivers.NotificationReceiver">
			<intent-filter>
				<action android:name="APPLICATION_PACKAGE.NOTIFICATION_SELECTED" />
				<action android:name="APPLICATION_PACKAGE.NOTIFICATION_DELETED" />
				<action android:name="APPLICATION_PACKAGE.NOTIFICATION_ACTION" />
				<data android:scheme="dtpn" />
			</intent-filter>
			<intent-filter>
				<action android:name="android.intent.action.BOOT_COMPLETED" />
			</intent-filter>
		</receiver>
		<provider
			android:name="com.distriqt.extension.pushnotifications.content.FileProvider"
			android:authorities="APPLICATION_PACKAGE.pushnotificationsfileprovider"
			android:grantUriPermissions="true"
			android:exported="false">
			<meta-data
				android:name="android.support.FILE_PROVIDER_PATHS"
				android:resource="@xml/distriqt_pushnotifications_paths" />
		</provider>





        <!-- FIREBASE INAPP MESSAGING -->
        <!-- picasso -->
        <provider
            android:name="com.squareup.picasso.PicassoProvider"
            android:authorities="APPLICATION_PACKAGE.com.squareup.picasso"
            android:exported="false" />
		
		


		<!-- FIREBASE CLOUD MESSAGING -->
		<meta-data android:name="com.google.firebase.messaging.default_notification_icon" android:resource="@drawable/ic_stat_distriqt" />
		<meta-data android:name="com.google.firebase.messaging.default_notification_color" android:resource="@color/blue" />
		<meta-data android:name="com.google.firebase.messaging.default_notification_channel_id" android:value="test_sound_res_channel"/>

		<service android:name="com.distriqt.extension.pushnotifications.fcm.FcmMessagingService">
			<intent-filter>
				<action android:name="com.google.firebase.MESSAGING_EVENT"/>
			</intent-filter>
		</service>
		<service
			android:name="com.distriqt.extension.pushnotifications.fcm.FcmInstanceIDService"
			android:exported="true">
			<intent-filter>
				<action android:name="com.google.firebase.INSTANCE_ID_EVENT"/>
			</intent-filter>
		</service>
		<receiver
			android:name="com.google.firebase.iid.FirebaseInstanceIdReceiver"
			android:exported="true"
			android:permission="com.google.android.c2dm.permission.SEND" >
			<intent-filter>
				<action android:name="com.google.android.c2dm.intent.RECEIVE" />
			</intent-filter>
		</receiver>



		<!-- FIREBASE CORE -->
		<receiver
			android:name="com.google.android.gms.measurement.AppMeasurementReceiver"
			android:enabled="true"
			android:exported="false" >
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
		<service
			android:name="com.google.firebase.components.ComponentDiscoveryService"
			android:directBootAware="true"
			android:exported="false" >
			<meta-data
				android:name="com.google.firebase.components:com.google.firebase.analytics.connector.internal.AnalyticsConnectorRegistrar"
				android:value="com.google.firebase.components.ComponentRegistrar" />
			<meta-data
				android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsRegistrar"
				android:value="com.google.firebase.components.ComponentRegistrar" />

			<meta-data
				android:name="com.google.firebase.components:com.google.firebase.dynamicloading.DynamicLoadingRegistrar"
				android:value="com.google.firebase.components.ComponentRegistrar" />

			<!-- Firebase Cloud Messaging -->
			<meta-data
				android:name="com.google.firebase.components:com.google.firebase.iid.Registrar"
				android:value="com.google.firebase.components.ComponentRegistrar" />
			<meta-data
				android:name="com.google.firebase.components:com.google.firebase.messaging.FirebaseMessagingRegistrar"
				android:value="com.google.firebase.components.ComponentRegistrar" />
			<meta-data
				android:name="com.google.firebase.components:com.google.firebase.datatransport.TransportRegistrar"
				android:value="com.google.firebase.components.ComponentRegistrar" />


            <!-- Firebase InAppMessaging -->
            <meta-data
                android:name="com.google.firebase.components:com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplayRegistrar"
                android:value="com.google.firebase.components.ComponentRegistrar" />
            <meta-data
                android:name="com.google.firebase.components:com.google.firebase.inappmessaging.FirebaseInAppMessagingRegistrar"
                android:value="com.google.firebase.components.ComponentRegistrar" />
            <meta-data
                android:name="com.google.firebase.components:com.google.firebase.abt.component.AbtRegistrar"
                android:value="com.google.firebase.components.ComponentRegistrar" />

		</service>

		<provider
			android:name="com.google.firebase.provider.FirebaseInitProvider"
			android:authorities="APPLICATION_PACKAGE.firebaseinitprovider"
			android:exported="false"
			android:initOrder="100" />


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
	android:name="com.google.firebase.components:com.google.firebase.analytics.connector.internal.AnalyticsConnectorRegistrar"
	android:value="com.google.firebase.components.ComponentRegistrar" />
<meta-data
	android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsRegistrar"
	android:value="com.google.firebase.components.ComponentRegistrar" />
<meta-data
	android:name="com.google.firebase.components:com.google.firebase.dynamicloading.DynamicLoadingRegistrar"
	android:value="com.google.firebase.components.ComponentRegistrar" />
```

- Cloud Messaging (FCM):

```xml
<meta-data
	android:name="com.google.firebase.components:com.google.firebase.iid.Registrar"
	android:value="com.google.firebase.components.ComponentRegistrar" />
<meta-data
	android:name="com.google.firebase.components:com.google.firebase.messaging.FirebaseMessagingRegistrar"
	android:value="com.google.firebase.components.ComponentRegistrar" />
<meta-data
	android:name="com.google.firebase.components:com.google.firebase.datatransport.TransportRegistrar"
	android:value="com.google.firebase.components.ComponentRegistrar" />
```

- InApp Messaging:

```xml
<meta-data
    android:name="com.google.firebase.components:com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplayRegistrar"
    android:value="com.google.firebase.components.ComponentRegistrar" />
<meta-data
    android:name="com.google.firebase.components:com.google.firebase.inappmessaging.FirebaseInAppMessagingRegistrar"
    android:value="com.google.firebase.components.ComponentRegistrar" />
<meta-data
    android:name="com.google.firebase.components:com.google.firebase.abt.component.AbtRegistrar"
    android:value="com.google.firebase.components.ComponentRegistrar" />
```



# iOS 

Nothing additional required for iOS.
