---
title: Delay Loading Extensions 
description: Improve application startup time using delay load
image: images/loading.png
authors: [ marchbold ]
tags: [delayload, airsdk, tips]
---

![](images/loading.png)

Startup time of an application is often key in retaining your users so it can be critical to make start time as short as possible.

One factor that can contribute to the startup time of an AIR application is loading the definitions for the functionality in native extensions. This is normally done by AIR automatically however with the latest AIR release you can now specify an option on an extension in your application to *delay load* the extension functionality. 

<!--truncate-->


The loading process consists of finding and loading the bytes from the `library.swf` within the extension, then parsing this library into the AS3 engine so that it's available when applications use symbols from within the extension. As the definitions for classes and interfaces contained within the extension aren't accessible before the extension is loaded you must ensure you have clear separation in your code structure of where you use the extensions functionality.



So we suggest separating the loading of the extensions and ensuring all of your usage of extensions are separated into classes that aren't accessed until after the load process is completed. 



## Enabling Delay Load


Firstly you will need to enable delayed loading of your extensions by editing your application descriptor and changing the extensions you wish to delay load to have the `delayLoad` attribute as below:

```xml
<extensionID delayLoad="true">com.distriqt.Core</extensionID>
```



:::caution 
With this attribute enabled the extension symbols will not be loaded automatically at startup. 

If you attempt to use a definition (a class or an interface) from within an extension before it is loaded then you will encounter a runtime error. 
:::

### Issues

It's important to understand the side effects of this delay load operation as you may have to restructure your code to support it. 

The first issue is that creating instances or calling static methods of a symbol defined in an extension will result in a runtime error. For example, a call to: 

```actionscript
Core.init();
```

would result in an error:

```
Error #1065: Variable com.distriqt.extension.core::Core is not defined.
```


The second issue can be more critical as it requires careful planning of your function definitions, particularly important for event handlers. 

If a function is defined with a parameter of a class from the extension, eg 


```actionscript
// Firstly load the extension ...

testFunction( ... );

function testFunction( param:SomeExtensionClass ):void
{

}
```

it will result in a verify error:

```
VerifyError: Error #1014: Class extension::SomeExtensionClass could not be found.
``` 

**Even though you have loaded the extension before using the function, the definition of the function causes an error.**

This demonstrates why it is important to separate the extensions functionality into a separate class that isn't accessed until the extension is loaded. 

i.e. if this function was moved into another class, say `TestClass`, then you could access this same functionality via the following pseudo code:

```actionscript
// Firstly load the extension ...

// Then use the extension functionality in the TestClass:
var test:TestClass = new TestClass();
test.testFunction( ... );
```

This way the definition of the function isn't used until after the extension is loaded and you won't encounter an error. 


## Loading an Extension

To load the extension you use methods of the `flash.external.ExtensionContext` class. Loading an extension is a synchronous process and requires the `extensionID` as a parameter:

```actionscript
ExtensionContext.loadExtension( extensionID, null );
```

Immediately after this call the symbols from the extension will be available so a call to `Core.init();` will now succeed.

This process may still take some time so it is suggested to not just have a series of `loadExtension` calls following one another but instead ensure time passes between each call as part of a load process. 






## Extension Information

There are a range of helper functionality available in the `ExtensionContext` class to help with loading extensions.


### Known Extensions

You can list the extensions that are contained in the application descriptor via the `ExtensionContext.knownExtensions` property. This property is an array of `extensionID` string values each representing an extension identifier listed in the `extensions` node of your application descriptor.

```actionscript
for each (var extensionID:String in ExtensionContext.knownExtensions)
{
    trace( extensionID );
}
```



### Extension Info

The `ExtensionInfo` class contains information about the state of a particular extension. 

You obtain the current information for an extension by calling `getExtensionInfo()`:

```actionscript
var info:ExtensionInfo = ExtensionContext.getExtensionInfo( extensionID );
```

This class contains a range of information (most of it is extracted from the extension itself) including:
- `extensionID`: The identifier for this extension;
- `name`: The extension name, as provided in the extension's XML descriptor file;
- `description`:  The extension description, as provided in the extension's XML descriptor file;
- `versionNumber`:  The extension version number, as provided in the extension's XML descriptor file;

Additionally it contains two properties useful for handling loading of extensions:

- `isDynamic`: A Boolean value indicating whether the extension is a 'dynamically loaded' extension or not, ie. whether the `delayLoad` attribute has been set to `true`;
- `isLoaded`: A Boolean value indicating whether the extension has been loaded or not;



