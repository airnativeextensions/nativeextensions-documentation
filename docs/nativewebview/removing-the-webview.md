---
title: Removing the WebView
sidebar_label: Removing the WebView
---

## Removing a WebView

In order to remove the web view from your application you call the `dispose` function on the WebView. 
It is important that you remove any event listeners before calling `dispose`. After calling `dispose` 
the WebView will be in an invalid state so calling any other functions will have undefined results.


```as3
if (webView != null)
{
	webView.removeEventListener( NativeWebViewEvent.LOCATION_CHANGING, webView_locationChangingHandler );
	webView.removeEventListener( NativeWebViewEvent.LOCATION_CHANGE, webView_locationChangeHandler );
	webView.removeEventListener( NativeWebViewEvent.COMPLETE, webView_completeHandler );
	webView.removeEventListener( NativeWebViewEvent.ERROR, webView_errorHandler );
	webView.removeEventListener( NativeWebViewEvent.JAVASCRIPT_RESPONSE, webView_javascriptResponseHandler );
	webView.removeEventListener( NativeWebViewEvent.JAVASCRIPT_MESSAGE, webView_javascriptMessageHandler );
	webView.removeEventListener( TouchEvent.TOUCH_TAP, webView_tapHandler );
	webView.dispose();
	webView = null;
}
```

