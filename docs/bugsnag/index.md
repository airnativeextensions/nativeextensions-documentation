---
title: BugSnag
hide_title: true
slug: /bugsnag/
---

![](images/hero.png)

# BugSnag

The [BugSnag](https://airnativeextensions.com/extension/com.distriqt.BugSnag) extension gives you access to the [BugSnag](https://www.bugsnag.com/) platform with error monitoring to monitor application health and streamline your debugging workflow.


### Features:

- Error monitoring - Monitor app health and streamline your debugging workflow
- Automatically converts AIR Error's to native error reports 
- Single API interface - your code works across supported platforms with no modifications
- Sample project code and ASDocs reference


As with all our extensions you get access to a year of support and updates as we are 
continually improving and updating the extensions for OS updates and feature requests.



## Documentation

The [documentation site](https://docs.airnativeextensions.com/docs/bugsnag) forms the best source of detailed documentation for the extension along with the [asdocs](https://docs.airnativeextensions.com/asdocs/bugsnag). 

Quick Example: 

```actionscript title="AIR"
try
{
    throw new Error( "An error occurred", 1023 )
}
catch (e:Error)
{
    BugSnag.instance.notifyError( e );
}
```

## License

You can purchase a license for using this extension:

- [airnativeextensions.com](https://airnativeextensions.com/)


distriqt retains all copyright.


![](images/promo.png)



