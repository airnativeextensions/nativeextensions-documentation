---
title: Send an Amazon Message
sidebar_label: Send an Amazon Message
---

## Web Interface

You can use the test interface in the Amazon developer console to send a test message if you require.

- Log in to the developer console: https://developer.amazon.com/adm/console
- Navigate to "Tools & Services" / "Amazon Device Messaging"
- Enter your client ID, secret and the registration id (device token) for the device
- Enter the notification details and send



## Script example

Use the Node example at `tests/amazon/nodejs/send.js` to send a test Amazon Device Messaging (ADM) push notification.

### Prerequisites

- Amazon Security Profile client id
- Amazon Security Profile client secret
- ADM registration id from your app/device

### Setup

1. Open a terminal in `tests/amazon/nodejs`.
2. Install dependencies:

```bash
npm install
```

3. Create a .env file in `tests/amazon/nodejs`:

```bash
ADM_CLIENT_ID=your-client-id
ADM_CLIENT_SECRET=your-client-secret
ADM_REGISTRATION_ID=your-registration-id
```

The script loads .env automatically.

### Send a message

Run:

```bash
npm run send
```

The script:

- Requests an OAuth access token from api.amazon.com/auth/O2/token
- Sends the ADM message to api.amazon.com/messaging/registrations/{registrationId}/messages
- Prints the JSON response

### Payload format used by the example

The sender posts a message body like this:

```json
{
	"data": {
		"notification": "{\"icon\":\"ic_stat_distriqt_u\",\"alert\":\"Notification Ticker Text\",\"title\":\"You have received a notification\",\"body\":\"The body of the notification\",\"sound\":\"default\",\"vibrate\":\"true\",\"badge\":\"1\"}",
		"user_custom": "some-custom-value",
		"url": "https://airnativeextensions.com"
	},
	"consolidationKey": "demo-notification",
	"expiresAfter": 86400
}
```

### Notes

- ADM expects data values to be strings. Keep custom data values as string values.
- The required ADM type headers are already set in `tests/amazon/nodejs/send.js`
- If Amazon returns HTTP 400 with reason InvalidType, verify those headers are present and unchanged.


### More Information

More information on sending a notification using the API can be found here: https://developer.amazon.com/docs/adm/send-message.html

