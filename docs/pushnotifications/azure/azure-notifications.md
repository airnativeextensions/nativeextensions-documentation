---
title: Azure Notifications
sidebar_label: Azure Notifications
---

:::warning Unmaintained
The Azure implementation is currently unmaintained, if you require an update to this service please contact our support and we will look into it for you.
:::


Azure Notification Hubs provide an easy-to-use, multi-platform, scaled-out push engine. 
With a single cross-platform API call, you can easily send targeted and personalized 
push notifications to any mobile platform from any cloud or on-premises backend.

You can read more about Azure Notification Hubs [here](https://docs.microsoft.com/en-us/azure/notification-hubs/notification-hubs-push-notification-overview)

This ANE implements the requirements to register correctly with your Azure Notification
Hub, sending the required device information so your uses will automatically be registered
with Azure when you go through the normal registration process using the Azure version of 
Push Notifications.

https://portal.azure.com


## Required ANEs

To use this service add the `com.distriqt.PushNotifications.Azure.ane` variant of the extension to your project in place of  `com.distriqt.PushNotifications.ane`. You should only add one of the variants to your project. If you need to support multiple services please use the All Services variant.

All variants of the Push Notifications extension have the same extension id: `com.distriqt.PushNotifications` so you should add this to your extensions list in your application descriptor:

```xml
<extensions>
	...
	
	<extensionID>com.distriqt.PushNotifications</extensionID>
	
	...
</extensions>
```

Make sure you have added the common ANEs from the [Add the Extension](../add-the-extension) section first. This includes the Core and Android Support ANEs.


### Google Play Services

This ANE requires usage of certain aspects of the Google Play Services client library. 
The client library is available as a series of ANEs that you add into your applications packaging options. 
Each separate ANE provides a component from the Play Services client library and are used by different ANEs. 
These client libraries aren't packaged with this ANE as they are used by multiple ANEs and separating them 
will avoid conflicts, allowing you to use multiple ANEs in the one application.

This ANE requires the following Google Play Services:

- [com.distriqt.playservices.Base.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.distriqt.playservices.Base.ane)

You must include the above native extensions in your application along with this extension, 
and you need to ensure they are packaged with your application.

You can access the Google Play Services client library extensions here: [https://github.com/distriqt/ANE-GooglePlayServices](https://github.com/distriqt/ANE-GooglePlayServices).



### Firebase

To use Firebase Cloud Messaging you must include the core Firebase libraries and configure 
your Firebase application. The core libraries are available in the `com.google.firebase.core` extension alongside the Google Play Services:

- [com.google.firebase.core.ane](https://github.com/distriqt/ANE-GooglePlayServices/raw/master/lib/com.google.firebase.core.ane)


See the [Firebase configuration documentation](https://docs.airnativeextensions.com/docs/firebase/setup/configuration-files/) on how to configure your application.




## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.PushNotifications</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
	
    <extensionID>com.distriqt.playservices.Base</extensionID>
    
	<extensionID>com.google.firebase.core</extensionID>
	<extensionID>com.google.android.datatransport</extensionID>
	<extensionID>com.google.dagger</extensionID>
	<extensionID>androidx.core</extensionID>
	<extensionID>androidx.browser</extensionID>
</extensions>
```



# Android 


Azure uses FCM on Android (not on iOS), so you will need to go through the setup of Firebase for Android
in your application. See the [Firebase wiki](https://docs.airnativeextensions.com/docs/firebase/) on this process
but just ignore any iOS references.

> 
> The Microsoft documentation for this process can be found [here](https://docs.microsoft.com/en-us/azure/notification-hubs/notification-hubs-android-push-notification-google-fcm-get-started)
>

## Manifest Additions

You must add all the Firebase related manifest additions along with several additions for Cloud Messaging
and several particular additions for Azure. Please note that these are very similar to the additions for 
Firebase however they are different.

The following shows the complete manifest additions node. You must replace `APPLICATION_PACKAGE` with your 
AIR application's Java package name, something like `air.com.distriqt.test`.
Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.

>
> If any other of our ANEs require the `FileProvider` only add **one** of the references. 
> The file provider will be shared amongst our extensions.
>


```xml
<manifest android:installLocation="auto">
	<uses-sdk android:minSdkVersion="14" />
	
	<uses-permission android:name="android.permission.INTERNET" />
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
	<uses-permission android:name="android.permission.WAKE_LOCK" />
	
	<!-- OPTIONAL -->
	<uses-permission android:name="android.permission.VIBRATE"/>
	<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
	
	<uses-permission android:name="com.google.android.c2dm.permission.RECEIVE" />
	<permission android:name="APPLICATION_PACKAGE.permission.C2D_MESSAGE" android:protectionLevel="signature" />
	<uses-permission android:name="APPLICATION_PACKAGE.permission.C2D_MESSAGE" />
	
	<application>
		<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version" />

		<activity android:name="com.google.android.gms.common.api.GoogleApiActivity" 
			android:theme="@android:style/Theme.Translucent.NoTitleBar" 
			android:exported="false"/>

        
        <!-- AZURE CLOUD MESSAGING -->
        <service android:name="com.distriqt.extension.pushnotifications.azure.AzureInstanceIDService">
            <intent-filter>
                <action android:name="com.google.firebase.INSTANCE_ID_EVENT"/>
            </intent-filter>
        </service>
        <service android:name="com.distriqt.extension.pushnotifications.azure.AzureRegistrationService" android:exported="false" />
		
        <service android:name="com.distriqt.extension.pushnotifications.fcm.FcmMessagingService">
			<intent-filter>
				<action android:name="com.google.firebase.MESSAGING_EVENT"/>
			</intent-filter>
		</service>


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


			

		<!-- FIREBASE CORE -->
		<!-- analytics -->
		<receiver
			android:name="com.google.android.gms.measurement.AppMeasurementReceiver"
			android:enabled="true">
			<intent-filter>
				<action android:name="com.google.android.gms.measurement.UPLOAD"/>
			</intent-filter>
		</receiver>
		<service
			android:name="com.google.android.gms.measurement.AppMeasurementService"
			android:enabled="true"
			android:exported="false"/>
			
		<!-- common -->
		<provider
			android:authorities="APPLICATION_PACKAGE.firebaseinitprovider"
			android:name="com.google.firebase.provider.FirebaseInitProvider"
			android:exported="false"
			android:initOrder="100" />
		
		<!-- iid -->
		<receiver
			android:name="com.google.firebase.iid.FirebaseInstanceIdReceiver"
			android:exported="true"
			android:permission="com.google.android.c2dm.permission.SEND" >
			<intent-filter>
				<action android:name="com.google.android.c2dm.intent.RECEIVE" />
				<action android:name="com.google.android.c2dm.intent.REGISTRATION" />
				<category android:name="APPLICATION_PACKAGE" />
			</intent-filter>
		</receiver>
		<receiver
			android:name="com.google.firebase.iid.FirebaseInstanceIdInternalReceiver"
			android:exported="false" />
		<service
			android:name="com.google.firebase.iid.FirebaseInstanceIdService"
			android:exported="true">
			<intent-filter android:priority="-500">
				<action android:name="com.google.firebase.INSTANCE_ID_EVENT" />
			</intent-filter>
		</service>
		
		
		
	</application>
	
</manifest>
```

### MultiDex Applications 

If you have a large application and are supporting Android 4.x then you will need to ensure you enable your application to correctly support MultiDex to allow the application to be broken up into smaller dex packages.

This is enabled by default with releases of AIR v25+, except in the Android 4.x case where you need to change the manifest additions for the application tag to match the following and use the `MultiDexApplication`.


#### Using AndroidX

This will require the addition of the `androidx.multidex` extension which contains the `androidx.multidex.MultiDexApplication` implementation.

```xml
<manifest android:installLocation="auto">
	<!-- PERMISSIONS -->

	<application android:name="androidx.multidex.MultiDexApplication">

		<!-- ACTIVITIES / RECEIVERS / SERVICES -->

	</application>
</manifest>
```




# iOS 

Azure uses APNS on iOS so you will have to go through the [setup process of APNS](../apple/apple-push-notification-service)
before using Azure.

> 
> The Microsoft documentation for this process can be found [here](https://docs.microsoft.com/en-us/azure/notification-hubs/notification-hubs-ios-apple-push-notification-apns-get-started)
>

APNS requires a few additions to the Info plist and Entitlements section 
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

