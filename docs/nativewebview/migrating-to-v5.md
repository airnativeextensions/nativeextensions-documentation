---
title: Migrating to v5
sidebar_label: Migrating to v5
---

## Version 5

Version 5 of this extension introduces the desktop (windows/macOS) implementations and along with this several changes were made to the initialisation process to correctly setup the extension.

Existing code will throw an `Error` with the message:

> 
> `"You must call initialisePlatform and await completion before using any of this extensions functionality."`
>


In order to correctly migrate to this version you need to add the following initialisation code to some point in your application before you attempt to create a `WebView`:


```actionscript
var options:NativeWebViewOptions = new NativeWebViewOptions();
NativeWebView.service.initialisePlatform( options, function(success:Boolean):void
{
        // You can now create web views
});
```

This will correctly setup any libraries required by the platform and initialise the extension.


More information here: [Initialise the Extension](initialise-the-extension.md)

