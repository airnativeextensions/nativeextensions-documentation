---
title: Troubleshooting
sidebar_label: Troubleshooting
---

## Common problems

The following are some common problems encountered with an incorrectly configured application:

- You did not complete all the financial requirements (see ["Managing Agreements, Tax, and Banking"](https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/ManagingContractsandBanking.html#//apple_ref/doc/uid/TP40011225-CH21-SW1)).
- You did not use the Provisioning Profile associated with your explicit App ID.
- You did not use the correct product identifier in your code. See Technical Q&A, QA1329, 'In App Purchase Product Identifiers' for more information about product identifiers.
- You did not clear your In App Purchase products for sale in iTunes Connect.
- You might have modified your products, but these changes are not yet available to all the App Store servers.
- If you or App Review rejected your most recent binary in iTunes Connect. 
  Change the status to "Waiting for Upload" by clicking "Ready to Upload Binary" in iTunes Connect 
  and the problem should be resolved after about 10 minutes.

The correct order for purchasing a product is as follows:

- Select item to purchase
- Purchase confirmation
- User taps "buy"
- iTunes Account Login Alert is displayed

>
> Note: You should be aware that any process that causes the iTunes login without 
> user interaction will most likely result in your application failing to pass the review guidelines.
>

