---
title: iOS Setup
sidebar_label: iOS
---

iOS requires set up of an "App Group" for your application(s).

Log into the developer member center and go to your application identifiers.

Firstly you will need to create an App Group.

- Go to [App Groups](https://developer.apple.com/account/ios/identifier/applicationGroup)
- Click the "+" in the top right to register a new group
- Enter a description and an identifier.
  - The identifier is recommended to be a reverse domain style and starting with `group.`
  - eg: `group.com.distriqt.test`


Once you have created a group you need to enable it for the applications that are going to be placed in this group.

- Go to [App IDs](https://developer.apple.com/account/ios/identifier/bundle)
- Select the application of interest and click edit
- Enable "App Groups" in the "iOS App ID Settings"
- Click "Edit" in the "App Groups" row
  - Select the App Group you created previously
  - Click "Continue" and then "Assign"

You will need to regenerate your provisioning profiles and download them again so make sure you do this now.

Next you will need to add this group identifier to the entitlements of your application.


