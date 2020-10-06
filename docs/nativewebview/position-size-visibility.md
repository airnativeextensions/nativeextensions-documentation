---
title: Position Size Visibility
sidebar_label: Position Size Visibility
---

## Changing the Position and Size of the WebView

Resizing a web view can be achieved by changing the view port of the webview by 
setting a new rectangular area to display the web view. 

For example:

```actionscript
var viewPort:Rectangle = new Rectangle( 15, 15, 300, 600 );

webview.viewPort = viewPort;
```

You can also control the x, y, width and height properties individually.

For example:

```actionscript
webView.width = 300;
webView.height = 600;
webView.x = 15;
webView.y = 15;
```

We suggest using the viewPort to update the position and size as it results in
one view port change rather than several from setting the properties individually.



## Visibility

You can remove the web view from the view altogether by setting the `visible` property.

When `false` this will remove the web view from the current view, while still keeping
the current state and any ongoing operations continuing in the background.

You can then later present the view again by setting this to `true`. 

The default is `true` and presents the web view to the user.


For example to hide the web view:

```actionscript
webView.visible = false;
```



