---
title: Create a WebView
sidebar_label: Create a WebView
---


Once you have initialised the extension, creating a web view is simply a matter of calling the `createWebView()` function with your parameters.

The following example creates a `WebView` of size 400x600 and loads a URL. It also demonstrates some of the events dispatched by the WebView.

```actionscript
var viewPort:Rectangle = new Rectangle( 0, 0, 400, 600 );
			
var webView:WebView = NativeWebView.service.createWebView( viewPort ) ;
```

You can then attach listeners and load content into the view

```actionscript
webView.addEventListener( NativeWebViewEvent.LOCATION_CHANGE, webView_locationChangeHandler );
webView.addEventListener( NativeWebViewEvent.COMPLETE, webView_completeHandler );
webView.addEventListener( NativeWebViewEvent.ERROR, webView_errorHandler );

webView.loadURL( "https://airnativeextensions.com" );
```

The events give you information about the content in the view

```actionscript
function webView_locationChangeHandler( event:NativeWebViewEvent ):void
{
	trace( "location change: " + event.data );
}

function webView_completeHandler( event:NativeWebViewEvent ):void
{
	trace( "load complete: " + event.data );
}

function webView_errorHandler( event:NativeWebViewEvent ):void
{
	trace( "error: " + event.data );
}
```



## Web View Options

When creating a `WebView` you can specify some options as to how the view will handle certain content and interactions.

To do so, create an instance of the `WebViewOptions` class and set the options as required. *Some of these options are platform dependent so make sure you read the documentation in the `WebViewOptions` class.*


```actionscript
var options:WebViewOptions = new WebViewOptions();

options.mediaPlaybackRequiresUserAction = true;
options.allowInlineMediaPlayback = true;
options.backgroundEnabled = true;
options.allowZooming = true;
options.cachePolicy = CachePolicy.LOAD_NO_CACHE;
options.scrollBarStyle = WebViewOptions.SCROLLBAR_LIGHT;
```

This then gets passed as the second parameter to the `createWebView()` function:

```actionscript
var webView:WebView = NativeWebView.service.createWebView( viewPort, options );
```


### Link Target Action

The link target action option determines how links with `"_blank"` targets are handled. In a normal browser situation these would open a new tab/window however in our environment you have the following options:

- `LinkTargetAction.SYSTEM_BROWSER`: New windows / popups from blank targets will open in the system browser;
- `LinkTargetAction.CURRENT_WEBVIEW`: Blank targets will load in the current webview;
- `LinkTargetAction.BLOCK`: Blank targets will be blocked, the `NativeWebViewEvent.LINK_BLOCKED` event will be dispatched if you wish to handle them in your code.


For example:

```actionscript
var options:WebViewOptions = new WebViewOptions();
options.linkTargetAction = LinkTargetAction.BLOCK;

var webView:WebView = NativeWebView.service.createWebView( viewPort, options );
webView.addEventListener( NativeWebViewEvent.LINK_BLOCKED, linkBlockedHandler );


function linkBlockedHandler( event:NativeWebViewEvent ):void 
{
	trace( "Link was blocked: " + event.data );
}
```


### Granting Media Permissions

If you plan to support media access through the web page it is worth considering how the permission grant process will be handled. 

When a page requests permission to use the microphone and/or camera there are generally 2 permission processes to go through. Firstly the normal application permission request of your user that your application would go through to normally access device hardware. Secondly when a web page makes this request there is a second process where you are given the opportunity to grant the web page permission to access the hardware.

You control this through the `mediaCapturePermissionGrantType` option on your web view. 

```actionscript
options.mediaCapturePermissionGrantType = PermissionGrantType.GRANT;
```

The available options for this are:

- `PermissionGrantType.GRANT`: Grants the permission;
- `PermissionGrantType.DENY`: Denies the permission;
- `PermissionGrantType.PROMPT`: Prompts the user for permission each time a view is created;
- `PermissionGrantType.GRANT_IF_SAME_HOST_ELSE_PROMPT`: If the security origin's host of the permission request equals the host of the WebView's current URL, the permission is granted if it has been granted before. Otherwise, the user gets prompted;
- `PermissionGrantType.GRANT_IF_SAME_HOST_ELSE_DENY`: If the security origin's host of the permission request equals the host of the WebView's current URL, the permission is granted if it has been granted before. Otherwise, the user gets denied;


:::note iOS / macOS
If you plan on supporting this you must ensure you have added the correct usage strings to your info additions:

```xml
<key>NSCameraUsageDescription</key>
<string>Require camera usage description</string>
<key>NSMicrophoneUsageDescription</key>
<string>Require record audio description</string>
```

The operating system will automatically handle the display of the permission request as required.
:::

:::note Android
The Android implementation of this extension will request the system permissions for you when a webpage requests them and then apply the policy you have set in the `mediaCapturePermissionGrantType` property.

You need to ensure you have added the appropriate permissions to your manifest, ie.

```xml
<uses-permission android:name="android.permission.CAMERA"/>
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
```
:::