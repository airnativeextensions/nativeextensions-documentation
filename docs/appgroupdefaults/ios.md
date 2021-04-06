---
title: iOS
sidebar_label: iOS
---

## iOS Setup

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



### AIR

Open your application descriptor (the xml file with your application configuration).

Update the iPhone node to be as below:

```xml
<iPhone>
	<InfoAdditions><![CDATA[
		<key>UIDeviceFamily</key>
		<array>
			<string>1</string>
		</array>
	]]></InfoAdditions>
	<requestedDisplayResolution>high</requestedDisplayResolution>
	<Entitlements>
		<![CDATA[
			<key>com.apple.security.application-groups</key>
			<array>
				<string>group.application.group.identifier</string>
			</array>
		]]>
	</Entitlements>
</iPhone>
```

- Update the `group.application.group.identifier` with your App Group identifier you used earlier.



### Unity

In unity you can do this of adding the application groups either through scripts or through the Xcode project generated from the build.

To do it through Xcode simply select **Capabilities** in your project settings and enable the App Group capability. Then select your application groups you plan to use in this application. 

![](images/unity-xcode-capabilities.png)

However we suggest use the automatic configuration method by setting your values in the `/Assets/distriqt/AppGroupDefaultsUnity/AppGroupDefaults/Editor/AppGroupDefaultsConfig.cs` script.

This script will be run when your application's Xcode project is built and automatically enable the app group capability and insert the app groups specified. Using this script means you won't have to update each time you build the Xcode project.


