
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.GoogleAnalytics</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
    <extensionID>com.distriqt.playservices.Base</extensionID>
    <extensionID>com.distriqt.playservices.Analytics</extensionID>
    <extensionID>androidx.core</extensionID>
</extensions>
```



### Android

#### Manifest Additions

Update your application manifest additions to include the `INTERNET` and `ACCESS_NETWORK_STATE` permissions
along with the other additions below:


```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>

	<!-- Optional permission for reliable local dispatching on non-Google Play devices -->
	<uses-permission android:name="android.permission.WAKE_LOCK" />
	
	<application>
		<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version" />
		
		<service android:name="com.google.android.gms.analytics.AnalyticsService" android:enabled="true" android:exported="true" />
		<service android:name="com.google.android.gms.analytics.AnalyticsJobService" android:enabled="true" android:exported="false" android:permission="android.permission.BIND_JOB_SERVICE" />

		<receiver android:name="com.google.android.gms.analytics.AnalyticsReceiver" android:enabled="true" android:exported="false">
			<intent-filter>
				<action android:name="com.google.android.gms.analytics.ANALYTICS_DISPATCH" />
			</intent-filter>
		</receiver>


		<service android:name="com.google.android.gms.analytics.CampaignTrackingService" android:exported="false"/>
		<receiver android:name="com.google.android.gms.analytics.CampaignTrackingReceiver" android:exported="true" android:permission="android.permission.INSTALL_PACKAGES">
			<intent-filter>
				<action android:name="com.android.vending.INSTALL_REFERRER" />
			</intent-filter>
		</receiver>
		<receiver android:name="com.distriqt.extension.googleanalytics.InstallReferrerReceiver" android:exported="true">
			<intent-filter>
				<action android:name="com.android.vending.INSTALL_REFERRER" />
			</intent-filter>
		</receiver>


	</application>
</manifest>
```




### iOS

#### InfoAdditions

There are no general additions for this ANE.

