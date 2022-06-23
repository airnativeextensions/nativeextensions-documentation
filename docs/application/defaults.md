---
title: Defaults
sidebar_label: Defaults
---

The defaults allow you to setup some information for the user, to allow an application to
customize its behaviour to match a user's preferences. For example, units of measurement,
or refresh intervals. This storage is very similar to the SharedObject concept,
it allows you to store key-value data.

It stores information using the native "preferences" style data storage. It uses:

- Android: `SharedPreferences`
- iOS: `NSUserDefaults`
- default: `SharedObject`


## Shared or Custom

By default, the `defaults` are placed in a custom object to separate them from other settings and avoid conflicts with other native components. However there are times where this behaviour is not desirable. 

For example, if you are trying to retrieve the shared values stored by advertising or data collection 
services in the "IAB Europe Transparency and Consent Framework". This includes values like the GDPR 
personalisation settings and other user data sharing requirements. 

When you need access to these values we suggest changing the behaviour to use the shared values by 
setting the value of `useSharedDefaults` to `true`:

```actionscript
Application.service.defaults.useSharedDefaults = true;
```

:::note
You will not be able to access values that were stored when this value is changed, i.e. if you have previously saved values in the custom object, and then change to the shared object, they will no longer be available.

You can change this value as you require before accessing values, however be aware that changing this value does dispose and create objects so will have a performance hit if you do this regularly.

We suggest moving to one consistent method to avoid switching methods. 
:::


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

:::note
iOS does not give information on the key that was changed only that the defaults have changed so the `key` will always be empty on iOS
:::

```actionscript
Application.service.defaults.addEventListener( DefaultsEvent.CHANGED, defaults_changedHandler );

function defaults_changedHandler( event:DefaultsEvent ):void
{
    trace( "defaults_changedHandler(): " + event.key );
}
```

:::info
The changed event will be fired whenever a value is changed in the underlying storage medium. Some platforms have crossover with other features so the changed event may not only be dispatched for changes through the `defaults` functionality.

For example, this can happen when values are changed through the `settings` functionality in this extension as both these features use the same underlying _Preferences_ functionality.

You may also notice values that our extensions store for state information, so you should be aware only to respond to change events for keys that you are aware of.
:::
