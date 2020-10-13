---
title: Loading Packaged Files
sidebar_label: Loading Packaged Files
---

## Loading Packaged Files 

You can load files that are packaged with your application by simply passing an accessible 
location to the `loadURL()` call. You may have to copy the files to an accessible location, 
especially on Android.

In the example application we have a directory named `www` that contains several example html 
files. In the following we show how to copy these to an accessible location and then load 
them into the web view.

```actionscript
var webView:WebView = NativeWebView.service.createWebView( new Rectangle( 0, 0, 400, 600 ) ) ;

var file:File;
var fileUrl:String;
if (NativeWebView.service.version.indexOf("Android") > 0)
{
	// Android: Copy the application packaged files to an accessible location			
	var packagedWWWRoot:File = File.applicationDirectory.resolvePath( "www" );
	var destination:File = File.applicationStorageDirectory.resolvePath( "www" );
	packagedWWWRoot.copyTo( destination, true );
	// Grab the file url
	file = File.applicationStorageDirectory.resolvePath( "www/example.html" );
	fileUrl = "file://"+file.nativePath;
}
else 
{
	// iOS:
	file = File.applicationDirectory.resolvePath( "www/example.html" );
	fileUrl = "file://"+file.nativePath;
}

webView.loadURL( fileUrl );
```

