
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.ForceTouch</extensionID>
    <extensionID>com.distriqt.Core</extensionID>
</extensions>
```



### Android

#### Manifest Additions


You should add the following activity to the application node of your manifest additions.

```xml
<activity 
	android:name="com.distriqt.extension.forcetouch.shortcuts.ApplicationShortcutActivity"
	android:theme="@android:style/Theme.NoDisplay" 
	android:exported="true" />
```


**Make sure you only have one `<application>` node in your manifest additions combining them if you have multiple.**

The following shows the complete manifest additions node. 

```xml
<manifest android:installLocation="auto">
    <uses-permission android:name="android.permission.INTERNET"/>

    <application>

        <activity 
			android:name="com.distriqt.extension.forcetouch.shortcuts.ApplicationShortcutActivity"
			android:theme="@android:style/Theme.NoDisplay" 
			android:exported="true" />

    </application>

</manifest>
```


### iOS

#### InfoAdditions

There are no general additions for this ANE, however if you wish to add static shortcuts then you
will need to add some additions. 

For more information see the section on [App Shortcuts](../app-shortcuts.mdx). 
