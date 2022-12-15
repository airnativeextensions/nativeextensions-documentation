---
title: Migrating to v10.2
sidebar_label: Migrating to v10.2
---


v11.2 brings the latest release of OneSignal:

- Android v4.8.3
- iOS v3.12.3

It also includes the new notification permissions for Android 13+.


## OneSignal Frameworks

OneSignal now requires usage of dynamic frameworks. You will need to ensure you include the Frameworks folder in the appropriate place in your application. If using `apm` simply add the `assets/ios` folder contents to be packaged at the root of your application. If not, download the frameworks from the repository and place them in a `Frameworks` folder at the root of your application. 

See the OneSignal "Add the extension" documentation for more details.




## Android Permissions

From Android 13 developers are required to get permission to send a user notifications. 

If you do not update your users will be presented with the permission notification on launch of your application. 

Authorisation process follows exactly the same code you have used for iOS and from a developer perspective no changes are needed, except that you need to handle a `SHOULD_EXPLAIN` case for Android, similar to other permissions.

See the documentation on [requesting authorisation](request-authorisation.md) for more information.

Importantly, if manually managing the manifest (not using `apm`) you will be required to make some additions to your manifest. Firstly the permission:

```xml
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
```

And an additional activity to be able to correctly request the permission:

```xml
<application ... >

    <activity android:name="com.distriqt.extension.notifications.permissions.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:exported="false" />

</application>
```





