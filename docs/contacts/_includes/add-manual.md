
:::info
The following guide is used to manually install the extension, download dependencies and update the application descriptor. We highly recommend installing extensions using `apm`. Using `apm` will automate the installation and automatically handle updates and dependencies along with greatly simplifying the application descriptor generation.
:::


First step is always to add the extension to your development environment. Download the extension from the repository and then follow the tutorial located [here](/docs/tutorials/getting-started) to add the extension to your development environment.



## Dependencies

Many of our extensions use some common libraries, for example, the Android Support libraries.

We have to separate these libraries into separate extensions in order to avoid multiple versions of the libraries being included in your application and causing packaging conflicts. This means that you need to include some additional extensions in your application along with the main extension file.

You will add these extensions as you do with any other extension, and you need to ensure it is packaged with your application.


### Core 

The Core ANE is required by this ANE. You must include and package this extension in your application.

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).


### Android Support

The Android Support libraries encompass the Android Support, Android X and common Google libraries. 

These libraries are specific to Android. There are no issues including these on all platforms, they are just **required** for Android.

This extension requires the following extensions:

- [androidx.core](https://github.com/distriqt/ANE-AndroidSupport/raw/master/lib/androidx.core.ane)

You can access these extensions here: [https://github.com/distriqt/ANE-AndroidSupport](https://github.com/distriqt/ANE-AndroidSupport).


>
> **Note**: if you have been using the older `com.distriqt.androidsupport.*` (Android Support) extensions you should remove these extensions and replace it with the `androidx` extensions listed above. This is the new version of the android support libraries and moving forward all our extensions will require AndroidX.
>


>
> **Note:** The Google Play Services and Android Support ANEs are only **required** on Android devices. 
> There are no issues packaging these extensions with all platforms as there are default implementations available which will allow your code to package without errors however if you are only building an iOS application feel free to remove the Google Play Services and Android Support ANEs from your application.
>


## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Contacts</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
	<extensionID>androidx.core</extensionID>
</extensions>
```



## Android 

### Manifest Additions

The Contacts extension requires a few additions to the manifest to request permissions to access the user's contacts.
You should add the listing below to your application descriptor.


```xml
<manifestAdditions><![CDATA[
	<manifest android:installLocation="auto">
		<uses-permission android:name="android.permission.INTERNET"/>
			
		<uses-permission android:name="android.permission.GET_ACCOUNTS" />
		<uses-permission android:name="android.permission.READ_CONTACTS" />
		<uses-permission android:name="android.permission.WRITE_CONTACTS" />
		
		<!-- Optional: Needed if you are planning to save contact images -->
		<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
		
		<queries>
			<intent>
				<action android:name="android.intent.action.PICK" />
				<data android:mimeType="*/*" />
			</intent>
		</queries>

		<application>
			<activity android:name="com.distriqt.extension.contacts.activities.ContactPickerActivity" android:exported="false" android:theme="@android:style/Theme.Translucent.NoTitleBar" />
			<activity android:name="com.distriqt.extension.contacts.permissions.AuthorisationActivity" android:exported="false" android:theme="@android:style/Theme.Translucent.NoTitleBar" />
		</application>
		
	</manifest>
]]></manifestAdditions>
```





## iOS 

### Info Additions

From iOS 10 you are now **required** to specify the usage descriptions for certain permissions, including
access to the contacts. This requires you to add the following string to your InfoAdditions:

```xml
<key>NSContactsUsageDescription</key>
<string>Contacts Usage String</string>
```

You can customise the value of this string as you require for your application.

This should be added to the Info Additions node :

```xml
<iPhone>
	<InfoAdditions><![CDATA[

		HERE

	]]></InfoAdditions>
	<requestedDisplayResolution>high</requestedDisplayResolution>
	<Entitlements>
		<![CDATA[
		]]>
	</Entitlements>
</iPhone>
```
