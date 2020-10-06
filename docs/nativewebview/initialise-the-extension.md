---
title: Initialise the Extension
sidebar_label: Initialise the Extension
---

## Supported

You should always check whether the extension is supported before making calls. 
This allows you to react to whether the functionality is available on the device.

```actionscript
if (NativeWebView.isSupported)
{
  //	Functionality here
}
```

## Initialisation

You must initialise the platform before attempting to utilise the extension. This initialisation process will configure any libraries that are needed by the extensions. Additionally certain platforms have configuration options that will apply to all webviews that are created using the extension. 

In order to specify these options and initialise the platform you must call `initialisePlatform()` with an instance of `NativeWebViewOptions` before creating any `WebView`s. If you don't then the extension will fail to create any `WebView` instances and your application may crash.

For example: 

```actionscript
var options:NativeWebViewOptions = new NativeWebViewOptions()
        .setWindowsOptions(
                new WindowsOptions()
        )
        .setUserAgent("distriqt/webview");
```


The initialise process is asynchronous so you can either use a **callback**:

```actionscript
NativeWebView.service.initialisePlatform( options, function(success:Boolean):void
{
        // You can now create web views
});
```

Or listen for the `NativeWebViewEvent.INITIALISED` event:

```actionscript
NativeWebView.service.addEventListener( NativeWebViewEvent.INITIALISED, function( event:NativeWebViewEvent ):void
{
        NativeWebView.service.removeEventListener( NativeWebViewEvent.INITIALISED, arguments.callee );
        // You can now create web views
});
NativeWebView.service.initialisePlatform( options );
```


:::note
See the notes in the `NativeWebViewOptions` class for details and support of the specific options
:::
