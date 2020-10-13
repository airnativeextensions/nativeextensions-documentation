---
title: Crashlytics - Testing
sidebar_label: Testing
---

## Test your Firebase Crashlytics implementation

### Force a crash to test your implementation

You don't have to wait for a crash to know that Crashlytics is working. You can call `forceCrash()` to force a crash:


```actionscript
FirebaseCrashlytics.service.forceCrash();
```

When testing, reopen your app after calling the `forceCrash` method to make sure Crashlytics has a chance to report the crash. The report should appear in the Firebase console within five minutes.



### Enable Crashlytics debug logging

If your forced crash didn't crash, crashed before you wanted it to, or you're experiencing some other issue with Crashlytics, you can enable Crashlytics debug logging to track down the problem.

>
> Enabling debug mode will result in more logs being output to the logs which you can access via this [tutorial](/docs/tutorials/device-logs):
>
> [/docs/tutorials/device-logs](/docs/tutorials/device-logs)
>


#### Android 

To enable debug logging on your development device, set an `adb` shell flag before running your app:

```
adb shell setprop log.tag.FirebaseCrashlytics DEBUG
```

> 
> `adb` is a command line tool available in the AIR SDK 
>


#### iOS 


With iOS you have to launch your application with a specific flag. This is not possible using AIR SDK, however using the *libimobiledevice* tools it is possible to launch an application on your device with this flag.

Firstly you will need to install these tools. 

- https://www.libimobiledevice.org/

You can access installers in various locations but we suggest using homebrew:

```
brew install --HEAD usbmuxd
brew install --HEAD libimobiledevice  
brew install --HEAD ideviceinstaller  
```

> We found you have to use the `HEAD` version to get it to work currently 


Then to launch the application with the debugging `FIRDebugEnabled` flag:

```
idevicedebug run "com.distriqt.test" "-FIRDebugEnabled"
```




