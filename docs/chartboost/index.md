---
title: Chartboost
hide_title: true
slug: /chartboost/
---

![](images/hero.png)

# Chartboost

The [Chartboost](https://airnativeextensions.com/extension/com.distriqt.Chartboost) extension 
gives access to the [Chartboost SDK](https://platform.chartboost.com/) to monetise your application.


### Features:

- Chartboost SDK integration
- Single API interface - your code works across supported platforms with no modifications
- Sample project code and ASDocs reference

As with all our extensions you get access to a year of support and updates as we are 
continually improving and updating the extensions for OS updates and feature requests.



## Documentation

The [documentation site](https://docs.airnativeextensions.com/docs/chartboost) forms the best source of detailed documentation for the extension along with the [asdocs](https://docs.airnativeextensions.com/asdocs/chartboost). 


Quick Example: 

```actionscript
var config:ChartboostConfig = new ChartboostConfig()
        .setAppId( CHARTBOOST_APPID )
        .setAppSignature( CHARTBOOST_APPSIGNATURE );

Chartboost.instance.addEventListener( ChartboostEvent.START_SUCCESS, startSuccessHandler );
Chartboost.instance.addEventListener( ChartboostEvent.START_ERROR, startErrorHandler );

Chartboost.instance.startWithConfig( config );
```

More information here: 

[com.distriqt.Chartboost](https://airnativeextensions.com/extension/com.distriqt.Chartboost)


## License

You can purchase a license for using this extension:

[airnativeextensions.com](https://airnativeextensions.com/)

distriqt retains all copyright.


![](images/promo.png)

