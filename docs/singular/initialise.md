---
title: Initialise
sidebar_label: Initialise
---


## Creating a Configuration Object

Before you initialize Singular functionality in your code, you have to create a Singular configuration object and set all your configuration options.

This object will contain:

- Your SDK Key and SDK Secret (to retrieve them, log into your Singular account and go to Developer Tools > SDK Keys).
- Optionally, any SDK preferences you may want to set.


```actionscript title="Example: Creating a Configuration Object with Some Common Options"
var config:SingularConfig 
    = new SingularConfig( API_KEY, SECRET )
        .withSKAdNetworkEnabled( true )
        .withWaitForTrackingAuthorizationTimeoutInterval( 300 );
```

See the documentation on the `SingularConfig` class for details on the available options.



## Initialising Singular

The Singular SDK should be initialized every time your app is opened. This is a prerequisite to all Singular attribution functionality, and it also sends a new user session to Singular (sessions are used to calculate user retention).


To initialise the SDK call the `init()` method passing the config object.


```actionscript
var config:SingularConfig 
    = new SingularConfig( API_KEY, SECRET )
        .withSKAdNetworkEnabled( true )
        .withWaitForTrackingAuthorizationTimeoutInterval( 300 );

var success:Boolean = Singular.instance.init( config );
```


## Optional: Handling Deep Links

If you plan on handling deep links in your application you must add a handler for them before initialising the SDK.

Deep links are handled through the `SingularLinkEvent.RESOLVED` event.

```actionscript
Singular.instance.addEventListener( SingularLinkEvent.RESOLVED, linkResolvedHandler );

function linkResolvedHandler( event:SingularLinkEvent ):void
{
    var deepLink:String = event.params.deeplink;
    var passthrough:String = event.params.passthrough;
    var isDeferred:Boolean = event.params.isDeferred;
}
```

The event contains a `SingularLinkParams` object that contains the details of the link including the `deepLink`, `passthrough` parameters and whether it was a deferred link.

Follow the documentation in [Singular Link Prerequisites](https://support.singular.net/hc/en-us/articles/360031371451-Singular-Links-Prerequisites) in order to setup your links.


### Android 

You will need to add some custom additions to your manifest to support deep links (this must be added inside the `application` tag). Replace `URL_SCHEME` with the url scheme your deep links are using on Android, ie the scheme part from: `URL_SCHEME://your-link` 

```xml
<activity>
    <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
        <category android:name="android.intent.category.LAUNCHER"/>
    </intent-filter>
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="URL_SCHEME" />
    </intent-filter>
</activity>
```

:::note
If you already have a launch activity in your manifest, just add the second `intent-filter` in the above example to your existing `activity`.
:::


### iOS 

You will need to add some additions to your `InfoAdditions` to support deep links, replace `URL_SCHEME` with the url scheme your deep links are using on iOS, ie the scheme part from: `URL_SCHEME://your-link`:

```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>URL_SCHEME</string>
        </array>
    </dict>
</array>
```

Add the following to your `Entitlements`, replace `SINGULAR_LINK` with your singular link domain you created in the console, eg `distriqt-test.sng.link`:

```xml
<key>com.apple.developer.associated-domains</key>
<array>
    <string>applinks:SINGULAR_LINK</string>
</array>
```




## Optional: Custom User ID

The Singular SDK can send an internal user ID from your app to Singular.

To set the user id pass the identifier as part of your configuration object:

```actionscript
var config:SingularConfig 
    = new SingularConfig( API_KEY, SECRET )
        .withCustomUserId( "user_custom_id" )
        ...
```



## Optional: Global Properties

The Singular SDK lets you define custom properties to be sent to the Singular servers along with every session and event sent from the app. These properties can represent any information you want about the user, the app mode/status, or anything else.

You can define up to 5 global properties. They persist between app runs (with the latest value you gave them) until you unset them or the user uninstalls the app.


### Setting Global Properties through the Config Object

To set global properties before initializing the SDK, use the `withGlobalProperty()` method in the `SingularConfig` object.

```actionscript
var config:SingularConfig 
    = new SingularConfig( API_KEY, SECRET )
        .withGlobalProperty( "a_prop", "set from config", true )
        .withGlobalProperty( "b_prop", "set from config", true )
        ...
```


### Setting Global Properties After Initialisation

Use the following methods to set, unset, and retrieve global properties at any time in the app's run.

Set a property using `setGlobalProperty()`:

```actionscript 
Singular.instance.setGlobalProperty( "a_prop", "set from sdk", true );
```

Retrieve all current properties using the `getGlobalProperties()` method:

```actionscript
var props:Object = Singular.instance.getGlobalProperties();

for (var key:String in props)
{
    trace( key + " = " + props[key] );
}
```

Clear a specific property using the `unsetGlobalProperty()` method:

```actionscript
Singular.instance.unsetGlobalProperty( "a_prop" );
```

Clear all global properties using the `clearGlobalProperties()` method:

```actionscript
Singular.instance.clearGlobalProperties();
```


## Optional: Modifying the Session Timeout

By default, if the app runs in the background for 60 seconds or more before returning to the foreground, the SDK will register a new session. To change this timeout value, use the `withSessionTimeoutInSec()` method and add it to the Config.


```actionscript
var config:SingularConfig 
    = new SingularConfig( API_KEY, SECRET )
        .withSessionTimeoutInSec( 100 )
        ...
```


