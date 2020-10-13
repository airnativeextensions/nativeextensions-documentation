---
title: Android Events
sidebar_label: Android Events
---

A small note about events on Android. 

The result event may not always return success. The extension returns the event code returned from the application however as a lot of applications on Android don't necessarily respond with success or failure events you will most likely just get a `ShareEvent.CLOSED`. 

So you should be prepared to treat a cancelled or closed event as a success.

