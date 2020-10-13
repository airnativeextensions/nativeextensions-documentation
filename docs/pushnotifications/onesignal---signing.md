---
title: OneSignal - Signing
sidebar_label: OneSignal - Signing
---

>
> This is no longer required from AIR 30+
>

# Signing your iOS application

With AIR 27 Adobe has partially completed the ability to use dynamic frameworks in your iOS application. This is the additional `Frameworks` directory that you added to the build.

Everything will work up to a point including debug builds should work well, however AIR will incorrectly sign a release version of your IPA and it will fail AppStore submission with an error from the Application Loader tool.

**Please vote to resolve this issue here: [https://tracker.adobe.com/#/view/AIR-4198407](https://tracker.adobe.com/#/view/AIR-4198407)**



To get around this, before you upload your application to iTunesConnect you will need to run a script to resign your IPA. 
This script is available in the repository alongside the OneSignal ANE in the `OneSignal/scripts` directory.

>
> This script will only work on a macOS machine with Xcode installed and your distribution certificate installed in Keychain
>

Copy this script to a directory in your development environment.

Firstly edit the script to change the details of the IPA, provisioning profile and signing identity for your application. These details are located at the top of the script.


```
#####################################
## CONFIG

# You need to set the values below for your application
# We suggest they are full paths to the files. 

# The path to the ipa generated from your AIR application packaging
IPA="/path/to/yourApp.ipa"

# The distribution provisioning profile for your application
PROVISIONING_PROFILE="/path/to/profile.mobileprovision"

# The name of the signing identity. You get this by running the following in a terminal 
# and selecting the name of your distribution certificate:
# 
# security find-identity -v -p codesigning
SIGNING_IDENTITY="iPhone Distribution: XXXXXXXXX (XXXXX)"
```


Now open a Terminal at the script location. *You will need to run the script from this directory.*

```
./resign
```

This should output a few informational items to the console and then once complete you should have a new IPA file in the directory named: `yourApp_resigned.ipa`. If there were any errors or warnings displayed, make sure the information above is all correct.

This resigned IPA is the file you should upload to iTunesConnect


If you have any issues please contact us on github. 

