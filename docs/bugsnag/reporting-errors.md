---
title: Reporting Errors
sidebar_label: Reporting Errors
---



## Reporting errors

To report an error call the `notifyError()` method


```actionscript
try
{
    throw new IOError( "IO issue", 1023 )
}
catch (e:Error)
{
    BugSnag.instance.notifyError( e );
}
```





## Reporting uncaught error events

You can add a global listener in your application to the `UncaughtErrorEvent.UNCAUGHT_ERROR` event and pass this directly to the BugSnag extension. With this in place any uncaught errors in your AIR application will be reported to BugSnag as unhandled errors.

```actionscript
loaderInfo.uncaughtErrorEvents.addEventListener( UncaughtErrorEvent.UNCAUGHT_ERROR, BugSnag.handleUncaughtError );
```



## Showing full stacktraces 

Your error reports will contain the stacktraces from the `Error` objects including class and methods names. File and line number information will also be available if a debuggable swf was used in your application.

For native errors, stacktraces from Apple platforms include backtraces with memory addresses, but symbolication is required to replace the memory addresses with human-readable function names, file paths, and line numbers. You will need to upload your dSYM files to BugSnag for this to occur.  Follow the [Showing full stacktraces](https://docs.bugsnag.com/platforms/ios/showing-full-stacktraces/) guide to configure symbolication during your build and release process.




## Logging breadcrumbs

In order to understand what happened in your application before each error, it can be helpful to leave short log statements that we call breadcrumbs. A configurable number of breadcrumbs are attached to each error report to help diagnose what events led to the error.


### Automatically captured breadcrumbs

By default, BugSnag captures common events including:

- iOS
    - Low memory warnings
    - Device rotation
    - Screenshot capture
    - Menu presentation
    - Table view selection
    - Window visibility changes
    - Thermal state changes
    - Non-fatal errors
- Android:
    - Activity Lifecycle callbacks
    - Network connectivity changes
    - Bluetooth connectivity changes
    - Battery state changes
    - Device rotation
    - Media Scanner events
    - Telephony events
    - [Other device metrics and more](https://docs.bugsnag.com/platforms/android/automatically-captured-data/#breadcrumbs)


### Leaving custom breadcrumbs

You can use the leaveBreadcrumb method to log potentially useful events in your own applications:

```actionscript
BugSnag.instance.leaveBreadcrumb( "App loaded" );
```

BugSnag will keep track of the time and order of the breadcrumbs and show them on your dashboard.


Additional data can also be attached to breadcrumbs by providing the optional type and metadata parameters:

```actionscript
BugSnag.instance.leaveBreadcrumb(
        "User left a breadcrumb",
        {
            level: 5,
            stage: "start"
        },
        BreadcrumbType.USER
);
```

- Additional data can be attached to breadcrumbs by providing the additional metadata argument. Metadata will be presented on the BugSnag dashboard alongside the breadcrumb name and type.

- Breadcrumb "types" can be used to differentiate different types of events, such as user activity and changes in application state.



## Session tracking

BugSnag tracks the number of "sessions" that happen within your application. This allows you to compare stability scores between releases and helps you to understand the quality of your releases.

Sessions are captured and reported by default. This behavior can be disabled using the `autoTrackSessions` configuration option.

BugSnag will automatically report a session each time the app is launched or enters the foreground after being in the background for at least 30 seconds.

For more information about manually controlling session tracking, see [Capturing sessions](sessions).



## Adding user data

Information about the user affected by errors can be added to events sent to your BugSnag dashboard by setting an initial user ID, email and name in Configuration when BugSnag starts:

```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .setUser( "3", "bugs.nag@bugsnag.com", "Bugs Nag" )
;
```

When the persistUser configuration option is set to true, this user information will also be set in subsequent application launches.

```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .setUser( "3", "bugs.nag@bugsnag.com", "Bugs Nag" )
        .setPersistUser( true )
;
```


If the user changes whilst the application is running, for example if a user signs in, you can update the user data on the BugSnag client for all subsequent events:


```actionscript
BugSnag.instance.setUser( "3", "bugs.nag@bugsnag.com", "Bugs Nag" )
```




## Setting Context

BugSnag uses the concept of "contexts" to help display and group your errors. The context represents what was happening in your application at the time an error occurs and is given high visual prominence in the dashboard.

By default this is set to the file name and line number of the topmost in-project stackframe. If you would like to set this value manually, you can set it with an initial value in Configuration when BugSnag starts:

```actionscript
var config:BugSnagConfig = new BugSnagConfig()
        .setContext( "InitialTutorialStep" )
;
```

The context can then be amended on the Bugsnag client as/when it changes for all subsequent events:


```actionscript
BugSnag.instance.setContext( "SecondTutorialStep" )
```
