---
title: Troubleshooting
sidebar_label: Troubleshooting
---


## Common Issues


### Android Sign In Error

If you are getting an error returned when attempting to sign in users on Android, in particular an error code 8 (`INTERNAL_ERROR`) please double check your applications credentials in the Google API console are correct.

The most common cause for this issue is that the certificate and package name of the application doesn't match an entry in your api console project. 

Every Android application is uniquely identified by the signature of the certificate (your p12 file) and the package name (AIR application id perfixed by `air.`).

To verify:

1. Open the [credentials](https://console.developers.google.com/project/_/apiui/credential) page in your console project;

2. Make sure your certificate / package name has an Android typed OAuth 2.0 client ID. To create a new ID follow the instructions in [setup](setup.md)

