---
title: Communication
sidebar_label: Communication
---


One of the important aspects of this extension is the ability to communicate from your Actionscript 
code to the Javascript in the web page and vice-versa.


To do this there is a function on the actionscript side to run javascript in the page: 
`evaluateJavascript`. When this is called your code will be sent and run on the currently loaded 
page and any return value will be available by listening to the event: `NativeWebViewEvent.JAVASCRIPT_RESPONSE`


On the javascript side, we have a helper script to simplify the communication back to the `WebView`. 
Calling the `AirBridge.message( 'content-for-air' );` in your Javascript will cause a 
`NativeWebViewEvent.JAVASCRIPT_MESSAGE` event to be dispatched with the data value containing 
the message, 'content-for-air' in this case.


The two important events here are:

- `NativeWebViewEvent.JAVASCRIPT_RESPONSE`: Dispatched for a response from an AS3 initiated javascript call;
- `NativeWebViewEvent.JAVASCRIPT_MESSAGE`: Dispatched when a message is received from javascript running on the page;



## Android

On Android the communication channel is only completely setup after the page load is complete. I.e after `NativeWebViewEvent.COMPLETE`. We suggest you wait for this event before attempting to communicate between the page and the application.

To this end, we suggest implementing a function in your page that you call from AS3 after the `NativeWebViewEvent.COMPLETE` event has fired, which initialises your communication channel.

We have implemented some handlers for this scenario but they may affect loading of the page and we suggest you take the above approach wherever possible.



## Example

The following is an example from actionscript:

```actionscript
var webView:WebView = NativeWebView.service.createWebView( new Rectangle( 0, 0, 400, 600 ) ) ;

webView.addEventListener( NativeWebViewEvent.COMPLETE, webView_completeHandler );
webView.addEventListener( NativeWebViewEvent.JAVASCRIPT_RESPONSE, javascriptResponseHandler );
webView.addEventListener( NativeWebViewEvent.JAVASCRIPT_MESSAGE, javascriptMessageHandler );

var file:File = File.applicationStorageDirectory.resolvePath( "example.html" );

webView.loadURL( "file://"+file.nativePath );


function completeHandler( event:NativeWebViewEvent ):void
{
	webView.evaluateJavascript( "alert('message from AS3');" );
}

function javascriptResponseHandler( event:NativeWebViewEvent ):void
{
	trace( "evaluateJavascript response: " + event.data );
}

function javascriptMessageHandler( event:NativeWebViewEvent ):void
{
	// This is the message sent from the javascript 
	// AirBridge.message i.e. 'content-for-air' 
	trace( "message from JS: " + event.data );
}
```

communicating with the following html page:

```html
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<script type="text/javascript" src="airbridge.js" ></script>
	<script>
		"use strict";
		function sendToAIR()
		{
			AirBridge.message( "content-for-air" );
		}
	</script>
</head>

<body>
	<h1>NativeWebView Example</h1>
	<p>
		<button type="button" onClick="sendToAIR()" >Example Call</button>	
	</p>
</body>

</html>
```



## AIR Bridge Code 

This is the contents of the `airbridge.js` file

```javascript
/**
 * Air Bridge interface to communicate to actionscript through the NativeWebView ANE
 */

var AirBridge = (function () {
  var instance;

  function createInstance() {
    var object = {};
    object.useWindowLocation = true;

    object.isWKWebView = false;
    if (navigator.platform.substr(0, 2) === "iP") {
      if (window.indexedDB) {
        object.isWKWebView = window.webkit && window.webkit.messageHandlers;
      }
    }

    object.messageStack = [];
    object.messageStackInterval = 1; // milliseconds interval
    object.messageInProgress = false;

    object.message = function (message) {
      object.messageStack.push(message);
      if (!object.messageInProgress) {
        object._checkNextMessageInStackTimeout();
      }
    };

    object._sendMessage = function (message) {
      object.messageInProgress = true;

      try {
        if (object.isWKWebView) {
          window.webkit.messageHandlers.airbridge.postMessage(message);
        } else if (!object.useWindowLocation) {
          NativeWebView.airBridge(message);
        } else {
          window.location = "airBridge:" + message;
        }
      } catch (err) {
        window.location = "airBridge:" + message;
      }

      setTimeout(
        object._checkNextMessageInStackTimeout,
        object.messageStackInterval
      );
    };

    object._checkNextMessageInStackTimeout = function () {
      object.messageInProgress = false;

      if (object.messageStack.length) {
        object._sendMessage(object.messageStack.shift());
      }
    };

    return object;
  }

  return {
    setUseWindowLocation: function (shouldUseWindowLocation) {
      if (!instance) {
        instance = createInstance();
      }
      instance.useWindowLocation = shouldUseWindowLocation;
    },

    message: function (message) {
      if (!instance) {
        instance = createInstance();
      }
      instance.message(message);
    },
  };
})();
```


## Sending parameters to Javascript

You can use the `evaluateJavascript()` function to send any Javascript to the loaded page, however sometimes it is useful to call a function in javascript and pass an array of parameters. Below we are going to go through some techniques to communicate parameters with your page.


This first method is the simplest, constructing a String with the function name and parameters laid out:

```actionscript
var javascript:String = "functionName( '" + param1 + "' )";
_webView.evaluateJavascript( javascript );
```

--- 

Developing on this you can also construct a utility function that takes a function name and array of parameters:

```actionscript
function callJavascriptFunction( functionName:String, args:Array ):void 
{
    var params:String = "";
    for (var i:int = 0; i < args.length; i++) 
	{
		// Assuming strings, but you can add switching on type
        params += "'"+args[i] + "'"; 
    }
    var javascript:String = functionName + "( " + params + " )" ;
    _webView.evaluateJavascript( javascript );
}
```

---

You could use the `JSON` class to encode the parameters into a JSON string:

```actionscript
function callJavascriptFunction( functionName:String, args:Array ):void 
{
	var parametersJSON:String = JSON.stringify(args);
	var javascript:String = functionName + "( " + parametersJSON + " )" ;
    _webView.evaluateJavascript( javascript );
}
```

Then in your javascript side parse the JSON back into your parameters: 

```js
function myFunction(parametersJSON):void
{
     let parametersArray = JSON.parse(parametersJSON);
     
	 // Use your parameters as required
}
```

