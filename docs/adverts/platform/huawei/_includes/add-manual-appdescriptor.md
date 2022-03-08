

## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
        <extensionID>com.distriqt.Adverts</extensionID>
        <extensionID>com.distriqt.Core</extensionID>

        <extensionID>com.huawei.hms.base</extensionID>
        <extensionID>com.huawei.hms.adsidentifier</extensionID>
        <extensionID>com.huawei.hms.adslite</extensionID>

        <extensionID>androidx.appcompat</extensionID>
        <extensionID>androidx.core</extensionID>
        <extensionID>androidx.constraintlayout</extensionID>
</extensions>
```




## Android 

### Manifest Additions

The Adverts extension requires a few additions to the manifest to be able to start certain activities. You should add the listing below to your manifest.

Also we suggest you enable hardware acceleration so videos are displayed correctly (i.e. the `android:hardwareAccelerated="true"` attribute on your android `application` tag).

:::caution
Ensure you replace:
-  `APPLICATION_PACKAGE` with your AIR application's Java package name, something like `air.com.distriqt.test`. Generally this is your AIR application id prefixed by `air.` unless you have specified no air flair in your build options.
:::

```xml
<manifest android:installLocation="auto">


	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
	<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
	<uses-permission android:name="android.permission.WAKE_LOCK" />
	<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
	<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" /> 
	<uses-permission android:name="com.huawei.appmarket.service.commondata.permission.GET_COMMON_DATA" />
	<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

	<application 
		android:hardwareAccelerated="true"
		android:appComponentFactory="androidx.core.app.CoreComponentFactory">

		<meta-data
			android:name="com.huawei.hms.client.service.name:ads-lite"
			android:value="ads-lite:13.4.30.301" />
		<meta-data
			android:name="com.huawei.hms.client.service.name:ads-banner"
			android:value="ads-banner:13.4.30.301" />
		<meta-data
			android:name="com.huawei.hms.client.service.name:ads-template"
			android:value="ads-template:13.4.30.301" />
		<meta-data
			android:name="com.huawei.hms.client.service.name:ads-native"
			android:value="ads-native:13.4.30.301" />
		<meta-data
			android:name="com.huawei.hms.client.service.name:ads-interstitial"
			android:value="ads-interstitial:13.4.30.301" />
		<meta-data
			android:name="com.huawei.hms.client.service.name:ads-reward"
			android:value="ads-reward:13.4.30.301" />
		<meta-data
			android:name="com.huawei.hms.client.service.name:ads-splash"
			android:value="ads-splash:13.4.30.301" />
		<meta-data
			android:name="com.huawei.hms.client.service.name:ads-base"
			android:value="ads-base:13.4.30.301" />

		<activity
			android:name="com.huawei.openalliance.ad.activity.PPSLauncherActivity"
			android:exported="true"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" >
			<intent-filter>
				<action android:name="android.intent.action.VIEW" />

				<category android:name="android.intent.category.DEFAULT" />
				<category android:name="android.intent.category.BROWSABLE" />

				<data
					android:host="APPLICATION_PACKAGE"
					android:scheme="hwpps" />
			</intent-filter>

			<meta-data
				android:name="hwc-theme"
				android:value="androidhwext:style/Theme.Emui.Translucent.NoTitleBar" />
		</activity>
		<activity
			android:name="com.huawei.openalliance.ad.activity.PPSBridgeActivity"
			android:exported="false"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" >
			<meta-data
				android:name="hwc-theme"
				android:value="androidhwext:style/Theme.Emui.Translucent.NoTitleBar" />
		</activity>
		<activity
			android:name="com.huawei.openalliance.ad.activity.PPSNotificationActivity"
			android:exported="false"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" >
			<meta-data
				android:name="hwc-theme"
				android:value="androidhwext:style/Theme.Emui.Translucent.NoTitleBar" />
		</activity>
		<activity
			android:name="com.huawei.openalliance.ad.activity.AgProtocolActivity"
			android:configChanges="orientation|screenSize"
			android:exported="false"
			android:theme="@android:style/Theme.Translucent.NoTitleBar" >
			<meta-data
				android:name="hwc-theme"
				android:value="androidhwext:style/Theme.Emui.Translucent.NoTitleBar" />
		</activity>

		<meta-data
			android:name="com.huawei.hms.client.service.name:ads-lang"
			android:value="ads-lang:13.4.30.301" />
		<!--
		为后续统计第三方app集成了哪些Kit，因此需要Kit在自己的AndroidManifest.xml文件中定义业务标签元数据，
		流水线打包时会替换成HMSVER对应的版本号，不要手动修改
		-->
		<meta-data
			android:name="com.huawei.hms.client.service.name:base"
			android:value="base:4.0.2.300" /> <!-- SDK依赖的HMSCore的最低api level元数据 -->
		<meta-data
			android:name="com.huawei.hms.min_api_level:base:hmscore"
			android:value="1" />

		<activity
			android:name="com.huawei.hms.activity.BridgeActivity"
			android:configChanges="orientation|locale|layoutDirection|fontScale|screenSize|smallestScreenSize|screenLayout"
			android:excludeFromRecents="true"
			android:exported="false"
			android:hardwareAccelerated="true"
			android:theme="@android:style/Theme.Translucent" >
			<meta-data
				android:name="hwc-theme"
				android:value="androidhwext:style/Theme.Emui.Translucent" />
		</activity>
		<activity
			android:name="com.huawei.hms.activity.EnableServiceActivity"
			android:configChanges="orientation|keyboardHidden|screenSize|smallestScreenSize|screenLayout" >
		</activity>

		<provider
			android:name="com.huawei.hms.update.provider.UpdateProvider"
			android:authorities="APPLICATION_PACKAGE.hms.update.provider"
			android:exported="false"
			android:grantUriPermissions="true" >
		</provider>
		<provider
			android:name="com.huawei.agconnect.core.provider.AGConnectInitializeProvider"
			android:authorities="APPLICATION_PACKAGE.AGCInitializeProvider"
			android:exported="false" />

		<service
			android:name="com.huawei.agconnect.core.ServiceDiscovery"
			android:exported="false" />

		<activity
			android:name="com.huawei.updatesdk.service.otaupdate.AppUpdateActivity"
			android:configChanges="orientation|screenSize"
			android:exported="false"
			android:theme="@style/upsdkDlDialog" >
			<meta-data
				android:name="hwc-theme"
				android:value="androidhwext:style/Theme.Emui.Translucent.NoTitleBar" />
		</activity>
		<activity
			android:name="com.huawei.updatesdk.support.pm.PackageInstallerActivity"
			android:configChanges="orientation|keyboardHidden|screenSize"
			android:exported="false"
			android:theme="@style/upsdkDlDialog" >
			<meta-data
				android:name="hwc-theme"
				android:value="androidhwext:style/Theme.Emui.Translucent" />
		</activity>

		<meta-data
			android:name="com.huawei.hms.client.service.name:ads-consent"
			android:value="ads-consent:3.4.34.301" />
		<meta-data
			android:name="com.huawei.hms.client.service.name:ads-identifier"
			android:value="ads-identifier:3.4.34.301" />

			
	</application>

</manifest>
```

We also suggest that you add the `containsVideo` tag to your `android` configuration:


```xml
<android>
	<manifestAdditions><![CDATA[
		<!-- MANIFEST -->
	]]></manifestAdditions>
	
	<containsVideo>true</containsVideo>

</android>
```




## iOS 

iOS is not supported by Huawei Ads, you should consider using AdMob on iOS as a replacement.

