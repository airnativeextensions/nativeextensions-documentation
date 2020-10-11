---
title: Setup Google Play Games
sidebar_label: Setup Google Play Games
---


You must setup your application for Play Services, the following guide will help you through that.

- http://developer.android.com/google/play-services/games.html
- https://developers.google.com/games/services/console/enabling


## Getting the SHA1 signature:

The following command retrieves the SHA1 signature for the debug certificate used in Flash Builder. This will allow you to test your application from debug builds.


```
keytool -exportcert -keystore /Applications/Adobe\ Flash\ Builder\ 4.7/eclipse/plugins/com.adobe.flexide.multiplatform.android_4.7.0.349722/resources/debug-certificate-android.p12 -storepass debug  -list -v -storetype PKCS12
```


## Add your game in the Google Play Developer Console

Create an entry for your game in the Google Play Developer Console. This enables Game services for your application, and creates an OAuth 2.0 client ID, if you don't have one yet. You must perform this step even if you have created a client ID for your game in the Google Developers Console.

- Record the following credential information for later.
  - Your game's application ID
  - Your game's OAuth 2.0 client ID
- (Optional) Add achievements and leaderboards to your game by following the steps described in Configuring Achievements and Leaderboards.
- Add test accounts for other members of your team to test your game by following the steps described in Publishing Your Game Changes.




## Manifest Additions

Add the following to your manifest additions. You must replace the `XXXXXXXXXXXX` with your games application id you recorded above.

```
<manifestAdditions><![CDATA[
	<manifest android:installLocation="auto">
		<uses-permission android:name="android.permission.INTERNET"/>
		
		<application>

			<meta-data android:name="com.google.android.gms.games.APP_ID" android:value="\ XXXXXXXXXXXX" />
			<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version" />
			
			<activity
				android:name="com.google.android.gms.auth.api.signin.internal.SignInHubActivity"
				android:excludeFromRecents="true"
				android:exported="false"
				android:theme="@android:style/Theme.Translucent.NoTitleBar" />
			<service
				android:name="com.google.android.gms.auth.api.signin.RevocationBoundService"
				android:exported="true"
				android:permission="com.google.android.gms.auth.api.signin.permission.REVOCATION_NOTIFICATION" />

			<activity
				android:name="com.google.android.gms.common.api.GoogleApiActivity"
				android:exported="false"
				android:theme="@android:style/Theme.Translucent.NoTitleBar" />

		</application>
	</manifest>
]]></manifestAdditions>
```


## iOS

>
> Google has deprecated the iOS implementation of Google Play Services and it is no longer supported in this ANE.
> If you have been using this service in the past you are advised to move over to Game Center as soon as possible as Google does not support the platform any longer.
>


## Example Application

Once you have the details, enter your GOOGLE_PLAY_CLIENT_ID into the TestGameServices constant and the App ID in the manifest additions (XXXXXXXXXXXX), then package and run the application.



