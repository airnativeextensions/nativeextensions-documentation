---
title: Banner Adverts
sidebar_label: Banner Adverts
---


Banner advertisements are represented by the `AdView` class. You create an instance of this class using the extension and then use this instance to set properties, load and display the advert.


## Creating an AdView

To create an `AdView` use the `createAdView` function. This function takes a callback function of the form `function( adView:AdView ):void` and will be called as soon as the AdView has been created and is ready to use.


```actionscript
Adverts.service.createAdView(
        function( adView:AdView ):void
        {
                // Set properties and load ads as required
        });
```

This will instanciate an instance of the `AdView` class. 


## Size and Ad Unit ID

You must set at least the size and ad unit id properties on your `AdView` to correctly setup the view before use. Without these properties the advert will not display correctly.

```actionscript
adView.setAdSize( AdSize.SMART_BANNER );
adView.setAdUnitId( "ca-app-pub-3940256099942544/6300978111" );
```

You can use any of the predefined `AdSize` constants to set the size of the advert.


### Adaptive Banners

Adaptive banners are the next generation of responsive ads, maximizing performance by optimizing ad size for each device. Improving on smart banners, which only supported fixed heights, adaptive banners let developers specify the ad-width and use this to determine the optimal ad size.

To pick the best ad size, adaptive banners use fixed aspect ratios instead of fixed heights. This results in banner ads that occupy a more consistent portion of the screen across devices and provide opportunities for improved performance.

When working with adaptive banners, note that these will always return a constant size for a given device and width. Once you've tested your layout on a given device, you can be sure that the ad size will not change. However, the size of the banner creative may change across different devices. Consequently, it is recommended to ensure your layout can accommodate variances in ad height. In rare cases, the full adaptive size may not be filled and a standard size creative will be centered in this slot instead.


> **Important**: You must know the width of the view that the ad will be placed in, **and this should take into account the device width and any display cutouts that are applicable**.

To use adaptive banners, replace any calls to `setAdSize()` with `setAdaptiveAdSize()`. This function takes two optional parameters, the width and the orientation. The simplest option is to use the defaults,and then the extension will calculate the available width based on the current orientation and use that for creation of the adaptive banner size.


```actionscript
Adverts.service.createAdView(
        function( adView:AdView ):void
        {
			adView.setAdaptiveAdSize();
			adView.setAdUnitId( "ca-app-pub-3940256099942544/6300978111" );

			...
		});
```

If you wish to preload an advert for a different width / orientation you can pass in the appropriate values, eg to set the :

```actionscript
adView.setAdaptiveAdSize( width, "portrait" );
```

Valid values for orientation are:
- `portrait`
- `landscape`
- `auto` (default)

If you are specifying an orientation different from the current, then you must supply a valid `width`.




## Loading

To load an advert into your view you use the `load` function and pass it an `AdRequest` object which will specify the details of the ad request to load. You create an `AdRequest` by using the `AdRequestBuilder`. The builder is used to correctly create the request object and easily set the availble properties on the request.

The simplest example is to just use a generic request:

```actionscript
adView.load( new AdRequestBuilder().build() );
```

You can set properties, such as adding a gender to the request, using the other methods on the builder:

```actionscript
var request:AdRequest = new AdRequestBuilder()
							.setGender( AdRequest.GENDER_MALE )
							.build();

adView.load( request );
```

See [Targeting](targeting) for more on the `AdRequestBuilder` targetting options.


You can listen for events that will inform you on when an advert is available or if there were any errors in loading the advert.
There are two events of interest here:

- `AdViewEvent.LOADED`: dispatched when an ad has finished loading;
- `AdViewEvent.ERROR`: dispatched if the ad failed to load

You can use the loaded event to delay displaying the ad until you are sure an ad is available.

```actionscript
adView.addEventListener( AdViewEvent.LOADED, loadedHandler );
adView.addEventListener( AdViewEvent.ERROR, errorHandler );


function loadedHandler( event:AdViewEvent ):void
{
	// Ad loaded and ready to be displayed
}

function errorHandler( event:AdViewEvent ):void
{
	// Load error occurred. The errorCode will contain more information
	trace( "Error" + event.errorCode );
}
```

If an error occurs you can use the `errorCode` on the event to determine what type of error occurred. See the [troubleshooting](troubleshooting) guide to determine what happened.



## Testing and Development

It is very important that while you are developing your application that you do not serve live ads. **This is a requirement of the usage of AdMob and not following this correctly can have your application id blocked from using AdMob.**

While in development you should either use the test ad unit ids available or specify your test device id in your ad requests. More information on this is located in the section on [Test Ads](test-ads)

The following Ad Unit IDs can be used to AdMob test banner ads in your application:

- Android: `ca-app-pub-3940256099942544/6300978111`
- iOS: `ca-app-pub-3940256099942544/2934735716`		





## Display 

When you are ready to display your advert you call `show()` as below.

```actionscript
adView.show();
```

You don't have to wait for a load complete event to show the ad. However if you want to ensure that something is displayed in the view then we suggest you wait for the `LOADED` event before showing your ad view.

You can also remove the ad from the view by calling `hide()`. This is the reverse of the show function and will remove the ad from view, while not unloading the ad.

```actionscript
adView.hide();
```


## View Parameters

Changing the view parameters of an advert allows you to reposition the advert to suit your application.

The view params are probably best used to align the advert to a particular horizontal and vertical location in your application. For example to align the ad to the bottom left of your application:

```actionscript
var params:AdViewParams = new AdViewParams();
params.horizontalAlign = AdViewParams.ALIGN_LEFT;
params.verticalAlign = AdViewParams.ALIGN_BOTTOM;

adView.setViewParams( params );
```

You can also use the view params to position the adview at a specific location:

```actionscript
var params:AdViewParams = new AdViewParams();
params.x = 10;
params.y = 10;

adView.setViewParams( params );
```

>
> Note: Setting an alignment in your view params will override the x,y coordinate
>


## Advert Size

Retrieving the size of the advert allows you to get the pixel size of the displayed Ad.

```actionscript
var size:AdSize = adView.getAdSize();

trace( "pixel width:  " + size.widthInPixels );
trace( "pixel height: " + size.heightInPixels );
```

This can be useful if you need to adjust elements of your application to fit around a banner ad.




## Events

There are several events dispatched by the advert as the user interacts with it:

- `AdViewEvent.OPENED`: dispatched when an ad opens an overlay that covers the screen;
- `AdViewEvent.CLOSED`: dispatched when a user returns to the app, having closed the interstitial;
- `AdViewEvent.CLICKED`: dispatched when a user clicks the ad;
- `AdViewEvent.IMPRESSION`: dispatched when a an ad impression occurs;

At the very least we suggest you should listen for the closed event to know when control returns to your application.

```actionscript
adView.addEventListener( AdViewEvent.OPENED, openedHandler );
adView.addEventListener( AdViewEvent.CLOSED, closedHandler );

adView.show();


function openedHandler( event:AdViewEvent ):void 
{
	// The has been opened and presented an overlay visible to the user 
}

function closedHandler( event:AdViewEvent ):void 
{
	// Control has returned to your application
	// you should reactivate any paused / stopped parts of your application.
}
```


## Refresh

You can refresh the ad at any time by triggering another `AdRequest` load:

```actionscript
adView.load( new AdRequestBuilder().build() ); 
```



## Destroy

When you are finished with an `AdView` instance you can cleanup any memory consumed by the ad by calling `destroy()`:

```actionscript
adView.destroy();
```

No other methods should be called on the ad view after `destroy()` is called as they will have undefinted results.


