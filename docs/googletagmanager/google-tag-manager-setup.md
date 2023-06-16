---
title: Google Tag Manager Setup
sidebar_label: Google Tag Manager Setup
---


### Prerequisites

Before attempting to use this extension make sure you have correctly setup Google Tag Manager and prerequisites your application:

- In the [Firebase console](https://console.firebase.google.com/), add your app to your Firebase project.
- Set up [Google Analytics](/docs/firebase/core/add-the-extensions) for your app, including enabling Google Analytics in your Firebase project and adding the Firebase extension to your app.
- [Create a Tag Manager account](https://tagmanager.google.com/).
- [Configure a Google Tag Manager container](https://support.google.com/tagmanager/answer/6103696#CreatingAnAccount).



### Download your container

- Sign in to your Tag Manager account
- Select your container
- Click Versions in the top navigation bar
- Click Actions > Export on the selected container version

:::note
The name of the downloaded file is the container ID with a `.json` extension.
:::


Next, add the downloaded container file to your project:

- Create a folder called `container` for iOS and `containers` for Android
- Copy the downloaded `json` file into the correct folder for your platform
- Add this directory to your application package at the root level


:::note
Android and iOS directory names are slightly different
:::