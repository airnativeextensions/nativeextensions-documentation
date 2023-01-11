---
title: Pushy
sidebar_label: Pushy
---


:::warning Unmaintained
The pushy implementation is currently unmaintained, if you require an update to this service please contact our support and we will look into it for you.
:::



This ANE implements the Pushy iOS and Android SDKs for usage in your mobile AIR applications.

Pushy has an advantage over some of the other services as it does not require Google Play Services and as such is important to deliver notifications to users in countries like China where Google Play Services may not be fully supported.



## Create an App

The first step involves signing up and creating your first app on Pushy.

If you have already created your app on Pushy for another platform, simply configure your existing app with your Android Package Name and iOS Bundle ID in the App Settings tab and proceed to the next step.

- [Sign up for free](https://dashboard.pushy.me/register) to send unlimited notifications to up to 100 devices



## Extension

To use this service add the `com.distriqt.PushNotifications.Pushy.ane` variant of the extension to your project in place of  `com.distriqt.PushNotifications.ane`. You should only add one of the variants to your project. If you need to support multiple services please use the All Services variant.

All variants of the Push Notifications extension have the same extension id: `com.distriqt.PushNotifications` so you should add this to your extensions list in your application descriptor:

```xml
<extensions>
	...
	
	<extensionID>com.distriqt.PushNotifications</extensionID>
	
	...
</extensions>
```


## Dependencies

Many of our extensions use some common libraries, for example, the Android Support libraries.

We have to separate these libraries into separate extensions in order to avoid multiple versions of the libraries being included in your application and causing packaging conflicts. This means that you need to include some additional extensions in your application along with the main extension file.

You will add these extensions as you do with any other extension, and you need to ensure it is packaged with your application.


### Core 

The Core extension is required by this extension. You must include this extension in your application.

This extension requires you call the `init()` function at some point early in your application, generally at the same time as the initialisation of this extension. If you are using other extensions that also require the Core extension, you only need to initialise it once, before initialising the other extensions.

```actionscript
Core.init();
```

The Core extension doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).


### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries. 

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [`androidx.core`](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>


## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.PushNotifications</extensionID>
	<extensionID>com.distriqt.Core</extensionID>
	<extensionID>androidx.core</extensionID>
</extensions>
```




# iOS


## Dynamic Frameworks

The Pushy SDK requires a dynamic framework that needs to be packaged and signed with your application.

To do so you must add the `Frameworks` folder to your application package, ensuring the dynamic `PushySDK.framework` is included along with the swift libraries (dylib files).

Your `Frameworks` folder should contain:

```
PushySDK.framework
libswiftCore.dylib
libswiftCoreFoundation.dylib
libswiftCoreGraphics.dylib
libswiftCoreImage.dylib
libswiftDarwin.dylib
libswiftDispatch.dylib
libswiftFoundation.dylib
libswiftMetal.dylib
libswiftObjectiveC.dylib
libswiftos.dylib
libswiftQuartzCore.dylib
libswiftUIKit.dylib
```



## Info Additions and Entitlements

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
		<key>UIPrerenderedIcon</key>
		<true/>
		
		<key>UIDeviceFamily</key>
		<array>
			<string>1</string>
			<string>2</string>
		</array>
        
        <key>MinimumOSVersion</key>
        <string>9.0</string>

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


# Android


## Manifest Additions

You must add all the Pushy related manifest additions. 

The following shows the complete manifest additions node. You must replace `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`. Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.


```xml
<manifest android:installLocation="auto">
	<uses-sdk android:minSdkVersion="19" />

	<uses-permission android:name="android.permission.INTERNET" />
	<uses-permission android:name="android.permission.WAKE_LOCK" /> 
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
	<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
	<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />

	<application>
		<activity android:name="com.distriqt.core.auth.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:exported="false" />
		
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


		<!-- Pushy Declarations -->

		<!-- Pushy Notification Receiver -->
		<!-- Incoming push notifications will invoke the following BroadcastReceiver -->
		<receiver android:name="com.distriqt.extension.pushnotifications.pushy.PushyReceiver" android:exported="false">
			<intent-filter>
				<!-- Do not modify this -->
				<action android:name="pushy.me" />
			</intent-filter>
		</receiver>

		<!-- Pushy Update Receiver -->
		<!-- Do not modify - internal BroadcastReceiver that restarts the listener service -->
		<receiver android:name="me.pushy.sdk.receivers.PushyUpdateReceiver" android:exported="false">
			<intent-filter>
				<action android:name="android.intent.action.MY_PACKAGE_REPLACED" />
			</intent-filter>
		</receiver>

		<!-- Pushy Boot Receiver -->
		<!-- Do not modify - internal BroadcastReceiver that restarts the listener service -->
		<receiver android:name="me.pushy.sdk.receivers.PushyBootReceiver" android:exported="false">
			<intent-filter>
				<action android:name="android.intent.action.BOOT_COMPLETED"/>
				<action android:name="android.intent.action.QUICKBOOT_POWERON" />
			</intent-filter>
		</receiver>

		<!-- Pushy Socket Service -->
		<!-- Do not modify - internal service -->
		<service android:name="me.pushy.sdk.services.PushySocketService" android:stopWithTask="false" />

		<!-- Pushy Job Service (added in Pushy SDK 1.0.35) -->
		<!-- Do not modify - internal service -->
		<service android:name="me.pushy.sdk.services.PushyJobService"
			android:permission="android.permission.BIND_JOB_SERVICE"
			android:stopWithTask="false" />

		<!-- End Pushy Declarations -->



	</application>
	
</manifest>
```



## Setup the Extension and Service 

To use Pushy you must specify the `PUSHY` service type. No additional identifier is required.

```actionscript
try
{
    Core.init();
    if (PushNotifications.service.isServiceSupported( Service.PUSHY ))
    {
        var service:Service = new Service( Service.PUSHY )
                .setNotificationsWhenActive( true );

        PushNotifications.service.setup( service );
    }
}
catch (e:Error)
{
    trace( e );
}
```

You should then [request authorisation](../request-authorisation) as normal.



## Registration

[Register](../register-for-notifications) your application for notifications when you are ready. The **Pushy "device token" is returned as the "service token" in our extension**, to distinguish it from the actual device token identified from the OS (iOS in particular).

So you should send the service token to your backend for sending notifications using Pushy:

```actionscript
function registrationCompleteHandler( event:RegistrationEvent ):void
{
    trace( "device token:  " + PushNotifications.service.getDeviceToken() );
    trace( "service token: " + PushNotifications.service.getServiceToken() );
    
    // Send the servive token to your backend for notifications
}
```

> 
> The device token may be different from the service token so it is important to use the service token here.
>
