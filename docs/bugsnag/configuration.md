---
title: Configuration
sidebar_label: Configuration
---




## Basic configuration

The basic configuration is done by adding the android and ios api keys to your application descriptor (see the section on [adding the extension](add-the-extension.mdx)).

The Bugsnag client can then simply be started using `start()`:


```actionscript
BugSnag.instance.start();
```



## Setting configuration options

You can create an instance of the `BugSnagConfig` class and pass it to the `start()` method to control various aspects of the Bugsnag client.


For example:


```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .setAndroidAPIKey( "YOUR_ANDROID_API_KEY" )
        .setIOSAPIKey( "YOUR_IOS_API_KEY" )
        .addFeatureFlag( "Checkout button colour", "Blue")
        .addFeatureFlag( "New checkout flow" )
        .setAppVersion( "5.3.55" )
        .setUser( "3", "bugs.nag@bugsnag.com", "Bugs Nag" )
        .setPersistUser( true );

BugSnag.instance.start( config );
```



### Feature flags

Declare a single feature flag or experiment with variant as an optional second parameter.


```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .addFeatureFlag( "Checkout button colour", "Blue")
        .addFeatureFlag( "New checkout flow" )
;
```


### API Key

The API key used for events sent to BugSnag


```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .setAndroidAPIKey( "YOUR_ANDROID_API_KEY" )
        .setIOSAPIKey( "YOUR_IOS_API_KEY" )
;
```


### App Version

The version of the application. This is really useful for finding out when errors are introduced and fixed. Additionally BugSnag can re-open closed errors if a later version of the app has a regression.

Bugsnag will automatically set the version from the application. If you’d like to override this you can set appVersion:


```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .setAppVersion( "5.3.55" )
;
```


### App Type

If your app’s codebase contains different entry-points/processes, but reports to a single BugSnag project, you might want to add information denoting the type of process the error came from.

This information can be used in the dashboard to filter errors and to determine whether an error is limited to a subset of appTypes.

```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .setAppType( "lite" )
;
```


### Attempt Delivery On Crash

Whether BugSnag should try to send crashing errors prior to app termination.

```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .setAttemptDeliveryOnCrash( true )
;
```


Delivery should be considered unreliable due to the necessary short timeout and unreliable state of the app following an exception. If delivery fails prior to termination, it will be reattempted at next launch (the default behavior).


:::warning
This feature is disabled by default and its use is discouraged because it:

- may cause the app to hang while delivery occurs and impact the hang rate reported 
- will result in duplicate error reports in your dashboard if the app terminates before the report can be confirmed as sent
- may prevent other crash reporters from detecting or reporting a crash.
:::



### Auto Detect Errors

By default, we will automatically notify BugSnag of any uncaught errors that we capture. Use this flag to disable all automatic detection.

```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .setAutoDetectErrors( false )
;
```


### Auto track sessions

By default, BugSnag will automatically capture and report session information from your application. Use this flag to disable all automatic reporting.

```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .setAutoTrackSessions( false )
;
```

If you want control over what is deemed a session, you can switch off the automatic session tracking option and manage the session manually. See [Capturing sessions](sessions) for more information.



### Context

The "context" is a string that indicates what the user was doing when an error occurs and is given high visual prominence in the dashboard. Set an initial context that you want to send with events – see Setting context for more information.

```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .setContext( "InitialTutorialStep" )
;
```


### User

Set global user data that you want to send with all captured events – see Adding user data for more information.

```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .setUser( "3", "bugs.nag@bugsnag.com", "Bugs Nag" )
;
```

When the `persistUser` configuration option is set to `true`, this user information will also be set in subsequent application launches.

```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .setUser( "3", "bugs.nag@bugsnag.com", "Bugs Nag" )
        .setPersistUser( true )
;
```


### Release Stage

Allows you to distinguish between errors that happen in different stages of the application release process (development, production, etc).

This is automatically configured by the notifier to be "production", unless DEBUG is defined during compilation in which case it will be set to "development". If you wish to override this, you can do so by setting the `releaseStage` property manually:

```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .setReleaseStage( "testing" )
;
```



