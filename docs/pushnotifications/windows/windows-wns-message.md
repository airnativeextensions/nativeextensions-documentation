---
title: Windows WNS Message
sidebar_label: Windows WNS Message
---

In order to send a message to WNS you will need the information you noted from the [service setup](windows-notification-service):

- **Application Secret**, or "client secret";
- **Package SID**, "or client id".

Using this information you request an "access token" from WNS and then send a notification using this access token to the user's "channel uri".


The "channel uri" identifies the user and is used as the destination of a notification. This is returned via the "device token" accessors in this extension.


```actionscript
var wnsChannelUri:String = PushNotifications.service.getDeviceToken();
```

You then place the access token in the authorisation header of a post request to the channel uri, where the content of the request is the [WNS payload](windows-wns-payload).



### PHP Example

The following is a simple example of using PHP to send a notification:

```php
<?php
    // SERVICE CONFIG
    $clientId = 'ms-app://s-1-15-2-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX';
    $clientSecret = '/XXYYXXYYXXYYXXYYXXYYXXYYXXYY';
    
    // USER - You will need to get this from the device
    $channelUri = 'https://sg2p.notify.windows.com/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
    
    //TOAST MESSAGE
    $toastMessage = 
"<toast launch='payload=%7B%22test%22%3A%22value%22%7D'>\
  <visual lang='en-US'>\
    <binding template='ToastGeneric'>\
    <image src='https://airnativeextensions.com/images/extensions/icons/ane-pushnotifications-icon.png' placement='appLogoOverride' />\
    <text>Test Notification</text>\
    <text>A notification sent via WNS</text>\
    </binding>\
  </visual>\
</toast>"; 


    ////////////////////////////////////////////////////////////
    //  GET ACCESS TOKEN
    //

    $fields = array(  
        'grant_type' => 'client_credentials',
        'client_id' => "$clientId",
        'client_secret' => "$clientSecret",
        'scope' => 'notify.windows.com'
    );
    $fields_string = "";
    foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
    rtrim($fields_string, '&');

    $tokenRequest = curl_init();
    curl_setopt($tokenRequest, CURLOPT_URL, 'https://login.live.com/accesstoken.srf');
    curl_setopt($tokenRequest, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
    curl_setopt($tokenRequest, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($tokenRequest, CURLOPT_POST, count($fields));
    curl_setopt($tokenRequest, CURLOPT_POSTFIELDS, $fields_string);

    $output = json_decode(curl_exec($tokenRequest));
    curl_close($tokenRequest);
    $accessToken = $output->{'access_token'};



    ////////////////////////////////////////////////////////////
    //  SEND PUSH
    //

    $sendPush = curl_init();

    $headers = array(
        'Content-Type: text/xml', 
        "Content-Length: " . strlen($toastMessage),
        "X-WNS-Type: wns/toast", 
        "Authorization: Bearer $accessToken" 
    );

    curl_setopt($sendPush, CURLOPT_URL, $channelUri );
    curl_setopt($sendPush, CURLOPT_HEADER, true);
    curl_setopt($sendPush, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($sendPush, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($sendPush, CURLOPT_POST, 1);        
    curl_setopt($sendPush, CURLOPT_POSTFIELDS, $toastMessage);         

    $output = curl_exec($sendPush);
    curl_close($sendPush);
    
?>  
```






### C# Documentation

Microsoft has documentation on using C# to send a notification here:

- https://docs.microsoft.com/en-us/previous-versions/windows/apps/hh868252%28v%3dwin.10%29


