---
title: OneSignal - Quick Start
sidebar_label: Quick Start
---


- [Setup OneSignal Account](https://onesignal.com)
  - Get your App ID: [Keys & IDs](https://documentation.onesignal.com/docs/accounts-and-keys#section-app-id)
- [Add Required ANEs](onesignal#required-anes)
  - `com.distriqt.Core`
  - `com.distriqt.playservices.Base`
  - `com.distriqt.playservices.AdsIdentifier`
  - `com.distriqt.playservices.CloudMessaging`
  - `com.google.firebase.core`
  - `com.google.android.datatransport`
  - `com.google.dagger`
  - `com.google.guava`
  - `androidx.appcompat`
  - `androidx.browser`
  - `androidx.cardview`
  - `androidx.core`
  - `androidx.recyclerview`
  - `androidx.room`
  - `androidx.vectordrawable`
  - `androidx.work`
  - `com.jetbrains.kotlin`
- Use AIR 33+
- iOS
  - [Info Additions and Entitlements](onesignal#info-additions-and-entitlements)
- Android 
  - [Manifest Additions](onesignal#manifest-additions)


## Setup the Extension and Service 

  - replace `ONESIGNAL_APP_ID` with your OneSignal App ID:


```actionscript
try
{
    Core.init();
    if (PushNotifications.isSupported)
    {
        var service:Service = new Service( 
            Service.ONESIGNAL, 
            ONESIGNAL_APP_ID );
        service.enableNotificationsWhenActive = true;

        PushNotifications.service.setup( service );
    }
}
catch (e:Error)
{
    trace( e );
}
```


## Request Authorisation


```actionscript
function checkAuthorisation():void 
{
    switch (PushNotifications.service.authorisationStatus())
    {
        case AuthorisationStatus.AUTHORISED:
            // This device has been authorised.
            // You can register this device and expect:
            //	- registration success/failed event, and; 
            // 	- notifications to be displayed
            registerNotifications();
            break;
            
        case AuthorisationStatus.NOT_DETERMINED:
            // You are yet to ask for authorisation to display notifications
            // At this point you should consider your strategy to get your user to authorise
            // notifications by explaining what the application will provide
            PushNotifications.service.addEventListener( AuthorisationEvent.CHANGED, authorisationChangedHandler );
            PushNotifications.service.requestAuthorisation();
            break;
            
        case AuthorisationStatus.DENIED:
            // The user has disabled notifications
            // Advise your user of the lack of notifications as you see fit

            // For example: You can redirect to the settings page on iOS
            if (PushNotifications.service.canOpenDeviceSettings)
            {
                PushNotifications.service.openDeviceSettings();
            }
            break;
    }
}

function authorisationChangedHandler( event:AuthorisationEvent ):void
{
    // Check the authorisation state again (as above)
    PushNotifications.service.removeEventListener( AuthorisationEvent.CHANGED, authorisationChangedHandler );
    checkAuthorisation();
}
```



## Listen for Notifications and Register 

Call register after adding your event listeners as a notification may be dispatched immediately if 
your application was started from a notification

```actionscript
function registerNotifications():void 
{
    PushNotifications.service.addEventListener( PushNotificationEvent.NOTIFICATION, notificationHandler );
    PushNotifications.service.addEventListener( PushNotificationEvent.NOTIFICATION_SELECTED, notificationHandler );

    PushNotifications.service.register();
}

function notificationHandler( event:PushNotificationEvent ):void
{
    trace( "Notification: ["+event.type+"] state="+event.applicationState+" startup="+event.startup );
    trace( event.payload );
}
```

