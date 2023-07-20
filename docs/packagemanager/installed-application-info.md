---
title: Installed Application Info
sidebar_label: Installed Application Info
---

## Permissions 

In order to retrieve information about other applications you must add the package name for the application to the `queries` node in your manifest additions. 

```xml
<queries>
    <package android:name="com.application.example" />
</queries>
```

You'll need to identify the package name of the application you wish to query.


### All packages permission

Google generally restricts the visibility of installed packages, however there is a broad permission `QUERY_ALL_PACKAGES` that Google grants to applications in certain circumstances. If you have access to this permission then you don't need to include the queries.

```xml
<uses-permission android:name="android.permission.QUERY_ALL_PACKAGES"/>
```

More information here: 
https://support.google.com/googleplay/android-developer/answer/10158779?hl=en#zippy=%2Cpermitted-uses-of-the-query-all-packages-permission



## Query single application

You can query information about a single application by using the `getPackageInfo()` method. This method returns a `PackageInfo` object representing the queried package. If this returns `null` the application isn't installed (or you didn't add the correct permissions).

```actionscript
var packageInfo:PackageInfo = PackageManager.service.getPackageInfo( "com.application.example" );
if (packageInfo == null)
{
    // Application not installed or permission denied
}
```


## Querying all applications 

There are two methods to retrieve the installed application information, asynchronous and synchronous. We suggest the async method as it shouldn't affect the ui as much as the synchronous method may do, depending on the device and the number of applications installed.

Which ever method you use, the end result is an `Array` of `PackageInfo` objects. These objects contain:

- `packageName`: The java package name of the application
- `label`: The name of the application
- `versionName`: The version name of this package, as specified by the manifest tag's `versionName` attribute
- `versionCode`: The version code for the application

along with other information detailed in the asdocs.




### Asynchronous retrieval

In order to retrieve a list of applications that are installed on the device call the `getInstalledApplicationsAsync()` function.

You can use either a callback passed to the function or listen for the `PackageManagerEvent.GET_INSTALLED_APPLICATIONS` event (or both)


Listening for the event involves adding a listener for `PackageManagerEvent.GET_INSTALLED_APPLICATIONS` and then processing the result in the handler:

```actionscript
PackageManager.service.addEventListener( 
    PackageManagerEvent.GET_INSTALLED_APPLICATIONS, 
    getInstalledApplicationsHandler 
);

PackageManager.service.getInstalledApplicationsAsync();


function getInstalledApplicationsHandler( event:PackageManagerEvent ):void
{
    var installedPackages:Array = event.data;
    if (installedPackages != null)
    {
        for each (var packageInfo:PackageInfo in installedPackages)
        {
            trace( packageInfo.packageName );
        }
    }
}
```	 


Alternatively you can do the similar thing with a callback:

```actionscript
PackageManager.service.getInstalledApplicationsAsync(
        function( installedPackages:Array ):void
        {
            if (installedPackages != null)
            {
                for each (var packageInfo:PackageInfo in installedPackages)
                {
                    trace( packageInfo.packageName );
                }
            }
        }
);
```


### Synchronous retrieval

You can also call `getInstalledApplications()` to directly retrieve an array of the application package information however be aware that this call may take some time.


```actionscript
var installedPackages:Array = PackageManager.service.getInstalledApplications();
if (installedPackages != null)
{
    for each (var packageInfo:PackageInfo in installedPackages)
    {
        trace( packageInfo.packageName );
    }
}
```