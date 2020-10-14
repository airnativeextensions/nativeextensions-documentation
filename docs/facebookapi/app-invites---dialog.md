---
title: App Invites - Dialog
sidebar_label: App Invites - Dialog
---

>
> Starting 6th February 2018, App Invites will no longer be supported. Starting with SDK version 4.28 and above.
>
> See the notice [here](https://developers.facebook.com/blog/post/2017/11/07/changes-developer-offerings/)
>
> For an alternative see the [Game Request Dialog](games---game-request-dialog)
>

## App Invite Dialog

The App Invite Dialog is very similar to other dialogs in the Facebook API. 

You will use an `AppInviteContentBuilder` to construct the content to use
for the dialog and pass this to the `show` function.


## Builder

The builder `AppInviteContentBuilder` is a helper class that allows you to easily
construct the correct content parameters for the App Invite Dialog. 

```actionscript
var builder:AppInviteContentBuilder = new AppInviteContentBuilder()
	.setApplinkUrl( "https://www.mydomain.com/myapplink" )
	.setPreviewImageUrl( "https://www.mydomain.com/my_invite_image.jpg" );
```

The App Link URL is a URL to your app link. Read more about this in the [section on App Links](https://developers.facebook.com/docs/app-invites/android#app_links).

>
> Your app link URL must contain the proper data and structure in order for App Invites to function.
>

The preview image URL will be used to render the image in the invite. 
While not required, it is recommended you pass this field in as your 
invite may not be rendered if no alternative images are found.

>
> If a preview image URL is not set the invite will use Promotional Images 
> from the App Details section in apps settings. The invite will not show 
> if no images are available.
>

The suggested image size is 1,200 x 628 pixels with an image ratio 1.9:1.




## Show

Once you have created the content builder you then pass the output from this builder to the 
`show` function of the `AppInvite` interface:

```actionscript
FacebookAPI.service.appInvite.show( builder.build() );
```

This initiates the dialog and presents it to the user. You should check the response
of this function. It is a boolean value and indicates if the App Invite dialog construction
was initiated correctly. If will return `false` if the required dialog type isn't supported
or if the application isn't setup correctly.


## Events

There are three possible events dispatched after a call to `show`:

- `AppInviteEvent.DIALOG_COMPLETED`: when the app invite was successfully completed
- `AppInviteEvent.DIALOG_CANCELLLED`: when the user cancelled the app invite
- `AppInviteEvent.DIALOG_ERROR`: when an error occurred during the process


```actionscript
FacebookAPI.service.appInvite.addEventListener( AppInviteEvent.DIALOG_COMPLETED, appInviteDialogEventHandler );
FacebookAPI.service.appInvite.addEventListener( AppInviteEvent.DIALOG_CANCELLED, appInviteDialogEventHandler );
FacebookAPI.service.appInvite.addEventListener( AppInviteEvent.DIALOG_ERROR, appInviteDialogEventHandler );
```

And then your event handler:

```actionscript
private function appInviteDialogEventHandler( event:AppInviteEvent ):void 
{
}
```

> 
> Note that in some circumstances the completed event maybe dispatched even when the user
> cancelled the invite. This is an issue with the Facebook SDK and we will update as soon
> as they have made a fix available.
>


