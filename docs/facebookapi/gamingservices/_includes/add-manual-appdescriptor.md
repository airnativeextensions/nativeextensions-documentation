
### Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
	<extensionID>com.distriqt.facebook.Core</extensionID>
	<extensionID>com.distriqt.facebook.Login</extensionID>
	<extensionID>com.distriqt.facebook.Share</extensionID>
	<extensionID>com.distriqt.facebook.GamingServices</extensionID>

	<extensionID>com.distriqt.Core</extensionID>
	<extensionID>com.distriqt.Bolts</extensionID>

	<extensionID>androidx.appcompat</extensionID>
	<extensionID>androidx.browser</extensionID>
	<extensionID>androidx.cardview</extensionID>
	<extensionID>androidx.core</extensionID>
	<extensionID>androidx.emoji2</extensionID>
	<extensionID>androidx.vectordrawable</extensionID>
	<extensionID>com.android.installreferrer</extensionID>
	<extensionID>com.jetbrains.kotlin</extensionID>
	<extensionID>com.google.code.gson</extensionID>
</extensions>
```



### Android

#### Manifest Additions

The Facebook Gaming Services extension doesn't require any manifest additions beyond the ones you have added for the other extensions.

Make sure you have added the requirements for the Core and Share extensions in particular.



### iOS 

#### Dynamic Frameworks

Facebook is based on a dynamic framework so you must include the framework and dependent swift libs in your application for signing by AIR.

To do this create a `Frameworks` directory at the top / root level of your application and ensure it is packaged with your AIR application.

If should contain any of the files in the supplied `Frameworks` directory (including `dylib` and `framework` directories) and any of the Facebook SDK components that you are using in your application.

The Core extension requires several frameworks so your `Frameworks` directory should contain:

```
FBAEMKit.framework
FBSDKCoreKit_Basics.framework
FBSDKCoreKit.framework
FBSDKGamingServicesKit.framework
FBSDKLoginKit.framework
FBSDKShareKit.framework
```


#### Info Additions

The Facebook Gaming Services extension doesn't require any info additions beyond the ones you have added for the other extensions.

