---
title: WebView Information
sidebar_label: WebView Information
---

## WebView Information

You can get information about the current state and contents of the web view through a range of methods.

For example you can retrieve the current loaded url through the `location` property.

```as3
var currentUrl:String = webView.location;
```

Similarly you can retrieve the last loaded status code, user agent, and several other properties:

```as3
trace( "UserAgent:  " + webView.userAgent );
trace( "StatusCode: " + webView.statusCode );
```



### Cookies

You can access the current cookies loaded in the page using the `cookies` property.

```as3
var cookies:Object = webView.cookies;
for (var cookieName:String in cookies)
{
    trace( cookieName +" = " + cookies[cookieName] );
}
```



### HTML Source

You can retrieve the current page source using the `htmlSource` property. This may be useful if you just want to inspect the contents of the loaded page, however if you need to interact with the content you should look into using the [javascript communication interface](communication).

```as3
trace( webView.htmlSource );
```



