---
title: Application Rate Dialog - States
sidebar_label: Application Rate Dialog - States
---


There are several states that the service can be in:

- `ApplicationRater.STATE_MONITORING` : monitoring the system for conditions to display the rate dialog
- `ApplicationRater.STATE_LATER` : the user clicked on the "remind me later" button and the system will wait until the conditions have been met
- `ApplicationRater.STATE_DECLINED` : the user declined to rate the application by clicking on the "decline" button
- `ApplicationRater.STATE_RATED` : the user has clicked on the "rate" button. Nothing more will be done and this will be taken as the completed state
- `ApplicationRater.STATE_PROMPT` : has prompted the user to rate the application, ie that the rate dialog has been displayed. This state is transitional and only while the dialog is being shown to the user.


You can access the current state by calling, `state` :

```actionscript title="AIR"
var state:String = ApplicationRater.service.state;
```

```csharp title="Unity"
string state = ApplicationRater.Instance.state;
```


The particular states control how the `hasMetConditions` function processes the conditions and 
triggers the dialog.

- In the `STATE_DECLINED` and `STATE_RATED` states, `hasMetConditions` will always return `false`;
- In the `STATE_MONITORING` state, `hasMetConditions` will return based on the current set conditions;
- In the `STATE_LATER` state the `hasMetConditions` function will return after the set reminder period has passed.

