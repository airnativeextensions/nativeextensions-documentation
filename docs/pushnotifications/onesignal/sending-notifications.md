---
title: OneSignal - Sending Notifications
sidebar_label: Sending Notifications
---

The extension handles receiving notifications and registering the device with OneSignal, but it does not include functionality to send notifications. To send a notification you use the [OneSignal REST API](https://documentation.onesignal.com/reference/create-message).

:::caution
The REST API requires your OneSignal REST API key. You should not embed this key in client application code. The recommended approach is to send your request from a server that acts as a "middle-man" between your app and OneSignal.
:::


## Request

Notifications are created by sending an HTTPS `POST` request to:

```
https://api.onesignal.com/notifications
```

with the headers:

```
Content-Type: application/json
Authorization: Key YOUR_API_KEY
```

and a JSON body containing your `app_id`, the message content and the target audience:

```bash
curl -X "POST" "https://api.onesignal.com/notifications" \
     -H 'Content-Type: application/json' \
     -H 'Authorization: Key YOUR_API_KEY' \
     -d $'{
      "app_id": "YOUR_APP_ID",
      "target_channel": "push",
      "included_segments": [ "Subscribed Users" ],
      "contents": {
        "en": "Hello, world",
        "es": "Hola mundo"
      }
    }'
```

A `200` response containing an `id` indicates the notification was created. If no `id` is returned, the notification was not created, usually because the target audience contained no valid subscriptions.


## Targeting

You can use **one** of the following targeting methods per request (they cannot be combined):

| Method | Parameters | Description |
| - | - | - |
| Subscriptions | `include_subscription_ids` | Specific subscription IDs (up to 20,000 per request). |
| Aliases | `include_aliases`, `target_channel` | Specific users by `external_id`, `onesignal_id` or a custom alias (up to 20,000 per request). Best for transactional messages. |
| Segments | `included_segments`, `excluded_segments` | Predefined segments created in the OneSignal dashboard. |
| Filters | `filters` | Ad-hoc audiences built with `AND` / `OR` logic using fields such as `tag`, `country`, `language`, `last_session`, `session_count` and `app_version`. |

You can also restrict push notifications to specific platforms using `isAndroid`, `isIos` and `isAnyWeb`.


### Sending to a specific device

To send to a specific device, use the OneSignal identifier of the device. This is returned from the `getServiceToken()` function after a registration success or changed event:

```actionscript
var playerId:String = PushNotifications.service.getServiceToken();
```

This identifier is what the OneSignal REST API refers to as the `player_id` (legacy API, `include_player_ids`) or the subscription id (current API, `include_subscription_ids`).


### Sending to another user

To send a notification from one user of your app to another, your app needs a way to identify the target user:

1. Store an identifier for each user in OneSignal, for example by setting a tag such as `userAlias` (or by using an external id / alias).
2. When user1 wants to notify user2, your app posts the sender, receiver and message to your server.
3. Your server builds the OneSignal request, targeting the receiver, and sends it using your REST API key.

```json
{
  "app_id": "YOUR_APP_ID",
  "filters": [
    { "field": "tag", "key": "userAlias", "relation": "=", "value": "user2" }
  ],
  "data": { "sender": "user1", "message": "Hello" },
  "contents": { "en": "You have a message from user1" }
}
```

:::note
Do not use tags to identify individual users. Prefer an external id or custom alias with `include_aliases`.
:::


## Content

The minimum required for a displayable push notification is `contents`, a map of language code to message text. Other commonly used parameters:

| Parameter | Description |
| - | - |
| `headings` | Title of the notification. |
| `subtitle` | Secondary line of text. |
| `template_id` | Use a predefined template. |
| `data` | Custom key-value data delivered to your app with the notification. |
| `url` | Opened when the notification is tapped. |
| `big_picture`, `ios_attachments`, `small_icon`, `large_icon` | Images and media. |
| `buttons` | Action buttons. |
| `ios_sound`, `android_sound` | Custom sounds. |
| `android_channel_id` | Android notification channel. |
| `priority`, `ios_interruption_level`, `collapse_id` | Delivery priority and replacing older messages. |

See the [push notification reference](https://documentation.onesignal.com/reference/push-notification) for the full list of options.


## Scheduling

Messages are sent immediately by default. Use `send_after` (ISO 8601 date/time) to schedule delivery, or `delayed_option` (`timezone` or `last-active`) for per-user delivery timing. When using `delayed_option` you must also set `throttle_rate_per_minute` to `0`.


## Example


### Node.js

The following example sends a notification from a server using Node.js (v18+, which includes `fetch`). Keep your REST API key in an environment variable rather than in source code.

```javascript
const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID;
const ONESIGNAL_API_KEY = process.env.ONESIGNAL_API_KEY;

async function sendNotification( subscriptionId, message )
{
	const response = await fetch( "https://api.onesignal.com/notifications", {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			"Authorization": `Key ${ONESIGNAL_API_KEY}`
		},
		body: JSON.stringify( {
			app_id: ONESIGNAL_APP_ID,
			target_channel: "push",
			include_subscription_ids: [ subscriptionId ],
			contents: { en: message }
		})
	});

	if (!response.ok)
	{
		throw new Error( `OneSignal request failed: ${response.status} ${await response.text()}` );
	}

	// The response contains an `id` if the notification was created
	return response.json();
}

sendNotification( "SUBSCRIPTION_ID", "Hello, world" )
	.then( result => console.log( "Sent notification:", result.id ) )
	.catch( console.error );
```

To send to another user by an alias, replace `include_subscription_ids` with `include_aliases`:

```javascript
{
	app_id: ONESIGNAL_APP_ID,
	target_channel: "push",
	include_aliases: { external_id: [ "user2" ] },
	contents: { en: "You have a message from user1" },
	data: { sender: "user1" }
}
```

### Actionscript

The following example sends a notification to a specific device using ActionScript. This is for demonstration only; in production, send this request from your server so your REST API key is not exposed.

```actionscript
public function sendNotification( subscriptionId:String, message:String ):void
{
	var request:URLRequest = new URLRequest( "https://api.onesignal.com/notifications" );
	request.method = URLRequestMethod.POST;
	request.requestHeaders.push( new URLRequestHeader( "Content-Type", "application/json; charset=UTF-8" ) );
	request.requestHeaders.push( new URLRequestHeader( "Authorization", "Key YOUR_API_KEY" ) );
	request.data = JSON.stringify( {
		app_id: "YOUR_APP_ID",
		target_channel: "push",
		include_subscription_ids: [ subscriptionId ],
		contents: { en: message },
		ios_sound: "sound/happy_notice.wav",
		android_sound: "sound/happy_notice.wav"
	});

	var loader:URLLoader = new URLLoader();
	loader.load( request );
}
```



## Errors and retries

The API may return temporary errors such as `429` (rate limited) or `5xx`. If you retry a failed request, include an `idempotency_key` to avoid sending duplicate notifications. A `403` response indicates the API key lacks permission (wrong key type, IP allowlist, or a revoked key).


## More information

For the full list of options see the OneSignal documentation:

- [REST API overview](https://documentation.onesignal.com/reference/rest-api-overview)
- [Create message](https://documentation.onesignal.com/reference/create-message)
- [Push notification reference](https://documentation.onesignal.com/reference/push-notification)


