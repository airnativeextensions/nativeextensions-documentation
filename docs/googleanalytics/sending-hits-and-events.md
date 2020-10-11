---
title: Sending Hits and Events
sidebar_label: Sending Hits and Events
---

## Sending a Screen View Hit

A 'Hit' is a single message or notification that you wish to be logged in Google Analytics. 
Hit's are constructed by using a 'Builder'. Builders are used for all Analytics tracking 
to be able to easily construct the correct parameters for a particular hit. There is a 
builder for each hit type available.

Screens in Google Analytics represent content users are viewing within your app. 
The equivalent concept in web analytics is a pageview. Measuring screen views allows 
you to see which content is being viewed most by your users, and how they are 
navigating between different pieces of content.

A screen view consists of a single string field that will be used as the screen name 
in your Google Analytics reports. To send a screen view, you must set the current 
screen name on your tracker and then use the `ScreenViewBuilder` to build the screen 
view hit, as below:

```actionscript
var tracker:Tracker = GoogleAnalytics.service.getTracker( "YOUR_TRACKING_ID" );

// Sets the screen name. This will be sent with any subsequent events / views on this tracker
tracker.setScreenName( "currentScreenName" );

tracker.send( new ScreenViewBuilder().build() );
```


## Sending an Event


Events are a useful way to collect data about a user's interaction with interactive 
components of your app, like button presses or the use of a particular item in a game. 
An event consists of four fields that you can use to describe a user's interaction 
with your app content, a 'category', an 'action', a 'label' and a numeric 'value'. 
The 'category' and 'action' are required.

```actionscript
var tracker:Tracker = GoogleAnalytics.service.getTracker( "YOUR_TRACKING_ID" );

tracker.send( 
	new EventBuilder()
		.setCategory( "user" )
		.setAction( "signIn" )
		.setValue( 123 )
		.build() );
```
