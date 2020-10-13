---
title: Firebase Cloud Message
sidebar_label: Firebase Cloud Message
---


Sending a message with Firebase is very similar (if not exactly the same) as GCM apart from the endpoint. 


Firebase Cloud Messaging has a server-side APIs that you can call to send messages. 
See https://firebase.google.com/docs/cloud-messaging/server.

Sending a message can be as simple as using curl to call a HTTP end-point. 
See https://firebase.google.com/docs/cloud-messaging/server#implementing-http-connection-server-protocol

```
curl -X POST --header "Authorization: key=<API_ACCESS_KEY>" --Header "Content-Type: application/json" https://fcm.googleapis.com/fcm/send -d "{\"to\":\"<YOUR_DEVICE_ID_TOKEN>\",\"notification\":{\"body\":\"Yellow\"},\"priority":10}"
```


### PHP Example

Simple PHP script demonstrating the same:

```php
$registrationId = "YOUR_DEVICE_ID_TOKEN";
$apiKey = "API_ACCESS_KEY";

$dataPayload = array(
	'notification' => array(
		'icon' => 'ic_utrofi_notification',
		'alert' => "ticker text 2", 
		'title' => "content title 2", 
		'body' => "body copy 2",
		'sound' => 'default'
));

$response = sendNotification( 
	$apiKey, 
	array($registrationId), 
	$dataPayload,
	null
);
echo $response;


////////////////////////////////////////////////////////////////////////////////
//	
//

/**
 * The following function will send a FCM notification using curl.
 * 
 * @param $apiKey				[string] 	The Browser API key string for your GCM account
 * @param $registrationIdsArray [array] 	An array of registration ids to send this notification to
 * @param $messageData			[array]		An named array of data to send as the notification payload
 */
function sendNotification( $apiKey, $registrationIdsArray, $customData, $notification  )
{
    $headers = array("Content-Type:" . "application/json", "Authorization:" . "key=" . $apiKey);
    $data = array(
        'registration_ids' => $registrationIdsArray,
    );
	if ($customData != null) 	$data['data'] = $customData;
	if ($notification != null)	$data['notification'] = $notification;

	$post = json_encode($data);
	
	print( $post );

    $ch = curl_init();

    curl_setopt( $ch, CURLOPT_HTTPHEADER, $headers ); 
    curl_setopt( $ch, CURLOPT_URL, "https://fcm.googleapis.com/fcm/send" );
    curl_setopt( $ch, CURLOPT_SSL_VERIFYHOST, 0 );
    curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, 0 );
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
    curl_setopt( $ch, CURLOPT_POSTFIELDS, $post );

    $response = curl_exec($ch);
    curl_close($ch);

    return $response;
}


```
