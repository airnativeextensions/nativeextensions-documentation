---
title: Introductory Prices
sidebar_label: Introductory Prices
---


**Offer introductory pricing for auto-renewable subscriptions to eligible users.**

>
> Available through Google Play Billing and Apple In-App Purchases
>

Apps with auto-renewable subscriptions can offer a discounted introductory price, including a free trial, to eligible users. You can make introductory offers to customers who haven’t previously received an introductory offer for the given product, or for any products in the same subscription group.

- **Free trial period**: An amount of time during which a user may access a subscription without being billed. A free trial period is a way to entice users to try your subscription before committing to purchase it.

- **Introductory price**: The price of the subscription over a certain number of initial, "introductory" billing periods. Introductory price is a way to entice users to try your subscription while simultaneously gaining some revenue. The Introductory price must be less than the subscription's normal price.





Start by setting up introductory offers in App Store Connect or the Google Play Console. 

The process then follows:

- Retrieving discounts
- Determine eligibility
- Display the offer
- Make Purchase


On iOS you will need to determine if the user is eligible to receive an introductory offer. When the app queries the App Store for a list of available products, display the introductory pricing if the user is eligible to receive them.


Before you can display introductory offers and free trials in your app, you must first configure the offers in App Store Connect and the Google Play Console. 

- App Store Connect, see [Set an introductory offer for an auto-renewable subscription](https://help.apple.com/app-store-connect/#/deve1d49254f).
- Google Play Console, see [Create a subscription](https://support.google.com/googleplay/android-developer/answer/140504)



## Retrieving Discounts

Information on the discounts for a product are retrieved as part of the `getProducts()` call.

If the product has an introductory offer then there will be a `ProductDiscount` object in the `product.discounts` array that has a type of `ProductDiscount.TYPE_INTRODUCTORY`. There may be multiple introductory offers, eg a free trial and an introductory price. *A free trial will have a `paymentMode` of `ProductDiscount.PAYMENTMODE_FREE_TRIAL`.*


```actionscript  
InAppBilling.service.addEventListener( 
	InAppBillingEvent.PRODUCTS_LOADED, 
	products_loadedHandler );
				
InAppBilling.service.getProducts( [ productId ] );


function products_loadedHandler( event:InAppBillingEvent ):void 
{
	for each (var product:Product in event.data)
	{
		if (product.discounts != null)
		{
			for each (var discount:ProductDiscount in product.discounts)
			{
				if (discount.type == ProductDiscount.TYPE_INTRODUCTORY)
				{
                    if (discount.paymentMode == ProductDiscount.PAYMENTMODE_FREE_TRIAL)
                    {
                        // this is a free trial
                    }
                    else 
                    {
    					// this is an introductory discount 
                    }
				}
			}
		}
	}
}
```



## Determine Eligibility 

Depending on the store, you may need to determine whether the current user is eligible for the discount. You can check this by inspecting the `storeDeterminedEligible` flag on the `ProductDiscount` instance.
This flag indicates whether the current user is determined to be eligible for the discount by the source store.

If this value is `true` then you can assume the user is eligible for the discount. If it is `false` then you will need to use the process defined by the current store to determine user eligibility.

For example, Google Play Billing only provides details on these offers to users who are eligible for the discount and so this value will be `true`.

As opposed to Apple In-App Purchases where you must determine eligibility by determining if the user has previously purchased a subscription.


### Google Play Billing 

The discount will only be available in the `discounts` array if the user is eligible for the offer. 


### Apple In-App Purchases

To determine if a user is eligible for an introductory offer, check their receipt:
- Validate the receipt as described in [Validating Receipts with the App Store](https://developer.apple.com/documentation/storekit/in-app_purchase/validating_receipts_with_the_app_store?language=objc).
  - Send the receipt to your server;
  - Call the Apple verify receipt end point;
  - Process the response;
- In the receipt, check the values of the is_trial_period and the is_in_intro_offer_period for all in-app purchase transactions. If either of these fields are true for a given subscription, the user is not eligible for an introductory offer on that subscription product or any other products within the same subscription group. 

Based on the receipt, you will find that new and returning customers are eligible for introductory offers, including free trials:
- New subscribers are always eligible.
- Lapsed subscribers who renew are eligible if they haven't previously used an introductory offer for the given product (or any product within the same subscription group).





## Display Offer

Once you determine the user is eligible for an introductory discount, query the extension for available products, and inspect the `discounts` property.

**You will have to display the alternate pricing based on whether you determined the user to be eligible.** 

There may be more than one introductory offer, so ensure that you display information on both. Eg, you may have a free trial period, followed by an introductory price discount, before the normal subscription price is applied. It is considered very important by the store policies that all this information is clearly displayed.


## Make the Purchase

There is nothing required to present the introductory discount or free trial. 

When you call `makePurchase()` for a user that has an eligible introductory offer, the purchase process will automatically present the offer to the user during the purchase dialogs. Purchase flow will continue as normal.





## Notes

There are some policy guidelines you will need to adhere to when displaying the discounts, mainly around the information that is displayed to the user when asking them to subscribe. Make sure you have read and followed the guidelines when implementing discounts:

- Google Play Billing: 
https://play.google.com/about/monetization-ads/subscriptions/#!?zippy_activeEl=management-cancellation#management-cancellation

- Apple In-App Purchases:  https://developer.apple.com/design/human-interface-guidelines/in-app-purchase/overview/
