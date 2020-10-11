---
title: Packaging
sidebar_label: Packaging
---


In order to change the contents of your IPA after packaging, we need to extract the IPA, change the contents (in particular the `Info.plist` file) and then importantly package and **sign** the IPA again. 

If we don't correctly resign the application then it will be rejected by the AppStore (or when installing a debug IPA).


The `resign` script provided is designed to handle this process, (including extracting your IPA, updating the `Info.plist` and resigning the application).

>
> IMPORTANT: This script must be run on a macOS machine with Xcode installed and your signing certificate(s) installed into Keychain
>

Firstly, open the `resign` script. You will need to update the configuration parameters at the top of the script.


- `IPA`: The full path to your application
- `PROVISIONING_PROFILE`: The full path to your mobile provisioning profile 
- `SIGNING_IDENTITY`: The name of the signing identity

Optional:

- `INFO_PLIST`: The full path to your `Info.plist` if you don't place it alongside the script


The paths should be fairly self explanitory. However you get the signing identity string by running the following in a terminal and selecting the name of the appropriate certificate:

```
security find-identity -v -p codesigning
```

>
> IMPORTANT: You must ensure you are using the correct mobile provisioning profile and certificate. If you are testing a debug build make sure you are using a developer profile and certificate, and if you are publishing a release make sure you are using the distribution profile and certificate.
>

Once you have made these changes, run the script in a terminal:

```
./resign
```

This will produce an IPA alongside the script named: `APPNAME_resigned.ipa`

You can then use the IPA produced by the script to either upload to the app store or install on a device for debugging.








