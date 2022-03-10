---
title: Invites - Initialise
sidebar_label: Initialise
---

>
> **DEPRECATED**
>
> Please note that the Invites functionality has been removed from the latest Firebase SDK. 
> You should update your applications to use dynamic links directly in combination with your own share functionality.
> You can use the [Share ANE](https://airnativeextensions.com/extension/com.distriqt.Share) as a starting point.
>
> This documentation is only for legacy reference.
>




## Setting Scheme

On iOS you must set the `deepLinkURLScheme` in the extension to correctly handle opened links.
This is the same url scheme (`APP_SCHEME`) that you added to the info additions previously when 
[adding the extension](../dynamiclinks/add-the-extension.mdx)

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

