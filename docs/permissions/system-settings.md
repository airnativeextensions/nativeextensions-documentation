---
title: System Settings
sidebar_label: System Settings
---

Some permissions are controlled through the system settings dialogs and cannot be requested through the normal permission request process. 



## Write Settings

The permission to read and write to the system settings (`android.permission.WRITE_SETTINGS`) from Android API 23 now requires a user to explicitly grant this permission to an application through a permission management screen.

```xml
<uses-permission android:name="android.permission.WRITE_SETTINGS" />
```

You cannot request this permission but you can check the current state and show the screen for the user to change the setting.

:::info
This permission is required for when you need to change system settings, such as the screen brightness as performed in the Application extension.
:::

To check the state of the permission use the `canWrite` property on the `settings`:

```actionscript
if (Permissions.instance.settings.canWrite)
{
    // App can write to system settings
}
```

To display the permission management screen for the user to change this state, call the `showManageSettingsScreen()` method:

```actionscript
Permissions.instance.settings.showManageSettingsScreen();
```

There is also an event dispatched (`SettingsEvent.MANAGE_SETTINGS_CLOSED`) when this screen is closed:

```actionscript
Permissions.instance.settings.addEventListener( 
    SettingsEvent.MANAGE_SETTINGS_CLOSED, 
    manageSettingsClosedHandler
);

Permissions.instance.settings.showManageSettingsScreen();

function manageSettingsClosedHandler( event:SettingsEvent ):void 
{
    // screen closed
}
```



## All Files Permission 

The majority of apps that require shared storage access can follow the best practices for sharing media files and sharing non-media files. However, some apps have a core use case that requires broad access of files on a device, but cannot do so efficiently using the privacy-friendly storage best practices. Android provides a special app access called All files access for these situations.

For more information on this permission see the Android documentation section on [managing all files](https://developer.android.com/training/data-storage/manage-all-files).

:::note
For API versions < 30 don't require this additional permission and the following will always fail and `isExternalStorageManager()` will always return `true` indicating the application already has access.
:::


### Request All files access

An app can request All files access from the user by doing the following:

- Declare the `android.permission.MANAGE_EXTERNAL_STORAGE` permission in the manifest.

```xml
<uses-permission android:name="android.permission.MANAGE_EXTERNAL_STORAGE" />
```

- Use the `ACTION_MANAGE_ALL_FILES_ACCESS_PERMISSION` intent action to direct users to a system settings page where they can enable the following option for your app: Allow access to manage all files.

With this extension you can trigger the `ACTION_MANAGE_ALL_FILES_ACCESS_PERMISSION` by calling:

```actionscript
Permissions.instance.settings
    .showManageAllFileAccessPermission();
```

This will return `true` if the intent was found and launched.

Additionally you can listen for the `SettingsEvent.MANAGE_ALL_FILES_ACCESS_PERMISSION_CLOSED` event to be notified of when the dialog is closed and focus returned to your application.

```actionscript
Permissions.instance.settings.addEventListener( 
    SettingsEvent.MANAGE_ALL_FILES_ACCESS_PERMISSION_CLOSED, 
    closedHandler 
);

function closedHandler( event:SettingsEvent ):void
{
    trace( "closed" );
}
```

### Request App All files access

You can also trigger the `ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION` intent which will direct the user straight to your application setting if available. 

```actionscript
Permissions.instance.settings
    .showManageAppAllFileAccessPermission();
```

This will return `true` if the intent was found and launched.

Additionally you can listen for the `SettingsEvent.MANAGE_APP_ALL_FILES_ACCESS_PERMISSION_CLOSED` event to be notified of when the dialog is closed and focus returned to your application.

```actionscript
Permissions.instance.settings.addEventListener( 
    SettingsEvent.MANAGE_APP_ALL_FILES_ACCESS_PERMISSION_CLOSED, 
    closedHandler 
);

function closedHandler( event:SettingsEvent ):void
{
    trace( "closed" );
}
```


### Check Granted

To determine whether your app has been granted the `MANAGE_EXTERNAL_STORAGE` permission, call `Environment.isExternalStorageManager()`.

```actionscript
var granted:Boolean = 
    Permissions.instance.environment.isExternalStorageManager();
```




