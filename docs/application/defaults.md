---
title: Defaults
sidebar_label: Defaults
---

The defaults allow you to setup some information for the user, to allow an application to 
customize its behavior to match a user's preferences. For example, units of measurement, 
or refresh intervals. This storage is very similar to the SharedObject concept, 
it allows you to store key-value data.

It stores information using the native "preferences" style data storage. It uses:

- Android: `SharedPreferences`
- iOS: `NSUserDefaults`
- default: `SharedObject`




## Access 

You access the defaults functionality through the `defaults` accessor, eg:

```actionscript
Application.service.defaults.getString( "key" );
```





## Setting and Retrieving Values

Values can be stored in a series of basic types, including:

- `String`
- `Boolean`
- `Number`
- `int`
- `Object`



### String Values 

String values are retrieved by using the `getString()` function specifying the `key` of the value you wish to retrieve. 

For example, say you are storing a "nick name" for a user:

```actionscript
trace( "Nickname = " + Application.service.defaults.getString( "nick_name" ) );
```

You set a string value by using the `setString()` function specifying the `key` and the new `value` you wish to set.

For example:

```actionscript
Application.service.defaults.setString( "nick_name", "My Nick Name" );
```


### Boolean Values

Boolean values are set and retrieved using the `setBoolean` and `getBoolean` functions respectively.

For example:

```actionscript
Application.service.defaults.setBoolean( "firstRun", false );
```

And to retrieve:

```actionscript
var firstRun:Boolean = Application.service.defaults.getBoolean( "firstRun" );
```

### Number Values

Number values are set and retrieved using the `setNumber` and `getNumber` functions respectively.

For example:

```actionscript
Application.service.defaults.setNumber( "progress", 0.36 );
```

And to retrieve:

```actionscript
var progress:Number = Application.service.defaults.getNumber( "progress" );
```


### int Values

Integer values are set and retrieved using the `setInt` and `getInt` functions respectively.

For example:

```actionscript
Application.service.defaults.setInt( "count", 17 );
```

And to retrieve:

```actionscript
var count:int = Application.service.defaults.getInt( "count" );
```


### Object Values

Object values are set and retrieved using the `setObject` and `getObject` functions respectively.
Objects can only contain primitive types as they are internally encoded as JSON objects for storage.


For example to set an object with a few properties:

```actionscript
var value:Object = {
    test: "some string", 
    number: 3
}; 

Application.service.defaults.setObject( "test.object", value );
```

And to retrieve:

```actionscript
var value:Object = Application.service.defaults.getObject( "test.object" );
if (value != null)
{
    trace( "get object : " + value.test + ":"+value.number );
}
```

A `null` value will be returned if there is no value set for the specified key.



## Removing a Value

To remove a value you can call the `remove()` function and specify the key of the value you wish to remove.

```actionscript
Application.service.defaults.remove( "nick_name" );
```

Once you call this the value will no longer be set in the user's defaults and any attempts to retrieve it will return invalid data.




## Saving

The values are saved periodically automatically, however if you wish to force any caching to be written to permanent storage you can call the `save()` function whenever needed.


```actionscript
Application.service.defaults.save();
```

This function is useful after you have updated a series of default values or set some initialisation data on first run of your application but is not necessary.



## Changed Event

Whenever a default value is changed a `DefaultsEvent.CHANGED` will be dispatched and will contain the `key` of the value that changed.


```actionscript
Application.service.defaults.addEventListener( DefaultsEvent.CHANGED, defaults_changedHandler );

function defaults_changedHandler( event:DefaultsEvent ):void 
{
    trace( "defaults_changedHandler(): " + event.key );
}
```


> Note:
>
> The changed event will be fired whenever a value is changed in the underlying storage medium. Some platforms have crossover with other features so the changed event may not only be dispatched for changes through the `defaults` functionality.
> 
> For example, this can happen when values are changed through the `settings` functionality in this extension as both these features use the same underlying *Preferences* functionality.
>
> You may also notice values that our extensions store for state information, so you should be aware only to respond to change events for keys that you are aware of.
>






