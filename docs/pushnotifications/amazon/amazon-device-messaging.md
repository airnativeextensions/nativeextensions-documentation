---
title: Setup ADM
sidebar_label: Setup ADM
---


## Obtain Credentials

To use Amazon Device Messaging (ADM), you must be able to uniquely identify your app to Amazon. Amazon provides you with credentials for this purpose:

- **API key(s)**. ADM uses an API key to verify your app's identity.
- **OAuth Credentials** ("Client ID" and "Client Secret"). ADM uses OAuth credentials to verify your server's identity. Your server presents these credentials to obtain access tokens for sending messages using ADM.


You need a security profile to identify your App. Your security profile credentials, client ID and client secret - allows your device to securely identify itself to the services. For more details check the technical documentation on how to create it.


### Get your API Key

You will need to create an **API Key** and package it with your application in a file `api_key.txt`.

- To generate the key follow the guide here: https://developer.amazon.com/docs/adm/obtain-credentials.html#getting-your-oauth-credentials-and-api-key

Once you have generated your key copy it into a text file named `api_key.txt` and place it at the root level of your application, i.e. alongside the swf or main document class and ensure it is packaged with your application.

:::warning
Do not place the `api_key.txt` file in an `assets` folder as mentioned in the documentation. Any assets from AIR are automatically added into this directory, so add it at the top level of your application package.
:::

:::warning Important
ADM cannot recognize your API key if it contains any spaces or line breaks.
:::




