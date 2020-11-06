---
title: Sharing - Message Dialog
sidebar_label: Sharing - Message Dialog
---

:::caution
This is the legacy extension documentation. Find the new documentation [here](../facebookapi/)
:::

## Message Dialog

The Message Dialog switches to the native Messenger app, then returns 
control to your app after a post is published.

>
> Note: Currently the message dialog is not supported on iPads.
>


The implementation of the message dialog is very similar to the share dialog.



## Show

Once you have created the content builder you then pass the output from this builder to the 
`show` function of the `MessageDialog` interface:

```actionscript
FacebookAPI.service.messageDialog.show( builder.build() );
```

This initiates the dialog and presents it to the user. You should check the response
of this function. It is a boolean value and indicates if the message dialog construction
was initiated correctly. If will return `false` if the required dialog type isn't supported
or if the application isn't setup correctly.



## Events

There are three possible events dispatched after a call to `show`:

- `MessageDialogEvent.DIALOG_COMPLETED`: when the share was successfully completed
- `MessageDialogEvent.DIALOG_CANCELLLED`: when the user cancelled the share dialog
- `MessageDialogEvent.DIALOG_ERROR`: when an error occurred during the process


```actionscript
FacebookAPI.service.messageDialog.addEventListener( MessageDialogEvent.DIALOG_COMPLETED, messageDialogEventHandler );
FacebookAPI.service.messageDialog.addEventListener( MessageDialogEvent.DIALOG_CANCELLED, messageDialogEventHandler );
FacebookAPI.service.messageDialog.addEventListener( MessageDialogEvent.DIALOG_ERROR, messageDialogEventHandler );
```

And then your event handler:

```actionscript
private function messageDialogEventHandler( event:MessageDialogEvent ):void 
{
}
```




