---
title: Keychain
sidebar_label: Keychain
---

The keychain functionality is similar to the defaults however this data is stored in the users keychain encrypted storage.

Data stored here will generally survive an application reinstallation so is useful for storing critical pieces of user information.

Data is stored as strings in key/value pairs.


## Supported

To check if the keychain functionality is available on the current device you can use the `isSupported` flag:


```actionscript
if (Application.service.keychain.isSupported)
{
    // Keychain functionality is supported 
}
```


## Set a value

To set a value call `set` with the key you wish to set and the value to associate:


```actionscript
Application.service.keychain.set( "key",  value );
```


## Get a value

To retrieve a value, call `get` with the key of interest:


```actionscript
var value:String = Application.service.keychain.get(key);
```			



## Remove a value

If you wish to completely remove or delete a key/value pair, call `remove` with the key of interest: 

```actionscript
Application.service.keychain.remove(key);
```


