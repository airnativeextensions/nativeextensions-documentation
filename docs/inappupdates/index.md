---
title: InAppUpdates
hide_title: true
slug: /inappupdates/
---

![](images/hero.png)

# InAppUpdates

The [InAppUpdates](https://airnativeextensions.com/extension/com.distriqt.InAppUpdates) extension gives you the ability to update 
your Google Play Android application on their device without having to go to the Play Store.

When your users keep your app up to date on their devices, they can try new features, as well as benefit from performance improvements and bug fixes. Although some users enable background updates when their device is connected to an unmetered connection, other users might need to be reminded to install updates. In-app updates is a Google Play Core libraries feature that prompts active users to update your app.

We provide complete guides to get you up and running with sharing quickly and easily.


### Features

- Check the Play Store for available updates 
- Start update download and installation process
- Receive status updates on download and installation state 
- Single API interface - your code works across supported platforms with no modifications
- Sample project code and ASDocs reference

As with all our extensions you get access to a year of support and updates as we are 
continually improving and updating the extensions for OS updates and feature requests.



## Documentation

The [documentation site](https://docs.airnativeextensions.com/docs/inappupdates) forms the best source of detailed documentation for the extension along with the [asdocs](https://docs.airnativeextensions.com/asdocs/inappupdates). 

Quick Example: 

```actionscript title="AIR"
InAppUpdates.instance.getAppUpdateInfo(
        function ( appUpdateInfo:AppUpdateInfo ):void
        {
            trace( JSON.stringify( appUpdateInfo.toObject() ) );
        }
);
```

More information here: 

[com.distriqt.InAppUpdates](https://airnativeextensions.com/extension/com.distriqt.InAppUpdates)


## License

You can purchase a license for using this extension:

- [airnativeextensions.com](https://airnativeextensions.com/)


distriqt retains all copyright.


![](images/promo.png)



