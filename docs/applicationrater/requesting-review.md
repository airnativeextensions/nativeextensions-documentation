---
title: Requesting Review
sidebar_label: Requesting Review
---

## Requesting Review 

If you don't wish to use the rate dialog you can use this extension to simply open the appropriate store page for your user to review your application. 

You should still set the application id by one of the methods described in the [Application ID](application-id) section.

Once you have set the application id you can call `rate()` to direct the user to the appropriate place for them to rate and review your application.


AIR:

```actionscript
ApplicationRater.service.rate();
```

Unity:

```csharp
ApplicationRater.Instance.Rate();
```
