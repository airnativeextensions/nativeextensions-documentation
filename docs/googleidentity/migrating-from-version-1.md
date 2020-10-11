---
title: Migrating from version 1
sidebar_label: Migrating from version 1
---


Version 2 brings the latest Google Identity Sign In SDK and with it some changes to the API. 

These changes are mainly around the options passed to `setup` and `getToken` functionality. 



## Google Identity Options

The options you supply to the setup function (`GoogleIdentityOptions`) have been simplified and updated to better reflect the functionality available. 

Firstly we have removed the "secret" references as these were misleading and we want to discourage their usage.

Additionally we have changed the references to Android and iOS so the `GoogleIdentityOptions` class more simply states the functionality currently in use.

To help with setup we have introduced the `GoogleIdentityOptionsBuilder`. This class will help you construct the correct options instance irrespective of platform.


To migrate, the following:

```actionscript
var options:GoogleIdentityOptions = new GoogleIdentityOptions();
options.clientID_iOS = CLIENTID_IOS;
options.clientID_Android = CLIENTID_ANDROID;
options.requestIdToken = true;
options.requestServerAuthCode = true;
options.scopes.push( "profile" );
```

becomes:

```actionscript
var options:GoogleIdentityOptions = new GoogleIdentityOptionsBuilder()
        .requestServerAuthCode()
        .requestIdToken()
        .setIOSClientID( CLIENTID_IOS )
        .setiOSServerClientID( SERVER_CLIENTID_IOS )
        .setAndroidServerClientID( SERVER_CLIENTID_ANDROID )
        .addScope( "profile" )
        .build();
```

The ability to set the server client id has been added to specify it's difference from the application client ids. The `SERVER_CLIENTID_ANDROID` is the equivalent of the `CLIENTID_ANDROID` used in the past, we have just clarified it's naming, to not confuse it with the Android client id in the console.



## getToken

The `getToken` functionality has been deprecated. 

You should instead migrate to using the Server Auth Code and exchanging that code for your users' access token on your server to enable [Server-Side Access](enabling-server-side-access)
.

