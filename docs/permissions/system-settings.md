---
title: System Settings
sidebar_label: System Settings
---

Some permissions are controlled through the system settings dialogs and cannot be requested through the normal permission request process. 



## Write Settings

The permission to read and write to the system settings (`android.permission.WRITE_SETTINGS`) from Android API 23 now requires a user to explicitly grant this permission to an application through a permission management screen.

You cannot request this permission but you can check the current state and show the screen for the user to change the setting.

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

:::info
This permission is required for when you need to change system settings, such as the screen brightness as performed in the Application extension.
:::
