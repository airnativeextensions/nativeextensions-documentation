---
title: AppExtension - Introduction
sidebar_label: AppExtension - Introduction
---

## Introduction

### What is an app extension.

One key point here is an "App Extension" is an iOS term and is not related to an "AIR Native Extension". 
These concepts are completely different. It is not sensible to create an ANE to implement an App Extension,
even though they are both implementing native code, they constitute different parts of an iOS application.

>
> An app extension lets you extend custom functionality and content beyond your app and make it available 
> to users while they’re interacting with other apps or the system.
>
> You create an app extension to enable a specific task. For example, to let users post to your social 
> service from a web browser, you can provide a Share extension. Or, to let users catch up on their 
> favorite team, you can provide a Today widget that displays current sports scores in Notification 
> Center. You can even create an app extension that provides a custom keyboard that users can use in 
> place of the iOS system keyboard.
>

An iOS "App Extension" is a separate application that is packaged as part of your `ipa` and allows 
you to make functionality available to users while they are using other applications. A more applicable
description is referring to these as "plugins".

An important note here is that an App Extension is created for **one** particular application and 
is tied to it's identifier. It's not distributable like an ANE.


The simplest example of this is a share extension that shows your application as the target of 
a share action in another application. 

More information in the [Apple developer docs](https://developer.apple.com/library/content/documentation/General/Conceptual/ExtensibilityPG/)



### Integrating an App Extension with AIR

Adding an App Extension to your AIR application is entirely possible. However it will require you
to use the native development tools, namely **Xcode** to create the App Extension and then you
can package this as part of your AIR application by placing it in a specific place in your 
package.




