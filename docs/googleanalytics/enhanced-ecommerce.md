---
title: Enhanced Ecommerce
sidebar_label: Enhanced Ecommerce
---


Enhanced ecommerce enables the measurement of user interactions with products across the user's shopping experience, which include product impressions, product clicks, viewing product details, adding a product to a shopping cart, initiating the checkout process, transactions, and refunds.

Below we cover the main concepts involved with Enhanced Ecommerce. The API is very similar to the Android Google Analytics API so you should be able to refer to that for any [advanced usage](https://developers.google.com/analytics/devguides/collection/android/v4/enhanced-ecommerce).



## Measuring Products

The main measure is to record an action, by using the addProduct method with a Product object to add product details, and the setProductAction method with a ProductAction object to specify the action being performed.

In the following example we send a transaction containing a single item. Transaction level details like total revenue, tax, and shipping are provided in the ProductAction object.


```actionscript

var product:Product = new Product()
	.setId( "P12345" )
	.setName("Android Warhol T-Shirt")
	.setCategory("Apparel/T-Shirts")
	.setBrand("Google")
	.setVariant("black")
	.setPrice(29.20)
	.setCouponCode("APPARELSALE")
	.setQuantity(1);

var action:ProductAction = new ProductAction( ProductAction.ACTION_PURCHASE )
	.setTransactionId("T12345")
	.setTransactionAffiliation("Google Store - Online")
	.setTransactionRevenue(37.39)
	.setTransactionTax(2.85)
	.setTransactionShipping(5.34)
	.setTransactionCouponCode("SUMMER2013");

var builder:ScreenViewBuilder = ScreenViewBuilder(
	new ScreenViewBuilder()
		.addProduct( product )
		.setProductAction( action )
);

var tracker:Tracker = GoogleAnalytics.service.defaultTracker;

tracker.setScreenName( "transaction" );
tracker.send( builder.build() );
```



## Measuring the Checkout Process


To measure each step in a checkout process:

- Add tracking code to measure each step of the checkout process.
- If applicable, add tracking code to measure checkout options.
- Optionally set user-friendly step names for the checkout funnel report by configuring Ecommerce Settings in the admin section of the web interface.

For each step in your checkout process, you’ll need to implement the corresponding tracking code to send data to Google Analytics.


```actionscript

var product:Product = new Product()
	.setId( "P12345" )
	.setName("Android Warhol T-Shirt")
	.setCategory("Apparel/T-Shirts")
	.setBrand("Google")
	.setVariant("black")
	.setPrice(29.20)
	.setCouponCode("APPARELSALE")
	.setQuantity(1);

var action:ProductAction = new ProductAction( ProductAction.ACTION_CHECKOUT )
	.setCheckoutStep(1)
	.setCheckoutOptions("Visa");

var builder:ScreenViewBuilder = ScreenViewBuilder(
	new ScreenViewBuilder()
	.addProduct( product )
	.setProductAction( action )
);


var tracker:Tracker = GoogleAnalytics.service.defaultTracker;

tracker.setScreenName( "checkoutStep1" );
tracker.send( builder.build() );
```


## Measuring Promotions

Enhanced ecommerce includes support for measuring impressions and clicks of internal promotions, such as banners displayed to promote a sale.

Internal promotion impressions are generally measured with the initial screen view using the addPromotion method with a Promotion object to specify the details of the promotion. For example:

```actionscript
var promotion:Promotion = new Promotion()
	.setId("PROMO_1234")
	.setName("Summer Sale")
	.setCreative("summer_banner2")
	.setPosition("banner_slot1");

var builder:ScreenViewBuilder = ScreenViewBuilder(
	new ScreenViewBuilder()
		.addPromotion( promotion )
);


var tracker:Tracker = GoogleAnalytics.service.defaultTracker;

tracker.setScreenName( "promotions" );
tracker.send( builder.build() );
```


