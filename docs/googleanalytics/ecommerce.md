---
title: Ecommerce
sidebar_label: Ecommerce
---


>
> Warning: Ecommerce SDK is deprecated. You still can use this functionality however it is suggested to use **Enhanced Ecommerce**.
> 

Ecommerce measurement allows you to send in-app purchases and sales to Google Analytics. 
Ecommerce data in Google Analytics is comprised of transaction and item hits, related 
by a shared transaction ID.

Transactions have the following fields:

- Transaction ID (required): A unique ID representing the transaction. This ID should not collide with other transaction IDs.
- Affiliation (required): An entity with which the transaction should be affiliated (e.g. a particular store)
- Revenue (required): The total revenue of a transaction, including tax and shipping
- Tax (required): The total tax for a transaction
- Shipping (required): The total cost of shipping for a transaction
- Currency code: The local currency of a transaction. Defaults to the currency of the view (profile) in which the transactions are being viewed

In the following example we send a transaction containing a single item:

```actionscript
var tracker:Tracker = GoogleAnalytics.service.getTracker( "YOUR_TRACKING_ID" );

// Send the overview of the transaction
tracker.send(
	new TransactionBuilder()
		.setTransactionId(transactionId)
		.setAffiliation("internal")
		.setRevenue(12.22)
		.setTax(0)
		.setShipping(0)
		.setCurrencyCode("USD")
		.build() );
		
// Send the items in this transaction
tracker.send( 
	new ItemBuilder()
		.setTransactionId(transactionId)
		.setName("AwesomeSauce")
		.setSku("p_12341234")
		.setCategory("sauce")
		.setPrice(12.22)
		.setQuantity(1)
		.setCurrencyCode("USD")
		.build() );
```

