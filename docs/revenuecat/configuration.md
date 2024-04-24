---
title: Configuration
---


## Initialization

Once you've installed the SDK for your app, it's time to initialize and configure it.

You should only configure RevenueCat once, usually early in your application lifecycle. Make sure you configure with your public SDK key only. 

In order to configure the SDK you create an instance of the `RevenueCatConfiguration` class and call the `configure()` method.

```actionscript
var configuration:RevenueCatConfiguration = new RevenueCatConfiguration()
        .setSdkKey( "PUBLIC_SDK_KEY" );

RevenueCat.instance.configure( configuration );
```

If you are supporting multiple platforms you can use the `implementation` flag to supply the correct key:

```actionscript
var configuration:RevenueCatConfiguration = new RevenueCatConfiguration()

if (RevenueCat.instance.implementation == "Android")
{
    configuration.setSdkKey( "GOOGLE_PUBLIC_SDK_KEY" );
}
else
{
    configuration.setSdkKey( "APPLE_PUBLIC_SDK_KEY" );
}

RevenueCat.instance.configure( configuration );
```



### Enabling Debug Logs

Debug logs will provide detailed log output in Xcode or LogCat for what is going on behind the scenes and should be the first thing you check if your app is behaving unexpectedly, and also to confirm there aren't any unhandled warnings or errors.

To enable debug logs by adding the following to your configuration:

```actionscript
var configuration:RevenueCatConfiguration = new RevenueCatConfiguration()
        .setSdkKey( "PUBLIC_SDK_KEY" )
        .setLogLevel( LogLevel.DEBUG );
```

