---
title: Migrating to version 12
sidebar_label: Migrating to version 12
---

Version 12 brings the latest AdMob SDK which includes some significant changes to the Android SDK.

#### Android Manifest

Add the following 2 additional androidx dependencies:

- [androidx.room.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.room.ane)
- [androidx.work.ane](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.work.ane)

Ensure you have the included the additional manifest additions for the androidx room and work libraries (inside the `application` node of your additions).

You should replace `APPLICATION_PACKAGE` with your AIR application package name on Android (eg `air.com.distriqt.test`). Note that it may be prefixed by `air.`.

```xml
<!-- AndroidX Room -->
<service
	android:name="androidx.room.MultiInstanceInvalidationService"
	android:exported="false" />

	
<!-- AndroidX Work -->
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
```

See [Add the Extension](add-the-extension) for details.

