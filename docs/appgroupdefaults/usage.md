---
title: Usage
sidebar_label: Usage
---

## Configuration 

To correctly configure the extension you will need to inform it about your group and a salt value to use for encryption.

The salt value is only applicable to Android however the group is used on both. 
The salt can be any string you require and is used to setup the file encryption algorithm. 


For the group, you should use the identifier of your AppGroup setup in the iOS member center. 
This is used to identify the correct group to use on iOS and similarly on Android it's used as the
name of the file containing the preferences.

AIR:

```actionscript
AppGroupDefaults.service.setup( 
	"12345678", 
	"group.application.group.identifier", 
	AppGroupDefaults.TYPE_CONTENTPROVIDER 
);
```

Unity: 

```csharp
AppGroupDefaults.Instance.Setup( 
	"12345678", 
	"group.application.group.identifier", 
	AppGroupDefaults.TYPE_CONTENTPROVIDER 
);
```


The setup call can take a short amount of time to initialise the encryption algorithms so you should
wait for the initialised event before attempting to read or write values.

With AIR you listen for the `AppGroupDefaultsEvent.INITIALISED` event and with Unity add a listener to the `OnInitialised` event.


AIR: 

```actionscript
AppGroupDefaults.service.addEventListener( AppGroupDefaultsEvent.INITIALISED, initialisedHandler );
AppGroupDefaults.service.setup( 
	"12345678", 
	"group.com.distriqt.test",
	AppGroupDefaults.TYPE_FILE 
);
					
function initialisedHandler( event:AppGroupDefaultsEvent ):void
{
	// Access data here
}
```


Unity:

```csharp
AppGroupDefaults.Instance.OnInitialised += Instance_OnInitialised;
AppGroupDefaults.Instance.Setup(
	"12345678", // salt
	"group.com.distriqt.test", // app group identifier
	AppGroupDefaults.TYPE_FILE // Android type
);

void Instance_OnInitialised(distriqt.plugins.appgroupdefaults.events.AppGroupDefaultsEvent e)
{
	// Access data here
}
```


## Get a value

Retrieving a value is as simple as calling `getValue()` with the key of interest.

AIR:

```actionscript
trace( "value = " + AppGroupDefaults.service.getValue( "some_key" ) );
```

Unity:

```csharp
Debug.Log("value = " + AppGroupDefaults.Instance.GetValue( "some_key" ));
```


This will return `null` if the key hasn't been set before or if you haven't called `setup` beforehand.


## Set a value

Setting a value is likewise as simple, calling the `setValue` function.

AIR:

```actionscript
var success:Boolean = AppGroupDefaults.service.setValue( "some_key", "some_value" );
```

Unity:

```csharp
bool success = AppGroupDefaults.Instance.SetValue("some_key", "some_value");
```


This will return `true` if the value was set correctly and `false` if there was an issue, most likely 
that the `setup` function hasn't been called, or if the `isSupported` flag is `false`.


## Listing Keys

You can use the `getKeys` function to retrieve an Array of all the current keys
set in the defaults. 

This allows you to list all settings currently stored in the defaults.

AIR: 

```actionscript
var keys:Array = AppGroupDefaults.service.getKeys();
for each (var key:String in keys)
{
	var value:String = AppGroupDefaults.service.getValue( key );
	trace( key + " = " + value );
}
```

Unity:

```csharp
string[] keys = AppGroupDefaults.Instance.GetKeys();
foreach (string key in keys)
{
	string value = AppGroupDefaults.Instance.GetValue(key);
	Debug.Log(key + " = " + value);
}
```

## Removing a Value

If you wish to clear a value and remove it from the defaults, simply call the `remove` function with the key of interest.

AIR: 

```actionscript
AppGroupDefaults.service.remove( "some_key" );
```

Unity:

```csharp
AppGroupDefaults.Instance.Remove("some_key");
```

## Removing All Values

If you wish to remove all values from the defaults, simply call the `removeAll` function:

AIR:

```actionscript
AppGroupDefaults.service.removeAll();
```

Unity: 

```csharp
AppGroupDefaults.Instance.RemoveAll();
```


