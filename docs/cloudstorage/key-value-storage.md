---
title: Key-Value Storage
sidebar_label: Key-Value Storage
---

The key-value storage system can be broken down into several main concepts:

- setting a value;
- getting a value;
- listen for changes;

This represents all the functionality you will need to implement to be able to successfully 
store values in the cloud. 


### Set Values

Firstly to set a value, you call `setString`, which takes a `key` and a `value` as parameters. 

```actionscript title="AIR"
CloudStorage.service.keyValueStore.setString( "KEY_FOR_VALUE", "some_value" );
```

```csharp title="Unity"
CloudStorage.Instance.SetString("KEY_FOR_VALUE", "some_value");
```

or to set an integer value:

```actionscript title="AIR"
CloudStorage.service.keyValueStore.setInt( "KEY_FOR_VALUE", 5 );
```

```csharp title="Unity"
CloudStorage.Instance.SetInt("KEY_FOR_VALUE", 5);
```


### Get Values

You can then retrieve the value using `getString` providing the same `key` as 
a parameter which will then return the value set previously.

For example: 

```actionscript title="AIR"
var value:String = CloudStorage.service.keyValueStore.getString( "KEY_FOR_VALUE" );
```

```csharp title="Unity"
var value = CloudStorage.Instance.GetString("KEY_FOR_VALUE");
```


### Remove Value

To remove a value that you have previously set you can use the `Remove` function:

```actionscript title="AIR"
CloudStorage.service.keyValueStore.remove("KEY_FOR_VALUE");
```

```csharp title="Unity"
CloudStorage.Instance.Remove("KEY_FOR_VALUE");
```



### Events

The extension will dispatch events when the values are changed (on another device) and when 
other system events occur:

- Changed: Indicates a value has changed and the event will contain an array of keys that changed
	- AIR: `KeyValueStoreEvent.CHANGED`
	- Unity: `OnChanged`
- Over Quota: Your app's key-value store has exceeded its space quota on the server
	- AIR: `KeyValueStoreEvent.OVER_QUOTA`
	- Unity: `OnOverQuota`
- Account Changed: The user's account was changed
	- AIR: `KeyValueStoreEvent.ACCOUNT_CHANGED`
	- Unity: `OnAccountChanged`
- Initial Sync: The initial data synchronisation from the server was received
	- AIR: `KeyValueStoreEvent.INITIAL_SYNC`
	- Unity: `OnInitialSync`


More information see the `KeyValueStoreEvent` class documentation.


## Example

The following example shows the core concepts, setting then retrieving a value and listening 
to the `KeyValueStoreEvent.CHANGED` (`OnChanged` on Unity) event.


```actionscript title="AIR"
CloudStorage.service.keyValueStore.addEventListener( KeyValueStoreEvent.CHANGED, keyStore_changedHandler );
CloudStorage.service.keyValueStore.synchronise();

// Set a value
CloudStorage.service.keyValueStore.setString( "KEY_FOR_VALUE", newValue );

// Retrieve the value
var value:String = CloudStorage.service.keyValueStore.getString( "KEY_FOR_VALUE" );


function keyStore_changedHandler( event:KeyValueStoreEvent ):void
{
	trace( "KeyStore CHANGED" );
	// event.changedKeys contains an array of changed keys
}
```


```csharp title="Unity"
CloudStorage.Instance.OnChanged += Instance_OnChanged;
CloudStorage.Instance.Synchronise();

// Set a value
CloudStorage.Instance.SetString( "KEY_FOR_VALUE", "some_value" );

// Retrieve the value
string value = CloudStorage.Instance.GetString( "KEY_FOR_VALUE" )



private void Instance_OnChanged(KeyValueStoreEvent e)
{
	Debug.Log("OnChanged");
	// e.changedKeys contains an array of changed keys
	foreach (string key in e.changedKeys)
	{
		Debug.Log("OnChanged: " + key);
	}
}
```




