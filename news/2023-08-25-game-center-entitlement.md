---
title: Game Center requirements
description: Upcoming Game Center entitlement requirement
image: images/gameservices-accesspoint.png
authors: [ marchbold ]
tags: [gamecenter, game-services, ios, apple]
---

If you are publishing games to the AppStore for iOS you may have recently received an notification along the following lines:

:::note Upcoming Game Center entitlement requirement
Starting August 16, 2023, new apps and app updates that offer Game Center features need to include the Game Center entitlement and have Game Center features configured in App Store Connect before you can submit them to the App Store. Existing apps on the App Store are not affected by this new requirement.

We noticed that although the apps listed below have Game Center features configured in App Store Connect, their latest binary delivery doesn’t include the Game Center entitlement. In your next app update, please update your binary to include the entitlement.
:::

There are two important things you need to do to your application in order to meet this new requirement.

Firstly, make sure the capability is enabled in "Certificates, Identifiers & Profiles" for your application in the developer portal. Then update and download your provisioning profiles to ensure they are updated with the new capability.

Then in your application descriptor you will need to add the entitlement. If you are using `apm` just ensure you are using the latest version and then generate your app descriiptor, `apm` will ensure the entitlement is correctly added.

If you are manually managing your app descriptor additions then you will need to add the following to the `Entitlements` node under `iPhone`:

```xml
<iPhone>
	<Entitlements><![CDATA[
	
		<key>com.apple.developer.game-center</key>
		<true/>
		
	]]></Entitlements>
</iPhone>
```

Once you have followed these steps your application will support this new requirement and you will be able to submit your application to the AppStore.
