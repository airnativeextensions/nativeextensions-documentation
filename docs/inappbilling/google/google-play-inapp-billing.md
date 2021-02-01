---
title: Google Play InApp Billing
sidebar_label: Setup
---

## Add Your Application to the Developer Console

The Google Play Developer Console is where you publish your In-app Billing application and 
manage the various digital goods that are available for purchase from your application.
When you create a new application entry in the Developer Console, it automatically generates 
a public license key for your application. 
You will need this key to establish a trusted connection from your application to the Google Play servers. 
You only need to generate this key once per application, and don’t need to repeat these steps 
when you update the APK file for your application.

To add your application to the Developer Console:

- Go to the Google Play Developer Console site and log in (http://play.google.com/apps/publish). 
  You will need to register for a new developer account, if you have not registered previously. 
  To sell in-app items, you also need to have a Google Checkout Merchant account 
  (http://www.google.com/wallet/merchants.html).

- Click on Try the new design to access the preview version of the Developer Console, 
  if you are not already logged on to that version.

- In the All Applications tab, add a new application entry.

  - Click Add new application.
  - Enter a name for your new In-app Billing application.
  - Click Prepare Store Listing.
  
- In the Services & APIs tab, find and make a note of the public license key that Google Play generated for your application. 
  This is a Base64 string that you will need to include in your application code later.

Your application should now appear in the list of applications in Developer Console.


---

## Creating your products

Products represent each purchasable item in your application. 

- Go to the In-app Products section of your application and if you haven't done so already, 
  upload a valid version of your application (APK) file. 
  This can just be an early version of your application but must have the correct billing 
  permissions included in the application manifest (see the [Add the Extension](../add-the-extension) section for more).
- Click "+ Add new product"
- Enter in the product ID and select the type of product: **Managed** / **Unmanaged** / **Subscription**. 
  Be careful here as this information cannot be changed once you move to the next stage.
- Enter in the requested information about the product, including title, description and price.
- Make sure you save and Activate the product


---

## Testing

Setting up a testing process is a very important part of integrating purchases into your application.

With Google Play you will need to have correctly setup test accounts to be able to enable test purchases:

- For more information on testing accounts see: http://developer.android.com/training/in-app-billing/test-iab-app.html
- For more information on testing purchases see: http://developer.android.com/google/play/billing/billing_testing.html 

---


## Security Recommendation

When you send a purchase request, create a `String` token that identifies the user making this purchase request 
and include this token in the `applicationUsername`. You can use a randomly generated string as the token. 

If you pass this value, Google Play can use it to detect irregular activity, such as many
devices making purchases on the same account in a short period of time. Do not use the
developer ID or the user's Google ID for this field. In addition, this field should not
contain the user's ID in cleartext. We recommend that you use a one-way hash to generate a
string from the user's ID and store the hashed string in this field.

For added security, you should perform the checking on your own secure server. 
Make sure to verify that the orderId is a unique value that you have not previously processed.

