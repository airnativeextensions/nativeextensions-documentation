---
title: Migrating to v10.2
sidebar_label: Migrating to v10.2
---


v10.2 brings the latest release of OneSignal:

- Android v4.1.0
- iOS v3.1.1

If you are updating from a version < 10 make sure you check out the changes for Firebase Cloud Messaging as well in the [Migrating to v10.1](migrating-to-v10.1.md)


We have managed to hide any major implementation changes within the native code however there are some changes to the [dependencies](#update-dependencies), to the [manifest additions](#update-manifest-additions) and to the [payload data structure](#payload).


## Payload

:::caution Payload
The payload structure has changed due to a change in the data returned by OneSignal for a notification. Rather than reformatting to matching a legacy structure we have taken the approach to return the data as per OneSignal's design.

Importantly you will need to update any code you have that relies on the structure of the OneSignal notification payload.
:::

For example on Android the previous payload structure was: 

```json
{
    "isAppInFocus":true,
    "shown":false,
    "androidNotificationId":0,
    "displayType":0,
    "payload": {
        "notificationId":"bb5fd966-4ac2-4070-bcec-d66fb0fbab1f",
        "title":"asdf",
        "body":"asdfasdf",
        "additionalData":{
            
        },
        "lockScreenVisibility":1,
        "actionButtons":[
            
            ],
        "fromProjectNumber":"616489336300",
        "priority":5,
        "rawPayload":"{\"google.delivered_priority\":\"normal\",\"google.sent_time\":1612744363074,\"google.ttl\":259200,\"google.original_priority\":\"normal\",\"custom\":\"{\\\"i\\\":\\\"bb5fd966-4ac2-4070-bcec-d66fb0fbab1f\\\",\\\"a\\\":{\\\"actionButtons\\\":[],\\\"actionId\\\":\\\"__DEFAULT__\\\"}}\",\"pri\":\"5\",\"vis\":\"1\",\"from\":\"616489336300\",\"alert\":\"asdfasdf\",\"title\":\"asdf\",\"google.message_id\":\"0:1612744363095757%32d7332ff9fd7ecd\",\"google.c.sender.id\":\"616489336300\"}"
    }
}
```

The new payload structure is:

```json
{
    "androidNotificationId":0,
    "groupedNotifications":[
        
    ],
    "notificationId":"bb5fd966-4ac2-4070-bcec-d66fb0fbab1f",
    "templateName":"",
    "templateId":"",
    "title":"asdf",
    "body":"asdfasdf",
    "lockScreenVisibility":1,
    "fromProjectNumber":"616489336300",
    "priority":5,
    "additionalData":{
        
    },
    "actionButtons":[
        
    ],
    "rawPayload":"{\"google.delivered_priority\":\"normal\",\"google.sent_time\":1612744363074,\"google.ttl\":259200,\"google.original_priority\":\"normal\",\"custom\":\"{\\\"i\\\":\\\"bb5fd966-4ac2-4070-bcec-d66fb0fbab1f\\\",\\\"a\\\":{\\\"actionButtons\\\":[],\\\"actionId\\\":\\\"__DEFAULT__\\\"}}\",\"pri\":\"5\",\"vis\":\"1\",\"from\":\"616489336300\",\"alert\":\"asdfasdf\",\"title\":\"asdf\",\"google.message_id\":\"0:1612744363095757%32d7332ff9fd7ecd\",\"google.c.sender.id\":\"616489336300\"}"
}
```



## Update Dependencies

You need to ensure you have the following extensions in your application. There are several new extensions included here, and please ensure you have updated all the dependencies to the same releases:

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

See [Add Required ANEs](onesignal/onesignal.md#required-anes) for more information.



## Update Manifest Additions

We suggest removing any OneSignal references in your manifest and adding the following. The changes have been significant! 

You must replace `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`.

```xml
        <!-- ONE SIGNAL -->
        <meta-data android:name="com.onesignal.NotificationServiceExtension" android:value="com.distriqt.extension.pushnotifications.onesignal.NotificationServiceExtension" />

        <receiver
            android:name="com.onesignal.FCMBroadcastReceiver"
            android:permission="com.google.android.c2dm.permission.SEND" >

            <!-- High priority so OneSignal payloads can be filtered from other FCM receivers -->
            <intent-filter android:priority="999" >
                <action android:name="com.google.android.c2dm.intent.RECEIVE" />
                <category android:name="APPLICATION_PACKAGE" />
            </intent-filter>
        </receiver>

        <service
            android:name="com.onesignal.HmsMessageServiceOneSignal"
            android:exported="false" >
            <intent-filter>
                <action android:name="com.huawei.push.action.MESSAGING_EVENT" />
            </intent-filter>
        </service>

        <activity
            android:name="com.onesignal.NotificationOpenedActivityHMS"
            android:noHistory="true"
            android:theme="@android:style/Theme.Translucent.NoTitleBar" >
            <intent-filter>
                <action android:name="android.intent.action.VIEW" />
            </intent-filter>
        </activity>

        <service android:name="com.onesignal.FCMIntentService" />
        <service
            android:name="com.onesignal.FCMIntentJobService"
            android:permission="android.permission.BIND_JOB_SERVICE" />
        <service
            android:name="com.onesignal.FocusDelaySyncService"
            android:stopWithTask="true" />
        <service
            android:name="com.onesignal.FocusDelaySyncJobService"
            android:permission="android.permission.BIND_JOB_SERVICE" />
        <service
            android:name="com.onesignal.SyncService"
            android:stopWithTask="true" />
        <service
            android:name="com.onesignal.SyncJobService"
            android:permission="android.permission.BIND_JOB_SERVICE" />

        <activity
            android:name="com.onesignal.PermissionsActivity"
            android:theme="@android:style/Theme.Translucent.NoTitleBar" />

        <receiver android:name="com.onesignal.NotificationDismissReceiver" />
        <receiver android:name="com.onesignal.BootUpReceiver" >
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED" />
                <action android:name="android.intent.action.QUICKBOOT_POWERON" />
            </intent-filter>
        </receiver>
        <receiver android:name="com.onesignal.UpgradeReceiver" >
            <intent-filter>
                <action android:name="android.intent.action.MY_PACKAGE_REPLACED" />
            </intent-filter>
        </receiver>

        <activity
            android:name="com.onesignal.NotificationOpenedReceiver"
            android:noHistory="true"
            android:theme="@android:style/Theme.Translucent.NoTitleBar" />

        <!--
                FirebaseMessagingService performs security checks at runtime,
                but set to not exported to explicitly avoid allowing another app to call it.
        -->
        <service
            android:name="com.google.firebase.messaging.FirebaseMessagingService"
            android:exported="false" >
            <intent-filter android:priority="-500" >
                <action android:name="com.google.firebase.MESSAGING_EVENT" />
            </intent-filter>
        </service>


        <!-- FIREBASE CORE -->
        <!-- common -->
        <service
            android:name="com.google.firebase.components.ComponentDiscoveryService"
            android:directBootAware="true"
            android:exported="false" >
            <meta-data
                android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsRegistrar"
                android:value="com.google.firebase.components.ComponentRegistrar" />
            <meta-data
                android:name="com.google.firebase.components:com.google.firebase.iid.Registrar"
                android:value="com.google.firebase.components.ComponentRegistrar" />
            <meta-data
                android:name="com.google.firebase.components:com.google.firebase.messaging.FirebaseMessagingRegistrar"
                android:value="com.google.firebase.components.ComponentRegistrar" />
            <meta-data
                android:name="com.google.firebase.components:com.google.firebase.datatransport.TransportRegistrar"
                android:value="com.google.firebase.components.ComponentRegistrar" />
        </service>
        <provider
            android:name="com.google.firebase.provider.FirebaseInitProvider"
            android:authorities="APPLICATION_PACKAGE.firebaseinitprovider"
            android:exported="false"
            android:initOrder="100" />


        <!-- iid -->
        <receiver
            android:name="com.google.firebase.iid.FirebaseInstanceIdReceiver"
            android:exported="true"
            android:permission="com.google.android.c2dm.permission.SEND" >
            <intent-filter>
                <action android:name="com.google.android.c2dm.intent.RECEIVE" />
            </intent-filter>
        </receiver>


        <!-- androidx.work -->
        <provider
            android:name="androidx.work.impl.WorkManagerInitializer"
            android:authorities="APPLICATION_PACKAGE.workmanager-init"
            android:directBootAware="false"
            android:exported="false"
            android:multiprocess="true" />

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

        <!-- com.google.android.datatransport -->
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

        <service
            android:name="androidx.room.MultiInstanceInvalidationService"
            android:directBootAware="true"
            android:exported="false" />
```


For more information see the detail in the [Manifest Additions](onesignal/onesignal.md#manifest-additions) section.


