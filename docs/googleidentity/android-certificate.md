---
title: Android Certificate
sidebar_label: Android Certificate
---


This is where most people will run into issues getting this extension to work and signing in users.

**Using a certificate that doesn't match the one you entered in the project configuration will cause the sign in process to fail silently!**

You must take care in using the correct certificate fingerprint to create your Android credentials.
You will need the SHA1 fingerprint of your signing certificate here. This is the p12 certificate you 
use to sign your application.

```
keytool -exportcert -keystore YOUR_CERTIFICATE.p12 -storepass YOUR_PASSWORD -list -v -storetype PKCS12
```

## Debugging

Often when debugging using an IDE the IDE will use a temporary debug certificate to sign your 
application, even if you have set application configuration to use your production certificate.


There are two options to get around this, the first is to create another project (as above) using 
instead the debug certificate signature. 

The following command retrieves the SHA1 signature for the debug certificate used in Flash Builder on macOS (OSX).

```
keytool -exportcert -keystore /Applications/Adobe\ Flash\ Builder\ 4.7/eclipse/plugins/com.adobe.flexide.multiplatform.android_4.7.0.349722/resources/debug-certificate-android.p12 -storepass debug -list -v -storetype PKCS12
```

We do not advise using this to create your Google project as it can be difficult to change when you
go into production, so make sure you create a second debugging project.


## Using the production certificate for debugging

The best method to debug is to use your production certificate for debugging. Getting this working 
requires a few configuration tricks.

### Flash Builder 

Go to 'Properties' for your project
- Select ActionScript Build Packaging > Google Android
- Next to Targets, click 'Create Custom...' (copy values from 'device')
- Next make sure it's selected in the dropdown
- Click 'Customize Launch...'
- Set 'keystore' to the path to your release certificate, p12 file
- Set 'storetype' to `PKCS12`
- Set 'storepass' to the password for your cert

- Back under Properties, go to Run/Debug Settings, and select your Android debug configuration.
- Make sure 'Build Target' is set to your custom build target.

Flash Builder will not save the password for the certificate. So each time you relaunch Flash Builder
you will need to reenter the password in the debug settings.

- Go to "Debug Configurations"
- "Customize Launch"
- You should see a massive list of the parameters for your application
- Scroll right to the bottom and enter your password manually.


