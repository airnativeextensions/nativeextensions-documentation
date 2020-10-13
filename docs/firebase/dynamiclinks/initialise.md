---
title: DynamicLinks - Initialise
sidebar_label: Initialise
---




## Setting Scheme

On iOS you must set the `deepLinkURLScheme` in the extension to correctly handle opened links on versions of iOS that use custom url scheme.

This is the same url scheme (`APP_SCHEME`) that you added to the info additions previously when 
[adding the extension](add-the-extension)

The easiest way to do this is set as below, before calling `initialiseApp()`:

```actionscript
Firebase.service.deepLinkURLScheme = "APP_SCHEME";
Firebase.service.initialiseApp();
```


If you are passing your own `FirebaseOptions` to `initialiseApp` you can specify the scheme
as part of the options:

```actionscript
var options:FirebaseOptions = new FirebaseOptions();
// Other options
options.deepLinkURLScheme = "APP_SCHEME";

Firebase.service.initialiseApp( options );
```

>
> Note: You cannot use these two methods together
>


### Example

To match the example scheme added in the [iOS info additions example](add-the-extension#ios-example):

```actionscript
Firebase.service.deepLinkURLScheme = "distriqt";
Firebase.service.initialiseApp();
```
