---
title: Handling Stores
sidebar_label: Handling Stores
---

## Retrieving the Store

You can retrieve the store that the application was installed through by using the `getInstallerStore()` function.
This function will attempt to determine which store the application was installed through and return one of the following values:

- `STORE_GOOGLEPLAY`: The application was installed from the Google Play Store;
- `STORE_AMAZON`: The application was installed from the Amazon Store;
- `STORE_HUAWEI_APPGALLERY`: The application was installed from the Huawei App Gallery;
- `STORE_APPSTORE`: The application was installed from the Apple AppStore. This is the default for all iOS / macOS devices and will be returned on iOS / macOS whether the application was installed through the AppStore or not;
- `STORE_UNKNOWN`: Returned if the store could not be determined. This will happen when your application wasn't installed through a store eg when testing on Android.


Example:

AIR:

```actionscript
var store:String = ApplicationRater.service.getInstallerStore();
```

Unity:

```csharp
string store = ApplicationRater.Instance.GetInstallerStore();
```

You can then use this value to set the appropriate application id if you use different application id's in different stores.

For example, say we have `air.com.distriqt.test` in the Google Play Store and `air.com.distriqt.amazon` in the Amazon store:

AIR:

```actionscript
var store:String = ApplicationRater.service.getInstallerStore();
switch (store)
{
    case ApplicationRater.STORE_AMAZON:
        ApplicationRater.service.setApplicationId( "air.com.distriqt.amazon", ApplicationRater.IMPLEMENTATION_ANDROID );
        break;
    
    default:
    case ApplicationRater.STORE_GOOGLEPLAY:
        ApplicationRater.service.setApplicationId( "air.com.distriqt.test", ApplicationRater.IMPLEMENTATION_ANDROID );
        break;
    
}
```

Unity:

```csharp
string store = ApplicationRater.Instance.GetInstallerStore();
switch (store)
{
    case ApplicationRater.STORE_AMAZON:
        ApplicationRater.Instance.SetApplicationId( "com.distriqt.amazon", ApplicationRater.IMPLEMENTATION_ANDROID );
        break;
    
    default:
    case ApplicationRater.STORE_GOOGLEPLAY:
        ApplicationRater.Instance.SetApplicationId( "com.distriqt.test", ApplicationRater.IMPLEMENTATION_ANDROID );
        break;
    
}
```





