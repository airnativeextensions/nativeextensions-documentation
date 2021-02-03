---
title: FCM-GCM Payload
sidebar_label: FCM-GCM Payload
---
As Android notifications have many more features there are more fields available in 
the payload of the notification.

The GCM and FCM payload is made up of several root fields including:
- `data` : Custom user data object, (this is where all our fields will be placed)
- `notification` : Default notifications (this should only be used for very simple notifications, see the platform docs for more)

The default `notification` field is implemented by the google play services internals 
and only displays a very simple notification (alert/title/body) and doesn't use our 
notifications implementation. 

**This notification can only be processed when the application is in the foreground.** 

This notification is the notification sent from the FCM console.


Our notifications implementation uses the `data` field, within which you can either
use a flat object or place our custom notification object within it. 
All our payloads in the documentation where meant to be placed in this part of the payload

Similar to APNS, the simplest notification is an alert.

```json
{
	"data": {
		"notification" : {
			"alert" : "You have a notification",
			"title" : "You have a notification",
			"body"  : "The body of the notification",
			"sound" : "default"
		}
	}
}
```


Additional fields include:

- `icon`: An Android resource name included in a custom resources extension
- `alert`: The alert text displayed in ticker locations
- `title`: The title text for the notification
- `body`: The body text for the notification
- `sound`: A custom sound path to use for the notification or `'default'` to use the default notification sound. This can be a path to an asset or a mp3 resource name.  *Note: Sounds on individual notifications were deprecated in Android O (API 26). You now have to set them on a [channel](setup-your-service#channels). This will be ignored on API v26+.*
- `vibrate`: `true` or `false`
- `largeIcon`: The path to a packaged image asset or a url to a public image
- `priority`: This should be one of the priority values from `-2` (low) to `2` (max). The default is `0`. 
- `badge`: If the device supports custom badge count icons this value will be used to set the badge count.
- `colour`: The colour to apply to the notification (generally affects icon and title text colour). Should be of the form `#RRGGBB` 

- `channel`: From Android 8.0 you need to specify a channel for a notification. This is the channel id. If you omit this field the notification will be assigned to your first notification channel.

- `backgroundImage` : either a path to a local asset packaged with your application or a url to a public image
- `backgroundImageTextColour` : use to specify the text colour when a background image is specified. Colour supported formats are:
    - `"#RRGGBB"`
    - `"#AARRGGBB"`

- `style`: An object specifying the expanded view details:
	- `type`: The type of the expanded view, either text, inbox or image
	- `text`: The summary text for inbox and image types or the large text for the text type
	- `lines`: For the inbox type, this array contains the individual lines to display
	- `image`: For the image type, this specifies the url of the image

- `groupIcon`: An Android resource name to use as the icon for the group
- `groupKey`: Notifications with the same group key are grouped together
- `groupTitle`: The title for the group notification (you can use %d to insert the number of 
- `groupSummary`: Summary text for the group notification

- `category`: The action category, indicates the actions to display along with this notification 



The following shows a complete json payload utilising all the features:


```json
{
	"data" : {
		"notification" : {
			"icon"   : "ic_stat_distriqt_default",
			"alert"  : "You have a notification",
			"title"  : "You have a notification",
			"body"   : "The body of the notification",
			"sound"  : "default",
			"vibrate": "true",
			"largeIcon": "assets/notifications/icons/largeIcon.png",
			"priority": "0",
			"badge": 2,
			"colour": "#FF0000",

			"channel" : "channel_id",

			"backgroundImage" : "assets/notifications/background.png",
			"backgroundImageTextColour" : "#FFFFFF",

			"style": {
				"type": "text", 
				"text": "Some longer and larger content that will be used for a text style big view.\n\nThe body content will be shown in the normal view, but this content will be shown in the expanded view. ",
				"lines": [
					"Inbox message line 1",
					"Inbox message line 2"
				],
				"image":"http://example.com/path/to/image.png"
			},
			
			"groupIcon": "ic_stat_distriqt_default",
			"groupKey" : "groupKey",
			"groupTitle": "You have %d notifications",
			"groupSummary": "Message displayed at bottom of notifications",
			
			"category": "INVITE_CATEGORY"
		},
		
		"user_custom": "some-custom-value"
	}
}
```



### Background Image

On Android v5.0 + you can use an image as the background of the notification.

![](images/android-backgroundimage.png)

As part of your payload add the `backgroundImage` field which is either a path to a local asset packaged with your application or a url to a public image. URL's are discouraged due to the network access and download required.

In order to cover all notification sizes this image should be sized `2600x256` (91.4:9) and this will be aligned top left.

You can also add the `backgroundImageTextColour` field which you can use to specify the text colour. This allows you to match the colour of the text to your image. 

Colour supported formats are:

- "#RRGGBB"
- "#AARRGGBB"

>
> Note: Setting the background image of a notification will remove the notification icon and large icon. If you need to display these you should add them to your image.
>

The following names are also accepted: red, blue, green, black, white, gray, cyan, magenta, yellow, lightgray, darkgray, grey, lightgrey, darkgrey, aqua, fuchsia, lime, maroon, navy, olive, purple, silver, and teal.



#### Example

The following example uses an asset as the background packaged with the application located at `'assets/notifications/background.png'`:

```json
{
	"data": {
		"notification" : {
			"alert" : "You have a notification",
			"title" : "You have a notification",
			"body"  : "The body of the notification",
			"sound" : "default",
			"backgroundImage" : "assets/notifications/background.png",
			"backgroundImageTextColour" : "#FFFFFF"
		}
	}
}
```
