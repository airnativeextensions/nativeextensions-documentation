---
title: Crash - Introduction
sidebar_label: Introduction
---

>
> **DEPRECATED**
>
> Please note that the Crash functionality has been removed from the latest Firebase SDK in favour of the Crashlytics functionality. 
> You should update your applications to use the new Crashlytics implementation.
>
> This documentation is only for legacy reference.
>


>
> **Your Crash Reporting dashboard will no longer be accessible after September 8, 2018.**
> **Upgrade to [Crashlytics](../crashlytics/introduction) today for more powerful, real-time crash analysis and new stability insights.**
>


Comprehensive and actionable information to help diagnose and fix problems in your app.

## About 

>
> Crash Reporting creates detailed reports of the errors in your app. Errors are grouped 
> into issues based on having similar stack traces, and triaged by the severity of impact 
> on your users. In addition to automatic reports, you can log custom events to help 
> capture the steps leading up to a crash.
>

[![YOUTUBE](https://img.youtube.com/vi/B7mlLVAkcfU/0.jpg)](https://www.youtube.com/watch?v=B7mlLVAkcfU)

[https://firebase.google.com/docs/crash/](https://firebase.google.com/docs/crash/)

## Key capabilities

| | |
|---|---|
| Monitor fatal and non-fatal errors | Monitor fatal errors in iOS and fatal and non-fatal errors in Android. Reports are triaged by the severity of impact on users. |
| Collect the data you need to diagnose problems	 | Each report contains a full stack trace as well as device characteristics, performance data, and user circumstances when the error took place. Similar reports are automatically grouped into issues to make it easier to identify related bugs. |
| Email alerts | Enable email alerts to receive frequent updates when new crashes are uncovered or regressions are detected. |
| Integrate with Analytics	 | Errors captured are set as app_exception events in Analytics, allowing you to filter audiences based on who sees errors.  In addition to grouping errors into similar stack traces, Crash Reporting also integrates with Analytics to provide you with the list of events that preceded a crash. This information helps to simplify your debugging process. |
| Free and easy | Crash Reporting is free to use. Once you've added Firebase to your app, it's just a few lines of code to enable comprehensive error reporting. |



## User privacy

Firebase Crash Reporting does not itself collect any personally identifiable information 
(such as names, email addresses, or phone numbers). Developers can collect additional 
data using Crash Reporting with log and exception messages. Such data collected through 
Crash Reporting should not contain information that personally identifies an individual 
to Google.

Here is an example of a log message that does not contain personally identifiable information:

```actionscript
FirebaseCrash.service.log("SQL database failed to initialize");
```

And here is another one that does contain personally identifiable information:

```actionscript
FirebaseCrash.service.log(user.getEmailAddress() + " purchased product " + product.getID());
```

If identifying a user is necessary to diagnose an issue, then you must use adequate 
obfuscation measures to render the data you send to Google anonymous.
