---
title: Location Changes
sidebar_label: Location Changes
---

## Location Change Events

There are two events related to the location in the web view changing. The first is 
`NativeWebViewEvent.LOCATION_CHANGING` which will get dispatched when the location 
in the web view is about to change. The second is `NativeWebViewEvent.LOCATION_CHANGE`
which is dispatched when the location is changed.

Using the `NativeWebViewEvent.LOCATION_CHANGING` event allows you to intercept links 
from the web view and handle them differently. If you call `event.preventDefault()` 
then the location change will not occur and the `NativeWebViewEvent.LOCATION_CHANGE` 
will not be dispatched. The web view will not change.


```as3
var webView:WebView = NativeWebView.service.createWebView( new Rectangle( 0, 0, 400, 600 ) ) ;

webView.addEventListener( NativeWebViewEvent.LOCATION_CHANGING, webView_locationChangingHandler );
webView.addEventListener( NativeWebViewEvent.LOCATION_CHANGE, webView_locationChangeHandler );

webView.loadURL( "https://airnativeextensions.com" );

function webView_locationChangingHandler( event:NativeWebViewEvent ):void
{
	trace( "location changing to: " + event.data );

	// Stop the location change by calling 'event.preventDefault()'
	event.preventDefault();
}

function webView_locationChangeHandler( event:NativeWebViewEvent ):void
{
	trace( "location changed to: " + event.data );
}
```



>
> You may wish to see the `WebViewOptions.linkTargetAction` setting and handle `BLOCKED` links as well. See the documentation in the [Web View Options](create-a-webview#link-target-action)
>


