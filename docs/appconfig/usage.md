---
title: Usage
---


## Get Values

Once you have setup your application using the extension is a matter of retrieving the values you require.
To retrieve a value call `getString()` with the required `key`:


```actionscript 
var value:String = AppConfig.instance.getString( key );
```

If the value has been set from the MDM then the most recently received value will be returned.

If the value hasn't been set then the extension will attempt to read any defined "default" values
(eg on Android the value in the restrictions resource xml) otherwise `null` will be
returned.



## List Keys

You can retrieve a list of the available keys by calling `getKeys()`

```actionscript
var keys:Array = AppConfig.instance.getKeys();

for each (var key:String in keys)
{
    var value:String = AppConfig.instance.getString( key );
}
```

If default values are available (eg on Android as defined in the resources) then these will also be listed as available keys here.

In other cases (eg on iOS) the keys may only return keys for values that have been set via MDM.


## Events

You can listen to the `AppConfigEvent.CHANGED` event to be notified of when the values are changed.

```actionscript
AppConfig.instance.addEventListener( AppConfigEvent.CHANGED, changedHandler );

function changedHandler( event:AppConfigEvent ):void
{
    trace( "values changed" );
}
```

:::caution
On iOS this may be triggered when any of the NSUserDefaults values are changed, not just values in the managed config. 
So you should use this event to refresh your values, but just be aware that it may not have been the managed config that changed.
:::



## Testing


### iOS Simulator

You can set values in the simulator using the following command:

```
xcrun simctl spawn booted defaults write com.distriqt.test 'com.apple.configuration.managed' -dict 'url' 'https://airnativeextensions.com' 'port' 80 'some_key' 'some_value'
```

You can clear the values using:

```
xcrun simctl spawn booted defaults delete com.distriqt.test
```

>
> In these commands replace `com.distriqt.test` with your application id.
>

