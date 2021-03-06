---
title: RemoteConfig - Usage
sidebar_label: Usage
---

## 

You can use Firebase Remote Config to define parameters in your app and update their values in the cloud, allowing you to modify the appearance and behavior of your app without distributing an app update. This guide shows you how to use Remote Config in your app, following these steps:

- Set in-app default parameter values.
- Get parameter values to use in your app.
- Set parameter values in the Remote Config service (as needed).
- Fetch and activate values from the Remote Config service (as needed).



## Default Parameters

Default parameters are values you set in your application that will be used before the remote config
has been retrieved from the server. You should do this early in your application so your application
behaves predictably before it fetches values from the Remote Config service.

Setting defaults is a matter of constructing your default values and then calling the `setDefaults`
method:


```actionscript
var defaultValues:Object = {
	welcome_message: "Default welcome message",
	welcome_message_caps: true
};

FirebaseRemoteConfig.service.setDefaults( defaultValues );
```

The default values object must be a simple object, basically a key/value set. 
The values in the object must be of simple data types (`int`, `Number`, `String` etc) Anything more complex will cause issues.


## Get Parameters

Now you can get parameter values from the Remote Config object. If you set values in the Remote Config service, fetch them, and then activate them, those values are available to your app. Otherwise, you get the in-app parameter values configured using setDefaults(). To get these values, call the method listed below that maps to the data type expected by your app, providing the parameter key as an argument:

- `getBoolean`
- `getDouble`
- `getInt`
- `getString`

For example, to retrieve the "welcome message" above:

```actionscript
var welcomeMessage:String = FirebaseRemoteConfig.service.getString( "welcome_message" );
```


## Set parameter values in the service (as needed)

1. In the [Firebase console](https://console.firebase.google.com/), open your project.
2. Select **Remote Config** from the menu to view the Remote Config dashboard.
3. Define parameters with the same names as the parameters that you defined in your app. For each parameter, you can set a default value (which will eventually override the corresponding in-app default value), and you can also set conditional values. To learn more, see [Remote Config Parameters and Conditions](https://firebase.google.com/docs/remote-config/parameters).



## Fetch and activate values

To fetch parameter values from the Remote Config service, call the `fetchAndActivate()` method. Any values that you set in the Remote Config service are fetched and cached in the Remote Config object.

```actionscript
FirebaseRemoteConfig.service.fetchAndActivate();
```

Once complete the extension will automatically activate the new values and dispatch a complete event.

```actionscript
FirebaseRemoteConfig.service.addEventListener( FirebaseRemoteConfigEvent.FETCH_COMPLETE, fetch_completeHandler );
```

```actionscript
private function fetch_completeHandler( event:FirebaseRemoteConfigEvent ):void
{
	// New values available here
}
```


## Throttling

If an app fetches too many times in a short time period, fetch calls are throttled.

During app development, you might want to fetch and activate configs very frequently (many times per hour) to let you rapidly iterate as you develop and test your app. To accommodate rapid iteration on a project with up to 10 developers, you can temporarily set a FirebaseRemoteConfigSettings object with a low minimum fetch interval (`setMinimumFetchIntervalInSeconds`) in your app.

The default minimum fetch interval for Remote Config is 12 hours, which means that configs won't be fetched from the backend more than once in a 12 hour window, regardless of how many fetch calls are actually made. 

To set the minimum fetch interval to a custom value, use:

```actionscript
var settings:FirebaseRemoteConfigSettings = new FirebaseRemoteConfigSettings()
		.setMinimumFetchIntervalInSeconds( 5 );

FirebaseRemoteConfig.service.setConfigSettings( settings );
```

> This value is in seconds so the above would allow updates to fetch calls every 5 seconds.

:::caution
Keep in mind that this setting should be used for development only, not for an app running in production. If you're just testing your app with a small 10-person development team, you are unlikely to hit the hourly service-side quota limits. But if you pushed your app out to thousands of test users with a very low minimum fetch interval, your app would probably hit this quota.
:::


## Next Steps

To learn more about using Remote Config in your app, see the Remote Config Frequently Asked Questions on [fetching and activating parameter values](https://firebase.google.com/support/faq#remote-config-values), [developer mode and throtting](https://firebase.google.com/support/faq#remote-config-requests), and [fetch timing](https://firebase.google.com/support/faq#remote-config-timing).


