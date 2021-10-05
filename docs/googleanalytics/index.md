---
title: GoogleAnalytics
hide_title: true
slug: /googleanalytics
---

![](images/hero.png)

# Google Analytics

[GoogleAnalytics](https://airnativeextensions.com/extension/com.distriqt.GoogleAnalytics) is an AIR Native Extension to enable the use of Google Analytics in your application to measure user activity.

The simple API will have you up and running with analytics in just a few lines of code.
Identical code base can be used across all platforms without any platfrom specific code,
allowing you to develop once and deploy everywhere! It comes with detailed AS docs, and
a complete example application.

### Features

- Track user transaction and item purchases
- Track application events
- Track user screen views
- Set any custom value on your trackers
- Single API interface - your code works across iOS and Android with no modifications
- Sample project code and ASDocs reference

As with all our extensions you get access to a year of support and updates as we are
continually improving and updating the extensions for OS updates and feature requests.

## Documentation

The [documentation site](https://docs.airnativeextensions.com/docs/googleanalytics) forms the best source of detailed documentation for the extension along with the [asdocs](https://docs.airnativeextensions.com/asdocs/googleanalytics).

Quick Example:

```actionscript
var tracker:Tracker = GoogleAnalytics.service.getTracker( "YOUR_TRACKING_ID" );

tracker.send(
	new EventBuilder()
		.setCategory( "user" )
		.setAction( "signIn" )
		.setValue( 123 )
		.build() );
```

More information here:

[com.distriqt.GoogleAnalytics](https://airnativeextensions.com/extension/com.distriqt.GoogleAnalytics)

## License

You can purchase a license for using this extension:

[airnativeextensions.com](https://airnativeextensions.com/)

distriqt retains all copyright.

![](images/promo.png)
