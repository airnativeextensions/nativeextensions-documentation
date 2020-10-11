---
title: Adding Icons
sidebar_label: Adding Icons
---



In order to add icons to your application you firstly need to create the icon png assets. 

These should follow the native iOS naming conventions, eg the two most common iPhone icons are:

- `IconName@2x.png`: 120x120 
- `IconName@3x.png`: 180x180 
 
(Replace `IconName` with the name you intend to use for your icon).

These assets should be added to your AIR application package and included at the root level.




## Info plist Changes

This stage involves extracting the `Info.plist` file from your IPA and adding the references to the alternate icons.

>
> Before starting this we suggest you have completed any changes to your application descriptor's InfoAdditions and Entitlements nodes and ensured you have setup all your primary icons. 
> 
> These settings affect the `Info.plist` file created. If the `Info.plist` changes on subsequent builds you will need to extract the file and modify it again.
>

Firstly package your application as normal and locate the IPA built. Unzip the IPA (you may need to change the extension to `.zip` depending on your process).

Make sure you are using the correct build, debug/production, i.e if you are going to be debugging the IPA make sure you use the IPA produced from a debug process.

Once you have extracted the IPA, locate the `Info.plist` file:

```
Payload/APPNAME.app/Info.plist
```

Copy this file to be alongside the `resign` script (or to a location you specify in the script).

Open the copied file in a text editor and locate the `CFBundleIcons` node. It should resemble the below:


```xml
<key>CFBundleIcons</key>
<dict>
    <key>CFBundlePrimaryIcon</key>
    <dict>
        <key>CFBundleIconFiles</key>
        <array>
            <string>Icon-Ipad-152.png</string>
            <string>Icon-Iphone-120.png</string>
            <string>Icon@2x.png</string>
            <string>Icon-Ipad-76.png</string>
            <string>Icon-Large.png</string>
            <string>Icon.png</string>
            <string>Icon-Small-50.png</string>
            <string>Icon-Small.png</string>
        </array>
        <key>CFBundleIconName</key>
        <string>AppIcon</string>
    </dict>
</dict>
```

We need to add the `CFBundleAlternateIcons` node to this dictionary, replacing the `IconName` references below with the name of your alternate icon:


```xml
<key>CFBundleAlternateIcons</key>
<dict>
    <key>IconName</key>
    <dict>
        <key>CFBundleIconFiles</key>
        <array>
            <string>IconName</string>
        </array>
    </dict>
</dict>
```

The final section should resemble the below:

```xml
<key>CFBundleIcons</key>
<dict>
    <key>CFBundleAlternateIcons</key>
    <dict>
        <key>AlternateIcon</key>
        <dict>
            <key>CFBundleIconFiles</key>
            <array>
                <string>AlternateIcon</string>
            </array>
        </dict>
    </dict>
    <key>CFBundlePrimaryIcon</key>
    <dict>
        <key>CFBundleIconFiles</key>
        <array>
            <string>Icon-Ipad-152.png</string>
            <string>Icon-Iphone-120.png</string>
            <string>Icon@2x.png</string>
            <string>Icon-Ipad-76.png</string>
            <string>Icon-Large.png</string>
            <string>Icon.png</string>
            <string>Icon-Small-50.png</string>
            <string>Icon-Small.png</string>
        </array>
        <key>CFBundleIconName</key>
        <string>AppIcon</string>
    </dict>
</dict>
```

Save these changes to the Info.plist file.

























