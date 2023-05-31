

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
  <extensionID>com.jetbrains.kotlin</extensionID>
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
  <uses-sdk android:targetSdkVersion="31"/>

  <uses-permission android:name="android.permission.INTERNET"/>
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
  <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
  <uses-permission android:name="android.permission.QUERY_ALL_PACKAGES"/>
  <uses-permission android:name="com.hihonor.permission.MANAGE_FOLD_SCREEN"/>
  <uses-permission android:name="com.hihonor.permission.MANAGE_FOLD_SCREEN_PRIVILEGED"/>
  <uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES"/>
  <uses-permission android:name="android.permission.BROADCAST_STICKY"/>

  <meta-data android:name="com.huawei.hms.min_api_level:apptouch:apptouch" android:value="1"/>
  <queries>
    <intent>
      <action android:name="com.huawei.hms.core.aidlservice"/>
    </intent>
    <intent>
      <action android:name="com.huawei.hms.core"/>
    </intent>
  </queries>

  <application>
    <meta-data android:name="android.max_aspect" android:value="2.5"/>
    <meta-data android:name="android.notch_support" android:value="true"/>
    <provider android:name="com.huawei.agconnect.core.provider.AGConnectInitializeProvider" android:authorities="APPLICATION_PACKAGE.AGCInitializeProvider" android:exported="false"/>
    <service android:name="com.huawei.agconnect.core.ServiceDiscovery" android:exported="false"/>
    <activity android:name="com.huawei.hms.activity.BridgeActivity" android:configChanges="orientation|locale|layoutDirection|fontScale|screenSize|smallestScreenSize|screenLayout|uiMode" android:excludeFromRecents="true" android:exported="false" android:hardwareAccelerated="true" android:screenOrientation="behind" android:theme="@style/Base_Translucent">
      <meta-data android:name="hwc-theme" android:value="androidhwext:style/Theme.Emui.Translucent"/>
    </activity>
    <activity android:name="com.huawei.hms.activity.EnableServiceActivity" android:configChanges="orientation|keyboardHidden|screenSize|smallestScreenSize|screenLayout" android:exported="false"/>
    <!-- 为后续统计第三方app集成了哪些Kit，因此需要Kit在自己的AndroidManifest.xml文件中定义业务标签元数据 -->
    <meta-data android:name="com.huawei.hms.client.service.name:base" android:value="base:6.8.0.300"/>
    <!-- SDK依赖的HMSCore的最低api level元数据 -->
    <meta-data android:name="com.huawei.hms.min_api_level:base:hmscore" android:value="1"/>
    <!-- 用于判断是否集成了本lib -->
    <meta-data android:name="availableLoaded" android:value="yes"/>
    <meta-data android:name="com.huawei.hms.client.service.name:ads-instream" android:value="ads-instream:13.4.58.301"/>
    <meta-data android:name="com.huawei.hms.client.service.name:ads-banner" android:value="ads-banner:13.4.58.301"/>
    <meta-data android:name="com.huawei.hms.client.service.name:ads-lang" android:value="ads-lang:13.4.58.301"/>
    <meta-data android:name="hw_ads_sdk_type" android:value="2"/>
    <meta-data android:name="com.huawei.hms.client.service.name:ads-base" android:value="ads-base:13.4.58.301"/>
    <activity android:name="com.huawei.openalliance.ad.activity.PPSLauncherActivity" android:exported="true" android:theme="@android:style/Theme.Translucent.NoTitleBar">
      <intent-filter>
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:host="APPLICATION_PACKAGE" android:scheme="hwpps"/>
      </intent-filter>
      <meta-data android:name="hwc-theme" android:value="androidhwext:style/Theme.Emui.Translucent.NoTitleBar"/>
      <meta-data android:name="hnc-theme" android:value="androidhnext:style/Theme.Magic.Translucent.NoTitleBar"/>
    </activity>
    <activity android:name="com.huawei.openalliance.ad.activity.PPSBridgeActivity" android:exported="false" android:theme="@android:style/Theme.Translucent.NoTitleBar">
      <meta-data android:name="hwc-theme" android:value="androidhwext:style/Theme.Emui.Translucent.NoTitleBar"/>
      <meta-data android:name="hnc-theme" android:value="androidhnext:style/Theme.Magic.Translucent.NoTitleBar"/>
    </activity>
    <activity android:name="com.huawei.openalliance.ad.activity.PPSNotificationActivity" android:exported="false" android:theme="@android:style/Theme.Translucent.NoTitleBar">
      <meta-data android:name="hwc-theme" android:value="androidhwext:style/Theme.Emui.Translucent.NoTitleBar"/>
      <meta-data android:name="hnc-theme" android:value="androidhnext:style/Theme.Magic.Translucent.NoTitleBar"/>
    </activity>
    <activity android:name="com.huawei.openalliance.ad.activity.AgProtocolActivity" android:configChanges="orientation|screenSize" android:exported="false" android:theme="@android:style/Theme.Translucent.NoTitleBar">
      <meta-data android:name="hwc-theme" android:value="androidhwext:style/Theme.Emui.Translucent.NoTitleBar"/>
      <meta-data android:name="hnc-theme" android:value="androidhnext:style/Theme.Magic.Translucent.NoTitleBar"/>
    </activity>
    <meta-data android:name="com.huawei.hms.min_api_level:pps-phone:adsbrainkit" android:value="1"/>
    <meta-data android:name="com.huawei.hms.min_api_level:pps-phone:adsuiengine" android:value="1"/>
    <activity android:name="com.huawei.openalliance.ad.activity.TemplateStubActivity" android:configChanges="keyboardHidden|orientation|screenSize|screenLayout|smallestScreenSize" android:excludeFromRecents="true" android:exported="false" android:theme="@android:style/Theme.Translucent.NoTitleBar">
      <intent-filter>
        <action android:name="com.huawei.hms.pps.action.PPS_STUB"/>
        <category android:name="android.intent.category.DEFAULT"/>
      </intent-filter>
      <meta-data android:name="hwc-theme" android:value="androidhwext:style/Theme.Emui.Translucent.NoTitleBar"/>
      <meta-data android:name="hnc-theme" android:value="androidhnext:style/Theme.Magic.Translucent.NoTitleBar"/>
    </activity>
    <meta-data android:name="com.huawei.hms.client.service.name:ads-interstitial" android:value="ads-interstitial:13.4.58.301"/>
    <meta-data android:name="com.huawei.hms.client.service.name:ads-reward" android:value="ads-reward:13.4.58.301"/>
    <meta-data android:name="com.huawei.hms.client.service.name:ads-consent" android:value="ads-consent:3.4.58.301"/>
    <meta-data android:name="com.huawei.hms.client.service.name:ads-template" android:value="ads-template:13.4.58.301"/>
    <meta-data android:name="com.huawei.hms.client.service.name:ads-native" android:value="ads-native:13.4.58.301"/>
    <activity android:name="com.huawei.openalliance.ad.activity.FeedbackActivity" android:configChanges="keyboardHidden|orientation|screenSize|screenLayout|smallestScreenSize|uiMode" android:excludeFromRecents="true" android:exported="false" android:theme="@android:style/Theme.Translucent.NoTitleBar">
      <meta-data android:name="hwc-theme" android:value="androidhwext:style/Theme.Emui.Translucent.NoTitleBar"/>
      <meta-data android:name="hnc-theme" android:value="androidhnext:style/Theme.Magic.Translucent.NoTitleBar"/>
    </activity>
    <meta-data android:name="com.huawei.hms.client.service.name:ads-lite" android:value="ads-lite:13.4.58.301"/>
    <meta-data android:name="com.huawei.hms.client.service.name:ads-splash" android:value="ads-splash:13.4.58.301"/>
    <meta-data android:name="com.huawei.hms.client.service.name:ads-jsbridge" android:value="ads-jsbridge:3.4.58.301"/>
    <meta-data android:name="com.huawei.hms.client.service.name:ads-identifier" android:value="ads-identifier:3.4.58.301"/>
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

