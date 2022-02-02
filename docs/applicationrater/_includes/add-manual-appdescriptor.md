
## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.ApplicationRater</extensionID>
	<extensionID>com.distriqt.Core</extensionID>
	<extensionID>com.google.android.play</extensionID>
</extensions>
```

## Android Manifest Additions

The Application Rater ANE requires a few additions to the manifest.
You should add the listing below to your application descriptor.

```xml
<manifestAdditions><![CDATA[
	<manifest android:installLocation="auto">
		<uses-permission android:name="android.permission.INTERNET"/>
		<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />

		<application>

			<!-- com.google.android.play -->
			<activity
				android:name="com.google.android.play.core.missingsplits.PlayCoreMissingSplitsActivity"
				android:enabled="false"
				android:exported="false"
				android:launchMode="singleInstance"
				android:process=":playcore_missing_splits_activity"
				android:stateNotNeeded="true" />
			<activity
				android:name="com.google.android.play.core.common.PlayCoreDialogWrapperActivity"
				android:exported="false"
				android:stateNotNeeded="true"
				android:theme="@style/Theme.PlayCore.Transparent" />

			<service
				android:name="com.google.android.play.core.assetpacks.AssetPackExtractionService"
				android:enabled="false"
				android:exported="true" >
				<meta-data
					android:name="com.google.android.play.core.assetpacks.versionCode"
					android:value="11001" />
			</service>
			<service
				android:name="com.google.android.play.core.assetpacks.ExtractionForegroundService"
				android:enabled="false"
				android:exported="false" />

		</application>
	</manifest>
]]></manifestAdditions>
```
