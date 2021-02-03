---
title: Google Cloud Message
sidebar_label: Google Cloud Message
---

There are many ways to send notifications to your devices.

The basic procedure is once your application has sent the device token (registration id) to your server, 
your server will send a message to the appropriate service (APNS/GCM) which will deliver the notification 
to the registered device.


### PHP Example

The following is a very basic PHP example, sending a message to a single device.

```php
<?php
/**
 * This is a test script to send a message to an GCM Android device, i.e. an Android device using Google Cloud Messaging. 
 * 
 * To use this script you need to set the following pieces of information
 *  - device registration id
 *  - api key (this is the browser API key)
 * 
 * Then run it using php: 
 * <code> php gcm_simplepush.php </code> 
 *
 */
// Put your device token here (without spaces):
$registrationId = 'DEVICE_ID';
// GCM API Key
$apiKey = "GCM_API_KEY";

$dataPayload = array(
	'notification' => array(
		'icon' => 'ic_stat_distriqt_default',
		'alert' => 'You have a notification', 
		'title' => 'You have a notification', 
		'body' => "The body of the notification",
		'sound' => 'default',
		'vibrate' => 'true',
	),
	'user_custom' => 'some-custom-value'
);

$response = sendNotification( 
	$apiKey, 
	array($registrationId), 
	$dataPayload,
	null
);

echo $response;
echo "\ncomplete...\n";
////////////////////////////////////////////////////////////////////////////////
//	
//
/**
 * The following function will send a GCM notification using curl.
 * 
 * @param $apiKey				[string] 	The Browser API key string for your GCM account
 * @param $registrationIdsArray [array] 	An array of registration ids to send this notification to
 * @param $messageData			[array]		A named array of data to send as the notification data payload
 * @param $notification			[array]		A named array of data to send as the notification information
 */
function sendNotification( $apiKey, $registrationIdsArray, $customData, $notification  )
{
    print_r($messageData);
	print_r($registrationIdsArray);
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
    curl_setopt( $ch, CURLOPT_URL, "https://android.googleapis.com/gcm/send" );
    curl_setopt( $ch, CURLOPT_SSL_VERIFYHOST, 0 );
    curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, 0 );
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
    curl_setopt( $ch, CURLOPT_POSTFIELDS, $post );
    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}
```

[Source gist](https://gist.github.com/marchbold/0377f398092c0d4874f9)


You run these scripts using php:

```
php script.php
```