---
title: Overview
sidebar_label: Overview
---

Implementing in-app billing / purchases can be a daunting task. There are several steps that you must go through.

Here we will provide an overview of the process as way of introduction to the concepts in this extension. This assumes you have already been through the configuration of the service through the appropriate store console, and is focussed on the extension functionality you will be accessing.


## Setup

Firstly you must always call `setup()` and specify a `BillingService` to use. The billing service specifies which app store you are intending to use and any details about that store, such as license keys for purchase verification.

- See [Billing Service](billing-service) for details;


## Products

After setup you must retrieve a list of products. This does several things, firstly it informs the extension of the product and subscription identifiers and, secondly, it retrieves product information (price etc) from the store. Additionally any invalid identifiers will be detected including any products that may not be setup correctly. 

- See [Products](products) for details;

Once you have completed this step you are ready to access purchases.



## Making Purchases

Next you will likely want to make a purchase. 

Making a purchase consists of several components

- making a purchase request;
- handling changes in a purchase state with the purchases updated events;
- verifying a completed purchase with a server (optional);
- delivering the product;
- finishing the purchase;

Once a purchase is "finished" the purchase is acknowledged as being delivered to the user, any managed stores will hold onto this purchase for the user and return information about it as required.

- See [Make a Purchase](make-a-purchase) for details;



## Consuming Purchases

If the purchase is for a consumable product (i.e. one that can be purchased multiple times), you must consume the purchase before attempting to purchase the product again. This should only be done after the purchase is finished. It can be done immediately, or at a later point, eg when the user actually consumes the product.

- See [Consuming Purchases](consuming-purchases) for details;



## Getting and Restoring purchases

This differs between the services. Some services will allow you to query directly the purchases that a user has made and return a list. Apple is the main exception here. 

This functionality is provided through the [Get Purchases](get-purchases) functionality.

Apple intend you to do this via a server, by sending the "Application Receipt" to your server and then communicating with Apple to verify and retrieve the list of user's purchases. We have provided an "Application Receipt" variant of this ANE which decodes the application receipt locally on the device and makes the get purchases functionality available. Be aware that this is not considered best practice but is something that we have found to be convenient.


All services however provide a method of "restoring purchases". This is a process that must be triggered by a user interaction and is designed to be a way for a user to retrieve their purchases on another device. See [Restoring Purchases](restore-purchases) for details.



