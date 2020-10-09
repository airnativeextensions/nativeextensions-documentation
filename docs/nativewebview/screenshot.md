---
title: Screenshot
sidebar_label: Screenshot
---

## Capturing a Screenshot

You can capture the web view to bitmap data by calling the `drawViewPortToBitmapData()` function and providing a correctly sized BitmapData object.

```as3
var bd:BitmapData = new BitmapData( webView.width, webView.height );

webView.drawViewPortToBitmapData( bd );
```


This process is asynchronous so the bitmap data will be updated after the capture is complete. If you need to know when the process is complete you can either listen for the `NativeWebViewEvent.DRAWVIEWPORT_COMPLETE` event or pass a callback function.


Using the event listener:

```as3
var bd:BitmapData = new BitmapData( webView.width, webView.height );
webView.addEventListener( NativeWebViewEvent.DRAWVIEWPORT_COMPLETE, function(e:NativeWebViewEvent):void
{
    webView.removeEventListener( NativeWebViewEvent.DRAWVIEWPORT_COMPLETE, arguments.callee );

    // Use bd
});
webView.drawViewPortToBitmapData( bd );
```


Using the callback function:

```as3
var bd:BitmapData = new BitmapData( webView.width, webView.height );
webView.drawViewPortToBitmapData( bd, function():void
{
    // Use bd
});
```

