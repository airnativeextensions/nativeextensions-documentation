---
title: Google Play Games
sidebar_label: Setup
---


You must setup your application for Play Services, the following guide will help you through that.

- http://developer.android.com/google/play-services/games.html
- https://developers.google.com/games/services/console/enabling


## Getting the SHA1 signature

If you are using the current Play App signing approach you can get the signatures of your certificates directly from the Play console, in the "App integrity" section. 

This is the suggested method for the current release process through the Play Store as the certificate you are using to sign your AAB is likely just the upload certificate and not the release certificate used when the application is installed through the store.


### Debugging

When debugging locally you will likely be signing an APK with your upload certificate. Hence when adding your SHA1 we suggest you also add both the SHA1 for your release certificate and the SHA1 for your upload certificate. This is so play games services will work locally when directly testing on a device.



### SHA1 From A Certificate

You can use the keytool utility to get the details of your `p12` certificate directly, the SHA1 signature will be listed in the output from the following command:

```
keytool -list -v -keystore /path/to/your/certificate.p12 
```

<details>
<summary><code>keytool</code> location</summary>
<p>

`keytool` is a key and certificate management utility. 

You will find it in `$JAVA_HOME/bin/keytool`.

</p>
</details>


<details>
<summary>Flash Builder Debug Certificate</summary>
<p>

> Note: We advise against using Flash Builder currently. It is unmaintained and there are much better IDEs available for AIR now. 

If you are attempting to use the default debug certificate in Flash Builder then it can be useful to add the signature of this certificate to your configuration as well. This certificate is likely different from both the upload and release certificates mentioned previously. 

The following command retrieves the SHA1 signature for the debug certificate used in Flash Builder. This will allow you to test your application from debug builds.

```
keytool -list -v 
		-keystore /Applications/Adobe\ Flash\ Builder\ 4.7/eclipse/plugins/com.adobe.flexide.multiplatform.android_4.7.0.349722/resources/debug-certificate-android.p12 
		-storepass debug 
		-storetype PKCS12
```

Also note Flash Builder will likely prepend `.debug` to your application package name so you will have to adjust that accordingly. 

</p>
</details>

## Add your game in the Google Play Developer Console

Create an entry for your game in the Google Play Developer Console. This enables Game services for your application, and creates an OAuth 2.0 client ID, if you don't have one yet. You must perform this step even if you have created a client ID for your game in the Google Developers Console.

- Record the following credential information for later.
  - Your game's application ID  - you will need to enter this into the apm project config or your manually managed manifest additions
  - Your game's OAuth 2.0 client ID
- (Optional) Add achievements and leaderboards to your game by following the steps described in Configuring Achievements and Leaderboards.
- Add test accounts for other members of your team to test your game by following the steps described in Publishing Your Game Changes.


