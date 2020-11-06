---
title: Sharing - Share Dialog
sidebar_label: Sharing - Share Dialog
---

:::caution
This is the legacy extension documentation. Find the new documentation [here](../facebookapi/)
:::

## Share Dialog

On mobile, when someone shares with the Share Dialog, the dialog makes a fast 
app-switch to the Facebook app on their device. We also have a web dialog as 
a fallback if someone doesn't have the native Facebook app installed.

In past versions of the SDK for iOS, your app had to check for a native, installed 
Facebook app before it could open the Share Dialog. If the person didn't have the 
app installed, you had to provide your own code to call a fallback dialog.

Now the SDK automatically checks for the native Facebook app. If it isn't installed, 
the SDK switches people to their default browser and opens the Feed Dialog. If 
someone wants to share an Open Graph story, the SDK opens the Web Share Dialog.





## Show

Once you have created the content builder you then pass the output from this builder to the 
`show` function of the `ShareDialog` interface:

```actionscript
FacebookAPI.service.shareDialog.show( builder.build() );
```

This initiates the dialog and presents it to the user. You should check the response
of this function. It is a boolean value and indicates if the share dialog construction
was initiated correctly. If will return `false` if the required dialog type isn't supported
or if the application isn't setup correctly.



## Events

There are three possible events dispatched after a call to `show`:

- `ShareDialogEvent.DIALOG_COMPLETED`: when the share was successfully completed
- `ShareDialogEvent.DIALOG_CANCELLLED`: when the user cancelled the share dialog
- `ShareDialogEvent.DIALOG_ERROR`: when an error occurred during the process


```actionscript
FacebookAPI.service.shareDialog.addEventListener( ShareDialogEvent.DIALOG_COMPLETED, shareDialogEventHandler );
FacebookAPI.service.shareDialog.addEventListener( ShareDialogEvent.DIALOG_CANCELLED, shareDialogEventHandler );
FacebookAPI.service.shareDialog.addEventListener( ShareDialogEvent.DIALOG_ERROR, shareDialogEventHandler );
```

And then your event handler:

```actionscript
private function shareDialogEventHandler( event:ShareDialogEvent ):void 
{
	// If successful event.postId will contain the post identifier
	if (event.postId != null) 
	{
		trace( "postId="+event.postId);
	}
}
```


## Notes

>
> Your app should not pre-fill any content to be shared. This is inconsistent with 
> Facebook Platform Policy, see [Facebook Platform Policy, 2.3](https://developers.facebook.com/policy/#control).
>




## Example

```actionscript

if (FacebookAPI.service.shareDialog.canShow( ShareLinkContentBuilder.TYPE ))
{
	FacebookAPI.service.shareDialog.addEventListener( ShareDialogEvent.DIALOG_COMPLETED, shareDialogEventHandler );
	FacebookAPI.service.shareDialog.addEventListener( ShareDialogEvent.DIALOG_CANCELLED, shareDialogEventHandler );
	FacebookAPI.service.shareDialog.addEventListener( ShareDialogEvent.DIALOG_ERROR, shareDialogEventHandler );

	var builder:ShareLinkContentBuilder = new ShareLinkContentBuilder()
		.setContentTitle("FacebookAPI ANE")
		.setContentDescription("This link was shared using the distriqt FacebookAPI ANE" )
		.setContentUrl("https://airnativeextensions.com/extension/com.distriqt.FacebookAPI");
	
	var success:Boolean = FacebookAPI.service.shareDialog.show( builder.build() );
	
}

...

private function shareDialogEventHandler( event:ShareDialogEvent ):void 
{
	FacebookAPI.service.shareDialog.removeEventListener( ShareDialogEvent.DIALOG_COMPLETED, shareDialogEventHandler );
	FacebookAPI.service.shareDialog.removeEventListener( ShareDialogEvent.DIALOG_CANCELLED, shareDialogEventHandler );
	FacebookAPI.service.shareDialog.removeEventListener( ShareDialogEvent.DIALOG_ERROR, shareDialogEventHandler );

	if (event.postId != null) log( "postId="+event.postId);
}
```