---
title: Share Dialog
sidebar_label: Share Dialog
---


To use the Facebook-built sharing experiences, you want to define your content as in the [modeling content section](content.md), and then call the Share Dialog.



## Show

Once you have created the content builder you then pass the output from this builder to the 
`show` function of the `ShareDialog` interface:

```actionscript
FacebookShare.instance.shareDialog.show( builder.build() );
```

This initiates the dialog and presents it to the user. You should check the response of this function. It is a boolean value and indicates if the share dialog construction was initiated correctly. If will return `false` if the required dialog type / content isn't supported or if the application isn't setup correctly.

### Can Show

You can check whether a particular share dialog type can be shown by calling the `canShow()` method and passing the required content type.

For example, to check if the link content share dialog can be shown: 

```actionscript
if (FacebookShare.instance.shareDialog.canShow( ShareLinkContentBuilder.TYPE ))
{

}
```

You can use this process with any of the content builders and their `TYPE` definition.

>
> Note: this check is performed internally in the `show()` call as well and will cause `show()` to return `false` if `canShow()` is `false`. So you can use this check as a check before attempting to show the dialog if you wish to present an alternative. 
>



## Events

There are three possible events dispatched after a call to `show`:

- `ShareDialogEvent.COMPLETE`: when the share was successfully completed;
- `ShareDialogEvent.CANCEL`: when the user cancelled the share dialog;
- `ShareDialogEvent.ERROR`: when an error occurred during the process.


```actionscript
FacebookShare.instance.shareDialog.addEventListener( ShareDialogEvent.COMPLETE, shareDialogEventHandler );
FacebookShare.instance.shareDialog.addEventListener( ShareDialogEvent.CANCEL, shareDialogEventHandler );
FacebookShare.instance.shareDialog.addEventListener( ShareDialogEvent.ERROR, shareDialogEventHandler );
```

And then your event handler:

```actionscript
function shareDialogEventHandler( event:ShareDialogEvent ):void 
{
}
```




## Notes

>
> Your app should not pre-fill any content to be shared. This is inconsistent with 
> Facebook Platform Policy, see [Facebook Platform Policy, 2.3](https://developers.facebook.com/policy/#control).
>




## Example

The following example shows sharing a link using the share dialog

```actionscript
// Construct content
var content:ShareLinkContentBuilder = new ShareLinkContentBuilder()
		.setContentUrl( "https://airnativeextensions.com" );

// Check if can show content
if (FacebookShare.instance.shareDialog.canShow( ShareLinkContentBuilder.TYPE ))
{
	FacebookShare.instance.shareDialog.addEventListener( 
		ShareDialogEvent.COMPLETE, shareDialogEventHandler );
	FacebookShare.instance.shareDialog.addEventListener( 
		ShareDialogEvent.CANCEL, shareDialogEventHandler );
	FacebookShare.instance.shareDialog.addEventListener( 
		ShareDialogEvent.ERROR, shareDialogEventHandler );

	// Display share dialog
	var success:Boolean = FacebookShare.instance.shareDialog.show(
			content.build()
	);
}

function shareDialogEventHandler( event:ShareDialogEvent ):void 
{
	// Handle completion / cancellation / error

	FacebookShare.instance.shareDialog.removeEventListener( 
		ShareDialogEvent.COMPLETE, shareDialogEventHandler );
	FacebookShare.instance.shareDialog.removeEventListener( 
		ShareDialogEvent.CANCEL, shareDialogEventHandler );
	FacebookShare.instance.shareDialog.removeEventListener( 
		ShareDialogEvent.ERROR, shareDialogEventHandler );
}
```




## Additional Features

When you use the Facebook share dialog, you have additional options that aren't available when you share by using the API.


### Hashtags

You can specify a single hashtag to appear with a shared photo, link, or video. This hashtag also appears in the Share dialog, and people have the the opportunity to remove it before publishing.

The following is an example of adding a hashtag to a link share.


```actionscript
var content:ShareLinkContentBuilder = new ShareLinkContentBuilder()
		.setContentUrl( "https://airnativeextensions.com" )
		.setShareHashtag( "#distriqt" )
;
```


### Quote Sharing

You can enable people to highlight text to appear as a quote with a shared link. Alternatively, you can predefine a quote, for example, a pull quote in an article, to appear with the shared link. In either case, the quote appears in its own field separate from the user comments.


```actionscript
var content:ShareLinkContentBuilder = new ShareLinkContentBuilder()
		.setContentUrl( "https://airnativeextensions.com" )
		.setQuote( "Connect on a global scale." )
;
```



## Advanced Topics

### Built-In Share Fallbacks

In past versions of the SDK for Android, your app had to check for a native, installed Facebook app before it could open the Share Dialog. If the person didn't have the app installed, you had to provide your own code to call a fallback dialog.

Now the SDK automatically checks for the native Facebook app. If it isn't installed, the SDK switches people to their default browser and opens the Feed Dialog.


### iOS Simulator and Testing

If you are using Simulator to test sharing in your application, you will see errors if you try to share videos or Photos. This is because you need Facebook for iOS installed which provides the Share Dialog. We do not support this for Simulator.

In the case of link shares, you do not need Facebook for iOS installed so this test case is possible. To test other Sharing scenarios, set up an actual test device with with Facebook for iOS installed.

