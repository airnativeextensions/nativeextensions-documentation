---
title: Create a WebView
sidebar_label: Create a WebView
---

## Create a WebView 

Once you have initialised the extension, creating a web view is simply a matter of calling the `createWebView()` function with your parameters.

The following example creates a `WebView` of size 400x600 and loads a URL. It also demonstrates some of the events dispatched by the WebView.

```as3
var viewPort:Rectangle = new Rectangle( 0, 0, 400, 600 );
			
var webView:WebView = NativeWebView.service.createWebView( viewPort ) ;
```

You can then attach listeners and load content into the view

```as3
webView.addEventListener( NativeWebViewEvent.LOCATION_CHANGE, webView_locationChangeHandler );
webView.addEventListener( NativeWebViewEvent.COMPLETE, webView_completeHandler );
webView.addEventListener( NativeWebViewEvent.ERROR, webView_errorHandler );

webView.loadURL( "https://airnativeextensions.com" );
```

The events give you information about the content in the view

```as3
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



### Web View Options

When creating a `WebView` you can specify some options as to how the view will handle certain content and interactions.

To do so, create an instance of the `WebViewOptions` class and set the options as required. *Some of these options are platform dependent so make sure you read the documentation in the `WebViewOptions` class.*


```as3
var options:WebViewOptions = new WebViewOptions();

options.mediaPlaybackRequiresUserAction = true;
options.allowInlineMediaPlayback = true;
options.backgroundEnabled = true;
options.allowZooming = true;
options.cachePolicy = CachePolicy.LOAD_NO_CACHE;
options.scrollBarStyle = WebViewOptions.SCROLLBAR_LIGHT;
```

This then gets passed as the second parameter to the `createWebView()` function:

```as3
var webView:WebView = NativeWebView.service.createWebView( viewPort, options );
```


#### Link Target Action

The link target action option determines how links with `"_blank"` targets are handled. In a normal browser situation these would open a new tab/window however in our environment you have the following options:

- `LinkTargetAction.SYSTEM_BROWSER`: New windows / popups from blank targets will open in the system browser;
- `LinkTargetAction.CURRENT_WEBVIEW`: Blank targets will load in the current webview;
- `LinkTargetAction.BLOCK`: Blank targets will be blocked, the `NativeWebViewEvent.LINK_BLOCKED` event will be dispatched if you wish to handle them in your code.


For example:

```as3
var options:WebViewOptions = new WebViewOptions();
options.linkTargetAction = LinkTargetAction.BLOCK;

var webView:WebView = NativeWebView.service.createWebView( viewPort, options );
webView.addEventListener( NativeWebViewEvent.LINK_BLOCKED, linkBlockedHandler );


function linkBlockedHandler( event:NativeWebViewEvent ):void 
{
	trace( "Link was blocked: " + event.data );
}
```

