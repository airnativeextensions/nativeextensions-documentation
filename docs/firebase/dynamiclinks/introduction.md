---
title: DynamicLinks - Introduction
sidebar_label: Introduction
---

:::warning Shutdown Notice
Google is planning on shutting down the Firebase Dynamic Links service on August 25, 2025. 

On August 25, 2025, all links served by Firebase Dynamic Links (both those hosted on custom domains or on page.link subdomains) will stop working. Your new and existing links will continue to work until the Firebase Dynamic Links service is shut down.

Firebase projects that have already enabled Firebase Dynamic Links will be able to continue using existing links and creating new ones during the sunset window (between now and August 25, 2025). 

#### What do you need to do?

Take the following actions before August 25, 2025:

- Review your use-cases to evaluate, decide and potentially adopt alternative solutions
- Complete your migration from Firebase Dynamic Links
- Delete your domain prefixes from Firebase Dynamic Links when you have successfully migrated your links and use-cases

Please note that your domain prefixes and any created links will be automatically removed on August 25, 2025, and Firebase Dynamic Links will no longer be available for your project. 

Further information can be found in the [Dynamic Links Deprecation FAQ](https://firebase.google.com/support/dynamic-links-faq).
:::


Dynamic Links are links that work the way you want, on multiple platforms, and whether or not your app is already installed.


## About 

Firebase Dynamic Links are links that work the way you want, on multiple platforms, and whether or not your app is already installed.

>
> With Dynamic Links, your users get the best available experience for the platform they open your link on. 
> If a user opens a Dynamic Link on iOS or Android, they can be taken directly to the linked content in your 
> native app. If a user opens the same Dynamic Link in a desktop browser, they can be taken to the equivalent 
> content on your website.
>
> In addition, Dynamic Links work across app installs: if a user opens a Dynamic Link on iOS or Android and 
> doesn't have your app installed, the user can be prompted to install it; then, after installation, your app 
> starts and can access the link.
>

[![YOUTUBE](https://img.youtube.com/vi/LvY1JMcrPF8/0.jpg)](https://www.youtube.com/watch?v=LvY1JMcrPF8)

[https://firebase.google.com/docs/dynamic-links/](https://firebase.google.com/docs/dynamic-links/)


## How does it work?

You create a Dynamic Link either by using the Firebase console, using a REST API, iOS or Android Builder API, 
or by forming a URL by adding Dynamic Link parameters to a domain specific to your app. These parameters specify 
the links you want to open, depending on the user's platform and whether your app is installed.

When a user opens one of your Dynamic Links, if your app isn't yet installed, the user is sent to the Play Store 
or App Store to install your app (unless you specify otherwise), and your app opens. You can then retrieve the 
link that was passed to your app and handle the link as appropriate for your app.

