---
title: iOS APNS Message
sidebar_label: iOS APNS Message
---

There are many ways to send notifications to your devices.

The basic procedure is once your application has sent the device token (registration id) to your server, 
your server will send a message to the appropriate service (APNS/GCM) which will deliver the notification 
to the registered device.


### PHP Example

The following is a very basic PHP example, sending a message to a single device.


```php
<?php
// Put your device token here (without spaces):
$deviceToken = 'DEVICE_TOKEN';

// Put your private key's passphrase here:
$passphrase = 'passphrase';
$pemfilename = 'ck.pem';

// SIMPLE PUSH 
$body['aps'] = array(
	'alert' => array(
		'title' => "You have a notification",
		'body' => "Body of the message",
	),
	'badge' => 1,
	'sound' => 'default',
	); // Create the payload body

////////////////////////////////////////////////////////////////////////////////

$ctx = stream_context_create();
stream_context_set_option($ctx, 'ssl', 'local_cert', $pemfilename);
stream_context_set_option($ctx, 'ssl', 'passphrase', $passphrase);

$fp = stream_socket_client(
	'ssl://gateway.sandbox.push.apple.com:2195', $err,
	$errstr, 60, STREAM_CLIENT_CONNECT|STREAM_CLIENT_PERSISTENT, $ctx); // Open a connection to the APNS server
if (!$fp)
	exit("Failed to connect: $err $errstr" . PHP_EOL);
echo 'Connected to APNS' . PHP_EOL;
$payload = json_encode($body); // Encode the payload as JSON
$msg = chr(0) . pack('n', 32) . pack('H*', $deviceToken) . pack('n', strlen($payload)) . $payload; // Build the binary notification
$result = fwrite($fp, $msg, strlen($msg)); // Send it to the server
if (!$result)
	echo 'Message not delivered' . PHP_EOL;
else
	echo 'Message successfully delivered' . PHP_EOL;
fclose($fp); // Close the connection to the server
```


You run these scripts using php:

```
php script.php
```